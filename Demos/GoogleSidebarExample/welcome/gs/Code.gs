/**
 * Adds a custom menu with items to show the sidebar and dialog.
 *
/**
 * Opens a sidebar. The sidebar structure is described in the Sidebar.html
 * project file.
 */
function startSidebarExample() {
    // RCM$.ThisAddon.SupportFunctions.showWelcomeSidebar();
    // RCM$.ThisAddon.SupportFunctions.addMenu('startWorkflow');
    var ui = HtmlService.createTemplateFromFile('Demos/GoogleSidebarExample/welcome/html/Sidebar.html')
        .evaluate()
        .setTitle('Demo Sidebar Example')
        .setSandboxMode(HtmlService.SandboxMode.IFRAME);
    SpreadsheetApp.getUi().showSidebar(ui);
    addMenu('startSidebarExample');
    return true;
}
