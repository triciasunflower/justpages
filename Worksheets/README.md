# Peppy Worksheet Studio v4

This version fixes the middle-school grade sync issue.

## Important fix

The previous deployed page could show Grade 7 in the HTML dropdown while still loading an older JavaScript file that did not contain Grade 7 data. That caused:

`TypeError: undefined is not an object (evaluating 'types[g].map')`

This version includes:
- Grade 6, 7, and 8 directly in `app.js`
- Grade 6, 7, and 8 directly in `index.html`
- safer grade lookup functions
- cache-busting query strings: `app.js?v=4` and `style.css?v=4`

## Middle School Skills

Grade 6:
- Ratios & Unit Rates
- Percent Practice
- Integer Operations
- Evaluate Expressions
- Coordinate Plane

Grade 7:
- Proportions
- Two-Step Equations
- Percent Change
- Rational Number Operations
- Circle Geometry

Grade 8:
- Linear Equations
- Slope Practice
- Pythagorean Theorem
- Exponent Rules
- Systems of Equations Intro


## v5 Sheet Studio-style sidebar update

- Added a Main Page link back to https://justpages.studio/.
- Updated the left panel to use collapsible sections like Sheet Studio.
- Split controls into Create worksheet, Page options, and Worksheet info.
- Updated cache-busting to style.css?v=5 and app.js?v=5.


## v6 Fit Fix

- Reduced worksheet problem font size and spacing so 12-question worksheets fit inside the printable page.
- Added compact worksheet spacing for question cards, answer lines, and work-space lines.
- Changed the footer note to: `Generated with Just Pages Studio`.
- Updated cache-busting to `style.css?v=6` and `app.js?v=6`.


## v7 Word Problem Fit

- Added a stronger compact layout for long word-problem worksheets.
- Reduced title, instruction, problem text, card padding, answer lines, and workspace spacing for word-heavy worksheets.
- Hid extra workspace lines on crowded word-problem pages so 12 questions fit inside the printable page.
- Kept the footer as `Generated with Just Pages Studio`.
- Updated cache-busting to `style.css?v=7` and `app.js?v=7`.
