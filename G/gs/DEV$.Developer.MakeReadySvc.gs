// G/gs/DEV$.Developer.MakeReadySvc.gs
//extend or establish namespace object if in another file
var DEV$       = DEV$           || {};//top level regardless of file load order
DEV$.Developer = DEV$.Developer || {};//2nd level member regardless of file load order;
/****
 * 'POPULATE' THE NAMESPACE - establish 3rd level members and define additional methods and properties
 *****/

//DEV$.Developer.MakeReadySvc.renameScript
(function (nested) {
  /**
  * renames current script with name given. refresh to see new name.
  * returns a files resource which is the metadata for a file
  */
  nested.renameScript = function(scriptId, newName, newDescription) {
    var fileId                = scriptId;
    var newTitle              = newName;
    var fileResource          = {
      'title': newTitle,
      'description': newDescription
    };
    return Drive.Files.patch(fileResource, fileId);
  };
  return nested;
})(DEV$.Developer.MakeReadySvc);

//DEV$.Developer.MakeReadySvc.createStandardName
(function (nested) {
  /**
  * returns name using standards based on semantic version rules and whether code is a registered script <>update
  */
  nested.createStandardName = function(goListStatus, newDate) {
    var standardName = undefined;
    switch (goListStatus) {
      case "TEST COPY":
        standardName = (DEV$.Developer.Enums.USER_FACING_NAME_OF_ADDON+ ' TC - ' +  DEV$.Developer.Enums.CURRENT_ADDON_VERSION + ' - ' + newDate);
        break;
      case "R CANDIDATE":
        standardName = (DEV$.Developer.Enums.USER_FACING_NAME_OF_ADDON+ ' RC - ' + DEV$.Developer.Enums.CURRENT_ADDON_VERSION + ' - ' + newDate);
        break;
      case "READY":
        standardName = DEV$.Developer.Enums.USER_FACING_NAME_OF_ADDON;
        break;
      default:
        standardName = "Unexpected goListStatus in renaming. Investigate.";
        break;
    } //end switch
    return standardName;
  };
  return nested;
})(DEV$.Developer.MakeReadySvc);

//END NAMESPACE

/****
* DEFINE CONSTANTS, CONSTRUCTS, AND CONTAINERS - literals, external keys or IDs, construct definitions for records
*****/
/**
* Format for a go list record.
* @constructor
*/
function MakeReadySvcRcdDef( year, month, weekNum, eventStampGMT, activeUser, statedDomain, addOnVersion, goListStatus, scriptId, scriptName, scriptDescription, scriptUrl) {
  this.year              = year;
  this.month             = month;
  this.weekNum           = weekNum;
  this.eventStampGMT     = eventStampGMT;
  this.activeUser        = activeUser;
  this.statedDomain      = statedDomain;
  this.addOnVersion      = addOnVersion;
  this.scriptId          = scriptId;
  this.goListStatus      = goListStatus;
  this.scriptName        = scriptName;
  this.scriptDescription = scriptDescription;
  this.scriptUrl         = scriptUrl;
}//construct MakeReadySvcRcdDef

//initializeMe - makeReadySvcRcd.initializeFromNothing();
MakeReadySvcRcdDef.prototype.initializeFromNothing = function() {
  var newDate            = new Date();
  this.year              = Utilities.formatDate(newDate, "GMT", "YYYY"); //displayYear
  this.month             = Utilities.formatDate(newDate, "GMT", "MM"); //displayMonth
  this.weekNum           = Utilities.formatDate(newDate, "GMT", "w"); //displayWeeNumber
  this.eventStampGMT     = Utilities.formatDate(newDate, "GMT", "yyyy-MM-dd' 'HH:mm:ss");//getGMTnowStamp
  this.activeUser        = Session.getActiveUser().getEmail();
  this.statedDomain      = getLiteral("currentStatedDomainCode");
  this.addOnVersion      = DEV$.Developer.Enums.CURRENT_ADDON_VERSION;
  this.scriptId          = ScriptApp.getScriptId(); //scriptId;
  this.goListStatus      = determineGoListStatus(this.addOnVersion, this.statedDomain);
  this.scriptDescription = createStandardDescription(this.goListStatus);
  this.scriptName        = renameThisScript(this.scriptId, this.goListStatus, newDate, this.scriptDescription);
  this.scriptUrl         = DriveApp.getFileById(ScriptApp.getScriptId()).getUrl(); //scriptUrl;
  return;
  //ENCLOSED FUNCTIONs=================================start
  /**
  *renames the script using the determined go list status
  */
  function renameThisScript(scriptId, goListStatus, newDate, newDescription){
    Logger.log("Creating standard name...");
    var newName = DEV$.Developer.MakeReadySvc.createStandardName(goListStatus, newDate);

    Logger.log("Renaming script to:\n'" + newName + "'...");
    DEV$.Developer.MakeReadySvc.renameScript(scriptId, newName, newDescription);
    return newName;
  }//end renameThisScript
  /**
  * returns script file description using standards based on given goListStatus
  */
  function createStandardDescription (goListStatus) {
    var standardDescription = undefined;
    switch (goListStatus) {
      case "TEST COPY":
        standardDescription = 'Renamed by DEV$.Developer.MakeReadySvc using Drive API. This script is a '+goListStatus+'. Publish ONLY to test as add-on. Never to push to store listing in current semantic version state.';
        break;
      case "R CANDIDATE":
      standardDescription = 'Renamed by DEV$.Developer.MakeReadySvc using Drive API. This script is a '+goListStatus+'. Publish ONLY to test as add-on. Never to push to store listing in current semantic version state.';
        break;
      case "READY":
      standardDescription = 'Renamed by DEV$.Developer.MakeReadySvc using Drive API. This script is '+goListStatus+' for publication as an add-on in this domain\'s store listing. This, Registered Script is one part of Red Crow Methods for Small Business by Red Crow Consulting.';
        break;
      default:
        standardDescription = "Unexpected goListStatus in renaming. Investigate.";
        break;
    } //end switch
    return standardDescription;
  }
  /**
  * determines the goListStatus by analyzing the semantic version
  * returns "TEST COPY", "R CANDIDATE", or "READY"
  */
  function determineGoListStatus(semanticVersion, statedDomain) {
    var goListStatus = '';
    //COUNT decimals and dashes in semantic version
    var stringLength = semanticVersion.length,
        currentDigit = 0,
        periodCount  = 0,
        hyphenCount  = 0;
    do{
      if (semanticVersion[currentDigit] === '.') {
        periodCount += 1;
      }
      if (semanticVersion[currentDigit] === '-') {
        hyphenCount += 1;
      }
      currentDigit +=1;
    } while (currentDigit < stringLength);

    //R CANDIDATE	if TESTING and NOT DA!, then is release candidate
    //READY	if semantic version has two decimals and NO - and NOT DA!

    if (((periodCount === 2) || (periodCount === 3)) && (((hyphenCount === 1) || (hyphenCount === 0)))) {
      if (statedDomain === "DA!") { //unregistered
        if ((periodCount === 3) && (hyphenCount === 1)) {
          goListStatus = 'TEST COPY';
        }
      } else { //registered
        if ((periodCount === 3) && (hyphenCount === 1)) {
          goListStatus = 'R CANDIDATE';
        }
        if ((periodCount === 2) && (hyphenCount === 0)) {
          goListStatus = 'READY';
        }
      }
    } else { //Invalid Semantic
      goListStatus = 'INVALID';
    }
    return goListStatus;
  } //end determineGoListStatus
  //ENCLOSED FUNCTIONs=================================end
}; //end initializeFromNothing
// //initialize - makeReadySvcRcd.initializeFromGiven(twoDRow);
// MakeReadySvcRcdDef.prototype.initializeFromGiven = function(twoDRow) {
//   this.year          = twoDRow[0][0];
//   this.month         = twoDRow[0][1];
//   this.weekNum       = twoDRow[0][2];
//   this.eventStampGMT = twoDRow[0][3];
//   this.activeUser    = twoDRow[0][4];
//   this.statedDomain  = twoDRow[0][5];
//   this.addOnVersion  = twoDRow[0][6];
//   this.scriptId      = twoDRow[0][7];
//   this.goListStatus  = twoDRow[0][8];
//   this.scriptName    = twoDRow[0][9];
//   this.scriptUrl     = twoDRow[0][10];
//   return;
// }; //end initializeFromGiven

// //makeFullServiceRcdRow - makeReadySvcRcd.makeFullServiceRcdRow();
// MakeReadySvcRcdDef.prototype.makeFullServiceRcdRow = function() {
//   var fullServiceRcdRow = [
//     [
//       this.year,
//       this.month,
//       this.weekNum,
//       this.eventStampGMT,
//       this.activeUser,
//       this.statedDomain,
//       this.addOnVersion,
//       this.scriptId,
//       this.goListStatus,
//       this.scriptName,
//       this.scriptUrl
//     ]
//   ];
//   return fullServiceRcdRow;//as two dimensional array
// };
