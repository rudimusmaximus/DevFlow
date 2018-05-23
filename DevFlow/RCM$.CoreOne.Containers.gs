//extend or establish namespace object if in another file
var RCM$     = RCM$         || {};//top level regardless of file load order
RCM$.CoreOne = RCM$.CoreOne || {};//2nd level member regardless of file load order
/****
 * 'POPULATE' THE NAMESPACE - establish 3rd level members and define additional methods and properties
 *****/
/**
* RCM$.CoreOne.Containters - this is for constructors, constants/literals needing to be integrated into enums, and special object containers
* there are also some functions that may need to be moved to a Util or some other appropriate spot (see above)
* Level 3 description with enums
* RCM$.CoreOne.NewNew = Red Crow Methods Name Space > Add-on Template > New New
*/
(function (nested) {
 nested.description = "Add-on Template > Containers; WIP Con-stants-structs-tainers";
 nested.Enums = {
   AN_EXAMPLE: "EXAMPLE" //The example value when referenced
 };
 return nested;
})(RCM$.CoreOne.Containers = RCM$.CoreOne.Containers || {});
/****
 * BEGIN WORKING CODE NOT YET INCORPORATED TO NAMESPACING
 *****/
/**
 *  Returns the requested hardcoded literal as a string when logic is required
 * to determine. otherwise, use appropriate Enums.
 *
 * @param  {string} requestedField - field name of hard coded value for curent version of CF Maker
 * @return {string} responseString - the value associated with the requested field name.
 */
function getLiteral(requestedField) {
  var response = "";
  switch (requestedField) {
    case "currentStatedDomainCode":
        //STATED DOMAINS are unique to the domain the script is deployed from (assumed same id when published via developer dashboard)
        // if not set at deployment, undregistered scripts will be treated as a disposable alhpa, meaning the script is a test copy and not a script file that gets pushed to a production domain (ie published to the store)
        var scriptId = ScriptApp.getScriptId();
        if (scriptId === RCM$.ThisAddon.Enums.RCC_REGISTERED_SCRIPT_ID) {
            response = RCM$.ThisAddon.Enums.REDCROWCONSULTING_STATED_DOMAIN_CODE;
            break;
        } else if (scriptId === RCM$.ThisAddon.Enums.RCM_REGISTERED_SCRIPT_ID) {
            response = RCM$.ThisAddon.Enums.REDCROWMETHODS_STATED_DOMAIN_CODE;
            break;
        };
        response = RCM$.ThisAddon.Enums.DISPOSABLE_ALPHA_STATED_DOMAIN_CODE; //is unrecognized and likely a "disposable alpha script which could be in any domain and if so the user email will be a developer and give it away; note: this value is checked in go listing so change with care
        break;
    default:
        response = "Requested field not defined among literals.";
        break;
  } //end switch
  return response;
} //end getLiteral


/**
 * Returns the requested hardcoded literal as a string based on statedDomainCode.
 *
 * @param  {string} requestedField - field name of hard coded value for curent version of CF Maker
 * @return {string} responseString - the value associated with the requested field name.
 */
function getCurrentStatedDomainDecode(statedDomainCode) {
    var response = "Requested field not defined among constants.";
    switch (statedDomainCode) {
        case "@RCC": // redcrowconsulting
            response = "redcrowconsulting.com";
            break;
        case "@RCM": // redcrowmethods CFM Slack Webhook
            response = "redcrowmethods.com";
            break;
        default: //"DA!" and all others
            response = '"DA!" _see username_';
            break;
    } //end switch
    return response;
} //end getCurrentStatedDomainDecode
/**
 * object construct for run stats obj member
 * @constructor
 */
function sheetActionsObjDef (numHidden, numDeleted, numCreated, numMadeVisible){
  this.numHidden      = numHidden;
  this.numDeleted     = numDeleted;
  this.numCreated     = numCreated;
  this.numMadeVisible = numMadeVisible;
}
/**
 * object construct for run stats obj member
 * @constructor
 */
function dialogueObjDef (uxCount, uxReasonChain, uxLastStart, uxSecs){
  this.uxCount         = uxCount;
  this.uxReasonChain   = uxReasonChain;
  this.uxLastStart     = uxLastStart;
  this.uxSecs          = uxSecs;

}
/**
 * object construct for run stats
 * @constructor
 */
function ObjRunStatsDef (startTime, sheetActionsObj, nextSteps, successBoolean, exceptionCount, exceptionReasonChain, dialogueObj, netSecs){
  this.startTime       = startTime;
  this.sheetActionsObj = sheetActionsObj;
  this.nextSteps       = nextSteps;
  this.successBoolean  = successBoolean;//overall go,view,or function click success 0 false 1 true
  this.exceptionCount  = exceptionCount;//collects exception count
  this.exceptionReasonChain = exceptionReasonChain;
  this.dialogueObj     = dialogueObj;
  this.netSecs         = netSecs;
}
//hidden plus 1 - objRunStats.incrementNumHidden();
ObjRunStatsDef.prototype.incrementNumHidden = function(){
  this.sheetActionsObj.numHidden += 1;
  return this.sheetActionsObj.numHidden;
};
//deleted plus 1 - objRunStats.incrementNumDeleted();
ObjRunStatsDef.prototype.incrementNumDeleted = function(){
  this.sheetActionsObj.numDeleted += 1;
  return this.sheetActionsObj.numDeleted;
};
//created plus 1 - objRunStats.incrementNumCreated();
ObjRunStatsDef.prototype.incrementNumCreated = function(){
  this.sheetActionsObj.numCreated += 1;
  return this.sheetActionsObj.numCreated;
};
//made visible plus 1 - objRunStats.incrementNumMadeVisible();
ObjRunStatsDef.prototype.incrementNumMadeVisible = function(){
  this.sheetActionsObj.numMadeVisible += 1;
  return this.sheetActionsObj.numMadeVisible;
};
//appendNextSteps - objRunStats.appendNextSteps();
ObjRunStatsDef.prototype.appendNextSteps = function(appendText){
  this.nextSteps += appendText;
  return this.nextSteps;
};
//successBoolean reset to 0 - objRunStats.failSuccessBoolean();
ObjRunStatsDef.prototype.failSuccessBoolean = function(){
  this.successBoolean = 0;
  return this.successBoolean;
};
//successBoolean plus 1 - objRunStats.incrementSuccessBoolean();
ObjRunStatsDef.prototype.incrementSuccessBoolean = function(){
  this.successBoolean += 1;
  return this.successBoolean;
};
//exceptionCount plus 1 - objRunStats.incrementExceptionCount(reason);
ObjRunStatsDef.prototype.incrementExceptionCount = function(reason){
  this.exceptionCount += 1;
  this.exceptionReasonChain += "\nException reason chain->"+this.exceptionCount + "."+reason;
  return this.exceptionCount;
};
//uxCount plus 1 - objRunStats.startUxTimeAndIncrementUxCount(reason);
ObjRunStatsDef.prototype.startUxTimeAndIncrementUxCount = function(reason){
  this.dialogueObj.uxLastStart = new Date().getTime();//reset last start
  this.dialogueObj.uxCount += 1;
  this.dialogueObj.uxReasonChain += "\nDialogue reason chain->"+this.dialogueObj.uxCount + ".ASK: "+reason;
  return this.dialogueObj.uxCount;
};
ObjRunStatsDef.prototype.stopUxTime = function(userResponse){
  this.dialogueObj.uxReasonChain += " ANSWER: "+userResponse;
  var latestDuration = makeDuration(this.dialogueObj.uxLastStart);
  this.dialogueObj.uxSecs += latestDuration; //accumulate uxSecs by calculating duration since last uxstart
  return this.dialogueObj.uxSecs;
};
/**
 * buildExitMemo - objRunStats.buildExitMemo(localReason)
 * builds the text that goes into exit memo based on what
 * local reason is stated when called and what has been placed in the
 * objRunStats, so a single line with sheet actions followed by local
 * given reason and and additional line for exceptions reason chain
 * and/or dialog reason chain as required
 */
 ObjRunStatsDef.prototype.buildExitMemo = function(reason){
  //local status
  var exitMemo = "STATUS: "+reason;

  //sheetactions
  exitMemo += '\nSHEETS: '+this.sheetActionsObj.numHidden+' hidden, '
                         +this.sheetActionsObj.numDeleted+' deleted, '
                         +this.sheetActionsObj.numCreated+' created, '
                         +this.sheetActionsObj.numMadeVisible+ ' made visible';
  //exceptions if present
  if(this.exceptionCount > 0){//append exception reason chain
    exitMemo += this.exceptionReasonChain;
  }
  //dialogues if present
  if(this.dialogueObj.uxCount >0){//append dialogue ux reason chain
    exitMemo += this.dialogueObj.uxReasonChain;
  }
  return exitMemo;
};

/**
 * Format for an analytics entry.
 * @constructor
 */
function eventLoggingRowDef( year, month, weekNum, eventStampGMT, activeUser, statedDomain, addOnVersion, currentLoB, currentProcessStep, subStep, durationSecondsMs, exitMemo, externalOutput, success, error, uxCount, uxSecs, netSecs) {
  this.year                  = year;
  this.month                 = month;
  this.weekNum               = weekNum;
  this.eventStampGMT         = eventStampGMT;
  this.activeUser            = activeUser;
  this.statedDomain          = statedDomain;
  this.addOnVersion          = addOnVersion;
  this.currentLoB            = currentLoB;
  this.currentProcessStep    = currentProcessStep;
  this.subStep               = subStep;
  this.durationSecondsMs     = durationSecondsMs;
  this.exitMemo              = exitMemo;
  this.externalOutput        = externalOutput;
  this.success               = success;
  this.error                 = error;
  this.uxCount               = uxCount;
  this.uxSecs                = uxSecs;
  this.netSecs               = netSecs;
}//construct eventLoggingRowDef

function getFullEventRow (givenStartTime, givenCurrentProcessStep, givenSubStep, statedExitMemo, statedExternalOutput, sucessBoolean, errorCount, storeduxCount, storedUxSecs, storedNetSecs){
  var displayYear         = Utilities.formatDate(new Date(), "GMT", "YYYY");//displayYear
  var displayMonth        = Utilities.formatDate(new Date(), "GMT", "MM");//displayMonth
  var displayWeekNumber   = Utilities.formatDate(new Date(), "GMT", "w");//displayWeeNumber

  //instantiate the construct and load it with data
  var eventObj = new eventLoggingRowDef (displayYear,
                                         displayMonth,
                                         displayWeekNumber,
                                         getGMTnowStamp(),
                                         Session.getActiveUser().getEmail(),
                                         getLiteral("currentStatedDomainCode"),
                                         RCM$.ThisAddon.Enums.CURRENT_ADDON_VERSION,
                                         getCurrentLoB(),
                                         givenCurrentProcessStep,
                                         givenSubStep,
                                         makeDuration(givenStartTime),
                                         statedExitMemo,
                                         statedExternalOutput,
                                         sucessBoolean,
                                         errorCount,
                                         storeduxCount,
                                         storedUxSecs,
                                         storedNetSecs);
  //overWrite storedNetSecs (now netSecs)
  eventObj.netSecs = (eventObj.durationSecondsMs - eventObj.uxSecs);

  var eventLoggingRow = [[eventObj.year,
                          eventObj.month,
                          eventObj.weekNum,
                          eventObj.eventStampGMT,
                          eventObj.activeUser,
                          eventObj.statedDomain,
                          eventObj.addOnVersion,
                          eventObj.currentLoB,
                          eventObj.currentProcessStep,
                          eventObj.subStep,
                          eventObj.durationSecondsMs,
                          eventObj.exitMemo,
                          eventObj.externalOutput,
                          eventObj.success,
                          eventObj.error,
                          eventObj.uxCount,
                          eventObj.uxSecs,
                          eventObj.netSecs]];


  return eventLoggingRow;//as two dimensional array
} //end getFulleventRow
/**
 * takes a loaded event logging row and writes it to this the master tracking
 * can use this in one chained call to write to event log
 *  trackAnalytics(getFullEventRow(startTime,"stated step","stated subStep","Exit Memo","Name of External Output",1,0,"",objRunStats.dialogueObj.uxCount, objRunStats.dialogueObj.uxSecs, objRunStats.netSecs));
 */
function trackAnalytics(eventLoggingRow){
  //GET TRACKING SHEET
  var key = RCM$.ThisAddon.Enums.ANALYTICS_SHEET_ID;
  var destinationSS = SpreadsheetApp.openById(key);
  var destinationSheet = destinationSS.getSheetByName("Event Log").activate();
  destinationSheet.insertRowBefore(2);
  destinationSheet.getRange("A2:R2").setValues(eventLoggingRow);
}
/**
 * object construct for resetPivot counts
 * @constructor
 */
function pivotFactsDef (cellReportedNumberOfNewRecords, numberOfExtraRows, firstExtraRow){
  this.cellReportedNumberOfNewRecords = cellReportedNumberOfNewRecords;
  this.numberOfExtraRows              = numberOfExtraRows;
  this.firstExtraRow                  = firstExtraRow;
}
/**
 * object construct for Transaction "Drill Down" variables
 * @constructor
 */
function objTransDrillDownDef (focusCategory, cashFlowMonth, focusPeriodStartDate, focusPeriodEndDate, controlTotal, reportedCategorySum,queryCell){
  this.focusCategory = focusCategory;
  this.cashFlowMonth = cashFlowMonth;
  this.focusPeriodStartDate = focusPeriodStartDate;
  this.focusPeriodEndDate = focusPeriodEndDate;
  this.controlTotal = controlTotal;
  this.reportedCategorySum = reportedCategorySum;
  this.queryCell = queryCell;
}
/**
 * Response object, captures UI responses along with an answerString for a function to pass upstream.
 * @constructor
 */
function UserResponseObjDef_(responseAction, answerString){
  this.responseAction   = responseAction;
  this.answerString     = answerString;
}

/****
 * END WORKING CODE NOT YET INCORPORATED TO NAMESPACING
 *****/
