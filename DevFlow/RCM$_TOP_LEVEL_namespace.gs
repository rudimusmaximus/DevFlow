
//extend or establish namespace object if in another file
var RCM$       = RCM$           || {};//top level regardless of file load order
RCM$.ThisAddon = RCM$.ThisAddon || {};//2nd level member regardless of file load order
/****
 * 'POPULATE' THE NAMESPACE - establish 3rd level members and define additional methods and properties
 *****/
/****
 *
 * RCM$.ThisAddon = Red Crow Methods Name Space > This add-on > Subset member declarations
 */
(function (nested) {
  nested.Enums = {
    USER_FACING_NAME_OF_ADDON       : "DevFlow", //RCM$.Enums.USER_FACING_NAME_OF_ADDON
    //************************************************** SEMANTIC VERSIONING
    CURRENT_ADDON_VERSION           : "0.3.0-makeTestReady.3",  //RCM$.ThisAddon.Enums.CURRENT_ADDON_VERSION *** used in GO LISTING AND DEV FLOW ****
    /****************************** EXTERNAL REFERENCE SHEETS USED IN ADD-ON'S ECOSYSTEM
     * e3.processAnalytics      = Process based analytics for this add-on //simplified for DevFlow use
     * e4.GoListSvc             =  goListed activity *** used in GO LISTING AND DEV FLOW ****
     */
    ANALYTICS_SHEET_ID              : "1Zun1eviMoPS2HPUIUE1PhyHFFeTw2iXA9vM3pH2_INY",//Setup New until we can replace or complement with stackdriver approach,
    GO_LIST_SERVICE_SHEET_ID        : "1bhb2uJOF4JPXqMWqMMWHvO9NT4nmprX4-DazOG75xa4",//Setup New,
    //************************************************** ONE CODE BASE MUST ACCOUNT FOR DEPLOYMENTS INTO ONE OR MORE DOMAINS AND TEST COPIES (ALPHA) IN ANY DOMAIN
    RCC_REGISTERED_SCRIPT_ID : '1EdAROkZV8jZmDrzAtfbjDWFinWPOlMT3JPVgcn-_RxXXcg87wJVIoBoi',
    RCM_REGISTERED_SCRIPT_ID : '11Gzf_FjgohKQddB4Fk3cSTAfhUGfjdWof2WoolG-pS8-1uvRhIFiR9_K',
    REDCROWCONSULTING_STATED_DOMAIN_CODE : "@RCC",
    REDCROWMETHODS_STATED_DOMAIN_CODE    : "@RCM",
    DISPOSABLE_ALPHA_STATED_DOMAIN_CODE  : "DA!", //is unrecognized and likely a "disposable alpha script which could be in any domain and if so the user email will be a developer and give it away; note: this value is checked in go listing so change with care
    HTML_SIDEBAR : "placeholder for path to sidebar for main welcome start workflow"
  };
  return nested;
})(RCM$.ThisAddon = RCM$.ThisAddon || {}); //creates level 2 branch

//ABOVE IS FROM G/namespace_RCM$.ThisAddon.gs BRING THIS BACK AND AS A NEW LINE BUT FOR DEVFLOW'S SHEET ADDON H2 HIDE AND OBSCURE MY RCMS? WHEN READY CREATE A NEW REPO? OR MOVE TO THE DEVFLOW?
//CONFER WITH RK AND JDV

/**
 * Function that describes the namespaces without and with functions by writing to the log a stringified object
 */
function logNamespaces() {
  var rcmStringified = JSON.stringify(RCM$, function(key, val) { return (typeof val === 'function') ? '[function]' : val; }, 3);
  Logger.log('Greetings, \n   Add-on: '+RCM$.ThisAddon.Enums.USER_FACING_NAME_OF_ADDON+' Ver: '+RCM$.ThisAddon.Enums.CURRENT_ADDON_VERSION+'\n   Template: '+RCM$.CoreOne.name+' Ver: '+RCM$.CoreOne.Enums.SEMANTIC_VERSION_OF_TEMPLATE);
  Logger.log('\n-----RCM$ WITHOUT FUNCTIONS-----');
  Logger.log(JSON.stringify(RCM$,null,3));
  Logger.log('\n-----RCM$ WITH FUNCTIONS-----');
  Logger.log(rcmStringified);
  var jsonObject = JSON.parse(rcmStringified);
  return true;
}
/****
 * 'SEED' THE NAMESPACES
 *****/
/**
 * This is parent namespace for Red Crow Methods. This add-on uses a 4 level namespace.
 * NAME$PACE.Grouping.Subset.function - LEVELS 1, 2, 3, and 4
 */
var RCM$ = (function(ns) {
    ns.author = "Raul Flores, Jr",
    ns.description = "All rights reserved.";
  return ns;
})(RCM$ || {});
/****
 * DECLARE THE NESTED NAMESPACES  ***  NAME$PACE.Grouping.Subset.function - LEVELS 1, 2, 3, and 4
 *****/
/**
 * RCM$.CoreOne = Red Crow Methods Name Space > Add-on Template > Subset member declarations
 */
(function (nested) {
  nested.name = "RCM Process Based Template 'CoreOne'",
  nested.description = "Add-on Template declaration. See RCM$.CoreOne.*.gs for level 3 members. Cores are intended to be included as submodule components to add-on instances. They are not goListed unless as part of an add-on."
                        +" GitKraken module inclusion of these Cores provides for reuse-able code not to be modified by add-on. Files required to be customized are provided as ZOMBIE*.gs or .html with all file contents commented out."
                        +" Add-ons copy the ZOMBIES and re-enable the code. Then modify per the add-on's life-cycle. This way the add-ons will not lose work if the core is updated.",
  nested.Enums = {
    SEMANTIC_VERSION_OF_TEMPLATE : "see repo 'CoreOne'",
    HTML_NEW_VERSION_DIALOG      : "G/CoreOne-html/New-Version-Dialog",
    HTML_ONLINE_CHAT             : "G/CoreOne-html/OnlineChat",
    HTML_SUBSCRIPTION_PLUS_LINKS : "G/CoreOne-html/SubscriptionPlusLinks"
  };
  return nested;
})(RCM$.CoreOne = RCM$.CoreOne || {});//creates level 2 branch  // it's level 3 members  {Containers:{}, Deployment:{}, GoListSvc:{}, MainCode:{}, Menu:{}, Meta:{}, Process:{}, Sub:{} });
/**
 * RCM$.LibCc = Red Crow Methods Name Space > Libraries Copied > Subset member declarations
 */
(function (nested) {
  nested.description = "Add-on Template > Libraries Copied; Any libraries used as documented from their published specs. We incorporate the code rather than include for perfermance as recommended by google add-on guidelines.";
  return nested;
})(RCM$.LibCc = RCM$.LibCc || {}); //creates level 2 branch //it's level 3 mmbers are created as needed starting with ArrayLib:{};
