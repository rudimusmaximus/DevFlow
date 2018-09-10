var GOOGLE_SIDEBAR_EXAMPLE_DIALOG_TITLE = 'Example Dialog';
var GOOGLE_SIDEBAR_EXAMPLE_SIDEBAR_TITLE = 'Example Sidebar';

/**
 * Opens a sidebar. The sidebar structure is described in the Sidebar.html
 * project file.
 */
function showGoogleSidebarExampleSidebar() {//this will link to our run button
  var ui = HtmlService.createTemplateFromFile('Demos/GoogleSidebarExample/html/Sidebar.html')
      .evaluate()
      .setTitle(GOOGLE_SIDEBAR_EXAMPLE_SIDEBAR_TITLE)
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
  SpreadsheetApp.getUi().showSidebar(ui);
}

/**
 * Opens a dialog. The dialog structure is described in the Dialog.html
 * project file.
 */
function showGoogleSidebarExampleDialog() {//this will be in the menu when we start the sidebar demo
  var ui = HtmlService.createTemplateFromFile('Demos/GoogleSidebarExample/html/Dialog')
      .evaluate()
      .setWidth(400)
      .setHeight(190)
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
  SpreadsheetApp.getUi().showModalDialog(ui, GOOGLE_SIDEBAR_EXAMPLE_DIALOG_TITLE);
}

/**
 * Returns the value in the active cell.
 *
 * @return {String} The value of the active cell.
 */
function getActiveValue() {
  // Retrieve and return the information requested by the sidebar.
  var cell = SpreadsheetApp.getActiveSheet().getActiveCell();
  return cell.getValue();
}

/**
 * Replaces the active cell value with the given value.
 *
 * @param {Number} value A reference number to replace with.
 */
function setActiveValue(value) {
  // Use data collected from sidebar to manipulate the sheet.
  var cell = SpreadsheetApp.getActiveSheet().getActiveCell();
  cell.setValue(value);
}

/**
 * Executes the specified action (create a new sheet, copy the active sheet, or
 * clear the current sheet).
 *
 * @param {String} action An identifier for the action to take.
 */
function modifySheets(action) {
  // Use data collected from dialog to manipulate the spreadsheet.
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var currentSheet = ss.getActiveSheet();
  if (action == "create") {
    ss.insertSheet();
  } else if (action == "copy") {
    currentSheet.copyTo(ss);
  } else if (action == "clear") {
    currentSheet.clear();
  }
}
