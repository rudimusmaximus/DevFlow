/**
 * Function that describes the namespaces without and with functions by writing to the log a stringified object
 */
function logNamespaces() {
  var rcmStringified = JSON.stringify(DEV$, function(key, val) {
    return (typeof val === 'function') ? '[function]' : val;
  }, 3);
  Logger.log('Greetings, \n   Add-on: ' + DEV$.ThisAddon.Enums.USER_FACING_NAME_OF_ADDON + ' Ver: ' + DEV$.ThisAddon.Enums.CURRENT_ADDON_VERSION + '\n   Template: ' + DEV$.ThisAddon.name + ' Ver: ' + DEV$.ThisAddon.Enums.SEMANTIC_VERSION_OF_TEMPLATE);
  Logger.log('\n-----DEV$ WITHOUT FUNCTIONS-----');
  Logger.log(JSON.stringify(DEV$, null, 3));
  Logger.log('\n-----DEV$ WITH FUNCTIONS-----');
  Logger.log(rcmStringified);
  var jsonObject = JSON.parse(rcmStringified);
  return true;
}
/****
 * 'SEED' THE NAMESPACES
 *****/
/**
 * This is parent namespace for a process guy's Dev Flow. This add-on uses a 4 level namespace.
 * NAME$PACE.Grouping.Subset.function - LEVELS 1, 2, 3, and 4
 * gs files are named according to the first 3 levels and each contain their level 4 function members
 */
var DEV$ = (function(ns) {
  ns.author = "Raul Flores, Jr",
    ns.description = "A process guy's dev flow demonstration and GAS sheets addon demos";
  return ns;
})(DEV$ || {});
/****
 * DECLARE THE NESTED NAMESPACES  ***  NAME$PACE.Grouping.Subset.function - LEVELS 1, 2, 3, and 4
 *****/
/**
 * DEV$.ThisAddon = Dev Flow Name Space > Add-on Template > Subset member declarations
 */
(function(nested) {
  nested.name = "A Dev Flow Template 'DevFlow'",
    nested.description = "Template declaration. See DEV$.ThisAddon.*.gs for level 3 members.",
    nested.Enums = {
      USER_FACING_NAME_OF_ADDON: "Dev Flow", // DEV$.Enums.USER_FACING_NAME_OF_ADDON
      //************************************************** SEMANTIC VERSIONING
      CURRENT_ADDON_VERSION: "0.2.0-demonstrator.5" //DEV$.ThisAddon.Enums.CURRENT_ADDON_VERSION

    };
  return nested;
})(DEV$.ThisAddon = DEV$.ThisAddon || {}); //creates level 2 branch
