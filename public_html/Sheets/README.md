# Sheet Studio v1

A static browser-based .xlsx spreadsheet template generator for Just Pages Studio.

## Suggested upload location

Upload this folder to:

`www.justpages.studio/Sheets/`

## What it does

Users choose a spreadsheet template, personalize the title/name/date/row count, preview the table, then download a real `.xlsx` workbook.

The generated workbook can be opened in:

- Google Sheets
- Microsoft Excel
- Apple Numbers
- LibreOffice Calc

## Included templates

- Monthly Budget
- Expense Tracker
- Etsy Profit Tracker
- Inventory Tracker
- Content Calendar
- Habit Tracker Sheet
- Reading Log
- Meal Planner + Grocery List
- Wedding Budget Sheet
- Family Chore Chart Sheet

## Features

- Client-side .xlsx generation
- No backend required
- No Google API required
- Optional instructions sheet
- Optional summary sheet when useful
- Formula columns for profit, totals, inventory value, balance due, habit totals, etc.
- CSV download option

## Dependency

This version uses SheetJS from CDN:

`https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js`

If you want to avoid CDN later, download that library and host it locally inside your `/Sheets/` folder.

## Notes

This first version creates the workbook in the user's browser. It does not connect to Google accounts, which avoids OAuth/API setup.


## v2 Formatting Update

This version improves the generated `.xlsx` workbook formatting.

Added:
- Date columns use real Excel date cells where possible.
- Date format: `mm/dd/yyyy`.
- Currency-related columns use currency number formats.
- Quantity/count columns use integer number formats.
- Formula cells keep appropriate number/currency formatting.
- Sample-row formulas are rebuilt to use the correct Excel row numbers after title/header rows.
- Basic worksheet title/header styling.
- Summary formulas keep currency formatting when relevant.
- Cache-busting links updated to `style.css?v=2` and `app.js?v=2`.

Note:
- This version uses the browser SheetJS library. It creates real formulas and number formats, but advanced Excel table styling is limited compared with a backend spreadsheet engine.


## v3 More Templates + Polish

Updates:
- Date format changed to `mm/dd/yyyy`.
- Added 16 more useful sheet templates:
  - Bill Payment Tracker
  - Savings Goal Tracker
  - Debt Payoff Tracker
  - Project Task Tracker
  - Client / Order Tracker
  - Social Media Planner
  - Simple Gradebook
  - Attendance Tracker
  - Medication Log
  - Sleep Tracker Sheet
  - Workout Log Sheet
  - Pantry Inventory
  - Cleaning Schedule Sheet
  - Travel Planner Sheet
  - Event Budget Tracker
  - Fundraiser Tracker
- Gallery category tabs now show template counts.
- Template cards have clearer `.xlsx` labels.
- Preview table has sticky headers.
- Added more formatting detection for dates, currency, integers, and percentages.
- Cache-busting links updated to `style.css?v=3` and `app.js?v=3`.


## v4 Date Entry Format Update

Added a new Date entry style option:

1. Real dates: type 10/23/2025
   - Uses real spreadsheet date format: mm/dd/yyyy
   - Best for sorting, filtering, and date calculations

2. Quick entry: type 10232025 → 10/23/2025
   - Uses custom display format: 00/00/0000
   - Easier for fast typing
   - Important: this displays like a date, but it is not a true date serial

Cache-busting links updated to style.css?v=4 and app.js?v=4.


## v5 Formatted Preview Update

Updated the live preview so sample data follows the same intended cell formatting as the generated workbook.

Preview improvements:
- Date samples display as `MM/DD/YYYY` instead of raw ISO text.
- Currency samples display with the selected currency symbol and two decimal places.
- Percent values display as percentages.
- Number/count columns use readable number formatting.
- Formula columns show calculated preview values instead of raw formula text.

Workbook generation still keeps the actual formulas in the `.xlsx` file, with date/currency/number/percent formatting applied where appropriate.

Cache-busting links updated to `style.css?v=5` and `app.js?v=5`.


## v6 Logic Cleanup

Updated after reviewing the preview behavior:
- Blank template rows no longer show distracting `0` values in formula columns.
- Formula columns remain in the generated workbook, but display blank until the user starts that row.
- Difference, Remaining, Balance, and New Balance columns are treated as currency where appropriate.
- Negative currency values display cleanly, such as `-$2.00`.
- Summary formulas were adjusted per template so totals point to the logical money/count columns for each sheet.
- Cache-busting links updated to `style.css?v=6` and `app.js?v=6`.


## v7 Add 35 More Sheet Templates

Added all 35 requested new spreadsheet templates across Money, Business, Home, Wellness, School, Content, and Events.

New templates:
1. Paycheck Budget Sheet
2. Sinking Funds Tracker
3. Subscription Tracker
4. No-Spend Challenge Tracker
5. Tax Deduction Tracker
6. Product Pricing Calculator
7. Profit & Loss Sheet
8. Mileage Tracker
9. Customer Follow-Up Tracker
10. Wholesale Order Tracker
11. Home Maintenance Tracker
12. Grocery Price Comparison Sheet
13. Freezer Inventory Sheet
14. Pet Care Tracker
15. Family Schedule Sheet
16. Symptom Tracker
17. Water Intake Tracker
18. Mood Tracker Sheet
19. Blood Pressure Log
20. Glucose Log
21. Homework Tracker
22. Reading Challenge Tracker
23. Study Schedule Sheet
24. Student Progress Tracker
25. Classroom Behavior Tracker
26. Blog Post Planner
27. SEO Keyword Tracker
28. Website Content Inventory
29. Pinterest Pin Tracker
30. Newsletter Planner
31. Party Planning Sheet
32. Guest List Tracker
33. Vendor Comparison Sheet
34. Birthday Party Budget
35. Holiday Gift Tracker

Also added a new Content category and expanded format detection for more date, currency, number, and percentage columns.

Cache-busting links updated to `style.css?v=7` and `app.js?v=7`.

## v8 Polished Sidebar Layout

Updated the left control panel to feel more polished and user-friendly.

Added:
- A compact Sheet Builder summary card at the top of the sidebar.
- Step-style sections: Choose Template, Personalize, Template Info.
- Popular template shortcut buttons.
- A cleaner horizontal category tab row.
- Compact template cards with stronger selected-state styling.
- A live template count label.
- Advanced options moved into a collapsible section.
- A sticky export card at the bottom of the sidebar.
- Clearer button labels: Download Excel File, Update Preview, Export CSV.
- Improved focus states, spacing, shadows, and mobile behavior.

Cache-busting links updated to `style.css?v=8` and `app.js?v=8`.


## v9 Sidebar Export Layout Cleanup

Updated after layout review:
- Removed the separate “Ready to export” sticky box from the left sidebar.
- Moved the Download Excel File button into the Personalize action area so the sidebar feels cleaner and less awkward.
- Kept the top header download button for quick access.
- Cache-busting links updated to `style.css?v=9` and `app.js?v=9`.


## v10 Sidebar Layout Fix

Updated after testing the polished sidebar on a narrower browser window.

Fixes:
- Removed the extra sidebar download button that was causing the left panel to feel awkward.
- Kept download in the main header as the primary export action.
- Fixed horizontal overflow so the left panel does not get cut off.
- Adjusted the app grid so the preview table scrolls inside its own area instead of pushing the whole page sideways.
- Made Template info values fit correctly inside the card.
- Added cache-busting links updated to `style.css?v=10` and `app.js?v=10`.


## v11 Collapsible Sidebar Sections

Updates:
- Left panel sections are now collapsible.
- Added collapsible panels for Choose template, Personalize, and Template info.
- Panels are open by default for usability, but can be collapsed to reduce scrolling.
- Cache-busting links updated to `style.css?v=11` and `app.js?v=11`.


## v12 Template Info Cleanup

Updates:
- Template info now focuses on the selected template only.
- Removed generic Template library and Sheets rows from the Template info section.
- Added Best for, Columns, Formula columns, Summary sheet, and Instructions sheet details.
- Date format now displays as `mm/dd/yyyy` without the word “Real.”
- Cache-busting links updated to `style.css?v=12` and `app.js?v=12`.


## v13 Main Page Link

Updates:
- Added a header link back to the main Just Pages Studio landing page: `https://justpages.studio/`.
- Kept the Download Excel File button in the header.
- Cache-busting links updated to `style.css?v=13` and `app.js?v=13`.
