/**
 * Adds a custom menu with items to show the sidebar and dialog.
 *
 * @param {Object} e The event parameter for a simple onOpen trigger.
 */
function onOpen(e) {
    addMenu("onOpen");
}

/**
 * Runs when the add-on is installed; calls onOpen() to ensure menu creation and
 * any other initialization work is done immediately.
 *
 * @param {Object} e The event parameter for a simple onInstall trigger.
 */
function onInstall(e) {
    onOpen(e);
}

/**
 * Opens a sidebar. The sidebar structure is described in the Sidebar.html
 * project file.
 */
function startWorkflow() {
    RCM$.ThisAddon.SupportFunctions.showWelcomeSidebar();
    addMenu('startWorkflow');
}

/**
 * Opens a sidebar. The sidebar structure is described in the Sidebar.html
 * project file. Note: same as start but setup to allow differences if required
 */
function restartWorkflow() {
    RCM$.ThisAddon.SupportFunctions.showWelcomeSidebar();
    addMenu('restartWorkflow');
}
/**
 * Function called directly from sheets' menu. Normally, these do not allow
 * for passing parameters. We demonstrate getting over that here. Notice
 * we pass a param for durationSeconds below into a function in our nested
 * name space.
 */
function tellUserNotReady() {
    wipToast(8);
}
/**
 * Toast message placeholder for future demos
 */
function wipToast(durationSeconds) {

  SpreadsheetApp.getActive().toast("Not yet.","Volunteer today!", durationSeconds);

  return true;
}

/**
 * Builds the add-on menu
 * callingFromCase string context name for calling context
 * returns boolean true if successful
 */
function addMenu(callingFromCase) {
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
          .addItem('Demo example sidebar', 'startSidebarExample')
          .addItem('Demo update multiple cells', 'tellUserNotReady')
          .addItem('Demo manipulate disjoint ranges', 'tellUserNotReady')
          .addItem('Demo query a sheet into memory', 'showQueryMySheetDemoWelcome')
          .addItem('Demo JavaScript patterns (several tbd)', 'tellUserNotReady')
          .addItem('Demo what\'s new?', 'tellUserNotReady')
          .addToUi();
        break;
      case "restartWorkflow": //same as start but setup to allow differences if required
        SpreadsheetApp.getUi().createAddonMenu()
          .addItem('Restart workflow', 'restartWorkflow')
          .addSeparator()
          .addItem('Demo example sidebar', 'startSidebarExample')
          .addItem('Demo update multiple cells', 'tellUserNotReady')
          .addItem('Demo manipulate disjoint ranges', 'tellUserNotReady')
          .addItem('Demo query a sheet into memory', 'showQueryMySheetDemoWelcome')
          .addItem('Demo JavaScript patterns (several tbd)', 'tellUserNotReady')
          .addItem('Demo what\'s new?', 'tellUserNotReady')
          .addToUi();
        break;
      default:
        SpreadsheetApp.getUi().createAddonMenu()
        .addItem('Restart workflow', 'restartWorkflow')
          .addSeparator()
          .addItem('Demo example sidebar', 'startSidebarExample')
          .addItem('Demo update multiple cells', 'tellUserNotReady')
          .addItem('Demo manipulate disjoint ranges', 'tellUserNotReady')
          .addItem('Demo query a sheet into memory', 'showQueryMySheetDemoWelcome')
          .addItem('Demo JavaScript patterns (several tbd)', 'tellUserNotReady')
          .addItem('Demo what\'s new?', 'tellUserNotReady')
          .addToUi();
        break;
    } //end switch

    return true;
} //end function addMenu
