// ==UserScript==
// @name         StyleChan
// @version      1.10
// @namespace    StyleChan
// @description  Customizable themes and options for 4chan X.
// @minGMVer     1.14
// @minFFVer     26
// @license      MIT
// @include      http://boards.4chan.org/*
// @include      https://boards.4chan.org/*
// @include      http://sys.4chan.org/*
// @include      https://sys.4chan.org/*
// @include      http://boards.4channel.org/*
// @include      https://boards.4channel.org/*
// @include      http://sys.4channel.org/*
// @include      https://sys.4channel.org/*
// @exclude      http://www.4channel.org/*
// @exclude      https://www.4channel.org/*
// @exclude      http://www.4chan.org/pass
// @exclude      https://www.4chan.org/pass
// @exclude      http://www.4chan.org/pass?*
// @exclude      https://www.4chan.org/pass?*
// @exclude      http://www.4chan.org/advertise
// @exclude      https://www.4chan.org/advertise
// @exclude      http://www.4chan.org/advertise?*
// @exclude      https://www.4chan.org/advertise?*
// @exclude      http://www.4chan.org/donate
// @exclude      https://www.4chan.org/donate
// @exclude      http://www.4chan.org/donate?*
// @exclude      https://www.4chan.org/donate?*
// @exclude      http://www.4channel.org/pass
// @exclude      https://www.4channel.org/pass
// @exclude      http://www.4channel.org/pass?*
// @exclude      https://www.4channel.org/pass?*
// @exclude      http://www.4channel.org/advertise
// @exclude      https://www.4channel.org/advertise
// @exclude      http://www.4channel.org/advertise?*
// @exclude      https://www.4channel.org/advertise?*
// @exclude      http://www.4channel.org/donate
// @exclude      https://www.4channel.org/donate
// @exclude      http://www.4channel.org/donate?*
// @exclude      https://www.4channel.org/donate?*
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_listValues
// @grant        GM_openInTab
// @grant        GM.getValue
// @grant        GM.setValue
// @grant        GM.deleteValue
// @grant        GM.listValues
// @grant        GM.openInTab
// @run-at       document-start
// @updateURL    https://gist.github.com/3nly/15b01b589a2644285c33203d4b4fafcc/raw/StyleChan.user.js
// @downloadURL  https://gist.github.com/3nly/15b01b589a2644285c33203d4b4fafcc/raw/StyleChan.user.js
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAOwgAADsIBFShKgAAACSJJREFUaN7tmWuMVdUVx39r73PPvXeYFzPDS3k0+KrYiDE1JrZWRUx1aouOr2gqbRSpj1RBEG2JhBJbNR1UfBQr1NZIaxvrOMQI2KZNW6tFJVqpxLYCFirDw2Fg5s7MfZyz9+qHO0MdAZl7B/CL/087Oees9f+vvffaa68Dn+HThQzl42kvfrVoRKQSpAGoAPJAO0oXggoWJQ5BRgD1fT47QHeqMQWJHa0Xv3T0BVyy6kJUGYbINIHpwIkfEbAV+BXoswonCnIjcAZQ1+dzL7AWdInCmwLa2rjm6Am4ZNVFgNaC3AtcCww7wGtZYD0wHhhzEFMbgdvSZtKqrN9AOSJMWZFHLcgdwPUHIQ+QBs78BPIAxwP3Z/2GE8pdDCULAEGQ44CrgURZXgdiEsjXrVqmrbrwyAq4cuVl/cPT+OTIlsrhXCdxhZQxCyUJSIwK+ofVQFDKt4dANUhZ9koSUDEp1T/cBPQeRgFbEHJHXMCy6qf6hxuA9w4T+Qh4CaVwxAUAKErap3cBjwM9h0HAW8CfAVobVx95ASsb15A1vSj6DPAbwA+B/G7gHgzbyjWw38bZmV6MeBUNpVKcVqmVSGLNxEnJGaeMzswl0piEJHqAhcAE4PwyfOeA+xRdI559h5ht2UFAPhGTahB8WjFOkY6ATMYTEjeNG2BkX97aXtNMshNcgpHimY7yDWAEUBDlAzW0+oDnX14Rtp81M+KmFb8HI6B8AXiSYqkwWETAQ6CLQLpbG1cjLe0ARtDJirkFzFmgw0AcsFmIHzHEqxQbuaaRAwW01TUTdoIPmWjyPCqeCw4wO3k1vK4JFkRV/MXm8DOf/QPiFUS+CCwHJg+S/FJFFwjS2U/eEKU84bcVcxfIePY7mrVD8IsM8U8UG/mmBqBvDwS94ENqTJ7F4rmIA+f4pHjONgVWJDq5TmKSy6cVV06+qn4d8B3g74cgnweWKLoA6HwldxumZTeWqMYTLlTMj0EmcMC6QuoUu8ATnO9JYFt2FgW01S3G5kAcU0SZesj4KceamAdMzByXkvQTV0wlzLQz3k1+DbgBWHeQL3uA+4BFgnS+lruDds7AEI1wJB9W7GyQykN4rwP5bkBPtfTlDmPzSvYYMeL4GsqhDPSLqBLHfJvTeS4l6SeuuoAt9m2M03XADODVj32xF7gb9H7QzCu5eezkNAyuwRE+oJhrgHBQvpHTFTNW+xKoMQVItmsonrGDM7BPRIWJuDPI6DxF08suO5/YCkZ4W4si/tj35i5gtqKPgWTX5B6jnVMRtM4TLFbM1ZRWlgwT/HDQogCfBJdGVXAlCSiKSJuYeTbHXB9KetnlU3EoorxLcU88BdwMPC1IobVxNRGVBOQrFXtvX+RtiV4FEenfJiauFtY+l8prwL9KFtA/EzF3BT06y3hNLZ82FS/gkY2K3qL4VsW71sbV2JZdCD7tSM5XZHqJke9zR6/XRJf26ZYt4xdT+V/Fh5xjCjyPMrwsIdCtAd/LjZbHg4zGozvnDngYtGxHcImYivmKmUfxwlMyBPeipXCNYrpc0yjMhK1z8MVryTr+v27LQaU4fhDu1ktHdDq2HP/AvgfFlOetIzVDkVnlkgftEvyjMVVdib5i2AC4EBJ5etTwOyivKuwPtHh8hCD6MdcEKcU2gtQMwb4HyQkFCn03WQMgIuSrpQ6lhHS2H3rVsADPC92BYfym2wf4dVT2gC4AfbN8/lLrsbPAV/XvAZOhGdujSEHPEOX0Mi1HaljiLU8Ahe7/LEB7IbvHJnN7bNBz3lgsGZSatwzuRkHXD0HEl0FO3JeFsiHUesVEnIdSVbo9Yg1Y6hPcL5Bt2/hDxlf3ki+YkaHxSxLGz1ZI9045hpA2vNa/YYhuAi33QlQj+M8BzPjtxOIS2nyqIH6Qp/BAqBp+GVfIQg2kU9q+z6TavWTjYFQg+pARnWFEFwZG74q9qcpMmUDStBHQ8zfBzwbdWoZLY3ChYsmGlRhbgIb1oJZ/QkmHmWJoUcv8RJfuSS59hvqwgMDElHXLrOiVFA+pikD8nSnrmlHqeqeMBQk1JLNK8LeAbilxyp3HZsEjxmPqmYsPQA1rEXYP0orH8JxabjMFtpkHV1Jz6ToiLycY0WVG9GIGnrBJI3qdNdqcc7ahe8pYxFgNyLwo6M2gm0qIW4cimwXPiovf6UujaXBp2aCGPw3CQqSGX6hwq4nY5h9eSe0NL1Nw5iQrLBOYwoHbbIEVvTZl3SMC43qnjKch7FFDYbUhni6DzE6CrrRE/zZ9i8UARNVColOzalmk5qDlMAhdGvAjTXC7KNvNGw9S962/ko/NSUEx8uccwn9gRK8yoktjL+PazjmFuqBdK3n/VSH+puBaKF54DuLevyL4ZkcqZ/sOsn2RamtYzJj2mA+TdrKJuUc856J9p4XQo8IGNTT7FC9ITD7acjdj0llileMs/GwQ5AesA6fy66yztyaMbz/39WdZ291IwN46T+Jyj50JcjxQAeoFOsC/IPhmT8N7CbYRNY0dKABg0ykPMHFDxK6qoNbk9DRxnCCK9wk2asC7cYX5UGLVMXvnEO0VnMrwhNHlRrSpBPL9cE7l57GXOUboCms9YctWBCcRlSMVMxFkpOBjwb1viDZHVOfq+AcdTV/6yKyUgd49ltibREUQL7Kicyi/yZt3KgtzziwORKPU8NI7NCX3hT7YmSZtHaF1ZxvR64dAHorZaU7S+q8krSfTUXp7tGQB9WGB3timEqI3SbHtMiQINBi4NetsVfDxCvBICAhECY2OFtFy66b9RYieaWCCKUNAyXNmjQeoF6g9XAKAYR6pNaXzL11A7A0KUcL4eEi/OAfCWynPXslLqOANBW92qsqOw8efXVZ0pz0ae8Cr0B0lPlRYw9A60/2IvcqTBW+2ujKWUMkCqusjhicLvuDNQ05lFf0NmgMjq5D5hOcFr/K0U/lpIOrC2qMwAwDbeitIJ932vLM3O5XlWuzz95fiqkXibzqVmZE3VziV1QqdFOucSCHjVdbHKrMiL7MD8R3ZuLxfbmXvw+fePZamcdvIx6YiED1Z4GQPx3iVLgObQN/Ju2DHsLpIuzsStakg/ryqjBJAod2pvJ93doeI+pr6qFwan+FTx/8Agjbnj0iHt+wAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTYtMDUtMTlUMTc6MDc6MTErMDA6MDAEoroVAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE2LTA1LTE5VDE3OjA3OjExKzAwOjAwdf8CqQAAAEZ0RVh0c29mdHdhcmUASW1hZ2VNYWdpY2sgNi43LjgtOSAyMDE0LTA1LTEyIFExNiBodHRwOi8vd3d3LmltYWdlbWFnaWNrLm9yZ9yG7QAAAAAYdEVYdFRodW1iOjpEb2N1bWVudDo6UGFnZXMAMaf/uy8AAAAYdEVYdFRodW1iOjpJbWFnZTo6aGVpZ2h0ADE5Mg8AcoUAAAAXdEVYdFRodW1iOjpJbWFnZTo6V2lkdGgAMTky06whCAAAABl0RVh0VGh1bWI6Ok1pbWV0eXBlAGltYWdlL3BuZz+yVk4AAAAXdEVYdFRodW1iOjpNVGltZQAxNDYzNjc3NjMxendcrAAAAA90RVh0VGh1bWI6OlNpemUAMEJClKI+7AAAAFZ0RVh0VGh1bWI6OlVSSQBmaWxlOi8vL21udGxvZy9mYXZpY29ucy8yMDE2LTA1LTE5LzU4MjdkNzExNjY1MjgzOTVlOGQ1NmNhZmVlYjRhNWJlLmljby5wbmfKOfUqAAAAAElFTkSuQmCC
// ==/UserScript==
(function() {
    var defaultConfig = {
            ":: Main Rice": ["header", ""],
            "Left Margin": [
                5, "Change the size of the left margin.", [{
                    name: "Large",
                    value: 65
                }, {
                    name: "Medium",
                    value: 25
                }, {
                    name: "Small",
                    value: 5
                }, {
                    name: "None",
                    value: 0
                }, {
                    name: "Custom",
                    value: 999
                }], true
            ],
            "Custom Left Margin": [
                0, "Left margin custom width (pixels).", "Left Margin", 999, true
            ],
            "Right Margin": [
                5, "Change the size of the right margin.", [{
                    name: "Large",
                    value: 65
                }, {
                    name: "Medium",
                    value: 25
                }, {
                    name: "Small",
                    value: 5
                }, {
                    name: "None",
                    value: 0
                }, {
                    name: "Custom",
                    value: 999
                }], true
            ],
            "Custom Right Margin": [
                0, "Right margin custom width (pixels).", "Right Margin", 999, true
            ],
            "Rounded Corners": [false, "Styles replies, menus and Quick Reply to have subtly rounded corners."],
            "Underline All Links": [false, "Underlines all links in the page."],
            "Show Banner": [false, "Toggle visibility of the banner.", null, true],
            "Reduce Banner Opacity": [false, "Reduce opacity of the banner for easier viewing.", "Show Banner", true, true],
            "Show Board Name": [true, "Toggle visibility of the board name."],
            "Show Reply to Thread Button": [false, "Toggle visibility of the Start a Thread / Reply to Thread button."],
            "Show Blotter": [true, "Toggle visibility of the 4chan news blotter."],
            "Show 4chan Ads": [false, "Opts into 4chan\'s banner ads.", null, true],
            "Show Top Ad": [true, "Show the top 4chan banner ad.", "Show 4chan Ads", true, true],
            "Show Middle Ad": [true, "Show the middle 4chan banner ad.", "Show 4chan Ads", true, true],
            "Show Bottom Ad": [true, "Show the bottom 4chan banner ad.", "Show 4chan Ads", true, true],
            "Reduce Ad Opacity": [false, "Reduce the opacity of ads until hover for easier viewing.", "Show 4chan Ads", true, true],
            "Show Navigation Links": [true, "Toggle visibility of the navigation links at the top and bottom of the threads.", null, true],
            "Show Top Links": [true, "Toggle visibility of the top navigation links.", "Show Navigation Links", true, true],
            "Show Bottom Links": [true, "Toggle visibility of the bottom navigation links.", "Show Navigation Links", true, true],
            ":: Sidebar": ["header", ""],
            "Sidebar Position": [
                1, "Change the position of the sidebar or disable it altogether.", [{
                    name: "Right",
                    value: 1
                }, {
                    name: "Left",
                    value: 2
                }, {
                    name: "Disabled",
                    value: 3
                }], true
            ],
            "Minimal Sidebar": [true, "Shrinks the sidebar and disables the banner."],
            ":: Quick Reply": ["header", ""],
            "Autohide Style": [
                2, "Changes how the quick reply is hidden. Enable Autohide QR in 4chan X.", [{
                    name: "Normal",
                    value: 1
                }, {
                    name: "Vertical Tabbed",
                    value: 2
                }, {
                    name: "Fade",
                    value: 3
                }]
            ],
            "Transparent QR": [false, "Reduces opacity of the QR box."],
            "Remove Background": [false, "Removes the QR background."],
            "Remove Controls": [false, "Removes the QR controls and checkbox."],
            "Expanding Form Inputs": [true, "Makes certain form elements expand on focus."],
            "Force QR to Sidebar Size": [false, "QR will no longer extend past the sidebar size."],
            ":: Replies": ["header", ""],
            "Fit Width": [true, "Replies stretch to the width of the page."],
            "Fit Expanded Images": [false, "Expanded images will better fit to the viewport."],
            "Show Reply Header": [true, "Shows reply header background and line border."],
            "Show File Info": [true, "Hides filename, dimensions and size info."],
            "Underline QuoteLinks": [false, "Underlines quotelinks only."],
            "Indent OP": [true, "Indents the OP instead of touching the screen."],
            "Allow Wrapping Around OP": [false, "Allow for replies to wrap around OP instead of being forced onto their own line."],
            "OP Background": [true, "Give OP a background similar to a reply."],
            "Recolor Even Replies": [false, "Makes every other post a darker color. If Quote Threading is enabled darkens every root reply."],
            "Reduce Thumbnail Opacity": [false, "Reduces opacity of thumbnails."],
            "Backlink Icons": [true, "Use icons for backlinks instead of text."],
            "Backlinks on Bottom": [false, "Move backlinks to the bottom right of replies."],
            "Show 4chan Pass users": [false, "Show a four leaf clover indicating a pass user."],
            "Borders": [
                2, "Changes which sides of replies have borders.", [{
                    name: "Normal (4chan default)",
                    value: 1
                }, {
                    name: "On all sides",
                    value: 2
                }, {
                    name: "None",
                    value: 3
                }]
            ],
            "Margin Between Replies": ['', "Change size of spacing in between replies.", [{
                name: "Very Large",
                value: 15
            }, {
                name: "Large",
                value: 8
            }, {
                name: "Normal (4chan default)",
                value: ''
            }, {
                name: "Minimal",
                value: -2
            }, {
                name: "None",
                value: -4
            }, {
                name: "Overlapping Borders",
                value: -5
            }]],
            "Post Message Margin": [
                2, "Change size of margin around post message.", [{
                    name: "Small",
                    value: 1
                }, {
                    name: "Normal",
                    value: 2
                }, {
                    name: "Large",
                    value: 3
                }]
            ],
            ":: Catalog": ["header", ""],
            "Justified Text": [true, "Justifies the teaser text of every thread to be more uniform."],
            "Show Background": [false, "Threads receive a matching background."],
            "Unified Thumbnail Size": [false, "Makes all thumbnails the same size regardless of aspect ratio."],
            ":: 4chan X Header": ["header", ""],
            "Show Header Background Gradient": [false, "Gives the header bar a gradient background."],
            "Show Header Shadow": [true, "Gives the header a drop shadow."],
            "Highlight Current Board": [true, "Gives the current board link a bottom highlight border."],
            ":: Highlighting": ["header", ""],
            "Decoration Style": [
                0, "Changes the highlight decoration of posts.", [{
                    name: "None",
                    value: 0
                }, {
                    name: "Border",
                    value: 1
                }, {
                    name: "Outline",
                    value: 2
                }, {
                    name: "Separator",
                    value: 3
                }]
            ],
            "Decoration Width": [
                1, "Changes decoration width of highlighted posts.", [{
                    name: "Large",
                    value: 6
                }, {
                    name: "Medium",
                    value: 3
                }, {
                    name: "Small",
                    value: 1
                }, {
                    name: "Custom",
                    value: 999
                }], true
            ],
            "Custom Decoration Width": [
                0, "Enter a custom width for the decoration (pixels).", "Decoration Width", 999, true
            ],
            "Highlight Style": [
                "solid", "Changes style of post highlight.", [{
                    name: "Dashed",
                    value: "dashed"
                }, {
                    name: "Dotted",
                    value: "dotted"
                }, {
                    name: "Double",
                    value: "double"
                }, {
                    name: "Solid",
                    value: "solid"
                }]
            ],
            ":: Fonts": ["header", ""],
            "Font Family": [
                "sans-serif", "Set the default font family.", [{
                    name: "Default",
                    value: "sans-serif"
                }, {
                    name: "Monospace",
                    value: "monospace"
                }, {
                    name: "Ubuntu",
                    value: "Ubuntu"
                }, {
                    name: "Consolas",
                    value: "Consolas"
                }, {
                    name: "Droid Sans",
                    value: "Droid Sans"
                }, {
                    name: "Segoe UI",
                    value: "Segoe UI"
                }, {
                    name: "Calibri",
                    value: "Calibri"
                }, {
                    name: "Arial",
                    value: "Arial"
                }, {
                    name: "Lucida Grande",
                    value: "Lucida Grande"
                }, {
                    name: "Helvetica",
                    value: "Helvetica"
                }, {
                    name: "Verdana",
                    value: "Verdana"
                }, {
                    name: "Garamond",
                    value:"Garamond"
                }]
            ],
            "Font Size": [13, "Set the general size of text (Pixels). Min: 10px, Max: 18px"],
            "Backlink Font Size": [9, "Set the font size of backlinks."],
            "Bitmap Font": [false, "Check this if you are using a bitmap font."],
            ":: Compatibility": ["header", ""],
            "Version Fix": [
                1, "Applies CSS fixes for different forks. Default is for seaweed/ccd0 forks. Make sure you enable QR and Persistent QR for maximum compatibility.", [{
                    name: "Default",
                    value: 1
                }, {
                    name: "loadletter",
                    value: 3
                }], true
            ],
            "Themes": [],
            "Hidden Themes": [],
            "Selected Theme": 13,
            "NSFW Theme": 12
        },
        MAX_FONT_SIZE = 18,
        MIN_FONT_SIZE = 10,
        NAME = "StyleChan",
        NAMESPACE = "StyleChan.",
        VERSION = "1.10",
        CHANGELOG = "https://gist.github.com/3nly/15b01b589a2644285c33203d4b4fafcc/revisions?diff=unified&w=",
        inputImages = "iVBORw0KGgoAAAANSUhEUgAAAAgAAAAgCAYAAAAv8DnQAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAP9JREFUOMvV0CFLQ2EYxfHfrtdiURgbmCxOmFPBJgZZ0CQD0Q+goFkwabWIyWIWFgwmy7Qp7DPI3GD7ACZlYLNcy31ljG0aDHrSy3N43nOef6ZULBiifczEQ8wV7OAtGmBO4wgfOI2whsXUnMAJ8rhCJ8IxDpHDHpZwixqM5XPZBBtYxioauEgjRLjBI2bRxTneQ6EYCS4xiTu89DbONJrtP88hwnV64hm28YRqyPsFDkmSGKUYFubnsqignM7rqDWa7dcAqoLdnsXwrgZQ5QG/l8MVIxX1ZPar/lUyUOsv+aMzv+0Qw3OrM4VNrKfzB9yXioVu6LDVx+EA4/+Gwycw/Uz36O07WwAAAABJRU5ErkJggg==",
        themeInputs = [{
            dName: "Reply Background",
            name: "mainColor",
            property: "background-color"
        }, {
            dName: "Reply Border",
            name: "brderColor",
            property: "border-color"
        }, {
            dName: "Input Background",
            name: "inputColor",
            property: "background-color"
        }, {
            dName: "Input Border",
            name: "inputbColor",
            property: "border-color"
        }, {
            dName: "Header Background",
            name: "headerBGColor",
            property: "background-color"
        }, {
            dName: "Header Text",
            name: "headerColor",
            property: "color"
        }, {
            dName: "Board Title",
            name: "boardColor",
            property: "color"
        }, {
            dName: "Body Background",
            name: "bgColor",
            property: "background-color"
        }, {
            dName: "Text",
            name: "textColor",
            property: "color"
        }, {
            dName: "Backlink",
            name: "blinkColor",
            property: "color"
        }, {
            dName: "Header Link",
            name: "headerLColor",
            property: "color"
        }, {
            dName: "Header Link Hover",
            name: "headerLHColor",
            property: "color"
        }, {
            dName: "Link",
            name: "linkColor",
            property: "color"
        }, {
            dName: "Link Hover",
            name: "linkHColor",
            property: "color"
        }, {
            dName: "Quotelinks",
            name: "qlColor",
            property: "color"
        }, {
            dName: "Name",
            name: "nameColor",
            property: "color"
        }, {
            dName: "Tripcode",
            name: "tripColor",
            property: "color"
        }, {
            dName: "Subject",
            name: "titleColor",
            property: "color"
        }, {
            dName: "Greentext",
            name: "quoteColor",
            property: "color"
        }, {
            dName: "Unread Line",
            name: "unreadColor",
            property: "color"
        }, {
            dName: "Highlighting",
            name: "postHLColor",
            property: "color"
        }, {
            dName: "Posts Quoting You",
            name: "quotesYouHLColor",
            property: "color"
        }, {
            dName: "Own Posts",
            name: "ownPostHLColor",
            property: "color"
        }, {
            dName: "Highlighted Threads",
            name: "threadHLColor",
            property: "color"
        }, {
            dName: "Highlighted Reply BG",
            name: "replybgHLColor",
            property: "background"
        }, {
            dName: "Reply Selection",
            name: "replyslctColor",
            property: "outline"
        }],
        $lib, $SS;
    if (!Array.isArray)
        Array.isArray = function(arg) {
            return Object.prototype.toString.call(arg) === "[object Array]";
        };
    Number.prototype.toHexStr = function() {
        var s = "",
            v;
        for (var i = 7; i >= 0; i--) {
            v = (this >>> (i * 4)) & 0xf;
            s += v.toString(16);
        }
        return s;
    };
    /* STYLE SCRIPT LIBRARY */
    /* More or less based off jQuery */
    $lib = window.$ = function(selector, root) {
        return this instanceof $lib ?
            this.init(selector, root) : new $lib(selector, root);
    };
    /* From 4chan X, unchainable */
    /* https://github.com/seaweedchan/4chan-x/blob/master/LICENSE */
    $.asap = function(test, cb) {
        if (test()) {
            return cb();
        } else {
            return setTimeout($.asap, 25, test, cb);
        }
    };

    $lib.prototype = {
            constructor: $lib,
            elems: [],
            length: function() {
                return this.elems.length;
            },
            /* CONSTRUCTOR */
            init: function(selector, root) {
                if (selector == null || selector == undefined) return this;

                if (selector.constructor === $lib) return selector;
                else if (typeof selector === "string") {
                    var root = root || document;
                    var tagCheck = /^<(\w+)([^>]*)>(.*)$/.exec(selector); // No closing tag for root node.

                    if (root.constructor === $lib)
                        root = root.get();

                    if (tagCheck) {
                        var tag = document.createElement(tagCheck[1]);

                        if (tagCheck[2]) {
                            var attribs, atRegEx = /(\w+)=((?:"(?:[^"]+)"|'(?:[^']+)'|(?:\w+)))/g;
                            while ((attribs = atRegEx.exec(tagCheck[2])) != null) {
                                var val = attribs[2];
                                if ((val[0] == '"' || val[0] === "'") && val[0] == val[val.length - 1])
                                    val = val.substr(1, val.length - 2)

                                tag.setAttribute(attribs[1], val);
                            }
                        }

                        tag.innerHTML = tagCheck[3];

                        this.elems = [tag];
                    } else if (/^#[\w-]+$/.test(selector) && root == document) {
                        var el;

                        if ((el = document.getElementById(selector.substr(1))) != null)
                            this.elems = [el];
                    } else {
                        var results = root.querySelectorAll(selector);
                        this.elems = Array.prototype.slice.call(results);
                    }
                } else if (selector.nodeType)
                    this.elems = [selector];
                else if (Array.isArray(selector))
                    this.elems = Array.prototype.slice.call(selector);

                return this;
            },

            /* DOM NODE RETRIEVAL */
            clone: function() {
                var ret = [];

                this.each(function() {
                    ret.push(this.cloneNode(true));
                });

                return new $lib(ret);
            },
            elements: function() {
                if (!this.hasSingleEl())
                    return this;

                this.elems = Array.prototype.slice.call(this.elems[0].elements);

                return this;
            },
            get: function(index) {
                if (index == undefined && this.elems.length === 1)
                    return this.elems[0];
                else if (index == undefined && !this.hasSingleEl())
                    return this.elems;

                return this.elems[index];
            },

            /* DOM MANIPULATION */
            prepend: function(el) {
                if (el.constructor === $lib)
                    el = el.get();

                return this.each(function() {
                    this.insertBefore(el, this.firstChild);
                });
            },
            append: function(el) {
                if (el.constructor === $lib)
                    el = el.get();

                return this.each(function() {
                    this.appendChild(el);
                });
            },
            before: function(el) {
                if (el.constructor === $lib)
                    el = el.get();

                return this.each(function() {
                    this.parentNode.insertBefore(el, this);
                });
            },
            after: function(el) {
                if (el.constructor === $lib)
                    el = el.get();

                return this.each(function() {
                    if (this.nextSibling != null)
                        this.parentNode.insertBefore(el, this.nextSibling);
                    else if (this.parentNode != null)
                        this.parentNode.appendChild(el);
                });
            },
            replace: function(el) {
                return this.each(function() {
                    $(this).before(el).remove();
                });
            },
            html: function(html) {
                if (html == undefined)
                    return this.elems[0].innerHTML;

                return this.each(function() {
                    this.innerHTML = html;
                });
            },
            text: function(text) {
                if (this.length() === 0)
                    return;

                if (text == undefined)
                    return this.elems[0].textContent;

                return this.each(function() {
                    this.textContent = text;
                });
            },
            appendText: function(text) {
                return this.each(function() {
                    this.textContent += text;
                });
            },
            attr: function(name, val) {
                if (val == undefined)
                    if (!this.hasSingleEl())
                        return this;
                    else
                        return this.elems[0].getAttribute(name);
                else
                if (val === "")
                    return this.each(function() {
                        this.removeAttribute(name);
                    });

                return this.each(function() {
                    this.setAttribute(name, val);
                });
            },
            disabled: function(bDisabled) {
                if (bDisabled == undefined)
                    return this.elems[0].disabled;

                return this.each(function() {
                    this.disabled = bDisabled;
                });
            },
            toggle: function(bHidden) {
                return this.each(function() {
                    var $this = $(this);

                    if (bHidden == undefined)
                        bHidden = !($this.attr("disabled") === "true");

                    $this.attr("hidden", bHidden || "");
                });
            },
            hide: function() {
                return this.toggle(true);
            },
            show: function() {
                return this.toggle(false);
            },
            val: function(val) {
                if (val == undefined) {
                    var el = this.elems[0];

                    if (el == undefined)
                        return false;

                    switch (el.type) {
                        case "checkbox":
                        case "radio":
                            return el.checked == true;
                        default:
                            if (/^\d+$/.test(el.value))
                                return parseInt(el.value);
                            return el.value;
                    }
                }

                return this.each(function() {
                    switch (this.type) {
                        case "checkbox":
                        case "radio":
                            this.checked = val;
                            break;
                        default:
                            this.value = val;
                            break;
                    }
                });
            },
            checked: function(state) {
                return this.each(function() {
                    this.checked = state;
                });
            },
            addClass: function(classNames) {
                return this.each(function() {
                    classNames = classNames.split(" ");
                    for (var j = 0, jMAX = classNames.length; j < jMAX; j++)
                        if (!$(this).hasClass(classNames[j]))
                            this.className += (this.className ? " " : "") + classNames[j];
                });
            },
            hasClass: function(className) {
                if (!this.hasSingleEl() || this.elems[0].className == undefined)
                    return false;

                var regx = new RegExp("\\b" + className + "\\b");

                return regx.test(this.elems[0].className);
            },
            removeClass: function(classNames) {
                return this.each(function() {
                    classNames = classNames.split(" ");
                    for (var j = 0, jMAX = classNames.length; j < jMAX; j++)
                        if ($(this).hasClass(classNames[j])) {
                            var cclassNames = this.className.split(" ");
                            this.className = "";

                            for (var k = 0, kMAX = cclassNames.length; k < kMAX; k++)
                                if (classNames[j] !== cclassNames[k])
                                    this.className += (this.className ? " " : "") + cclassNames[k];
                        }
                });
            },
            toggleClass: function(classNames) {
                return this.each(function() {
                    classNames = classNames.split(" ");
                    for (var j = 0, jMAX = classNames.length; j < jMAX; j++)
                        if (!$(this).hasClass(classNames[j]))
                            $(this).addClass(classNames[j]);
                        else
                            $(this).removeClass(classNames[j]);
                });
            },
            optionClass: function(optionName, optionValue, className) {
                return this.each(function() {
                    if ($SS.conf[optionName] === optionValue && !$(this).hasClass(className))
                        $(this).addClass(className);
                    else if ($SS.conf[optionName] !== optionValue && $(this).hasClass(className))
                        $(this).removeClass(className);
                    else
                        return
                });
            },
            remove: function() {
                return this.each(function() {
                    this.parentNode.removeChild(this);
                });
            },
            /* DOM TRAVERSING */
            parent: function() {
                if (!this.hasSingleEl()) return this;

                return new $lib(this.elems[0].parentNode);
            },
            children: function(selector) {
                if (!this.hasSingleEl())
                    return this;
                else if (selector == null)
                    selector = "*";

                return new $lib(selector, this.elems[0]);
            },
            nextSibling: function(selector) {
                if (!this.hasSingleEl() ? true : this.elems[0].nextSibling == null)
                    return new $lib(null);

                if (selector != undefined) {
                    var t, m = new $lib(selector, this.elems[0].parentNode),
                        s = this.elems[0].parentNode.childNodes;

                    for (var i = s.length - 1; i >= 0; --i) {
                        if (s[i] === this.elems[0] && t == undefined) // end and no matching siblings
                            return new $lib(null);
                        else if (s[i] === this.elems[0] && t != undefined) // end and matched sibling
                            return new $lib(t);
                        else if (m.elems.indexOf(s[i]) !== -1) // this element matches the selector
                            t = s[i];
                    }
                }

                return new $lib(this.elems[0].nextSibling);
            },
            previousSibling: function(selector) {
                if (!this.hasSingleEl() ? true : this.elems[0].previousSibling == null)
                    return new $lib(null);

                if (selector != undefined) {
                    var t, m = new $lib(selector, this.elems[0].parentNode),
                        s = this.elems[0].parentNode.childNodes;

                    for (var i = 0, MAX = s.length; i < MAX; ++i) {
                        if (s[i] === this.elems[0] && t == undefined)
                            return new $lib(null);
                        else if (s[i] === this.elems[0] && t != undefined)
                            return new $lib(t);
                        else if (m.elems.indexOf(s[i]) !== -1)
                            t = s[i];
                    }
                }

                return new $lib(this.elems[0].previousSibling);
            },

            /* EVENT METHODS */
            bind: function(type, listener) {
                return this.each(function() {
                    this.addEventListener(type, listener, false);
                });
            },
            unbind: function(type, listener) {
                return this.each(function() {
                    this.removeEventListener(type, listener, false);
                });
            },
            fire: function(evnt) {
                var ev = document.createEvent("HTMLEvents");

                return this.each(function() {
                    ev.initEvent(evnt, true, true);
                    this.dispatchEvent(ev);
                });
            },
            blur: function() {
                return this.each(function() {
                    this.blur();
                });
            },
            click: function() {
                return this.each(function() {
                    this.click();
                });
            },
            scrollIntoView: function(alignWithTop) {
                return this.each(function() {
                    this.scrollIntoView(alignWithTop);
                });
            },
            /* HELPER METHODS */
            delay: function(func, time) {
                return this.each(function() {
                    var $this = this;
                    setTimeout(function() {
                        func.call($this);
                    }, time);
                });
            },
            each: function(func, args) {
                if (args != null && !Array.isArray(args))
                    args = [args];

                for (var i = 0, MAX = this.elems.length; i < MAX; ++i)
                    func.apply(this.elems[i], args || [i]);

                return this;
            },
            exists: function() {
                return this.elems.length > 0;
            },
            hasSingleEl: function() {
                return this.elems.length === 1;
            },
            riceCheck: function() {
                return this.each(function() {
                    var click = function(e) {
                        e.preventDefault();
                        this.previousSibling.click();
                    };
                    if (this.isRiced) return;
                    else if (this.nextSibling != undefined && this.nextSibling.className === "riceCheck")
                        return $(this.nextSibling).bind("click", click);

                    var div = $("<div class=riceCheck>").bind("click", click);
                    $(this).hide().after(div);

                    return this.isRiced = true;
                });
            },
            jsColor: function() {
                return this.each(function() {
                    this.color = new $SS.jscolor.color(this);
                });
            }
        };
    /* END STYLE SCRIPT LIBRARY */

    /* STYLE SCRIPT CLASSES & METHODS */
    $SS = {
        browser: {},
        DOMLoaded: function(reload) {
            $SS.classes.init();

            var div;
            if (reload !== true) {
                $SS.options.init();

                $(document).bind("QRDialogCreation", $SS.QRDialogCreationHandler)
                           .bind("OpenSettings", $SS.NodeInsertionHandler)
                           .bind("ThreadUpdate", $SS.NodeInsertionHandler);

                var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
                var observer = new MutationObserver(function(mutations) {
                    var i, j, MAX, _MAX, nodes;

                    for (i = 0, MAX = mutations.length; i < MAX; ++i) {
                        nodes = mutations[i].addedNodes;

                        for (j = 0, _MAX = nodes.length; i < _MAX; ++i)
                            if (nodes[j].nodeType !== 3)
                                $("input[type=checkbox]", nodes[j]).riceCheck();
                    }
                });

                observer.observe(document, {
                    childList: true,
                    subtree: true
                });

                if ((!(html = $("*[xmlns]")).exists()) && (!(ctxmenu = $("#ctxmenu-main").exists())))
                    if ((link = $("link[title][rel='stylesheet']")).exists())
                        link.each(function() {
                            $(this).attr("href", "");
                        });

                if ((div = $("#globalMessage *[style]")).exists())
                    div.each(function() {
                        $(this).attr("style", "");
                    });

                if ((div = $(".closeIcon")).exists()) {
                    div.text("x");
                };

                // 4chan ads being added with JS
                if (!$SS.conf["Show Top Ad"]) {
                    $(".topad.center").remove();
                    $(".aboveMidAd.center").remove();
                } else if (!$SS.conf["Show Middle Ad"]) {
                    $(".middlead.center").remove();
                } else if (!$SS.conf["Show Bottom Ad"]) {
                    $(".bottomad.center").remove();
                }

                // things that need to change after 4chan X loads.
                setTimeout(function() {
                    if (!$SS.QRhandled && (div = $("#qr")).exists())
                        $SS.QRDialogCreationHandler({
                            target: div
                        });
                });

            }
        },
        init: function(reload) {
            if (!reload) {
                if (/^about:neterror/.test(document.documentURI)) return;
                localStorage["4chan-settings"] = "{ \"disableAll\" : true, \"dropDownNav\": false }";

                var m_VERSION;
                $SS.browser.webkit = /AppleWebKit/.test(navigator.userAgent);
                $SS.browser.gecko = /Gecko\//.test(navigator.userAgent);
                $SS.location = $SS.getLocation();

                if ((m_VERSION = $SS.Config.get("VERSION")) !== VERSION) {
                    // Signal that StyleChan has updated
                    var detail = {
                        type: 'info',
                        content: NAME + ' has been updated to version ' + VERSION + '.',
                        lifetime: 15
                    };
                    if (typeof cloneInto === 'function') {
                        detail = cloneInto(detail, document.defaultView);
                    }
                    var event = new CustomEvent('CreateNotification', {
                        bubbles: true,
                        detail: detail
                    });
                    setTimeout(function() {
                        document.dispatchEvent(event);
                    }, 25);
                    // Correct selected theme after updating
                    // and the number defaults has changed.
                    var ntThemes = $SS.Themes.defaults.length,
                        otThemes = $SS.Config.get("Total Themes"),
                        sTheme = $SS.Config.get("Selected Theme");

                    if (otThemes !== ntThemes && otThemes != undefined && sTheme >= otThemes) {
                        sTheme += ntThemes - otThemes;
                        $SS.Config.set("Selected Theme", sTheme);
                    }

                    $SS.Config.set("VERSION", VERSION);
                    $SS.Config.set("Total Themes", ntThemes);
                }
            }

            $SS.Config.init();
            $SS.Themes.init();

            if (reload) {
                $SS.insertCSS();
                $SS.DOMLoaded(true);
            } else {
                $.asap((function() {
                    return $("link[rel=stylesheet]", document.head).exists();
                }), $SS.insertCSS);
                if (/complete|interactive/.test(document.readyState))
                    $SS.DOMLoaded();
                else
                    $(document).bind("DOMContentLoaded", $SS.DOMLoaded);
            }

        },

        /* STYLING & DOM */
        insertCSS: function() {
            var css,
                reload = $("#ch4SS").exists();

            if (reload || $("link[rel=stylesheet]", document.head).exists())
                $(document).unbind("DOMNodeInserted", $SS.insertCSS);
            else return;

            css = ".mobile,#delform .mobile.center,.tab-select:not(:checked)+div,iframe[src='about:blank'],#absbot,.stylechanger,#styleSwitcher,:root.show-ads.hide-top .topad.center,:root.show-ads.hide-middle .middlead.center,:root.show-ads.hide-bottom .bottomad.center,#delPassword,:root.show-file-info .file-info,:root.hide-blotter #blotter,#delform .post input[type=checkbox],#delform .post .riceCheck,#qp .post input[type=checkbox],#qp .riceCheck,.deleteform,:root.hide-board-name .boardTitle,:root.hide-board-name .boardSubtitle,:root.hide-banner #bannerCnt,:root.hide-banner .boardBanner>img,:root.hide-button .qr-link-container-bottom,:root.hide-button .qr-link-container,:root.reply-fit-width .sideArrows,:root.qr-controls #qr .close,:root.qr-controls #qr select[data-name=thread],:root.qr-controls.fade-qr #qr .move label,:root.qr-controls.vertical-qr #qr .move label input,#postForm,:root.hide-button #togglePostFormLink,hr:not(#unread-line),:root.hide-navlinkbot .navLinks.navLinksBot.desktop,:root.hide-navlinkbot .navLinks.navLinksBottom.mobilebtn,:root.hide-navlinktop #info,:root.hide-navlinktop .navLinks:not(.navLinksBottom):not(.navLinksBot),:root.hide-navlinks body>.desktop:not(.pagelist):not(.navLinksBottom),:root.hide-navlinks .navLinks.navLinksBot.desktop,:root.hide-navlinks .navLinks,.ad-plea,.exif:not([style]),[hidden]{display:none}:root:not(.show-ads) .center{display:none!important}input:focus,textarea:focus,select,a{outline:0!important}.party-hat{left:0;margin-top:-80px;position:absolute;pointer-events:none}.sjis{font-size:16px;line-height:17px;white-space:pre;font-family:IPAMonaPGothic,Mona,'MS PGothic',monospace;overflow:auto;display:block;clear:left}.mu-s{font-weight:700}.mu-i{font-style:italic}.mu-r{color:#c41e3a}.mu-g{color:#00a550}.mu-b{color:#1d8dc4}div.post div.file .fileThumb{float:left;margin-left:13px;margin-right:20px;margin-bottom:10px}div.op.post div.file .fileThumb{margin-bottom:0}.fileText{margin-left:13px!important;margin-bottom:2px!important}.fixed.bottom-header.is_thread body{padding-bottom:0;padding-top:.5em}.fixed.bottom-header.is_index body{padding-bottom:4.5em;padding-top:.5em}.fixed.bottom-header.is_catalog body,.fixed.bottom-header.catalog-mode body{padding-bottom:3em;padding-top:.5em}.fixed.bottom-header body{padding-top:.5em}:root.is_index.bottom-header:not(.autohide) body{padding-bottom:5em!important}.fixed.top-header.is_index body{padding-bottom:2.5em;padding-top:" + (($SS.conf["Font Size"] <= 11) ? 3.2 : 2.4) + "em!important}.fixed.top-header.is_thread body{padding-bottom:0;padding-top:" + (($SS.conf["Font Size"] <= 11) ? 3.2 : 2.4) + "em!important}.fixed.top-header.is_catalog body,.fixed.top-header.catalog-mode body{padding-bottom:.5em;padding-top:" + (($SS.conf["Font Size"] <= 11) ? 3.2 : 2.4) + "em!important}.fixed.top-header.autohide body{padding-top:2em!important}.fixed.top-header body{padding-top:2.4em!important}div.post{margin:4px 0;overflow:hidden}:root:not(.reply-fit-width) #delform div.reply:not([hidden]){display:table!important}:root:not(.reply-fit-width) #delform .stub~div.reply:not([hidden]){display:none!important}div.thread{margin:0;clear:both;padding-bottom:10px}table.flashListing{border-spacing:1px;margin-left:auto;margin-right:auto}div.pagelist div.pages{padding:4px}div.pagelist,div.pagelist>div{float:left}div.pagelist>div span{padding:4px;display:inline-block}.page-num{margin-right:auto!important}s{text-decoration:none!important}span.spoiler,s,s:not(:hover)>a,s:not(:hover)>.linkify{color:#000!important;background:none repeat scroll 0 0 #000!important}span.spoiler:hover,s:hover,span.spoiler:focus,s:focus{color:#fff!important}#globalMessage,.boardBanner{text-align:center}div.sideArrows{float:left;margin-right:2px;margin-top:0;margin-left:2px;opacity:.3}hr,#boardNavDesktopFoot{clear:both}table{border-spacing:1px;margin-left:auto;margin-right:auto}.center{text-align:center!important}.middlead,.topad{margin-bottom:20px!important}#qf-box{width:120px}span.hide-announcement{margin-left:3px;vertical-align:sub}.bottomCtrl.desktop{float:right}.fixed.bottom-header.is_index .bottomCtrl.desktop,.fixed.bottom-header.is_thread .bottomCtrl.desktop{float:right;margin-bottom:35px}.fixed.top-header.is_thread .bottomCtrl.desktop,.fixed.top-header.is_index .bottomCtrl.desktop{float:right;margin-bottom:8px}#navlinks{top:135px;right:10px}:root.isLight img[src*='//boards.4chan.org/js/jsMath/fonts/']{filter:invert(100%);-webkit-filter:invert(100%)}.centered-links:root #shortcuts{width:350px!important}#blotter{margin:auto;font-size:11px}body{margin-left:" + $SS.conf["Margin Left"] + "px;margin-right:" + $SS.conf["Margin Right"] + "px;margin-top:0;margin-bottom:0}:root.show-ads .ad-cnt{margin-top:auto!important}.postInfo{padding:2px 13px;display:block!important}.summary{margin-left:2px}.expanded-image{position:relative}div.post{margin:4px 0}:root.force-indent .op{margin-left:-12px}:root.force-wrapping .op::after{clear:both;content:'';display:block}:root.op-background .postContainer.opContainer{margin-top:5px}.thread>.replyContainer,.threadContainer>.replyContainer{margin-bottom:" + $SS.conf["Margin Between Replies"] + "px!important}.inline{margin-left:13px!important}.postMessage>.inline{margin-left:0!important}.inline .op>.postInfo,#qp .op>.postInfo{min-width:600px}.postMessage{margin:" + $SS.conf["Margin Post Message"] + "!important}:root.reply-fit-width .reply.post{display:block!important}:root.reply-fit-width .stub~.reply.post{display:none!important}.hasInline .inline>.replyContainer:not(.expanded-image):not(.hasInline) .reply.post,:root.reply-fit-width .post.reply{overflow:hidden!important}:root.reply-fit-width .expanded-image>.post::after,:root.reply-fit-width .hasInline>.reply.post::after{clear:both!important;content:''!important;display:block!important}.threadContainer .hide-reply-button{margin-left:-12px!important}.stub{padding:2px}.stub>a.show-thread-button{margin-right:4px}:root.reply-hide .thread>.expanded-image>.reply,:root.reply-hide .thread>.hasInline>.reply{margin-left:12px!important}.threadContainer{margin-left:0!important;padding-left:20px!important}:root.reply-hide .thread>.threadContainer{margin-left:13px!important}:root.post-info .reply>.postInfo{box-shadow:inset rgba(0,0,0,.05) 0 -1px 2px;padding-top:2px!important}:root.backlink-bottom .post{position:relative;padding-bottom:2px}:root.backlink-bottom .container{position:absolute;bottom:2px;right:6px}.reply .menu-button i{position:relative;bottom:1px}:root.reply-fit-width .reply .container{padding-right:5px}.menu-button+.container:not(:empty){margin-left:4px!important}:root.reply-fit-width .post .menu-button{margin-left:0;position:relative;left:5px}:root.reply-fit-width .post .menu-button{opacity:0}:root.reply-fit-width .post:not(:hover) .menu-button{transition:opacity .3s ease-out 0s!important}:root.reply-fit-width .post:hover .menu-button{opacity:1;transition:opacity .3s ease-in .1s!important}.prettyprint{padding:5px!important;display:inline-block;max-height:400px;overflow-x:auto;max-width:100%;vertical-align:middle}input[type=checkbox],input[type=button],input[type=submit],.riceCheck{cursor:pointer}input[type=checkbox],.riceCheck{display:inline-block;height:10px!important;position:relative;width:10px!important;border-radius:2px!important;-webkit-appearance:none;-moz-appearance:none;margin:1px}input[type=checkbox]{display:none!important}.riceCheck{margin:0 2px -1px 0}input[type=checkbox]:checked::before,input[type=checkbox]:checked+.riceCheck::before{content:'';display:block;height:8px;margin:1px;width:8px}input[type=checkbox]:checked::before,input[type=checkbox]:checked+.riceCheck::before{background:" + $SS.theme.checkMark.get() + "!important}#header-bar{padding:4px 4px 5px!important}:root:not(.fixed) #header-bar{top:0;right:0;left:0;box-shadow:0 1px 2px rgba(0,0,0,.15);border-bottom:1px solid}:root.autohide body{padding-top:0!important;padding-bottom:0!important}:root:not(.fixed).right-sidebar #header-bar{right:300px}:root:not(.fixed).left-sidebar #header-bar{left:300px}:root:not(.fixed) .boardBanner{top:0}#full-board-list>a,.navSmall>a{margin-left:2px}:root.fixed:not(.autohide):not(.bottom) #globalMessage{margin-top:10px!important;margin-bottom:20px!important}.globalMessage,h2,h3{margin:auto}#custom-board-list,#full-board-list,.shortcut{vertical-align:baseline!important}:root.fixed-watcher #thread-watcher{position:fixed!important}.qr-link{border-radius:3px;vertical-align:middle;padding:7px 12px 6px}hr{height:2px;width:600px;border:0!important}:root.reply-fit-width #unread-line{margin:auto;width:100%}#unread-line{margin-top:-3px!important;margin-bottom:-3px!important}:root:not(.autohide) #scroll-marker{pointer-events:none!important}.boardBanner .boardTitle{cursor:default;letter-spacing:-2px}#bannerCnt{border:0!important}:root.banner-opacity #bannerCnt{opacity:.5;transition:opacity .3s ease-out 0s}:root.banner-opacity #bannerCnt:hover{opacity:1!important;transition:opacity .3s ease-in 0s}.pages strong>a{border-radius:3px}.pages strong>a:hover{opacity:.7!important;transition:opacity .3s ease-in 0s}.pagelist{margin-left:18px;margin-bottom:15px}:root.reply-fit-width .pagelist{margin-left:0}.pages a{padding:5px 10px;margin-left:-1px}.next,.prev{border:0!important;position:relative}.next a,.prev a{position:relative;right:5px}.prev a::after{content:'<';position:inherit;top:4px;left:1px}.next a::after{content:'>';position:inherit;top:4px;right:2px}.pagelist button,.pagelist button:hover{background:none!important;border:0!important;box-shadow:none!important;height:20px;width:20px}.pagelist span{opacity:.2}table.flashListing{margin-top:20px;margin-bottom:20px}table.flashListing .highlightPost{background:rgb\(" + $SS.theme.mainColor.shiftRGB(-25) + ")!important}.flashListing td{padding-left:4px!important;padding-right:4px!important;text-align:center!important}#delform[action='https://sys.4chan.org/f/up.php'],#delform[action='https://sys.4chan.org/f/up.php'] .postblock{background:none!important;border:0!important;box-shadow:none!important}:root.ad-opacity .center img{opacity:.5;transition:opacity .3s ease-out 0s}:root.ad-opacity .center img:hover{opacity:1!important;transition:opacity .3s ease-in 0s}body.is_index div.navLinks{padding:5px 0}.navLinks.navLinksBot.desktop{margin-bottom:5px}#hoverUI{z-index:12!important}#search-box,#index-search{width:8%;transition:color .25s,border-color .25s,width .25s}#search-box:focus,#index-search:focus{width:12%;transition:color .25s,border-color .25s,width .25s}:root.thumb-opacity .fileThumb{opacity:.5;transition:opacity .3s ease-out 0s}:root.thumb-opacity .fileThumb:hover{opacity:1;transition:opacity .3s ease-in 0s}select{-moz-appearance:none;-webkit-appearance:none}#delform{overflow-wrap:break-word;word-break:break-word}html,body,div.boardBanner,#menu,input:not(.jsColor),textarea,#qr-filename-container,#post-preview,.post-last,.pln,select,.captcha-root,.tegaki-label,.dd-menu ul{color:" + $SS.theme.textColor.hex + "!important}.nameBlock:not(.capcodeMod)>.name,.com,.post-author{color:" + $SS.theme.nameColor.hex + "!important}.nameBlock.capcodeMod{color:purple!important}.id_admin,.nameBlock.capcodeAdmin span.name{color:red!important}.nameBlock>.postertrip,.post-tripcode,.tag{color:" + $SS.theme.tripColor.hex + "!important}a,.typ,.atn,body.is_catalog .button,:root.catalog-mode .button,.options-button,.tegaki-tb-btn{color:" + $SS.theme.linkColor.hex + "!important}a.summary,.pages strong>a{color:" + $SS.theme.textColor.hex + "!important}#header-bar #notifications a{color:#fff!important}a:hover,body.is_catalog .button:hover,:root.catalog-mode .button:hover,.lit,#header-bar #notifications a:hover,.tegaki-tb-btn:hover{color:" + $SS.theme.linkHColor.hex + "!important}#header-bar,a.current{color:" + $SS.theme.headerColor.hex + "!important}#header-bar a:not(.current){color:" + $SS.theme.headerLColor.hex + "!important}#header-bar a:hover{color:" + $SS.theme.headerLHColor.hex + "!important}#custom-board-list .current{border-bottom:1px solid rgba(" + $SS.theme.linkColor.rgb + ",1)!important}#custom-board-list .current:hover{border-bottom:1px solid rgba(" + $SS.theme.linkHColor.rgb + ",1)!important}.postMessage>.quote,s:hover .quote,.str,.atv,.new,.catalog-thread>.comment>.quote{color:" + $SS.theme.quoteColor.hex + "!important}.subject,.replytitle,.teaser b,.post-subject,.option.header .option-title,.kwd{color:" + $SS.theme.titleColor.hex + "!important}.option.header{font-size:140%}.boardTitle{color:" + $SS.theme.boardColor.hex + "!important;text-shadow:none!important}.backlink{color:" + $SS.theme.blinkColor.hex + "!important}.quotelink{color:" + $SS.theme.qlColor.hex + "!important}.prettyprint,.catalog-code{background:none repeat scroll 0 0 rgba(" + $SS.theme.codeBackground + ")!important;border:1px solid rgba(" + $SS.theme.codeBorder + ")!important}.pun{color:rgba(" + $SS.theme.textColor.rgb + ",.4)!important}::-webkit-input-placeholder{color:rgba(" + $SS.theme.textColor.rgb + ",.4)!important}#qr .field::-moz-placeholder,::-moz-placeholder,#qr-no-file{color:rgba(" + $SS.theme.textColor.rgb + ",.4)!important}body{background:" + $SS.theme.bgImg.get() + $SS.theme.bgColor.hex + "!important}.reply,body.is_catalog .panel,:root.catalog-mode .panel,.dialog,.tab-label,#post-preview,#tegaki,:root.op-background .postContainer.opContainer,.flashListing tr:nth-of-type(2n+1),.dd-menu ul{background:rgba(" + $SS.theme.mainColor.rgb + "," + $SS.theme.replyOp + ")!important}:root.recolor-even .thread>.replyContainer:nth-of-type(even):not(.hidden) .post{background:rgb\(" + $SS.theme.mainColor.shiftRGB(-10) + ")!important}:root:not(.header-gradient) #header-bar{background:rgba(" + $SS.theme.headerBGColor.rgb + "," + $SS.theme.navOp + ")!important}:root.header-gradient #header-bar{background:linear-gradient(rgb\(" + $SS.theme.headerBGColor.shiftRGB(15) + "),rgba(" + $SS.theme.headerBGColor.rgb + "," + $SS.theme.navOp + "))!important}:root.header-shadow #header-bar{box-shadow:none!important}:root:not(.fixed) #header-bar{background:none!important}.options-button,.qr-link,.pages.cataloglink,.pages strong>a{background:linear-gradient(rgb\(" + $SS.theme.mainColor.shiftRGB(15) + "),rgb(" + $SS.theme.mainColor.rgb + "))!important}.options-button:hover,.import-input:hover+.options-button,.pages strong>a:hover,.dd-menu li:hover{background:rgb\(" + $SS.theme.mainColor.shiftRGB(15) + ")}.focused.entry{background:rgb\(" + $SS.theme.mainColor.shiftRGB(10) + ")!important}.qr-link:hover,:root.vertical-qr #qr .move{background:rgb\(" + $SS.theme.mainColor.rgb + ")}input:not(.jsColor),textarea,.riceCheck,#qr-filename-container,select,.captcha-root{background:" + $SS.theme.inputColor.hex + "!important;transition:background .2s}input[type=checkbox],.riceCheck{background:rgb\(" + $SS.theme.inputColor.shiftRGB(25) + ")!important}input:not(.jsColor):hover,.riceCheck:hover,#qr-filename-container:hover,textarea:hover,select:hover,.captcha-root:hover{background:rgb(" + $SS.theme.inputColor.hover + ")!important;transition:background .2s}hr{background-image:linear-gradient(to left,rgba(" + $SS.theme.brderColor.rgb + ",0),rgb(" + $SS.theme.brderColor.rgb + "),rgba(" + $SS.theme.brderColor.rgb + ",0))}#unread-line{background-image:linear-gradient(to left,rgba(" + $SS.theme.unreadColor.rgb + ",0),rgb(" + $SS.theme.unreadColor.rgb + "),rgba(" + $SS.theme.unreadColor.rgb + ",0))}.inline{background:rgba\(" + $SS.theme.mainColor.shiftRGB(-16) + ",.8)!important}:root.post-info .reply>.postInfo{background:rgba\(" + $SS.theme.mainColor.shiftRGB(-16) + ",.2);border-bottom:1px solid rgb\(" + $SS.theme.mainColor.shiftRGB(4) + ")}.reply,:root.op-background .postContainer.opContainer,.dd-menu ul{border-width:0 1px 1px 0;border-style:solid}:root.borders-all .reply,:root.borders-all.op-background .postContainer.opContainer{border-width:1px!important}:root.borders-none .reply,:root.borders-none.op-background .postContainer.opContainer{border:0}#menu,.catalog-thumb{border-radius:0!important}:root.rounded-corners .reply,:root.rounded-corners.op-background .postContainer.opContainer,:root.rounded-corners .dialog:not(#header-bar),:root.rounded-corners .inline,:root.rounded-corners #thread-stats :root.rounded-corners #updater,:root.rounded-corners #menu,:root.rounded-corners .thumb,:root.rounded-corners .fileThumb img:not(.full-image),:root.rounded-corners .catalog-thumb,:root.rounded-corners .catalog-thread,:root.rounded-corners .dd-menu ul{border-radius:3px!important}:root.post-info.rounded-corners .reply>.postInfo,:root.rounded-corners #qr,:root.rounded-corners:root.vertical-qr #qr>.move{border-radius:3px 3px 0 0!important}:root:not(.rounded-corners) #post-preview{border-radius:0!important}.reply,:root.op-background .postContainer.opContainer,.dialog,.entry,.inline,fieldset,#post-preview,.flashListing td:not(:last-of-type):not(.postblock),:root.vertical-qr #qr .move,#qr select,select{border-color:" + $SS.theme.brderColor.hex + "!important}.dd-menu li{border-bottom:" + $SS.theme.brderColor.hex + "!important}input,textarea,.riceCheck,#qr-filename-container,#search-box,#index-search,.captcha-img,:root.vertical-qr #qr .move,#qr select,select,#post-preview,.captcha-root,.dd-menu ul{border:1px solid " + $SS.theme.inputbColor.hex + "!important}.options-button,.qr-link,.pages.cataloglink,.pages strong>a{border-style:solid;border-width:1px;border-color:rgb\(" + $SS.theme.mainColor.shiftRGB(-15) + ") rgb\(" + $SS.theme.mainColor.shiftRGB(-15) + ") rgb\(" + $SS.theme.mainColor.shiftRGB(-30) + ")!important}a.quotelink.forwardlink,a.backlink.forwardlink{border-bottom:1px dashed}input:focus,textarea:focus,#qr-filename-container:focus,#qr-filename-container.focus,select:focus,.captcha-root:focus{border:1px solid " + $SS.theme.linkColor.hex + "!important}#search-box:hover,#index-search:hover,.captcha-img:hover{border-color:" + $SS.theme.linkColor.hex + "!important}#header-bar{border:0!important}.flashListing td:not(:last-of-type):not(.postblock){border-width:1px;border-style:solid}:root.header-highlight #custom-board-list .current:hover,:root.header-highlight #custom-board-list .current{border-bottom:0!important}.suboption-list>div:last-of-type{background:rgba(" + $SS.theme.mainColor.rgb + "," + $SS.theme.replyOp + ")!important}.suboption-list>div::before,.suboption-list::before{border-color:" + $SS.theme.brderColor.hex + "!important;left:.5em!important}#navlinks a{text-shadow:" + $SS.theme.mainColor.hex + " -1px -1px," + $SS.theme.mainColor.hex + " 1px -1px," + $SS.theme.mainColor.hex + " -1px 1px," + $SS.theme.mainColor.hex + " 1px 1px," + $SS.theme.mainColor.hex + " -1px 0," + $SS.theme.mainColor.hex + " 1px 0," + $SS.theme.mainColor.hex + " 0 -1px," + $SS.theme.mainColor.hex + " 0 1px,rgba(0,0,0,.6) 0 2px 4px,rgba(0,0,0,.6) 0 0 2px}.thumb{box-shadow:0 0 5px rgba(0,0,0,.25)}#qr,#thread-watcher{box-shadow:1px 1px 3px rgba(0,0,0,.1)!important}.closed{margin-top:10px;color:red}#swf-embed-header.postblock{border:1px solid " + $SS.theme.brderColor.hex + "!important;background-color:rgba(" + $SS.theme.headerBGColor.rgb + "," + $SS.theme.navOp + ")!important;color:" + $SS.theme.linkColor.hex + "!important}#swf-embed-close{right:1px!important}.deleteform,.pages,.pagelist button,#full-board-list{font-size:0!important}.fileText,.summary{font-size:" + (($SS.conf["Font Size"] < 13) ? 10 : ($SS.conf["Font Size"] - 2)) + "px!important}.qr-link{font-size:14px!important}.tab-label,.options-button,.theme-preview,#oneechan-options input,#oneechan-options textarea,.hide-reply-button,.hide-thread-button{font-family:sans-serif!important;font-size:12px!important}.boardBanner .boardTitle{font-weight:400!important;font-size:" + (($SS.conf["Font Size"] < 13) ? 22 : 26) + "px!important}.prettyprint span{font-family:monospace!important;font-size:medium!important}#full-board-list,body>#header-bar,#full-board-list .fourchanx-link{font-size:" + (($SS.conf["Font Size"] < 1) ? 12 : ($SS.conf["Font Size"] - 1)) + "px!important}@media (min-width:1280px) and (max-width:1920px){#board-list{word-spacing:" + (($SS.conf["Font Size"] < 14) ? -1 : -2) + "px}}body,.prev span::after,.prev form::after,.next span::after,.next form::after,.pages a,#qr input.field,#qr:not(.sjis-preview) textarea.field,#qr span.field,#qr-file-button,#qr input[type=submit],#qr select[data-name=thread],#menu .entry,#boardList,#shortcuts,#index-search,#tegaki,select,input,div.next,form.pageSwitcherForm>input[type=submit]{font-family:" + $SS.formatFont($SS.conf["Font Family"]) + ";font-size:" + $SS.conf["Font Size"] + "px!important}#full-board-list a,#custom-board-list,a.qr-link{font-family:" + $SS.formatFont($SS.conf["Font Family"]) + "!important;font-size:" + $SS.conf["Font Size"] + "px!important}#qr .field::-moz-placeholder,::-moz-placeholder{font-family:" + $SS.formatFont($SS.conf["Font Family"]) + "!important;font-size:" + $SS.conf["Font Size"] + "px!important}#qr .field::webkit-input-placeholder,::webkit-input-placeholder{font-family:" + $SS.formatFont($SS.conf["Font Family"]) + "!important;font-size:" + $SS.conf["Font Size"] + "px!important}.backlink{font-size:" + $SS.conf["Backlink Font Size"] + "px!important}:root.info-on-hover .postNum{font-size:0!important}:root.info-on-hover .postContainer:hover .postNum{font-size:" + $SS.conf["Font Size"] + "px!important}#qr-file-button,#qr input[type=submit],#qr label,.captcha-counter{font-size:" + (($SS.conf["Font Size"] < 11) ? 8 : 10) + "px!important}#qr-file-button,#qr input[type=submit],#qr label,.captcha-counter{text-transform:uppercase}#qr label:not(.riceCheck){overflow:hidden;padding-bottom:2px}:root.underline-disabled a{text-decoration:none!important}:root.underline-disabled .filtered{text-decoration:line-through!important}.deadlink.quotelink{text-decoration:none!important}:root.underline-quotes .deadlink.quotelink,:root.underline-quotes .quotelink,:root.underline-quotes .deadlink.backlink,:root.underline-quotes .backlink{text-decoration:underline!important}a.options-button,#oneechan-version a{text-decoration:none!important}.closed{text-align:center}.name,.subject,.option.header .option-title,a.current{font-weight:" + ($SS.conf["Bitmap Font"] ? 4 : 7) + "00!important}.qr-link{font-weight:400}.summary{font-style:" + ($SS.conf["Bitmap Font"] ? 'none' : 'italic') + "}" + ($SS.conf["Sidebar Position"] !== 3 ? " :root:not(.fixed) #header-bar{z-index:10}:root.left-sidebar body{padding-left:303px}:root.right-sidebar body{padding-right:303px}.boardBanner{position:fixed}:root.left-sidebar .boardBanner{left:1px}:root.right-sidebar .boardBanner{right:1px}:root.fixed:not(.autohide):not(.bottom) .boardBanner{margin-top:-6px}:root.right-sidebar #qr{right:0!important;left:auto!important}.captcha-img,.captcha-img img{min-width:100%!important;height:56px!important}:root.vertical-qr:root.left-sidebar #qr{transform:translateX(-100%)}:root.vertical-qr:root.left-sidebar #qr .move{transform:rotate(90deg);transform-origin:bottom right;left:63.5%;bottom:46px}:root.mini-sidebar:root.left-sidebar body{padding-left:32px!important}:root.mini-sidebar:root.right-sidebar body{padding-right:32px!important}:root.mini-sidebar #bannerCnt,:root.mini-sidebar .boardSubtitle{display:none}:root.mini-sidebar:root.ss-sidebar body::before{width:31px!important}:root.mini-sidebar .boardBanner{top:72px!important;width:inherit!important}:root.mini-sidebar .boardBanner .boardTitle{letter-spacing:-1px}:root.mini-sidebar:root.right-sidebar .boardBanner{right:32px;-webkit-transform-origin:top right;transform-origin:top right;-webkit-transform:rotate(-90deg);-moz-transform:rotate(-90deg)}:root.mini-sidebar:root.left-sidebar .boardBanner{left:32px;-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:rotate(90deg);-moz-transform:rotate(90deg)}" : "") + " #qr{box-shadow:none!important;border-radius:0!important;min-width:297px!important;box-shadow:none!important}#qr .close{padding:2px 3px 2px 4px!important}#qr .riceCheck,#qr input[type=checkbox]{margin:0 4px 1px!important;vertical-align:baseline;position:relative;top:3px}#qr-filename-container .riceCheck,#qr-filename-container input[type=checkbox]{margin:0 0 1px!important}#qr-file-button,#qr input[type=submit]{height:25px!important;margin:0!important}#qr-file-button,#qr-filename-container{margin-right:1px!important}#qr-spoiler-label+input[type=submit]{margin-top:1px!important}#qr>form>select{margin:1px 0!important}#qr select[data-name=thread]{margin:1px 0;max-width:133px;min-width:80px}#qr>form>div.persona>input:nth-child(4),#qr>form>div.persona>input:nth-child(5),#qr>form>div.persona>input:nth-child(6){margin-left:1px}:root.expand-inputs .persona{display:flex}:root.expand-inputs .persona .field{flex:1;width:0}:root.expand-inputs .persona .field:hover,:root.expand-inputs .persona .field:focus{flex:3}#qr:not(.has-captcha) textarea{min-height:190px!important}:root.ua-webkit #qr:not(.has-captcha) textarea{min-height:185px!important}:root.ua-webkit #qr.has-captcha textarea.field{height:8.6em;min-height:.6em!important}:root.qr-background #qr{background:transparent!important;border:0}:root.qr-opacity #qr{opacity:.9}.textarea{margin-top:1px;-webkit-margin-after:1px}:root.ua-gecko .textarea{margin-bottom:1px}.captcha-img{min-height:58px!important;margin-bottom:1px}:root.force-qr #qr{max-width:297px}:root.vertical-qr #qr>div>label>div{display:none}:root.vertical-qr #qr textarea{resize:vertical!important;min-width:306px!important}:root.vertical-qr #qr{min-width:297px!important;top:auto!important;position:fixed;right:0!important;left:auto!important}:root.vertical-qr #qr .move{position:absolute;width:105px;cursor:default;padding:2px 0 2px 2px;text-align:center;bottom:88px}:root.vertical-qr #qr:hover .move{transition:opacity .42s linear}:root.vertical-qr #qr:hover .move,:root.vertical-qr #qr.focus .move{opacity:0!important}:root.vertical-qr.bottom-header #qr{bottom:28px!important}:root.vertical-qr.top-header #qr{bottom:0!important}:root.vertical-qr .captcha-img,:root.vertical-qr .captcha-img img{max-width:247px}:root.vertical-qr #qr form{display:block!important}:root.vertical-qr #qr .move #autohide,:root.vertical-qr #qr>div>select{display:none}:root.vertical-qr #qr:hover,:root.vertical-qr #qr.focus{transform:translateX(0%)!important}:root.left-sidebar #qr{left:0!important;right:auto!important}:root.vertical-qr #qr{transform:translateX(100%);transition:transform .3s ease-in-out .1s}:root.vertical-qr #qr .move{transform:rotate(-90deg);right:86%}:root.fade-qr #qr form{display:block!important}:root.fade-qr #qr.autohide:not(.focus):not(:hover){opacity:.2!important;transition:opacity .2s ease-in-out 1s}input[type=number]{-moz-appearance:textfield}::-webkit-inner-spin-button{-webkit-appearance:none}::-webkit-outer-spin-button{-webkit-appearance:none}.closeIcon{background-image:none!important}.watch-thread-link{margin-bottom:-7px;margin-right:2px;top:auto!important;bottom:4px!important;background-image:url(\"data:image/svg+xml," + $SS.theme.icons.star + "\")!important}:root.backlink-icon .backlink{background-image:url(\"data:image/svg+xml," + $SS.theme.icons.backlink + "\")!important;font-size:0!important;padding:" + (($SS.conf["Font Size"] < 12) ? 5 : 6) + "px!important;margin-right:0!important;opacity:.6!important;position:relative;bottom:5px;left:2px}:root.backlink-icon .backlink.inlined{background-image:url(\"data:image/svg+xml," + $SS.theme.icons.downArrow + "\")!important;font-size:0!important;padding:6px!important;margin-right:0!important;opacity:.6!important;position:relative;bottom:5px;left:3px}:root.backlink-icon .reply .backlink{bottom:" + (($SS.conf["Font Size"] < 12) ? 4 : 6) + "px!important}:root.backlink-icon .backlink:hover,:root.backlink-icon .backlink.inlined:hover{opacity:1!important}img[title=Closed],img[title=Sticky],img[title=Archived]{color:transparent!important;font-size:0!important;background-color:transparent!important;background-position:center!important;background-repeat:no-repeat;display:inline-block;height:0!important;padding-top:16px!important;text-indent:-9999px!important;vertical-align:bottom;width:16px!important}:root.no-pu .n-pu{vertical-align: middle;display: inline-block;width: 16px;height: 16px;margin-top: -2px;background: url(//s.4cdn.org/image/minileaf.gif);}:root.fit-eximg:root.fit-height .full-image{max-height: calc(100vh - 8rem)!important}.closedIcon{background-image:url(\"data:image/svg+xml," + $SS.theme.icons.threadClosed + "\")!important}.stickyIcon{background-image:url(\"data:image/svg+xml," + $SS.theme.icons.threadPinned + "\")!important}.archivedIcon{background-image:url(\"data:image/svg+xml," + $SS.theme.icons.threadArchived + "\")!important}.exlinksOptionsLink.entry{padding:0!important;min-width:0!important}:root.left-sidebar .exlinksOptionsLink.entry{left:2px!important}:root.right-sidebar .exlinksOptionsLink.entry{right:2px!important}:root.hl-border .post.reply,:root.op-background.hl-border .postContainer.opContainer{border-left:" + $SS.conf["Width Decoration"] + "px " + $SS.conf["Highlight Style"] + " rgba(" + $SS.theme.postHLColor.rgb + ",1)!important}:root.hl-border-down .post.reply,:root.op-background.hl-border-down .postContainer.opContainer{border-bottom:" + $SS.conf["Width Decoration"] + "px " + $SS.conf["Highlight Style"] + " rgba(" + $SS.theme.postHLColor.rgb + ",1)!important}:root.hl-outline .post.reply,:root.op-background.hl-outline .postContainer.opContainer{outline:" + $SS.conf["Width Decoration"] + "px " + $SS.conf["Highlight Style"] + " rgba(" + $SS.theme.postHLColor.rgb + ",1)}.filter-highlight .catalog-thumb{box-shadow:0 0 3px 3px rgba(" + $SS.theme.postHLColor.rgb + ",.5)!important}.filter-highlight.opContainer,.filter-highlight>.reply{box-shadow:5px 0 rgba(" + $SS.theme.postHLColor.rgb + ",.5) inset!important}.filter-highlight>div.sideArrows{color:rgba(" + $SS.theme.postHLColor.rgb + ",.5)!important}.qphl{outline:2px solid rgba(" + $SS.theme.linkColor.rgb + ",.5)!important}:root.highlight-you .quotesYou.opContainer,:root.highlight-you .quotesYou>.reply{border-left:" + $SS.conf["Width Decoration"] + "px solid rgba(" + $SS.theme.quotesYouHLColor.rgb + ",1)!important}:root.highlight-you .quotesYou>.sideArrows{color:rgba(" + $SS.theme.quotesYouHLColor.rgb + ",1)!important}:root.highlight-own .yourPost.opContainer,:root.highlight-own .yourPost>.reply{border-left:" + $SS.conf["Width Decoration"] + "px dashed rgba(" + $SS.theme.ownPostHLColor.rgb + ",1)!important}:root.highlight-own .yourPost>.sideArrows{color:rgba(" + $SS.theme.ownPostHLColor.rgb + ",1)!important}.reply:target{background:rgba(" + $SS.theme.replybgHLColor.rgb + ",.8)!important}.highlight{outline:2px solid rgba(" + $SS.theme.replyslctColor.rgb + ",1)!important}.catalog-thread.watched .catalog-thumb,.catalog-thread.watched .werkTyme-filename{border:2px solid rgba(" + $SS.theme.postHLColor.rgb + ",1)!important}.replies-quoting-you>.watcher-link{color:rgba(" + $SS.theme.quotesYouHLColor.rgb + ",1)!important}.replies-quoting-you>.watcher-link:hover{color:" + $SS.theme.linkHColor.hex + "!important}#watched-threads>.replies-quoting-you>a{color:rgba(" + $SS.theme.quotesYouHLColor.rgb + ",1)!important}#shortcuts>.shortcut>#watcher-link.disabled.replies-quoting-you{color:rgba(" + $SS.theme.quotesYouHLColor.rgb + ",.45)!important}#watched-threads>.replies-quoting-you>a:hover,#shortcuts>.shortcut>#watcher-link.disabled.replies-quoting-you:hover{color:" + $SS.theme.linkHColor.hex + "!important}#add-theme,#oneechan-options{border:0!important;border-radius:3px!important;position:fixed;margin:auto}#oneechan-options{width:690px;text-align:left!important;height:532px;top:0;bottom:0;left:0;right:0;box-shadow:rgba(0,0,0,.6) 0 0 10px!important;padding:5px}.options-close,#options-container:not(.yui-skin-sam){padding:3px}#options-container:not(.yui-skin-sam){box-shadow:inset rgba(0,0,0,.3) 0 0 5px}.options-close{text-align:right!important;margin-right:auto;margin-left:auto}#add-theme{padding:20px!important;top:0;left:0;right:0;bottom:0;height:445px}:root.ua-webkit #add-theme{height:403px!important}#add-theme .option-title{float:left;line-height:22px;padding-left:5px}#add-theme>label{line-height:22px}#options-container:not(.yui-skin-sam){border-radius:5px}#options-container:not(.yui-skin-sam),.options-section{height:500px}.options-section{overflow-y:auto;overflow-x:hidden}#main-section .option{display:block;border-top:1px solid rgba(0,0,0,.1);height:22px;padding:0 6px;vertical-align:middle}#main-section>.option:nth-of-type(even){background:rgb\(" + $SS.theme.mainColor.shiftRGB(-5) + ")!important}#main-section .buttons-container+.option{border-top:0!important}.option-title{line-height:20px!important}#main-section .option:first-child{border-top:0!important}#main-section .option:last-child{border-bottom:0!important}#main-section input,#main-section select{float:right!important}#main-section input[type=checkbox],#main-section .riceCheck{float:left!important;margin-right:5px!important}select[name='Font Family']>option{max-width:150px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.suboption::before{border-bottom:1px solid rgba(0,0,0,.1);border-left:1px solid rgba(0,0,0,.1);content:'';display:inline-block;float:left;margin-right:2px;height:50%;width:6px}.suboption{padding-left:16px!important}.option.header{cursor:auto!important}.theme-preview{cursor:default}.theme-preview blockquote{margin:12px 40px!important}#themes-section .reply{padding:2px!important;position:relative;text-align:left;width:99.4%;border-radius:0!important}.theme-buttons-container{bottom:4px;right:2px;margin:0;opacity:0;position:absolute;z-index:3}.theme-preview:hover .theme-buttons-container{opacity:1}.theme-buttons-container>a{display:inline-block;margin:0 2px;padding:2px 5px;text-align:center;width:50px;border-radius:3px}.theme-preview .sfw-label{bottom:-5px;font-size:32px!important;margin:0!important;opacity:0;position:absolute;right:300px}.theme-preview.selected:not(.nsfw) .sfw-label,.theme-preview.nsfw:not(.selected) .sfw-label,.theme-preview.nsfw.selected .both{transition:opacity .3s,right .3s}.theme-preview.nsfw .notsafe{opacity:1;right:3px;z-index:1}.theme-preview.selected .safe{opacity:1;right:3px;z-index:1}.theme-preview.selected.nsfw .sfw-label:not(.both){opacity:0!important;right:300px!important;z-index:0!important}.theme-preview.selected.nsfw .both{opacity:1;right:3px;z-index:1}#add-theme{text-align:left!important;width:800px!important}#add-theme>label{display:inline-block;text-align:right;width:33.3%}#add-theme>label#customCSS{width:100%}#add-theme>label#customCSS>textarea{height:9.5em;resize:vertical;width:99%;max-height:25em}#add-theme>label>input[type=text],#add-theme>label>select{width:100px}#add-theme>div{margin-top:.6em;text-align:right}#options-tabs{list-style:none;margin:0;padding:0;position:absolute;top:-24px;left:-1px}.tab-item{float:left;margin:0;padding:0}.tab-label{display:block;height:16px;margin:0 1px;padding:5px;text-align:center;width:75px;border-radius:3px 3px 0 0;transition:all .1s ease-in-out}.tab-label:not(.selected):not(:hover){opacity:.8}#overlay{z-index:99!important;background-color:rgba(0,0,0,.3)!important}#overlay2{background:rgba(0,0,0,.1)!important;position:fixed;top:0;left:0;height:100%;width:100%;text-align:center;z-index:125!important}#overlay2::before{content:'';display:inline-block;height:100%;vertical-align:middle}#overlay.previewing{display:none}#overlay.previewing~#overlay2{background-color:rgba(0,0,0,.1)!important}.buttons-container{bottom:3px;left:5px;position:absolute}.buttons-container{margin:0}.options-button{display:inline-block;line-height:18px;margin:0 2px;min-width:40px;padding:2px 10px;text-align:center;cursor:pointer;border-radius:3px}.options-button-small{padding:2px 5px;min-width:30px}#import-link{line-height:22px;overflow:hidden;position:relative;float:left;height:24px!important;margin-top:-2px;padding-top:2px}#import-settings{position:relative;overflow:hidden;vertical-align:bottom}#import-settings>.import-input{left:0}.import-input{position:absolute;opacity:0;cursor:pointer}label.option>input[type=checkbox],label.option>.riceCheck{margin:4px 2px 0!important;vertical-align:bottom!important}span.option>select,.option>input[type=text]{width:125px}#oneechan-options input[type=text],#oneechan-options select{max-height:20px;margin-top:1px!important;padding:0 3px!important}#oneechan-options textarea{background:transparent!important;border:0!important;height:100%!important;width:100%!important;resize:none}#oneechan-version{opacity:.5;padding-right:5px;padding-left:40px;font-size:x-small}.link-delim{opacity:.4}.catalog-thread{margin:5px!important}.extended-small .teaser,.extended-large .teaser{margin-left:5px;margin-right:5px}.pages.cataloglink{margin-left:12px;border-radius:3px}.pages.cataloglink a{color:" + $SS.theme.textColor.hex + "!important;font-weight:700}.pages.cataloglink a:hover{color:" + $SS.theme.textColor.hex + "!important;opacity:.7!important;transition:opacity .3s ease-in 0s}:root.catalog-justify .teaser,:root.catalog-justify .catalog-thread>.comment{text-align:justify!important}:root.catalog-background #threads div.thread,:root.catalog-background .catalog-thread{background:rgba(" + $SS.theme.mainColor.rgb + "," + $SS.theme.replyOp + ")!important}:root.catalog-background .teaser,:root.catalog-background .catalog-thread>.comment{margin:0 5px 5px}:root.catalog-background .thumb,:root.catalog-background img.catalog-thumb{margin-top:8px}:root.catalog-thumbsize .thumb,:root.catalog-thumbsize img.catalog-thumb{width:150px!important;height:150px!important}" + $SS.theme.customCSS + "";

            if (reload)
                $("#ch4SS").text(css);
            else
                $(document.head).append($("<style type='text/css' id=ch4SS>").text(css));
        },
        QRDialogCreationHandler: function(e) {
            var qr = e.target;

            $("input[type=checkbox]", qr).riceCheck();

            $SS.QRhandled = true;
        },
        NodeInsertionHandler: function(e) {
            var settings = e.target;
            $("input[type=checkbox]", settings).riceCheck();
        },
        /* CONFIG */
        Config: {
            hasGM: typeof GM_deleteValue !== "undefined",
            init: function() {
                var parseVal = function(key, val) {
                    if (/^(Selected|Hidden)+\s(Mascots|Themes?)+$/.test(key)) {
                        if (key === "Selected Theme")
                            return parseInt(val);
                        else if (key === "NSFW Theme")
                            return parseInt(val);
                        else if (key === "Selected Mascots" && val === 0)
                            return 0;

                        for (var i = 0, MAX = val.length, ret = []; i < MAX; ++i)
                            ret[i] = parseInt(val[i]);

                        return ret;
                    }

                    return (Array.isArray(val) && typeof val[0] !== "object") ? val[0] : val;
                };

                $SS.conf = [];
                $SS.exportOptions = {};

                for (var key in defaultConfig) {
                    $SS.conf[key] = parseVal(key, this.get(key));
                    if (!(/^(Hidden|Themes|Selected Mascots|::)/.test(key))) {
                        $SS.exportOptions[key] = $SS.conf[key];
                    };
                };
                $SS.conf["Margin Left"] = $SS.conf["Left Margin"] !== 999 ? $SS.conf["Left Margin"] : $SS.conf["Custom Left Margin"];
                $SS.conf["Margin Right"] = $SS.conf["Right Margin"] !== 999 ? $SS.conf["Right Margin"] : $SS.conf["Custom Right Margin"];
                $SS.conf["Margin Post Message"] = $SS.conf["Post Message Margin"] === 1 ? "4px 16px" : ($SS.conf["Post Message Margin"] === 3 ? "20px 40px" : "");
                $SS.conf["Width Decoration"] = $SS.conf["Decoration Width"] !== 999 ? $SS.conf["Decoration Width"] : $SS.conf["Custom Decoration Width"];
            },
            get: function(name) {
                var val = this.hasGM ?
                    GM_getValue(NAMESPACE + name) :
                    localStorage.getItem(NAMESPACE + name);

                if (val != undefined)
                    return JSON.parse(val);

                return defaultConfig[name];
            },
            set: function(name, val) {
                name = NAMESPACE + name;

                if (typeof val !== "number")
                    val = JSON.stringify(val);

                return this.hasGM ?
                    GM_setValue(name, val) :
                    localStorage.removeItem(name, val),
                    localStorage.setItem(name, val);
            }
        },

        /* OPTIONS */
        options: {
            saveAndClose: false,
            init: function() {
                $(document).bind("keydown", $SS.options.keydown);

                var a = $("<span class='shortcut brackets-wrap'><a id='StyleChanLink' title='StyleChan Settings' class='fa fa-gears' href='javascript:;'>StyleChan</a></span>").bind("click", $SS.options.show);
                /* seaweedchan */
                    b = $("<span id='StyleChanLink'> [<a title='StyleChan Settings' href='javascript:;'>StyleChan</a>]&nbsp;</span>").bind("click", $SS.options.show); /* loadletter */

                /* loadletter */
                b = $("<span id='OneeChanLink'> [<a title='OneeChan Settings' href='javascript:;'>OneeChan</a>]&nbsp;</span>").bind("click", $SS.options.show);

                $.asap(function() {
                    return $(".fourchan-x #shortcuts, .fourchan_x, .is_catalog").exists();
                }, function() {
                    $(".fourchan-x").exists() ? $(".shortcut.brackets-wrap:last-of-type").before(a) : $("#boardNavDesktop").append(b);
                });

            },
            show: function() {
                if ($("#overlay").exists())
                    $SS.options.close();
                else {
                    var overlay = $("<div id=overlay>").bind("click", $SS.options.close),
                        tOptions = $("<div id='oneechan-options' class=dialog>").bind("click", function(e) {
                            return e.stopPropagation();
                        }),
                        optionsHTML = "<ul id=options-tabs>" +
                        "<li class='tab-item'><label class='tab-label selected' for=main-select>Main</label></li>" +
                        "<li class='tab-item'><label class='tab-label' for=themes-select>Themes</label></li>" +
                        "</ul><div id=options-container><input type=radio class=tab-select name=tab-select id=main-select hidden checked><div id='main-section' class='options-section'>" +
                        "<p class='buttons-container'>" +
                        "<a class='options-button' title='Export your settings as JSON.' name=Export>Export</a><a class='options-button' id='import-settings'><input type=file class='import-input' riced=true accept='application/json'>Import</a><a class='options-button' title='Reset StyleChan settings.' name=resetSettings>Reset</a>" +
                        "<span id=oneechan-version><span>StyleChan</span> v" + VERSION + "<span class=link-delim> | </span>" +
                        "<a href='https://gist.github.com/3nly/15b01b589a2644285c33203d4b4fafcc/revisions?diff=unified&w=' id=changelog-link target='_blank' title='Read the changelog.'>Changelog</a><span class=link-delim> | </span>" +
                        "<a href='https://gist.github.com/3nly/15b01b589a2644285c33203d4b4fafcc#gistcomment-3921546' id=issues-link target='_blank' title='Report an issue.'>Issues</a></p>",
                        key, val, des;

                    for (key in defaultConfig) {
                        if (/^(Selected|Hidden)+\s(Themes?)+$/.test(key))
                            continue;

                        val = $SS.conf[key];
                        des = defaultConfig[key][1];

                        if ((defaultConfig[key][4] === true) && (key === "Custom Left Margin")) {
                            var pVal = $SS.conf[defaultConfig[key][2]];
                            id = defaultConfig[key][2].replace(/\s/g, "_") + defaultConfig[key][3];
                            optionsHTML += "<span class='option suboption " + id + "' title=\"" + des + "\"" +
                                (pVal != defaultConfig[key][3] ? "hidden" : "") + "><span class='option-title'>" + key +
                                "</span><input name='Custom Left Margin' type=text value=" + $SS.conf["Custom Left Margin"] + "px></span>";
                        } else if ((defaultConfig[key][4] === true) && (key === "Custom Right Margin")) {
                            var pVal = $SS.conf[defaultConfig[key][2]];
                            id = defaultConfig[key][2].replace(/\s/g, "_") + defaultConfig[key][3];
                            optionsHTML += "<span class='option suboption " + id + "' title=\"" + des + "\"" +
                                (pVal != defaultConfig[key][3] ? "hidden" : "") + "><span class='option-title'>" + key +
                                "</span><input name='Custom Right Margin' type=text value=" + $SS.conf["Custom Right Margin"] + "px></span>";
                        } else if ((defaultConfig[key][4] === true) && (key === "Custom Decoration Width")) {
                            var pVal = $SS.conf[defaultConfig[key][2]];
                            id = defaultConfig[key][2].replace(/\s/g, "_") + defaultConfig[key][3];
                            optionsHTML += "<span class='option suboption " + id + "' title=\"" + des + "\"" +
                                (pVal != defaultConfig[key][3] ? "hidden" : "") + "><span class='option-title'>" + key +
                                "</span><input name='Custom Decoration Width' type=text value=" + $SS.conf["Custom Decoration Width"] + "px></span>";
                        } else if (val === "header") {
                            optionsHTML += "<label class='option header'><span class='option-title'>" + key + "</span></label>";
                        } else if (defaultConfig[key][4] === true) // sub-option
                        {
                            var pVal = $SS.conf[defaultConfig[key][2]];
                            id = defaultConfig[key][2].replace(/\s/g, "_") + defaultConfig[key][3];
                            optionsHTML += "<label class='option suboption " + id + "' title=\"" + des + "\"" +
                                (pVal != defaultConfig[key][3] ? "hidden" : "") + "><span class='option-title'>" + key +
                                "</span><input" + (val ? " checked" : "") + " name='" + key + "' type=checkbox></label>";
                        } else if (Array.isArray(defaultConfig[key][2])) // select
                        {
                            var opts = key === "Font Family" ? $SS.fontList || defaultConfig[key][2] : defaultConfig[key][2],
                                cFonts = [];
                            optionsHTML += "<label class=option title=\"" + des + "\"><span class='option-title'>" + key + "</span>" +
                                "<select name='" + key + "'" + (defaultConfig[key][3] === true ? " has-suboption" : "") + ">";

                            for (var i = 0, MAX = opts.length; i < MAX; ++i) {
                                var name, value;

                                if (typeof opts[i] === "object") {
                                    name = opts[i].name;
                                    value = opts[i].value;
                                } else
                                    name = value = opts[i];

                                if (key === "Font Family") cFonts.push(value);

                                optionsHTML += "<option" + (key === "Font Family" ? " style=\"font-family:" + $SS.formatFont(value) + "!important\"" : "") +
                                    " value='" + value + "'" + (value == val ? " selected" : "") + ">" + name + "</option>";
                            }

                            if (key === "Font Family" && cFonts.indexOf($SS.conf["Font Family"]) == -1)
                                optionsHTML += "<option style=\"font-family:" + $SS.formatFont($SS.conf["Font Family"]) + "!important\" value='" + $SS.conf["Font Family"] + "' selected>" + $SS.conf["Font Family"] + "</option>";

                            optionsHTML += "</select></label>";
                        } else if (key === "Font Size") {
                            optionsHTML += "<label class='option visible' title=\"" + des + "\"><span class='option-title'>" + key + "</span>" +
                                "<input type=text name='Font Size' value=" + $SS.conf["Font Size"] + "px></label>";
                        } else if (key === "Backlink Font Size") {
                            optionsHTML += "<label class='option visible' title=\"" + des + "\"><span class='option-title'>" + key + "</span>" +
                                "<input type=text name='Backlink Font Size' value=" + $SS.conf["Backlink Font Size"] + "px></label>";
                        } else if (key === "Themes") {
                            optionsHTML += "</div><input type=radio class=tab-select name=tab-select class=tab-select  id=themes-select hidden><div id='themes-section' class='options-section'>";
                        } else // checkbox
                            optionsHTML += "<label class=option title=\"" + des + "\"><span class='option-title'>" + key + "</span><input" + (val ? " checked" : "") +
                            " name='" + key + "' " + (defaultConfig[key][3] === true ? " has-suboption" : "") + " type=checkbox></label>";
                    }

                    optionsHTML += "</div></div><div class='options-close'><a class='options-button' name=save>Save</a><a class='options-button' name=cancel>Cancel</a></div>";
                    tOptions.html(optionsHTML);
                    overlay.append(tOptions);

                    $(".import-input", tOptions).bind("change", function() {
                        var file = this.files[0],
                            reader = new FileReader(),
                            key, imported, val;
                        if (this.files[0].name.match(/\.json$/) == null) {
                            alert('Only JSON files are accepted!');
                            return;
                        } else if (!confirm('Your current settings will be entirely overwritten, are you sure?')) {
                            return;
                        }
                        reader.onload = (function(tFile) {
                            return function(e) {
                                try {
                                    imported = JSON.parse(e.target.result);
                                } catch (err) {
                                    alert("Invalid settings file!");
                                    return;
                                }

                                for (key in imported) {
                                    val = imported[key];
                                    $SS.Config.set(key, val);
                                }

                                if (confirm('Import successful. Refresh now?')) {
                                    return window.location.reload();
                                }

                            }
                        })(file);

                        reader.readAsText(file);
                    });
                    $("a[name=Export]", tOptions).bind("click", function() {
                        if ($("a[download]", tOptions).exists())
                            return;
                        var exportalert = $("<a class='options-button'download='StyleChan v" + VERSION + " Settings.json' href='data:application/json," + encodeURIComponent(JSON.stringify($SS.exportOptions, null, 2)) + "'>Save me!").bind("click", $SS.options.close);
                        return $(this).replace(exportalert);
                    });
                    // Reset settings
                    $("a[name=resetSettings]", tOptions).bind("click", function() {
                        var confirmReset = confirm('Your current StyleChan settings will be wiped, are you sure?');
                        if (confirmReset) {
                            if (typeof GM_deleteValue !== "undefined") {
                                var keys = GM_listValues();
                                for (var i = 0, key = null; key = keys[i]; i++) {
                                    GM_deleteValue(key);
                                }
                            } else if ($SS.browser.webkit) {
                                Object.keys(localStorage).forEach(function(key) {
                                    if (/^(?:StyleChan)/.test(key)) {
                                        localStorage.removeItem(key);
                                    }
                                })
                            }
                            alert('Your StyleChan settings have been reset. Reloading.');
                            return window.location.reload();
                        } else return;
                    });
                    // options window
                    $(".tab-label", tOptions).bind("click", function(e) {
                        if ($(this).hasClass("selected")) return;

                        $(".tab-label.selected").removeClass("selected");
                        $(this).addClass("selected");
                    });
                    $("[has-suboption]", tOptions).bind("change", function() {
                        var id = this.name.replace(/\s/g, "_") + $(this).val(),
                            sub = $("." + id);

                        if (sub.exists())
                            sub.each(function() {
                                $(this).show();
                            });
                        else
                            $("[class*='" + this.name.replace(/\s/g, "_") + "']").each(function() {
                                $(this).hide();
                            });
                    });
                    $("a[name=save]", tOptions).bind("click", function() {
                        $SS.options.saveAndClose = true;
                        $SS.options.save();
                        $SS.options.saveAndClose = false;
                    });
                    $("a[name=cancel]", tOptions).bind("click", $SS.options.close);

                    // main tab
                    $("input[name='Font Size']", tOptions).bind("keydown", function(e) {
                        var val = parseInt($(this).val()),
                            bitmap = $(this).parent().nextSibling().children("input[name='Bitmap Font']").val();

                        if (e.keyCode === 38 && (val < MAX_FONT_SIZE || bitmap))
                            $(this).val(++val + "px");
                        else if (e.keyCode === 40 && (val > MIN_FONT_SIZE || bitmap))
                            $(this).val(--val + "px");
                    });

                    // themes tab
                    $SS.options.createThemesTab(tOptions);

                    return $(document.body).append(overlay);
                }
            },
            createThemesTab: function(tOptions) {
                var themes = $("#themes-section", tOptions).html(""),
                    p = $("<p class='buttons-container'>");

                p.append($("<a class='options-button' name=addTheme title='Create a new theme.'>Create", tOptions).bind("click", $SS.options.showTheme));
                p.append($("<a class='options-button' href='https://github.com/nebukazar/StyleChan/wiki/Custom-Themes' title='Learn more about custom themes and download new ones.' target='_blank'>Custom Themes"));
                p.append($("<div id='import-link' title='Import a new theme (.json) file.'>").append($("<input type=file class='import-input' riced=true>")
                    .bind("change", function() {
                        var file = this.files[0],
                            reader = new FileReader(),
                            val, first, valid = true,
                            theme, div, index, imported;

                        reader.onload = (function(tFile) {
                            return function(e) {
                                try {
                                    theme = JSON.parse(e.target.result);
                                } catch (err) {
                                    alert("Invalid theme file!");
                                    return;
                                }

                                /* Check if this is an StyleChan v5 file, do nothing if so */
                                if (theme["headerColor"] !== undefined) {}

                                /* Old StyleChan */
                                else if (theme["navOp"] !== undefined) {
                                    theme.unreadColor = theme["jlinkColor"];
                                    theme.headerColor = theme["textColor"];
                                    theme.headerBGColor = theme["mainColor"];
                                    theme.headerLColor = theme["linkColor"];
                                    theme.headerLHColor = theme["linkHColor"];
                                    theme.boardColor = theme["textColor"];
                                }

                                /* 4chan Style Script */
                                else if (theme["timeColor"] !== undefined) {
                                    theme.replyOp = "1.0";
                                    theme.navOp = "0.9";
                                    theme.unreadColor = theme["jlinkColor"];
                                    theme.headerColor = theme["textColor"];
                                    theme.headerBGColor = theme["mainColor"];
                                    theme.headerLColor = theme["linkColor"];
                                    theme.headerLHColor = theme["linkHColor"];
                                    theme.boardColor = theme["textColor"];
                                    theme.bgImg = $SS.validImageURL(theme["bgImg"]) ? theme["bgImg"] : false;
                                }

                                /* Appchan X */
                                else if (theme["Theme"] !== undefined) {
                                    theme.name = theme["Theme"];
                                    theme.authorName = theme["Author"];
                                    theme.authorTrip = theme["Author Tripcode"];
                                    theme.replyOp = "1.0";
                                    theme.navOp = "0.9";
                                    theme.bgImg = theme["Background Image"];
                                    theme.mainColor = $SS.colorToHex(theme["Reply Background"]);
                                    theme.textColor = $SS.colorToHex(theme["Text"]);
                                    theme.linkColor = $SS.colorToHex(theme["Links"]);
                                    theme.linkHColor = $SS.colorToHex(theme["Hovered Links"]);
                                    theme.headerColor = $SS.colorToHex(theme["Text"]);
                                    theme.headerBGColor = $SS.colorToHex(theme["Navigation Background"]);
                                    theme.headerLColor = $SS.colorToHex(theme["Navigation Links"]);
                                    theme.headerLHColor = $SS.colorToHex(theme["Hovered Navigation Links"]);
                                    theme.boardColor = $SS.colorToHex(theme["Board Title"]);
                                    theme.brderColor = $SS.colorToHex(theme["Reply Border"]);
                                    theme.inputColor = $SS.colorToHex(theme["Input Background"]);
                                    theme.inputbColor = $SS.colorToHex(theme["Input Border"]);
                                    theme.bgColor = $SS.colorToHex(theme["Background Color"]);
                                    theme.blinkColor = $SS.colorToHex(theme["Backlinks"]);
                                    theme.unreadColor = $SS.colorToHex(theme["Links"]);
                                    theme.nameColor = $SS.colorToHex(theme["Names"]);
                                    theme.tripColor = $SS.colorToHex(theme["Tripcodes"]);
                                    theme.titleColor = $SS.colorToHex(theme["Subjects"]);
                                    theme.quoteColor = $SS.colorToHex(theme["Greentext"]);
                                    theme.qlColor = $SS.colorToHex(theme["Quotelinks"]);
                                    theme.replybgHLColor = $SS.colorToHex(theme["Highlighted Reply Background"]);
                                    theme.replyslctColor = $SS.colorToHex(theme["Highlighted Reply Background"]);
                                    theme.customCSS = theme["Custom CSS"];
                                }

                                /* Can't be exported from the main scripts, so toss an error */
                                else {
                                    alert("Invalid theme file!");
                                    return;
                                }

                                index = $SS.conf["Themes"].push(theme);
                                theme = new $SS.Theme(--index);
                                div = theme.preview();
                                $("#overlay #themes-section").append(div);
                                div.fire("click").scrollIntoView(true);
                            }
                        })(file);

                        reader.readAsText(file);
                    })).append($("<span class='options-button'>Import")));
                p.append($("<a class='options-button' name=restoreThemes title='Restore hidden default themes'>Restore", tOptions)
                    .bind("click", function() {
                        $SS.conf["Hidden Themes"] = [];
                        $("#themes-section>div[hidden]").show();
                    })
                );

                if ($SS.conf["Hidden Themes"].length === 0)
                    $("a[name=restoreThemes]", p).hide();

                themes.append(p);

                for (var i = 0, MAX = $SS.conf["Themes"].length, tTheme; i < MAX; ++i) {
                    tTheme = new $SS.Theme(i);
                    themes.append(tTheme.preview());
                }
            },
            close: function() {
                return $("#overlay").remove();
            },
            keydown: function(e) {
                if (e.ctrlKey && e.keyCode === 112) {
                    e.preventDefault();
                    e.stopPropagation();
                    $SS.options.show();
                }
            },
            save: function() {
                var div = $("#oneechan-options"),
                    themes = [],
                    selectedMascots = [],
                    nsfwTheme,
                    selectedTheme;

                // Save main
                $("#oneechan-options input[name]:not(.tab-select), #oneechan-options select").each(function() {
                    var name = $(this).attr("name"),
                        val = $(this).val();

                    if (name === "Font Size") {
                        val = parseInt(val);

                        if (!$("input[name='Bitmap Font']", div).val())
                            val = Math.max(Math.min(val, MAX_FONT_SIZE), MIN_FONT_SIZE);
                    } else if (name === "Custom Right Margin") {
                        val = parseInt(val);
                    } else if (name === "Custom Left Margin") {
                        val = parseInt(val);
                    } else if (name === "Custom Decoration Width") {
                        val = parseInt(val);
                    } else if (name === "Backlink Font Size") {
                        val = parseInt(val);
                    }

                    $SS.Config.set($(this).attr("name"), val);
                });

                // Save Themes
                $("#oneechan-options #themes-section>div").each(function(index) {
                    var oldIndex = parseInt(this.id.substr(5));
                    if (!$SS.conf["Themes"][oldIndex].default)
                        themes.push($SS.conf["Themes"][oldIndex]);
                });

                selectedTheme = (selectedTheme = $("#oneechan-options #themes-section>div.selected")).exists() ?
                    parseInt(selectedTheme.attr("id").substr(5)) : 0;

                nsfwTheme = (nsfwTheme = $("#oneechan-options #themes-section>div.nsfw")).exists() ?
                    parseInt(nsfwTheme.attr("id").substr(5)) : 0;

                $SS.Config.set("Themes", themes);
                $SS.Config.set("Selected Theme", selectedTheme);
                $SS.Config.set("NSFW Theme", nsfwTheme);
                $SS.Config.set("Hidden Themes", $SS.conf["Hidden Themes"]);

                if ($SS.options.saveAndClose)
                    $SS.options.close();

                return $SS.init(true);
            },
            showTheme: function(tIndex) {
                var div, overlay;

                if (typeof tIndex === "number") {
                    var bEdit = true,
                        tEdit = $SS.conf["Themes"][tIndex],
                        RPA, themeR, themePY, themePX, themeA;

                    if (tEdit.bgImg && tEdit.bgRPA) {
                        RPA = tEdit.bgRPA.split(" ");
                        themeR = RPA[0];
                        themePY = RPA[1];
                        themePX = RPA[2];
                        themeA = RPA[3];
                    }
                }

                div = $("<div id='add-theme' class='dialog'>");

                var innerHTML = "<label>" +
                    "<span class='option-title'>Theme Name:</span><input type=text name=name value='" + (bEdit ? tEdit.name : "") + "'>" +
                    "</label><label>" +
                    "<span class='option-title'>Author Name:</span><input type=text name=authorName value='" + (bEdit ? (tEdit.authorName !== undefined ? tEdit.authorName : "") : "") + "'>" +
                    "</label><label>" +
                    "<span class='option-title'>Author Tripcode:</span><input type=text name=authorTrip value='" + (bEdit ? (tEdit.authorTrip !== undefined ? tEdit.authorTrip : "") : "") + "'>" +
                    "</label><label>" +
                    "<span class='option-title'>BG Image:</span><input type=text name=bgImg value=" + (bEdit ? ($SS.validImageURL(tEdit.bgImg) ? tEdit.bgImg + "" : ($SS.validBase64(tEdit.bgImg) ? tEdit.bgImg : "")) : "") + "></label><label>" +
                    "<span class='option-title'>BG Repeat:</span><select name=bgR>" +
                    "<option" + (bEdit && themeR === "no-repeat" ? " selected" : "") + ">no-repeat</option>" +
                    "<option" + (bEdit && themeR === "repeat" ? " selected" : "") + ">repeat</option>" +
                    "<option" + (bEdit && themeR === "repeat-x" ? " selected" : "") + ">repeat-x</option>" +
                    "<option" + (bEdit && themeR === "repeat-y" ? " selected" : "") + ">repeat-y</option>" +
                    "</select></label><label>" +
                    "<span class='option-title'>BG Attachment:</span><select name=bgA>" +
                    "<option" + (bEdit && themeA === "fixed" ? " selected" : "") + ">fixed</option>" +
                    "<option" + (bEdit && themeA === "scroll" ? " selected" : "") + ">scroll</option>" +
                    "</select></label><label>" +
                    "<span class='option-title'>BG Position-X:</span><select name=bgPX>" +
                    "<option" + (bEdit && themePX === "left" ? " selected" : "") + ">left</option>" +
                    "<option" + (bEdit && themePX === "center" ? " selected" : "") + ">center</option>" +
                    "<option" + (bEdit && themePX === "right" ? " selected" : "") + ">right</option>" +
                    "</select></label><label>" +
                    "<span class='option-title'>BG Position-Y:</span><select name=bgPY>" +
                    "<option" + (bEdit && themePY === "top" ? " selected" : "") + ">top</option>" +
                    "<option" + (bEdit && themePY === "center" ? " selected" : "") + ">center</option>" +
                    "<option" + (bEdit && themePY === "bottom" ? " selected" : "") + ">bottom</option>" +
                    "</select></label><label>" +
                    "<span class='option-title'>Reply Opacity:</span><input type=text name=replyOp value='" + (bEdit ? tEdit.replyOp : "1.0") + "'></label><label>" +
                    "<span class='option-title'>Header Opacity:</span><input type=text name=navOp value='" + (bEdit ? tEdit.navOp : "0.9") + "'>" +
                    "</label>";

                for (var i = 0, MAX = themeInputs.length; i < MAX; ++i)
                    innerHTML += "<label><span class='option-title'>" + themeInputs[i].dName + ":</span>" +
                    "<input type=text class=jsColor name=" + themeInputs[i].name + " value=" + (bEdit ? tEdit[themeInputs[i].name] : "") + "></label>";

                innerHTML += "<label id=customCSS><span class='option-title'>Custom CSS:</span><textarea name=customCSS>" + (bEdit ? tEdit.customCSS || "" : "") + "</textarea>" +
                    "</label><div>" +
                    "<a class='options-button' name=export>Export</a>" +
                    "<a class='options-button' name=" + (bEdit ? "edit" : "add") + ">Save</a><a class='options-button' name=cancel>Cancel</a></div>";

                div.html(innerHTML);
                $(".jsColor", div).jsColor();

                overlay = $("<div id=overlay2>").append(div);

                $("a[name=export]", div).bind("click", function() {
                    var theme = $SS.options.addTheme(tIndex, true);
                    if ($("a[download]", div).exists())
                        return;
                    var exportalert = $("<a class='options-button'download='" + theme.name + ".json' href='data:application/json," + encodeURIComponent(JSON.stringify(theme)) + "'>Save me!");
                    return $(this).replace(exportalert);
                });

                if (bEdit) {
                    $("a[name=edit]", div).bind("click", function() {
                        $SS.options.addTheme(tIndex);
                        $("#overlay").removeClass("previewing");
                    });
                    $("#overlay").addClass("previewing");
                } else {
                    $("a[name=add]", div).bind("click", $SS.options.addTheme);
                    $("#overlay").addClass("previewing");
                }

                $("a[name=cancel]", div).bind("click", function() {
                    $("#overlay").removeClass("previewing");
                    $("#overlay2").remove();
                });

                if (bEdit)
                    $("input,textarea,select", div).bind("change", tEdit.mHandler = function() {
                        tEdit.modified = true;
                        $("input,textarea,select", $("#addTheme")).unbind("change", tEdit.mHandler);
                    });

                return $(document.body).append(overlay);
            },
            addTheme: function(tIndex, exp) {
                var overlay = $("#overlay2"),
                    tTheme = {},
                    makeRPA = function() {
                        var RPA = [];

                        RPA.push($("select[name=bgR]", overlay).val());
                        RPA.push($("select[name=bgPY]", overlay).val());
                        RPA.push($("select[name=bgPX]", overlay).val());
                        RPA.push($("select[name=bgA]", overlay).val());

                        return RPA.join(" ");
                    },
                    bEdit = typeof tIndex === "number",
                    tEdit = bEdit ? $SS.conf["Themes"][tIndex] : null,
                    error = false,
                    div;

                if (!exp && bEdit && !tEdit.modified)
                    return overlay.remove();

                $("input[type=text],textarea", overlay).each(function() {
                    var val;

                    if (this.name === "bgImg") {
                        var b64 = $("input[name=customIMGB64]", overlay);
                        val = b64.exists() ? decodeURIComponent(b64.val()) : this.value;

                        if (val !== "" && !$SS.validImageURL(val) && !$SS.validBase64(val)) {
                            error = true;
                            return alert("Not a valid image URL/base64!");
                        }

                        val = $SS.cleanBase64(val);

                    } else if (this.name === "name") {
                        val = this.value;

                        if (bEdit && tEdit.default && tEdit.name === val)
                            val += " [Modded]"
                    } else
                        val = this.value;

                    if (val !== "")
                        tTheme[this.name] = val;
                });

                if (error) return;

                if (tTheme.bgImg)
                    tTheme.bgRPA = makeRPA();

                if (exp) return tTheme;

                if (bEdit && !tEdit.default) {
                    $SS.conf["Themes"][tIndex] = tTheme;
                    tTheme = new $SS.Theme(tIndex);
                    div = $("#theme" + tIndex, $("#overlay"));

                    div.replace(tTheme.preview());
                } else {
                    tTheme.author = "You";
                    tIndex = $SS.conf["Themes"].push(tTheme);
                    tTheme = new $SS.Theme(--tIndex);
                    div = tTheme.preview();

                    $("#overlay #themes-section").append(div);
                }

                div.fire("click").scrollIntoView(true);

                $("#overlay").removeClass("previewing");
                return overlay.remove();
            },
            deleteTheme: function(tIndex) {
                if ($SS.conf["Themes"][tIndex].default &&
                    $SS.conf["Hidden Themes"].push(tIndex) === 1)
                    $("#themes-section a[name=restoreThemes]").show();

                return $SS.conf["Themes"][tIndex].default ?
                    $("#theme" + tIndex).removeClass("selected").hide() : $("#theme" + tIndex).remove();
            },
        },

        /* THEMES */
        Themes: {
            defaults: [{
                name: "Vimyanized Dark",
                authorName: "Seaweed",
                authorTrip: "!!lq+3fff+/ev",
                "default": true,
                bgImg: false,
                replyOp: "1.0",
                navOp: "0.9",
                bgColor: "090d0f",
                mainColor: "0d1114",
                brderColor: "0b1316",
                inputColor: "090d0f",
                inputbColor: "0d1114",
                blinkColor: "4797cc",
                unreadColor: "4270b2",
                linkColor: "53bdb1",
                linkHColor: "3090b5",
                qlColor: "53bdb1",
                nameColor: "d63e34",
                quoteColor: "96c83b",
                textColor: "f8f8f8",
                tripColor: "d4b63c",
                titleColor: "b88cd1",
                headerColor: "f8f8f8",
                headerLColor: "53bdb1",
                headerLHColor: "3090b5",
                headerBGColor: "0d1114",
                boardColor: "f8f8f8",
                postHLColor: "d4b63c",
                quotesYouHLColor: "d4b63c",
                ownPostHLColor: "d4b63c",
                threadHLColor: "b88cd1",
                replybgHLColor: "090d10",
                replyslctColor: "d4b63c"
            }, {
                name: "Muted",
                authorName: "Seaweed",
                authorTrip: "!!lq+3fff+/ev",
                "default": true,
                bgImg: false,
                replyOp: "1.0",
                navOp: "0.9",
                bgColor: "ffffff",
                mainColor: "f5f2e9",
                brderColor: "dddddd",
                inputColor: "ffffff",
                inputbColor: "dddddd",
                blinkColor: "bc312a",
                unreadColor: "bc312a",
                linkColor: "bc312a",
                linkHColor: "8e2220",
                qlColor: "bc312a",
                nameColor: "2c64a0",
                quoteColor: "789922",
                textColor: "393735",
                tripColor: "cc6563",
                titleColor: "111111",
                headerColor: "393735",
                headerLColor: "bc312a",
                headerLHColor: "8e2220",
                headerBGColor: "f5f2e9",
                boardColor: "bc312a",
                postHLColor: "cc6563",
                quotesYouHLColor: "2c64a0",
                ownPostHLColor: "cc6563",
                threadHLColor: "111111",
                replybgHLColor: "d9d6cd",
                replyslctColor: "cc6563"
            }, {
                name: "Surf", //Inspired by Blue Tone
                authorName: "nebukazar",
                authorTrip: "!/Am.NeBUqQ",
                "default": true,
                bgImg: false,
                replyOp: "1.0",
                navOp: "1.0",
                mainColor: "242424",
                brderColor: "242424",
                inputColor: "1b1b1b",
                inputbColor: "252525",
                headerBGColor: "242424",
                headerColor: "ffffff",
                boardColor: "ffffff",
                bgColor: "1b1b1b",
                textColor: "ffffff",
                blinkColor: "20548f",
                headerLColor: "20548f",
                headerLHColor: "ffffff",
                linkColor: "808080",
                linkHColor: "ffffff",
                qlColor: "808080",
                nameColor: "20548f",
                tripColor: "808080",
                titleColor: "808080",
                quoteColor: "07992d",
                unreadColor: "ffffff",
                postHLColor: "292929",
                quotesYouHLColor: "ffffff",
                ownPostHLColor: "ffffff",
                threadHLColor: "808080",
                replybgHLColor: "121212",
                replyslctColor: "ffffff"
            }, {
                name: "Stilig",
                authorName: "Myson",
                authorTrip: "!RiDeag.gG.",
                "default": true,
                bgImg: false,
                replyOp: "1.0",
                navOp: "0.9",
                mainColor: "ffffff",
                brderColor: "ebebeb",
                inputColor: "ffffff",
                inputbColor: "dedede",
                headerBGColor: "3d444e",
                headerColor: "ffffff",
                boardColor: "999999",
                bgColor: "f2f2f2",
                textColor: "717171",
                blinkColor: "999999",
                unreadColor: "999999",
                headerLColor: "babcbe",
                headerLHColor: "999999",
                linkColor: "999999",
                linkHColor: "5f5f65",
                qlColor: "999999",
                nameColor: "49637d",
                tripColor: "5f5f65",
                titleColor: "7a7f88",
                quoteColor: "009933",
                postHLColor: "5f5f65",
                quotesYouHLColor: "ff4a3e",
                ownPostHLColor: "5f5f65",
                threadHLColor: "7a7f88",
                replybgHLColor: "e6e6e6",
                replyslctColor: "5f5f65",
                customCSS: ".reply {box-shadow: -1px 1px 1px rgba(0,0,0,.08);}"
            }, {
                name: "Minimalistic Mayhem",
                authorName: "Mayhem",
                authorTrip: "!MayhemxaEo",
                "default": true,
                bgImg: false,
                replyOp: "1.0",
                navOp: "0.9",
                bgColor: "191919",
                mainColor: "222222",
                brderColor: "292929",
                inputColor: "222222",
                inputbColor: "151515",
                blinkColor: "897399",
                unreadColor: "897399",
                linkColor: "897399",
                linkHColor: "c617e6",
                qlColor: "897399",
                nameColor: "a34443",
                quoteColor: "8ba446",
                textColor: "bbbbbb",
                tripColor: "96562c",
                titleColor: "987d3e",
                headerColor: "bbbbbb",
                headerLColor: "897399",
                headerLHColor: "c617e6",
                headerBGColor: "222222",
                boardColor: "bbbbbb",
                postHLColor: "96562c",
                quotesYouHLColor: "96562c",
                ownPostHLColor: "96562c",
                threadHLColor: "987d3e",
                replybgHLColor: "141414",
                replyslctColor: "96562c"
            }, {
                name: "Blackboard",
                authorName: "Seaweed",
                authorTrip: "!!lq+3fff+/ev",
                "default": true,
                bgImg: false,
                replyOp: "1.0",
                navOp: "0.9",
                bgColor: "0a0d1c",
                mainColor: "0c1021",
                brderColor: "0e1228",
                inputColor: "0c1021",
                inputbColor: "080b16",
                blinkColor: "54b12e",
                unreadColor: "8da6ce",
                linkColor: "fbde2d",
                linkHColor: "4b65cc",
                qlColor: "fbde2d",
                nameColor: "8da6ce",
                quoteColor: "9acf08",
                textColor: "f8f8f8",
                tripColor: "ff6400",
                titleColor: "ff6400",
                headerColor: "f8f8f8",
                headerLColor: "fbde2d",
                headerLHColor: "4b65cc",
                headerBGColor: "0c1021",
                boardColor: "f8f8f8",
                postHLColor: "ff6400",
                quotesYouHLColor: "ff6400",
                ownPostHLColor: "ff6400",
                threadHLColor: "ff6400",
                replybgHLColor: "080c1d",
                replyslctColor: "ff6400"
            }, {
                name: "Dark Flat",
                authorName: "ahodesuka",
                authorTrip: "!.pC/AHOKAg",
                "default": true,
                bgImg: "R0lGODlhAwADAIAAAB0dHRkZGSH5BADoAwAALAAAAAADAAMAAAIDDG5YADs=",
                bgRPA: "repeat top left fixed",
                replyOp: "1.0",
                navOp: "0.9",
                bgRPA: "repeat top left fixed",
                bgColor: "1C1D1E",
                mainColor: "232425",
                brderColor: "292a2b",
                inputColor: "18191a",
                inputbColor: "121314",
                blinkColor: "6f99b4",
                unreadColor: "ac9bb0",
                linkColor: "ac9bb0",
                linkHColor: "6f99b4",
                qlColor: "ac9bb0",
                nameColor: "a8c6d9",
                quoteColor: "b3c45e",
                textColor: "dddddd",
                tripColor: "d4c095",
                titleColor: "9390c9",
                headerColor: "dddddd",
                headerLColor: "ac9bb0",
                headerLHColor: "6f99b4",
                headerBGColor: "232425",
                boardColor: "dddddd",
                postHLColor: "d4c095",
                quotesYouHLColor: "d4c095",
                ownPostHLColor: "d4c095",
                threadHLColor: "9390c9",
                replybgHLColor: "171919",
                replyslctColor: "d4c095"
            }, {
                name: "Yukimura",
                authorName: "the real",
                authorTrip: "!eKISSUy3/c",
                "default": true,
                bgImg: false,
                replyOp: "1.0",
                navOp: "0.9",
                mainColor: "1b1b1b",
                brderColor: "191919",
                inputColor: "1b1b1b",
                inputbColor: "1b1b1b",
                headerBGColor: "1b1b1b",
                headerColor: "e3c2b3",
                boardColor: "e3c2b3",
                bgColor: "171717",
                textColor: "e3c2b3",
                blinkColor: "5c433c",
                headerLColor: "e96a81",
                headerLHColor: "e96a81",
                linkColor: "e96a81",
                linkHColor: "e96a81",
                qlColor: "e96a81",
                nameColor: "e96a81",
                tripColor: "5c433c",
                titleColor: "5c433c",
                quoteColor: "b3c45e",
                unreadColor: "5c433c",
                postHLColor: "5c433c",
                quotesYouHLColor: "d63e34",
                ownPostHLColor: "5c433c",
                threadHLColor: "5c433c",
                replybgHLColor: "0d0d0d",
                replyslctColor: "5c433c"
            }, {
                name: "Photons + Odin",
                authorName: "John",
                authorTrip: "!Hu6tDS8lls",
                "default": true,
                bgImg: "R0lGODlhAwADAIAAAB0dHRkZGSH5BADoAwAALAAAAAADAAMAAAIDDG5YADs=",
                bgRPA: "repeat top left fixed",
                replyOp: "1.0",
                navOp: "0.9",
                mainColor: "1a1a1a",
                brderColor: "1f1f1f",
                inputColor: "18191a",
                inputbColor: "121314",
                headerBGColor: "1a1a1a",
                headerColor: "dddddd",
                boardColor: "dddddd",
                bgColor: "202020",
                textColor: "dddddd",
                blinkColor: "c72d41",
                headerLColor: "737f88",
                headerLHColor: "4f585d",
                linkColor: "737f88",
                linkHColor: "4f585d",
                qlColor: "737f88",
                nameColor: "0099bc",
                tripColor: "ff0085",
                titleColor: "ffa600",
                quoteColor: "85c600",
                unreadColor: "446a6d",
                postHLColor: "ff0085",
                quotesYouHLColor: "ff0085",
                ownPostHLColor: "ff0085",
                threadHLColor: "ffa600",
                replybgHLColor: "0d0d0d",
                replyslctColor: "ff0085"
            }, {
                name: "Photon",
                authorName: "Seaweed",
                authorTrip: "!!lq+3fff+/ev",
                "default": true,
                bgImg: false,
                replyOp: "1.0",
                navOp: "0.9",
                bgColor: "eeeeee",
                mainColor: "dddddd",
                brderColor: "c4c4c4",
                inputColor: "ffffff",
                inputbColor: "cccccc",
                blinkColor: "111111",
                unreadColor: "ff6600",
                linkColor: "ff6600",
                linkHColor: "ff3300",
                qlColor: "ff6600",
                nameColor: "004a99",
                quoteColor: "789922",
                textColor: "333333",
                tripColor: "ff3300",
                titleColor: "002244",
                headerColor: "333333",
                headerLColor: "ff6600",
                headerLHColor: "ff3300",
                headerBGColor: "dddddd",
                boardColor: "004a99",
                postHLColor: "ff3300",
                quotesYouHLColor: "004a99",
                ownPostHLColor: "ff3300",
                threadHLColor: "002244",
                replybgHLColor: "c4c4c4",
                replyslctColor: "ff3300"
            }, {
                name: "Original Minimalistic Mayhem",
                authorName: "Mayhem",
                authorTrip: "!MayhemxaEo",
                "default": true,
                bgImg: false,
                replyOp: "1.0",
                navOp: "0.9",
                bgColor: "191919",
                mainColor: "333333",
                brderColor: "111111",
                inputColor: "222222",
                inputbColor: "151515",
                blinkColor: "559c7a",
                unreadColor: "559c7a",
                linkColor: "559c7a",
                linkHColor: "c7de1a",
                qlColor: "559c7a",
                nameColor: "2e88a6",
                quoteColor: "8ba446",
                textColor: "dddddd",
                tripColor: "8c5d2a",
                titleColor: "486273",
                headerColor: "dddddd",
                headerLColor: "559c7a",
                headerLHColor: "c7de1a",
                headerBGColor: "333333",
                boardColor: "dddddd",
                postHLColor: "8c5d2a",
                quotesYouHLColor: "8c5d2a",
                ownPostHLColor: "8c5d2a",
                threadHLColor: "486273",
                replybgHLColor: "25262a",
                replyslctColor: "8c5d2a"
            }, {
                name: "Tomorrow",
                authorName: "Seaweed",
                authorTrip: "!!lq+3fff+/ev",
                "default": true,
                bgImg: false,
                replyOp: "1.0",
                navOp: "0.9",
                bgColor: "1d1f21",
                mainColor: "282a2e",
                brderColor: "373b41",
                inputColor: "282a2e",
                inputbColor: "1d1f21",
                blinkColor: "5f89ac",
                unreadColor: "81a2be",
                linkColor: "81a2be",
                linkHColor: "cc6666",
                qlColor: "81a2be",
                nameColor: "81a2be",
                quoteColor: "b5bd68",
                textColor: "c5c8c6",
                tripColor: "8abeb7",
                titleColor: "b294bb",
                headerColor: "c5c8c6",
                headerLColor: "81a2be",
                headerLHColor: "cc6666",
                headerBGColor: "282a2e",
                boardColor: "c5c8c6",
                postHLColor: "8abeb7",
                quotesYouHLColor: "8abeb7",
                ownPostHLColor: "8abeb7",
                threadHLColor: "b294bb",
                replybgHLColor: "24262a",
                replyslctColor: "8abeb7",
                customCSS: "span.postNum.desktop > a {\ncolor: #c5c8c6 !important\n}\nspan.postNum.desktop > a:hover {\ncolor: #81a2be !important\n}"
            }, {
                name: "Yotsuba",
                authorName: "moot",
                authorTrip: "!Εр8рui8Vw2",
                "default": true,
                bgImg: "iVBORw0KGgoAAAANSUhEUgAAAAEAAADICAIAAACmkByiAAAAWElEQVR4AaWSwQ3AIAwDbfbfpdt0nKrPUp3QCfHgkfjsCMh47mskmU5HGvbmuuh9dVce8M4it/SfMZglGeZx/ccyu/Vsv4/N29f331AY5Bi3+hdo4A92+wXvCwR9mXztrAAAAABJRU5ErkJggg==",
                bgRPA: "repeat-x top center scroll",
                replyOp: "1.0",
                navOp: "0.9",
                bgColor: "ffffee",
                mainColor: "f0e0d6",
                brderColor: "d9bFb7",
                inputColor: "ffffff",
                inputbColor: "aaaaaa",
                blinkColor: "800000",
                unreadColor: "000080",
                linkColor: "0000ee",
                linkHColor: "dd0000",
                qlColor: "000080",
                nameColor: "117743",
                quoteColor: "789922",
                textColor: "800000",
                tripColor: "228854",
                titleColor: "cc1105",
                headerColor: "800000",
                headerLColor: "800000",
                headerLHColor: "dd0000",
                headerBGColor: "f0e0d6",
                boardColor: "800000",
                postHLColor: "228854",
                quotesYouHLColor: "dd0000",
                ownPostHLColor: "228854",
                threadHLColor: "dd0000",
                replybgHLColor: "d6bad0",
                replyslctColor: "228854",
                customCSS: "span.postNum.desktop > a {\ncolor: #800000 !important\n}\nspan.postNum.desktop > a:hover {\ncolor: #dd0000 !important\n}\n.menu-button {\ncolor: #800000 !important\n}"
            }, {
                name: "Yotsuba B",
                authorName: "moot",
                authorTrip: "!Εр8рui8Vw2",
                "default": true,
                bgImg: "iVBORw0KGgoAAAANSUhEUgAAAAEAAADICAIAAACmkByiAAAASUlEQVR4AcWRuQ0AIBDDzuy/HAVrMAM9slCorqAJziNgrj2qSg/cGhHnjPqDDPxOfYiebwFj+XobeLGI7p39fW1/Ib58d55Bwh3x9wRv6r75UwAAAABJRU5ErkJggg==",
                bgRPA: "repeat-x top center scroll",
                replyOp: "1.0",
                navOp: "0.9",
                bgColor: "eef2ff",
                mainColor: "d6daf0",
                brderColor: "b7c5d9",
                inputColor: "ffffff",
                inputbColor: "aaaaaa",
                blinkColor: "34345c",
                unreadColor: "34345C",
                linkColor: "34345c",
                linkHColor: "dd0000",
                qlColor: "dd0000",
                nameColor: "117743",
                quoteColor: "789922",
                textColor: "000000",
                tripColor: "228854",
                titleColor: "0f0c5d",
                headerColor: "34345c",
                headerLColor: "34345c",
                headerLHColor: "dd0000",
                headerBGColor: "d6daf0",
                boardColor: "af0a0f",
                postHLColor: "228854",
                quotesYouHLColor: "228854",
                ownPostHLColor: "228854",
                threadHLColor: "dd0000",
                replybgHLColor: "d6bad0",
                replyslctColor: "228854",
                customCSS: "span.postNum.desktop > a {\ncolor: #000000 !important\n}\nspan.postNum.desktop > a:hover {\ncolor: #dd0000 !important\n}"
            }, {
                name: "Yotsuba Purple",
                authorName: "Seaweed",
                authorTrip: "!!lq+3fff+/ev",
                "default": true,
                bgImg: false,
                replyOp: "1.0",
                navOp: "0.9",
                bgColor: "f8f3fe",
                mainColor: "eeddff",
                brderColor: "cab7d9",
                inputColor: "ffffff",
                inputbColor: "cab7d9",
                blinkColor: "000000",
                unreadColor: "962594",
                linkColor: "962594",
                linkHColor: "b22caa",
                qlColor: "b22caa",
                nameColor: "591177",
                quoteColor: "789922",
                textColor: "000000",
                tripColor: "b22caa",
                titleColor: "0f0c5d",
                headerColor: "000000",
                headerLColor: "962594",
                headerLHColor: "b22caa",
                headerBGColor: "eeddff",
                boardColor: "591177",
                postHLColor: "b22caa",
                quotesYouHLColor: "d63e34",
                ownPostHLColor: "b22caa",
                threadHLColor: "0f0c5d",
                replybgHLColor: "b7aac4",
                replyslctColor: "b22caa"
            }, {
                name: "安心院なじみ",
                authorName: "ahodesuka",
                authorTrip: "!.pC/AHOKAg",
                "default": true,
                bgImg: false,
                replyOp: "1.0",
                navOp: "0.9",
                bgColor: "ffffff",
                mainColor: "efefef",
                brderColor: "d6d6d6",
                inputColor: "cccccc",
                inputbColor: "bbbbbb",
                blinkColor: "f5871f",
                unreadColor: "bf8040",
                linkColor: "bf8040",
                linkHColor: "bf8040",
                qlColor: "bf8040",
                nameColor: "2b80c2",
                quoteColor: "718c00",
                textColor: "4d4d4c",
                tripColor: "3e999f",
                titleColor: "4d4d4d",
                headerColor: "4d4d4c",
                headerLColor: "bf8040",
                headerLHColor: "bf8040",
                headerBGColor: "efefef",
                boardColor: "4d4d4c",
                postHLColor: "3e999f",
                quotesYouHLColor: "3e999f",
                ownPostHLColor: "3e999f",
                threadHLColor: "4d4d4d",
                replybgHLColor: "c7c7c7",
                replyslctColor: "3e999f"
            }, {
                name: "Solarized Dark", // http://ethanschoonover.com/solarized
                authorName: "ubuntufriend",
                authorTrip: "!UbuntuBReY!!iizPaxgtRk3",
                "default": true,
                bgImg: false,
                replyOp: "1.0",
                navOp: "0.9",
                bgColor: "073642",
                mainColor: "032b36",
                brderColor: "133942",
                inputColor: "073642",
                inputbColor: "0d272e",
                blinkColor: "4f5f8f",
                unreadColor: "696fc0",
                linkColor: "696bba",
                linkHColor: "d33682",
                qlColor: "696bba",
                nameColor: "586e75",
                quoteColor: "859900",
                textColor: "93a1a1",
                tripColor: "2aa198",
                titleColor: "bec2c4",
                headerColor: "93a1a1",
                headerLColor: "696bba",
                headerLHColor: "d33682",
                headerBGColor: "032b36",
                boardColor: "93a1a1",
                postHLColor: "2aa198",
                quotesYouHLColor: "2aa198",
                ownPostHLColor: "2aa198",
                threadHLColor: "bec2c4",
                replybgHLColor: "073642",
                replyslctColor: "2aa198"
            }, {
                name: "4chan Rewired Modded", // Originally by !K.WeEabo0o, modded by ahoka
                authorName: "ahodesuka",
                authorTrip: "!.pC/AHOKAg",
                "default": true,
                bgImg: false,
                replyOp: "1.0",
                navOp: "0.9",
                bgColor: "f4f4f4",
                mainColor: "efefef",
                brderColor: "d4d4d4",
                inputColor: "e4e4e4",
                inputbColor: "cccccc",
                blinkColor: "bf7f3f",
                unreadColor: "bf7f3f",
                linkColor: "bf7f3f",
                linkHColor: "d33682",
                nameColor: "4c4c4c",
                quoteColor: "6b7a1e",
                textColor: "4c4c4c",
                tripColor: "bf7f3f",
                titleColor: "4c4c4c",
                headerColor: "4c4c4c",
                headerLColor: "bf7f3f",
                headerLHColor: "d33682",
                headerBGColor: "efefef",
                boardColor: "4c4c4c",
                postHLColor: "bf7f3f",
                quotesYouHLColor: "d63e34",
                ownPostHLColor: "bf7f3f",
                threadHLColor: "4c4c4c",
                replybgHLColor: "c7c7c7",
                replyslctColor: "bf7f3f"
            }, {
                name: "Yasashii",
                authorName: "nebukazar",
                authorTrip: "!/Am.NeBUqQ",
                "default": true,
                bgImg: false,
                replyOp: "1.0",
                navOp: "0.9",
                mainColor: "f8f8f8",
                brderColor: "f8f8f8",
                inputColor: "f8f8f8",
                inputbColor: "be7375",
                headerBGColor: "a6586f",
                headerColor: "f8f8f8",
                boardColor: "a6586f",
                bgColor: "ebebeb",
                textColor: "5b5c5c",
                blinkColor: "656599",
                headerLColor: "ebebeb",
                headerLHColor: "656599",
                linkColor: "b78087",
                linkHColor: "c8ab78",
                qlColor: "b78087",
                nameColor: "be7375",
                tripColor: "656599",
                titleColor: "b87d6e",
                quoteColor: "7eba6c",
                unreadColor: "f8f8f8",
                postHLColor: "9875a3",
                quotesYouHLColor: "656599",
                ownPostHLColor: "9875a3",
                threadHLColor: "b87d6e",
                replybgHLColor: "eaeaea",
                replyslctColor: "9875a3"
            }, {
                name: "AppChan", // Originally by Zixaphir @ http://userstyles.org/styles/54149/appchan
                authorName: "Zixaphir",
                authorTrip: "!M.........",
                "default": true,
                bgImg: false,
                replyOp: "1.0",
                navOp: "0.9",
                bgColor: "2c2c2c",
                mainColor: "333333",
                brderColor: "333333",
                inputColor: "333333",
                inputbColor: "2c2c2c",
                blinkColor: "4f5f8f",
                unreadColor: "6688aa",
                linkColor: "6688aa",
                linkHColor: "6688aa",
                qlColor: "6688aa",
                nameColor: "aaaaaa",
                quoteColor: "789922",
                textColor: "aaaaaa",
                tripColor: "aaaaaa",
                titleColor: "aaaaaa",
                headerColor: "aaaaaa",
                headerLColor: "6688aa",
                headerLHColor: "6688aa",
                headerBGColor: "333333",
                boardColor: "aaaaaa",
                postHLColor: "aaaaaa",
                quotesYouHLColor: "aaaaaa",
                ownPostHLColor: "aaaaaa",
                threadHLColor: "aaaaaa",
                replybgHLColor: "282828",
                replyslctColor: "aaaaaa"
            }, {
                name: "Zenburned",
                authorName: "lazy",
                authorTrip: "!HONKYn7h1.",
                "default": true,
                bgImg: false,
                replyOp: "1.0",
                navOp: "0.9",
                bgColor: "3f3f3f",
                mainColor: "575757",
                brderColor: "5e5e5e",
                inputColor: "454545",
                inputbColor: "888888",
                blinkColor: "dca3a3",
                unreadColor: "93b3a3",
                linkColor: "efdcbc",
                linkHColor: "f8f893",
                qlColor: "efdcbc",
                nameColor: "c0bed1",
                quoteColor: "7f9f7f",
                textColor: "dcdccc",
                tripColor: "8cd0d3",
                titleColor: "aaaaaa",
                headerColor: "dcdccc",
                headerLColor: "efdcbc",
                headerLHColor: "f8f893",
                headerBGColor: "575757",
                boardColor: "dcdccc",
                postHLColor: "8cd0d3",
                quotesYouHLColor: "8cd0d3",
                ownPostHLColor: "8cd0d3",
                threadHLColor: "aaaaaa",
                replybgHLColor: "494949",
                replyslctColor: "8cd0d3"
            }, {
                name: "Monokai",
                authorName: "Seaweed",
                authorTrip: "!!lq+3fff+/ev",
                "default": true,
                replyOp: "1.0",
                navOp: "0.9",
                bgColor: "20211c",
                mainColor: "272822",
                brderColor: "2d2e27",
                inputColor: "20211c",
                inputbColor: "171713",
                blinkColor: "f92672",
                unreadColor: "e2db74",
                linkColor: "e2db74",
                linkHColor: "ae81ff",
                qlColor: "e2db74",
                nameColor: "5ac0cc",
                quoteColor: "a2cc28",
                textColor: "f8f8f2",
                tripColor: "fa8220",
                titleColor: "ae81ff",
                headerColor: "f8f8f2",
                headerLColor: "e2db74",
                headerLHColor: "ae81ff",
                headerBGColor: "272822",
                boardColor: "f8f8f2",
                postHLColor: "fa8220",
                quotesYouHLColor: "fa8220",
                ownPostHLColor: "fa8220",
                threadHLColor: "ae81ff",
                replybgHLColor: "23241e",
                replyslctColor: "fa8220"
            }, {
                name: "Ao ni sarasu", // based on jaygeegeegee's http://userstyles.org/styles/75602/last-fm-kind-of-blue
                authorName: "Seaweed",
                authorTrip: "!!lq+3fff+/ev",
                "default": true,
                replyOp: "1.0",
                navOp: "0.9",
                bgColor: "e9eced",
                mainColor: "e3e7e8",
                brderColor: "cccccc",
                inputColor: "e9eced",
                inputbColor: "cccccc",
                blinkColor: "477085",
                unreadColor: "477085",
                linkColor: "477085",
                linkHColor: "5d6678",
                qlColor: "477085",
                nameColor: "4c4c4c",
                quoteColor: "6b7a1e",
                textColor: "4c4c4c",
                tripColor: "5d6678",
                titleColor: "617d6f",
                headerColor: "4c4c4c",
                headerLColor: "477085",
                headerLHColor: "5d6678",
                headerBGColor: "e3e7e8",
                boardColor: "477085",
                postHLColor: "5d6678",
                quotesYouHLColor: "d63e34",
                ownPostHLColor: "5d6678",
                threadHLColor: "617d6f",
                replybgHLColor: "d5dada",
                replyslctColor: "5d6678"
            }, {
                name: "Blue Tone",
                authorName: "Leagle",
                authorTrip: "!YoGiiH6Oi.",
                "default": true,
                replyOp: "1.0",
                navOp: "0.9",
                mainColor: "222222",
                brderColor: "222222",
                inputColor: "18191a",
                inputbColor: "121314",
                headerBGColor: "1b1b1b",
                headerColor: "dddddd",
                boardColor: "dddddd",
                bgColor: "1b1b1b",
                textColor: "a0a0a0",
                blinkColor: "3296c8",
                headerLColor: "3296c8",
                headerLHColor: "dddddd",
                linkColor: "a0a0a0",
                linkHColor: "dddddd",
                qlColor: "3296c8",
                nameColor: "dddddd",
                tripColor: "dddddd",
                titleColor: "a0a0a0",
                quoteColor: "009933",
                unreadColor: "3296c8",
                postHLColor: "ffffff",
                quotesYouHLColor: "ffffff",
                ownPostHLColor: "ffffff",
                threadHLColor: "a0a0a0",
                replybgHLColor: "141414",
                replyslctColor: "ffffff",
                customCSS: "body{\nbackground: rgba(19,19,19,1);\n}\n.boardBanner .boardTitle {\ntext-shadow: 0 0 3px #a0a0a0 !important;\nletter-spacing: 0px !important;\npadding-top: 30px !important;\n}\n#delform {\n padding: 0px 2px !important;\n background: rgba(19,19,19,1);\n}"
            }, {
                name: "Cold Snap",
                authorName: "Kori",
                authorTrip: "!STRaW/KORI",
                "default": true,
                replyOp: "1.0",
                navOp: "0.9",
                mainColor: "fcfcfc",
                brderColor: "ebebeb",
                inputColor: "ffffff",
                inputbColor: "ffffff",
                headerBGColor: "ffffff",
                headerColor: "aaaaaa",
                boardColor: "6699cc",
                bgColor: "ffffff",
                textColor: "232323",
                blinkColor: "6699cc",
                headerLColor: "aaaaaa",
                headerLHColor: "6699cc",
                linkColor: "6699cc",
                linkHColor: "6699cc",
                qlColor: "6699cc",
                nameColor: "aaaaaa",
                tripColor: "476b8f",
                titleColor: "909090",
                quoteColor: "83bf57",
                unreadColor: "6699cc",
                postHLColor: "476b8f",
                quotesYouHLColor: "476b8f",
                ownPostHLColor: "476b8f",
                threadHLColor: "909090",
                replybgHLColor: "eeeeee",
                replyslctColor: "476b8f"
            }, {
                name: "Midnight Caek",
                authorName: "Zixaphir",
                authorTrip: "!M.........",
                "default": true,
                replyOp: "1.0",
                navOp: "0.9",
                mainColor: "1c1c1c",
                brderColor: "1c1c1c",
                inputColor: "1c1c1c",
                inputbColor: "1c1c1c",
                headerBGColor: "101010",
                headerColor: "909090",
                boardColor: "909090",
                bgColor: "101010",
                textColor: "909090",
                blinkColor: "424247",
                headerLColor: "909090",
                headerLHColor: "47475b",
                linkColor: "57577b",
                linkHColor: "47475b",
                qlColor: "57577b",
                nameColor: "7c2d2d",
                tripColor: "3e7157",
                titleColor: "aaaaaa",
                quoteColor: "71793e",
                unreadColor: "57577b",
                postHLColor: "ffffff",
                quotesYouHLColor: "7c2d2d",
                ownPostHLColor: "ffffff",
                threadHLColor: "aaaaaa",
                replybgHLColor: "0e0e0e",
                replyslctColor: "ffffff"
            }],

            init: function() {
                $SS.conf["Themes"] = Array.isArray($SS.conf["Themes"]) ?
                    this.defaults.concat($SS.conf["Themes"]) : this.defaults.slice(0);

                var i = $SS.location.nsfw ?
                    $SS.conf["NSFW Theme"] : $SS.conf["Selected Theme"],
                    tIndex = $SS.conf["Themes"][i] ? i : 0;

                $SS.theme = new $SS.Theme(tIndex); // Set the active theme.
            }
        },

        classes: {
            init: function() {
                /* Function arguments: ("Option Name", value, "class-name") */
                $("html").addClass("oneechan");
                $SS.theme.textColor.isLight ? $("html").addClass("isLight") : "";
                $SS.theme.bgColor.isLight ? "" : $("html").addClass("dark-captcha");
                $("html").optionClass("Underline QuoteLinks", true, "underline-quotes");
                $("html").optionClass("Underline All Links", false, "underline-disabled");
                $("html").optionClass("Rounded Corners", true, "rounded-corners");
                $("html").optionClass("Show Board Name", false, "hide-board-name");
                $("html").optionClass("Fit Width", true, "reply-fit-width");
                $("html").optionClass("Show Banner", false, "hide-banner");
                $("html").optionClass("Reduce Banner Opacity", true, "banner-opacity");
                $("html").optionClass("Show Reply to Thread Button", false, "hide-button");
                $("html").optionClass("Show Reply Header", true, "post-info");
                $("html").optionClass("Show File Info", false, "show-file-info");
                $("html").optionClass("Borders", 2, "borders-all");
                $("html").optionClass("Borders", 3, "borders-none");
                $("html").optionClass("Decoration Style", 1, "hl-border");
                $("html").optionClass("Decoration Style", 2, "hl-outline");
                $("html").optionClass("Decoration Style", 3, "hl-border-down");
                $("html").optionClass("Sidebar Position", 1, "right-sidebar");
                $("html").optionClass("Sidebar Position", 2, "left-sidebar");
                $("html").optionClass("Minimal Sidebar", true, "mini-sidebar");
                $("html").optionClass("Recolor Even Replies", true, "recolor-even");
                $("html").optionClass("Backlink Icons", true, "backlink-icon");
                $("html").optionClass("Backlinks on Bottom", true, "backlink-bottom");
                $("html").optionClass("Show 4chan Pass users", true, "no-pu");
				$("html").optionClass("Fit Expanded Images", true, "fit-eximg");
                $("html").optionClass("Autohide Style", 2, "vertical-qr");
                $("html").optionClass("Autohide Style", 3, "fade-qr");
                $("html").optionClass("Transparent QR", true, "qr-opacity");
                $("html").optionClass("Remove Background", true, "qr-background");
                $("html").optionClass("Remove Controls", true, "qr-controls");
                $("html").optionClass("Force QR to Sidebar Size", true, "force-qr");
                $("html").optionClass("Indent OP", false, "force-indent");
                $("html").optionClass("Allow Wrapping Around OP", false, "force-wrapping");
                $("html").optionClass("OP Background", true, "op-background");
                $("html").optionClass("Expanding Form Inputs", true, "expand-inputs");
                $("html").optionClass("Show Header Background Gradient", true, "header-gradient");
                $("html").optionClass("Show Header Shadow", false, "header-shadow");
                $("html").optionClass("Highlight Current Board", false, "header-highlight");
                $("html").optionClass("Show Blotter", false, "hide-blotter");
                $("html").optionClass("Show 4chan Ads", true, "show-ads");
                $("html").optionClass("Show Top Ad", false, "hide-top");
                $("html").optionClass("Show Middle Ad", false, "hide-middle");
                $("html").optionClass("Show Bottom Ad", false, "hide-bottom");
                $("html").optionClass("Show Navigation Links", false, "hide-navlinks");
                $("html").optionClass("Show Top Links", false, "hide-navlinktop");
                $("html").optionClass("Show Bottom Links", false, "hide-navlinkbot");
                $("html").optionClass("Reduce Ad Opacity", true, "ad-opacity");
                $("html").optionClass("Reduce Thumbnail Opacity", true, "thumb-opacity");
                $("html").optionClass("Justified Text", true, "catalog-justify");
                $("html").optionClass("Show Background", true, "catalog-background");
                $("html").optionClass("Unified Thumbnail Size", true, "catalog-thumbsize");
            }
        },

        jscolor: {
            getElementPos: function(e) {
                var e1 = e,
                    e2 = e;
                var x = 0,
                    y = 0;

                if (e1.offsetParent)
                    do {
                        x += e1.offsetLeft;
                        y += e1.offsetTop;
                    }
                    while (e1 = e1.offsetParent);

                while ((e2 = e2.parentNode) && e2.nodeName.toUpperCase() !== "BODY") {
                    x -= e2.scrollLeft;
                    y -= e2.scrollTop;
                }

                return [x, y];
            },
            getElementSize: function(e) {
                return [e.offsetWidth, e.offsetHeight];
            },
            getRelMousePos: function(e) {
                var x = 0,
                    y = 0;

                if (!e)
                    e = window.event;

                if (typeof e.offsetX === "number") {
                    x = e.offsetX;
                    y = e.offsetY;
                } else if (typeof e.layerX === "number") {
                    x = e.layerX;
                    y = e.layerY;
                }

                return {
                    x: x,
                    y: y
                };
            },
            getViewPos: function() {
                if (typeof window.pageYOffset === "number")
                    return [window.pageXOffset, window.pageYOffset];
                else if (document.body && (document.body.scrollLeft || document.body.scrollTop))
                    return [document.body.scrollLeft, document.body.scrollTop];
                else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop))
                    return [document.documentElement.scrollLeft, document.documentElement.scrollTop];
                else
                    return [0, 0];
            },
            getViewSize: function() {
                if (typeof window.innerWidth === "number")
                    return [window.innerWidth, window.innerHeight];
                else if (document.body && (document.body.clientWidth || document.body.clientHeight))
                    return [document.body.clientWidth, document.body.clientHeight];
                else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight))
                    return [document.documentElement.clientWidth, document.documentElement.clientHeight];
                else
                    return [0, 0];
            },

            // TODO: remove this array.
            images: {
                pad: [181, 101],
                sld: [16, 101],
                cross: [15, 15],
                arrow: [7, 11]
            },

            color: function(target) {

                this.required = true; // refuse empty values?
                this.adjust = true; // adjust value to uniform notation?
                this.hash = false; // prefix color with # symbol?
                this.caps = false; // uppercase?
                this.slider = true; // show the value/saturation slider?
                this.valueElement = target; // value holder
                this.styleElement = target; // where to reflect current color
                this.onImmediateChange = null; // onchange callback (can be either string or function)
                this.hsv = [0, 0, 1]; // read-only  0-6, 0-1, 0-1
                this.rgb = [1, 1, 1]; // read-only  0-1, 0-1, 0-1

                this.pickerSmartPosition = true; // automatically adjust picker position when necessary
                this.pickerFace = 10; // px
                this.pickerFaceColor = "ThreeDFace"; // CSS color
                this.pickerBorder = 1; // px
                this.pickerBorderColor = "ThreeDHighlight ThreeDShadow ThreeDShadow ThreeDHighlight"; // CSS color
                this.pickerInset = 1; // px
                this.pickerInsetColor = "ThreeDShadow ThreeDHighlight ThreeDHighlight ThreeDShadow"; // CSS color
                this.pickerZIndex = 10000;

                this.hidePicker = function() {
                    if (isPickerOwner())
                        removePicker();
                };
                this.showPicker = function() {
                    if (!isPickerOwner()) {
                        var tp = $SS.jscolor.getElementPos(target); // target pos
                        var ts = $SS.jscolor.getElementSize(target); // target size
                        var ps = getPickerDims(this); // picker size
                        var a = 0,
                            b = 1,
                            c = 1;
                        var l = (ts[1] + ps[1]) / 2;

                        var pp = [
                            tp[0],
                            tp[1] + ts[1]
                        ];

                        drawPicker(pp[0], pp[1]);
                    }
                };
                this.importColor = function() {
                    if (!valueElement) {
                        this.exportColor();
                    } else {
                        if (!this.adjust) {
                            if (!this.fromString(valueElement.value, leaveValue)) {
                                styleElement.style.backgroundColor = styleElement.jscStyle.backgroundColor;
                                styleElement.style.color = styleElement.jscStyle.color;
                                this.exportColor(leaveValue | leaveStyle);
                            }
                        } else if (!this.required && /^\s*$/.test(valueElement.value)) {
                            valueElement.value = "";
                            styleElement.style.backgroundColor = styleElement.jscStyle.backgroundColor;
                            styleElement.style.color = styleElement.jscStyle.color;
                            this.exportColor(leaveValue | leaveStyle);

                        } else if (!this.fromString(valueElement.value))
                            this.exportColor();
                    }
                };
                this.exportColor = function(flags) {
                    if (!(flags & leaveValue) && valueElement) {
                        var value = this.toString();

                        if (value[0] === "#")
                            value = value.substr(1);

                        valueElement.value = value;
                    }

                    if (!(flags & leaveStyle) && styleElement) {
                        styleElement.style.backgroundColor = "#" + this.toString();
                        styleElement.style.color =
                            0.213 * this.rgb[0] +
                            0.715 * this.rgb[1] +
                            0.072 * this.rgb[2] < 0.5 ? "#FFF" : "#000";
                    }

                    if (!(flags & leavePad) && isPickerOwner())
                        redrawPad();

                    if (!(flags & leaveSld) && isPickerOwner())
                        redrawSld();
                };
                this.fromHSV = function(h, s, v, flags) {
                    h < 0 && (h = 0) || h > 6 && (h = 6);
                    s < 0 && (s = 0) || s > 1 && (s = 1);
                    v < 0 && (v = 0) || v > 1 && (v = 1);

                    this.rgb = HSV_RGB(
                        h === null ? this.hsv[0] : (this.hsv[0] = h),
                        s === null ? this.hsv[1] : (this.hsv[1] = s),
                        v === null ? this.hsv[2] : (this.hsv[2] = v)
                    );

                    this.exportColor(flags);
                };
                this.fromRGB = function(r, g, b, flags) {
                    r < 0 && (r = 0) || r > 1 && (r = 1);
                    g < 0 && (g = 0) || g > 1 && (g = 1);
                    b < 0 && (b = 0) || b > 1 && (b = 1);

                    var hsv = RGB_HSV(
                        r === null ? this.rgb[0] : (this.rgb[0] = r),
                        g === null ? this.rgb[1] : (this.rgb[1] = g),
                        b === null ? this.rgb[2] : (this.rgb[2] = b)
                    );

                    if (hsv[0] !== null)
                        this.hsv[0] = hsv[0];

                    if (hsv[2] !== 0)
                        this.hsv[1] = hsv[1];

                    this.hsv[2] = hsv[2];
                    this.exportColor(flags);
                };
                this.fromString = function(hex, flags) {
                    var m = hex.match(/^\W*([0-9A-F]{3}([0-9A-F]{3})?)\W*$/i);

                    if (!m) return false;
                    else {
                        if (m[1].length === 6)
                            this.fromRGB(
                                parseInt(m[1].substr(0, 2), 16) / 255,
                                parseInt(m[1].substr(2, 2), 16) / 255,
                                parseInt(m[1].substr(4, 2), 16) / 255,
                                flags);
                        else
                            this.fromRGB(
                                parseInt(m[1].charAt(0) + m[1].charAt(0), 16) / 255,
                                parseInt(m[1].charAt(1) + m[1].charAt(1), 16) / 255,
                                parseInt(m[1].charAt(2) + m[1].charAt(2), 16) / 255,
                                flags);

                        return true;
                    }
                };
                this.toString = function() {
                    return (
                        (0x100 | Math.round(255 * this.rgb[0])).toString(16).substr(1) +
                        (0x100 | Math.round(255 * this.rgb[1])).toString(16).substr(1) +
                        (0x100 | Math.round(255 * this.rgb[2])).toString(16).substr(1)
                    );
                };

                function RGB_HSV(r, g, b) {
                    var n = Math.min(Math.min(r, g), b);
                    var v = Math.max(Math.max(r, g), b);
                    var m = v - n;
                    if (m === 0) {
                        return [null, 0, v];
                    }
                    var h = r === n ? 3 + (b - g) / m : (g === n ? 5 + (r - b) / m : 1 + (g - r) / m);
                    return [h === 6 ? 0 : h, m / v, v];
                }

                function HSV_RGB(h, s, v) {
                    if (h === null) {
                        return [v, v, v];
                    }
                    var i = Math.floor(h);
                    var f = i % 2 ? h - i : 1 - (h - i);
                    var m = v * (1 - s);
                    var n = v * (1 - s * f);
                    switch (i) {
                        case 6:
                        case 0:
                            return [v, n, m];
                        case 1:
                            return [n, v, m];
                        case 2:
                            return [m, v, n];
                        case 3:
                            return [m, n, v];
                        case 4:
                            return [n, m, v];
                        case 5:
                            return [v, m, n];
                    }
                }

                function removePicker() {
                    delete $SS.jscolor.picker.owner;
                    window.removeEventListener("resize", removePicker, false);
                    target.blur();
                    document.getElementsByTagName("body")[0].removeChild($SS.jscolor.picker.boxB);
                }

                function drawPicker(x, y) {
                    if (!$SS.jscolor.picker) {
                        $SS.jscolor.picker = {
                            box: document.createElement("div"),
                            boxB: document.createElement("div"),
                            pad: document.createElement("div"),
                            padB: document.createElement("div"),
                            padM: document.createElement("div"),
                            sld: document.createElement("div"),
                            sldB: document.createElement("div"),
                            sldM: document.createElement("div")
                        };

                        for (var i = 0, segSize = 4; i < $SS.jscolor.images.sld[1]; i += segSize) {
                            var seg = document.createElement("div");
                            seg.style.height = segSize + "px";
                            seg.style.fontSize = "1px";
                            seg.style.lineHeight = "0";
                            $SS.jscolor.picker.sld.appendChild(seg);
                        }

                        $SS.jscolor.picker.sldB.appendChild($SS.jscolor.picker.sld);
                        $SS.jscolor.picker.box.appendChild($SS.jscolor.picker.sldB);
                        $SS.jscolor.picker.box.appendChild($SS.jscolor.picker.sldM);
                        $SS.jscolor.picker.padB.appendChild($SS.jscolor.picker.pad);
                        $SS.jscolor.picker.box.appendChild($SS.jscolor.picker.padB);
                        $SS.jscolor.picker.box.appendChild($SS.jscolor.picker.padM);
                        $SS.jscolor.picker.boxB.appendChild($SS.jscolor.picker.box);
                    }

                    var p = $SS.jscolor.picker;

                    // controls interaction
                    window.addEventListener("resize", removePicker, false);
                    p.box.onmouseup = p.box.onmouseout = function() {
                        target.focus();
                    };
                    p.box.onmousedown = function() {
                        abortBlur = true;
                    };
                    p.box.onmousemove = function(e) {
                        if (holdPad || holdSld) {
                            holdPad && setPad(e);
                            holdSld && setSld(e);

                            if (document.selection)
                                document.selection.empty();
                            else if (window.getSelection)
                                window.getSelection().removeAllRanges();

                            dispatchImmediateChange();
                        }
                    };
                    p.padM.onmouseup =
                        p.padM.onmouseout = function() {
                            if (holdPad) {
                                holdPad = false;
                                $(valueElement).fire("change");
                            }
                        };
                    p.padM.onmousedown = function(e) {
                        holdPad = true;
                        setPad(e);
                        dispatchImmediateChange();
                    };
                    p.sldM.onmouseup =
                        p.sldM.onmouseout = function() {
                            if (holdSld) {
                                holdSld = false;
                                $(valueElement).fire("change");
                            }
                        };
                    p.sldM.onmousedown = function(e) {
                        holdSld = true;
                        setSld(e);
                        dispatchImmediateChange();
                    };

                    // picker
                    var dims = getPickerDims(THIS);
                    p.box.style.width = dims[0] + "px";
                    p.box.style.height = dims[1] + "px";

                    /** MOVE TO CSS **/
                    // picker border
                    p.boxB.style.position = "fixed";
                    p.boxB.style.clear = "both";
                    p.boxB.style.left = x + "px";
                    p.boxB.style.top = y + "px";
                    p.boxB.style.zIndex = THIS.pickerZIndex;
                    p.boxB.style.border = THIS.pickerBorder + "px solid";
                    p.boxB.style.borderColor = THIS.pickerBorderColor;
                    p.boxB.style.background = THIS.pickerFaceColor;

                    // pad image
                    p.pad.style.width = $SS.jscolor.images.pad[0] + "px";
                    p.pad.style.height = $SS.jscolor.images.pad[1] + "px";

                    // pad border
                    p.padB.style.position = "absolute";
                    p.padB.style.left = THIS.pickerFace + "px";
                    p.padB.style.top = THIS.pickerFace + "px";
                    p.padB.style.border = THIS.pickerInset + "px solid";
                    p.padB.style.borderColor = THIS.pickerInsetColor;

                    // pad mouse area
                    p.padM.style.position = "absolute";
                    p.padM.style.left = "0";
                    p.padM.style.top = "0";
                    p.padM.style.width = THIS.pickerFace + 2 * THIS.pickerInset + $SS.jscolor.images.pad[0] + $SS.jscolor.images.arrow[0] + "px";
                    p.padM.style.height = p.box.style.height;
                    p.padM.style.cursor = "crosshair";

                    // slider image
                    p.sld.style.overflow = "hidden";
                    p.sld.style.width = $SS.jscolor.images.sld[0] + "px";
                    p.sld.style.height = $SS.jscolor.images.sld[1] + "px";

                    // slider border
                    p.sldB.style.display = THIS.slider ? "block" : "none";
                    p.sldB.style.position = "absolute";
                    p.sldB.style.right = THIS.pickerFace + "px";
                    p.sldB.style.top = THIS.pickerFace + "px";
                    p.sldB.style.border = THIS.pickerInset + "px solid";
                    p.sldB.style.borderColor = THIS.pickerInsetColor;

                    // slider mouse area
                    p.sldM.style.display = THIS.slider ? "block" : "none";
                    p.sldM.style.position = "absolute";
                    p.sldM.style.right = "0";
                    p.sldM.style.top = "0";
                    p.sldM.style.width = $SS.jscolor.images.sld[0] + $SS.jscolor.images.arrow[0] + THIS.pickerFace + 2 * THIS.pickerInset + "px";
                    p.sldM.style.height = p.box.style.height;
                    try {
                        p.sldM.style.cursor = "pointer";
                    } catch (eOldIE) {
                        p.sldM.style.cursor = "hand";
                    }

                    // load images in optimal order
                    p.padM.style.backgroundImage = "url('data:image/gif;base64,R0lGODlhDwAPAKEBAAAAAP///////////yH5BAEKAAIALAAAAAAPAA8AAAIklB8Qx53b4otSUWcvyiz4/4AeQJbmKY4p1HHapBlwPL/uVRsFADs=')";
                    p.padM.style.backgroundRepeat = "no-repeat";
                    p.sldM.style.backgroundImage = "url('data:image/gif;base64,R0lGODlhBwALAKECAAAAAP///6g8eKg8eCH5BAEKAAIALAAAAAAHAAsAAAITTIQYcLnsgGxvijrxqdQq6DRJAQA7')";
                    p.sldM.style.backgroundRepeat = "no-repeat";
                    p.pad.style.backgroundImage = "url('data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAyAAD/7gAhQWRvYmUAZMAAAAABAwAQAwMGCQAABTgAAAVfAAAHAv/bAIQACAYGBgYGCAYGCAwIBwgMDgoICAoOEA0NDg0NEBEMDg0NDgwRDxITFBMSDxgYGhoYGCMiIiIjJycnJycnJycnJwEJCAgJCgkLCQkLDgsNCw4RDg4ODhETDQ0ODQ0TGBEPDw8PERgWFxQUFBcWGhoYGBoaISEgISEnJycnJycnJycn/8IAEQgAZQC1AwEiAAIRAQMRAf/EAJgAAAIDAQEAAAAAAAAAAAAAAAQFAAEDAgYBAAIDAQEBAAAAAAAAAAAAAAUGAQMEAgAHEAADAAMBAQADAQEAAAAAAAAAAQIhEgMRBBAwIiAxEQEAAAAAAAAAAAAAAAAAAACAEgEBAQEAAAAAAAAAAAAAAAAwgVBgEwACAgICAgIDAAAAAAAAAAAAARExECEgkTBh8MFBgaH/2gAMAwEAAhEDEQAAAEXp0vo0r6m99Mg9EtKGaxutrS0y5wvKJGRE3bRE4K4d6fJ+Z9h5xpY/FhPgz7f0zzZZHfay7CuCwdrglbVcPi3c69Asej1xt6BM8ArGa9oBWpqQWoRFSy261ZRlcFcNtXmvP+qRMR3yQjsU0z0xo/M3dWXYpnW4NMVPWth0A2uHIbbGvsHK1sHA5hMBOVxaGyG2reOvWp3BzwTyyVoEvpFBsv5gdyOUYMzejKGOrLscwLsmWS5oXQ6CLGrTBjQDJZhsBonMU0fkKAOfhpC4aadlsfHJFGuUyt8uKEfP4N8t5ccrYio1nZd4i6/NjwGuXQ6De2ZsK5D9m4k48HGBWUDxMTM7h2HW3W6jKiKI8qwm4u3Wlza56d4uxOvBDCGXn3gcMOR1i+HTJ0x3276FcbzuqnjPfmKB+Cue8+F7XdxjRFXwFiw4utV8sqsvB0M6i8SGSu8KjqokGHSqS7k7x3ckRKk9zKk9EuSfSSdeqpJ9VSe6uSem5JEySR6pJE//2gAIAQIAAQUB7I7SRJEnzI+c40TX83R3ePpPDqjrJMkScEcDlQqxVHV47nh0R0kmSZOKORzoVYqjo8djwtFyKSZOaOZFCrDotnQ8KRUikUkIkmjYdFMs8GhyamokIVGxsNjPP2//2gAIAQMAAQUB70d2fSfRI5FGeEnznzM51hUbnajszudpHIozxk4HBkVhUbnWjqzsdZHJpnlJyOLIrCo3LotnQ6SamhEnM5smjY3KopllSamhMkkMVGxuOhsY5NTQUiEzY2N/2//aAAgBAQABBQHhJwk4I4/8stFoaykJCR1WO8neTvBEEQRJEjkcjk1zxk4ycUcSy0WhrKQkJHVY7SdpO0EQRBEkSORyOTU4ycZOKORZaLQ1lISEjosdpO0naCIIgiSJHI5HJqcpOUnJHIstFoaykJCR0WOsnWTrBEEQRJMjkcjk1OUnKTkjmUUikNZSEhItY6ydZOsEwTBMkyORyOTU5yc5OaOZRSKQ0JCQkWsdJOknSCYJgmSZHI5HJqRJEkIgopFIaPDw8LRclyXBMEwTIpNTU1NSJIkhEjGho8PDw8KRclyXAoFApFJqampqTJMkokY0NHh4eHhSKkqSoFAoFIpNTU1NSZJklCGNDR4eHh4NFSVJUCgUCkUmpqamopFIkL8eHh4eHh4NDkcjg0NDU1NTU1NTU1PPz4eHh4eHh4ampoaGhqampqampgx/rBgx+MGDB/J/JgwYMGDBg//aAAgBAgIGPwE6lS6P/9oACAEDAgY/AeU//9oACAEBAQY/ARX/AP/aAAgBAgMBPxC0tw7kQQNCRRlMrG0lvn8Fpbj2IigaEijP5xvJb5/BbldyIIHhIoy2cbTxF6CKBo4C50byfbiqQDxgWuGVGx9sqihANGBajMpth0dHR1hHZ2dnef/aAAgBAwMBPxCeSaRJkkbx6JFAkNEEGnj+hLJNIsyTPDokECQ0RQa+VLJJIkyTPCtBBAsQQQaWVPJNIsySMZWyIoEiCKDShYpyYSSYZWxELBAaxYpSQSSTNAJBALO7z0dHR1ns7Oz/2gAIAQEDAT8QrKioX+BbLi/j/v5y4vLioqKzXx/qyoqE1+hbLi/lv3cXlxXoqKzTw/uUlBQLr9CeAcrrC0sPTkdPBW5WVFQmhPAOVVxeXHpPRh18FblJQUC6F8FpTWFpYes9XL1blZUVCaEyO3ipri8u8AKrcrKisXQmR2iKKOkuLy49PAdllm+UoF0Lm3uIoo6/AJ3sss34dILm3uIoo6eF3pPVlWWWb8EFEyL3EUUNfAT0noyrLL46SDQwy/BzIggiuP0UEUhoYfH7LDLC9RBFc/2jRo0a4DXlJ/8A/9k=')";
                    p.pad.style.backgroundRepeat = "no-repeat";
                    p.pad.style.backgroundPosition = "0 0";
                    /** UNTIL HERE **/

                    // place pointers
                    redrawPad();
                    redrawSld();

                    $SS.jscolor.picker.owner = THIS;
                    document.getElementsByTagName("body")[0].appendChild(p.boxB);
                }

                function getPickerDims(o) {
                    var dims = [
                        2 * o.pickerInset + 2 * o.pickerFace + $SS.jscolor.images.pad[0] +
                        (o.slider ? 2 * o.pickerInset + 2 * $SS.jscolor.images.arrow[0] + $SS.jscolor.images.sld[0] : 0),
                        2 * o.pickerInset + 2 * o.pickerFace + $SS.jscolor.images.pad[1]
                    ];

                    return dims;
                }

                function redrawPad() {
                    // redraw the pad pointer
                    var yComponent = 1;
                    var x = Math.round((THIS.hsv[0] / 6) * ($SS.jscolor.images.pad[0] - 1));
                    var y = Math.round((1 - THIS.hsv[yComponent]) * ($SS.jscolor.images.pad[1] - 1));
                    $SS.jscolor.picker.padM.style.backgroundPosition =
                        (THIS.pickerFace + THIS.pickerInset + x - Math.floor($SS.jscolor.images.cross[0] / 2)) + "px " +
                        (THIS.pickerFace + THIS.pickerInset + y - Math.floor($SS.jscolor.images.cross[1] / 2)) + "px";

                    // redraw the slider image
                    var seg = $SS.jscolor.picker.sld.childNodes;

                    var rgb = HSV_RGB(THIS.hsv[0], THIS.hsv[1], 1);
                    for (var i = 0; i < seg.length; i += 1)
                        seg[i].style.backgroundColor = "rgb(" +
                        (rgb[0] * (1 - i / seg.length) * 100) + "%," +
                        (rgb[1] * (1 - i / seg.length) * 100) + "%," +
                        (rgb[2] * (1 - i / seg.length) * 100) + "%)";
                }

                function redrawSld() {
                    // redraw the slider pointer
                    var yComponent = 2;
                    var y = Math.round((1 - THIS.hsv[yComponent]) * ($SS.jscolor.images.sld[1] - 1));
                    $SS.jscolor.picker.sldM.style.backgroundPosition =
                        "0 " + (THIS.pickerFace + THIS.pickerInset + y - Math.floor($SS.jscolor.images.arrow[1] / 2)) + "px";
                }

                function isPickerOwner() {
                    return $SS.jscolor.picker && $SS.jscolor.picker.owner === THIS;
                }

                function blurTarget() {
                    if (valueElement === target)
                        THIS.importColor();

                    THIS.hidePicker();
                }

                function blurValue() {
                    if (valueElement !== target)
                        THIS.importColor();
                }

                function setPad(e) {
                    var mpos = $SS.jscolor.getRelMousePos(e);
                    var x = mpos.x - THIS.pickerFace - THIS.pickerInset;
                    var y = mpos.y - THIS.pickerFace - THIS.pickerInset;
                    THIS.fromHSV(x * (6 / ($SS.jscolor.images.pad[0] - 1)), 1 - y / ($SS.jscolor.images.pad[1] - 1), null, leaveSld);
                }

                function setSld(e) {
                    var mpos = $SS.jscolor.getRelMousePos(e);
                    var y = mpos.y - THIS.pickerFace - THIS.pickerInset;
                    THIS.fromHSV(null, null, 1 - y / ($SS.jscolor.images.sld[1] - 1), leavePad);
                }

                function dispatchImmediateChange() {
                    if (THIS.onImmediateChange)
                        if (typeof THIS.onImmediateChange === "string")
                            eval(THIS.onImmediateChange);
                        else
                            THIS.onImmediateChange(THIS);
                }

                var THIS = this;
                var abortBlur = false;
                var valueElement = this.valueElement,
                    styleElement = this.styleElement;
                var holdPad = false,
                    holdSld = false;
                var leaveValue = 1 << 0,
                    leaveStyle = 1 << 1,
                    leavePad = 1 << 2,
                    leaveSld = 1 << 3;

                // target
                $(target).bind("focus", THIS.showPicker)
                    .bind("blur", function() {
                        if (!abortBlur)
                            window.setTimeout(function() {
                                abortBlur || blurTarget();
                                abortBlur = false;
                            });
                        else
                            abortBlur = false;
                    });

                // valueElement
                if (valueElement) {
                    var updateField = function() {
                        THIS.fromString(valueElement.value, leaveValue);
                        dispatchImmediateChange();
                    };
                    $(valueElement).bind("keyup", updateField)
                        .bind("input", updateField)
                        .bind("blur", blurValue)
                        .attr("autocomplete", "off");
                }

                // styleElement
                if (styleElement) {
                    styleElement.jscStyle = {
                        backgroundColor: styleElement.style.backgroundColor,
                        color: styleElement.style.color
                    };
                }

                this.importColor();
            }
        },

        /* STRUCTS */
        Color: function(hex, incHover) {
            this.hex = "#" + hex;
            this.private_rgb = $SS.RGBFromHex(hex);
            this.rgb = this.private_rgb.join(",");
            this.isLight = $SS.isLight(this.private_rgb);
            this.shiftRGB = function(shift, smart) {
                var rgb = this.private_rgb.slice(0);

                shift = smart ?
                    (this.isLight ? (shift < 0 ? shift : -shift) : Math.abs(shift)) : shift;

                rgb[0] = Math.min(Math.max(rgb[0] + shift, 0), 255);
                rgb[1] = Math.min(Math.max(rgb[1] + shift, 0), 255);
                rgb[2] = Math.min(Math.max(rgb[2] + shift, 0), 255);

                return rgb.join(",");
            };

            if (incHover)
                this.hover = this.shiftRGB(16, true);
        },
        colorToHex: function(color) {
            var digits, hex;

            if (color.substr(0, 1) === '#') {
                return color.slice(1, color.length);
            }
            if (digits = color.match(/(.*?)rgba?\((\d+), ?(\d+), ?(\d+)(.*?)\)/)) {
                hex = ((parseInt(digits[2], 10) << 16) | (parseInt(digits[3], 10) << 8) | (parseInt(digits[4], 10))).toString(16);
                while (hex.length < 6) {
                    hex = "0" + hex;
                }
                return hex;
            } else {
                return false;
            }
        },
        Image: function(img, RPA) {
            this.img = img;
            this.RPA = RPA;
            this.get = function() {
                if (!this.img) return "none ";

                var ret = "url('";
                if ($SS.validBase64(this.img))
                    ret = "data:image/" + $SS.typeofBase64(this.img) + ";base64," + this.img;
                else
                    ret = this.img;

                return (this.RPA !== undefined ? "url('" : "") + ret + (this.RPA !== undefined ? "')" + this.RPA : "");
            };
        },
        Theme: function(index) {
            var theme;

            if ((theme = $SS.conf["Themes"][index]) == undefined) {
                this.hidden = true;
                return;
            }

            this.index = index;
            this.hidden = $SS.conf["Hidden Themes"].indexOf(index) !== -1;
            this.name = theme.name;
            this.authorName = theme.authorName || "Anonymous";
            this.authorTrip = theme.authorTrip || "!..NoTrip..";
            this.default = theme.default;
            this.replyBrder = theme.replyBrder;
            this.bgImg = new $SS.Image(theme.bgImg, theme.bgRPA);
            this.replyOp = theme.replyOp;
            this.navOp = theme.navOp;
            this.bgColor = new $SS.Color(theme.bgColor);
            this.mainColor = new $SS.Color(theme.mainColor);
            this.brderColor = new $SS.Color(theme.brderColor);
            this.inputColor = new $SS.Color(theme.inputColor, true);
            this.inputbColor = new $SS.Color(theme.inputbColor);
            this.blinkColor = new $SS.Color(theme.blinkColor);
            this.unreadColor = new $SS.Color(theme.unreadColor);
            this.linkColor = new $SS.Color(theme.linkColor);
            this.linkHColor = new $SS.Color(theme.linkHColor);
            this.qlColor = new $SS.Color(theme.qlColor);
            this.nameColor = new $SS.Color(theme.nameColor);
            this.quoteColor = new $SS.Color(theme.quoteColor);
            this.textColor = new $SS.Color(theme.textColor);
            this.titleColor = new $SS.Color(theme.titleColor);
            this.tripColor = new $SS.Color(theme.tripColor);
            this.boardColor = new $SS.Color(theme.boardColor);
            this.headerColor = new $SS.Color(theme.headerColor);
            this.headerLColor = new $SS.Color(theme.headerLColor);
            this.headerLHColor = new $SS.Color(theme.headerLHColor);
            this.headerBGColor = new $SS.Color(theme.headerBGColor);
            this.headerbColor = new $SS.Color(theme.headerbColor);
            this.postHLColor = new $SS.Color(theme.postHLColor);
            this.quotesYouHLColor = new $SS.Color(theme.quotesYouHLColor);
            this.ownPostHLColor = new $SS.Color(theme.ownPostHLColor);
            this.threadHLColor = new $SS.Color(theme.threadHLColor);
            this.replybgHLColor = new $SS.Color(theme.replybgHLColor);
            this.replyslctColor = new $SS.Color(theme.replyslctColor);
            this.checkMark = new $SS.Image(inputImages, "no-repeat center " + (this.inputColor.isLight ? 0 : -8) + "px");
            this.radioCheck = new $SS.Image(inputImages, "no-repeat center " + (this.inputColor.isLight ? -16 : -24) + "px");
            this.codeBackground = (this.bgColor.isLight ? "255, 255, 255, 0.2" : "0, 0, 0, 0.2");
            this.codeBorder = (this.bgColor.isLight ? "204, 204, 204, 1.0" : "204, 204, 204, 0.1");
            this.dIcons = new $SS.Image(theme.dIcons);
            this.icons = {
                imgExpand: "<svg viewBox='0 0 30 30' preserveAspectRatio='true' height='16' width='16' xmlns='http://www.w3.org/2000/svg'>" +
                    "<path fill='rgb(" + this.headerColor.rgb + ")' d='M25.545,23.328,17.918,15.623,25.534,8.007,27.391,9.864,29.649,1.436,21.222,3.694,23.058,5.53,15.455,13.134,7.942,5.543,9.809,3.696,1.393,1.394,3.608,9.833,5.456,8.005,12.98,15.608,5.465,23.123,3.609,21.268,1.351,29.695,9.779,27.438,7.941,25.6,15.443,18.098,23.057,25.791,21.19,27.638,29.606,29.939,27.393,21.5z'/></svg>",
                imgContract: "<svg viewBox='0 0 30 30' preserveAspectRatio='true' height='16' width='16' xmlns='http://www.w3.org/2000/svg'>" +
                    "<path fill='rgb(" + this.headerColor.rgb + ")' d='M25.083,18.895l-8.428-2.259l2.258,8.428l1.838-1.837l7.053,7.053l2.476-2.476l-7.053-7.053L25.083,18.895zM5.542,11.731l8.428,2.258l-2.258-8.428L9.874,7.398L3.196,0.72L0.72,3.196l6.678,6.678L5.542,11.731zM7.589,20.935l-6.87,6.869l2.476,2.476l6.869-6.869l1.858,1.857l2.258-8.428l-8.428,2.258L7.589,20.935zM23.412,10.064l6.867-6.87l-2.476-2.476l-6.868,6.869l-1.856-1.856l-2.258,8.428l8.428-2.259L23.412,10.064z'/></svg>",
                menuIcon: "<svg viewBox='7 7 20 20' preserveAspectRatio='true' height='14' width='14' xmlns='http://www.w3.org/2000/svg'>" +
                    "<path fill='rgb(" + this.headerLColor.rgb + ")' d='M4.083,14H14V4.083H4.083V14zM17,4.083V14h9.917V4.083H17zM17,26.917h9.917v-9.918H17V26.917zM4.083,26.917H14v-9.918H4.083V26.917z'/></svg>",
                star: "<svg viewBox='0 0 30 30' preserveAspectRatio='true' xmlns='http://www.w3.org/2000/svg'>" +
                    "<path fill='rgb(" + this.textColor.rgb + ")' d='M14.615,4.928c0.487-0.986,1.284-0.986,1.771,0l2.249,4.554c0.486,0.986,1.775,1.923,2.864,2.081l5.024,0.73c1.089,0.158,1.335,0.916,0.547,1.684l-3.636,3.544c-0.788,0.769-1.28,2.283-1.095,3.368l0.859,5.004c0.186,1.085-0.459,1.553-1.433,1.041l-4.495-2.363c-0.974-0.512-2.567-0.512-3.541,0l-4.495,2.363c-0.974,0.512-1.618,0.044-1.432-1.041l0.858-5.004c0.186-1.085-0.307-2.6-1.094-3.368L3.93,13.977c-0.788-0.768-0.542-1.525,0.547-1.684l5.026-0.73c1.088-0.158,2.377-1.095,2.864-2.081L14.615,4.928z'/></svg>",
                backlink: "<svg viewBox='0 0 30 30' preserveAspectRatio='true' xmlns='http://www.w3.org/2000/svg'>" +
                    "<path fill='rgb(" + this.blinkColor.rgb + ")' d='M12.981,9.073V6.817l-12.106,6.99l12.106,6.99v-2.422c3.285-0.002,9.052,0.28,9.052,2.269c0,2.78-6.023,4.263-6.023,4.263v2.132c0,0,13.53,0.463,13.53-9.823C29.54,9.134,17.952,8.831,12.981,9.073z'/></svg>",
                quickReply: "<svg viewBox='0 0 30 30' preserveAspectRatio='true' height='16' width='16' xmlns='http://www.w3.org/2000/svg'>" +
                    "<path fill='rgb(" + this.headerColor.rgb + ")' d='M16,5.333c-7.732,0-14,4.701-14,10.5c0,1.982,0.741,3.833,2.016,5.414L2,25.667l5.613-1.441c2.339,1.317,5.237,2.107,8.387,2.107c7.732,0,14-4.701,14-10.5C30,10.034,23.732,5.333,16,5.333z'/></svg>",
                threadWatcher: "<svg viewBox='0 0 30 30' preserveAspectRatio='true' height='20' width='20' xmlns='http://www.w3.org/2000/svg'>" +
                    "<path fill='rgb(" + this.headerColor.rgb + ")' d='M16,8.286C8.454,8.286,2.5,16,2.5,16s5.954,7.715,13.5,7.715c5.771,0,13.5-7.715,13.5-7.715S21.771,8.286,16,8.286zM16,20.807c-2.649,0-4.807-2.157-4.807-4.807s2.158-4.807,4.807-4.807s4.807,2.158,4.807,4.807S18.649,20.807,16,20.807zM16,13.194c-1.549,0-2.806,1.256-2.806,2.806c0,1.55,1.256,2.806,2.806,2.806c1.55,0,2.806-1.256,2.806-2.806C18.806,14.451,17.55,13.194,16,13.194z'/></svg>",
                threadClosed: "<svg viewBox='0 0 30 30' preserveAspectRatio='true' height='16' width='16' xmlns='http://www.w3.org/2000/svg'>" +
                    "<path fill='rgb(" + this.headerColor.rgb + ")' d='M22.335,12.833V9.999h-0.001C22.333,6.501,19.498,3.666,16,3.666S9.666,6.502,9.666,10h0v2.833H7.375V25h17.25V12.833H22.335zM11.667,10C11.667,10,11.667,10,11.667,10c0-2.39,1.944-4.334,4.333-4.334c2.391,0,4.335,1.944,4.335,4.333c0,0,0,0,0,0v2.834h-8.668V10z'/></svg>",
                threadPinned: "<svg viewBox='0 0 30 30' preserveAspectRatio='true' height='16' width='16' xmlns='http://www.w3.org/2000/svg'>" +
                    "<path fill='rgb(" + this.tripColor.rgb + ")' d='M16,3.5c-4.142,0-7.5,3.358-7.5,7.5c0,4.143,7.5,18.121,7.5,18.121S23.5,15.143,23.5,11C23.5,6.858,20.143,3.5,16,3.5z M16,14.584c-1.979,0-3.584-1.604-3.584-3.584S14.021,7.416,16,7.416S19.584,9.021,19.584,11S17.979,14.584,16,14.584z'/></svg>",
                threadArchived: "<svg viewBox='0 0 30 30' preserveAspectRatio='true' height='16' width='16' xmlns='http://www.w3.org/2000/svg'>" +
                    "<path fill='rgb(" + this.tripColor.rgb + ")' d='M15.5,3.029l-10.8,6.235L4.7,21.735L15.5,27.971l10.8-6.235V9.265L15.5,3.029zM24.988,10.599L16,15.789v10.378c0,0.275-0.225,0.5-0.5,0.5s-0.5-0.225-0.5-0.5V15.786l-8.987-5.188c-0.239-0.138-0.321-0.444-0.183-0.683c0.138-0.238,0.444-0.321,0.683-0.183l8.988,5.189l8.988-5.189c0.238-0.138,0.545-0.055,0.684,0.184C25.309,10.155,25.227,10.461,24.988,10.599z'/></svg>",
                menuButton: "<svg viewBox='0 0 30 30' preserveAspectRatio='true' height='16' width='16' xmlns='http://www.w3.org/2000/svg'>" +
                    "<path fill='rgb(" + this.blinkColor.rgb + ")' d='M10.129,22.186 16.316,15.999 10.129,9.812 13.665,6.276 23.389,15.999 13.665,25.725z'/></svg>",
                downArrow: "<svg viewBox='7 4 29 27' preserveAspectRatio='true' height='16' width='16' xmlns='http://www.w3.org/2000/svg'>" +
                    "<path fill='rgb(" + this.tripColor.rgb + ")' d='M8.037,11.166L14.5,22.359c0.825,1.43,2.175,1.43,3,0l6.463-11.194c0.826-1.429,0.15-2.598-1.5-2.598H9.537C7.886,8.568,7.211,9.737,8.037,11.166z'/></svg>"
            };

            if (theme.customCSS) {
                try {
                    if (theme.customCSS[0] === "(")
                        theme.customCSS = "\"+".concat(theme.customCSS);
                    if (theme.customCSS[theme.customCSS.length - 1] === ")")
                        theme.customCSS += "+\"";

                    this.customCSS = eval($SS.trimLineBreaks(new String('"' + theme.customCSS.replace(/\"/g, "\\\"").replace(/\'/g, "\\\'") + '"')));
                } catch (e) {
                    alert("Error evaluating " + this.name + "'s theme.customCSS!\n" + e.message);
                    this.customCSS = theme.customCSS;
                }
            } else
                this.customCSS = "";

            this.preview = function() {
                var div = $("<div " + (this.hidden ? "hidden=true " : "") +
                    " id=theme" + this.index + " class=\'theme-preview " + (($SS.conf["Selected Theme"] == $SS.conf["NSFW Theme"]) && ($SS.conf["Selected Theme"] == this.index) ? "selected nsfw" : ($SS.conf["Selected Theme"] == this.index ? "selected " : "") + ($SS.conf["NSFW Theme"] == this.index ? "nsfw " : "")) + "\'>").html("<div class=reply " +
                    "style='background-color:" + this.mainColor.hex + "!important;border:1px solid " + this.brderColor.hex + "!important;color:" + this.textColor.hex + "!important'>" +
                    "<div class=riceCheck style='background-color:" + this.inputColor.hex + "!important;border:1px solid " + this.inputbColor.hex + "!important;box-shadow:rgba(" + this.mainColor.shiftRGB(64) + ",.3) 0 1px;'></div>" +
                    "<span style='color:" + this.titleColor.hex + "!important; font-weight: 700 !important'>" + this.name + "</span> " +
                    "<span style='color:" + this.nameColor.hex + "!important; font-weight: 700 !important'>" + this.authorName + "</span>" +
                    "<span style='color:" + this.tripColor.hex + "!important'> " + this.authorTrip + "</span>" +
                    "<time style='color:" + this.textColor.hex + "'> 20XX.01.01 12:00 </time>" +
                    "<a href='javascript:;' style='color:" + this.linkColor.hex + "!important' " +
                    "onmouseover='this.setAttribute(\"style\",\"color:" + this.linkHColor.hex + "!important\")' " +
                    "onmouseout='this.setAttribute(\"style\",\"color:" + this.linkColor.hex + "!important\")'>No.22772469</a>" +
                    "<br><blockquote><span style='color:" + this.quoteColor.hex + "'>>implying this isn't a post</span><br>Post content is right here.</blockquote>" +
                    "<p class='theme-buttons-container'>" +
                    "<a href='javascript:;' title='Sets the SFW theme.' style='background-color:" + this.inputColor.hex + "!important;border:1px solid " + this.inputbColor.hex + "!important;color:" + this.textColor.hex + "!important'>SFW</a>" +
                    "<a href='javascript:;' title='Sets the NSFW theme.' style='background-color:" + this.inputColor.hex + "!important;border:1px solid " + this.inputbColor.hex + "!important;color:" + this.textColor.hex + "!important'>NSFW</a>" +
                    "<a href='javascript:;' title=Edit style='background-color:" + this.inputColor.hex + "!important;border:1px solid " + this.inputbColor.hex + "!important;color:" + this.textColor.hex + "!important'>Edit</a>" +
                    "<a href='javascript:;' title=Delete style='background-color:" + this.inputColor.hex + "!important;border:1px solid " + this.inputbColor.hex + "!important;color:" + this.textColor.hex + "!important'>Delete</a></p>" +
                    "<h3 class='sfw-label notsafe'>NSFW</h3>" +
                    "<h3 class='sfw-label safe'>SFW</h3>" +
                    "<h3 class='sfw-label both'>SFW & NSFW</h3>" +
                    "</div>");

                $(div).bind("click", function() {
                    var $this = $(this);

                    if ($this.hasClass("selected nsfw")) return;

                    $this.parent().children(".selected").removeClass("selected");
                    $this.parent().children(".nsfw").removeClass("nsfw");
                    $this.addClass("selected nsfw");
                    $SS.options.save();
                });

                $("a[title='Sets the SFW theme.']", div).bind("click", function(e) {
                    e.stopPropagation();
                    var $this = $(this);
                    if ($this.hasClass("selected")) return;

                    $this.parent().parent().parent().parent().children(".selected").removeClass("selected");
                    $this.parent().parent().parent().addClass("selected");
                });

                $("a[title='Sets the NSFW theme.']", div).bind("click", function(e) {
                    e.stopPropagation();
                    var $this = $(this);
                    if ($this.hasClass("nsfw")) return;

                    $this.parent().parent().parent().parent().children(".nsfw").removeClass("nsfw");
                    $this.parent().parent().parent().addClass("nsfw");
                });
                $("a[title=Delete]", div).bind("click", function(e) {
                    e.stopPropagation();
                    $SS.options.deleteTheme(index);
                });
                $("a[title=Edit]", div).bind("click", function(e) {
                    e.stopPropagation();
                    $SS.options.showTheme(index);
                });

                return div;
            }
        },

        /* HELPER METHODS */
        formatFont: function(font) {
            if (font === "sans-serif" || font === "monospace")
                return font;

            return "'" + font + "'";
        },
        RGBFromHex: function(hex) {
            var rgb = [];
            hex = parseInt(hex, 16);

            rgb[0] = (hex >> 16) & 0xFF;
            rgb[1] = (hex >> 8) & 0xFF;
            rgb[2] = hex & 0xFF;

            return rgb;
        },
        isLight: function(rgb) {
            return rgb[0] + rgb[1] + rgb[2] >= 400;
        },
        trimLineBreaks: function(str) {
            return str.replace(/(\r\n|\r|\n)/gm, "");
        },
        cleanBase64: function(b64) {
            return b64.replace(/^(data:image\/(?:gif|jpe?g|png);base64,)(\r\n|\r|\n)?/gmi, "");
        },
        typeofBase64: function(b64) {
            switch (b64.substr(0, 8)) {
                case "PD94bWwg":
                    return "svg+xml";
                case "R0lGODlh":
                    return "gif";
                case "/9j/4AAQ":
                case "/9j/4QAY":
                    return "jpeg";
                case "iVBORw0K":
                default:
                    return "png";
            }
        },
        validBase64: function(b64) {
            return /^(?:data:image\/(?:gif|jpe?g|png);base64,)?(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=|[A-Za-z0-9+\/]{4})$/i.test(b64);
        },
        validImageURL: function(img) {
            return /^https?:\/\/.+$/i.test(img);
        },
        getLocation: function(url) {
            var obj;

            if (typeof url === "string") {
                obj = document.createElement("a");
                obj.href = location.protocol + "//" + url;
            } else
                obj = window.location;

            var pathname = obj.pathname.substr(1).split("/");

            return {
                sub: obj.hostname.split(".")[0],
                board: pathname[0],
                home: location.hostname === "www.4chan.org",
                nsfw: /^(aco|b|bant|d|e|f|gif|h|hr|r|s|t|u|wg|i|ic|r9k|hm|y|hc|pol|soc|s4s|trash)$/.test(pathname[0]),
                reply: pathname[1] === "thread",
                catalog: pathname[1] === "catalog",
                archive: pathname[1] === "archive"
            };
        }
    };
    /* END STYLE SCRIPT CLASSES */
    $SS.init();
})();
