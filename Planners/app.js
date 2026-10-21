const $ = (id) => document.getElementById(id);

const plannerConfig = {
  fitness: {
    icon: '✦', title: 'My Fitness Journey', label: 'Fitness Tracker', duration: 'weeks',
    sections: [
      ['goals', 'Goals page'], ['measurements', 'Measurements tracker'], ['weekly', 'Weekly workout planner'],
      ['daily', 'Daily workout logs'], ['habits', 'Habit tracker'], ['reflection', 'Progress reflection']
    ]
  },
  daily: {
    icon: '☀', title: 'My Weekly Planner', label: 'Daily / Weekly Planner', duration: 'weeks',
    sections: [
      ['overview', 'Weekly overview'], ['dailyPlan', 'Daily planning pages'], ['priorities', 'Priorities + top tasks'],
      ['appointments', 'Appointments + reminders'], ['habits', 'Habit tracker'], ['reflection', 'Weekly reflection']
    ]
  },
  reading: {
    icon: '📚', title: 'My Reading Log', label: 'Reading Log', duration: 'weeks',
    sections: [
      ['wishlist', 'Book wishlist'], ['readingLog', 'Reading log pages'], ['reviews', 'Book review pages'],
      ['challenge', 'Reading challenge tracker'], ['quotes', 'Favorite quotes'], ['summary', 'Monthly reading summary']
    ]
  },
  chore: {
    icon: '★', title: 'My Chore Chart', label: 'Kids Chore & Reward Chart', duration: 'weeks',
    sections: [
      ['routine', 'Morning / evening routine'], ['chores', 'Weekly chore chart'], ['rewards', 'Reward stars'],
      ['behavior', 'Kind choices tracker'], ['allowance', 'Allowance tracker'], ['notes', 'Parent notes']
    ]
  },
  meal: {
    icon: '🍽', title: 'My Meal Planner', label: 'Meal Planner + Grocery List', duration: 'weeks',
    sections: [
      ['weeklyMenu', 'Weekly menu'], ['grocery', 'Grocery list'], ['prep', 'Meal prep plan'],
      ['pantry', 'Pantry / freezer inventory'], ['recipes', 'Recipe notes'], ['favorites', 'Family favorites']
    ]
  },
  budget: {
    icon: '$', title: 'My Budget Planner', label: 'Budget Planner', duration: 'months',
    sections: [
      ['income', 'Income tracker'], ['bills', 'Bill payment tracker'], ['expenses', 'Expense log'],
      ['savings', 'Savings goal'], ['debt', 'Debt payoff tracker'], ['summary', 'Monthly summary']
    ]
  },
  pet: {
    icon: '🐾', title: 'My Pet Care Tracker', label: 'Pet Care Tracker', duration: 'weeks',
    sections: [
      ['profile', 'Pet profile'], ['feeding', 'Feeding tracker'], ['care', 'Grooming + care'],
      ['health', 'Medication / health log'], ['training', 'Training notes'], ['appointments', 'Vet appointments']
    ]
  },
  baby: {
    icon: '♡', title: 'Baby Daily Tracker', label: 'Baby Feeding & Sleep Tracker', duration: 'weeks',
    sections: [
      ['feeding', 'Feeding log'], ['sleep', 'Sleep tracker'], ['diaper', 'Diaper tracker'],
      ['pumping', 'Pumping / bottle tracker'], ['medicine', 'Medicine log'], ['milestones', 'Milestone notes']
    ]
  }
,
  wedding: {
    icon: '♡', title: 'Our Wedding Planner', label: 'Wedding Planner', duration: 'months',
    sections: [
      ['overview', 'Wedding overview'], ['budget', 'Wedding budget'], ['guestList', 'Guest list + RSVP'],
      ['vendors', 'Vendor contacts'], ['timeline', 'Planning timeline'], ['seating', 'Seating chart'],
      ['shotList', 'Photography shot list'], ['giftTracker', 'Gift tracker'], ['dayOf', 'Day-of timeline']
    ]
  },
  party: {
    icon: '🎉', title: 'My Party Planner', label: 'Party Planner', duration: 'weeks',
    sections: [
      ['overview', 'Party overview'], ['guestList', 'Guest list'], ['budget', 'Party budget'],
      ['food', 'Food + drinks'], ['decor', 'Decor checklist'], ['timeline', 'Party timeline'],
      ['shopping', 'Shopping list'], ['notes', 'Notes + ideas']
    ]
  },
  travel: {
    icon: '✈', title: 'My Travel Planner', label: 'Travel Planner', duration: 'weeks',
    sections: [
      ['overview', 'Trip overview'], ['itinerary', 'Daily itinerary'], ['packing', 'Packing list'],
      ['reservations', 'Flights + hotel'], ['budget', 'Travel budget'], ['places', 'Places to visit'],
      ['journal', 'Travel journal'], ['souvenirs', 'Souvenir tracker']
    ]
  },
  moving: {
    icon: '⌂', title: 'My Moving Planner', label: 'Moving Planner', duration: 'weeks',
    sections: [
      ['overview', 'Move overview'], ['checklist', 'Moving checklist'], ['packing', 'Room packing list'],
      ['utilities', 'Utilities + address changes'], ['budget', 'Moving budget'], ['inventory', 'Box inventory'],
      ['newHome', 'New home setup'], ['donate', 'Donate / sell / keep']
    ]
  },
  home: {
    icon: '⌂', title: 'Home Management Binder', label: 'Home Management Binder', duration: 'months',
    sections: [
      ['dashboard', 'Home dashboard'], ['cleaning', 'Cleaning schedule'], ['maintenance', 'Maintenance log'],
      ['contacts', 'Emergency contacts'], ['appliances', 'Appliance info'], ['passwords', 'Password tracker'],
      ['family', 'Family schedule'], ['projects', 'Home project planner']
    ]
  },
  student: {
    icon: '✎', title: 'My Student Planner', label: 'Student Planner', duration: 'weeks',
    sections: [
      ['schedule', 'Class schedule'], ['assignments', 'Assignment tracker'], ['study', 'Study planner'],
      ['exam', 'Exam prep'], ['project', 'Project planner'], ['reading', 'Reading / notes'],
      ['grades', 'Grade tracker'], ['habits', 'Study habits']
    ]
  },
  teacher: {
    icon: '✎', title: 'My Teacher Planner', label: 'Teacher Planner', duration: 'weeks',
    sections: [
      ['lesson', 'Weekly lesson plan'], ['roster', 'Student roster'], ['grades', 'Grading tracker'],
      ['contacts', 'Parent contact log'], ['sub', 'Substitute notes'], ['supplies', 'Classroom checklist'],
      ['meetings', 'Meeting notes'], ['reflection', 'Teaching reflection']
    ]
  },
  etsy: {
    icon: '★', title: 'My Etsy Seller Planner', label: 'Etsy Seller Planner', duration: 'months',
    sections: [
      ['ideas', 'Product idea bank'], ['listing', 'Listing planner'], ['keywords', 'Keyword tracker'],
      ['orders', 'Order tracker'], ['inventory', 'Inventory tracker'], ['seasonal', 'Seasonal launch calendar'],
      ['expenses', 'Expense tracker'], ['social', 'Promotion planner']
    ]
  },
  social: {
    icon: '#', title: 'My Social Media Planner', label: 'Social Media Planner', duration: 'weeks',
    sections: [
      ['calendar', 'Content calendar'], ['ideas', 'Post idea bank'], ['caption', 'Caption drafts'],
      ['video', 'Reel / video planner'], ['hashtags', 'Hashtag tracker'], ['analytics', 'Analytics tracker'],
      ['campaign', 'Campaign planner'], ['batching', 'Batching checklist']
    ]
  },
  selfcare: {
    icon: '☾', title: 'My Self-Care Journal', label: 'Self-Care Journal', duration: 'weeks',
    sections: [
      ['checkin', 'Daily check-in'], ['mood', 'Mood tracker'], ['sleep', 'Sleep tracker'],
      ['gratitude', 'Gratitude journal'], ['triggers', 'Stress triggers'], ['tools', 'Coping tools'],
      ['affirmations', 'Affirmations'], ['reflection', 'Weekly reflection']
    ]
  },
  garden: {
    icon: '✿', title: 'My Garden Planner', label: 'Garden Planner', duration: 'months',
    sections: [
      ['layout', 'Garden layout'], ['seeds', 'Seed inventory'], ['planting', 'Planting calendar'],
      ['watering', 'Watering schedule'], ['harvest', 'Harvest log'], ['pests', 'Pest notes'],
      ['plants', 'Plant care journal'], ['wishlist', 'Garden wishlist']
    ]
  },
  recipe: {
    icon: '🍽', title: 'My Recipe Binder', label: 'Recipe Binder', duration: 'months',
    sections: [
      ['recipeCard', 'Recipe cards'], ['favorites', 'Family favorites'], ['baking', 'Baking notes'],
      ['holiday', 'Holiday recipe planner'], ['grocery', 'Master grocery list'], ['mealIdeas', 'Meal idea bank'],
      ['inventory', 'Pantry inventory'], ['reviews', 'Recipe reviews']
    ]
  },
  goal: {
    icon: '◆', title: 'My Goal Planner', label: 'Goal Planner', duration: 'months',
    sections: [
      ['vision', 'Vision page'], ['yearly', 'Yearly goals'], ['quarterly', '90-day goals'],
      ['monthly', 'Monthly action plan'], ['weekly', 'Weekly steps'], ['habits', 'Habit tracker'],
      ['progress', 'Progress review'], ['reward', 'Reward tracker']
    ]
  },
  pregnancy: {
    icon: '♡', title: 'My Pregnancy Planner', label: 'Pregnancy Planner / Journal', duration: 'weeks',
    sections: [['weeklyCheckin', 'Weekly pregnancy check-in'], ['appointments', 'Doctor appointment tracker'], ['symptoms', 'Symptoms tracker'], ['babyNames', 'Baby name ideas'], ['hospitalBag', 'Hospital bag checklist'], ['birthPlan', 'Birth plan'], ['registry', 'Baby registry tracker'], ['babyShower', 'Baby shower planner'], ['movement', 'Fetal movement tracker'], ['doctorQuestions', 'Questions for doctor']]
  },
  newbornMemory: {
    icon: '♡', title: 'Baby\'s First Year Journal', label: 'Newborn / First Year Memory Journal', duration: 'months',
    sections: [['monthlyMilestones', 'Monthly milestone pages'], ['growth', 'Growth tracker'], ['firsts', 'First moments'], ['doctorVisits', 'Doctor visit log'], ['memories', 'Family memories'], ['holidays', 'First holidays'], ['photoNotes', 'Photo notes'], ['letter', 'Letter to baby']]
  },
  medicalBinder: {
    icon: '+', title: 'Medical & Health Binder', label: 'Medical / Health Binder', duration: 'months',
    sections: [['doctorVisits', 'Doctor visits'], ['medications', 'Medication list'], ['symptoms', 'Symptom tracker'], ['labs', 'Lab results notes'], ['insurance', 'Insurance info'], ['questions', 'Appointment questions'], ['history', 'Family medical history'], ['emergency', 'Emergency contacts'], ['vaccines', 'Vaccine log']]
  },
  adhdFocus: {
    icon: '◆', title: 'ADHD Focus Planner', label: 'ADHD / Focus Planner', duration: 'weeks',
    sections: [['brainDump', 'Brain dump'], ['prioritySort', 'Priority sorting'], ['timeBlock', 'Time-blocking'], ['taskBreakdown', 'Task breakdown'], ['distractions', 'Distraction list'], ['rewards', 'Dopamine reward list'], ['dailyReset', 'Daily reset'], ['weeklyReview', 'Weekly review']]
  },
  cleaningDeclutter: {
    icon: '⌂', title: 'Cleaning & Decluttering Planner', label: 'Cleaning / Decluttering Planner', duration: 'weeks',
    sections: [['roomDeclutter', 'Room-by-room declutter'], ['donation', 'Donation tracker'], ['quickClean', '15-minute cleaning checklist'], ['deepClean', 'Deep cleaning schedule'], ['springClean', 'Spring cleaning planner'], ['beforeAfter', 'Before / after notes'], ['supplies', 'Cleaning supplies inventory']]
  },
  holiday: {
    icon: '★', title: 'Holiday Planner', label: 'Holiday Planner', duration: 'weeks',
    sections: [['giftList', 'Gift list'], ['budget', 'Holiday budget'], ['cards', 'Card mailing list'], ['meal', 'Holiday meal planner'], ['decor', 'Decoration checklist'], ['events', 'Event calendar'], ['shopping', 'Shopping tracker'], ['traditions', 'Traditions list']]
  },
  christmas: {
    icon: '★', title: 'Christmas Planner', label: 'Christmas Planner', duration: 'weeks',
    sections: [['giftTracker', 'Gift tracker'], ['stocking', 'Stocking stuffer list'], ['cards', 'Christmas card list'], ['cookies', 'Cookie baking planner'], ['meal', 'Holiday meal plan'], ['decorInventory', 'Decoration inventory'], ['traditions', 'Family traditions'], ['december', 'December calendar']]
  },
  birthday: {
    icon: '🎉', title: 'Birthday Planner', label: 'Birthday Planner', duration: 'weeks',
    sections: [['budget', 'Birthday party budget'], ['guestList', 'Guest list'], ['giftIdeas', 'Gift ideas'], ['theme', 'Theme ideas'], ['cake', 'Cake notes'], ['activities', 'Activity plan'], ['shopping', 'Shopping checklist'], ['thankYou', 'Thank-you note tracker']]
  },
  graduation: {
    icon: '★', title: 'Graduation Planner', label: 'Graduation Planner', duration: 'weeks',
    sections: [['party', 'Graduation party planner'], ['guestList', 'Guest list'], ['announcements', 'Announcement mailing list'], ['giftTracker', 'Gift tracker'], ['photo', 'Photo checklist'], ['capGown', 'Cap / gown checklist'], ['ceremony', 'Ceremony details'], ['thankYou', 'Thank-you note tracker']]
  },
  digitalLife: {
    icon: '#', title: 'Password & Digital Life Organizer', label: 'Password / Digital Life Organizer', duration: 'months',
    sections: [['accounts', 'Website account tracker'], ['passwordHints', 'Password hints'], ['subscriptions', 'Subscription tracker'], ['devices', 'Device inventory'], ['renewals', 'Renewal dates'], ['important', 'Important digital accounts']]
  },
  kdp: {
    icon: 'K', title: 'KDP Planner', label: 'KDP Planner', duration: 'months',
    sections: [['bookIdeas', 'Book idea tracker'], ['keywords', 'Keyword research'], ['categories', 'Category research'], ['cover', 'Cover design notes'], ['interior', 'Interior checklist'], ['upload', 'Upload checklist'], ['pricing', 'Pricing tracker'], ['launch', 'Launch plan'], ['sales', 'Sales tracker']]
  },
  shopifyWebsite: {
    icon: '⌂', title: 'Shopify / Website Planner', label: 'Shopify / Website Planner', duration: 'months',
    sections: [['productPages', 'Product page checklist'], ['seo', 'SEO keyword tracker'], ['homepage', 'Homepage copy planner'], ['blog', 'Blog idea bank'], ['updates', 'Website update log'], ['email', 'Email signup ideas'], ['traffic', 'Traffic tracker'], ['conversion', 'Conversion notes']]
  },
  contentRepurpose: {
    icon: '#', title: 'Content Repurposing Planner', label: 'Content Repurposing Planner', duration: 'weeks',
    sections: [['original', 'Original content idea'], ['facebook', 'Facebook post'], ['pinterest', 'Pinterest pin idea'], ['blog', 'Blog title'], ['email', 'Email subject'], ['video', 'Short video idea'], ['captions', 'Caption variations'], ['performance', 'Performance notes']]
  },
  productLaunch: {
    icon: '★', title: 'Product Launch Planner', label: 'Product Launch Planner', duration: 'weeks',
    sections: [['idea', 'Product idea'], ['audience', 'Audience'], ['pricing', 'Pricing'], ['materials', 'Materials'], ['photos', 'Photos / mockups'], ['listing', 'Listing checklist'], ['calendar', 'Launch calendar'], ['promotion', 'Promotion plan'], ['results', 'Results review']]
  },
  homeschool: {
    icon: '✎', title: 'Homeschool Planner', label: 'Homeschool Planner', duration: 'weeks',
    sections: [['lesson', 'Weekly lesson plan'], ['attendance', 'Attendance tracker'], ['subjects', 'Subject tracker'], ['reading', 'Reading log'], ['fieldTrip', 'Field trip planner'], ['projects', 'Project tracker'], ['progress', 'Progress notes'], ['portfolio', 'Portfolio checklist']]
  },
  kidsReadingChallenge: {
    icon: '📚', title: 'Kids Reading Challenge', label: 'Kids Reading Challenge', duration: 'weeks',
    sections: [['thirtyBooks', '30-book challenge'], ['genre', 'Genre challenge'], ['bingo', 'Reading bingo'], ['character', 'Favorite character'], ['review', 'Book review card'], ['reward', 'Reward tracker']]
  },
  kidsSummer: {
    icon: '☀', title: 'Kids Summer Planner', label: 'Kids Summer Planner', duration: 'weeks',
    sections: [['bucket', 'Summer bucket list'], ['routine', 'Daily routine'], ['reading', 'Reading tracker'], ['chores', 'Chore chart'], ['screenTime', 'Screen-time tracker'], ['activities', 'Activity ideas'], ['weekly', 'Weekly plan']]
  },
  practiceTracker: {
    icon: '♪', title: 'Practice Tracker', label: 'Practice Tracker', duration: 'weeks',
    sections: [['dailyLog', 'Daily practice log'], ['skillFocus', 'Skill focus'], ['time', 'Time practiced'], ['teacherNotes', 'Coach / teacher notes'], ['goals', 'Goal tracker'], ['performance', 'Performance prep'], ['reflection', 'Progress reflection']]
  },
  bookClub: {
    icon: '📚', title: 'Book Club Planner', label: 'Book Club Planner', duration: 'months',
    sections: [['schedule', 'Meeting schedule'], ['bookPicks', 'Book picks'], ['members', 'Member list'], ['questions', 'Discussion questions'], ['snacks', 'Snacks'], ['quotes', 'Favorite quotes'], ['ratings', 'Ratings']]
  },
  craftProject: {
    icon: '✂', title: 'Craft Project Planner', label: 'Craft Project Planner', duration: 'months',
    sections: [['idea', 'Project idea'], ['supplies', 'Supply list'], ['cost', 'Cost tracker'], ['steps', 'Steps'], ['pattern', 'Pattern notes'], ['progress', 'Progress tracker'], ['review', 'Finished project review']]
  },
  sewingCrochet: {
    icon: '✂', title: 'Sewing / Crochet Planner', label: 'Sewing / Crochet Planner', duration: 'months',
    sections: [['pattern', 'Pattern details'], ['inventory', 'Yarn / fabric inventory'], ['tools', 'Hook / needle size'], ['measurements', 'Measurements'], ['progress', 'Progress log'], ['gift', 'Gift recipient'], ['cost', 'Cost tracker']]
  },
  photography: {
    icon: '◉', title: 'Photography Planner', label: 'Photography Planner', duration: 'weeks',
    sections: [['shotList', 'Shot list'], ['locations', 'Location ideas'], ['props', 'Prop list'], ['client', 'Client notes'], ['editing', 'Editing checklist'], ['delivery', 'Delivery tracker']]
  },
  memoryKeeping: {
    icon: '♡', title: 'Memory Keeping Journal', label: 'Memory Keeping Journal', duration: 'months',
    sections: [['monthly', 'Monthly memories'], ['moments', 'Favorite moments'], ['quotes', 'Family quotes'], ['photos', 'Photo notes'], ['places', 'Places visited'], ['learned', 'Things we learned']]
  },
  checklistLibrary: {
    icon: '✓', title: 'Everyday Checklist Library', label: 'Everyday Checklist Library', duration: 'set',
    sections: [['dailyReset', 'Daily reset checklist'], ['weeklyReset', 'Weekly reset checklist'], ['errands', 'Errands checklist'], ['shopping', 'Shopping checklist'], ['appointments', 'Appointment prep checklist'], ['packing', 'Simple packing checklist'], ['project', 'Project checklist'], ['followUp', 'Follow-up list']]
  },
  householdChecklistPack: {
    icon: '⌂', title: 'Home Checklist Pack', label: 'Home Checklist Pack', duration: 'set',
    sections: [['dailyClean', 'Daily cleaning checklist'], ['weeklyClean', 'Weekly cleaning checklist'], ['deepClean', 'Deep clean checklist'], ['seasonal', 'Seasonal home checklist'], ['maintenance', 'Maintenance checklist'], ['supplies', 'Supply restock list'], ['declutter', 'Declutter checklist'], ['guestPrep', 'Guest prep checklist']]
  },
  lifeAdminLog: {
    icon: '□', title: 'Life Admin Logbook', label: 'Life Admin Logbook', duration: 'set',
    sections: [['calls', 'Calls + emails log'], ['appointments', 'Appointment log'], ['documents', 'Document tracker'], ['renewals', 'Renewal date log'], ['returns', 'Returns + refunds log'], ['warranty', 'Warranty log'], ['important', 'Important notes'], ['followUp', 'Follow-up tracker']]
  },
  wellnessLogbook: {
    icon: '+', title: 'Wellness Logs & Checklists', label: 'Wellness Logs & Checklists', duration: 'set',
    sections: [['symptoms', 'Symptom log'], ['meds', 'Medication log'], ['water', 'Water tracker'], ['sleep', 'Sleep notes'], ['mood', 'Mood check-in'], ['movement', 'Movement log'], ['appointmentPrep', 'Appointment prep'], ['questions', 'Questions list']]
  },
  familyRoutinePack: {
    icon: '☀', title: 'Family Routine Checklist Pack', label: 'Family Routine Checklist Pack', duration: 'set',
    sections: [['morning', 'Morning routine'], ['afterSchool', 'After school routine'], ['bedtime', 'Bedtime routine'], ['chores', 'Weekly chore checklist'], ['screenTime', 'Screen time agreement'], ['schoolBag', 'School bag checklist'], ['weekend', 'Weekend reset'], ['reward', 'Reward tracker']]
  },
  foodInventoryLog: {
    icon: '🍽', title: 'Food Inventory Logbook', label: 'Food Inventory Logbook', duration: 'set',
    sections: [['pantry', 'Pantry inventory'], ['freezer', 'Freezer inventory'], ['fridge', 'Fridge cleanout log'], ['leftovers', 'Leftover tracker'], ['groceryStaples', 'Grocery staples list'], ['mealIdeas', 'Meal idea bank'], ['expiration', 'Expiration date log'], ['restock', 'Restock checklist']]
  },
  moneyLogbook: {
    icon: '$', title: 'Money Logs & Checklists', label: 'Money Logs & Checklists', duration: 'set',
    sections: [['spending', 'Daily spending log'], ['bills', 'Bill checklist'], ['subscriptions', 'Subscription log'], ['returns', 'Returns + refunds'], ['savings', 'Savings tracker'], ['debt', 'Debt payment log'], ['taxPrep', 'Tax prep checklist'], ['noSpend', 'No-spend tracker']]
  },
  schoolLogbook: {
    icon: '✎', title: 'School Logs & Checklists', label: 'School Logs & Checklists', duration: 'set',
    sections: [['homework', 'Homework log'], ['reading', 'Reading log'], ['attendance', 'Attendance log'], ['behavior', 'Behavior notes'], ['supplies', 'School supply checklist'], ['project', 'Project checklist'], ['testPrep', 'Test prep checklist'], ['teacherNotes', 'Teacher notes log']]
  },
  businessLogbook: {
    icon: '#', title: 'Small Business Logs', label: 'Small Business Logs', duration: 'set',
    sections: [['orders', 'Order log'], ['customers', 'Customer notes'], ['inventory', 'Inventory count log'], ['supplies', 'Supply restock checklist'], ['expenses', 'Expense log'], ['content', 'Content checklist'], ['website', 'Website update log'], ['followUp', 'Follow-up list']]
  },
  eventChecklistPack: {
    icon: '★', title: 'Event Checklist Pack', label: 'Event Checklist Pack', duration: 'set',
    sections: [['planning', 'Planning checklist'], ['guest', 'Guest list checklist'], ['food', 'Food checklist'], ['decor', 'Decor checklist'], ['shopping', 'Shopping checklist'], ['timeline', 'Event timeline'], ['dayOf', 'Day-of checklist'], ['thankYou', 'Thank-you tracker']]
  },
  travelPackingLog: {
    icon: '✈', title: 'Travel + Packing Logs', label: 'Travel + Packing Logs', duration: 'set',
    sections: [['packing', 'Packing checklist'], ['documents', 'Travel documents'], ['reservation', 'Reservation log'], ['outfit', 'Outfit planner'], ['kids', 'Kids packing list'], ['toiletries', 'Toiletries checklist'], ['homePrep', 'Before-you-leave checklist'], ['souvenir', 'Souvenir log']]
  },
  sitterChecklist: {
    icon: '♡', title: 'Pet / Home Sitter Checklist', label: 'Pet / Home Sitter Checklist', duration: 'set',
    sections: [['contacts', 'Emergency contacts'], ['petCare', 'Pet care checklist'], ['feeding', 'Feeding instructions'], ['homeInfo', 'Home info'], ['plants', 'Plant care'], ['mailTrash', 'Mail + trash notes'], ['meds', 'Medication notes'], ['return', 'Before we return']]
  }
};

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const months = ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6', 'Month 7', 'Month 8', 'Month 9', 'Month 10', 'Month 11', 'Month 12'];

const plannerCategories = {
  fitness: ['Health & Wellness', 'Fitness and self-care printables'],
  selfcare: ['Health & Wellness', 'Mood, sleep, gratitude, and reflection'],
  baby: ['Health & Wellness', 'Baby feeding, sleep, diaper, and milestone logs'],

  daily: ['Everyday Planning', 'Daily, weekly, and priority planning'],
  budget: ['Everyday Planning', 'Bills, expenses, savings, and monthly review'],
  goal: ['Everyday Planning', 'Goals, habits, progress, and rewards'],
  meal: ['Everyday Planning', 'Meal plans, grocery lists, and recipe notes'],

  wedding: ['Life Events', 'Wedding budget, guests, vendors, timelines, and seating'],
  party: ['Life Events', 'Guest lists, food, decor, shopping, and party timeline'],
  travel: ['Life Events', 'Itinerary, packing, reservations, and travel journal'],
  moving: ['Life Events', 'Packing, utilities, address changes, and new home setup'],

  home: ['Home & Family', 'Cleaning, maintenance, contacts, passwords, and family schedule'],
  chore: ['Home & Family', 'Kids routines, chores, rewards, and allowance'],
  pet: ['Home & Family', 'Pet feeding, health, grooming, and appointments'],

  student: ['School & Learning', 'Classes, assignments, study, exams, and grades'],
  teacher: ['School & Learning', 'Lessons, roster, grading, parent contact, and sub notes'],
  reading: ['School & Learning', 'Reading logs, book reviews, quotes, and challenge pages'],

  etsy: ['Business & Content', 'Listings, keywords, inventory, orders, and seasonal launches'],
  social: ['Business & Content', 'Content calendar, captions, hashtags, and analytics'],

  garden: ['Creative & Hobbies', 'Seeds, planting, watering, harvest, and garden notes'],
  recipe: ['Creative & Hobbies', 'Recipe cards, family favorites, groceries, and baking notes'],
  pregnancy: ['Health & Wellness', 'Weekly pregnancy check-ins, symptoms, birth plan, registry, and hospital bag'],
  newbornMemory: ['Health & Wellness', 'Milestones, growth, first holidays, memories, and letters to baby'],
  medicalBinder: ['Health & Wellness', 'Doctor visits, medications, symptoms, vaccines, insurance, and emergency contacts'],
  adhdFocus: ['Health & Wellness', 'Brain dump, priority sorting, task breakdown, time blocking, and weekly reset'],
  cleaningDeclutter: ['Home & Family', 'Room-by-room declutter, cleaning checklists, supplies, and donation tracker'],
  holiday: ['Life Events', 'Gifts, cards, meals, decoration checklist, event calendar, and traditions'],
  christmas: ['Life Events', 'Gift tracker, cards, cookie baking, holiday meal plan, and December calendar'],
  birthday: ['Life Events', 'Budget, guest list, gift ideas, cake notes, activity plan, and thank-you tracker'],
  graduation: ['Life Events', 'Graduation party, announcements, gift tracker, ceremony details, and thank-you notes'],
  digitalLife: ['Home & Family', 'Print-only organizer for accounts, devices, subscriptions, and renewal dates'],
  kdp: ['Business & Content', 'Book ideas, keywords, cover notes, interior checklist, pricing, launch, and sales'],
  shopifyWebsite: ['Business & Content', 'Product pages, SEO, homepage copy, traffic, email signup, and conversion notes'],
  contentRepurpose: ['Business & Content', 'Turn one idea into posts, pins, blogs, emails, captions, and videos'],
  productLaunch: ['Business & Content', 'Idea, audience, pricing, listing checklist, launch calendar, promotion, and results'],
  homeschool: ['School & Learning', 'Lesson plans, attendance, subject tracking, reading, field trips, and progress notes'],
  kidsReadingChallenge: ['School & Learning', '30-book challenge, genre challenge, reading bingo, reviews, and rewards'],
  kidsSummer: ['School & Learning', 'Summer bucket list, daily routine, reading, chores, screen time, and activities'],
  practiceTracker: ['School & Learning', 'For piano, sports, language, art, or any skill practice'],
  bookClub: ['Creative & Hobbies', 'Meeting schedule, book picks, members, discussion questions, snacks, and ratings'],
  craftProject: ['Creative & Hobbies', 'Ideas, supplies, costs, steps, progress, and finished project review'],
  sewingCrochet: ['Creative & Hobbies', 'Pattern details, yarn/fabric inventory, measurements, progress, gifts, and costs'],
  photography: ['Creative & Hobbies', 'Shot list, locations, props, client notes, editing checklist, and delivery tracker'],

  checklistLibrary: ['Logs & Checklists', 'A quick-print library of daily, weekly, errands, shopping, packing, project, and follow-up checklists'],
  householdChecklistPack: ['Logs & Checklists', 'Home cleaning, deep cleaning, maintenance, supply restock, declutter, and guest prep checklists'],
  lifeAdminLog: ['Logs & Checklists', 'Calls, appointments, documents, renewals, returns, warranties, and follow-up logs'],
  wellnessLogbook: ['Logs & Checklists', 'Symptom, medication, water, sleep, mood, movement, appointment prep, and question logs'],
  familyRoutinePack: ['Logs & Checklists', 'Morning, after-school, bedtime, chore, school bag, weekend, and reward checklists'],
  foodInventoryLog: ['Logs & Checklists', 'Pantry, freezer, fridge, leftovers, grocery staples, expiration dates, and restock logs'],
  moneyLogbook: ['Logs & Checklists', 'Spending, bills, subscriptions, returns, savings, debt, tax prep, and no-spend logs'],
  schoolLogbook: ['Logs & Checklists', 'Homework, reading, attendance, behavior, supply, project, test prep, and teacher note logs'],
  businessLogbook: ['Logs & Checklists', 'Orders, customer notes, inventory, supplies, expenses, content, website updates, and follow-ups'],
  eventChecklistPack: ['Logs & Checklists', 'Event planning, guests, food, decor, shopping, timelines, day-of tasks, and thank-you trackers'],
  travelPackingLog: ['Logs & Checklists', 'Packing, documents, reservations, outfits, kids packing, toiletries, home prep, and souvenir logs'],
  sitterChecklist: ['Logs & Checklists', 'Pet sitter and home sitter instructions, contacts, feeding, medication, plants, and home notes'],
  memoryKeeping: ['Creative & Hobbies', 'Monthly memories, favorite moments, family quotes, photos, places, and lessons']
};

function updateCategoryHint(type) {
  const hint = $('plannerCategoryHint');
  if (!hint) return;
  const info = plannerCategories[type] || ['Planner', 'Choose a printable type'];
  hint.textContent = `${info[0]} • ${info[1]}`;
}


const plannerCategoryOrder = [
  'Logs & Checklists',
  'Health & Wellness',
  'Everyday Planning',
  'Life Events',
  'Home & Family',
  'School & Learning',
  'Business & Content',
  'Creative & Hobbies'
];

const plannerCardBadges = {
  fitness: 'Popular',
  wedding: 'Premium feel',
  pregnancy: 'New parent',
  budget: 'Practical',
  etsy: 'Seller tool',
  christmas: 'Seasonal',
  selfcare: 'Wellness',
  kidsSummer: 'Kids',
  kdp: 'Creator',
  productLaunch: 'Business',
  checklistLibrary: 'Quick print',
  householdChecklistPack: 'Home',
  lifeAdminLog: 'Admin',
  wellnessLogbook: 'Health log',
  familyRoutinePack: 'Family',
  foodInventoryLog: 'Kitchen',
  moneyLogbook: 'Money',
  schoolLogbook: 'School',
  businessLogbook: 'Business',
  eventChecklistPack: 'Events',
  travelPackingLog: 'Travel',
  sitterChecklist: 'Helpful'
};

function getPlannerDescription(type) {
  const info = plannerCategories[type];
  if (info && info[1]) return info[1];
  const config = plannerConfig[type];
  return config ? `${config.sections.length} customizable sections` : 'Printable planner template';
}

function getPlannerPageText(type) {
  const config = plannerConfig[type];
  if (!config) return '';
  const count = config.sections.length;
  if (config.duration === 'set') return `${count} printable page${count === 1 ? '' : 's'}`;
  return `${count} section${count === 1 ? '' : 's'} • ${config.duration}`;
}

function getActiveCategory() {
  return window.activePlannerCategory || 'All';
}

function setActiveCategory(category) {
  window.activePlannerCategory = category;
  renderTemplateGallery();
}

function getPlannerCategory(type) {
  return plannerCategories[type] ? plannerCategories[type][0] : 'Other';
}

function renderCategoryTabs() {
  const tabs = $('categoryTabs');
  if (!tabs) return;

  const categories = ['All', ...plannerCategoryOrder];
  const active = getActiveCategory();
  const counts = Object.keys(plannerConfig).reduce((acc, type) => {
    const category = getPlannerCategory(type);
    acc[category] = (acc[category] || 0) + 1;
    acc.All = (acc.All || 0) + 1;
    return acc;
  }, {});

  tabs.innerHTML = categories.map(category => {
    const activeClass = category === active ? 'active' : '';
    const count = counts[category] || 0;
    return `<button type="button" class="category-tab ${activeClass}" data-category="${escapeHtml(category)}"><span>${escapeHtml(category)}</span><em>${count}</em></button>`;
  }).join('');

  tabs.querySelectorAll('.category-tab').forEach(button => {
    button.addEventListener('click', () => setActiveCategory(button.dataset.category));
  });
}

function renderTemplateGallery() {
  const gallery = $('plannerGallery');
  const searchInput = $('plannerSearch');
  if (!gallery) return;

  renderCategoryTabs();

  const activeCategory = getActiveCategory();
  const search = searchInput ? searchInput.value.trim().toLowerCase() : '';
  const selectedType = $('plannerType') ? $('plannerType').value : 'fitness';

  let types = Object.keys(plannerConfig);

  const featuredOrder = ['checklistLibrary','daily','fitness','meal','budget','householdChecklistPack','lifeAdminLog','wedding','reading','businessLogbook'];
  types.sort((a, b) => {
    const ca = plannerCategoryOrder.indexOf(getPlannerCategory(a));
    const cb = plannerCategoryOrder.indexOf(getPlannerCategory(b));
    if (ca !== cb) return ca - cb;
    const fa = featuredOrder.indexOf(a);
    const fb = featuredOrder.indexOf(b);
    if (fa !== -1 || fb !== -1) return (fa === -1 ? 999 : fa) - (fb === -1 ? 999 : fb);
    return plannerConfig[a].label.localeCompare(plannerConfig[b].label);
  });

  types = types.filter(type => {
    const config = plannerConfig[type];
    const category = getPlannerCategory(type);
    const description = getPlannerDescription(type);
    const matchesCategory = activeCategory === 'All' || category === activeCategory;
    const searchable = `${config.label} ${config.title} ${category} ${description} ${config.sections.map(s => s[1]).join(' ')}`.toLowerCase();
    const matchesSearch = !search || searchable.includes(search);
    return matchesCategory && matchesSearch;
  });

  if (!types.length) {
    gallery.innerHTML = `<div class="empty-gallery">No planner templates match your search.</div>`;
    return;
  }

  gallery.innerHTML = types.map(type => {
    const config = plannerConfig[type];
    const category = getPlannerCategory(type);
    const description = getPlannerDescription(type);
    const badge = plannerCardBadges[type] || category;
    const activeClass = type === selectedType ? 'selected' : '';
    return `<button type="button" class="planner-card ${activeClass}" data-planner="${type}" data-category="${escapeHtml(category)}">
      <div class="planner-card-top">
        <div class="planner-icon">${config.icon}</div>
        <div class="planner-card-badge">${escapeHtml(badge)}</div>
      </div>
      <div class="planner-card-body">
        <h3>${escapeHtml(config.label)}</h3>
        <p>${escapeHtml(description)}</p>
        <div class="section-preview">${config.sections.slice(0, 3).map(s => `<span>${escapeHtml(s[1])}</span>`).join('')}</div>
      </div>
      <div class="planner-card-footer">
        <span>${escapeHtml(category)}</span>
        <strong>${escapeHtml(getPlannerPageText(type))}</strong>
      </div>
    </button>`;
  }).join('');

  gallery.querySelectorAll('.planner-card').forEach(card => {
    card.addEventListener('click', () => choosePlannerTemplate(card.dataset.planner));
  });
}

function choosePlannerTemplate(type) {
  const select = $('plannerType');
  if (!select || !plannerConfig[type]) return;

  if (![...select.options].some(option => option.value === type)) {
    select.add(new Option(plannerConfig[type].label, type));
  }

  select.value = type;
  updateDefaultsForType();
  renderTemplateGallery();

  const card = document.querySelector(`.planner-card[data-planner="${CSS.escape(type)}"]`);
  if (card) card.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
}



function hexToSoft(hex, alpha = 0.16) {
  const clean = String(hex || '').replace('#', '');
  if (clean.length !== 6) return `rgba(128, 183, 162, ${alpha})`;
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function formatDate(date) { return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' }); }
function formatShortDate(date) { return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' }); }
function addDays(date, amount) { const next = new Date(date); next.setDate(next.getDate() + amount); return next; }
function escapeHtml(value) { return String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#039;'); }
function footer() { return '<div class="footer-note">Generated with Just Pages Studio</div>'; }

function pageHeader(title, subtitle, pill = '') {
  return `<div class="page-header"><div><h2>${title}</h2><p>${subtitle}</p></div>${pill ? `<div class="pill">${pill}</div>` : ''}</div>`;
}

function makeLines(count = 4) {
  return `<div class="line-stack">${Array.from({ length: count }, () => '<div class="blank-line"></div>').join('')}</div>`;
}

function linedBox(title, lines = 5, className = '') {
  return `<div class="box ${className}"><h3>${title}</h3>${makeLines(lines)}</div>`;
}

function noteCard(title, body = '', className = '') {
  return `<div class="note-card ${className}"><h3>${title}</h3>${body}</div>`;
}

function checklist(items) {
  return `<div class="checklist">${items.map(item => `<div><span class="check-square"></span><span>${item}</span></div>`).join('')}</div>`;
}

function taskRows(count = 8) {
  return `<div class="task-rows">${Array.from({ length: count }, () => '<div><span class="check-square"></span><span></span></div>').join('')}</div>`;
}

function scheduleRows(state, wr) {
  return table(['Day', 'Workout focus', 'Plan / notes'], days.map((day, i) => [`${day}<br>${formatShortDate(addDays(wr.start, i))}`, '', '']), 'weekly-schedule-table');
}

function miniMetric(label, value = '') {
  return `<div class="mini-metric"><span>${label}</span><strong>${value}</strong></div>`;
}

function table(headers, rows, className = '') {
  return `<table class="tracker-table ${className}"><thead><tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map(row => `<tr>${row.map(cell => `<td>${cell || ''}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
}

function weekRange(state, week) {
  const start = addDays(state.startDate, (week - 1) * 7);
  return { start, end: addDays(start, 6), label: `${formatDate(start)} – ${formatDate(addDays(start, 6))}` };
}

function makeCover(state) {
  const endDate = state.unit === 'months'
    ? months[Math.min(state.duration - 1, months.length - 1)]
    : formatDate(addDays(state.startDate, state.duration * 7 - 1));
  const dateText = state.unit === 'months'
    ? `${state.duration} month planner • Starts ${formatDate(state.startDate)}`
    : `${formatDate(state.startDate)} – ${endDate}`;

  return `<article class="page cover-page clean-cover">
    <div class="cover-content simple-cover-content">
      <h1>${escapeHtml(state.title)}</h1>
      <div class="cover-owner">Prepared for ${escapeHtml(state.owner || 'Me')}</div>
      <div class="cover-dates">${dateText}</div>
    </div>
    ${footer()}
  </article>`;
}

function makeGoalsPage(state) {
  return `<article class="page goals-page">${pageHeader('Fitness Goals', `A clear starting point for ${escapeHtml(state.owner)}`, 'Goals')}
    <div class="hero-goal-box"><h3>My main goal</h3>${makeLines(4)}</div>
    <div class="goal-strip">${miniMetric('Start date', formatShortDate(state.startDate))}${miniMetric('Length', `${state.duration} weeks`)}${miniMetric('Focus', '')}${miniMetric('Reward', '')}</div>
    <div class="content-grid two-col goal-layout">
      ${linedBox('Why this matters', 5)}
      ${linedBox('My realistic weekly routine', 5)}
      ${linedBox('Possible obstacles', 5)}
      ${linedBox('How I will handle them', 5)}
    </div>${footer()}</article>`;
}

function makeFitnessPage(section, state, week = 1) {
  const wr = weekRange(state, week);
  if (section === 'goals') return makeGoalsPage(state);
  if (section === 'measurements') {
    return `<article class="page measurement-page">${pageHeader('Measurements Tracker', 'Track progress gently and consistently', 'Progress')}
      <div class="metric-row">${miniMetric('Starting weight')}${miniMetric('Goal')}${miniMetric('Energy')}${miniMetric('Confidence')}</div>
      ${table(['Check-in','Weight','Waist','Hips','Chest','Energy','Notes'], ['Start','Week 2','Week 4','Week 6','Week 8','Week 10','Week 12','Final'].map(x => [x,'','','','','','']), 'measurement-table')}
      <div class="content-grid two-col bottom-notes">${linedBox('Non-scale victories', 5)}${linedBox('What feels easier now?', 5)}</div>${footer()}</article>`;
  }
  if (section === 'weekly') {
    return `<article class="page weekly-fitness-page pro-weekly-fitness">${pageHeader(`Week ${week} Fitness Plan`, wr.label, 'Weekly')}
      <div class="fitness-top-strip">
        ${miniMetric('Weekly focus')}
        ${miniMetric('Target workouts')}
        ${miniMetric('Water goal')}
        ${miniMetric('Sleep goal')}
      </div>
      <div class="content-grid weekly-fitness-main">
        <div class="box focus-box"><h3>This week’s focus</h3>${makeLines(5)}</div>
        <div class="box checklist-box"><h3>Workout types</h3>${checklist(['Strength training', 'Cardio', 'Stretch / mobility', 'Rest day', 'Outdoor walk'])}</div>
      </div>
      ${scheduleRows(state, wr)}
      <div class="content-grid two-col weekly-fitness-bottom">${linedBox('Meal / nutrition notes', 6)}${linedBox('Weekly wins', 6)}</div>${footer()}</article>`;
  }
  if (section === 'daily') {
    return `<article class="page daily-workout-page">${pageHeader(`Week ${week} Daily Workout Logs`, wr.label, 'Daily')}
      ${table(['Day','Workout','Time','Steps','Water','Mood','Notes'], days.map((day, i) => [`${day}<br>${formatShortDate(addDays(wr.start, i))}`,'','','','','','']), 'big-rows daily-workout-table')}
      <div class="daily-reflection-box">${linedBox('Something I learned about my body this week', 5, 'compact')}</div>${footer()}</article>`;
  }
  if (section === 'habits') return makeHabitTracker(`Week ${week} Habit Tracker`, wr.label, ['Workout','Water','Steps','Protein','Sleep','Stretch','Mood']);
  if (section === 'reflection') {
    return `<article class="page reflection-page">${pageHeader('Progress Reflection', `Look back after ${state.duration} weeks`, 'Reflection')}
      <div class="reflection-hero">${linedBox('My biggest win', 4)}${linedBox('A kind note to myself', 4)}</div>
      <div class="content-grid two-col reflection-grid">${linedBox('What I am proud of', 5)}${linedBox('What felt hard', 5)}${linedBox('What I want to improve next', 5)}${linedBox('My next goal', 5)}</div>${footer()}</article>`;
  }
  return '';
}

function makeHabitTracker(title, subtitle, habits) {
  return `<article class="page habit-page">${pageHeader(title, subtitle, 'Tracker')}
    <div class="habit-grid"><div class="head">Habit</div>${days.map(day => `<div class="head">${day}</div>`).join('')}${habits.map(h => `<div><strong>${h}</strong></div>${days.map(() => '<div class="circle">○</div>').join('')}`).join('')}</div>
    <div class="content-grid two-col compact-bottom">${linedBox('What helped?', 5)}${linedBox('What needs adjusting?', 5)}</div>${footer()}</article>`;
}

function makeDailyPlannerPage(section, state, week = 1) {
  const wr = weekRange(state, week);
  if (section === 'overview') {
    return `<article class="page weekly-overview-page">${pageHeader(`Week ${week} Overview`, wr.label, 'Plan')}
      <div class="weekly-dashboard">
        <div class="box priority-box"><h3>Top 3 priorities</h3><ol><li></li><li></li><li></li></ol></div>
        ${linedBox('Reminders', 4)}
        ${linedBox('Appointments', 4)}
      </div>
      <div class="day-grid planner-week-days">${days.map((day, i) => `<div class="day-cell"><strong>${day}<br>${formatShortDate(addDays(wr.start, i))}</strong><span></span><span></span><span></span><span></span></div>`).join('')}</div>
      ${linedBox('Brain dump / notes', 4, 'wide-note')}${footer()}</article>`;
  }
  if (section === 'dailyPlan') {
    return `<article class="page daily-plan-page">${pageHeader(`Week ${week} Daily Plans`, 'A practical planning page for the whole week', 'Daily')}
      ${table(['Day','Top priority','Must do','Appointment','Meal','Notes'], days.map((day, i) => [`${day}<br>${formatShortDate(addDays(wr.start, i))}`,'','','','','']), 'big-rows daily-plan-table')}
      ${footer()}</article>`;
  }
  if (section === 'priorities') {
    return `<article class="page priority-page pro-priority-page">${pageHeader(`Week ${week} Priorities`, wr.label, 'Focus')}
      <div class="priority-instructions">Use this page like a simple task board. Put only the most important items in each column.</div>
      <div class="kanban-grid">
        <div class="kanban-card must"><h3>Must do</h3>${taskRows(8)}</div>
        <div class="kanban-card should"><h3>Should do</h3>${taskRows(8)}</div>
        <div class="kanban-card nice"><h3>Nice to do</h3>${taskRows(8)}</div>
      </div>
      <div class="followup-panel"><h3>Waiting on / follow up</h3>${taskRows(4)}</div>${footer()}</article>`;
  }
  if (section === 'appointments') return `<article class="page appointment-page">${pageHeader(`Week ${week} Appointments`, wr.label, 'Schedule')}${table(['Date','Time','Event / Appointment','Location','Reminder'], Array.from({ length: 15 }, () => ['','','','','']), 'appointment-table')}${footer()}</article>`;
  if (section === 'habits') return makeHabitTracker(`Week ${week} Habit Tracker`, wr.label, ['Plan day','Water','Movement','Reading','Tidy up','Family time','Sleep']);
  if (section === 'reflection') {
    return `<article class="page weekly-reflection-page">${pageHeader(`Week ${week} Reflection`, wr.label, 'Reflect')}
      <div class="reflection-layout">
        ${linedBox('What went well?', 6)}
        ${linedBox('What felt hard?', 6)}
        ${linedBox('What I learned', 6)}
        ${linedBox('Next week I want to...', 6)}
      </div>${footer()}</article>`;
  }
  return '';
}

function makeReadingPage(section, state) {
  if (section === 'wishlist') return `<article class="page reading-wishlist-page">${pageHeader('Book Wishlist', 'Books I want to read next', 'Reading')}${table(['Title','Author','Genre','Why I want to read it','Priority'], Array.from({ length: 14 }, () => ['','','','','']), 'wishlist-table')}${footer()}</article>`;
  if (section === 'readingLog') return `<article class="page reading-log-page">${pageHeader('Reading Log', 'Track books, pages, and reading time', 'Log')}${table(['Date','Book','Pages','Minutes','Mood','Notes'], Array.from({ length: 18 }, () => ['','','','','','']), 'reading-log-table')}${footer()}</article>`;
  if (section === 'reviews') {
    return `<article class="page book-review-page">${pageHeader('Book Review', 'Capture thoughts after finishing a book', 'Review')}
      <div class="book-review-top">${linedBox('Title / Author', 2)}${noteCard('Rating', '<div class="rating-stars">☆ ☆ ☆ ☆ ☆</div>')}${linedBox('Favorite character / idea', 2)}</div>
      <div class="content-grid two-col book-review-main">${linedBox('Short summary', 7)}${linedBox('My thoughts', 7)}${linedBox('Favorite quote', 4)}${linedBox('Would I recommend it?', 4)}</div>${footer()}</article>`;
  }
  if (section === 'challenge') return `<article class="page reading-challenge-page">${pageHeader('Reading Challenge', 'Color or check one box for each finished book', 'Challenge')}<div class="challenge-grid">${Array.from({ length: 30 }, (_, i) => `<div class="challenge-box">${i + 1}</div>`).join('')}</div>${footer()}</article>`;
  if (section === 'quotes') return `<article class="page quote-page">${pageHeader('Favorite Quotes', 'Lines worth remembering', 'Quotes')}${table(['Book','Page','Quote / Thought'], Array.from({ length: 12 }, () => ['','','']), 'quote-table')}${footer()}</article>`;
  if (section === 'summary') {
    return `<article class="page reading-summary-page">${pageHeader('Reading Summary', 'Look back at my reading progress', 'Summary')}
      <div class="metric-row">${miniMetric('Books finished')}${miniMetric('Pages read')}${miniMetric('Favorite genre')}${miniMetric('Next goal')}</div>
      <div class="content-grid two-col">${linedBox('Favorite book', 5)}${linedBox('Book I learned from', 5)}${linedBox('Genres I enjoyed', 5)}${linedBox('Next reading list', 5)}</div>${footer()}</article>`;
  }
  return '';
}

function makeChorePage(section, state, week = 1) {
  const wr = weekRange(state, week);
  if (section === 'routine') {
    return `<article class="page routine-page">${pageHeader(`Week ${week} Routine Chart`, wr.label, 'Routine')}
      <div class="routine-columns">
        <div class="routine-card morning"><h3>Morning</h3>${checklist(['Get dressed','Brush teeth','Eat breakfast','Pack backpack','Kind start'])}</div>
        <div class="routine-card evening"><h3>Evening</h3>${checklist(['Tidy room','Homework / reading','Bath / brush teeth','Pick outfit','Bedtime calm'])}</div>
      </div>
      ${linedBox('Helpful reminders for this week', 5, 'wide-note')}${footer()}</article>`;
  }
  if (section === 'chores') return `<article class="page chore-page">${pageHeader(`Week ${week} Chore Chart`, wr.label, 'Chores')}<div class="chore-grid"><div class="head">Chore</div>${days.map(d => `<div class="head">${d}</div>`).join('')}${['Make bed','Clean room','Help dishes','Homework','Reading','Kind helper','Custom'].map(chore => `<div><strong>${chore}</strong></div>${days.map(() => '<div class="circle">□</div>').join('')}`).join('')}</div>${footer()}</article>`;
  if (section === 'rewards') return `<article class="page rewards-page">${pageHeader(`Week ${week} Reward Stars`, 'Earn stars toward a special reward', 'Rewards')}<div class="reward-row">${Array.from({ length: 30 }, () => '<div class="star-box">☆</div>').join('')}</div><div class="content-grid two-col compact-bottom">${linedBox('Reward goal', 4)}${linedBox('Encouraging notes', 4)}</div>${footer()}</article>`;
  if (section === 'behavior') return makeHabitTracker(`Week ${week} Kind Choices`, wr.label, ['Use kind words','Listen first','Try my best','Share','Help someone','Clean up','Stay calm']);
  if (section === 'allowance') return `<article class="page allowance-page">${pageHeader(`Week ${week} Allowance Tracker`, wr.label, 'Money')}${table(['Date','Chore / task','Earned','Saved','Spent','Notes'], Array.from({ length: 14 }, () => ['','','','','','']), 'allowance-table')}${footer()}</article>`;
  if (section === 'notes') return `<article class="page parent-notes-page">${pageHeader(`Week ${week} Parent Notes`, wr.label, 'Notes')}<div class="reflection-layout">${linedBox('What went well', 6)}${linedBox('Needs practice', 6)}${linedBox('Big feelings / patterns', 6)}${linedBox('Next week support', 6)}</div>${footer()}</article>`;
  return '';
}

function makeMealPage(section, state, week = 1) {
  const wr = weekRange(state, week);
  if (section === 'weeklyMenu') return `<article class="page meal-menu-page">${pageHeader(`Week ${week} Meal Plan`, wr.label, 'Menu')}${table(['Day','Breakfast','Lunch','Dinner','Snack'], days.map((d, i) => [`${d}<br>${formatShortDate(addDays(wr.start, i))}`,'','','','']), 'big-rows meal-table')}${footer()}</article>`;
  if (section === 'grocery') {
    return `<article class="page grocery-page">${pageHeader(`Week ${week} Grocery List`, 'Organized by category', 'Grocery')}
      <div class="grocery-grid">
        ${linedBox('Produce', 10)}${linedBox('Protein / dairy', 10)}${linedBox('Pantry', 10)}${linedBox('Frozen', 10)}${linedBox('Household', 8)}${linedBox('Other', 8)}
      </div>${footer()}</article>`;
  }
  if (section === 'prep') {
    return `<article class="page meal-prep-page">${pageHeader(`Week ${week} Meal Prep`, wr.label, 'Prep')}
      <div class="prep-layout">${linedBox('Prep tasks', 7)}${linedBox('Cook ahead', 7)}${linedBox('Use first', 7)}${linedBox('Leftover plan', 7)}</div>${footer()}</article>`;
  }
  if (section === 'pantry') return `<article class="page pantry-page">${pageHeader('Pantry / Freezer Inventory', 'Keep track of what you already have', 'Inventory')}${table(['Item','Location','Quantity','Use by','Meal idea'], Array.from({ length: 16 }, () => ['','','','','']), 'pantry-table')}${footer()}</article>`;
  if (section === 'recipes') {
    return `<article class="page recipe-page">${pageHeader('Recipe Notes', 'Ideas to save for later', 'Recipes')}
      <div class="recipe-layout">
        ${linedBox('Recipe name', 2)}
        ${linedBox('Ingredients', 8)}
        ${linedBox('Steps', 8)}
        ${linedBox('Notes / changes', 5)}
      </div>${footer()}</article>`;
  }
  if (section === 'favorites') return `<article class="page favorites-page">${pageHeader('Family Favorites', 'Meals to repeat again', 'Favorites')}${table(['Meal','Who liked it?','Difficulty','Repeat?','Notes'], Array.from({ length: 14 }, () => ['','','','','']), 'favorites-table')}${footer()}</article>`;
  return '';
}

function moneyBox(title) {
  return `<div class="money-box"><h3>${title}</h3><div class="money-line"><span>$</span></div></div>`;
}

function makeBudgetPage(section, state, month = 1) {
  const label = `Month ${month}`;
  if (section === 'income') {
    return `<article class="page budget-income-page">${pageHeader(`${label} Income Tracker`, 'Plan expected and actual income', 'Income')}
      <div class="money-summary-row">${moneyBox('Expected income')}${moneyBox('Actual income')}${moneyBox('Difference')}</div>
      ${table(['Source','Expected','Actual','Date received','Notes'], Array.from({ length: 11 }, () => ['','','','','']), 'budget-table')}${footer()}</article>`;
  }
  if (section === 'bills') return `<article class="page bill-page">${pageHeader(`${label} Bill Tracker`, 'Check off bills as they are paid', 'Bills')}${table(['Bill','Due date','Amount','Auto?','Paid?','Notes'], Array.from({ length: 15 }, () => ['','','','','','']), 'bill-table')}${footer()}</article>`;
  if (section === 'expenses') return `<article class="page expense-page">${pageHeader(`${label} Expense Log`, 'Track spending by category', 'Expenses')}${table(['Date','Category','Description','Amount','Need / want'], Array.from({ length: 20 }, () => ['','','','','']), 'expense-table')}${footer()}</article>`;
  if (section === 'savings') {
    return `<article class="page savings-page">${pageHeader(`${label} Savings Goal`, 'Small steps toward a bigger goal', 'Savings')}
      <div class="savings-header">${linedBox('Goal', 3)}${moneyBox('Target amount')}${moneyBox('Saved so far')}</div>
      <div class="savings-grid">${Array.from({ length: 40 }, (_, i) => `<div>${i + 1}</div>`).join('')}</div>${footer()}</article>`;
  }
  if (section === 'debt') return `<article class="page debt-page">${pageHeader(`${label} Debt Payoff`, 'Track balance and payments', 'Debt')}${table(['Debt','Starting balance','Payment','Interest','New balance','Notes'], Array.from({ length: 13 }, () => ['','','','','','']), 'debt-table')}${footer()}</article>`;
  if (section === 'summary') {
    return `<article class="page budget-summary-page pro-budget-summary">${pageHeader(`${label} Budget Summary`, 'Review the month with clarity', 'Summary')}
      <div class="money-summary-row">${moneyBox('Total income')}${moneyBox('Total spending')}${moneyBox('Remaining')}</div>
      <div class="budget-category-grid">
        ${miniMetric('Housing')}${miniMetric('Food')}${miniMetric('Transportation')}${miniMetric('Family / kids')}
        ${miniMetric('Subscriptions')}${miniMetric('Savings')}${miniMetric('Debt')}${miniMetric('Other')}
      </div>
      <div class="budget-review-row">${linedBox('What worked?', 5)}${linedBox('Next month changes', 5)}</div>${footer()}</article>`;
  }
  return '';
}

function makePetPage(section, state, week = 1) {
  const wr = weekRange(state, week);
  if (section === 'profile') {
    return `<article class="page pet-profile-page">${pageHeader('Pet Profile', 'Important details in one place', 'Pet')}
      <div class="pet-profile-grid">${linedBox('Name / breed / birthday', 4)}${linedBox('Vet / emergency contact', 4)}${linedBox('Food preferences', 6)}${linedBox('Personality / comfort notes', 6)}${linedBox('Allergies / medications', 5)}${linedBox('Favorite activities', 5)}</div>${footer()}</article>`;
  }
  if (section === 'feeding') return `<article class="page pet-feeding-page">${pageHeader(`Week ${week} Feeding Tracker`, wr.label, 'Feeding')}${table(['Day','Morning','Evening','Treats','Water','Notes'], days.map((d, i) => [`${d}<br>${formatShortDate(addDays(wr.start, i))}`,'','','','','']), 'big-rows pet-table')}${footer()}</article>`;
  if (section === 'care') return makeHabitTracker(`Week ${week} Pet Care`, wr.label, ['Brush','Walk/play','Clean bowls','Litter/yard','Training','Grooming','Cuddles']);
  if (section === 'health') return `<article class="page pet-health-page">${pageHeader(`Week ${week} Health Log`, wr.label, 'Health')}${table(['Date','Medication','Dose','Symptoms','Energy','Notes'], Array.from({ length: 14 }, () => ['','','','','','']), 'pet-health-table')}${footer()}</article>`;
  if (section === 'training') return `<article class="page pet-training-page">${pageHeader(`Week ${week} Training Notes`, wr.label, 'Training')}<div class="training-layout">${linedBox('Skill we practiced', 6)}${linedBox('What worked', 6)}${linedBox('Challenges', 6)}${linedBox('Next step', 6)}</div>${footer()}</article>`;
  if (section === 'appointments') return `<article class="page vet-page">${pageHeader('Vet Appointments', 'Vaccines, checkups, grooming, and care visits', 'Appointments')}${table(['Date','Provider','Reason','Cost','Follow-up'], Array.from({ length: 14 }, () => ['','','','','']), 'vet-table')}${footer()}</article>`;
  return '';
}

function makeBabyPage(section, state, week = 1) {
  const wr = weekRange(state, week);
  if (section === 'feeding') return `<article class="page baby-feeding-page">${pageHeader(`Week ${week} Feeding Log`, wr.label, 'Feeding')}${table(['Time','Nursing / bottle','Amount','Burp?','Mood','Notes'], Array.from({ length: 16 }, () => ['','','','','','']), 'baby-table')}${footer()}</article>`;
  if (section === 'sleep') return `<article class="page baby-sleep-page">${pageHeader(`Week ${week} Sleep Tracker`, wr.label, 'Sleep')}${table(['Day','Nap 1','Nap 2','Nap 3','Bedtime','Night wakes','Notes'], days.map((d, i) => [`${d}<br>${formatShortDate(addDays(wr.start, i))}`,'','','','','','']), 'big-rows sleep-table')}${footer()}</article>`;
  if (section === 'diaper') return `<article class="page diaper-page">${pageHeader(`Week ${week} Diaper Tracker`, wr.label, 'Diaper')}${table(['Day','Wet','Dirty','Cream?','Notes'], days.map((d, i) => [`${d}<br>${formatShortDate(addDays(wr.start, i))}`,'','','','']), 'big-rows diaper-table')}${footer()}</article>`;
  if (section === 'pumping') return `<article class="page pumping-page">${pageHeader(`Week ${week} Pumping / Bottle Log`, wr.label, 'Bottle')}${table(['Time','Pumped amount','Bottle amount','Stored?','Notes'], Array.from({ length: 16 }, () => ['','','','','']), 'pumping-table')}${footer()}</article>`;
  if (section === 'medicine') return `<article class="page baby-medicine-page">${pageHeader(`Week ${week} Medicine Log`, wr.label, 'Medicine')}${table(['Date / time','Medicine','Dose','Reason','Notes'], Array.from({ length: 14 }, () => ['','','','','']), 'medicine-table')}${footer()}</article>`;
  if (section === 'milestones') return `<article class="page milestone-page">${pageHeader(`Week ${week} Milestone Notes`, wr.label, 'Milestones')}<div class="milestone-layout">${linedBox('New things I noticed', 6)}${linedBox('Smiles / sounds / movement', 6)}${linedBox('Questions for doctor', 6)}${linedBox('Sweet memories', 6)}</div>${footer()}</article>`;
  return '';
}


const specialtySections = {
  wedding: {
    overview: () => overviewPage('Wedding Overview', 'The big-picture details for your celebration', ['Wedding date', 'Venue', 'Guest count', 'Style / colors'], ['Ceremony ideas', 'Reception ideas', 'Important decisions', 'Questions to ask']),
    budget: () => budgetWorksheet('Wedding Budget', ['Venue', 'Catering', 'Dress / attire', 'Flowers', 'Photography', 'Music', 'Decor', 'Stationery', 'Beauty', 'Honeymoon', 'Other']),
    guestList: () => listTablePage('Guest List + RSVP', ['Guest name', 'Side', 'Address', 'Invite sent?', 'RSVP', 'Gift / notes'], 16),
    vendors: () => contactTablePage('Vendor Contacts', ['Vendor', 'Contact person', 'Phone / email', 'Deposit', 'Balance', 'Notes'], 14),
    timeline: () => timelinePage('Wedding Planning Timeline', ['12+ months', '9 months', '6 months', '3 months', '1 month', '1 week', 'Day before']),
    seating: () => gridWorksheet('Seating Chart', ['Table 1', 'Table 2', 'Table 3', 'Table 4', 'Table 5', 'Table 6'], 7),
    shotList: () => checklistPage('Photography Shot List', ['Getting ready', 'Dress details', 'First look', 'Family portraits', 'Ceremony', 'Reception details', 'Cake cutting', 'First dance', 'Guest candids', 'Send-off']),
    giftTracker: () => listTablePage('Wedding Gift Tracker', ['Guest', 'Gift', 'Thank-you sent?', 'Address', 'Notes'], 16),
    dayOf: () => scheduleTablePage('Wedding Day Timeline', ['Time', 'Who', 'What happens', 'Location', 'Notes'], 15)
  },
  party: {
    overview: () => overviewPage('Party Overview', 'Plan the basics first', ['Date', 'Location', 'Theme', 'Guest count'], ['Purpose / vibe', 'Must-have details', 'Things to borrow', 'Questions']),
    guestList: () => listTablePage('Party Guest List', ['Guest', 'Invited?', 'RSVP', 'Adults / kids', 'Notes'], 16),
    budget: () => budgetWorksheet('Party Budget', ['Venue', 'Food', 'Cake', 'Decor', 'Activities', 'Favors', 'Invitations', 'Other']),
    food: () => categoryGridPage('Food + Drinks', ['Main food', 'Snacks', 'Desserts', 'Drinks', 'Serving supplies', 'Allergies']),
    decor: () => checklistPage('Decor Checklist', ['Balloons', 'Banner', 'Tableware', 'Centerpieces', 'Photo area', 'Lighting', 'Party favors', 'Games / activities']),
    timeline: () => scheduleTablePage('Party Timeline', ['Time', 'Task / activity', 'Who helps?', 'Notes'], 14),
    shopping: () => categoryGridPage('Shopping List', ['Food', 'Decor', 'Supplies', 'Favors', 'Last-minute', 'Other']),
    notes: () => gridWorksheet('Party Notes + Ideas', ['Theme ideas', 'Game ideas', 'Music', 'Photo ideas'], 8)
  },
  travel: {
    overview: () => overviewPage('Trip Overview', 'Keep important travel details in one place', ['Destination', 'Dates', 'Travelers', 'Trip style'], ['Main goals', 'Must-see places', 'Important reminders', 'Emergency notes']),
    itinerary: () => scheduleTablePage('Daily Itinerary', ['Day', 'Morning', 'Afternoon', 'Evening', 'Notes'], 10),
    packing: () => categoryGridPage('Packing List', ['Clothes', 'Toiletries', 'Documents', 'Electronics', 'Kids / family', 'Other']),
    reservations: () => listTablePage('Flights + Hotel', ['Date', 'Company', 'Confirmation', 'Time', 'Address / notes'], 12),
    budget: () => budgetWorksheet('Travel Budget', ['Flights', 'Hotel', 'Food', 'Transportation', 'Activities', 'Shopping', 'Emergency', 'Other']),
    places: () => listTablePage('Places to Visit', ['Place', 'Area', 'Cost', 'Open hours', 'Priority', 'Notes'], 14),
    journal: () => journalPromptPage('Travel Journal', ['Today I visited...', 'Favorite moment', 'Something funny', 'What I want to remember']),
    souvenirs: () => listTablePage('Souvenir Tracker', ['Person', 'Gift idea', 'Bought?', 'Cost', 'Packed?'], 14)
  },
  moving: {
    overview: () => overviewPage('Move Overview', 'Organize your move from start to finish', ['Move date', 'Old address', 'New address', 'Mover / truck'], ['Main priorities', 'Important calls', 'Things to measure', 'Notes']),
    checklist: () => checklistPage('Moving Checklist', ['Book movers / truck', 'Collect boxes', 'Declutter', 'Pack non-essentials', 'Transfer utilities', 'Change address', 'Clean old home', 'Set up new home']),
    packing: () => categoryGridPage('Room Packing List', ['Kitchen', 'Bedrooms', 'Bathrooms', 'Living room', 'Office', 'Garage / storage']),
    utilities: () => listTablePage('Utilities + Address Changes', ['Company', 'Old / new', 'Date requested', 'Confirmation', 'Notes'], 14),
    budget: () => budgetWorksheet('Moving Budget', ['Truck / movers', 'Boxes', 'Storage', 'Cleaning', 'Deposits', 'Repairs', 'Food', 'Other']),
    inventory: () => listTablePage('Box Inventory', ['Box #', 'Room', 'Contents', 'Fragile?', 'Unpacked?'], 18),
    newHome: () => checklistPage('New Home Setup', ['Set up beds', 'Kitchen basics', 'Bathroom supplies', 'Internet', 'Smoke detectors', 'Keys / locks', 'Trash schedule', 'Emergency contacts']),
    donate: () => listTablePage('Donate / Sell / Keep', ['Item', 'Keep', 'Donate', 'Sell', 'Trash', 'Notes'], 16)
  },
  home: {
    dashboard: () => overviewPage('Home Dashboard', 'A quick overview of home details', ['Address', 'Emergency contact', 'Trash day', 'Wi-Fi / notes'], ['This month', 'Repair list', 'Family reminders', 'Important notes']),
    cleaning: () => checklistPage('Cleaning Schedule', ['Kitchen counters', 'Bathrooms', 'Floors', 'Laundry', 'Bedrooms', 'Trash', 'Deep clean task', 'Declutter area']),
    maintenance: () => listTablePage('Home Maintenance Log', ['Date', 'Task', 'Company / person', 'Cost', 'Next due', 'Notes'], 14),
    contacts: () => contactTablePage('Emergency Contacts', ['Name / service', 'Phone', 'Address', 'Account #', 'Notes'], 14),
    appliances: () => listTablePage('Appliance Info', ['Item', 'Brand / model', 'Serial #', 'Purchase date', 'Warranty', 'Notes'], 12),
    passwords: () => listTablePage('Password Tracker', ['Website / service', 'Username', 'Hint', 'Email used', 'Notes'], 14),
    family: () => scheduleTablePage('Family Schedule', ['Day', 'Appointments', 'Activities', 'Meals', 'Reminders'], 10),
    projects: () => projectPlannerPage('Home Project Planner')
  },
  student: {
    schedule: () => scheduleTablePage('Class Schedule', ['Class', 'Teacher', 'Days / time', 'Room', 'Notes'], 12),
    assignments: () => listTablePage('Assignment Tracker', ['Class', 'Assignment', 'Due date', 'Priority', 'Done?'], 16),
    study: () => scheduleTablePage('Study Planner', ['Date', 'Subject', 'Topic', 'Time', 'Notes'], 14),
    exam: () => checklistPage('Exam Prep', ['Review notes', 'Practice problems', 'Make flashcards', 'Ask questions', 'Study guide', 'Sleep plan', 'Pack supplies', 'Final review']),
    project: () => projectPlannerPage('School Project Planner'),
    reading: () => listTablePage('Reading / Notes', ['Date', 'Book / chapter', 'Pages', 'Main idea', 'Questions'], 14),
    grades: () => listTablePage('Grade Tracker', ['Class', 'Assignment / test', 'Score', 'Weight', 'Notes'], 14),
    habits: () => makeHabitTracker('Study Habits', 'Track consistent routines', ['Planner', 'Reading', 'Homework', 'Study', 'Sleep', 'Pack bag', 'Ask help'])
  },
  teacher: {
    lesson: () => scheduleTablePage('Weekly Lesson Plan', ['Day', 'Subject', 'Objective', 'Activity', 'Materials'], 10),
    roster: () => listTablePage('Student Roster', ['Name', 'Guardian', 'Contact', 'Notes'], 18),
    grades: () => listTablePage('Grading Tracker', ['Student / group', 'Assignment', 'Score', 'Returned?', 'Notes'], 16),
    contacts: () => contactTablePage('Parent Contact Log', ['Date', 'Student', 'Parent / guardian', 'Method', 'Notes'], 14),
    sub: () => gridWorksheet('Substitute Teacher Notes', ['Schedule', 'Class routines', 'Helpful students', 'Important notes'], 8),
    supplies: () => checklistPage('Classroom Checklist', ['Copies', 'Supplies', 'Centers', 'Tech ready', 'Board updated', 'Emergency folder', 'Clean-up', 'Next week prep']),
    meetings: () => listTablePage('Meeting Notes', ['Date', 'Meeting', 'Action items', 'Follow up'], 12),
    reflection: () => journalPromptPage('Teaching Reflection', ['What worked well?', 'What needs reteaching?', 'Student wins', 'Next steps'])
  },
  etsy: {
    ideas: () => listTablePage('Product Idea Bank', ['Idea', 'Audience', 'Season', 'Materials', 'Priority', 'Notes'], 16),
    listing: () => projectPlannerPage('Listing Planner'),
    keywords: () => listTablePage('Keyword Tracker', ['Keyword', 'Use in title?', 'Tags', 'Competition', 'Notes'], 16),
    orders: () => listTablePage('Order Tracker', ['Date', 'Order', 'Item', 'Ship by', 'Status', 'Notes'], 16),
    inventory: () => listTablePage('Inventory Tracker', ['Item', 'SKU', 'Qty', 'Reorder at', 'Supplier', 'Notes'], 16),
    seasonal: () => scheduleTablePage('Seasonal Launch Calendar', ['Month', 'Holiday / season', 'Product idea', 'Launch date', 'Notes'], 12),
    expenses: () => budgetWorksheet('Etsy Expense Tracker', ['Materials', 'Shipping supplies', 'Fees', 'Ads', 'Software', 'Equipment', 'Other']),
    social: () => scheduleTablePage('Promotion Planner', ['Date', 'Platform', 'Product', 'Post idea', 'Status'], 14)
  },
  social: {
    calendar: () => scheduleTablePage('Content Calendar', ['Date', 'Platform', 'Topic', 'Format', 'Status'], 14),
    ideas: () => listTablePage('Post Idea Bank', ['Idea', 'Audience', 'Hook', 'Format', 'Priority'], 16),
    caption: () => journalPromptPage('Caption Drafts', ['Hook', 'Main message', 'Call to action', 'Hashtags']),
    video: () => projectPlannerPage('Reel / Video Planner'),
    hashtags: () => listTablePage('Hashtag Tracker', ['Hashtag', 'Category', 'Used for', 'Performance', 'Notes'], 16),
    analytics: () => listTablePage('Analytics Tracker', ['Date', 'Platform', 'Reach', 'Clicks', 'Saves', 'Notes'], 14),
    campaign: () => projectPlannerPage('Campaign Planner'),
    batching: () => checklistPage('Content Batching Checklist', ['Pick topics', 'Write captions', 'Create images', 'Record video', 'Schedule posts', 'Check links', 'Repurpose content', 'Review analytics'])
  },
  selfcare: {
    checkin: () => journalPromptPage('Daily Check-In', ['Today I feel...', 'My body needs...', 'One thing I can do gently', 'Tonight I want to remember']),
    mood: () => listTablePage('Mood Tracker', ['Date', 'Mood', 'Energy', 'Trigger', 'What helped'], 16),
    sleep: () => listTablePage('Sleep Tracker', ['Date', 'Bedtime', 'Wake time', 'Quality', 'Notes'], 16),
    gratitude: () => journalPromptPage('Gratitude Journal', ['I am grateful for...', 'A small win', 'Someone who helped me', 'Something beautiful I noticed']),
    triggers: () => gridWorksheet('Stress Triggers', ['Trigger', 'Body signals', 'Helpful response', 'Support needed'], 7),
    tools: () => checklistPage('Coping Tools', ['Deep breathing', 'Walk outside', 'Call someone', 'Drink water', 'Rest', 'Write it down', 'Stretch', 'Quiet time']),
    affirmations: () => gridWorksheet('Affirmations', ['I am...', 'I can...', 'I deserve...', 'Today I choose...'], 7),
    reflection: () => journalPromptPage('Weekly Self-Care Reflection', ['What gave me energy?', 'What drained me?', 'What helped?', 'Next week I need...'])
  },
  garden: {
    layout: () => gridWorksheet('Garden Layout', ['Bed / area 1', 'Bed / area 2', 'Containers', 'Notes'], 8),
    seeds: () => listTablePage('Seed Inventory', ['Plant', 'Variety', 'Start date', 'Plant outside', 'Notes'], 16),
    planting: () => scheduleTablePage('Planting Calendar', ['Date', 'Plant', 'Indoor / outdoor', 'Location', 'Notes'], 14),
    watering: () => checklistPage('Watering Schedule', ['Seedlings', 'Containers', 'Garden beds', 'Herbs', 'Houseplants', 'Fertilizer', 'Check pests', 'Harvest']),
    harvest: () => listTablePage('Harvest Log', ['Date', 'Plant', 'Amount', 'Quality', 'Notes'], 16),
    pests: () => listTablePage('Pest Notes', ['Date', 'Plant', 'Problem', 'Treatment', 'Result'], 14),
    plants: () => journalPromptPage('Plant Care Journal', ['Plant name', 'Care needs', 'What I noticed', 'Next step']),
    wishlist: () => listTablePage('Garden Wishlist', ['Plant / item', 'Source', 'Cost', 'Priority', 'Notes'], 14)
  },
  recipe: {
    recipeCard: () => recipeCardPage('Recipe Card'),
    favorites: () => listTablePage('Family Favorites', ['Recipe', 'Who liked it?', 'Difficulty', 'Repeat?', 'Notes'], 14),
    baking: () => journalPromptPage('Baking Notes', ['Recipe', 'Temperature / time', 'What changed?', 'Result']),
    holiday: () => scheduleTablePage('Holiday Recipe Planner', ['Holiday', 'Recipe', 'Ingredients needed', 'Prep date', 'Notes'], 12),
    grocery: () => categoryGridPage('Master Grocery List', ['Produce', 'Protein / dairy', 'Pantry', 'Frozen', 'Baking', 'Household']),
    mealIdeas: () => listTablePage('Meal Idea Bank', ['Meal', 'Main ingredients', 'Quick?', 'Family rating', 'Notes'], 16),
    inventory: () => listTablePage('Pantry Inventory', ['Item', 'Location', 'Qty', 'Use by', 'Meal idea'], 16),
    reviews: () => listTablePage('Recipe Reviews', ['Recipe', 'Date made', 'Rating', 'Changes', 'Notes'], 14)
  },
  goal: {
    vision: () => gridWorksheet('Vision Page', ['Health', 'Family', 'Work / business', 'Fun / creativity'], 8),
    yearly: () => gridWorksheet('Yearly Goals', ['Goal 1', 'Goal 2', 'Goal 3', 'Goal 4'], 8),
    quarterly: () => projectPlannerPage('90-Day Goal Planner'),
    monthly: () => scheduleTablePage('Monthly Action Plan', ['Week', 'Main focus', 'Action steps', 'Done?', 'Notes'], 10),
    weekly: () => scheduleTablePage('Weekly Steps', ['Day', 'Small step', 'Time needed', 'Done?', 'Notes'], 10),
    habits: () => makeHabitTracker('Goal Habit Tracker', 'Small actions that build progress', ['Plan', 'Practice', 'Move', 'Learn', 'Create', 'Connect', 'Reflect']),
    progress: () => journalPromptPage('Progress Review', ['What moved forward?', 'What got stuck?', 'What I learned', 'Next adjustment']),
    reward: () => checklistPage('Reward Tracker', ['Milestone 1', 'Milestone 2', 'Milestone 3', 'Milestone 4', 'Celebrate progress', 'Rest', 'Share win', 'Plan next step'])
  },
  pregnancy: {
    weeklyCheckin: () => journalPromptPage('Weekly Pregnancy Check-In', ['This week I feel...','Symptoms / changes','Baby update','Questions / notes']),
    appointments: () => listTablePage('Doctor Appointment Tracker', ['Date','Provider','Weeks','Questions','Notes'], 14),
    symptoms: () => listTablePage('Pregnancy Symptoms Tracker', ['Date','Symptom','Severity','What helped','Notes'], 16),
    babyNames: () => listTablePage('Baby Name Ideas', ['Name','Meaning','Like?','Middle name idea','Notes'], 18),
    hospitalBag: () => checklistPage('Hospital Bag Checklist', ['Mom clothing','Baby outfit','Toiletries','Documents','Chargers','Snacks','Comfort items','Going-home outfit','Partner bag','Car seat']),
    birthPlan: () => gridWorksheet('Birth Plan', ['Labor preferences','Comfort measures','Medical preferences','After birth'], 7),
    registry: () => listTablePage('Baby Registry Tracker', ['Item','Category','Store','Priority','Purchased?'], 16),
    babyShower: () => projectPlannerPage('Baby Shower Planner'),
    movement: () => listTablePage('Fetal Movement Tracker', ['Date','Start time','Movements','How long?','Notes'], 18),
    doctorQuestions: () => listTablePage('Questions for Doctor', ['Question','Appointment date','Answer / notes'], 14)
  },
  newbornMemory: {
    monthlyMilestones: () => journalPromptPage('Monthly Milestone Page', ['This month you learned...','Favorite moments','Growth / changes','Sweet memories']),
    growth: () => listTablePage('Growth Tracker', ['Date','Age','Weight','Length','Head','Notes'], 12),
    firsts: () => listTablePage('First Moments', ['First...','Date','Age','Memory'], 14),
    doctorVisits: () => listTablePage('Doctor Visit Log', ['Date','Age','Reason','Doctor notes','Next visit'], 12),
    memories: () => journalPromptPage('Family Memories', ['A day we loved','Family visitors','Funny moments','Things to remember']),
    holidays: () => listTablePage('First Holidays', ['Holiday','Date','What we did','Photo notes','Memory'], 12),
    photoNotes: () => listTablePage('Photo Notes', ['Date','Photo idea / moment','Who is included?','Printed?'], 16),
    letter: () => journalPromptPage('Letter to Baby', ['Dear baby...','What I love about you','My hopes for you','A memory from today'])
  },
  medicalBinder: {
    doctorVisits: () => listTablePage('Doctor Visit Log', ['Date','Doctor','Reason','Diagnosis','Next steps'], 14),
    medications: () => listTablePage('Medication List', ['Medication','Dose','Schedule','Prescriber','Notes'], 14),
    symptoms: () => listTablePage('Symptom Tracker', ['Date','Symptom','Severity','Trigger','What helped','Notes'], 16),
    labs: () => listTablePage('Lab Results Notes', ['Date','Test','Result','Doctor notes','Follow-up'], 12),
    insurance: () => gridWorksheet('Insurance Info', ['Insurance plan','Member IDs','Phone numbers','Important notes'], 6),
    questions: () => listTablePage('Appointment Questions', ['Question','For which doctor?','Answer / notes'], 14),
    history: () => listTablePage('Family Medical History', ['Family member','Condition','Age / details','Notes'], 14),
    emergency: () => contactTablePage('Emergency Contacts', ['Name / service','Phone','Relationship','Notes'], 14),
    vaccines: () => listTablePage('Vaccine Log', ['Vaccine','Date','Provider','Next due','Notes'], 14)
  },
  adhdFocus: {
    brainDump: () => journalPromptPage('Brain Dump', ['Everything on my mind','Small tasks','Things I am avoiding','Later list']),
    prioritySort: () => gridWorksheet('Priority Sorting', ['Now','Next','Later','Not important'], 8),
    timeBlock: () => scheduleTablePage('Time Blocking', ['Time','Task','Energy level','Notes'], 16),
    taskBreakdown: () => projectPlannerPage('Task Breakdown'),
    distractions: () => listTablePage('Distraction List', ['Distraction','When it happens','Plan / boundary','Notes'], 14),
    rewards: () => categoryGridPage('Dopamine Reward List', ['Quick rewards','Movement rewards','Rest rewards','Fun rewards','Social rewards','Low-cost rewards']),
    dailyReset: () => checklistPage('Daily Reset', ['Clear surface','Pick top 3','Set timer','Water / snack','Move body','One tiny task','Review later list','Plan tomorrow']),
    weeklyReview: () => journalPromptPage('Weekly Focus Review', ['What worked?','What got stuck?','What helped my focus?','Next week I will try...'])
  },
  cleaningDeclutter: {
    roomDeclutter: () => categoryGridPage('Room-by-Room Declutter', ['Kitchen','Bedrooms','Bathrooms','Living room','Office','Storage']),
    donation: () => listTablePage('Donation Tracker', ['Item','Room','Donate / sell','Location','Done?'], 16),
    quickClean: () => checklistPage('15-Minute Cleaning Checklist', ['Clear counters','Dishes','Trash','Laundry basket','Wipe surfaces','Sweep floor','Put away 10 items','Reset room']),
    deepClean: () => scheduleTablePage('Deep Cleaning Schedule', ['Room','Task','Date','Supplies','Done?'], 14),
    springClean: () => projectPlannerPage('Spring Cleaning Planner'),
    beforeAfter: () => journalPromptPage('Before / After Notes', ['Before this area felt...','What I changed','After it feels...','What to maintain']),
    supplies: () => listTablePage('Cleaning Supplies Inventory', ['Supply','Quantity','Room','Need to buy?','Notes'], 14)
  },
  holiday: {
    giftList: () => listTablePage('Holiday Gift List', ['Person','Gift idea','Budget','Purchased?','Wrapped?'], 16),
    budget: () => budgetWorksheet('Holiday Budget', ['Gifts','Food','Decor','Cards','Travel','Activities','Donations','Other']),
    cards: () => listTablePage('Card Mailing List', ['Name','Address','Card sent?','Reply?','Notes'], 16),
    meal: () => categoryGridPage('Holiday Meal Planner', ['Main dishes','Sides','Desserts','Drinks','Groceries','Prep ahead']),
    decor: () => checklistPage('Decoration Checklist', ['Entry','Tree / centerpiece','Table','Lights','Candles','Outdoor decor','Storage bins','Clean up']),
    events: () => scheduleTablePage('Holiday Event Calendar', ['Date','Event','Location','Bring','Notes'], 12),
    shopping: () => listTablePage('Holiday Shopping Tracker', ['Store','Item','Budget','Bought?','Notes'], 16),
    traditions: () => journalPromptPage('Traditions List', ['Traditions to keep','New traditions to try','Family favorites','Memories'])
  },
  christmas: {
    giftTracker: () => listTablePage('Christmas Gift Tracker', ['Person','Gift','Budget','Bought?','Wrapped?'], 18),
    stocking: () => listTablePage('Stocking Stuffer List', ['Person','Idea','Bought?','Cost','Notes'], 16),
    cards: () => listTablePage('Christmas Card List', ['Name','Address','Sent?','Received?','Notes'], 18),
    cookies: () => categoryGridPage('Cookie Baking Planner', ['Recipes','Ingredients','Baking dates','Packaging','Gift boxes','Notes']),
    meal: () => categoryGridPage('Christmas Meal Plan', ['Breakfast','Dinner','Desserts','Drinks','Groceries','Prep ahead']),
    decorInventory: () => listTablePage('Decoration Inventory', ['Item','Bin / location','Condition','Need?','Notes'], 16),
    traditions: () => journalPromptPage('Family Traditions', ['Favorite traditions','New ideas','Movies / music','Memories']),
    december: () => scheduleTablePage('December Calendar', ['Date','Event / task','Gift / card','Notes'], 18)
  },
  birthday: {
    budget: () => budgetWorksheet('Birthday Party Budget', ['Venue','Food','Cake','Decor','Gifts','Activities','Favors','Other']),
    guestList: () => listTablePage('Birthday Guest List', ['Guest','Invited?','RSVP','Food notes','Thanks sent?'], 16),
    giftIdeas: () => listTablePage('Gift Ideas', ['Idea','Store','Cost','Purchased?','Notes'], 14),
    theme: () => gridWorksheet('Theme Ideas', ['Colors','Decor','Activities','Food'], 7),
    cake: () => journalPromptPage('Cake Notes', ['Flavor','Design','Bakery / recipe','Pickup / serving notes']),
    activities: () => scheduleTablePage('Activity Plan', ['Time','Activity','Supplies','Helper','Notes'], 12),
    shopping: () => checklistPage('Shopping Checklist', ['Cake','Candles','Food','Drinks','Plates','Decor','Favors','Games','Gifts','Thank-you cards']),
    thankYou: () => listTablePage('Thank-You Note Tracker', ['Person','Gift','Card sent?','Notes'], 16)
  },
  graduation: {
    party: () => projectPlannerPage('Graduation Party Planner'),
    guestList: () => listTablePage('Graduation Guest List', ['Guest','Address','Invite sent?','RSVP','Notes'], 16),
    announcements: () => listTablePage('Announcement Mailing List', ['Name','Address','Announcement sent?','Gift?','Thank-you sent?'], 18),
    giftTracker: () => listTablePage('Graduation Gift Tracker', ['From','Gift','Amount','Thank-you sent?','Notes'], 16),
    photo: () => checklistPage('Photo Checklist', ['Cap and gown','Family','Friends','School sign','Ceremony','Party decor','Cake','Gifts']),
    capGown: () => checklistPage('Cap / Gown Checklist', ['Order cap/gown','Try on outfit','Shoes','Tassel','Honor cords','Steam clothes','Pack bag','Photos']),
    ceremony: () => gridWorksheet('Ceremony Details', ['Date / time','Location / parking','Tickets','Important notes'], 6),
    thankYou: () => listTablePage('Thank-You Note Tracker', ['Name','Gift','Address','Sent?','Notes'], 16)
  },
  digitalLife: {
    accounts: () => listTablePage('Website Account Tracker', ['Website','Username','Email used','Hint','Notes'], 16),
    passwordHints: () => listTablePage('Password Hints', ['Account','Hint','2FA?','Recovery email','Notes'], 16),
    subscriptions: () => listTablePage('Subscription Tracker', ['Service','Cost','Renewal date','Cancel?','Notes'], 14),
    devices: () => listTablePage('Device Inventory', ['Device','Serial #','Purchase date','Warranty','Notes'], 12),
    renewals: () => scheduleTablePage('Renewal Dates', ['Date','Service','Cost','Action needed','Notes'], 14),
    important: () => gridWorksheet('Important Digital Accounts', ['Banking','Business','Family','Emergency notes'], 6)
  },
  kdp: {
    bookIdeas: () => listTablePage('KDP Book Idea Tracker', ['Idea','Audience','Format','Season','Priority','Notes'], 16),
    keywords: () => listTablePage('KDP Keyword Research', ['Keyword','Search intent','Competition','Use in title?','Notes'], 16),
    categories: () => listTablePage('KDP Category Research', ['Category','Comparable books','Difficulty','Notes'], 14),
    cover: () => gridWorksheet('Cover Design Notes', ['Title ideas','Style / colors','Imagery','Notes'], 7),
    interior: () => checklistPage('Interior Checklist', ['Page size','Margins','Bleed','Title page','Interior pages','Test print','PDF export','Quality check']),
    upload: () => checklistPage('Upload Checklist', ['Title','Subtitle','Description','Keywords','Categories','Pricing','Previewer check','Publish']),
    pricing: () => listTablePage('Pricing Tracker', ['Book','Page count','Print cost','Price','Royalty'], 14),
    launch: () => projectPlannerPage('KDP Launch Plan'),
    sales: () => listTablePage('KDP Sales Tracker', ['Date','Book','Sales','Royalties','Notes'], 16)
  },
  shopifyWebsite: {
    productPages: () => checklistPage('Product Page Checklist', ['Title','Photos','Description','SEO title','Meta description','Price','Shipping info','FAQ']),
    seo: () => listTablePage('SEO Keyword Tracker', ['Keyword','Page','Search intent','Used?','Notes'], 16),
    homepage: () => journalPromptPage('Homepage Copy Planner', ['Hero headline','Main promise','Featured sections','Call to action']),
    blog: () => listTablePage('Blog Idea Bank', ['Idea','Keyword','Audience','Season','Status'], 16),
    updates: () => listTablePage('Website Update Log', ['Date','Page','Change made','Result','Notes'], 14),
    email: () => gridWorksheet('Email Signup Ideas', ['Freebie ideas','Signup copy','Popup / form','Follow-up ideas'], 6),
    traffic: () => listTablePage('Website Traffic Tracker', ['Date','Users','Source','Top page','Notes'], 16),
    conversion: () => journalPromptPage('Conversion Notes', ['What changed?','What improved?','What confused visitors?','Next test'])
  },
  contentRepurpose: {
    original: () => projectPlannerPage('Original Content Idea'),
    facebook: () => journalPromptPage('Facebook Post', ['Hook','Main message','Question / CTA','Image idea']),
    pinterest: () => listTablePage('Pinterest Pin Idea', ['Pin title','Keywords','Image idea','URL','Notes'], 12),
    blog: () => listTablePage('Blog Title Ideas', ['Title','Keyword','Audience','Status','Notes'], 14),
    email: () => listTablePage('Email Subject Ideas', ['Subject','Audience','Offer / topic','Notes'], 14),
    video: () => journalPromptPage('Short Video Idea', ['Hook','Scene list','Caption','CTA']),
    captions: () => journalPromptPage('Caption Variations', ['Friendly version','Educational version','Story version','Short version']),
    performance: () => listTablePage('Performance Notes', ['Date','Platform','Content','Result','Notes'], 14)
  },
  productLaunch: {
    idea: () => journalPromptPage('Product Idea', ['Product concept','Who it helps','Why it is useful','Differentiator']),
    audience: () => gridWorksheet('Audience Planner', ['Buyer profile','Pain points','Search terms','Where to promote'], 6),
    pricing: () => budgetWorksheet('Pricing Planner', ['Materials','Fees','Labor','Packaging','Shipping','Profit','Discounts','Other']),
    materials: () => listTablePage('Materials List', ['Material','Supplier','Qty','Cost','Notes'], 14),
    photos: () => checklistPage('Photos / Mockups', ['Main image','Lifestyle image','Size image','Detail image','Color options','SEO filename','Alt text','Final review']),
    listing: () => checklistPage('Listing Checklist', ['Title','Tags','Description','Photos','Price','Variations','Shipping','Proofread']),
    calendar: () => scheduleTablePage('Launch Calendar', ['Date','Task','Channel','Status','Notes'], 14),
    promotion: () => categoryGridPage('Promotion Plan', ['Email','Facebook','Pinterest','Instagram','Website','Etsy / shop']),
    results: () => journalPromptPage('Results Review', ['What sold?','Traffic sources','Customer questions','Next improvement'])
  },
  homeschool: {
    lesson: () => scheduleTablePage('Weekly Lesson Plan', ['Day','Subject','Lesson','Materials','Done?'], 10),
    attendance: () => listTablePage('Attendance Tracker', ['Date','Present?','Hours','Notes'], 18),
    subjects: () => listTablePage('Subject Tracker', ['Subject','Goal','Resource','Progress','Notes'], 14),
    reading: () => listTablePage('Homeschool Reading Log', ['Date','Book','Pages','Minutes','Notes'], 16),
    fieldTrip: () => projectPlannerPage('Field Trip Planner'),
    projects: () => listTablePage('Project Tracker', ['Project','Subject','Due date','Status','Notes'], 14),
    progress: () => journalPromptPage('Progress Notes', ['What we learned','What needs practice','Student wins','Next steps']),
    portfolio: () => checklistPage('Portfolio Checklist', ['Writing sample','Math work','Reading log','Project photos','Art sample','Field trip notes','Assessment','Parent notes'])
  },
  kidsReadingChallenge: {
    thirtyBooks: () => gridWorksheet('30-Book Challenge', ['Books 1–8','Books 9–16','Books 17–24','Books 25–30'], 8),
    genre: () => checklistPage('Genre Challenge', ['Mystery','Fantasy','Funny book','Nonfiction','Animal story','Poetry','Classic','Graphic novel','Biography','Choice book']),
    bingo: () => gridWorksheet('Reading Bingo', ['Bingo row 1','Bingo row 2','Bingo row 3','Bingo row 4'], 5),
    character: () => journalPromptPage('Favorite Character', ['Character name','What they are like','Favorite scene','Draw / describe them']),
    review: () => journalPromptPage('Book Review Card', ['Book title','My rating','Favorite part','Would I recommend it?']),
    reward: () => checklistPage('Reading Reward Tracker', ['5 books','10 books','15 books','20 books','25 books','30 books','Special reward','Next challenge'])
  },
  kidsSummer: {
    bucket: () => checklistPage('Summer Bucket List', ['Go to park','Read outside','Make art','Try recipe','Visit library','Water play','Nature walk','Family movie','Picnic','Write a story']),
    routine: () => checklistPage('Summer Daily Routine', ['Breakfast','Get dressed','Reading','Outside time','Chores','Creative time','Quiet time','Bedtime routine']),
    reading: () => listTablePage('Summer Reading Tracker', ['Date','Book','Minutes','Rating','Notes'], 16),
    chores: () => makeHabitTracker('Summer Chore Chart', 'Track each day', ['Make bed','Laundry','Dishes','Tidy room','Reading','Outside','Kind helper']),
    screenTime: () => listTablePage('Screen-Time Tracker', ['Date','Time used','Before screen task','Notes'], 16),
    activities: () => categoryGridPage('Activity Ideas', ['Outdoor','Indoor','Creative','Learning','Family','Quiet time']),
    weekly: () => scheduleTablePage('Summer Weekly Plan', ['Day','Activity','Reading','Chores','Notes'], 10)
  },
  practiceTracker: {
    dailyLog: () => listTablePage('Daily Practice Log', ['Date','Skill','Minutes','Focus','Notes'], 18),
    skillFocus: () => gridWorksheet('Skill Focus', ['Current skill','Practice steps','Hard part','Teacher notes'], 7),
    time: () => listTablePage('Time Practiced', ['Date','Start','End','Total minutes','Notes'], 18),
    teacherNotes: () => journalPromptPage('Coach / Teacher Notes', ['Feedback','Things to practice','Next lesson','Questions']),
    goals: () => projectPlannerPage('Practice Goal Tracker'),
    performance: () => checklistPage('Performance Prep', ['Choose piece / skill','Practice slowly','Record myself','Fix hard parts','Prepare outfit / gear','Pack supplies','Rest','Celebrate']),
    reflection: () => journalPromptPage('Practice Reflection', ['What improved?','What was difficult?','What helped?','Next practice goal'])
  },
  bookClub: {
    schedule: () => scheduleTablePage('Book Club Meeting Schedule', ['Date','Book','Host','Location','Notes'], 12),
    bookPicks: () => listTablePage('Book Picks', ['Title','Author','Suggested by','Votes','Notes'], 16),
    members: () => contactTablePage('Member List', ['Name','Email / phone','Favorite genre','Notes'], 14),
    questions: () => journalPromptPage('Discussion Questions', ['Question 1','Question 2','Question 3','Big takeaway']),
    snacks: () => categoryGridPage('Snack List', ['Savory','Sweet','Drinks','Allergies','Host supplies','Notes']),
    quotes: () => listTablePage('Favorite Quotes', ['Book','Page','Quote','Who shared it?'], 12),
    ratings: () => listTablePage('Book Ratings', ['Book','Member','Rating','Would recommend?','Notes'], 14)
  },
  craftProject: {
    idea: () => projectPlannerPage('Craft Project Idea'),
    supplies: () => listTablePage('Supply List', ['Supply','Quantity','Store','Cost','Have it?'], 16),
    cost: () => budgetWorksheet('Cost Tracker', ['Supplies','Tools','Pattern','Packaging','Shipping','Other']),
    steps: () => checklistPage('Project Steps', ['Choose idea','Gather supplies','Prep workspace','Step 1','Step 2','Step 3','Finish','Photograph']),
    pattern: () => journalPromptPage('Pattern Notes', ['Pattern name','Changes made','Hard parts','Tips for next time']),
    progress: () => listTablePage('Progress Tracker', ['Date','Step completed','Time spent','Notes'], 14),
    review: () => journalPromptPage('Finished Project Review', ['What I made','What I loved','What I would change','Who it is for'])
  },
  sewingCrochet: {
    pattern: () => gridWorksheet('Pattern Details', ['Pattern name','Size','Gauge / measurements','Changes'], 6),
    inventory: () => listTablePage('Yarn / Fabric Inventory', ['Material','Color','Amount','Project idea','Notes'], 16),
    tools: () => listTablePage('Hook / Needle Size', ['Tool','Size','Used for','Notes'], 14),
    measurements: () => listTablePage('Measurements', ['Person','Measurement','Value','Date','Notes'], 14),
    progress: () => listTablePage('Progress Log', ['Date','Section','Time','Notes'], 14),
    gift: () => listTablePage('Gift Recipient', ['Recipient','Project','Occasion','Due date','Notes'], 12),
    cost: () => budgetWorksheet('Cost Tracker', ['Pattern','Yarn / fabric','Tools','Notions','Packaging','Other'])
  },
  photography: {
    shotList: () => listTablePage('Shot List', ['Shot','Location','People / props','Priority','Done?'], 16),
    locations: () => listTablePage('Location Ideas', ['Location','Best time','Permit?','Mood','Notes'], 14),
    props: () => listTablePage('Prop List', ['Prop','Needed for','Have it?','Pack?','Notes'], 14),
    client: () => gridWorksheet('Client Notes', ['Client details','Style preferences','Must-have shots','Delivery notes'], 7),
    editing: () => checklistPage('Editing Checklist', ['Import','Cull','Basic edits','Retouch','Export','Backup','Upload gallery','Notify client']),
    delivery: () => listTablePage('Delivery Tracker', ['Client','Gallery link','Delivered?','Invoice paid?','Notes'], 14)
  },
  memoryKeeping: {
    monthly: () => journalPromptPage('Monthly Memories', ['This month we...','Favorite moment','Hard but meaningful','What changed']),
    moments: () => listTablePage('Favorite Moments', ['Date','Moment','People','Photo?','Notes'], 16),
    quotes: () => listTablePage('Family Quotes', ['Who said it','Quote','Date','Context'], 14),
    photos: () => listTablePage('Photo Notes', ['Date','Photo','Print?','Album / page','Notes'], 16),
    places: () => listTablePage('Places Visited', ['Place','Date','Who went','Favorite part','Notes'], 14),
    learned: () => journalPromptPage('Things We Learned', ['Something new','A funny discovery','A family lesson','Remember this'])
  },
  checklistLibrary: {
    dailyReset: () => checklistPage('Daily Reset Checklist', ['Clear surfaces','Check calendar','Top 3 tasks','Meals / water','Laundry / dishes','Quick tidy','Prep for tomorrow','One small win']),
    weeklyReset: () => checklistPage('Weekly Reset Checklist', ['Review calendar','Plan meals','Grocery list','Laundry reset','Clean high-use areas','Budget check','Family schedule','Set weekly priorities']),
    errands: () => listTablePage('Errands Checklist', ['Place','Task','Priority','Done?','Notes'], 18),
    shopping: () => categoryGridPage('Shopping Checklist', ['Grocery','Household','Kids / school','Gifts','Online orders','Other']),
    appointments: () => checklistPage('Appointment Prep Checklist', ['Confirm date/time','Write questions','Bring forms','Bring medication list','Insurance card','Previous notes','Follow-up task','Next appointment']),
    packing: () => categoryGridPage('Simple Packing Checklist', ['Clothes','Toiletries','Documents','Electronics','Kids / family','Last-minute']),
    project: () => projectPlannerPage('Project Checklist'),
    followUp: () => listTablePage('Follow-Up List', ['Who / place','What to follow up','Date','Status','Notes'], 16)
  },
  householdChecklistPack: {
    dailyClean: () => checklistPage('Daily Cleaning Checklist', ['Dishes','Counters','Trash','Laundry basket','Floors quick sweep','Bathroom reset','Put away clutter','Set up tomorrow']),
    weeklyClean: () => checklistPage('Weekly Cleaning Checklist', ['Bathrooms','Kitchen deep wipe','Floors','Bedding','Dusting','Laundry catch-up','Fridge check','Entry reset']),
    deepClean: () => categoryGridPage('Deep Clean Checklist', ['Kitchen','Bathrooms','Bedrooms','Living areas','Windows / floors','Storage']),
    seasonal: () => timelinePage('Seasonal Home Checklist', ['Spring','Summer','Fall','Winter']),
    maintenance: () => listTablePage('Home Maintenance Checklist', ['Task','Area','Frequency','Last done','Next due','Notes'], 16),
    supplies: () => listTablePage('Supply Restock List', ['Supply','Location','Qty left','Buy?','Notes'], 18),
    declutter: () => categoryGridPage('Declutter Checklist', ['Keep','Donate','Sell','Trash','Repair','Decide later']),
    guestPrep: () => checklistPage('Guest Prep Checklist', ['Fresh towels','Clean bathroom','Guest bed','Snacks / drinks','Wi-Fi note','Entry tidy','Trash empty','Welcome note'])
  },
  lifeAdminLog: {
    calls: () => listTablePage('Calls + Emails Log', ['Date','Person / company','Topic','Next step','Done?'], 18),
    appointments: () => listTablePage('Appointment Log', ['Date','Appointment','Location','Prep needed','Follow-up'], 16),
    documents: () => listTablePage('Document Tracker', ['Document','Where stored','Date received','Renewal?','Notes'], 16),
    renewals: () => scheduleTablePage('Renewal Date Log', ['Date','Item / service','Cost','Auto-renew?','Action'], 16),
    returns: () => listTablePage('Returns + Refunds Log', ['Item','Store','Order #','Return by','Refund status'], 16),
    warranty: () => listTablePage('Warranty Log', ['Item','Brand','Purchase date','Warranty ends','Notes'], 14),
    important: () => gridWorksheet('Important Notes', ['Family info','Home info','Medical notes','Emergency notes'], 7),
    followUp: () => listTablePage('Follow-Up Tracker', ['Item','Waiting on','Due date','Status','Notes'], 16)
  },
  wellnessLogbook: {
    symptoms: () => listTablePage('Symptom Log', ['Date','Symptom','Severity','Possible trigger','Notes'], 18),
    meds: () => listTablePage('Medication Log', ['Medication','Dose','Time','Taken?','Notes'], 18),
    water: () => makeHabitTracker('Water Tracker', 'Track water and simple wellness habits', ['Water','Movement','Protein','Outside','Stretch','Sleep routine','Mood check']),
    sleep: () => listTablePage('Sleep Notes', ['Date','Bedtime','Wake time','Quality','Notes'], 16),
    mood: () => listTablePage('Mood Check-In', ['Date','Mood','Energy','Stress','Helpful action'], 16),
    movement: () => listTablePage('Movement Log', ['Date','Activity','Minutes','How I felt','Notes'], 16),
    appointmentPrep: () => checklistPage('Doctor Appointment Prep', ['Main concern','Symptom notes','Medication list','Questions','Insurance card','Bring records','Follow-up plan','Next appointment']),
    questions: () => listTablePage('Questions List', ['Question','Who to ask','Priority','Answer / notes'], 16)
  },
  familyRoutinePack: {
    morning: () => checklistPage('Morning Routine', ['Wake up','Bathroom','Get dressed','Breakfast','Pack bag','Shoes / coat','Quick tidy','Leave on time']),
    afterSchool: () => checklistPage('After School Routine', ['Put bag away','Snack','Homework','Reading','Chores','Free time','Prep tomorrow','Family check-in']),
    bedtime: () => checklistPage('Bedtime Routine', ['Bath / wash','Pajamas','Brush teeth','Pick clothes','Pack bag','Read','Lights out','Goodnight']),
    chores: () => makeChorePage('chores', {startDate:new Date()}, 1),
    screenTime: () => gridWorksheet('Screen Time Agreement', ['When screens are okay','Before screen tasks','Time limit','Family rules'], 7),
    schoolBag: () => checklistPage('School Bag Checklist', ['Homework','Folder','Lunch / snack','Water bottle','Library book','Jacket','Sports / activity','Notes']),
    weekend: () => checklistPage('Weekend Reset', ['Laundry','Rooms reset','School papers','Meal plan','Family calendar','Errands','Fun plan','Rest time']),
    reward: () => categoryGridPage('Reward Tracker', ['Earned stars','Reward ideas','Family rewards','Kind choices','Bonus jobs','Notes'])
  },
  foodInventoryLog: {
    pantry: () => listTablePage('Pantry Inventory', ['Item','Qty','Expiration','Need to buy?','Notes'], 18),
    freezer: () => listTablePage('Freezer Inventory', ['Item','Date frozen','Qty','Use by','Meal idea'], 18),
    fridge: () => listTablePage('Fridge Cleanout Log', ['Date','Use soon','Throw away','Prep idea','Notes'], 16),
    leftovers: () => listTablePage('Leftover Tracker', ['Food','Date','Use by','Meal idea','Done?'], 16),
    groceryStaples: () => categoryGridPage('Grocery Staples List', ['Produce','Protein / dairy','Pantry','Frozen','Household','Other']),
    mealIdeas: () => listTablePage('Meal Idea Bank', ['Meal','Ingredients on hand','Prep time','Family rating','Notes'], 16),
    expiration: () => scheduleTablePage('Expiration Date Log', ['Date','Item','Location','Use plan','Done?'], 16),
    restock: () => checklistPage('Restock Checklist', ['Breakfast staples','Lunch items','Snacks','Dinners','Paper goods','Cleaning','Pet / baby','Other'])
  },
  moneyLogbook: {
    spending: () => listTablePage('Daily Spending Log', ['Date','Store','Category','Amount','Need / want'], 18),
    bills: () => checklistPage('Bill Checklist', ['Rent / mortgage','Electric','Water','Internet','Phone','Insurance','Subscriptions','Other']),
    subscriptions: () => listTablePage('Subscription Log', ['Service','Cost','Renewal date','Use often?','Cancel?'], 16),
    returns: () => listTablePage('Returns + Refunds', ['Item','Store','Amount','Return by','Refund received?'], 16),
    savings: () => budgetWorksheet('Savings Tracker', ['Emergency','Vacation','Holiday','Home','Kids','Business','Medical','Other']),
    debt: () => listTablePage('Debt Payment Log', ['Debt','Due date','Payment','Balance','Notes'], 16),
    taxPrep: () => checklistPage('Tax Prep Checklist', ['Income forms','Expense totals','Receipts','Mileage','Donations','Business costs','Questions','Filed copy']),
    noSpend: () => makeHabitTracker('No-Spend Tracker', 'Track no-spend days and money habits', ['No spend','Packed lunch','Used what I have','Skipped impulse buy','Saved money','Reviewed budget','Grateful'])
  },
  schoolLogbook: {
    homework: () => listTablePage('Homework Log', ['Date','Subject','Assignment','Due date','Done?'], 18),
    reading: () => listTablePage('Reading Log', ['Date','Book','Pages / minutes','Parent initial','Notes'], 18),
    attendance: () => listTablePage('Attendance Log', ['Date','Present?','Late?','Reason','Notes'], 18),
    behavior: () => listTablePage('Behavior Notes', ['Date','What happened','What helped','Follow-up','Notes'], 14),
    supplies: () => checklistPage('School Supply Checklist', ['Pencils','Folders','Notebook','Backpack','Lunch box','Water bottle','Art supplies','Other']),
    project: () => projectPlannerPage('School Project Checklist'),
    testPrep: () => checklistPage('Test Prep Checklist', ['Review guide','Practice questions','Flashcards','Ask questions','Sleep','Pack supplies','Arrive early','Reflect']),
    teacherNotes: () => listTablePage('Teacher Notes Log', ['Date','Subject','Note','Action needed','Done?'], 16)
  },
  businessLogbook: {
    orders: () => listTablePage('Order Log', ['Date','Order #','Item','Ship by','Status','Notes'], 18),
    customers: () => listTablePage('Customer Notes', ['Date','Customer','Question / request','Reply sent?','Notes'], 16),
    inventory: () => listTablePage('Inventory Count Log', ['Item','SKU','Qty','Reorder?','Notes'], 18),
    supplies: () => checklistPage('Supply Restock Checklist', ['Envelopes','Labels','Ink','Paper','Packaging','Thank-you notes','Stickers','Other']),
    expenses: () => listTablePage('Expense Log', ['Date','Category','Vendor','Amount','Receipt?'], 18),
    content: () => checklistPage('Content Checklist', ['Idea','Photo / graphic','Caption','Keywords','Schedule','Post','Repurpose','Track result']),
    website: () => listTablePage('Website Update Log', ['Date','Page','Change','Reason','Result'], 16),
    followUp: () => listTablePage('Business Follow-Up List', ['Who / what','Reason','Due date','Status','Notes'], 16)
  },
  eventChecklistPack: {
    planning: () => checklistPage('Event Planning Checklist', ['Pick date','Book location','Guest list','Budget','Food','Decor','Activities','Timeline']),
    guest: () => listTablePage('Guest List Checklist', ['Guest','Invited?','RSVP','Food notes','Thank-you?'], 18),
    food: () => categoryGridPage('Food Checklist', ['Main food','Snacks','Desserts','Drinks','Serving supplies','Allergies']),
    decor: () => checklistPage('Decor Checklist', ['Table setup','Banner / sign','Centerpieces','Lighting','Photo area','Favors','Cleanup supplies','Other']),
    shopping: () => listTablePage('Event Shopping Checklist', ['Item','Store','Qty','Bought?','Notes'], 18),
    timeline: () => scheduleTablePage('Event Timeline', ['Time','Task','Person','Location','Notes'], 16),
    dayOf: () => checklistPage('Day-of Checklist', ['Pick up food','Set tables','Decorate','Music','Photos','Trash bags','Thank helpers','Final cleanup']),
    thankYou: () => listTablePage('Thank-You Tracker', ['Name','Reason / gift','Address','Sent?','Notes'], 16)
  },
  travelPackingLog: {
    packing: () => categoryGridPage('Packing Checklist', ['Clothes','Toiletries','Documents','Electronics','Kids / family','Last-minute']),
    documents: () => checklistPage('Travel Documents', ['IDs / passports','Tickets','Hotel info','Car rental','Insurance','Emergency contacts','Copies','Wallet']),
    reservation: () => listTablePage('Reservation Log', ['Date','Company','Confirmation #','Time','Notes'], 14),
    outfit: () => listTablePage('Outfit Planner', ['Day','Outfit','Shoes','Weather','Packed?'], 14),
    kids: () => categoryGridPage('Kids Packing List', ['Clothes','Comfort items','Snacks','Activities','Medicine','Other']),
    toiletries: () => checklistPage('Toiletries Checklist', ['Toothbrush','Hair care','Skin care','Medicine','Sunscreen','Contacts / glasses','Baby / kids','Other']),
    homePrep: () => checklistPage('Before-You-Leave Checklist', ['Trash','Laundry','Dishes','Thermostat','Lights','Mail','Pets / plants','Lock doors']),
    souvenir: () => listTablePage('Souvenir Log', ['Person','Gift idea','Bought?','Cost','Packed?'], 16)
  },
  sitterChecklist: {
    contacts: () => contactTablePage('Emergency Contacts', ['Name / service','Phone','When to call','Notes'], 12),
    petCare: () => checklistPage('Pet Care Checklist', ['Food','Water','Walk / litter','Medication','Play time','Emergency vet','Favorite toy','Notes']),
    feeding: () => listTablePage('Feeding Instructions', ['Pet / plant','Morning','Afternoon','Evening','Notes'], 12),
    homeInfo: () => gridWorksheet('Home Info', ['Wi-Fi','Alarm / keys','Trash day','House rules'], 6),
    plants: () => listTablePage('Plant Care', ['Plant / area','Watering','Sunlight','Notes'], 12),
    mailTrash: () => checklistPage('Mail + Trash Notes', ['Check mail','Packages','Trash day','Recycle day','Where bins go','Bring bins back','Newspaper','Notes']),
    meds: () => listTablePage('Medication Notes', ['Who / pet','Medicine','Dose','Time','Notes'], 14),
    return: () => checklistPage('Before We Return', ['Refill water','Final walk / check','Dishes','Trash','Thermostat','Keys','Send update','Thank you'])
  }
};

function overviewPage(title, subtitle, metrics, boxes) {
  return `<article class="page specialty-page overview-specialty">${pageHeader(title, subtitle, 'Overview')}
    <div class="metric-row">${metrics.map(m => miniMetric(m)).join('')}</div>
    <div class="content-grid two-col specialty-box-grid">${boxes.map(b => linedBox(b, 6)).join('')}</div>${footer()}</article>`;
}

function listTablePage(title, headers, rowCount = 14) {
  return `<article class="page specialty-page table-specialty">${pageHeader(title, 'Printable worksheet', 'Tracker')}
    ${table(headers, Array.from({ length: rowCount }, () => headers.map(() => '')), 'specialty-table')}${footer()}</article>`;
}

function contactTablePage(title, headers, rowCount = 12) {
  return `<article class="page specialty-page contact-specialty">${pageHeader(title, 'Keep names, numbers, deposits, and notes organized', 'Contacts')}
    ${table(headers, Array.from({ length: rowCount }, () => headers.map(() => '')), 'specialty-table contact-table')}${footer()}</article>`;
}

function scheduleTablePage(title, headers, rowCount = 12) {
  return `<article class="page specialty-page schedule-specialty">${pageHeader(title, 'Plan the timing and next steps', 'Schedule')}
    ${table(headers, Array.from({ length: rowCount }, () => headers.map(() => '')), 'specialty-table schedule-table')}${footer()}</article>`;
}

function budgetWorksheet(title, categories) {
  return `<article class="page specialty-page budget-specialty">${pageHeader(title, 'Plan costs and track actual spending', 'Budget')}
    <div class="money-summary-row">${moneyBox('Planned total')}${moneyBox('Actual total')}${moneyBox('Difference')}</div>
    ${table(['Category','Planned','Actual','Paid?','Notes'], categories.map(c => [c,'','','','']), 'specialty-table budget-worksheet-table')}${footer()}</article>`;
}

function timelinePage(title, phases) {
  return `<article class="page specialty-page timeline-specialty">${pageHeader(title, 'Break the plan into manageable stages', 'Timeline')}
    <div class="timeline-list">${phases.map(p => `<div><strong>${p}</strong>${taskRows(3)}</div>`).join('')}</div>${footer()}</article>`;
}

function checklistPage(title, items) {
  return `<article class="page specialty-page checklist-specialty">${pageHeader(title, 'Check off each step as you go', 'Checklist')}
    <div class="big-checklist">${items.map(item => `<div><span class="check-square"></span><strong>${item}</strong><span></span></div>`).join('')}</div>
    ${linedBox('Extra notes', 5, 'wide-note')}${footer()}</article>`;
}

function categoryGridPage(title, categories) {
  return `<article class="page specialty-page category-specialty">${pageHeader(title, 'Organized into practical categories', 'List')}
    <div class="category-grid">${categories.map(c => linedBox(c, 8)).join('')}</div>${footer()}</article>`;
}

function gridWorksheet(title, boxes, lines = 6) {
  return `<article class="page specialty-page grid-specialty">${pageHeader(title, 'Use each section for notes, ideas, and decisions', 'Worksheet')}
    <div class="content-grid two-col specialty-box-grid">${boxes.map(b => linedBox(b, lines)).join('')}</div>${footer()}</article>`;
}

function journalPromptPage(title, prompts) {
  return `<article class="page specialty-page journal-specialty">${pageHeader(title, 'Guided writing page', 'Journal')}
    <div class="journal-prompt-grid">${prompts.map(p => linedBox(p, 7)).join('')}</div>${footer()}</article>`;
}

function projectPlannerPage(title) {
  return `<article class="page specialty-page project-specialty">${pageHeader(title, 'Plan one project from idea to finish', 'Project')}
    <div class="project-top">${linedBox('Project name / goal', 3)}${linedBox('Deadline / launch date', 3)}</div>
    <div class="project-middle">${linedBox('Action steps', 8)}${linedBox('Materials / resources', 8)}</div>
    <div class="project-bottom">${linedBox('Notes / next decisions', 5)}</div>${footer()}</article>`;
}

function recipeCardPage(title) {
  return `<article class="page specialty-page recipe-card-page">${pageHeader(title, 'Save one recipe clearly', 'Recipe')}
    <div class="recipe-card-layout">
      ${linedBox('Recipe name', 2)}
      ${linedBox('Ingredients', 10)}
      ${linedBox('Directions', 10)}
      ${linedBox('Notes / changes', 5)}
    </div>${footer()}</article>`;
}

function makeSpecialtyPage(type, section) {
  const group = specialtySections[type];
  if (!group || !group[section]) return '';
  return group[section]();
}

function updatePrintPageSize(pageSize) {
  const sizes = {
    letter: { css: '8.5in 11in', label: 'US Letter' },
    a4: { css: '8.27in 11.69in', label: 'A4' },
    a5: { css: '5.83in 8.27in', label: 'A5' }
  };
  const selected = sizes[pageSize] || sizes.letter;
  let style = document.getElementById('dynamicPrintPageSize');
  if (!style) {
    style = document.createElement('style');
    style.id = 'dynamicPrintPageSize';
    document.head.appendChild(style);
  }
  style.textContent = `@page { size: ${selected.css}; margin: 0; }`;
  document.documentElement.dataset.printSize = selected.label;
}

function getSelectedSections() {
  return Array.from(document.querySelectorAll('#sectionsList input[type="checkbox"]')).filter(cb => cb.checked).map(cb => cb.value);
}

function getState() {
  const type = $('plannerType').value;
  const config = plannerConfig[type];
  const selectedDate = $('startDate').value ? new Date(`${$('startDate').value}T00:00:00`) : new Date();
  return {
    type, config,
    title: $('journalTitle').value.trim() || config.title,
    owner: $('ownerName').value.trim() || 'Me',
    startDate: selectedDate,
    duration: Number($('durationCount').value),
    unit: config.duration,
    theme: $('themeStyle').value,
    coverStyle: $('coverStyle') ? $('coverStyle').value : 'softShapes',
    coverSubtitle: $('coverSubtitle') ? $('coverSubtitle').value.trim() : '',
    coverNote: $('coverNote') ? $('coverNote').value.trim() : '',
    useCustomColors: $('useCustomColors') ? $('useCustomColors').checked : false,
    customAccent: $('customAccent') ? $('customAccent').value : '',
    customLine: $('customLine') ? $('customLine').value : '',
    pageSize: $('pageSize').value,
    sections: getSelectedSections()
  };
}

function renderSections() {
  const config = plannerConfig[$('plannerType').value];
  $('sectionsList').innerHTML = config.sections.map(([id, label]) => `<label class="check-row"><input type="checkbox" value="${id}" checked /> ${label}</label>`).join('');
  document.querySelectorAll('#sectionsList input').forEach(input => input.addEventListener('change', renderJournal));
}

function updateDefaultsForType() {
  const config = plannerConfig[$('plannerType').value];
  $('journalTitle').value = config.title;
  $('previewTitle').textContent = config.label;
  updateCategoryHint($('plannerType').value);
  const duration = $('durationCount');
  if (config.duration === 'set') {
    duration.innerHTML = '<option value="1" selected>1 printable set</option>';
  } else {
    duration.innerHTML = config.duration === 'months'
      ? '<option value="1">1 month</option><option value="3" selected>3 months</option><option value="6">6 months</option><option value="12">12 months</option>'
      : '<option value="1">1 week</option><option value="4" selected>4 weeks</option><option value="8">8 weeks</option><option value="12">12 weeks</option>';
  }
  renderSections();
  renderJournal();
  renderTemplateGallery();
}

function renderJournal() {
  const state = getState();
  const preview = $('journalPreview');
  $('previewTitle').textContent = state.config.label;
  updateCategoryHint(state.type);
  preview.className = `journal-preview theme-${state.theme} cover-style-${state.coverStyle} ${state.pageSize}-size`;
  if (state.useCustomColors) {
    preview.style.setProperty('--journal-accent', state.customAccent);
    preview.style.setProperty('--journal-line', state.customLine);
    preview.style.setProperty('--journal-soft2', hexToSoft(state.customAccent, 0.16));
    preview.style.setProperty('--journal-soft', hexToSoft(state.customAccent, 0.10));
  } else {
    preview.removeAttribute('style');
  }
  updatePrintPageSize(state.pageSize);

  let pages = makeCover(state);
  const sections = state.sections.length ? state.sections : state.config.sections.map(([id]) => id);

  if (state.type === 'fitness') {
    if (sections.includes('goals')) pages += makeFitnessPage('goals', state);
    if (sections.includes('measurements')) pages += makeFitnessPage('measurements', state);
    for (let week = 1; week <= state.duration; week++) sections.forEach(sec => { if (!['goals','measurements','reflection'].includes(sec)) pages += makeFitnessPage(sec, state, week); });
    if (sections.includes('reflection')) pages += makeFitnessPage('reflection', state);
  } else if (state.type === 'daily') {
    for (let week = 1; week <= state.duration; week++) sections.forEach(sec => { pages += makeDailyPlannerPage(sec, state, week); });
  } else if (state.type === 'reading') {
    sections.forEach(sec => { pages += makeReadingPage(sec, state); });
  } else if (state.type === 'chore') {
    for (let week = 1; week <= state.duration; week++) sections.forEach(sec => { pages += makeChorePage(sec, state, week); });
  } else if (state.type === 'meal') {
    for (let week = 1; week <= state.duration; week++) sections.forEach(sec => { pages += makeMealPage(sec, state, week); });
  } else if (state.type === 'budget') {
    for (let month = 1; month <= state.duration; month++) sections.forEach(sec => { pages += makeBudgetPage(sec, state, month); });
  } else if (state.type === 'pet') {
    if (sections.includes('profile')) pages += makePetPage('profile', state);
    for (let week = 1; week <= state.duration; week++) sections.forEach(sec => { if (sec !== 'profile' && sec !== 'appointments') pages += makePetPage(sec, state, week); });
    if (sections.includes('appointments')) pages += makePetPage('appointments', state);
  } else if (state.type === 'baby') {
    for (let week = 1; week <= state.duration; week++) sections.forEach(sec => { pages += makeBabyPage(sec, state, week); });
  } else if (specialtySections[state.type]) {
    sections.forEach(sec => { pages += makeSpecialtyPage(state.type, sec); });
  }

  preview.innerHTML = pages;
}

function setSampleText() {
  const type = $('plannerType').value;
  const samples = {
    fitness: ['My 8-Week Fitness Journey', 'Tricia'], daily: ['My Calm Weekly Planner', 'Tricia'], reading: ['Tyler’s Reading Adventure', 'Tyler'],
    chore: ['Tyler’s Chore & Reward Chart', 'Tyler'], meal: ['Family Meal Planner', 'The Ding Family'], budget: ['Monthly Budget Planner', 'Tricia'],
    pet: ['Cogi’s Pet Care Tracker', 'Cogi'], baby: ['Baby Daily Tracker', 'Baby'],
    wedding: ['Our Wedding Planner', 'Tricia'], party: ['Birthday Party Planner', 'Tricia'], travel: ['Family Travel Planner', 'The Ding Family'],
    moving: ['Our Moving Planner', 'Tricia'], home: ['Home Management Binder', 'Tricia'], student: ['My Student Planner', 'Tyler'],
    teacher: ['My Teacher Planner', 'Tricia'], etsy: ['My Etsy Seller Planner', 'Tricia'], social: ['My Social Media Planner', 'Tricia'],
    selfcare: ['My Self-Care Journal', 'Tricia'], garden: ['My Garden Planner', 'Tricia'], recipe: ['Family Recipe Binder', 'Tricia'],
    goal: ['My Goal Planner', 'Tricia'],
    pregnancy: ['My Pregnancy Planner', 'Tricia'],
    newbornMemory: ['Baby\'s First Year Journal', 'Tricia'],
    medicalBinder: ['Medical & Health Binder', 'Tricia'],
    adhdFocus: ['ADHD Focus Planner', 'Tricia'],
    cleaningDeclutter: ['Cleaning & Decluttering Planner', 'Tricia'],
    holiday: ['Holiday Planner', 'Tricia'],
    christmas: ['Christmas Planner', 'Tricia'],
    birthday: ['Birthday Planner', 'Tricia'],
    graduation: ['Graduation Planner', 'Tricia'],
    digitalLife: ['Password & Digital Life Organizer', 'Tricia'],
    kdp: ['KDP Planner', 'Tricia'],
    shopifyWebsite: ['Shopify / Website Planner', 'Tricia'],
    contentRepurpose: ['Content Repurposing Planner', 'Tricia'],
    productLaunch: ['Product Launch Planner', 'Tricia'],
    homeschool: ['Homeschool Planner', 'Tricia'],
    kidsReadingChallenge: ['Kids Reading Challenge', 'Tricia'],
    kidsSummer: ['Kids Summer Planner', 'Tricia'],
    practiceTracker: ['Practice Tracker', 'Tricia'],
    bookClub: ['Book Club Planner', 'Tricia'],
    craftProject: ['Craft Project Planner', 'Tricia'],
    sewingCrochet: ['Sewing / Crochet Planner', 'Tricia'],
    photography: ['Photography Planner', 'Tricia'],
    memoryKeeping: ['Memory Keeping Journal', 'Tricia'],
    checklistLibrary: ['Everyday Checklist Library', 'Tricia'],
    householdChecklistPack: ['Home Checklist Pack', 'Tricia'],
    lifeAdminLog: ['Life Admin Logbook', 'Tricia'],
    wellnessLogbook: ['Wellness Logs & Checklists', 'Tricia'],
    familyRoutinePack: ['Family Routine Checklist Pack', 'Tricia'],
    foodInventoryLog: ['Food Inventory Logbook', 'Tricia'],
    moneyLogbook: ['Money Logs & Checklists', 'Tricia'],
    schoolLogbook: ['School Logs & Checklists', 'Tricia'],
    businessLogbook: ['Small Business Logs', 'Tricia'],
    eventChecklistPack: ['Event Checklist Pack', 'Tricia'],
    travelPackingLog: ['Travel + Packing Logs', 'Tricia'],
    sitterChecklist: ['Pet / Home Sitter Checklist', 'Tricia']
  };
  $('journalTitle').value = samples[type][0];
  $('ownerName').value = samples[type][1];
  if ($('coverSubtitle')) $('coverSubtitle').value = plannerConfig[type].label;
  if ($('coverNote')) {
    const category = plannerCategories[type] ? plannerCategories[type][0] : 'Printable Planner';
    $('coverNote').value = `${category} • Personalized for ${samples[type][1]}`;
  }
  renderJournal();
  renderTemplateGallery();
}

function init() {
  $('startDate').value = new Date().toISOString().slice(0, 10);
  window.activePlannerCategory = 'All';
  renderSections();
  renderTemplateGallery();
  ['journalTitle','ownerName','startDate','durationCount','themeStyle','coverStyle','coverSubtitle','coverNote','customAccent','customLine','useCustomColors','pageSize'].forEach(id => {
    if (!$(id)) return;
    $(id).addEventListener('input', renderJournal);
    $(id).addEventListener('change', renderJournal);
  });
  if ($('plannerSearch')) {
    $('plannerSearch').addEventListener('input', renderTemplateGallery);
  }
  $('plannerType').addEventListener('change', updateDefaultsForType);
  $('refreshBtn').addEventListener('click', () => { renderJournal(); renderTemplateGallery(); });
  $('sampleBtn').addEventListener('click', setSampleText);
  $('selectAllBtn').addEventListener('click', () => { document.querySelectorAll('#sectionsList input').forEach(cb => cb.checked = true); renderJournal(); });
  $('printBtn').addEventListener('click', () => { updatePrintPageSize($('pageSize').value); window.print(); });
  renderJournal();
  renderTemplateGallery();
}

document.addEventListener('DOMContentLoaded', init);
