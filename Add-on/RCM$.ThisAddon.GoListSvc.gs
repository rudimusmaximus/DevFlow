//extend or establish namespace object if in another file
var RCM$       = RCM$           || {};//top level regardless of file load order
RCM$.LibCc     = RCM$.LibCc     || {};//2nd level member regardless of file load order
RCM$.ThisAddon = RCM$.ThisAddon || {};//2nd level member regardless of file load order;
/****
 * 'POPULATE' THE NAMESPACE - establish 3rd level members and define additional methods and properties
 *****/
/**
 * RCM$.ThisAddon.GoListSvc - part of the Red Crow Dev Flow
 * INTRODUCING 'GoListing' achieved via mini-service here in a namespace and run prior to testing or deployment post changes;
 * includes references to external G sheet for persistence of script information not available during user run time. The 'goListTheCurrentScript function' in Deployment.gs is run "
 * by the  by person making changes with edit access to script (while developers test alpha, release, and ready candidates, designated testers never touch the code and only test beta"
 * and premium deployments.).  The 'GoListing' process seeks to mostly automate a manual checkpoint to enforce semantic versioning and other naming conventions"
 * that make our process based anlytics more useful and improve the quality of our 'Red Crow Dev Flow' with various rules and standards to enforce"
 * Note: deployment consists in publishing to test in target sheets from registered and temporary scripts,"
 * for production users, it consists in versioning the script and publishing the registered script to the google developer dashboard"
 * Registered means code knows the scripts and all externals required like sheets, 3rd party webhooks, others as needed";
 * Level 3 description with enums
 * RCM$.ThisAddon.goListSvc = Red Crow Methods Name Space > Add-on Template > Go List Service
 */
(function (nested) {
  nested.description = "Add-on Template > go list service; RCM$.ThisAddon.GoListSvc - part of the Red Crow Dev Flow";
  return nested;
})(RCM$.ThisAddon.GoListSvc = RCM$.ThisAddon.GoListSvc || {});

//RCM$.ThisAddon.goListSvc.setScriptProperties
(function (nested) {
  /**
  * primes the script properties (name, id, version, url) leaving any existing script properties
  * returns status of PropertiesService call
  */
  nested.setScriptProperties = function(goListRcd,resetBoolean) {
    var x = PropertiesService.getScriptProperties().setProperties({
      "Script Name": goListRcd.scriptName,
      "Add-on Ver": goListRcd.addOnVersion,
      "Script ID": goListRcd.scriptId,
      "Script URL": goListRcd.scriptUrl
    },resetBoolean);
    return x;
  };
  return nested;
})(RCM$.ThisAddon.GoListSvc);

//RCM$.ThisAddon.goListSvc.renameScript
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
})(RCM$.ThisAddon.GoListSvc);

//RCM$.ThisAddon.goListSvc.createStandardName
(function (nested) {
  /**
  * returns name using standards based on semantic version rules and whether code is a registered script <>update
  */
  nested.createStandardName = function(goListStatus, newDate) {
    var standardName = undefined;
    switch (goListStatus) {
      case "TEST COPY":
        standardName = (RCM$.ThisAddon.Enums.USER_FACING_NAME_OF_ADDON+ ' TC - ' +  RCM$.ThisAddon.Enums.CURRENT_ADDON_VERSION + ' - ' + newDate);
        break;
      case "R CANDIDATE":
        standardName = (RCM$.ThisAddon.Enums.USER_FACING_NAME_OF_ADDON+ ' RC - ' + RCM$.ThisAddon.Enums.CURRENT_ADDON_VERSION + ' - ' + newDate);
        break;
      case "READY":
        standardName = RCM$.ThisAddon.Enums.USER_FACING_NAME_OF_ADDON;
        break;
      default:
        standardName = "Unexpected goListStatus in renaming. Investigate.";
        break;
    } //end switch
    return standardName;
  };
  return nested;
})(RCM$.ThisAddon.GoListSvc);

//RCM$.ThisAddon.goListSvc.isGoListed
(function (nested) {
  /**
  * checks if semantic version and scriptId has already been go listed
  * returns undefined if no records or no record hit; breaks on first find
  */
  nested.isGoListed = function(semanticVersion, scriptId){
    //GET GO LIST RECORDS
    var response = '';
    var key = RCM$.ThisAddon.Enums.GO_LIST_SERVICE_SHEET_ID;
    var destinationSS    = SpreadsheetApp.openById(key);
    var destinationSheet = destinationSS.getSheetByName("Go List").activate();
    var allGoListRcds    = destinationSheet.getDataRange().getValues();
    var rowsToSearch = allGoListRcds.length;
    var currentRecord = 1;//skip header row 0
    if (rowsToSearch == 1){
      response = undefined; //header only, no records to search; happens first run only
    } else {
      //sort by semantic version descending (which is text)
      //SEARCH VERSIONS, WHEN FIND, SEARCH SCRIPT ID, IF FOUND STOP AND GRAB
      do {
        if(semanticVersion === allGoListRcds[currentRecord][6]){
          if(scriptId === allGoListRcds[currentRecord][7]){
            //HIT
            var returnTwoDArray = [allGoListRcds[currentRecord]];
            response = returnTwoDArray;
            break;
          }
        }
        currentRecord +=1;
      } while (currentRecord < rowsToSearch);
      return response;
    }
    return response;
  };
  return nested;
})(RCM$.ThisAddon.GoListSvc);

//RCM$.ThisAddon.goListSvc.scriptGoNoGo
(function (nested) {
   /**
   * scriptGoNoGo makes sure script has been goListed for execution
   * if so, the script properties are primed from the stored go list record
   * this persists data not otherwise available at run time and makes our other integrations work better if we chose to create them
   * note: only a developer can goList a script; but at run time, the user can pull these records if they exist and use to prime workflow
   * returns true for go and false for noGo
   */
  nested.scriptGoNoGo = function() {
    var retrievedGoListRcdValues = RCM$.ThisAddon.GoListSvc.isGoListed(RCM$.ThisAddon.Enums.CURRENT_ADDON_VERSION, ScriptApp.getScriptId());
    if (retrievedGoListRcdValues) {
        var localGoListRcdObj = new GoListSvcRcdDef();
        localGoListRcdObj.initializeFromGiven(retrievedGoListRcdValues);
        RCM$.ThisAddon.GoListSvc.setScriptProperties(localGoListRcdObj, true);//prime the properties so up to date if used later as they are in certain other webhooks
        PropertiesService.getScriptProperties().setProperty("GoNoGo Status", 'Y');
        return true;
      } else {
        PropertiesService.getScriptProperties().setProperty("GoNoGo Status", 'N');
        return false;
      }
  }; //end scriptGoNoGo
  return nested;
})(RCM$.ThisAddon.GoListSvc);

//END NAMESPACE

/****
* DEFINE CONSTANTS, CONSTRUCTS, AND CONTAINERS - literals, external keys or IDs, construct definitions for records
*****/
/**
* Format for a go list record.
* @constructor
*/
function GoListSvcRcdDef( year, month, weekNum, eventStampGMT, activeUser, statedDomain, addOnVersion, goListStatus, scriptId, scriptName, scriptDescription, scriptUrl) {
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
}//construct GoListSvcRcdDef

//initializeMe - goListSvcRcd.initializeFromNothing();
GoListSvcRcdDef.prototype.initializeFromNothing = function() {
  var newDate            = new Date();
  this.year              = Utilities.formatDate(newDate, "GMT", "YYYY"); //displayYear
  this.month             = Utilities.formatDate(newDate, "GMT", "MM"); //displayMonth
  this.weekNum           = Utilities.formatDate(newDate, "GMT", "w"); //displayWeeNumber
  this.eventStampGMT     = Utilities.formatDate(newDate, "GMT", "yyyy-MM-dd' 'HH:mm:ss");//getGMTnowStamp
  this.activeUser        = Session.getActiveUser().getEmail();
  this.statedDomain      = getLiteral("currentStatedDomainCode");
  this.addOnVersion      = RCM$.ThisAddon.Enums.CURRENT_ADDON_VERSION;
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
    var newName = RCM$.ThisAddon.GoListSvc.createStandardName(goListStatus, newDate);

    Logger.log("Renaming script to:\n'" + newName + "'...");
    RCM$.ThisAddon.GoListSvc.renameScript(scriptId, newName, newDescription);
    return newName;
  }//end renameThisScript
  /**
  * returns script file description using standards based on given goListStatus
  */
  function createStandardDescription (goListStatus) {
    var standardDescription = undefined;
    switch (goListStatus) {
      case "TEST COPY":
        standardDescription = 'Renamed by cfmGoListSvc using Drive API. This script is a '+goListStatus+'. Publish ONLY to test as add-on. Never to push to store listing in current semantic version state.';
        break;
      case "R CANDIDATE":
      standardDescription = 'Renamed by cfmGoListSvc using Drive API. This script is a '+goListStatus+'. Publish ONLY to test as add-on. Never to push to store listing in current semantic version state.';
        break;
      case "READY":
      standardDescription = 'Renamed by cfmGoListSvc using Drive API. This script is '+goListStatus+' for publication as an add-on in this domain\'s store listing. This, Registered Script is one part of Red Crow Methods for Small Business by Red Crow Consulting.';
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
//initialize - goListSvcRcd.initializeFromGiven(twoDRow);
GoListSvcRcdDef.prototype.initializeFromGiven = function(twoDRow) {
  this.year          = twoDRow[0][0];
  this.month         = twoDRow[0][1];
  this.weekNum       = twoDRow[0][2];
  this.eventStampGMT = twoDRow[0][3];
  this.activeUser    = twoDRow[0][4];
  this.statedDomain  = twoDRow[0][5];
  this.addOnVersion  = twoDRow[0][6];
  this.scriptId      = twoDRow[0][7];
  this.goListStatus  = twoDRow[0][8];
  this.scriptName    = twoDRow[0][9];
  this.scriptUrl     = twoDRow[0][10];
  return;
}; //end initializeFromGiven

//makeFullServiceRcdRow - goListSvcRcd.makeFullServiceRcdRow();
GoListSvcRcdDef.prototype.makeFullServiceRcdRow = function() {
  var fullServiceRcdRow = [
    [
      this.year,
      this.month,
      this.weekNum,
      this.eventStampGMT,
      this.activeUser,
      this.statedDomain,
      this.addOnVersion,
      this.scriptId,
      this.goListStatus,
      this.scriptName,
      this.scriptUrl
    ]
  ];
  return fullServiceRcdRow;//as two dimensional array
};
