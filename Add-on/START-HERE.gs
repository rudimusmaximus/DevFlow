// SET THE DEVFLOW SEMANTIC VERSION & ENABLE DRIVE API
// USE THE MAKE TEST READY PROCESS
// 'SEED' THE RCM$ NAMESPACES
/**
 * This is parent namespace for Red Crow Methods. This add-on uses a 4 level namespace.
 * NAME$PACE.Grouping.Subset.function - LEVELS 1, 2, 3, and 4
 */
var RCM$ = (function(ns) {
    ns.author = "Raul Flores, Jr",
    ns.description = "All rights reserved. DevFlow will likely be open source with attribution. These components come from my private methods and will be modified as we get to open source version. This already is a stripped down version.";
  return ns;
})(RCM$ || {});
RCM$.ThisAddon = RCM$.ThisAddon || {};//2nd level member regardless of file load order
/****
 * 'POPULATE' THE NAMESPACE - establish 2nd level members with Enums
 * in other gs files we add level 3 with additional methods and properties
 *****/
/****
 * RCM$.ThisAddon = Red Crow Methods Name Space > This add-on > Subset member declarations
 */
(function (nested) {
  nested.Enums = {
    USER_FACING_NAME_OF_ADDON:            "DevFlow", //RCM$.Enums.USER_FACING_NAME_OF_ADDON
    //************************************************** SEMANTIC VERSIONING
    CURRENT_ADDON_VERSION:                "0.5.11",  //RCM$.ThisAddon.Enums.CURRENT_ADDON_VERSION *** used in Make Test Ready (GO LISTING) AND DEV FLOW **** START HERE TO SET SEM VER
    /****************************** EXTERNAL REFERENCE SHEETS USED IN ADD-ON'S ECOSYSTEM
     * e3.Analytics             = Analytics for this add-on //simplified for DevFlow use
     * e4.GoListSvc             =  goListed activity *** used in GO LISTING AND DEV FLOW ****
     */
    ANALYTICS_SHEET_ID:                   "1Zun1eviMoPS2HPUIUE1PhyHFFeTw2iXA9vM3pH2_INY",//Setup New until we can replace or complement with stackdriver approach,
    GO_LIST_SERVICE_SHEET_ID:             "1bhb2uJOF4JPXqMWqMMWHvO9NT4nmprX4-DazOG75xa4",//Setup New,
    //************************************************** ONE CODE BASE MUST ACCOUNT FOR DEPLOYMENTS INTO ONE OR MORE DOMAINS AND TEST COPIES (ALPHA) IN ANY DOMAIN
    RCC_REGISTERED_SCRIPT_ID_MKT:     '1EdAROkZV8jZmDrzAtfbjDWFinWPOlMT3JPVgcn-_RxXXcg87wJVIoBoi',
    RCC_REGISTERED_SCRIPT_ID_LNK:     'tbd',
    RCC_REGISTERED_SCRIPT_ID_GRP:     'tbd',
    RCM_REGISTERED_SCRIPT_ID_MKT:     '11Gzf_FjgohKQddB4Fk3cSTAfhUGfjdWof2WoolG-pS8-1uvRhIFiR9_K',
    RCM_REGISTERED_SCRIPT_ID_LNK:     '1h5JNPZUx9qn1fwTIdgAvCWjWqm2LkPHqkvYxDgT7aKpHE697VbWnXHM-',
    RCM_REGISTERED_SCRIPT_ID_GRP:     'tbd',


    REDCROWCONSULTING_STATED_DOMAIN_CODE: "@RCC",
    REDCROWMETHODS_STATED_DOMAIN_CODE:    "@RCM",
    DISPOSABLE_ALPHA_STATED_DOMAIN_CODE:  "DA!", //is unrecognized and likely a "disposable alpha script which could be in any domain and if so the user email will be a developer and give it away; note: this value is checked in go listing so change with care
    HTML_SIDEBAR_FILE:                    "Add-on/html/Sidebar.html",
    SIDEBAR_TITLE:                        'Welcome',

    HTML_NEW_VERSION_DIALOG:              "reserved for path when this functionality is available"
  };
  return nested;
})(RCM$.ThisAddon = RCM$.ThisAddon || {}); //creates level 2 branch
/**
 * RCM$.LibCc = Red Crow Methods Name Space > Libraries Copied > Subset member declarations
 */
(function (nested) {
  nested.description = "Add-on Template > Libraries Copied; Any libraries used as documented from their published specs. We incorporate the code rather than include for performance as recommended by google add-on guidelines.";
  return nested;
})(RCM$.LibCc = RCM$.LibCc || {}); //creates level 2 branch //it's level 3 member's are created as needed;
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

  var exitMemo = RCM$.ThisAddon.Deployment.goListTheCurrentScript(objRunStats);

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
} //end makeScriptTestReady()
