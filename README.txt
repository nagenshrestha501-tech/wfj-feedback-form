WHITE FEATHER'S JEWELLERY - CUSTOMER FORM
=========================================

FOLDER CONTENTS
  index.html              The customer form (open this in the browser)
  google-sheet-script.gs  Code to paste into Google Apps Script
  README.txt              These instructions

WHERE DATA IS SAVED
  In a Google Sheet. Each submission becomes one row:
  Date | Name | Phone | Heard About Us | Feedback

SETUP (one time)
  1. Create a new Google Sheet at sheets.google.com
  2. In that sheet: Extensions -> Apps Script
  3. Delete any existing code, paste the code from google-sheet-script.gs, click Save
  4. Click Deploy -> New deployment -> select type "Web app"
       Execute as:      Me
       Who has access:  Anyone
     Click Deploy and allow the permissions it asks for
  5. Copy the Web app URL
  6. Open index.html in VS Code, find this line near the bottom:
       var FORM_URL="PASTE_YOUR_WEB_APP_URL_HERE";
     and replace the text inside the quotes with your URL. Save.

RUN IT
  VS Code: right-click index.html -> Open with Live Server
  (open the folder in VS Code first, so the file is named exactly index.html)

TEST
  Submit the form once and check that a new row appears in your sheet.
  The form always says "Thank you" even if the URL is wrong, so the sheet is the real check.

IF YOU CHANGE THE SCRIPT LATER
  Deploy -> Manage deployments -> edit -> Version: New version -> Deploy.
  Otherwise your changes will not take effect.

PUTTING IT ONLINE
  Upload the index.html file to any free host (Netlify, GitHub Pages, Vercel)
  so customers can open the form on their phones.
