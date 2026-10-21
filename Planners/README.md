# Personalized Printable Planner Studio

A static website that generates printable planners, journals, logs, and trackers on the fly.

## Included generators

- Fitness Tracker
- Daily / Weekly Planner
- Reading Log
- Kids Chore & Reward Chart
- Meal Planner + Grocery List
- Budget Planner
- Pet Care Tracker
- Baby Feeding & Sleep Tracker
- Wedding Planner
- Party Planner
- Travel Planner
- Moving Planner
- Home Management Binder
- Student Planner
- Teacher Planner
- Etsy Seller Planner
- Social Media Planner
- Self-Care Journal
- Garden Planner
- Recipe Binder
- Goal Planner

## How to use

1. Open `index.html` in a browser.
2. Choose a planner type.
3. Customize the title, owner/name, date, length, theme, page size, and sections.
4. Review the live preview.
5. Click **Download / Print PDF** and choose **Save as PDF** in the browser print window.

## Notes

This version is fully static: no database, no login, and no backend required.


Update notes:
- Added A5 paper size.
- Preview pages now use the full selected page dimensions with tighter printable margins.
- Print/PDF export now injects the selected paper size into @page automatically before opening the browser print dialog.


Major redesign update:
- Reworked the template system so planner types no longer feel like repeated copies.
- Added more useful worksheet-style pages for budget, reading, meal planning, daily planning, chore charts, pets, baby tracking, and fitness.
- Increased space between headings and the first writing line.
- Reduced wasted blank space at the bottom of many writing boxes.
- Added dashboard cards, checklist blocks, money summary boxes, reading challenge grids, grocery category blocks, routine cards, and savings grids.


v5 practical layout fix:
- Writing lines now distribute through the usable writing area instead of clustering at the top.
- Added actual task rows for priority boards.
- Rebuilt the weekly fitness page with a useful weekly schedule table and goal strip.
- Reduced blank bottom space on large worksheet pages.
- Added stronger A5-specific layout rules.


v6 expanded planner library:
- Added Wedding Planner with budget, guest list, vendors, RSVP, seating, photo shot list, gift tracker, and day-of timeline.
- Added Party, Travel, Moving, Home Management, Student, Teacher, Etsy Seller, Social Media, Self-Care, Garden, Recipe Binder, and Goal Planner generators.
- Added new worksheet templates: checklist pages, category grids, timeline pages, budget worksheets, contact tables, project planners, journal prompts, and recipe cards.


v7 category upgrade:
- Organized the long planner dropdown into clear categories:
  Health & Wellness, Everyday Planning, Life Events, Home & Family, School & Learning, Business & Content, and Creative & Hobbies.
- Added a small category hint under the planner type selector so users understand what each planner is for.


v8 sidebar fix:
- Fixed the left control panel so it scrolls independently when the options are taller than the browser window.
- Prevented the “Included planner types” card from being cut off at the bottom of the screen.


v9 cover + personalization upgrade:
- Added cover style selector: Soft Shapes, Minimal Frame, Corner Florals, Bold Block, Doodle Stars, and Classic Monogram.
- Added cover subtitle and cover note fields.
- Added more theme palettes: Soft Lavender, Sage Garden, Blush Rose, Calm Sky, Warm Sunset, and Classic Ink.
- Added custom accent color and line color controls.
- Updated the cover page so it responds to planner type, owner name, style, subtitle, note, and color choices.


v10 cover cleanup:
- Removed the decorative cover circles/shapes from the generated cover.
- Removed the cover subtitle pill (for example “FITNESS TRACKER”).
- Removed the cover note text box (for example “Plan it. Track it. Make it yours.”).
- Removed the center icon / badge from the cover.
- Simplified the cover to just the title, owner, and date range.


v11 cleanup:
- Removed the "Included planner types" section from the left sidebar to keep the control panel cleaner and more focused.


v12 expanded library upgrade:
- Added all 23 requested planner/journal/tracker types:
  - Pregnancy Planner / Journal
  - Newborn / First Year Memory Journal
  - Medical / Health Binder
  - ADHD / Focus Planner
  - Cleaning / Decluttering Planner
  - Holiday Planner
  - Christmas Planner
  - Birthday Planner
  - Graduation Planner
  - Password / Digital Life Organizer
  - KDP Planner
  - Shopify / Website Planner
  - Content Repurposing Planner
  - Product Launch Planner
  - Homeschool Planner
  - Kids Reading Challenge
  - Kids Summer Planner
  - Practice Tracker
  - Book Club Planner
  - Craft Project Planner
  - Sewing / Crochet Planner
  - Photography Planner
  - Memory Keeping Journal
- Added these new planners into the categorized dropdown, section checklist, sample text, preview generator, and PDF/print workflow.


v13 template gallery upgrade:
- Replaced the long planner dropdown UI with a polished template gallery.
- Added category tabs for All, Health & Wellness, Everyday Planning, Life Events, Home & Family, School & Learning, Business & Content, and Creative & Hobbies.
- Added planner template cards with icon, category badge, description, duration/section count, and selected state.
- Added planner search so users can quickly find planners, journals, and trackers.
- Kept the existing generator workflow connected to the selected template.


v14 logs + checklist library upgrade:
- Added a new gallery category: Logs & Checklists.
- Added 12 quick-print log/checklist template packs inside Planner Studio instead of creating a separate website section:
  - Everyday Checklist Library
  - Home Checklist Pack
  - Life Admin Logbook
  - Wellness Logs & Checklists
  - Family Routine Checklist Pack
  - Food Inventory Logbook
  - Money Logs & Checklists
  - School Logs & Checklists
  - Small Business Logs
  - Event Checklist Pack
  - Travel + Packing Logs
  - Pet / Home Sitter Checklist
- Polished the template gallery with category counts, better card spacing, category badges, section preview chips, improved selected state, and a stronger Logs & Checklists visual treatment.
- Added support for “printable set” templates so quick checklist/log packs do not pretend to be weekly/monthly planners.


v15 sidebar polish:
- Added a Main Page link in the top header that points to https://justpages.studio/.
- Updated Planner Studio's left panel to use collapsible sections like Sheet Studio.
- Split the sidebar into Choose printable, Personalize, and Sections.
- Moved cover/color controls into a smaller advanced options dropdown.
- Updated cache-busting links to style.css?v=15 and app.js?v=15.


## v16 footer wording update

- Updated generated page footer wording to: `Generated with Just Pages Studio`.
- Updated cache-busting links to `style.css?v=16` and `app.js?v=16`.


## v17 exact footer fix

- Verified and corrected the generated page footer function.
- Footer now says exactly: `Generated with Just Pages Studio`.
- Updated cache-busting links to `style.css?v=17` and `app.js?v=17`.
