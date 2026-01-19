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
