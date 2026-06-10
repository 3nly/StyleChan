### v1.6.3
*2026-06-10*

- Adjust a CSS rule causing the QR textarea to lag when expanding

### v1.6.2
*2026-06-07*

Try the new online Stylechan theme creator: https://3nly.github.io/StyleChan/

- Revert a change that caused (You)s to not work on 4chanX and XT if they weren't enabled for vanilla 4chan

### v1.6.1
*2026-06-06*

- Fix an issue with (you) highlights when using 4chanX and XT
- Improve how Custom CSS is added so it doesn't break with certain symbols

## v1.6.0
*2026-06-03*

- New option: Use StyleChan Icons
- Updated old themes in the Wiki to work with the new StyleChan
- Removed text shadow on 4chanX notifications when styled
- XT watch icon will no longer be off-center on Firefox
- Fix an issue where names were doubling when using 4chanX's Anonymize option

### v1.5.5
*2026-06-02*

- Fix a stupid mistake where I hid the Cloudflare iframe in the captcha
- Catalog Links: Fix an issue with Catalog Links triggering with 4chanX enabled
- Custom Themes and saved 4chan settings will now be included in script's backup JSON file

### v1.5.4
*2026-06-02*

- Auto-Convert Images: will now also resize images if above the dimension limits as in feature request #30 (@Pentaphon @saxamaphone69)
- Rounded Corners: will now also apply to userscript menus and buttons
- **Add/Create Theme:** refactored the dialog
  - Now shows a clickable dummy post
  - Now shows on the side of the screen
  - Added ⇆ toggle to switch sides
  - Scroll up or down to see all the rules
- Minor code cleanup and CSS adjustments

### v1.5.3
*2026-06-01*

- Fix an issue with Save and Cancel buttons not working in the Themes tab

### v1.5.2
*2026-05-31*

- Further options menu improvements and size responsiveness
- Board title now correctly gets the custom font and font-weight applied

### 4chan:
 - Further theming improvements
 - Navigation bar, board title, pinned threads, post preview, catalog TW, now styled appropriately

### v1.5.1
*2026-05-30*

- Adjusted the script's defaults
- Autohide Style: Add a *Disabled* option to Autohide Style in feature request #29 (@john32b)
- Single View Captcha: Fix a small issue where the captcha description jumped up when requesting a new captcha after expiration
- Fix minor position issues with the Announcement and Board Name on XT forks

### 4chan:
- Remember Comment Draft: Will now work for the Quick Reply
- Quick Reply: Add maxlength feature to Name and Comment fields
- Fit Post Menu: Fix position of post menu button when using the option
- Show Reply Form: Fix a display bug with the option in the menu

## v1.5.0
*2026-05-29*

*We're stable naow!*

### 4chan X / XT
- Style 4chanX Notifications: removed the **X** button, toasts can now be dismissed by click, same as Stylechan's toasts
- **New option:** Show Original Form

### 4chan
- **New option:** Follow Cursor
  - Allows hover images to follow the cursor
- Announcement icon:
  - Will now be part of navigation links, clicking the icon will toggle the 4chan global message
- Catalog Links: will now work for board dropdown list
- Restore 4chan settings button: the page will now reload automatically after 2 seconds

### Other Changes
- Remember Draft Comment: improve the option, will also try to use GM storage and fallback to localStorage if not available
- Style Scrollbars: Improve the color choice
- Adjust and fix a few issues with the Add Theme dialog
- Changed a few option descriptions
- Small CSS fixes and adjustments here and there

### v1.4.4
*2026-05-29*

*Thank you for your patience and using Stylechan!*

**4chan XT**: Fix an issue where the XT script wasn't being correctly targeted, causing all native 4chan options to trigger and some of the CSS rules to fail
- Rework the Add Theme dialog in issue #27
- Scrollbars will now correctly be colored when live editing a theme
- StyleChan links and version will no longer be targeted by the *UI Font Size* option
- Fix an error when saving a custom theme that prevented the use of the Close button

### v1.4.3
*2026-05-29*

- Force update
- Same changes as 1.4.2

### v1.4.2
*2026-05-29*

- Fix the script not correctly targeting XT
- Fix for the theme edit dialog being broken in issue #27
- 4chan: Fix for OP highlighting not working
- 4chan: Fix for Toggle You missing from OP post
- Update userscript defaults

### v1.4.1
*2026-05-28*

- Remove `:has` selector on backlink icons which was causing slowdowns on entering a thread
- Separate the catalog stats to stay slightly smaller than the UI Font Size (still follows this option)
- Fix a few broken or repeated rules
- Improve GM fallback
- Changelog link will now direct to the releases page

4chan:
- Styled the Spoiler checkbox in QR and post form
- Styled the post form a bit more
- Fix the Thread Watcher border not being styled

## v1.4.0
*2026-05-28*

### Refactor
- Rewrite how font family is handled by @SystemPatch in #24
- Remove a lot of dead or useless code, especially for theme conversion from older userscripts
- StyleChan's menus are now more responsive to size changes

### New Options:
- Font Family
  - This option has been expanded with new font options, the script will now detect the user's OS and show common font options for that system
- Custom Font
  - This option allows users to type the (exact) name of any font from their system to use within the script, writing anything overrides the "Font Family" option
- Style Scrollbars
  - This option will style the scrollbar with the theme's colors

### 4chan

The 4chan inline script is now a first class citizen within StyleChan and every option should work accordingly.

- The global announcement is now styled
  - Will show a small *! bubble* :speech_balloon: on the left to check the announcement on hover
- New option: Relative Post Dates
- The *Vertical Tabbed* quick reply hiding option is now working
- The *Animated Transition* option is now working
- Remove the bottom arrow from header navigation
- Style the post menu when using Fit Width option

### Changes:
- The script will now automatically adapt the menu options to only show 4chanX or 4chan options depending on usage
- QR *Expanding Form Inputs* will only expand on focus now
- Add localStorage fallback for certain userscript managers (@autoclave73 in macOS userscripts extension support #26)
- Rewrite how the fonts are applied (@saxamaphone69 in #24)
- Various script linting improvements and small CSS fixes

## v1.3.0
*2026-05-25*

**The 4chanSS renaissance!**

### Refactor
- Stylechan no longer uses jsColor for color picking
- Elements like checkboxes, selectors and inputs are now styled using CSS
- Coloring and live theming now use global CSS variables
- Despite the many new features added we still lost 200 lines of code over the last version!

### New Options:

Main:
- Single View Captcha > Auto Submit
  - This option will submit the post automatically after the last challenge is picked

Misc:
- Enable Mascots
  - Mascots are back due to popular demand but in *lite form*, this time we won't bother ourselves with rendering them and slowing down everything on every page load
  - Mascots can be added as external URLs or as base64
  
4chan native:
- Watch Thread on Reply
- Highlight Posts Quoting You
- Highlight Own Posts

### Changes:
- The theme editor is now more responsive to resizing
- Caveat with live theming: Older Firefox versions may still use a weird old color picker, not something we can change
- Select inputs now have an arrow
- Add maxlength to Name and Subject fields in feature request #23 (@Pentaphon), will also flash red when hitting the limit
- 4chan: Added a Toggle You option to the post menu
- 4chanX: The You toggle now has its checkbox back
- Improve CSS loading
- Various small code changes and improvements
- **A minified version of the script is now available (StyleChan.min.user.js)**

### v1.2.2
*2026-05-23*

- New option: System theming
- Improve script responsiveness
- 4chan: Fix Mobile button in header not being hidden in catalog
- Remove further dead code
- Small changes and improvements

**PR by @SystemPatch:**
- Single view captcha: Fix unclickable link in PR #22

### v1.2.1
*2026-05-22*

- Catalog selects will no longer be targeted by UI Font Size

**4chan:**
- Normal Autohide style for the native QR is now working
- Fix Catalog Links not applying correctly
- Remove the useless [Mobile] and [Search] links from the header
- Fixes for board banner and board name interactions with the sidebars and catalog
- Hide checkbox in quote previews

## v1.2.0
*2026-05-22*

**StyleChan has a new Misc tab with various new options!**

*Never obsolete*

We continue to improve StyleChan for the changing environment, as 4chan X/XT maintenance gets shaky StyleChan will rely more on the native site script as a backup. Thank you to @SystemPatch for their contributions. 


### New Options:
Main:
- UI Font Size
  - This option will allow users to set a different font size for certain UI elements like dropdown menus, buttons, QR buttons.
  - Adjusted various elements of the QR and menus to allow for higher font sizes without breaking
  - Certain elements (13cdad228fee4abec8eecf112bd0b49d3971d5b2) are limited to 15px and will not go higher, or lower than 13px
- Show Reply to Thread Button > Show Only in Catalog
  - This option is geared towards the 4chan catalog so that it allows creating new threads in the catalog with the posting form
- 4chanX Header options -> moved to Misc tab

Misc:
- Toast Notifications:
  - Style 4chanX Notifications
  - Center Notifications
  - Full Border
    - This option gives the toasts a full border; the border width and style follow the same rules as Decoration Width and Highlight Style options in Post Decoration
- 4chan: Pin Quick Reply
- 4chan: Catalog Links
- 4chan: Save & Restore 4chan settings
  - These two buttons will save or restore various localStorage keys for the native 4chan script

### Changes and Fixes:
- StyleChan will no longer save its options to localStorage but make use of GM storage
- The StyleChan menu button will now appear in the 4chan mobile version of catalog
- Styled the 4chan posting form a bit more
- Posting form now correctly allows for single view captcha, image auto-conversion and comment draft saving
- GIF files will no longer be converted
- The native QR will now better adjust to the sidebar as well as the spoiler option 
- Add an Inset option to Highlight Style
- Fix for sub options in the StyleChan menu not being collapsed without 4chanX
- Fix [code] content rendering outside the viewport in long hover posts
- Refactored some old code and how classes are added to the DOM
- Removed a good amount of unused code
- Various CSS changes and fixes

**PR by @SystemPatch:**
  - Finish styling new Captcha
  - Adjust spacing for inline posts when using bottom backlinks
  - Add support for XT's Scroll Markers
  - Fix issue with overlap in single view captcha


### v1.1.1
*2026-05-18*

- Fix for single view catcha jumping up when requesting a captcha
- Fix for 4chanX menu moving from its usual placement
- **4chan:**
  - Fix for reply button color
  - Fix for Mod capcode color
  - Fix for index navigation buttons
  - Remove the excess width from the File input
  - Fix an issue where certain 4chan stylesheets were being blocked due to a broad rule

## v1.1.0
*2026-05-13*

**StyleChan has new options and features!**

**New option:** Remember comment draft
- This option will save any text left in the comment text area of the QR into the localStorage of the browser after 5 seconds of not typing. The text is restored on every page load until it is submitted or erased. Up to 10 drafts are saved. Cleaning of the drafts happens every time a new draft is saved, drafts older than 24 hours are then removed.

**New option:** Single view captcha
- This option is an adaption of the captcha formatter script, it will show captcha challenges in a single view. Selecting a challenge moves to the next challenge. No keyboard shortcuts.

**New feature:** Notifications
- StyleChan now has its own toast notification system and no longer relies on 4chanX. The notifications have four colors: info, warning, error and success.

Changes and fixes:
- Removed the limits on the font size option
- The StyleChan settings menu now has a background overlay when not using 4chanX and can be correctly dismissed
- Checkboxes will now be correctly riced when not using 4chanX
- Small CSS fixes

Added three new themes to the Wiki: Catppuccin Late, Catppuccin Mocha, W10

### v1.0.39
*2026-05-11*

- Removed rule that was misplacing the reply navigation arrows (top/bottom arrows)

Further improved the script to work without 4chanX:
- Native theme style sheets can now load and apply their rules
- Fix link colors
- Fix backlink icons
- Fix OP post
- Adjusted Quick Reply (note: only the fade option will work, vertical QR is not supported)

### v1.0.38
*2026-05-06*

- Improve the hooking when selecting files through the file picker so StyleChan picks them up before 4chanX

### v1.0.37
*2026-05-06*

- Preliminary support for inline 4chan extension to work without 4chanX present
- Add a new option: Auto-Convert Images, this option will auto-convert any drag&dropped or selected images that are WebP or above the filesize limit to JPEG (variable quality)

### v1.0.36
*2026-01-19*

- Add live theming preview for editing and creating new themes

### v1.0.35
*2025-12-20*

- Some performance improvements with newer, native JS and better caching
- CSP-friendlier custom CSS processing
- Add *More Themes* button to Themes tab

### v1.0.34
*2025-12-18*

- Style changes for the new captcha to match StyleChan theming
- Small border radius fix for QR inputs

### v1.0.33
*2025-02-21*

- Inlined replies will now make a better use of space when Fit Width is enabled

**PR by @SystemPatch:**
- OP is now affected by Margin Between Replies when OP Background is enabled.
- Make the thread unread line more adaptable to when Margin Between Replies is set to None or Overlapping Borders. Unread line will now overlap the post borders instead of pushing apart the posts.
- Finish styling native index nav buttons. Index buttons added to rounded corners option.

Fixes:
- Add .identityIcon.
- Dead backlink becoming uncolored in XT.
- Add width to input transitions. This fixes the search boxes on the index not having the expanding animation.
- Remove the search box IDs from border color styling. This fixes the search boxes not having their focus border.

### v1.0.32
*2025-01-16*

**PR by @SystemPatch:**
- QR: Adjustments for recent XT update

### v1.0.31
*2025-01-08*

- Small fixes for errors in browser console regarding icons and cookie

### v1.0.30
*2025-01-07*

- Add option to show 4chan Pass link
- Style native catalog index buttons
- Disable QR transition by default
- Move 4chan Pass options to Main Rice

**PR by @SystemPatch:**
- Prevent link color from overwriting spoiler
- Native catalog thread margin
- Option title line-height
- Thumb opacity won't affect full inline images
- Report page style
- Several small fixes

### v1.0.29
*2024-12-30*

- Fix for Fit Post Menu applying to the catalog
- Fix for weird interaction from issue #6

### v1.0.28
*2024-12-29*

- New option: Invert Spoiler (under Main Rice) (#7)
- New option: Fit Post Menu (only available when Fit Width is enabled) (#8)
- Fix for post menu slightly moving position when menu is opened
- Fix for certain board titles being cut off when Minimal Sidebar is enabled
- Fix for Vertical Tab QR breaking when Sidebar is disabled (#10)
- Potential fixes to flashing of unstyled content when loading a 4chan page (#6)

**PR by @SystemPatch:**
- Party hats will stick to OP now.


### v1.0.27
*2024-12-14*

- Add option for QR transition

**PR by @SystemPatch:**
- Set file type for theme import
- Add field class to CustomCSS textarea
- Adjust textbox color transitions
- Prevent inline posts from getting recolored
- Fix padding around inline reply header
- Add some padding-top for board title
- Extend edge of SS-like sidebar into header
- Add banner into rounded corners
- Clarify description for expanded images option
- Fix large unified thumbnails for native catalog
- Get QR transitions working again 

### v1.0.26
*2024-12-04*

- Use a different icon for 4chan XT
- StyleChan will no longer apply CSS to 404 page

### v1.0.25
*2024-12-03*

- Remove 4channel from meta
- Margins will no longer apply to the report window

### v1.0.24
*2024-11-29*

- StyleChan's options menu should now be more adaptive to the viewport
- Increase visibility of options tabs

**PR by @SystemPatch:**
For cases where reply opacity is used, usually with a BG image:
- 4Chan X/XT and Stylechan options will not use opacity for readability
- Recolor even replies will use the opacity value, and not overwrite the post highlight when linked to.
- Flash/Expired table will use recolored rows always, to prevent transparent rows
- (per previous commit) Have table background disable when post is highlighted

### v1.0.23
*2024-11-29*

- Rewrite of Quick Reply and Sidebar CSS
- Changed defaults for a few options
- Fix for theme custom CSS not working
- Made StyleChan's options menu a bit more responsive for smaller screens
- Made 4chan X/XT's header bar more responsive for boardlist and settings icons
- Fix for Unified Thumbnail Size in the catalog not working with large thumbnails
- Fixes for /f/ - Flash board: 
  - Embeds will no longer be hidden behind other elements
  - Catalog and OP posts visual changes
- Various small fixes

### v1.0.22
*2024-11-28*

- More browser-specific fixes for QR (sorry)

### v1.0.21
*2024-11-28*

- Browser-specific fixes for QR

### v1.0.20
*2024-11-28*

- New option: Backlink shadow
- New option: SS-like sidebar
- Fixes for StyleChan icon when using 4chan XT
- Fixes for banners and board titles
- Fix for justified text in catalog
- Small QR fixes
- Adjusted defaults
- Various small fixes
- Removed: Backlinks on Bottom option (broken for OP posts)
- Removed: ExLinks support (deprecated?)

**PR by @SystemPatch:**

- Fix issues in ad removal code in script
- Danbo ads are now fully accounted for and adjusted
- [Advertise on 4chan] banner can be toggled independently
- Updated settings

### v1.0.19
*2024-11-26*

- Add basic 4chan XT support
- Add new theme: Blue Phallus

### v1.0.18
*2024-11-26*

- Fix inline posts not rendering correctly
- Prevent QR textarea from getting scrollbars (this time for realz)

### v1.0.17
*2024-11-26*

- Add padding to top navigation links
- Various small fixes for QR
- Prevent QR textarea from getting scrollbars


### v1.0.16
*2024-11-26*

- Fix inline OP posts getting cut off when window size is reduced
- Fix inline OP posts margin

### v1.0.15
*2024-11-15*

- New feature: Show 4chan Pass Users
- New feature: Fit expanded images to post size
- Fix for Navigation Links
- Fix for 4chan ads not showing/hiding correctly
- Various small CSS fixes
- Removed: Compatibility fixes with loadletter 4chan X (deprecated)

### v1.0.14
*2016-12-01*

- Add title attributes to checkboxes
- Give native catalog thread backgrounds equal height regardless of content size
- Change margins on native catalog to show 6 threads per row

**ccd0:**

-  Rice reverse sort checkbox. (4chanX #97)

### v1.0.13
*2016-10-31*

- Fix body margins

### v1.0.12
*2016-10-23*

- Fix board banner showing outside sidebar (#96)

### v1.0.11
*2016-10-22*

- Fix Left Minimal Sidebar being broken
- Small native catalog fixes
- Show 4chan Pass link when enabled in 4chan X
- Don't hide Banner when Minimal Sidebar is enabled
- Add additional CSS rule to Stilig theme for OP background
- Change Blue Tone theme background

### v1.0.10
*2016-10-03*

- Add CSS for since4pass
- Fix Update and Reply to Thread not being underlined when Underline All Links was enabled


### v1.0.9
*2016-10-02*

- Fix bug introduced in last version with (You) posts not being highlighted

### v1.0.8
*2016-10-02*

YOU MIGHT NEED TO RESET ONEECHAN OPTIONS FOR THINGS TO WORK PROPERLY

- CSS for 4chan Pass signature
- Add options `Highlight (OP) quotes` and `Highlight (You) quotes`
- Rename `Highlight` options

### v1.0.7
*2016-10-01*

- Updates for new 4chan X catalog
- Add option `Show Board Banners`
- Changes to native catalog for backgrounds and margins
- Some page 404 touch-ups

### v1.0.6
*2016-09-22*

- Small bugfixes

### v1.0.5
*2016-09-21*

- Fix for 4chan X catalog (#85)

### v1.0.4
*2016-09-20*

- Update remaining classes (#85)
- Style Tegaki links and native catalog post previews
- Small CSS fixes

### v1.0.3
*2016-09-17*

- Style embed window on /f/
- Update class thread-view -> is_thread (#85)
- Small CSS fixes

### v1.0.2
*2016-07-08*

- Update user-agent classes for 4chan X v1.12.0.0+

## v1.0.1
*2016-05-19*

- Fix banner border showing up while loading
- Remove unused stuff from OneeChan
- Remove 4chan Dark Upgrade theme

### v1.0
*2016-05-19*

Stylechan release.
