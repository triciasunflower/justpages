const $ = (id) => document.getElementById(id);

const templates = {
  budget: {
    name: 'Monthly Budget',
    category: 'Money',
    description: 'Income, fixed bills, variable spending, savings, and monthly summary.',
    sheetName: 'Budget',
    defaultTitle: 'Monthly Budget',
    headers: ['Date', 'Category', 'Description', 'Type', 'Planned', 'Actual', 'Difference', 'Paid?', 'Notes'],
    sampleRows: [
      ['2026-05-01', 'Income', 'Paycheck', 'Income', 3000, 3000, '=F2-E2', 'Yes', ''],
      ['2026-05-02', 'Housing', 'Rent / Mortgage', 'Expense', 1600, 1600, '=F3-E3', 'Yes', ''],
      ['2026-05-03', 'Utilities', 'Electric bill', 'Expense', 120, 118, '=F4-E4', 'Yes', ''],
      ['2026-05-04', 'Groceries', 'Weekly groceries', 'Expense', 150, 172, '=F5-E5', 'Yes', '']
    ],
    formulas: { 6: (r) => `=F${r}-E${r}` },
    summary: true
  },
  expense: {
    name: 'Expense Tracker',
    category: 'Money',
    description: 'Track date, merchant, category, payment method, amount, and reimbursement status.',
    sheetName: 'Expenses',
    defaultTitle: 'Expense Tracker',
    headers: ['Date', 'Merchant', 'Category', 'Payment Method', 'Amount', 'Reimbursable?', 'Receipt?', 'Notes'],
    sampleRows: [
      ['2026-05-01', 'Post Office', 'Shipping', 'Card', 24.85, 'No', 'Yes', ''],
      ['2026-05-02', 'Office Supply', 'Supplies', 'Card', 18.50, 'No', 'Yes', '']
    ],
    formulas: {},
    summary: true
  },
  etsy: {
    name: 'Etsy Profit Tracker',
    category: 'Business',
    description: 'Track Etsy orders, fees, materials, shipping, and estimated profit.',
    sheetName: 'Etsy Orders',
    defaultTitle: 'Etsy Profit Tracker',
    headers: ['Order Date', 'Order #', 'Buyer', 'Item', 'Sale Price', 'Shipping Charged', 'Etsy Fees', 'Shipping Cost', 'Material Cost', 'Profit', 'Status', 'Notes'],
    sampleRows: [
      ['2026-05-01', '123456', 'Sample Buyer', 'Greeting Card', 6.50, 1.25, 0.85, 1.10, 0.75, '=E2+F2-G2-H2-I2', 'Shipped', ''],
      ['2026-05-02', '123457', 'Sample Buyer', 'Sticker Set', 8.00, 1.25, 1.05, 1.35, 1.10, '=E3+F3-G3-H3-I3', 'Processing', '']
    ],
    formulas: { 9: (r) => `=E${r}+F${r}-G${r}-H${r}-I${r}` },
    summary: true
  },
  inventory: {
    name: 'Inventory Tracker',
    category: 'Business',
    description: 'Track SKU, product, stock, reorder point, supplier, and inventory value.',
    sheetName: 'Inventory',
    defaultTitle: 'Inventory Tracker',
    headers: ['SKU', 'Product', 'Category', 'On Hand', 'Reorder Point', 'Unit Cost', 'Inventory Value', 'Supplier', 'Reorder?', 'Notes'],
    sampleRows: [
      ['CARD-001', 'Birthday Card', 'Cards', 42, 20, 0.85, '=D2*F2', 'Local Print Shop', '=IF(D2<=E2,"Yes","No")', ''],
      ['STK-001', 'Cute Sticker', 'Stickers', 18, 25, 0.32, '=D3*F3', 'Print Vendor', '=IF(D3<=E3,"Yes","No")', '']
    ],
    formulas: { 6: (r) => `=D${r}*F${r}`, 8: (r) => `=IF(D${r}<=E${r},"Yes","No")` },
    summary: true
  },
  content: {
    name: 'Content Calendar',
    category: 'Planning',
    description: 'Plan posts, channels, topics, assets, status, and publishing dates.',
    sheetName: 'Content Calendar',
    defaultTitle: 'Content Calendar',
    headers: ['Publish Date', 'Channel', 'Post Type', 'Topic', 'Caption / Notes', 'Asset Needed?', 'Status', 'Link', 'Results'],
    sampleRows: [
      ['2026-05-05', 'Facebook', 'Puzzle Post', 'Word Search', 'Share new puzzle printable', 'Image', 'Draft', '', ''],
      ['2026-05-06', 'Pinterest', 'Planner Pin', 'Budget Planner', 'Pin monthly budget page', 'Mockup', 'Idea', '', '']
    ],
    formulas: {},
    summary: false
  },
  habit: {
    name: 'Habit Tracker Sheet',
    category: 'Wellness',
    description: 'Monthly habit grid with daily check columns.',
    sheetName: 'Habit Tracker',
    defaultTitle: 'Monthly Habit Tracker',
    headers: ['Habit', ...Array.from({length: 31}, (_, i) => String(i + 1)), 'Total'],
    sampleRows: [
      ['Drink water', ...Array(31).fill(''), '=COUNTIF(B2:AF2,"✓")'],
      ['Walk outside', ...Array(31).fill(''), '=COUNTIF(B3:AF3,"✓")'],
      ['Read 10 minutes', ...Array(31).fill(''), '=COUNTIF(B4:AF4,"✓")']
    ],
    formulas: { 32: (r) => `=COUNTIF(B${r}:AF${r},"✓")` },
    summary: false
  },
  reading: {
    name: 'Reading Log',
    category: 'School',
    description: 'Track books, authors, dates, pages, minutes, and ratings.',
    sheetName: 'Reading Log',
    defaultTitle: 'Reading Log',
    headers: ['Date', 'Book Title', 'Author', 'Pages Read', 'Minutes', 'Rating', 'Favorite Part', 'Notes'],
    sampleRows: [
      ['2026-05-01', 'Charlotte’s Web', 'E.B. White', 20, 25, 5, 'Wilbur', ''],
      ['2026-05-02', 'Magic Tree House', 'Mary Pope Osborne', 18, 20, 4, 'Adventure', '']
    ],
    formulas: {},
    summary: true
  },
  meal: {
    name: 'Meal Planner + Grocery List',
    category: 'Home',
    description: 'Plan weekly meals and organize grocery items by category.',
    sheetName: 'Meal Planner',
    defaultTitle: 'Weekly Meal Planner',
    headers: ['Day', 'Breakfast', 'Lunch', 'Dinner', 'Snack', 'Grocery Items', 'Prep Notes'],
    sampleRows: [
      ['Monday', 'Oatmeal', 'Chicken wrap', 'Pasta', 'Fruit', 'Oats, chicken, pasta', 'Prep lunch the night before'],
      ['Tuesday', 'Eggs', 'Salad', 'Rice bowl', 'Yogurt', 'Eggs, greens, rice', '']
    ],
    formulas: {},
    summary: false
  },
  wedding: {
    name: 'Wedding Budget Sheet',
    category: 'Events',
    description: 'Track wedding vendors, estimates, payments, balances, and due dates.',
    sheetName: 'Wedding Budget',
    defaultTitle: 'Wedding Budget',
    headers: ['Category', 'Vendor', 'Contact', 'Estimated Cost', 'Actual Cost', 'Deposit Paid', 'Balance Due', 'Due Date', 'Status', 'Notes'],
    sampleRows: [
      ['Venue', 'Garden Hall', 'hello@example.com', 4500, 4600, 1000, '=E2-F2', '2026-08-01', 'Booked', ''],
      ['Flowers', 'Local Florist', 'flowers@example.com', 800, 0, 0, '=E3-F3', '2026-08-15', 'Researching', '']
    ],
    formulas: { 6: (r) => `=E${r}-F${r}` },
    summary: true
  },
  chores: {
    name: 'Family Chore Chart Sheet',
    category: 'Home',
    description: 'Assign chores by day, person, completion status, and reward points.',
    sheetName: 'Chore Chart',
    defaultTitle: 'Family Chore Chart',
    headers: ['Week Of', 'Person', 'Chore', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Points', 'Notes'],
    sampleRows: [
      ['2026-05-04', 'Child 1', 'Make bed', '✓', '✓', '', '', '', '', '', '=COUNTIF(D2:J2,"✓")', ''],
      ['2026-05-04', 'Child 2', 'Feed pet', '✓', '', '', '', '', '', '', '=COUNTIF(D3:J3,"✓")', '']
    ],
    formulas: { 10: (r) => `=COUNTIF(D${r}:J${r},"✓")` },
    summary: false
  },
  billpay: {
    name: 'Bill Payment Tracker', category: 'Money',
    description: 'Track bills, due dates, amounts, autopay, and paid status.',
    sheetName: 'Bills', defaultTitle: 'Bill Payment Tracker',
    headers: ['Bill', 'Category', 'Due Date', 'Amount Due', 'Amount Paid', 'Paid Date', 'Autopay?', 'Confirmation #', 'Status', 'Notes'],
    sampleRows: [
      ['Mortgage / Rent', 'Housing', '2026-05-01', 1600, 1600, '2026-05-01', 'Yes', 'AUTO', 'Paid', ''],
      ['Electric', 'Utilities', '2026-05-15', 120, 118, '2026-05-12', 'No', 'ABC123', 'Paid', '']
    ],
    formulas: {}, summary: true
  },
  savings: {
    name: 'Savings Goal Tracker', category: 'Money',
    description: 'Track savings goals, deposits, remaining balance, and progress.',
    sheetName: 'Savings Goals', defaultTitle: 'Savings Goal Tracker',
    headers: ['Goal', 'Target Date', 'Target Amount', 'Current Saved', 'New Deposit', 'Total Saved', 'Remaining', 'Progress %', 'Notes'],
    sampleRows: [
      ['Emergency Fund', '2026-12-31', 5000, 1200, 100, '=D5+E5', '=C5-F5', '=F5/C5', ''],
      ['Vacation', '2026-08-01', 1800, 450, 50, '=D6+E6', '=C6-F6', '=F6/C6', '']
    ],
    formulas: { 5: (r) => `=D${r}+E${r}`, 6: (r) => `=C${r}-F${r}`, 7: (r) => `=IFERROR(F${r}/C${r},0)` }, summary: true
  },
  debt: {
    name: 'Debt Payoff Tracker', category: 'Money',
    description: 'Track balances, payments, interest rates, and payoff progress.',
    sheetName: 'Debt Payoff', defaultTitle: 'Debt Payoff Tracker',
    headers: ['Debt Name', 'Starting Balance', 'Current Balance', 'Interest Rate', 'Minimum Payment', 'Extra Payment', 'Total Payment', 'Payment Date', 'New Balance', 'Notes'],
    sampleRows: [
      ['Credit Card', 2500, 2500, 0.2199, 75, 50, '=E5+F5', '2026-05-10', '=MAX(0,C5-G5)', ''],
      ['Car Loan', 9200, 9200, 0.0599, 310, 0, '=E6+F6', '2026-05-15', '=MAX(0,C6-G6)', '']
    ],
    formulas: { 6: (r) => `=E${r}+F${r}`, 8: (r) => `=MAX(0,C${r}-G${r})` }, summary: true
  },
  project: {
    name: 'Project Task Tracker', category: 'Planning',
    description: 'Manage tasks, owners, priorities, dates, status, and progress.',
    sheetName: 'Project Tasks', defaultTitle: 'Project Task Tracker',
    headers: ['Task', 'Owner', 'Priority', 'Start Date', 'Due Date', 'Status', 'Percent Complete', 'Blocked?', 'Next Step', 'Notes'],
    sampleRows: [
      ['Draft landing page', 'Tricia', 'High', '2026-05-01', '2026-05-05', 'In Progress', 0.6, 'No', 'Review layout', ''],
      ['Upload files', 'Tricia', 'Medium', '2026-05-06', '2026-05-07', 'Not Started', 0, 'No', 'Prepare zip', '']
    ],
    formulas: {}, summary: false
  },
  client: {
    name: 'Client / Order Tracker', category: 'Business',
    description: 'Track clients, orders, deadlines, invoices, payments, and delivery.',
    sheetName: 'Client Orders', defaultTitle: 'Client / Order Tracker',
    headers: ['Order Date', 'Client', 'Project / Item', 'Due Date', 'Quoted Amount', 'Deposit', 'Balance Due', 'Invoice Sent?', 'Payment Status', 'Delivery Status', 'Notes'],
    sampleRows: [
      ['2026-05-01', 'Sample Client', 'Custom Printable', '2026-05-08', 75, 25, '=E5-F5', 'Yes', 'Partial', 'In Progress', ''],
      ['2026-05-03', 'Sample Client 2', 'Worksheet Set', '2026-05-10', 120, 0, '=E6-F6', 'No', 'Unpaid', 'Not Started', '']
    ],
    formulas: { 6: (r) => `=E${r}-F${r}` }, summary: true
  },
  social: {
    name: 'Social Media Planner', category: 'Planning',
    description: 'Plan posts by platform, topic, caption, CTA, asset, and status.',
    sheetName: 'Social Planner', defaultTitle: 'Social Media Planner',
    headers: ['Publish Date', 'Platform', 'Content Pillar', 'Topic', 'Caption Draft', 'CTA', 'Asset Needed', 'Status', 'Posted?', 'Link'],
    sampleRows: [
      ['2026-05-05', 'Facebook', 'Puzzles', 'Word Search', 'Try today’s printable puzzle', 'Visit site', 'Image', 'Draft', 'No', ''],
      ['2026-05-06', 'Pinterest', 'Planners', 'Budget Sheet', 'Simple printable budget tools', 'Save pin', 'Mockup', 'Idea', 'No', '']
    ],
    formulas: {}, summary: false
  },
  gradebook: {
    name: 'Simple Gradebook', category: 'School',
    description: 'Track assignment scores, totals, percentages, and letter grades.',
    sheetName: 'Gradebook', defaultTitle: 'Simple Gradebook',
    headers: ['Student', 'Assignment 1', 'Assignment 2', 'Assignment 3', 'Assignment 4', 'Total Points', 'Max Points', 'Percent', 'Letter Grade', 'Notes'],
    sampleRows: [
      ['Student A', 18, 20, 17, 19, '=SUM(B5:E5)', 80, '=F5/G5', '=IFS(H5>=0.9,"A",H5>=0.8,"B",H5>=0.7,"C",H5>=0.6,"D",TRUE,"F")', ''],
      ['Student B', 16, 18, 15, 17, '=SUM(B6:E6)', 80, '=F6/G6', '=IFS(H6>=0.9,"A",H6>=0.8,"B",H6>=0.7,"C",H6>=0.6,"D",TRUE,"F")', '']
    ],
    formulas: { 5: (r) => `=SUM(B${r}:E${r})`, 7: (r) => `=IFERROR(F${r}/G${r},0)`, 8: (r) => `=IFS(H${r}>=0.9,"A",H${r}>=0.8,"B",H${r}>=0.7,"C",H${r}>=0.6,"D",TRUE,"F")` }, summary: true
  },
  attendance: {
    name: 'Attendance Tracker', category: 'School',
    description: 'Track student attendance, status, reasons, and parent contact notes.',
    sheetName: 'Attendance', defaultTitle: 'Attendance Tracker',
    headers: ['Date', 'Student', 'Status', 'Reason', 'Parent Contacted?', 'Makeup Work Needed?', 'Notes'],
    sampleRows: [
      ['2026-05-01', 'Student A', 'Present', '', 'No', 'No', ''],
      ['2026-05-01', 'Student B', 'Absent', 'Sick', 'Yes', 'Yes', '']
    ],
    formulas: {}, summary: true
  },
  medication: {
    name: 'Medication Log', category: 'Wellness',
    description: 'Track medication names, dosage, taken status, refill dates, and notes.',
    sheetName: 'Medication Log', defaultTitle: 'Medication Log',
    headers: ['Date', 'Medication', 'Dosage', 'Time', 'Taken?', 'Refill Date', 'Prescriber', 'Pharmacy', 'Notes'],
    sampleRows: [
      ['2026-05-01', 'Vitamin', '1 tablet', '8:00 AM', 'Yes', '2026-06-01', '', '', ''],
      ['2026-05-01', 'Sample Med', '5 mg', '9:00 PM', 'No', '2026-05-25', 'Dr. Smith', 'Local Pharmacy', '']
    ],
    formulas: {}, summary: false
  },
  sleep: {
    name: 'Sleep Tracker Sheet', category: 'Wellness',
    description: 'Track bedtime, wake time, hours slept, sleep quality, and notes.',
    sheetName: 'Sleep Tracker', defaultTitle: 'Sleep Tracker',
    headers: ['Date', 'Bedtime', 'Wake Time', 'Hours Slept', 'Sleep Quality', 'Caffeine?', 'Exercise?', 'Notes'],
    sampleRows: [
      ['2026-05-01', '10:30 PM', '6:30 AM', 8, 4, 'No', 'Yes', ''],
      ['2026-05-02', '11:15 PM', '6:45 AM', 7.5, 3, 'Yes', 'No', '']
    ],
    formulas: {}, summary: true
  },
  workout: {
    name: 'Workout Log Sheet', category: 'Wellness',
    description: 'Track workouts, exercises, sets, reps, weight, time, and notes.',
    sheetName: 'Workout Log', defaultTitle: 'Workout Log',
    headers: ['Date', 'Workout Type', 'Exercise', 'Sets', 'Reps', 'Weight', 'Duration', 'Intensity', 'Notes'],
    sampleRows: [
      ['2026-05-01', 'Strength', 'Squats', 3, 10, 50, '30 min', 'Medium', ''],
      ['2026-05-02', 'Cardio', 'Walk', '', '', '', '25 min', 'Easy', '']
    ],
    formulas: {}, summary: true
  },
  pantry: {
    name: 'Pantry Inventory', category: 'Home',
    description: 'Track pantry items, quantities, expiration dates, locations, and shopping needs.',
    sheetName: 'Pantry Inventory', defaultTitle: 'Pantry Inventory',
    headers: ['Item', 'Category', 'Quantity', 'Unit', 'Expiration Date', 'Location', 'Need to Buy?', 'Notes'],
    sampleRows: [
      ['Rice', 'Grains', 2, 'bags', '2026-12-01', 'Pantry', 'No', ''],
      ['Pasta', 'Grains', 1, 'box', '2026-09-01', 'Pantry', 'Yes', '']
    ],
    formulas: {}, summary: false
  },
  cleaning: {
    name: 'Cleaning Schedule Sheet', category: 'Home',
    description: 'Plan cleaning tasks by room, frequency, assigned person, and due date.',
    sheetName: 'Cleaning Schedule', defaultTitle: 'Cleaning Schedule',
    headers: ['Room / Area', 'Task', 'Frequency', 'Assigned To', 'Due Date', 'Completed Date', 'Status', 'Notes'],
    sampleRows: [
      ['Kitchen', 'Clean counters', 'Daily', 'Family', '2026-05-01', '', 'Open', ''],
      ['Bathroom', 'Deep clean', 'Weekly', 'Family', '2026-05-07', '', 'Open', '']
    ],
    formulas: {}, summary: false
  },
  travel: {
    name: 'Travel Planner Sheet', category: 'Home',
    description: 'Track itinerary, bookings, reservations, costs, and confirmation numbers.',
    sheetName: 'Travel Planner', defaultTitle: 'Travel Planner',
    headers: ['Date', 'Time', 'Activity / Booking', 'Location', 'Confirmation #', 'Cost', 'Paid?', 'Packed?', 'Notes'],
    sampleRows: [
      ['2026-07-01', '9:00 AM', 'Flight', 'Airport', 'ABC123', 350, 'Yes', 'N/A', ''],
      ['2026-07-02', '2:00 PM', 'Museum', 'Downtown', '', 45, 'No', 'N/A', '']
    ],
    formulas: {}, summary: true
  },
  eventbudget: {
    name: 'Event Budget Tracker', category: 'Events',
    description: 'Track vendors, estimated costs, actual costs, paid amounts, and balances.',
    sheetName: 'Event Budget', defaultTitle: 'Event Budget Tracker',
    headers: ['Category', 'Vendor', 'Estimated Cost', 'Actual Cost', 'Amount Paid', 'Balance Due', 'Due Date', 'Status', 'Notes'],
    sampleRows: [
      ['Venue', 'Community Hall', 500, 525, 100, '=D5-E5', '2026-06-01', 'Booked', ''],
      ['Food', 'Local Catering', 300, 0, 0, '=D6-E6', '2026-06-10', 'Researching', '']
    ],
    formulas: { 5: (r) => `=D${r}-E${r}` }, summary: true
  },
  fundraiser: {
    name: 'Fundraiser Tracker', category: 'Events',
    description: 'Track donors, pledges, received amounts, balances, and thank-you notes.',
    sheetName: 'Fundraiser', defaultTitle: 'Fundraiser Tracker',
    headers: ['Date', 'Donor', 'Donation Type', 'Pledged Amount', 'Amount Received', 'Balance', 'Payment Method', 'Thank You Sent?', 'Notes'],
    sampleRows: [
      ['2026-05-01', 'Sample Donor', 'Cash', 50, 50, '=D5-E5', 'Cash', 'Yes', ''],
      ['2026-05-02', 'Sample Donor 2', 'Pledge', 100, 25, '=D6-E6', 'Card', 'No', '']
    ],
    formulas: { 5: (r) => `=D${r}-E${r}` }, summary: true
  },
  paycheckBudget: {
    name: 'Paycheck Budget Sheet', category: 'Money',
    description: 'Budget every paycheck with bills, savings, spending, and leftover money.',
    sheetName: 'Paycheck Budget', defaultTitle: 'Paycheck Budget',
    headers: ['Pay Date', 'Income Source', 'Income Amount', 'Bills', 'Savings', 'Spending Money', 'Debt Payment', 'Leftover', 'Notes'],
    sampleRows: [
      ['2026-05-08', 'Paycheck', 1800, 950, 250, 300, 150, '=C5-D5-E5-F5-G5', ''],
      ['2026-05-22', 'Paycheck', 1800, 850, 250, 350, 150, '=C6-D6-E6-F6-G6', '']
    ],
    formulas: { 7: (r) => `=C${r}-D${r}-E${r}-F${r}-G${r}` }, summary: true
  },
  sinkingFunds: {
    name: 'Sinking Funds Tracker', category: 'Money',
    description: 'Plan savings categories, monthly contributions, goals, and progress.',
    sheetName: 'Sinking Funds', defaultTitle: 'Sinking Funds Tracker',
    headers: ['Fund Name', 'Target Amount', 'Current Balance', 'Monthly Contribution', 'Target Date', 'Remaining', 'Progress %', 'Notes'],
    sampleRows: [
      ['Car Repairs', 1000, 280, 75, '2026-12-31', '=B5-C5', '=C5/B5', ''],
      ['Holiday Gifts', 600, 120, 60, '2026-11-15', '=B6-C6', '=C6/B6', '']
    ],
    formulas: { 5: (r) => `=B${r}-C${r}`, 6: (r) => `=IFERROR(C${r}/B${r},0)` }, summary: true
  },
  subscription: {
    name: 'Subscription Tracker', category: 'Money',
    description: 'Track subscriptions, monthly costs, renewal dates, and yearly totals.',
    sheetName: 'Subscriptions', defaultTitle: 'Subscription Tracker',
    headers: ['Service', 'Category', 'Monthly Cost', 'Yearly Cost', 'Renewal Date', 'Billing Cycle', 'Keep / Cancel', 'Cancel Date', 'Notes'],
    sampleRows: [
      ['Streaming Service', 'Entertainment', 14.99, '=C5*12', '2026-06-01', 'Monthly', 'Keep', '', ''],
      ['Design App', 'Business', 29.99, '=C6*12', '2026-05-20', 'Monthly', 'Review', '', '']
    ],
    formulas: { 3: (r) => `=C${r}*12` }, summary: true
  },
  noSpend: {
    name: 'No-Spend Challenge Tracker', category: 'Money',
    description: 'Track no-spend days, temptations, money saved, and reflections.',
    sheetName: 'No Spend', defaultTitle: 'No-Spend Challenge Tracker',
    headers: ['Date', 'Success?', 'Temptation', 'Category Avoided', 'Money Saved', 'Mood', 'Notes'],
    sampleRows: [
      ['2026-05-01', 'Yes', 'Coffee shop', 'Dining', 6.50, 'Good', 'Made coffee at home'],
      ['2026-05-02', 'No', 'Online shopping', 'Shopping', 0, 'Okay', '']
    ],
    formulas: {}, summary: true
  },
  taxDeduction: {
    name: 'Tax Deduction Tracker', category: 'Money',
    description: 'Track deductible expenses, receipts, vendors, and tax categories.',
    sheetName: 'Tax Deductions', defaultTitle: 'Tax Deduction Tracker',
    headers: ['Date', 'Vendor', 'Tax Category', 'Description', 'Deductible Amount', 'Receipt?', 'Payment Method', 'Notes'],
    sampleRows: [
      ['2026-05-01', 'Post Office', 'Shipping', 'Order shipping', 18.40, 'Yes', 'Card', ''],
      ['2026-05-03', 'Supply Store', 'Supplies', 'Envelopes', 12.95, 'Yes', 'Card', '']
    ],
    formulas: {}, summary: true
  },
  productPricing: {
    name: 'Product Pricing Calculator', category: 'Business',
    description: 'Calculate suggested price from costs, fees, labor, and profit margin.',
    sheetName: 'Pricing Calculator', defaultTitle: 'Product Pricing Calculator',
    headers: ['Product', 'Material Cost', 'Labor Cost', 'Packaging Cost', 'Fees %', 'Desired Profit', 'Total Cost', 'Suggested Price', 'Profit Margin %', 'Notes'],
    sampleRows: [
      ['Greeting Card', 0.85, 2.00, 0.35, 0.12, 3.00, '=B5+C5+D5', '=(G5+F5)/(1-E5)', '=IFERROR((H5-G5)/H5,0)', ''],
      ['Sticker Sheet', 1.20, 2.50, 0.45, 0.12, 4.00, '=B6+C6+D6', '=(G6+F6)/(1-E6)', '=IFERROR((H6-G6)/H6,0)', '']
    ],
    formulas: { 6: (r) => `=B${r}+C${r}+D${r}`, 7: (r) => `=(G${r}+F${r})/(1-E${r})`, 8: (r) => `=IFERROR((H${r}-G${r})/H${r},0)` }, summary: true
  },
  profitLoss: {
    name: 'Profit & Loss Sheet', category: 'Business',
    description: 'Track monthly income, expenses, and net profit.',
    sheetName: 'Profit Loss', defaultTitle: 'Profit & Loss Sheet',
    headers: ['Month', 'Sales Income', 'Other Income', 'Materials', 'Shipping', 'Fees', 'Marketing', 'Other Expenses', 'Total Expenses', 'Net Profit'],
    sampleRows: [
      ['May 2026', 2500, 100, 420, 180, 210, 75, 60, '=D5+E5+F5+G5+H5', '=B5+C5-I5'],
      ['June 2026', 0, 0, 0, 0, 0, 0, 0, '=D6+E6+F6+G6+H6', '=B6+C6-I6']
    ],
    formulas: { 8: (r) => `=D${r}+E${r}+F${r}+G${r}+H${r}`, 9: (r) => `=B${r}+C${r}-I${r}` }, summary: true
  },
  mileage: {
    name: 'Mileage Tracker', category: 'Business',
    description: 'Track business mileage, purpose, start/end mileage, and reimbursement.',
    sheetName: 'Mileage', defaultTitle: 'Mileage Tracker',
    headers: ['Date', 'Trip Purpose', 'Start Location', 'End Location', 'Start Miles', 'End Miles', 'Total Miles', 'Rate', 'Reimbursement', 'Notes'],
    sampleRows: [
      ['2026-05-01', 'Post office drop-off', 'Home', 'Post Office', 12000, 12008, '=F5-E5', 0.67, '=G5*H5', ''],
      ['2026-05-03', 'Supply pickup', 'Home', 'Store', 12008, 12022, '=F6-E6', 0.67, '=G6*H6', '']
    ],
    formulas: { 6: (r) => `=F${r}-E${r}`, 8: (r) => `=G${r}*H${r}` }, summary: true
  },
  customerFollowUp: {
    name: 'Customer Follow-Up Tracker', category: 'Business',
    description: 'Track customer messages, follow-up dates, and response status.',
    sheetName: 'Customer Follow Up', defaultTitle: 'Customer Follow-Up Tracker',
    headers: ['Customer', 'Order #', 'Last Contact Date', 'Follow-Up Date', 'Reason', 'Message Sent?', 'Response Received?', 'Status', 'Notes'],
    sampleRows: [
      ['Sample Customer', '12345', '2026-05-01', '2026-05-04', 'Shipping update', 'Yes', 'No', 'Waiting', ''],
      ['Sample Customer 2', '12346', '2026-05-02', '2026-05-06', 'Review request', 'No', 'No', 'Open', '']
    ],
    formulas: {}, summary: false
  },
  wholesale: {
    name: 'Wholesale Order Tracker', category: 'Business',
    description: 'Track wholesale buyers, quantities, unit prices, totals, and shipping.',
    sheetName: 'Wholesale Orders', defaultTitle: 'Wholesale Order Tracker',
    headers: ['Order Date', 'Buyer', 'Product', 'Quantity', 'Unit Price', 'Order Total', 'Payment Status', 'Ship Date', 'Tracking', 'Notes'],
    sampleRows: [
      ['2026-05-01', 'Gift Shop', 'Greeting Cards', 50, 2.25, '=D5*E5', 'Paid', '2026-05-03', '', ''],
      ['2026-05-05', 'Boutique', 'Sticker Sheets', 30, 3.00, '=D6*E6', 'Pending', '', '', '']
    ],
    formulas: { 5: (r) => `=D${r}*E${r}` }, summary: true
  },
  homeMaintenance: {
    name: 'Home Maintenance Tracker', category: 'Home',
    description: 'Track home maintenance tasks, frequency, due dates, and completion.',
    sheetName: 'Home Maintenance', defaultTitle: 'Home Maintenance Tracker',
    headers: ['Area', 'Task', 'Frequency', 'Last Completed', 'Next Due', 'Assigned To', 'Estimated Cost', 'Completed?', 'Notes'],
    sampleRows: [
      ['HVAC', 'Replace filter', 'Monthly', '2026-05-01', '2026-06-01', 'Family', 20, 'No', ''],
      ['Kitchen', 'Clean appliance vents', 'Quarterly', '2026-04-15', '2026-07-15', 'Family', 0, 'No', '']
    ],
    formulas: {}, summary: false
  },
  groceryPrice: {
    name: 'Grocery Price Comparison', category: 'Home',
    description: 'Compare item prices by store, size, unit price, and best deal.',
    sheetName: 'Grocery Prices', defaultTitle: 'Grocery Price Comparison',
    headers: ['Item', 'Store', 'Package Size', 'Unit', 'Price', 'Unit Price', 'Best Deal?', 'Notes'],
    sampleRows: [
      ['Rice', 'Store A', 5, 'lb', 7.99, '=E5/C5', 'Yes', ''],
      ['Rice', 'Store B', 10, 'lb', 14.99, '=E6/C6', 'No', '']
    ],
    formulas: { 5: (r) => `=E${r}/C${r}` }, summary: false
  },
  freezerInventory: {
    name: 'Freezer Inventory Sheet', category: 'Home',
    description: 'Track freezer items, dates frozen, use-by dates, and quantity.',
    sheetName: 'Freezer Inventory', defaultTitle: 'Freezer Inventory Sheet',
    headers: ['Item', 'Category', 'Quantity', 'Frozen Date', 'Use-By Date', 'Location', 'Used?', 'Notes'],
    sampleRows: [
      ['Chicken', 'Meat', 3, '2026-05-01', '2026-08-01', 'Garage freezer', 'No', ''],
      ['Blueberries', 'Fruit', 2, '2026-04-20', '2026-10-20', 'Kitchen freezer', 'No', '']
    ],
    formulas: {}, summary: false
  },
  petCare: {
    name: 'Pet Care Tracker', category: 'Home',
    description: 'Track pet feeding, grooming, medication, vet visits, and care notes.',
    sheetName: 'Pet Care', defaultTitle: 'Pet Care Tracker',
    headers: ['Date', 'Pet Name', 'Care Type', 'Food / Medication', 'Amount', 'Time', 'Completed?', 'Next Due', 'Notes'],
    sampleRows: [
      ['2026-05-01', 'Butter', 'Feeding', 'Dry food', '1 cup', '8:00 AM', 'Yes', '', ''],
      ['2026-05-02', 'Butter', 'Grooming', 'Brush', '', '6:00 PM', 'No', '2026-05-09', '']
    ],
    formulas: {}, summary: false
  },
  familySchedule: {
    name: 'Family Schedule Sheet', category: 'Home',
    description: 'Track family activities, times, locations, people, and notes.',
    sheetName: 'Family Schedule', defaultTitle: 'Family Schedule Sheet',
    headers: ['Date', 'Person', 'Activity', 'Start Time', 'End Time', 'Location', 'Transportation', 'Notes'],
    sampleRows: [
      ['2026-05-01', 'Family', 'Soccer practice', '4:00 PM', '5:00 PM', 'Park', 'Car', ''],
      ['2026-05-02', 'Family', 'Library visit', '10:00 AM', '11:00 AM', 'Library', 'Car', '']
    ],
    formulas: {}, summary: false
  },
  symptom: {
    name: 'Symptom Tracker', category: 'Wellness',
    description: 'Track symptoms, severity, triggers, medication, and notes.',
    sheetName: 'Symptoms', defaultTitle: 'Symptom Tracker',
    headers: ['Date', 'Time', 'Symptom', 'Severity', 'Trigger', 'Medication Taken?', 'Relief Level', 'Notes'],
    sampleRows: [
      ['2026-05-01', '8:00 AM', 'Headache', 3, 'Poor sleep', 'No', 2, ''],
      ['2026-05-02', '2:00 PM', 'Stomach ache', 2, 'Food', 'No', 3, '']
    ],
    formulas: {}, summary: false
  },
  waterIntake: {
    name: 'Water Intake Tracker', category: 'Wellness',
    description: 'Track daily water goal, cups, total ounces, and progress.',
    sheetName: 'Water Intake', defaultTitle: 'Water Intake Tracker',
    headers: ['Date', 'Goal Oz', 'Cup Size Oz', 'Cups Drank', 'Total Oz', 'Progress %', 'Notes'],
    sampleRows: [
      ['2026-05-01', 64, 8, 6, '=C5*D5', '=E5/B5', ''],
      ['2026-05-02', 64, 8, 8, '=C6*D6', '=E6/B6', '']
    ],
    formulas: { 4: (r) => `=C${r}*D${r}`, 5: (r) => `=IFERROR(E${r}/B${r},0)` }, summary: true
  },
  mood: {
    name: 'Mood Tracker Sheet', category: 'Wellness',
    description: 'Track mood, sleep, stress, triggers, gratitude, and notes.',
    sheetName: 'Mood Tracker', defaultTitle: 'Mood Tracker Sheet',
    headers: ['Date', 'Mood', 'Energy', 'Stress Level', 'Sleep Hours', 'Trigger', 'Gratitude', 'Notes'],
    sampleRows: [
      ['2026-05-01', 'Calm', 4, 2, 8, 'Good sleep', 'Sunny morning', ''],
      ['2026-05-02', 'Tired', 2, 4, 6.5, 'Busy day', 'Family time', '']
    ],
    formulas: {}, summary: false
  },
  bloodPressure: {
    name: 'Blood Pressure Log', category: 'Wellness',
    description: 'Track blood pressure, pulse, time, medication, and notes.',
    sheetName: 'Blood Pressure', defaultTitle: 'Blood Pressure Log',
    headers: ['Date', 'Time', 'Systolic', 'Diastolic', 'Pulse', 'Medication?', 'Notes'],
    sampleRows: [
      ['2026-05-01', '8:00 AM', 118, 76, 72, 'No', ''],
      ['2026-05-02', '8:00 AM', 122, 78, 75, 'No', '']
    ],
    formulas: {}, summary: true
  },
  glucose: {
    name: 'Glucose Log', category: 'Wellness',
    description: 'Track glucose readings, meals, medication, timing, and notes.',
    sheetName: 'Glucose Log', defaultTitle: 'Glucose Log',
    headers: ['Date', 'Time', 'Reading', 'Before / After Meal', 'Meal Notes', 'Medication?', 'Notes'],
    sampleRows: [
      ['2026-05-01', '8:00 AM', 95, 'Before meal', 'Breakfast', 'No', ''],
      ['2026-05-01', '12:30 PM', 128, 'After meal', 'Lunch', 'No', '']
    ],
    formulas: {}, summary: true
  },
  homework: {
    name: 'Homework Tracker', category: 'School',
    description: 'Track assignments, subjects, due dates, status, and completion.',
    sheetName: 'Homework', defaultTitle: 'Homework Tracker',
    headers: ['Subject', 'Assignment', 'Assigned Date', 'Due Date', 'Priority', 'Status', 'Completed Date', 'Notes'],
    sampleRows: [
      ['Math', 'Practice problems', '2026-05-01', '2026-05-03', 'High', 'In Progress', '', ''],
      ['Reading', 'Chapter 3', '2026-05-01', '2026-05-04', 'Medium', 'Not Started', '', '']
    ],
    formulas: {}, summary: false
  },
  readingChallenge: {
    name: 'Reading Challenge Tracker', category: 'School',
    description: 'Track books, pages, minutes, ratings, and challenge progress.',
    sheetName: 'Reading Challenge', defaultTitle: 'Reading Challenge Tracker',
    headers: ['Book Title', 'Author', 'Start Date', 'Finish Date', 'Pages', 'Minutes', 'Rating', 'Completed?', 'Notes'],
    sampleRows: [
      ['Charlotte’s Web', 'E.B. White', '2026-05-01', '', 184, 30, 5, 'No', ''],
      ['Magic Tree House', 'Mary Pope Osborne', '2026-05-03', '', 80, 20, 4, 'No', '']
    ],
    formulas: {}, summary: true
  },
  studySchedule: {
    name: 'Study Schedule Sheet', category: 'School',
    description: 'Plan study sessions by subject, topic, date, duration, and review status.',
    sheetName: 'Study Schedule', defaultTitle: 'Study Schedule Sheet',
    headers: ['Date', 'Subject', 'Topic', 'Study Time', 'Duration Minutes', 'Review Status', 'Confidence', 'Notes'],
    sampleRows: [
      ['2026-05-01', 'Math', 'Fractions', '4:00 PM', 30, 'Reviewed', 4, ''],
      ['2026-05-02', 'Science', 'Plants', '5:00 PM', 25, 'Needs Review', 3, '']
    ],
    formulas: {}, summary: false
  },
  studentProgress: {
    name: 'Student Progress Tracker', category: 'School',
    description: 'Track skills, baseline scores, current scores, growth, and notes.',
    sheetName: 'Student Progress', defaultTitle: 'Student Progress Tracker',
    headers: ['Student', 'Skill', 'Baseline Score', 'Current Score', 'Growth', 'Goal Score', 'Progress %', 'Review Date', 'Notes'],
    sampleRows: [
      ['Student A', 'Multiplication', 60, 75, '=D5-C5', 90, '=D5/F5', '2026-05-15', ''],
      ['Student B', 'Reading Fluency', 70, 82, '=D6-C6', 95, '=D6/F6', '2026-05-15', '']
    ],
    formulas: { 4: (r) => `=D${r}-C${r}`, 6: (r) => `=IFERROR(D${r}/F${r},0)` }, summary: true
  },
  behavior: {
    name: 'Classroom Behavior Tracker', category: 'School',
    description: 'Track classroom behavior, interventions, follow-ups, and notes.',
    sheetName: 'Behavior Tracker', defaultTitle: 'Classroom Behavior Tracker',
    headers: ['Date', 'Student', 'Behavior', 'Trigger', 'Intervention', 'Follow-Up Needed?', 'Parent Contacted?', 'Notes'],
    sampleRows: [
      ['2026-05-01', 'Student A', 'Off task', 'Group work', 'Reminder', 'No', 'No', ''],
      ['2026-05-02', 'Student B', 'Helpful behavior', 'Class activity', 'Praise', 'No', 'No', '']
    ],
    formulas: {}, summary: false
  },
  blogPlanner: {
    name: 'Blog Post Planner', category: 'Content',
    description: 'Plan blog posts, keywords, outlines, publish dates, and status.',
    sheetName: 'Blog Planner', defaultTitle: 'Blog Post Planner',
    headers: ['Post Title', 'Primary Keyword', 'Search Intent', 'Outline Status', 'Draft Status', 'Publish Date', 'URL', 'Notes'],
    sampleRows: [
      ['Printable Budget Ideas', 'budget printables', 'Informational', 'Started', 'Draft', '2026-05-10', '', ''],
      ['Word Search Tips', 'word search printable', 'Informational', 'Idea', 'Not Started', '2026-05-15', '', '']
    ],
    formulas: {}, summary: false
  },
  seoKeyword: {
    name: 'SEO Keyword Tracker', category: 'Content',
    description: 'Track keywords, intent, page, ranking, volume, and content status.',
    sheetName: 'SEO Keywords', defaultTitle: 'SEO Keyword Tracker',
    headers: ['Keyword', 'Intent', 'Target Page', 'Search Volume', 'Current Rank', 'Target Rank', 'Content Status', 'Review Date', 'Notes'],
    sampleRows: [
      ['printable planner generator', 'Commercial', '/Planners/', 500, 0, 20, 'Draft', '2026-06-01', ''],
      ['math worksheet generator', 'Commercial', '/Worksheets/', 700, 0, 20, 'Published', '2026-06-01', '']
    ],
    formulas: {}, summary: false
  },
  websiteInventory: {
    name: 'Website Content Inventory', category: 'Content',
    description: 'Track pages, URLs, titles, status, update dates, and SEO notes.',
    sheetName: 'Content Inventory', defaultTitle: 'Website Content Inventory',
    headers: ['Page Name', 'URL', 'Page Type', 'Status', 'Last Updated', 'Next Update', 'SEO Keyword', 'Notes'],
    sampleRows: [
      ['Planner Studio', '/Planners/', 'Generator', 'Published', '2026-05-01', '2026-06-01', 'planner generator', ''],
      ['Sheet Studio', '/Sheets/', 'Generator', 'Draft', '2026-05-07', '2026-06-07', 'spreadsheet generator', '']
    ],
    formulas: {}, summary: false
  },
  pinterest: {
    name: 'Pinterest Pin Tracker', category: 'Content',
    description: 'Track pins, boards, URLs, publish dates, clicks, and performance.',
    sheetName: 'Pinterest Pins', defaultTitle: 'Pinterest Pin Tracker',
    headers: ['Pin Title', 'Board', 'URL', 'Publish Date', 'Design Status', 'Clicks', 'Saves', 'Notes'],
    sampleRows: [
      ['Budget Planner Printable', 'Printables', '/Planners/', '2026-05-12', 'Designed', 0, 0, ''],
      ['Word Search Puzzle', 'Puzzles', '/Puzzles/', '2026-05-13', 'Idea', 0, 0, '']
    ],
    formulas: {}, summary: false
  },
  newsletter: {
    name: 'Newsletter Planner', category: 'Content',
    description: 'Plan newsletter topics, subject lines, send dates, and performance.',
    sheetName: 'Newsletter Planner', defaultTitle: 'Newsletter Planner',
    headers: ['Send Date', 'Topic', 'Subject Line', 'CTA', 'Draft Status', 'Open Rate', 'Click Rate', 'Notes'],
    sampleRows: [
      ['2026-05-10', 'New Sheet Studio', 'New editable sheet templates', 'Try Sheet Studio', 'Draft', 0, 0, ''],
      ['2026-05-17', 'Puzzle Printables', 'Fresh printable puzzle pages', 'Visit Puzzle Studio', 'Idea', 0, 0, '']
    ],
    formulas: {}, summary: false
  },
  partyPlanner: {
    name: 'Party Planning Sheet', category: 'Events',
    description: 'Plan party tasks, food, supplies, guests, budget, and status.',
    sheetName: 'Party Planning', defaultTitle: 'Party Planning Sheet',
    headers: ['Task / Item', 'Category', 'Assigned To', 'Due Date', 'Estimated Cost', 'Actual Cost', 'Status', 'Notes'],
    sampleRows: [
      ['Order cake', 'Food', 'Tricia', '2026-06-01', 60, 0, 'Open', ''],
      ['Buy decorations', 'Supplies', 'Tricia', '2026-06-03', 40, 0, 'Open', '']
    ],
    formulas: {}, summary: true
  },
  guestList: {
    name: 'Guest List Tracker', category: 'Events',
    description: 'Track guest names, RSVP, meal choice, gifts, and thank-you notes.',
    sheetName: 'Guest List', defaultTitle: 'Guest List Tracker',
    headers: ['Guest Name', 'Household', 'Invited?', 'RSVP', 'Meal Choice', 'Gift', 'Thank You Sent?', 'Notes'],
    sampleRows: [
      ['Guest A', 'Family A', 'Yes', 'Yes', 'Chicken', '', 'No', ''],
      ['Guest B', 'Family B', 'Yes', 'Pending', '', '', 'No', '']
    ],
    formulas: {}, summary: false
  },
  vendorComparison: {
    name: 'Vendor Comparison Sheet', category: 'Events',
    description: 'Compare vendors by price, contact info, pros, cons, and decision.',
    sheetName: 'Vendor Comparison', defaultTitle: 'Vendor Comparison Sheet',
    headers: ['Vendor', 'Category', 'Contact', 'Quoted Price', 'Pros', 'Cons', 'Decision', 'Follow-Up Date', 'Notes'],
    sampleRows: [
      ['Vendor A', 'Catering', 'vendor@example.com', 1200, 'Good reviews', 'Higher price', 'Maybe', '2026-05-10', ''],
      ['Vendor B', 'Catering', 'vendor2@example.com', 950, 'Affordable', 'Limited menu', 'Maybe', '2026-05-11', '']
    ],
    formulas: {}, summary: false
  },
  birthdayBudget: {
    name: 'Birthday Party Budget', category: 'Events',
    description: 'Track birthday party planned costs, actual costs, and differences.',
    sheetName: 'Birthday Budget', defaultTitle: 'Birthday Party Budget',
    headers: ['Category', 'Item', 'Planned Cost', 'Actual Cost', 'Difference', 'Purchased?', 'Notes'],
    sampleRows: [
      ['Food', 'Cake', 50, 60, '=D5-C5', 'No', ''],
      ['Decorations', 'Balloons', 25, 18, '=D6-C6', 'Yes', '']
    ],
    formulas: { 4: (r) => `=D${r}-C${r}` }, summary: true
  },
  holidayGift: {
    name: 'Holiday Gift Tracker', category: 'Events',
    description: 'Track recipients, gift ideas, budgets, purchases, wrapping, and totals.',
    sheetName: 'Holiday Gifts', defaultTitle: 'Holiday Gift Tracker',
    headers: ['Recipient', 'Gift Idea', 'Gift Budget', 'Actual Cost', 'Difference', 'Purchased?', 'Wrapped?', 'Delivered?', 'Notes'],
    sampleRows: [
      ['Mom', 'Cozy blanket', 40, 35, '=D5-C5', 'Yes', 'No', 'No', ''],
      ['Friend', 'Coffee mug', 20, 18, '=D6-C6', 'No', 'No', 'No', '']
    ],
    formulas: { 4: (r) => `=D${r}-C${r}` }, summary: true
  }
};

const categories = ['All', 'Money', 'Business', 'Planning', 'Wellness', 'School', 'Home', 'Events', 'Content'];
let activeTemplateKey = 'budget';
let activeCategory = 'All';
let useSamples = true;

function todayISO() {
  const d = new Date();
  return d.toISOString().slice(0, 10);
}

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function safeFileName(value) {
  return String(value || 'sheet-template')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 80);
}

function getState() {
  return {
    templateKey: activeTemplateKey,
    title: $('sheetTitle').value.trim() || templates[activeTemplateKey].defaultTitle,
    owner: $('ownerName').value.trim() || 'User',
    startDate: $('startDate').value || todayISO(),
    rowCount: Number($('rowCount').value || 50),
    currency: $('currency').value,
    theme: $('theme').value,
    dateEntryStyle: $('dateEntryStyle').value,
    includeInstructions: $('includeInstructions').checked,
    includeSummary: $('includeSummary').checked
  };
}


function currencyLabel(symbol) {
  if (symbol === '$') return '$ USD';
  if (symbol === '€') return '€ EUR';
  if (symbol === '£') return '£ GBP';
  return 'No currency';
}

function themeLabel(theme) {
  return { sage: 'Sage Minimal', sky: 'Soft Sky', blush: 'Blush', ink: 'Classic Ink' }[theme] || 'Sage Minimal';
}

function updateBuilderSummary(state, tpl) {
  const summaryName = $('summaryTemplateName');
  const currentSummary = $('currentSummary');
  const exportSummary = $('exportSummary');

  if (summaryName) summaryName.textContent = tpl.name;
  if (currentSummary) currentSummary.textContent = `${state.rowCount} rows · ${currencyLabel(state.currency)} · ${themeLabel(state.theme)}`;
  if (exportSummary) exportSummary.textContent = `${state.title} · ${state.rowCount} rows`;
}

function renderCategories() {
  $('categoryTabs').innerHTML = categories.map(cat => {
    const count = cat === 'All'
      ? Object.keys(templates).length
      : Object.values(templates).filter(tpl => tpl.category === cat).length;
    return `<button class="category-tab ${cat === activeCategory ? 'active' : ''}" type="button" data-category="${cat}" data-count="${count}">${cat}</button>`;
  }).join('');

  document.querySelectorAll('[data-category]').forEach(btn => {
    btn.addEventListener('click', () => {
      activeCategory = btn.dataset.category;
      renderCategories();
      renderGallery();
    });
  });
}

function renderGallery() {
  const query = $('templateSearch').value.trim().toLowerCase();
  const entries = Object.entries(templates).filter(([key, tpl]) => {
    const inCategory = activeCategory === 'All' || tpl.category === activeCategory;
    const inSearch = !query || `${tpl.name} ${tpl.category} ${tpl.description}`.toLowerCase().includes(query);
    return inCategory && inSearch;
  });

  const countLabel = $('templateCountLabel');
  if (countLabel) {
    const noun = entries.length === 1 ? 'sheet' : 'sheets';
    const scope = activeCategory === 'All' ? 'all categories' : activeCategory;
    countLabel.textContent = `Showing ${entries.length} ${noun} · ${scope}`;
  }

  $('templateGallery').innerHTML = entries.map(([key, tpl]) => `
    <button type="button" class="template-card ${key === activeTemplateKey ? 'active' : ''}" data-template="${key}" aria-pressed="${key === activeTemplateKey ? 'true' : 'false'}">
      <strong>${key === activeTemplateKey ? '✓ ' : ''}${tpl.name}</strong>
      <span>${tpl.description}</span>
      <em>${key === activeTemplateKey ? 'Selected · ' : ''}${tpl.category}</em>
    </button>
  `).join('');

  document.querySelectorAll('[data-template]').forEach(btn => {
    btn.addEventListener('click', () => selectTemplate(btn.dataset.template));
  });
}

function selectTemplate(key) {
  activeTemplateKey = key;
  $('sheetTitle').value = templates[key].defaultTitle;
  renderGallery();
  renderPreview();
}

function formulaWithoutEquals(formula) {
  return String(formula || '').replace(/^=/, '');
}

function hideFormulaUntilRowUsed(formula, excelRowNumber) {
  // Prevent blank template rows from displaying distracting 0 values in Google Sheets/Excel.
  return `=IF($A${excelRowNumber}=\"\",\"\",${formulaWithoutEquals(formula)})`;
}


function formulaWithoutEquals(formula) {
  return String(formula || '').replace(/^=/, '');
}

function hideFormulaUntilRowUsed(formula, excelRowNumber) {
  // Prevent blank template rows from displaying distracting 0 values in Google Sheets/Excel.
  return `=IF($A${excelRowNumber}="","",${formulaWithoutEquals(formula)})`;
}

function buildRows(state, forWorkbook = false) {
  const tpl = templates[state.templateKey];
  const headers = tpl.headers;
  const rows = [];

  if (useSamples) {
    tpl.sampleRows.forEach(row => rows.push([...row]));
  }

  // The actual worksheet has title rows + spacer + header, so data starts on Excel row 5.
  // Sample rows show normal calculated values. Empty template rows keep formulas, but stay visually blank
  // until the user starts the row, so the preview/workbook does not fill the sheet with distracting 0s.
  if (tpl.formulas) {
    rows.forEach((row, index) => {
      const excelRowNumber = index + 5;
      Object.entries(tpl.formulas).forEach(([colIndex, formulaFn]) => {
        row[Number(colIndex)] = formulaFn(excelRowNumber);
      });
    });
  }

  while (rows.length < state.rowCount) {
    const excelRowNumber = rows.length + 5;
    const row = headers.map(() => '');
    if (tpl.formulas) {
      Object.entries(tpl.formulas).forEach(([colIndex, formulaFn]) => {
        row[Number(colIndex)] = hideFormulaUntilRowUsed(formulaFn(excelRowNumber), excelRowNumber);
      });
    }
    rows.push(row);
  }

  return rows;
}

function columnToIndex(column) {
  let value = 0;
  String(column).toUpperCase().split('').forEach(ch => {
    value = value * 26 + (ch.charCodeAt(0) - 64);
  });
  return value - 1;
}

function getPreviewCellValue(ref, row) {
  const match = String(ref).match(/^([A-Z]+)\d+$/i);
  if (!match) return 0;
  const index = columnToIndex(match[1]);
  const value = row[index];
  if (typeof value === 'number') return value;
  if (typeof value === 'string') {
    if (value.startsWith('=')) return evaluatePreviewFormula(value, row);
    const parsed = Number(value.replace(/[$,]/g, ''));
    return Number.isFinite(parsed) ? parsed : 0;
  }
  return 0;
}

function evaluatePreviewFormula(value, row) {
  if (typeof value !== 'string' || !value.startsWith('=')) return value;

  let expression = value.slice(1).trim();

  // IF($A5="","",F5-E5) - used to keep empty formula rows visually blank.
  let blankGuard = expression.match(/^IF\(\$?A\d+\s*=\s*""\s*,\s*""\s*,\s*(.*)\)$/i);
  if (blankGuard) {
    const firstCell = row[0];
    if (firstCell === '' || firstCell === null || firstCell === undefined) return '';
    expression = blankGuard[1];
  }

  // COUNTIF(B5:AF5,"✓")
  let countif = expression.match(/^COUNTIF\(([A-Z]+\d+):([A-Z]+\d+),"([^"]*)"\)$/i);
  if (countif) {
    const start = columnToIndex(countif[1].match(/[A-Z]+/i)[0]);
    const end = columnToIndex(countif[2].match(/[A-Z]+/i)[0]);
    const target = countif[3];
    return row.slice(start, end + 1).filter(item => String(item) === target).length;
  }

  // SUM(B5:E5)
  let sum = expression.match(/^SUM\(([A-Z]+\d+):([A-Z]+\d+)\)$/i);
  if (sum) {
    const start = columnToIndex(sum[1].match(/[A-Z]+/i)[0]);
    const end = columnToIndex(sum[2].match(/[A-Z]+/i)[0]);
    return row.slice(start, end + 1).reduce((total, item) => {
      const parsed = typeof item === 'number' ? item : Number(String(item).replace(/[$,]/g, ''));
      return total + (Number.isFinite(parsed) ? parsed : 0);
    }, 0);
  }

  // IF(D5<=E5,"Yes","No")
  let simpleIf = expression.match(/^IF\(([A-Z]+\d+)(<=|>=|=|<|>)([A-Z]+\d+),\s*"([^"]*)",\s*"([^"]*)"\)$/i);
  if (simpleIf) {
    const left = getPreviewCellValue(simpleIf[1], row);
    const right = getPreviewCellValue(simpleIf[3], row);
    const op = simpleIf[2];
    const result =
      op === '<=' ? left <= right :
      op === '>=' ? left >= right :
      op === '<' ? left < right :
      op === '>' ? left > right :
      left === right;
    return result ? simpleIf[4] : simpleIf[5];
  }

  // IFS(H5>=0.9,"A",H5>=0.8,"B",...)
  if (/^IFS\(/i.test(expression)) {
    const percentRef = expression.match(/([A-Z]+\d+)\s*>=\s*0\.9/i);
    const score = percentRef ? getPreviewCellValue(percentRef[1], row) : 0;
    if (score >= 0.9) return 'A';
    if (score >= 0.8) return 'B';
    if (score >= 0.7) return 'C';
    if (score >= 0.6) return 'D';
    return 'F';
  }

  // IFERROR(F5/C5,0)
  let iferror = expression.match(/^IFERROR\((.*),\s*0\)$/i);
  if (iferror) expression = iferror[1];

  // MAX(0,C5-G5)
  let maxMatch = expression.match(/^MAX\(0,\s*(.*)\)$/i);
  if (maxMatch) {
    const val = evaluateArithmeticExpression(maxMatch[1], row);
    return Math.max(0, Number.isFinite(val) ? val : 0);
  }

  return evaluateArithmeticExpression(expression, row);
}

function evaluateArithmeticExpression(expression, row) {
  try {
    const replaced = expression.replace(/[A-Z]+\d+/gi, ref => String(getPreviewCellValue(ref, row) || 0));
    if (!/^[0-9+\-*/().\s]+$/.test(replaced)) return '';
    const result = Function(`"use strict"; return (${replaced});`)();
    return Number.isFinite(result) ? result : '';
  } catch (error) {
    return '';
  }
}

function formatDateForPreview(value) {
  if (!value) return '';
  if (value instanceof Date && !isNaN(value)) {
    return value.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric', timeZone: 'UTC' });
  }

  const text = String(value).trim();

  if (/^\d{4}-\d{2}-\d{2}$/.test(text)) {
    const [year, month, day] = text.split('-');
    return `${month}/${day}/${year}`;
  }

  if (/^\d{8}$/.test(text)) {
    return `${text.slice(0, 2)}/${text.slice(2, 4)}/${text.slice(4)}`;
  }

  const parsed = new Date(text);
  if (!Number.isNaN(parsed.getTime())) {
    return parsed.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
  }

  return text;
}

function formatCurrencyForPreview(value, state) {
  if (value === '' || value === null || value === undefined) return '';
  const parsed = typeof value === 'number' ? value : Number(String(value).replace(/[$,]/g, ''));
  if (!Number.isFinite(parsed)) return escapeHtml(value);
  const symbol = state.currency || '';
  const absValue = Math.abs(parsed).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return parsed < 0 ? `-${symbol}${absValue}` : `${symbol}${absValue}`;
}

function formatNumberForPreview(value) {
  if (value === '' || value === null || value === undefined) return '';
  const parsed = typeof value === 'number' ? value : Number(String(value).replace(/,/g, ''));
  if (!Number.isFinite(parsed)) return escapeHtml(value);
  return parsed.toLocaleString('en-US', { maximumFractionDigits: 2 });
}

function formatPercentForPreview(value) {
  if (value === '' || value === null || value === undefined) return '';
  const parsed = typeof value === 'number' ? value : Number(String(value).replace('%', ''));
  if (!Number.isFinite(parsed)) return escapeHtml(value);
  const percent = parsed <= 1 ? parsed * 100 : parsed;
  return `${percent.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 1 })}%`;
}

function previewValue(value, header, row, state) {
  const raw = typeof value === 'string' && value.startsWith('=') ? evaluatePreviewFormula(value, row) : value;

  if (isDateHeader(header)) return formatDateForPreview(raw);
  if (isPercentHeader(header)) return formatPercentForPreview(raw);
  if (isCurrencyHeader(header)) return formatCurrencyForPreview(raw, state);
  if (isIntegerHeader(header)) return formatNumberForPreview(raw);

  return raw ?? '';
}

function previewCellClass(header, value) {
  const classes = [];
  if (isDateHeader(header)) classes.push('date-cell');
  if (isCurrencyHeader(header)) classes.push('currency-cell');
  if (isPercentHeader(header)) classes.push('percent-cell');
  if (typeof value === 'string' && value.startsWith('=')) classes.push('formula-cell');
  return classes.length ? ` class="${classes.join(' ')}"` : '';
}

function renderPreview() {
  const state = getState();
  const tpl = templates[state.templateKey];

  document.body.classList.remove('theme-sky', 'theme-blush', 'theme-ink');
  if (state.theme !== 'sage') document.body.classList.add(`theme-${state.theme}`);

  $('previewTitle').textContent = tpl.name;
  $('metaTemplate').textContent = tpl.category;
  $('metaTitle').textContent = state.title;
  $('metaOwner').textContent = `Prepared for ${state.owner}`;

  const headers = tpl.headers;
  const rows = buildRows(state).slice(0, 12);

  $('previewTable').innerHTML = `
    <thead><tr>${headers.map(h => `<th>${escapeHtml(h)}</th>`).join('')}</tr></thead>
    <tbody>
      ${rows.map(row => `<tr>${headers.map((header, i) => {
        const raw = row[i] ?? '';
        const value = previewValue(raw, header, row, state);
        const cls = previewCellClass(header, raw);
        return `<td${cls}>${escapeHtml(value)}</td>`;
      }).join('')}</tr>`).join('')}
    </tbody>
  `;

  renderInfo(tpl, state);
  updateBuilderSummary(state, tpl);
}

function renderInfo(tpl, state) {
  const formulaCount = tpl.formulas ? Object.keys(tpl.formulas).length : 0;
  const summaryIncluded = Boolean(state.includeSummary && tpl.summary);
  const rows = [
    ['Template', tpl.name],
    ['Category', tpl.category],
    ['Best for', tpl.description],
    ['Rows', state.rowCount],
    ['Columns', `${tpl.headers.length} columns`],
    ['Formula columns', formulaCount ? `${formulaCount} included` : 'None'],
    ['Summary sheet', summaryIncluded ? 'Included' : 'Not needed'],
    ['Instructions sheet', state.includeInstructions ? 'Included' : 'Not included'],
    ['Date format', state.dateEntryStyle === 'quick' ? '10232025 → mm/dd/yyyy' : 'mm/dd/yyyy'],
    ['File format', '.xlsx workbook']
  ];
  $('templateInfo').innerHTML = rows.map(([a,b]) =>
    `<div class="info-row"><span>${escapeHtml(a)}</span><strong>${escapeHtml(b)}</strong></div>`
  ).join('');
}


function isDateHeader(header) {
  return /date|week of|publish date|order date|due date|paid date|target date|refill date|expiration date|completed date|renewal date|cancel date|follow-up date|service date|next due|last completed|frozen date|use-by date|appointment date|send date|published date|review date/i.test(header);
}

function isCurrencyHeader(header) {
  return /price|cost|fee|fees|shipping|profit|planned|actual|difference|amount|income|expense|deposit|balance|remaining|new balance|value|total|sales|estimated|pledged|received|quoted/i.test(header);
}

function isIntegerHeader(header) {
  return /qty|quantity|count|stock|on hand|reorder point|pages|minutes|points|sets|reps|quality|miles|severity|systolic|diastolic|pulse|reading|score|rank|clicks|opens|wrapped|purchased|total$/i.test(header);
}

function isStatusHeader(header) {
  return /status|paid|receipt|reorder|reimbursable|autopay|blocked|posted|packed|taken|contacted/i.test(header);
}

function isPercentHeader(header) {
  return /percent|progress|rate|margin|profit margin|open rate|click rate/i.test(header);
}

function excelCurrencyFormat(symbol) {
  if (!symbol) return '#,##0.00';
  return `"${symbol}"#,##0.00;[Red]-"${symbol}"#,##0.00`;
}

function normalizeDateValue(value) {
  if (value instanceof Date) return value;
  if (typeof value !== 'string') return value;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
  const [y, m, d] = value.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d));
}

function applySheetFormatting(ws, headers, state, headerRowIndex = 3, dataStartRowIndex = 4) {
  if (!ws['!ref']) return;
  const range = XLSX.utils.decode_range(ws['!ref']);
  const currencyFormat = excelCurrencyFormat(state.currency);

  for (let c = 0; c < headers.length; c++) {
    const header = headers[c];

    for (let r = dataStartRowIndex; r <= range.e.r; r++) {
      const addr = XLSX.utils.encode_cell({ r, c });
      const cell = ws[addr];
      if (!cell) continue;

      if (isDateHeader(header)) {
        const dateValue = normalizeDateValue(cell.v);
        if (dateValue instanceof Date && !isNaN(dateValue)) {
          cell.v = dateValue;
          cell.t = 'd';
          cell.z = 'mm/dd/yyyy';
        } else if (state.dateEntryStyle === 'quick') {
          // Quick entry: typing 10232025 displays as 10/23/2025.
          // This is a custom display format, not a true date serial.
          cell.z = '00\\/00\\/0000';
        } else {
          // Real date mode: type dates like 10/23/2025 for sorting/calculations.
          cell.z = 'mm/dd/yyyy';
        }
      }

      if (isCurrencyHeader(header)) {
        cell.z = currencyFormat;
        if (typeof cell.v === 'string' && cell.v !== '' && !cell.v.startsWith('=')) {
          const parsed = Number(cell.v);
          if (!Number.isNaN(parsed)) {
            cell.v = parsed;
            cell.t = 'n';
          }
        }
      }

      if (isIntegerHeader(header)) {
        cell.z = '0';
      }

      if (isPercentHeader(header)) {
        cell.z = '0.00%';
      }

      if (isStatusHeader(header)) {
        cell.z = '@';
      }

      if (cell.f) {
        if (isCurrencyHeader(header)) cell.z = currencyFormat;
        else if (isPercentHeader(header)) cell.z = '0.00%';
        else if (isIntegerHeader(header)) cell.z = '0';
        else cell.z = '0.00';
      }
    }

    const headerAddr = XLSX.utils.encode_cell({ r: headerRowIndex, c });
    if (ws[headerAddr]) {
      ws[headerAddr].s = {
        font: { bold: true, color: { rgb: '223033' } },
        fill: { fgColor: { rgb: 'E8F3EF' } },
        alignment: { horizontal: 'center', vertical: 'center', wrapText: true }
      };
    }
  }

  // Ensure blank date-entry cells exist so Excel/Sheets applies the selected date-entry format.
  for (let c = 0; c < headers.length; c++) {
    const header = headers[c];
    if (!isDateHeader(header)) continue;
    for (let r = dataStartRowIndex; r <= range.e.r; r++) {
      const addr = XLSX.utils.encode_cell({ r, c });
      if (!ws[addr]) ws[addr] = { t: 'z' };
      ws[addr].z = state.dateEntryStyle === 'quick' ? '00\\/00\\/0000' : 'mm/dd/yyyy';
    }
  }

  // Title rows
  ['A1', 'A2'].forEach((addr, index) => {
    if (ws[addr]) {
      ws[addr].s = {
        font: { bold: index === 0, sz: index === 0 ? 18 : 11, color: { rgb: index === 0 ? '223033' : '617276' } }
      };
    }
  });

  ws['!freeze'] = { xSplit: 0, ySplit: 4 };
}

function applySummaryFormatting(ws, state) {
  if (!ws['!ref']) return;
  const range = XLSX.utils.decode_range(ws['!ref']);
  const currencyFormat = excelCurrencyFormat(state.currency);
  for (let r = 0; r <= range.e.r; r++) {
    for (let c = 0; c <= range.e.c; c++) {
      const addr = XLSX.utils.encode_cell({ r, c });
      const cell = ws[addr];
      if (!cell) continue;

      if (r === 0) {
        cell.s = { font: { bold: true, sz: 18, color: { rgb: '223033' } } };
      }

      if (cell.f) {
        cell.z = currencyFormat;
      }

      if (typeof cell.v === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(cell.v)) {
        const d = normalizeDateValue(cell.v);
        cell.v = d;
        cell.t = 'd';
        cell.z = 'mm/dd/yyyy';
      }
    }
  }
}


function aoaToSheet(aoa) {
  return XLSX.utils.aoa_to_sheet(aoa);
}

function applyWorksheetWidths(ws, headers) {
  ws['!cols'] = headers.map(h => ({ wch: Math.max(12, Math.min(24, String(h).length + 4)) }));
}

function addFormulaCells(ws, aoa) {
  const range = XLSX.utils.decode_range(ws['!ref']);
  for (let R = 0; R <= range.e.r; ++R) {
    for (let C = 0; C <= range.e.c; ++C) {
      const addr = XLSX.utils.encode_cell({ r: R, c: C });
      const cell = ws[addr];
      if (!cell || typeof cell.v !== 'string' || !cell.v.startsWith('=')) continue;
      cell.f = cell.v.slice(1);
      delete cell.v;
      cell.t = 'n';
    }
  }
}

function makeMainSheet(state) {
  const tpl = templates[state.templateKey];
  const headers = tpl.headers;
  const rows = buildRows(state);
  const aoa = [
    [state.title],
    [`Prepared for ${state.owner}`, `Start date: ${state.startDate}`],
    [],
    headers,
    ...rows
  ];

  const ws = aoaToSheet(aoa);
  ws['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: Math.min(headers.length - 1, 5) } }];
  applyWorksheetWidths(ws, headers);
  addFormulaCells(ws, aoa);
  applySheetFormatting(ws, headers, state, 3, 4);
  return ws;
}

function makeSummarySheet(state) {
  const tpl = templates[state.templateKey];
  const currency = state.currency || '';
  const summaryRows = [
    ['Summary', state.title],
    ['Prepared for', state.owner],
    ['Template', tpl.name],
    ['Start date', state.startDate],
    [],
    ['Metric', 'Formula / Value']
  ];

  if (state.templateKey === 'budget') {
    summaryRows.push(
      ['Total Planned', `=SUM('${tpl.sheetName}'!E5:E${state.rowCount + 4})`],
      ['Total Actual', `=SUM('${tpl.sheetName}'!F5:F${state.rowCount + 4})`],
      ['Total Difference', `=SUM('${tpl.sheetName}'!G5:G${state.rowCount + 4})`]
    );
  } else if (state.templateKey === 'expense') {
    summaryRows.push(
      ['Total Expenses', `=SUM('${tpl.sheetName}'!E5:E${state.rowCount + 4})`],
      ['Receipts Count', `=COUNTIF('${tpl.sheetName}'!G5:G${state.rowCount + 4},"Yes")`]
    );
  } else if (state.templateKey === 'etsy') {
    summaryRows.push(
      ['Total Sales', `=SUM('${tpl.sheetName}'!E5:E${state.rowCount + 4})`],
      ['Total Shipping Charged', `=SUM('${tpl.sheetName}'!F5:F${state.rowCount + 4})`],
      ['Total Profit', `=SUM('${tpl.sheetName}'!J5:J${state.rowCount + 4})`]
    );
  } else if (state.templateKey === 'inventory') {
    summaryRows.push(
      ['Total Inventory Value', `=SUM('${tpl.sheetName}'!G5:G${state.rowCount + 4})`],
      ['Items To Reorder', `=COUNTIF('${tpl.sheetName}'!I5:I${state.rowCount + 4},"Yes")`]
    );
  } else if (state.templateKey === 'wedding') {
    summaryRows.push(
      ['Estimated Total', `=SUM('${tpl.sheetName}'!D5:D${state.rowCount + 4})`],
      ['Actual Total', `=SUM('${tpl.sheetName}'!E5:E${state.rowCount + 4})`],
      ['Deposits Paid', `=SUM('${tpl.sheetName}'!F5:F${state.rowCount + 4})`],
      ['Balance Due', `=SUM('${tpl.sheetName}'!G5:G${state.rowCount + 4})`]
    );
  } else if (state.templateKey === 'reading') {
    summaryRows.push(
      ['Total Pages Read', `=SUM('${tpl.sheetName}'!D5:D${state.rowCount + 4})`],
      ['Total Minutes', `=SUM('${tpl.sheetName}'!E5:E${state.rowCount + 4})`]
    );
  } else if (state.templateKey === 'billpay') {
    summaryRows.push(
      ['Total Amount Due', `=SUM('${tpl.sheetName}'!D5:D${state.rowCount + 4})`],
      ['Total Amount Paid', `=SUM('${tpl.sheetName}'!E5:E${state.rowCount + 4})`]
    );
  } else if (state.templateKey === 'savings') {
    summaryRows.push(
      ['Target Amount Total', `=SUM('${tpl.sheetName}'!C5:C${state.rowCount + 4})`],
      ['Current Saved Total', `=SUM('${tpl.sheetName}'!F5:F${state.rowCount + 4})`],
      ['Remaining Total', `=SUM('${tpl.sheetName}'!G5:G${state.rowCount + 4})`]
    );
  } else if (state.templateKey === 'debt') {
    summaryRows.push(
      ['Starting Balance Total', `=SUM('${tpl.sheetName}'!B5:B${state.rowCount + 4})`],
      ['Current Balance Total', `=SUM('${tpl.sheetName}'!C5:C${state.rowCount + 4})`],
      ['New Balance Total', `=SUM('${tpl.sheetName}'!I5:I${state.rowCount + 4})`]
    );
  } else if (state.templateKey === 'client') {
    summaryRows.push(
      ['Quoted Total', `=SUM('${tpl.sheetName}'!E5:E${state.rowCount + 4})`],
      ['Deposits Total', `=SUM('${tpl.sheetName}'!F5:F${state.rowCount + 4})`],
      ['Balance Due Total', `=SUM('${tpl.sheetName}'!G5:G${state.rowCount + 4})`]
    );
  } else if (state.templateKey === 'eventbudget') {
    summaryRows.push(
      ['Estimated Total', `=SUM('${tpl.sheetName}'!C5:C${state.rowCount + 4})`],
      ['Actual Total', `=SUM('${tpl.sheetName}'!D5:D${state.rowCount + 4})`],
      ['Amount Paid Total', `=SUM('${tpl.sheetName}'!E5:E${state.rowCount + 4})`],
      ['Balance Due Total', `=SUM('${tpl.sheetName}'!F5:F${state.rowCount + 4})`]
    );
  } else if (state.templateKey === 'fundraiser') {
    summaryRows.push(
      ['Pledged Total', `=SUM('${tpl.sheetName}'!D5:D${state.rowCount + 4})`],
      ['Received Total', `=SUM('${tpl.sheetName}'!E5:E${state.rowCount + 4})`],
      ['Balance Total', `=SUM('${tpl.sheetName}'!F5:F${state.rowCount + 4})`]
    );
  } else if (state.templateKey === 'gradebook') {
    summaryRows.push(
      ['Average Percent', `=AVERAGE('${tpl.sheetName}'!H5:H${state.rowCount + 4})`],
      ['Students Listed', `=COUNTA('${tpl.sheetName}'!A5:A${state.rowCount + 4})`]
    );
  } else if (state.templateKey === 'attendance') {
    summaryRows.push(
      ['Present Count', `=COUNTIF('${tpl.sheetName}'!C5:C${state.rowCount + 4},"Present")`],
      ['Absent Count', `=COUNTIF('${tpl.sheetName}'!C5:C${state.rowCount + 4},"Absent")`]
    );
  } else if (['sleep', 'workout', 'travel'].includes(state.templateKey)) {
    summaryRows.push(['Entries', `=COUNTA('${tpl.sheetName}'!A5:A${state.rowCount + 4})`]);
  } else if (['paycheckBudget', 'sinkingFunds', 'subscription', 'taxDeduction', 'productPricing', 'profitLoss', 'mileage', 'wholesale', 'partyPlanner', 'birthdayBudget', 'holidayGift'].includes(state.templateKey)) {
    summaryRows.push(['Rows included', state.rowCount]);
  } else {
    summaryRows.push(['Rows included', state.rowCount]);
  }

  const ws = aoaToSheet(summaryRows);
  ws['!cols'] = [{ wch: 24 }, { wch: 28 }];
  addFormulaCells(ws, summaryRows);
  applySummaryFormatting(ws, state);
  return ws;
}

function makeInstructionsSheet(state) {
  const tpl = templates[state.templateKey];
  const rows = [
    ['How to use this spreadsheet'],
    [],
    ['1', 'Open this .xlsx file in Google Sheets, Excel, or Numbers.'],
    ['2', 'Rename the file if needed.'],
    ['3', 'Fill in the blank rows under the headers.'],
    ['4', 'Formula columns are already included where useful.'],
    ['5', state.dateEntryStyle === 'quick' ? 'Quick date entry is enabled: typing 10232025 will display as 10/23/2025, but it is not a true date serial.' : 'Real date format is enabled: type dates like 10/23/2025 for best sorting and calculations.'],
    ['6', 'Upload to Google Drive and choose “Open with Google Sheets” if you want to use it online.'],
    [],
    ['Template', tpl.name],
    ['Category', tpl.category],
    ['Generated by', 'Just Pages Studio Sheet Studio']
  ];
  const ws = aoaToSheet(rows);
  ws['!cols'] = [{ wch: 18 }, { wch: 78 }];
  if (ws['A1']) ws['A1'].s = { font: { bold: true, sz: 18, color: { rgb: '223033' } } };
  return ws;
}

function buildWorkbook() {
  const state = getState();
  const tpl = templates[state.templateKey];
  const wb = XLSX.utils.book_new();

  const main = makeMainSheet(state);
  XLSX.utils.book_append_sheet(wb, main, tpl.sheetName.slice(0, 31));

  if (state.includeSummary && tpl.summary) {
    XLSX.utils.book_append_sheet(wb, makeSummarySheet(state), 'Summary');
  }

  if (state.includeInstructions) {
    XLSX.utils.book_append_sheet(wb, makeInstructionsSheet(state), 'Instructions');
  }

  return { wb, state, tpl };
}

function downloadXlsx() {
  const { wb, state } = buildWorkbook();
  const fileName = `${safeFileName(state.title)}.xlsx`;
  XLSX.writeFile(wb, fileName, { cellStyles: true, cellDates: true });
}

function downloadCsv() {
  const state = getState();
  const tpl = templates[state.templateKey];
  const aoa = [tpl.headers, ...buildRows(state)];
  const ws = XLSX.utils.aoa_to_sheet(aoa);
  const csv = XLSX.utils.sheet_to_csv(ws);
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `${safeFileName(state.title)}.csv`;
  link.click();
  URL.revokeObjectURL(link.href);
}

function useSampleData() {
  useSamples = true;
  renderPreview();
}

function clearSampleData() {
  useSamples = false;
  renderPreview();
}

function init() {
  $('startDate').value = todayISO();
  renderCategories();
  renderGallery();
  renderPreview();

  ['sheetTitle', 'ownerName', 'startDate', 'rowCount', 'currency', 'theme', 'dateEntryStyle', 'includeInstructions', 'includeSummary'].forEach(id => {
    $(id).addEventListener('input', renderPreview);
    $(id).addEventListener('change', renderPreview);
  });

  $('templateSearch').addEventListener('input', renderGallery);
  document.querySelectorAll('[data-quick-template]').forEach(btn => {
    btn.addEventListener('click', () => selectTemplate(btn.dataset.quickTemplate));
  });
  $('downloadBtn').addEventListener('click', downloadXlsx);
    $('csvBtn').addEventListener('click', downloadCsv);
  $('refreshBtn').addEventListener('click', renderPreview);
  $('sampleBtn').addEventListener('click', useSampleData);
  $('clearBtn').addEventListener('click', clearSampleData);
}

document.addEventListener('DOMContentLoaded', init);
