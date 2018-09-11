/**
 * Shows the welcome for the QueryMySheetDemo
 * returns boolean true if successful
 */
function showQueryMySheetDemoWelcome() {
  var ui = HtmlService.createTemplateFromFile('Demos/QueryMySheet/html/demoWelcome.html')
    .evaluate()
    .setTitle('Demo Query A Sheet Into To Memory')
    .setSandboxMode(HtmlService.SandboxMode.IFRAME);
  SpreadsheetApp.getUi().showSidebar(ui);

  return true;
}

/**
 *
 * TODO: BurningGAS! additions
 */
 function queryMySheetSetup(){
   return "setup placeholder";
 }

 /**
  *
  * TODO: BurningGAS! additions
  */
  function queryMySheetRun(){
    return "run placeholder";
  }
