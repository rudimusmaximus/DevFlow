
/*******************************
* A custom function that gets the local now stamp formatted like
* this for example "2015.02.12 at 10:43:51 PM CST".
*
* @return {"text time stamp with local time zone"}
*/
function getLocalTimeStamp() {
  var timeStamp = new Date();
  var displayStamp = Utilities.formatDate(timeStamp, SpreadsheetApp.getActive().getSpreadsheetTimeZone(), "yyyy.MM.dd 'at' hh:mm:ss a z");
  return displayStamp;
} //end getLocalTimeStamp()

function getGMTnowStamp() {
  // This formats the date as Greenwich Mean Time in the format
  // year-month-dateThour-minute-second.
  var formattedDate = Utilities.formatDate(new Date(), "GMT", "yyyy-MM-dd' 'HH:mm:ss");

  return formattedDate;

} //end getGMTnowStamp()

/**
 * This function instantiates an object to capture the runtime analytics.
 * These are started with designated events and before closing, used to build an exit memo and other fields
 * to insert a timestamped event tracking entry in a shared LIVE analytics sheet.
 * <pre>
 * Usage example:
 *
 * //START ANALYTICS - our event scheme
 * var objRunStats = startAnalytics();
 * var stringifiedObjRunStats = JSON.stringify(objRunStats);
 * Logger.log("Function execution result is: " + stringifiedObjRunStats);
 * </pre>
 *
 * @return {object} genericObjRunStats - Custom fields and sub objects for tracking performance. Sub objects include sheet actions and dialogue tracking.
 * <pre>
 * The generated object is passed through the stack to collect and generate stats on time, counts, exception reasons, and user interactions
 * </pre>
 */
function startAnalytics() {
  //prime sheet fields - numHidden, numDeleted, numCreated, numMadeVisible
  var sheetActionsObj    = new sheetActionsObjDef (0,0,0,0);

  //prime ux fields - uxCount, uxReasonChain, uxLastStart, uxSecs
  var dialogueObj        = new dialogueObjDef (0,"",new Date().getTime(),0);

  //prime full run stats object - startTime, sheetActionsObj, nextSteps, successBoolean, exceptionCount, exceptionReasonChain, dialogueObj, netSecs
  var genericObjRunStats = new ObjRunStatsDef(new Date().getTime(),sheetActionsObj,"...\n",0,0,"",dialogueObj,0);

  return genericObjRunStats;
}

/**
 * Returns hardcoded message so we can test with existing log
 *
 * @return {string} always response as this was repurposed
 */
function getCurrentLoB(){
  //removed for devflow use
  return "Repurposed for DevFlow";
}//end getCurrentLoB

//makeDuration(startTime) returns duration in s.ms ;
function makeDuration(startTime){
  var endTime = (new Date().getTime());
  var runTime = (endTime - startTime)/1000;
//  var duration = runTime.toFixed(3);
//  return duration;
  return runTime;
}
/**
 * Function that describes the namespaces without and with functions by writing to the log a stringified object
 */
function logNamespaces() {
  var rcmStringified = JSON.stringify(RCM$, function(key, val) { return (typeof val === 'function') ? '[function]' : val; }, 3);
  Logger.log('\n-----RCM$ WITHOUT FUNCTIONS-----');
  Logger.log(JSON.stringify(RCM$,null,3));
  Logger.log('\n-----RCM$ WITH FUNCTIONS-----');
  Logger.log(rcmStringified);
  var jsonObject = JSON.parse(rcmStringified);
  return true;
}
