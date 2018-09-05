//extend or establish namespace object if in another file
var RCM$       = RCM$           || {};//top level regardless of file load order
RCM$.LibCc     = RCM$.LibCc     || {};//2nd level member regardless of file load order
RCM$.ThisAddon = RCM$.ThisAddon || {};//2nd level member regardless of file load order
/****
 * 'POPULATE' THE NAMESPACE - establish 3rd level members and define additional methods and properties
 *****/
/**
* RCM$.ThisAddon.Deployment - developers only; helps enforce our dev flow
* RCM$.ThisAddon.Deployment = Red Crow Methods Name Space > Add-on Template > Deployment
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
   var retrievedGoListRcdObj = RCM$.ThisAddon.GoListSvc.isGoListed(RCM$.ThisAddon.Enums.CURRENT_ADDON_VERSION, ScriptApp.getScriptId());
   if (!retrievedGoListRcdObj){
     Logger.log("Not listed. Creating new goListRcd...");
     var localGoListRcdObj = new GoListSvcRcdDef();
     localGoListRcdObj.initializeFromNothing();//also renames the script and it's description using standards based on goListStatus and newDate
     Logger.log("Writing goListRcd..."); //WRITE goListRcd
     var fullRcd = localGoListRcdObj.makeFullServiceRcdRow();
     writeGoListRcd(fullRcd);

     //Use new object to prime the properties so up to date if used later as they are in webhooks for slack
     Logger.log("Priming script properties...")
     RCM$.ThisAddon.GoListSvc.setScriptProperties(localGoListRcdObj,true);
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
})(RCM$.ThisAddon.Deployment = RCM$.ThisAddon.Deployment || {});

//RCM$.ThisAddon.Deployment.wipToast();
(function(nested) {
  /**
   * Toast message placeholder for future demos
   */
  nested.wipToast = function(durationSeconds) {
    SpreadsheetApp.getActive().toast("Volunteer today.","Nothing to do!", durationSeconds);
    return true;
  };
  return nested;
})(RCM$.ThisAddon.Deployment);

//END NAMESPACE
