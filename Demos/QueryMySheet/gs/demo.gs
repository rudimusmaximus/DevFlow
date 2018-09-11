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
 * Creates a welcomeSheet and query input sheet
 * destroys all other sheets in worksheet
 */
 function queryMySheetSetup(){//TODO: add duration in return and shet analytics
   setupDemoForRun();
   return "Setup completed successfully.";
 }

 /**
  * runs query and places data result into new sheets
  */
  function queryMySheetRun(){//TODO: add duration in return and shet analytics
    var runMessage = runQueryPlaceOutput();
    return runMessage;
  }

  /**
   * runs query and places data result into new sheets
   */
   function queryMySheetClean(){//TODO: add duration in return and shet analytics
     cleanQueryDemo();
     return("Clean up finished!");
}


  /**
   * setup sheets expects a fresh sheet, creates the expected sheets for the demo functions
   * demo functions just activate the sheet by name expecting it to be there
   */
  function setupDemoForRun() {
    var welcomeSheet = SpreadsheetApp.getActive().getSheetByName('Welcome');
    if (welcomeSheet) {
      welcomeSheet.activate();
      SpreadsheetApp.getActive().moveActiveSheet(0);
    } else {
      SpreadsheetApp.getActiveSpreadsheet().insertSheet('Welcome', 0).activate();
    }
    var sheetIds = SpreadsheetApp.getActiveSpreadsheet().getSheets().map(function(e) {
      return e.getSheetId()
    });
    var numSheets = sheetIds.length;

    if (numSheets > 1) {
      deleteSheetsBesidesFirstOne(sheetIds);
    } //combine sheet deletion into one call for performance improvement

    //CREATE SHEETS
    var spreadsheet = SpreadsheetApp.getActive();

    //Create all expected input sheets and name them
    createAndNameInputSheet(spreadsheet.getId());

    //PREP SHEETS

    //Gist Query A sheet
    setupQueryInputSheet();


    //ENCLOSED FUNCTIONS
    /**
     * enclosed function that creates all expected input sheets
     */
    function createAndNameInputSheet(ssId) {

      var resource = {
        "requests": [{
            "addSheet": {
              "properties": {
                "title": "queryASheet-input",
                "index": 1,
                "tabColor": {
                  "red": 0,
                  "green": 0,
                  "blue": 1,
                  "alpha": 1.00
                },
                "gridProperties": {
                  "columnCount": 10,
                  "rowCount": 25
                }
              }
            }
          }],
        "includeSpreadsheetInResponse": true
      };
      //batch update
      var response = Sheets.Spreadsheets.batchUpdate(resource, ssId);
      SpreadsheetApp.flush();
    } //end createAndNameInputSheet()


    //credit
    function deleteSheetsBesidesFirstOne(sheetIds) {
      //Thanks to https://plus.google.com/+KanshiTanaike for this approach
      //of building the request object on the fly!
      //Here, the first sheet ID is sheetIds[0]. So if you want to delete all sheets except for 1st sheet, you can create the request body like
      var requestBody = {
        requests: sheetIds.filter(function(_, i) {
          return i != 0
        }).map(function(e) {
          return {
            deleteSheet: {
              sheetId: e
            }
          }
        })
      };
      Sheets.Spreadsheets.batchUpdate(requestBody, SpreadsheetApp.getActive().getId());

    }

    /**
     * setup our input sheet
     */
    function setupQueryInputSheet() {
      // first clear anything in a sheet by that name in case running twice
      var thisSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
      var inputSheet = thisSpreadsheet.getSheetByName('queryASheet-input').activate();
      if (inputSheet) {
        inputSheet.clear();
      } else {
        // insert a new sheet at the beginning
        inputSheet = thisSpreadsheet.insertSheet('queryASheet-input');
      }
      // prepare values
      var values = [
        ['Date', 'Amount', 'Named', '','Expected Result>','=QUERY(A1:C,"SELECT A,B,C WHERE B < 4")'],
        ['1/1/2016', '1', 'person jan', '', '', ''],
        ['2/1/2017', '2', 'person feb', '', '', ''],
        ['3/1/2017', '3', 'person mar', '', '', ''],
        ['4/1/2017', '4', 'person apr', '', '', ''],
        ['5/1/2017', '5', 'person may', '', '', ''],
        ['6/1/2017', '6', 'person jun', '', '', ''],
      ];
      // place expected data to query
      inputSheet.getRange('A1:F7').setValues(values);
    }
    //end enclosed functions
  } //end setupDemoForRun

/**
 *cleanQueryDemo
 */
function cleanQueryDemo() {
  var welcomeSheet = SpreadsheetApp.getActive().getSheetByName('Welcome');
  if (welcomeSheet) {
    welcomeSheet.activate();
    SpreadsheetApp.getActive().moveActiveSheet(0);
  } else {
    SpreadsheetApp.getActiveSpreadsheet().insertSheet('Welcome', 0).activate();
  }
  var sheetIds = SpreadsheetApp.getActiveSpreadsheet().getSheets().map(function(e) {
    return e.getSheetId()
  });
  var numSheets = sheetIds.length;

  if (numSheets > 1) {
    deleteSheetsBesidesFirstOne(sheetIds);
  } //combine sheet deletion into one call for performance improvement

  //CREATE SHEETS
  var spreadsheet = SpreadsheetApp.getActive();

  //credit
  function deleteSheetsBesidesFirstOne(sheetIds) {
    //Thanks to https://plus.google.com/+KanshiTanaike for this approach
    //of building the request object on the fly!
    //Here, the first sheet ID is sheetIds[0]. So if you want to delete all sheets except for 1st sheet, you can create the request body like
    var requestBody = {
      requests: sheetIds.filter(function(_, i) {
        return i != 0
      }).map(function(e) {
        return {
          deleteSheet: {
            sheetId: e
          }
        }
      })
    };
    Sheets.Spreadsheets.batchUpdate(requestBody, SpreadsheetApp.getActive().getId());

  }
} //end cleanQueryDemo
