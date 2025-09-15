/**
 * Google Apps Script for Zenvi Labs Website
 *
 * This script handles email submissions from the website and saves them to a Google Sheet.
 *
 * SETUP INSTRUCTIONS:
 * 1. Go to Google Sheets and create a new spreadsheet
 * 2. Go to Extensions → Apps Script
 * 3. Delete any existing code and paste this entire script
 * 4. Replace SPREADSHEET_ID with your actual Google Sheet ID (found in the URL)
 * 5. Deploy as Web App:
 *    - Click "Deploy" → "New Deployment"
 *    - Choose type: "Web app"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone"
 *    - Click "Deploy"
 * 6. Copy the Web App URL and add it to your .env file as VITE_GOOGLE_SCRIPT_URL
 */

// Replace this with your Google Sheet ID
const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE';
const SHEET_NAME = 'Email Submissions'; // Name of the sheet tab

function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);

    // Open the spreadsheet
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);

    // If sheet doesn't exist, create it with headers
    if (!sheet) {
      const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
      const newSheet = spreadsheet.insertSheet(SHEET_NAME);
      newSheet.appendRow(['Email', 'Timestamp', 'Source', 'Date Added']);
    }

    // Get the active sheet
    const activeSheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);

    // Check if headers exist, if not add them
    if (activeSheet.getLastRow() === 0) {
      activeSheet.appendRow(['Email', 'Timestamp', 'Source', 'Date Added']);
    }

    // Append the new data
    activeSheet.appendRow([
      data.email,
      data.timestamp,
      data.source || 'Zenvi Labs Website',
      new Date().toLocaleString('en-US', { timeZone: 'Europe/Madrid' })
    ]);

    // Optional: Send notification email to admin
    sendNotificationEmail(data.email);

    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        'result': 'success',
        'message': 'Email saved successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        'result': 'error',
        'error': error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // Handle GET requests (for testing)
  return ContentService
    .createTextOutput(JSON.stringify({
      'result': 'success',
      'message': 'Google Apps Script is running. Use POST to submit data.'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

function sendNotificationEmail(userEmail) {
  // Optional: Send notification to admin when someone downloads PDF
  const ADMIN_EMAIL = 'admin@zenvi.es'; // Replace with your admin email

  try {
    const subject = 'New PDF Download - Zenvi Labs';
    const body = `
      A new user has downloaded the Zenvi Labs company overview PDF.

      Email: ${userEmail}
      Time: ${new Date().toLocaleString('en-US', { timeZone: 'Europe/Madrid' })}

      The email has been saved to the Google Sheet.
    `;

    // Uncomment the line below to enable email notifications
    // MailApp.sendEmail(ADMIN_EMAIL, subject, body);

  } catch (error) {
    console.error('Error sending notification email:', error);
  }
}

/**
 * Creates initial sheet structure if needed
 * Run this function once to set up your sheet
 */
function setupSheet() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  // Clear existing content and set headers
  sheet.clear();
  const headers = ['Email', 'Timestamp', 'Source', 'Date Added'];
  sheet.appendRow(headers);

  // Format the header row
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setFontWeight('bold');
  headerRange.setBackground('#FE4902'); // Zenvi orange
  headerRange.setFontColor('#FFFFFF');

  // Set column widths
  sheet.setColumnWidth(1, 250); // Email
  sheet.setColumnWidth(2, 200); // Timestamp
  sheet.setColumnWidth(3, 200); // Source
  sheet.setColumnWidth(4, 150); // Date Added

  // Add data validation for email column
  const emailRange = sheet.getRange(2, 1, sheet.getMaxRows() - 1, 1);
  const rule = SpreadsheetApp.newDataValidation()
    .requireTextIsEmail()
    .setAllowInvalid(false)
    .build();
  emailRange.setDataValidation(rule);

  console.log('Sheet setup complete!');
}