//extend or establish namespace object if in another file
var RCM$     = RCM$         || {};//top level regardless of file load order
RCM$.CoreOne = RCM$.CoreOne || {};//2nd level member regardless of file load order
/****
 * 'POPULATE' THE NAMESPACE - establish 3rd level members and define additional methods and properties
 *****/
/**
* RCM$.CoreOne.Deployment - developers only; helps enforce our proprietary dev flow
* RCM$.CoreOne.Deployment = Red Crow Methods Name Space > Add-on Template > Deployment
*/
(function (nested) {
 nested.description = "Red Crow Methods Name Space > Development Flow > Deployment; developers only; helps enforce our proprietary dev flow";
 /**
  * A developer only function doing the work of a global function of the same name which is invoked manually
  * @param {object} objRunStats -
  */
 nested.goListTheCurrentScript = function (objRunStats){
   Logger.log("Setting 'GoNoGo Status' to 'N'...");
   PropertiesService.getScriptProperties().setProperty('GoNoGo Status', 'N');
   //GO LIST IF NOT ALREADY
   Logger.log("Checking if already goListed...");
   var retrievedGoListRcdObj = RCM$.CoreOne.GoListSvc.isGoListed(RCM$.ThisAddon.Enums.CURRENT_ADDON_VERSION, ScriptApp.getScriptId());
   if (!retrievedGoListRcdObj){
     Logger.log("Not listed. Creating new goListRcd...");
     var localGoListRcdObj = new GoListSvcRcdDef();
     localGoListRcdObj.initializeFromNothing();//also renames the script and it's description using standards based on goListStatus and newDate
     Logger.log("Writing goListRcd..."); //WRITE goListRcd
     var fullRcd = localGoListRcdObj.makeFullServiceRcdRow();
     writeGoListRcd(fullRcd);

     //Use new object to prime the properties so up to date if used later as they are in webhooks for slack
     Logger.log("Priming script properties...")
     RCM$.CoreOne.GoListSvc.setScriptProperties(localGoListRcdObj,true);
     PropertiesService.getScriptProperties().setProperty("GoNoGo Status", 'Y');

     //use new object to create a matching target sheet for testing ONLY if not a production READY go list
     if(localGoListRcdObj.goListStatus === 'READY'){
       Logger.log("This is a production deployment. No matching test sheet required.")
     } else {
       Logger.log("Creating matching target Sheet for testing... \n");
       var targetSheetForTesting = SpreadsheetApp.create(localGoListRcdObj.scriptName, 1, 1);//small empty sheet with our matching name
       Logger.log("Sheet is at "+ targetSheetForTesting.getUrl());
     }

     var exitMemo = objRunStats.buildExitMemo("Renamed script, created goListRcd, file link " + localGoListRcdObj.scriptUrl);
   } else {
     //DUPLICATE or ALREADY LISTED
     objRunStats.incrementExceptionCount("Duplicate, Already Listed, No record created. Script not renamed.");
     var loggingMessage = "Did you forget to change your version or did you attempt to go list twice?\nNo record created.";
     var exitMemo = objRunStats.buildExitMemo(loggingMessage);
   }//end duplicate or already listed logic
 return exitMemo;
    //ENCLOSED FUNCTION
   /*
   *takes a loaded goListRcd row in 2D array form and writes it to the goListSpreadSheet
   */
   function writeGoListRcd(fullRcdIn2DForm) {
     //GET TRACKING SHEET
     var key = RCM$.ThisAddon.Enums.GO_LIST_SERVICE_SHEET_ID;
     var destinationSS = SpreadsheetApp.openById(key);
     var destinationSheet = destinationSS.getSheetByName("Go List").activate();
     destinationSheet.insertRowBefore(2);
     destinationSheet.getRange("A2:K2").setValues(fullRcdIn2DForm);
     return true;
   }//end enclosed writeGoListRcd
 };
 return nested;
})(RCM$.CoreOne.Deployment = RCM$.CoreOne.Deployment || {});
//END NAMESPACE

/****
 * BEGIN WORKING CODE NOT YET INCORPORATED TO NAMESPACING
 *****/
/**
 * DEVELOPER ONLY This function renames the script using standards after examining the semantic version you set in RCM$.ThisAddon.Enums.CURRENT_ADDON_VERSION
 * A goListSvcRcd is created and written to a sheet to persist script name and url. These records "goList" the scriptId+semanticVersion for Make Ready actions and if desired for starting the workflow.
 * Once the workflow finds the record in a goNoGo call, then the script properties are primed with the details of the goListSvcRcd.
 * This allows for various integrations to reflect information that is not otherwise avialable to the user at run time using an installed and enabled add-on
 * The function is called once manually from the web script editor. It writes feedback in the view log for confirmation.
 */
function makeScriptTestReady() {//formally goListTheCurrentScript
  //Logger.log(JSON.stringify(e,null, 4));
  Logger.log("Starting analytics...");
  var objRunStats = startAnalytics(); //START ANALYTICS
  objRunStats.incrementSuccessBoolean();

  var exitMemo = RCM$.CoreOne.Deployment.goListTheCurrentScript(objRunStats);

  //CLOSE SUCCESSFUL OR NOT
  if (objRunStats.exceptionCount === 0) {
    Logger.log("Completing successfully.");
  } else {
    Logger.log("Completing with exception");
  }
  Logger.log("Tracking analytics...");
  trackAnalytics(getFullEventRow(objRunStats.startTime, "Go list a script", "developerAction: G Web Editor > 'goListTheCurrentScript'", exitMemo, objRunStats.successBoolean, objRunStats.exceptionCount, "Event log entry", objRunStats.dialogueObj.uxCount, objRunStats.dialogueObj.uxSecs, objRunStats.netSecs));
  Logger.log(exitMemo);

  if(objRunStats.exceptionCount > 0){
    throw "Exception! Please review the log.";
  }
} //end goListTheCurrentScript()

/****
 * END WORKING CODE NOT YET INCORPORATED TO NAMESPACING
 *****/
