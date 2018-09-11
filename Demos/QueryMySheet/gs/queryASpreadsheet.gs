
/**
 * run query, place output, trim the sheet to match our 2d array of output data
 */
function runQueryPlaceOutput() {
  var inputSheet = SpreadsheetApp.getActive().getSheetByName('queryASheet-input');
  //check if setup was run
  if (inputSheet) {
    // continue if setup was run
    var ssId = SpreadsheetApp.getActiveSpreadsheet().getId();
    var result = queryASpreadsheet(ssId,
      'queryASheet-input',
      'A1:C',
      'SELECT A,B,C WHERE B < 4');

    var rows = result.length; //7
    var columns = result[0].length; //3
    var newSheetName = 'queryASheet-output';
    // first clear anything in a sheet by that name in case running twice
    var thisSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var outputSheet = thisSpreadsheet.getSheetByName(newSheetName);
    if (outputSheet) { //remove old output if it's there
      thisSpreadsheet.deleteSheet(outputSheet);
    };

    populateNewSheet(ssId,
      result,
      newSheetName,
      columns,
      rows,
      "A1");

    //activate result
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName(newSheetName).activate();
    return ("Run completed successfully.");

  } else {
    return ('Please run setup first.');
  }
} //end runQueryPlaceOutput
/**
 * This function uses url fetch to get data from a spreadsheet using a query style
 *
 * @param  {String} sheetId the id for the spreadhsheet
 * @param  {String} sheetName
 * @param  {String} rangeSyntax a few example range syntax arguments:  "A1:B10" - A range from cell A1 through B10", "5:7" - Rows 5-7, "D:F" - Columns D-F, "A:A70" - The first 70 cells in column A, "A70:A" - Column A from row 70 to the end, "B5:5" - B5 to the end of row 5, "D3:D" - D3 to the end of column D,"C:C10" - From the beginning of column C to C10
 * @param  {String} queryString
 * @return {Object[][]} dataTwoD is a JavaScript 2d array; rather this is an array of rows where the rows are arrays of values.
 */
function queryASpreadsheet(sheetId, sheetName, rangeSyntax, queryString) {
  //DriveApp.getRootFolder()
  var url = 'https://docs.google.com/spreadsheets/d/' + sheetId + '/gviz/tq?' +
    'range=' + rangeSyntax +
    '&tqx=out:csv' +
    '&sheet=' + sheetName +
    '&tq=' + encodeURIComponent(queryString);

  var params = {
    headers: {
      'Authorization': 'Bearer ' + ScriptApp.getOAuthToken()
    },
    muteHttpExceptions: true
  };

  var csvData = UrlFetchApp.fetch(url, params);
  var dataTwoD = Utilities.parseCsv(csvData); // array of the format [[a, b, c], [d, e, f]]

  return dataTwoD;
}
/**
 * using the advanced sheets api, this function
 * creates, names, right sizes, and populates a
 * a new sheet and gives it a colored tab
 */
function populateNewSheet(ssId, valuesTwoD, sheetName, requiredColumns, requiredRows, startingCellA1Notation) {

  var resource = {
    "requests": [{ //initial request to create sheet of exactly right size
      "addSheet": {
        "properties": {
          "title": sheetName,
          "tabColor": {
            "red": 0,
            "green": 1,
            "blue": 0,
            "alpha": 1.00
          },
          "gridProperties": {
            "columnCount": requiredColumns,
            "rowCount": requiredRows
          }
        }
      }
    }],
    "includeSpreadsheetInResponse": false
  };
  //batch update one
  Sheets.Spreadsheets.batchUpdate(resource, ssId);

  var resourceTwo = {
    valueInputOption: "USER_ENTERED",
    data: {
      range: "'" + sheetName + "'!" + startingCellA1Notation, // Update a cell with a 2d array
      values: valuesTwoD
    }
  };
  //different kind of batch update
  //this method has advantages of 'parsing' the entered data as if it were entered by a user so some strings may become numbers or dates for example
  Sheets.Spreadsheets.Values.batchUpdate(resourceTwo, ssId);
  SpreadsheetApp.flush();
} //end function
