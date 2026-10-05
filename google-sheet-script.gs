// Paste this into: Google Sheet -> Extensions -> Apps Script
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSheet();
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Date", "Name", "Phone", "Heard About Us", "Feedback"]);
  }
  var p = e.parameter;
  sheet.appendRow([new Date(), p.name, p.phone, p.heard_about_us, p.feedback]);
  return ContentService.createTextOutput("ok");
}

// Optional: opening the Web app URL in a browser shows this message
function doGet() {
  return ContentService.createTextOutput("Form endpoint is working.");
}
