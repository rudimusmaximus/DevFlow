/**
 * Adds a custom menu with items to show the sidebar and dialog.
 *
 * @param {Object} e The event parameter for a simple onOpen trigger.
 */
function onOpen(e) {
  RCM$.ThisAddon.SupportFunctions.addMenu("onOpen");
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
  RCM$.ThisAddon.SupportFunctions.addMenu('startWorkflow');
}

/**
 * Opens a sidebar. The sidebar structure is described in the Sidebar.html
 * project file. Note: same as start but setup to allow differences if required
 */
function restartWorkflow() {
  RCM$.ThisAddon.SupportFunctions.showWelcomeSidebar();
  RCM$.ThisAddon.SupportFunctions.addMenu('restartWorkflow');
}
