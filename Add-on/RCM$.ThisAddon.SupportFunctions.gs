//extend or establish namespace object if in another file
var RCM$ = RCM$ || {}; //top level regardless of file load order
RCM$.LibCc = RCM$.LibCc || {}; //2nd level member regardless of file load order
RCM$.ThisAddon = RCM$.ThisAddon || {}; //2nd level member regardless of file load order;
/****
 * 'POPULATE' THE NAMESPACE - establish 3rd level members and define additional methods and properties
 *****/
/**
 * RCM$.ThisAddon.SupportFunctions - part of the Red Crow Dev Flow
 * RCM$.ThisAddon.SupportFunctions = Red Crow Methods Name Space > Add-on Template > Support Functions
 */
(function(nested) {
  nested.description = "Add-on Template > Support Functions; RCM$.ThisAddon.SupportFunctions - part of the Red Crow Dev Flow";
  return nested;
})(RCM$.ThisAddon.SupportFunctions = RCM$.ThisAddon.SupportFunctions || {});

//RCM$.ThisAddon.SupportFunctions.addMenu
(function(nested) {
  /**
   * Builds the add-on menu
   * callingFromCase string context name for calling context
   * returns boolean true if successful
   */
  nested.addMenu = function(callingFromCase) {
    switch (callingFromCase) { //KICK off matching
      case "onOpen":
        SpreadsheetApp.getUi()
          .createAddonMenu()
          .addItem('Start workflow', 'startWorkflow')
          .addToUi();
        break;
      case "startWorkflow":
        SpreadsheetApp.getUi().createAddonMenu()
          .addItem('Restart workflow', 'restartWorkflow')
          .addSeparator()
          .addItem('Demo example sidebar', 'tellUserNotReady')
          .addItem('Demo update multiple cells', 'tellUserNotReady')
          .addItem('Demo manipulate disjoint ranges', 'tellUserNotReady')
          .addItem('Demo query a sheet into memory', 'tellUserNotReady')
          .addItem('Demo JavaScript patterns (several tbd)', 'tellUserNotReady')
          .addItem('Demo what\'s new?', 'tellUserNotReady')
          .addToUi();
        break;
      case "restartWorkflow": //same as start but setup to allow differences if required
        SpreadsheetApp.getUi().createAddonMenu()
          .addItem('Restart workflow', 'restartWorkflow')
          .addSeparator()
          .addItem('Placeholder start demo x', 'no')
          .addItem('Placeholder start demo y', 'no')
          .addToUi();
        break;
      default:
        SpreadsheetApp.getUi().createAddonMenu()
          .addItem('Restart workflow', 'restartWorkflow')
          .addSeparator()
          .addItem('Placeholder start demo x', 'no')
          .addItem('Placeholder start demo y', 'no')
          .addToUi();
        break;
    } //end switch

    return true;
  };
  return nested;
})(RCM$.ThisAddon.SupportFunctions);

//RCM$.ThisAddon.SupportFunctions.showWelcomeSidebar();
(function(nested) {
  /**
   * Shows the top level add-on welcome sidebar
   * returns boolean true if successful
   */
  nested.showWelcomeSidebar = function() {
    var ui = HtmlService.createTemplateFromFile(RCM$.ThisAddon.Enums.HTML_SIDEBAR_FILE)
      .evaluate()
      .setTitle(RCM$.ThisAddon.Enums.SIDEBAR_TITLE)
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
    SpreadsheetApp.getUi().showSidebar(ui);

    return true;
  };
  return nested;
})(RCM$.ThisAddon.SupportFunctions);
