/****
 * 'SEED' THE NAMESPACES
 *****/
/**
 * This is parent namespace for Red Crow Methods. This add-on uses a 4 level namespace.
 * NAME$PACE.Grouping.Subset.function - LEVELS 1, 2, 3, and 4
 */
var RCM$ = (function(ns) {
    ns.author = "Raul Flores, Jr",
    ns.description = "All rights reserved. DevFlow will likely be open source with attribution. These components come from my private methods and will be modified as we get to open source version. This already is a stripped down version.";
  return ns;
})(RCM$ || {});
/****
 * 'POPULATE' THE NAMESPACE - establish 2nd level members with Enums
 * in other gs files we add level 3 with additional methods and properties
 *****/
/****
 *
 * RCM$.ThisAddon = Red Crow Methods Name Space > This add-on > Subset member declarations
 */
(function (nested) {
  nested.Enums = {
    USER_FACING_NAME_OF_ADDON       : "DevFlow", //RCM$.Enums.USER_FACING_NAME_OF_ADDON
    //************************************************** SEMANTIC VERSIONING
    CURRENT_ADDON_VERSION           : "0.5.0-restartMenu.1",  //RCM$.ThisAddon.Enums.CURRENT_ADDON_VERSION *** used in Make Test Ready (GO LISTING) AND DEV FLOW ****
    /****************************** EXTERNAL REFERENCE SHEETS USED IN ADD-ON'S ECOSYSTEM
     * e3.Analytics             = Analytics for this add-on //simplified for DevFlow use
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
    HTML_SIDEBAR_FILE : "Add-on/html/Sidebar.html",
    SIDEBAR_TITLE : 'Welcome',

    HTML_NEW_VERSION_DIALOG      : "reserved for path when this functionality is available"
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
