(function () {
    var defaultConfig = {
        ":: Main Rice": ["header", ""],
        "Left Margin": [
            65, "Change the size of the left margin.", [{
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
            65, "Change the size of the right margin.", [{
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
        "Rounded Corners": [true, "Styles replies, menus and Quick Reply to have subtly rounded corners."],
        "Invert Spoiler": [false, "Inverts colors for text spoilers."],
        "Underline All Links": [false, "Underlines all links in the page."],
        "Show 4chan Pass Users": [true, "Show a four leaf clover indicating a pass user."],
        "Show 4chan Pass Login": [false, "Show a link to login with your 4chan pass. Please reload page."],
        "Show Banner": [false, "Toggle visibility of the banner.", null, true],
        "Reduce Banner Opacity": [false, "Reduce opacity of the banner for easier viewing.", "Show Banner", true, true],
        "Show Board Name": [true, "Toggle visibility of the board name."],
        "Show Blotter": [false, "Toggle visibility of the 4chan news blotter."],
        "Show 4chan Ads": [false, "Opts into 4chan\'s banner ads.", null, true],
        "Show Board Banners": [false, "Toggle visibility of board banners.", "Show 4chan Ads", true, true],
        "Show Top Ad": [false, "Show the top 4chan banner ad.", "Show 4chan Ads", true, true],
        "Show Bottom Ad": [false, "Show the bottom 4chan banner ad.", "Show 4chan Ads", true, true],
        "Show Buy Ad Banner": [false, "Show the [Advertise on 4chan] banner below ads.", "Show 4chan Ads", true, true],
        "Reduce Ad Opacity": [false, "Reduce the opacity of ads until hover for easier viewing.", "Show 4chan Ads", true, true],
        "Show Navigation Links": [true, "Toggle visibility of the navigation links at the top and bottom of the threads.", null, true],
        "Show Top Links": [true, "Toggle visibility of the top navigation links.", "Show Navigation Links", true, true],
        "Show Bottom Links": [true, "Toggle visibility of the bottom navigation links.", "Show Navigation Links", true, true],
        ":: Sidebar": ["header", ""],
        "Sidebar Position": [
            3, "Change the position of the sidebar or disable it. If this option is enabled the QR will be locked to the Sidebar.", [{
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
        "SS-like Sidebar": [false, "Darkens the sidebar and adds a border like 4chan Style Script."],
        "Minimal Sidebar": [false, "Shrinks the sidebar and moves the banner."],
        ":: Quick Reply": ["header", ""],
        "Autohide Style": [
            0, "Changes how the quick reply is hidden.", [{
                name: "Disabled",
                value: 0
            }, {
                name: "Collapse",
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
        "Animated Transition": [false, "Enables a transition animation for the QR."],
        "Expanding Form Inputs": [true, "Makes certain form elements expand on focus."],
        "Remember Comment Draft": [false, "Will save and restore unsubmitted QR comments (5 second delay). Drafts expire after 24h."],
        "Auto-Convert Images": [false, "Auto-convert WebP images to JPEG, and convert any image exceeding the board's file size or dimensions limit to JPEG."],
        "Single View Captcha": [false, "Shows the captcha challenges in a single view.", null, true],
        "Auto Submit": [false, "Automatically submit the post after completing the last captcha challenge.", "Single View Captcha", true, true],
        ":: Replies": ["header", ""],
        "Fit Width": [true, "Replies stretch to the width of the page.", null, true],
        "Fit Post Menu": [false, "Sets the post menu to the right.", "Fit Width", true, true],
        "Fit Expanded Images": [false, "Expanded images will better fit to the viewport. Enable 'Fit height' in 4chan X's header menu to use."],
        "Show Reply Header": [true, "Shows reply header background and line border."],
        "Show File Info": [true, "Hides filename, dimensions and size info."],
        "Underline QuoteLinks": [false, "Underlines quotelinks only."],
        "Indent OP": [true, "Indents the OP instead of touching the screen."],
        "Allow Wrapping Around OP": [false, "Allow for replies to wrap around OP instead of being forced onto their own line."],
        "OP Background": [true, "Give OP a background similar to a reply."],
        "Recolor Even Replies": [false, "Makes every other post a darker color. If Quote Threading is enabled darkens every root reply."],
        "Reduce Thumbnail Opacity": [false, "Reduces opacity of thumbnails."],
        "Backlink Icons": [false, "Use icons for backlinks instead of text."],
        "Backlink Shadow": [false, "Add a shadow to the backlink text."],
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
        "Justified Text": [false, "Justifies the teaser text of every thread to be more uniform."],
        "Show Background": [true, "Threads receive a matching background."],
        "Unified Thumbnail Size": [false, "Makes all thumbnails the same size regardless of aspect ratio."],
        ":: Post Decoration": ["header", ""],
        "Decoration Style": [
            0, "Changes the decoration of all posts.", [{
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
            3, "Changes decoration width of posts including (You)s.", [{
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
                name: "Inset",
                value: "inset"
            }, {
                name: "Solid",
                value: "solid"
            }]
        ],
        ":: Fonts": ["header", ""],
        "Font Family": [
            "sans-serif", "Set the default font family.", [{
                name: "Default (sans-serif)",
                value: "sans-serif"
            }, {
                name: "Monospace",
                value: "monospace"
            }, {	
                name: "Serif",
                value: "serif"
            }, {
                name: "Cursive",
                value: "cursive"
            }]
        ],
        "Custom Font": ["", "Enter a custom font name. Please make sure the font name is exact. Overrides the Font Family option if set. "],
        "Font Size": [13, "Set the font size of text (in pixels). Default: 13px. Menu elements have a 18px (max) and 9px (min) limit to avoid breaking their layouts."],
        "UI Font Size": [11, "Set the font size of certain QR and button elements (in pixels). Default: 11px."],
        "Backlink Font Size": [10, "Set the font size of backlinks (in pixels). Default: 10px."],
        "Bitmap Font": [false, "Check this if you are using a bitmap font."],
        "Misc": [],
        ":: Notifications": ["header", ""],
        "Toast Notifications": [true, "Show toast notifications for events.", null, true],
        "Style 4chanX Notifications": [true, "Show 4chanX notifications in the same style as StyleChan's toasts.", "Toast Notifications", true, true],
        "Center Notifications": [false, "Center notifications at the top below the header bar.", "Toast Notifications", true, true],
        "Full Border": [false, "Use a full border to make notifications more visible. Border style follows the Highlight Style and Width options.", "Toast Notifications", true, true],
        ":: Theming": ["header", ""],
        "System Theming": [false, "Use system color scheme detection to automatically select themes. Overrides NSFW/SFW theme selection.", null, true],
        "Dark Theme": [0, "Theme to use when system is in dark mode.", "System Theming", true, true],
        "Light Theme": [0, "Theme to use when system is in light mode.", "System Theming", true, true],
        "Use StyleChan Icons": [true, "Replace 4chan icons with themed SVG icons. Disable to use vanilla 4chan icons.", null, true],
        "Style Scrollbars": [false, "Customize the look of scrollbars to match the theme.", null, true],
        "Thin Scrollbars": [false, "Use thinner scrollbars.", "Style Scrollbars", true, true],
        "Enable Mascots": [false, "Display mascot images on the page and adjust their opacity.", null, true],
        "Mascots": ["[]", "Mascot data (URLs and opacity).", "Enable Mascots", true, true],
        ":: 4chan X": ["header", ""],
        "Show QR Reply Button": [false, "Toggle visibility of the QR reply and new thread buttons."],
        "Show Original Form": [false, "Show the original 4chan posting form."],
        "Show Header Background Gradient": [false, "Gives the header bar a gradient background."],
        "Show Header Shadow": [true, "Gives the header a drop shadow."],
        "Highlight Current Board": [true, "Gives the current board link a bottom highlight border."],
        ":: 4chan": ["header", ""],
        "Relative Post Dates": [false, "Display dates like '3 minutes ago'. Tooltip shows the original timestamp."],
        "Follow Cursor": [true, "Image previews follow the cursor instead of staying in the corner."],
        "Show Reply Form": [true, "Toggle visibility of the reply form and Reply to Thread button.", null, true],
        "Show Only in Catalog": [true, "Show the reply form only when browsing the catalog.", "Show Reply Form", true, true],
        "Pin Quick Reply": [false, "Open the quick reply automatically when entering a thread."],
        "Catalog Links": [false, "Converts board navigation links to catalog links."],
        "Watch Thread on Reply": [false, "Automatically adds the thread to the thread watcher when posting a reply."],
        "Highlight Posts Quoting You": [true, "Highlights any posts that contain a quote to your post."],
        "Highlight Own Posts": [true, "Highlights own posts."],
        "Themes": [],
        "Hidden Themes": [],
        "Selected Theme": 1,
        "NSFW Theme": 0
    },
        NAME = "StyleChan",
        NAMESPACE = "StyleChan.",
        VERSION = "1.6.1",
        CHANGELOG = "https://github.com/3nly/StyleChan/releases/latest",
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
        $lib, $SS,
        $docBody = null,
        $docHead = null;

    // Cache DOM references for performance
    function getDocBody() {
        return $docBody || ($docBody = document.body);
    }
    function getDocHead() {
        return $docHead || ($docHead = document.head);
    }

    if (!Array.isArray)
        Array.isArray = function (arg) {
            return Object.prototype.toString.call(arg) === "[object Array]";
        };
    /* STYLE SCRIPT LIBRARY */
    /* More or less based off jQuery */
    $lib = window.$ = function (selector, root) {
        return this instanceof $lib ?
            this.init(selector, root) : new $lib(selector, root);
    };
    $.waitFor = function (selector, cb) {
        var el = document.querySelector(selector);
        if (el) { cb(el); return; }
        var obs = new MutationObserver(function () {
            var el = document.querySelector(selector);
            if (el) { cb(el); obs.disconnect(); }
        });
        obs.observe(document.documentElement, { childList: true, subtree: true });
    };
    $.waitForFn = function (test, cb) {
        var result = test();
        if (result) { cb(result); return; }
        setTimeout(function () { $.waitForFn(test, cb); }, 25);
    };

    $lib.prototype = {
        constructor: $lib,
        elems: [],
        length: function () {
            return this.elems.length;
        },
        /* CONSTRUCTOR */
        init: function (selector, root) {
            if (selector == null || selector == undefined) return this;

            if (selector.constructor === $lib) return selector;
            else if (typeof selector === "string") {
                root = root || document;
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
                                val = val.substr(1, val.length - 2);

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
                    if (!root || typeof root.querySelectorAll !== "function") {
                        this.elems = [];
                        return this;
                    }
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
        get: function (index) {
            if (index == undefined && this.elems.length === 1)
                return this.elems[0];
            else if (index == undefined && !this.hasSingleEl())
                return this.elems;

            return this.elems[index];
        },

        /* DOM MANIPULATION */
        append: function (el) {
            if (el.constructor === $lib)
                el = el.get();

            return this.each(function () {
                this.appendChild(el);
            });
        },
        before: function (el) {
            if (el.constructor === $lib)
                el = el.get();

            return this.each(function () {
                this.parentNode.insertBefore(el, this);
            });
        },
        replace: function (el) {
            return this.each(function () {
                $(this).before(el).remove();
            });
        },
        html: function (html) {
            if (html == undefined)
                return this.elems[0].innerHTML;

            return this.each(function () {
                this.innerHTML = html;
            });
        },
        text: function (text) {
            if (this.length() === 0)
                return;

            if (text == undefined)
                return this.elems[0].textContent;

            return this.each(function () {
                this.textContent = text;
            });
        },
        attr: function (name, val) {
            if (val == undefined)
                if (!this.hasSingleEl())
                    return this;
                else
                    return this.elems[0].getAttribute(name);
            else
                if (val === "")
                    return this.each(function () {
                        this.removeAttribute(name);
                    });

            return this.each(function () {
                this.setAttribute(name, val);
            });
        },
        toggle: function (bHidden) {
            return this.each(function () {
                var $this = $(this);

                if (bHidden == undefined)
                    bHidden = !($this.attr("disabled") === "true");

                $this.attr("hidden", bHidden || "");
                this.style.display = bHidden ? "none" : "";
            });
        },
        hide: function () {
            return this.toggle(true);
        },
        show: function () {
            return this.toggle(false);
        },
        val: function (val) {
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

            return this.each(function () {
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
        addClass: function (classNames) {
            if (!classNames || typeof classNames !== "string") return this;
            var classes = classNames.split(" ");
            return this.each(function () {
                if (this.classList) {
                    for (var j = 0, jMAX = classes.length; j < jMAX; j++)
                        this.classList.add(classes[j]);
                } else {
                    for (var j = 0, jMAX = classes.length; j < jMAX; j++)
                        if (!$(this).hasClass(classes[j]))
                            this.className += (this.className ? " " : "") + classes[j];
                }
            });
        },
        hasClass: function (className) {
            if (!this.hasSingleEl() || this.elems[0].className == undefined)
                return false;

            if (this.elems[0].classList) {
                return this.elems[0].classList.contains(className);
            }

            var regx = new RegExp("\\b" + className + "\\b");
            return regx.test(this.elems[0].className);
        },
        removeClass: function (classNames) {
            if (!classNames || typeof classNames !== "string") return this;
            var classes = classNames.split(" ");
            return this.each(function () {
                if (this.classList) {
                    for (var j = 0, jMAX = classes.length; j < jMAX; j++)
                        this.classList.remove(classes[j]);
                } else {
                    var cclassNames = this.className.split(" "),
                        newClasses = [];
                    for (var k = 0, kMAX = cclassNames.length; k < kMAX; k++) {
                        var found = false;
                        for (var j = 0, jMAX = classes.length; j < jMAX; j++) {
                            if (classes[j] === cclassNames[k]) {
                                found = true;
                                break;
                            }
                        }
                        if (!found && cclassNames[k]) {
                            newClasses.push(cclassNames[k]);
                        }
                    }
                    this.className = newClasses.join(" ");
                }
            });
        },

        remove: function () {
            return this.each(function () {
                this.parentNode.removeChild(this);
            });
        },
        /* DOM TRAVERSING */
        parent: function () {
            if (!this.hasSingleEl()) return this;

            return new $lib(this.elems[0].parentNode);
        },
        children: function (selector) {
            if (!this.hasSingleEl())
                return this;
            else if (selector == null)
                selector = "*";

            return new $lib(selector, this.elems[0]);
        },
        nextSibling: function (selector) {
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


        /* EVENT METHODS */
        bind: function (type, listener) {
            return this.each(function () {
                var types = type.split(/\s+/);
                for (var i = 0; i < types.length; i++) {
                    this.addEventListener(types[i], listener, false);
                }
            });
        },
        unbind: function (type, listener) {
            return this.each(function () {
                this.removeEventListener(type, listener, false);
            });
        },
        fire: function (evnt) {
            var ev = document.createEvent("HTMLEvents");

            return this.each(function () {
                ev.initEvent(evnt, true, true);
                this.dispatchEvent(ev);
            });
        },
        scrollIntoView: function (alignWithTop) {
            return this.each(function () {
                this.scrollIntoView(alignWithTop);
            });
        },
        /* HELPER METHODS */
        each: function (func, args) {
            if (args != null && !Array.isArray(args))
                args = [args];

            for (var i = 0, MAX = this.elems.length; i < MAX; ++i)
                func.apply(this.elems[i], args || [i]);

            return this;
        },
        exists: function () {
            return this.elems.length > 0;
        },
        hasSingleEl: function () {
            return this.elems.length === 1;
        },
    };
    /* END STYLE SCRIPT LIBRARY */

    /* STYLE SCRIPT CLASSES & METHODS */
    $SS = {
        browser: {},
        DOMLoaded: function (reload) {
            $SS.classes.init();
            $SS.displayMascots();

            var div, link;
            if (reload !== true) {
                $SS.options.init();

                $(document).bind("QRDialogCreation", $SS.QRDialogCreationHandler);

                document.addEventListener("click", function (e) {
                    var li = e.target.closest("[data-cmd='toggle-you']");
                    if (li && !$SS.is4chanX()) $SS.toggleYou(li);
                });

                var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
                var observer = new MutationObserver(function (mutations) {
                    var i, j, MAX, _MAX, nodes, node;

                    for (i = 0, MAX = mutations.length; i < MAX; ++i) {
                        nodes = mutations[i].addedNodes;

                        for (j = 0, _MAX = nodes.length; j < _MAX; ++j) {
                            node = nodes[j];
                            if (node.nodeType !== 1) continue;
                            var canHavePosts = node.nodeName !== "SCRIPT" && node.nodeName !== "STYLE" &&
                                node.nodeName !== "LINK" && node.nodeName !== "META" && node.nodeName !== "BR";

                            if (canHavePosts) {
                                var formSel = "#qr, #quickReply, form[name='post'], form[name='qrPost']";
                                var forms = node.matches && node.matches(formSel)
                                    ? [node]
                                    : node.querySelectorAll ? node.querySelectorAll(formSel) : [];
                                forms.forEach($SS.handleFormNode);
                                if ($SS._initDone) {
                                    if (!$SS.is4chanX()) $SS.markOwnPosts(node);
                                    if (!$SS.is4chanX()) $SS.markQuotingYou(node);
                                    if (!$SS.is4chanX()) $SS.relativeDates(node);
                                }
                            }
                            var pm = node.matches && node.matches("#post-menu") ? node : node.querySelector ? node.querySelector("#post-menu") : null;
                            if (pm) $SS.insertToggleYou();
                        }
                    }
                });

                // Observe only the body element instead of entire document for better performance
                var targetNode = getDocBody() || document.documentElement;
                observer.observe(targetNode, {
                    childList: true,
                    subtree: true
                });

                if ($SS.is4chanX()) {
                    document.addEventListener("click", function (e) {
                        if (!$SS.conf["Style 4chanX Notifications"]) return;
                        var notif = e.target.closest && e.target.closest("#notifications .notification");
                        if (!notif) return;
                        if (e.target.closest("a, button")) return;
                        var closeBtn = notif.querySelector("a.close");
                        if (closeBtn) closeBtn.click();
                    });
                }

                if ($SS.is4chanX())
                    if (!$("*[xmlns]").exists() && !$("#ctxmenu-main").exists())
                        if ((link = $("link[title][rel='stylesheet']")).exists())
                            link.each(function () {
                                if (/4cdn\.org|4chan\.org/.test(this.getAttribute("href") || ""))
                                    $(this).attr("href", "");
                            });

                if ((div = $("#globalMessage *[style]")).exists())
                    div.each(function () {
                        this.removeAttribute("style");
                    });

                if ((div = $(".closeIcon")).exists()) {
                    div.text("x");
                };

                // Style 4chan global announcements
                var gMsg = document.getElementById("globalMessage");
                if (gMsg && !$SS.is4chanX() && gMsg.textContent.trim()) {
                    var navLinks = document.querySelector(".navLinks.desktop");
                    var icon = document.createElement("span");
                    icon.id = "sc-msg-icon";
                    icon.title = "Show announcement";
                    icon.innerHTML = $SS.theme.icons.msg;
                    var bracket = document.createElement("span");
                    bracket.className = "sc-msg-bracket";
                    bracket.appendChild(document.createTextNode("["));
                    bracket.appendChild(icon);
                    bracket.appendChild(document.createTextNode("] "));
                    gMsg.style.display = "none";
                    if (navLinks) {
                        navLinks.insertBefore(bracket, navLinks.firstChild);
                    } else {
                        gMsg.parentNode.insertBefore(bracket, gMsg);
                    }
                    icon.addEventListener("click", function () {
                        var visible = gMsg.style.display !== "none";
                        gMsg.style.display = visible ? "none" : "";
                        icon.classList.toggle("active", !visible);
                        icon.title = visible ? "Show announcement" : "Hide announcement";
                    });
                }

                // Image hover
                if (!$SS.is4chanX() && $SS.conf["Follow Cursor"]) {
                    document.addEventListener("mousemove", function (e) {
                        var img = document.getElementById("image-hover");
                        if (!img) return;
                        var cw = document.documentElement.clientWidth;
                        var ch = document.documentElement.clientHeight;
                        var h = img.offsetHeight, w = img.offsetWidth;
                        var top = Math.max(0, e.clientY * (ch - h) / ch);
                        var threshold = cw / 2;
                        var marginX = Math.min((e.clientX <= threshold ? e.clientX : cw - e.clientX) + 45, cw - w);
                        img.style.top = top + "px";
                        if (e.clientX <= threshold) {
                            img.style.left = marginX + "px";
                            img.style.right = "";
                        } else {
                            img.style.left = "";
                            img.style.right = marginX + "px";
                        }
                    });
                }

                // 4chan ads being added with JS
                if (!$SS.conf["Show 4chan Ads"] || !$SS.conf["Show Top Ad"]) {
                    $(".topad.center").remove();
                    $("#danbo-s-t.danbo-slot").remove();
                }
                if (!$SS.conf["Show 4chan Ads"] || !$SS.conf["Show Bottom Ad"]) {
                    $(".bottomad.center").remove();
                    $("#danbo-s-b.danbo-slot").remove();
                }
                // 4chan Pass Link
                if ($SS.conf["Show 4chan Pass Login"]) {
                    const link = $("<span class='brackets-wrap pass-link-container pass-login'><a title='4chan Pass login' href='javascript:;'>4chan Pass</a></span>").bind("click", function (e) {
                        // Prevent the default link behavior
                        e.preventDefault();
                        // Open the link in a new window with custom size
                        window.open('https://sys.4chan.org/auth', '_blank', 'width=502,height=346');
                    });
                    $(".navLinks.desktop").append(link);
                };

                // Auto-convert images on drop
                if ($SS.conf["Auto-Convert Images"]) {
                    $SS.initImageConvertOnDrop();
                }
                // Remember QR comments
                $SS.initRememberComment();
                // Single view captcha grid
                $SS.initSingleViewCaptcha();
                // Native QR autohide (focus/hover behavior for Normal & Vertical Tabbed)
                $SS.initNativeQRAutohide();

                // Set maxlength on subject and name inputs (100 char limit)
                $("input[name=sub], input[name=name]", document).each(function () {
                    this.setAttribute("maxlength", "100");
                    this.addEventListener("input", function () {
                        if (this.value.length >= 100) {
                            this.style.setProperty("border-color", "red", "important");
                            var el = this;
                            setTimeout(function () { el.style.removeProperty("border-color"); }, 600);
                        }
                    });
                });

                // Auto-watch thread on post submission
                if ($SS.conf["Watch Thread on Reply"] && $SS.location.reply) {
                    $SS.handleFormNode();
                }

                // Auto-open native QR on thread pages (non-4chanX only)
                if ($SS.location.reply && $SS.conf["Pin Quick Reply"] && !$SS.is4chanX()) {
                    $.waitFor("a[data-cmd='open-qr']", function (link) { link.click(); });
                }

                if ($SS.conf["Catalog Links"] && !$SS.is4chanX()) {
                    function fixBoardLinks(nav) {
                        if (!nav) return;
                        nav.querySelectorAll("a[href]").forEach(function (a) {
                            var href = a.getAttribute("href");
                            if (/^(\/\/|https?:\/\/)?(?:boards\.4chan\.org)?\/(?!search$)[a-z0-9]+\/*$/i.test(href))
                                a.setAttribute("href", href.replace(/\/?$/, "/catalog"));
                        });
                    }
                    fixBoardLinks(document.querySelector("#boardNavDesktop"));
                    fixBoardLinks(document.querySelector("#boardNavMobile"));

                    var boardSelect = document.getElementById("boardSelectMobile");
                    if (boardSelect) {
                        boardSelect.addEventListener("change", function () {
                            var val = this.value;
                            if (val) window.location = "/" + val + "/catalog";
                        });
                    }
                }

                // Remove certain links
                (function () {
                    function removeLink(container, selector) {
                        if (!container) return;
                        container.querySelectorAll(selector).forEach(function (a) {
                            var prev = a.previousSibling;
                            if (prev && prev.nodeType === 3 && /^\s*\[/.test(prev.textContent))
                                prev.remove();
                            var next = a.nextSibling;
                            a.remove();
                            if (next && next.nodeType === 3 && /^\]/.test(next.textContent))
                                next.remove();
                        });
                    }
                    removeLink(document.querySelector("#navtopright"), "a[href='/search'], a[href='//p.4chan.org/']");
                    removeLink(document.querySelector("#boardNavMobile .pageJump"), "a[href='//p.4chan.org/']");
                })();

                // things that need to change after 4chan X loads.
                setTimeout(function () {
                    if (!$SS.QRhandled && (div = $("#qr")).exists())
                        $SS.QRDialogCreationHandler({
                            target: div.elems[0]
                        });
                });

                var pfSpoiler = document.querySelector("#postForm input[name=spoiler]");
                if (pfSpoiler) {
                    pfSpoiler.parentNode.id = "pf-spoiler";
                    pfSpoiler.title = "Spoiler image";
                }

                $SS._initDone = true;
            }
        },
        init: function (reload) {
            if (!reload) {
                if (/^about:neterror/.test(document.documentURI)) return;
                if ($SS.is4chanX()) {
                    localStorage["4chan-settings"] = "{ \"disableAll\" : true, \"dropDownNav\": false }";
                }
                $SS.hasGM = typeof GM_deleteValue !== "undefined";

                $SS.location = $SS.getLocation();

                if ($SS.Config.get("VERSION") !== VERSION) {
                    setTimeout(function () {
                        var content = document.createElement('span');
                        var changelogLink = document.createElement('a');

                        content.appendChild(document.createTextNode(NAME + ' has been updated to version ' + VERSION + '.'));
                        content.appendChild(document.createElement('br'));
                        changelogLink.href = CHANGELOG;
                        changelogLink.target = '_blank';
                        changelogLink.rel = 'noopener noreferrer';
                        changelogLink.textContent = 'Read the changelog.';
                        content.appendChild(changelogLink);

                        $SS.notify({
                            type: 'info',
                            content: content,
                            lifetime: 15
                        });
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

            // Set native 4chan theme to mitigate unloaded CSS flashbang #6
            (function () {
                var nativeTheme = $SS.theme.bgColor.isLight ? "Yotsuba B New" : "Tomorrow",
                    cookieName = $SS.location.nsfw ? "nws_style" : "ws_style";
                document.cookie = cookieName + "=" + nativeTheme + ";domain=.4chan.org;samesite=strict;path=/";
            })();

            if (reload) {
                $SS.insertCSS();
                $SS.DOMLoaded(true);
            } else {
                $SS.insertCSS();
                if (/complete|interactive/.test(document.readyState))
                    $SS.DOMLoaded();
                else
                    $(document).bind("DOMContentLoaded", $SS.DOMLoaded);
            }

        },

        /* STYLING & DOM */
        insertCSS: function () {
            var css,
                reload = $("#ch4SS").exists();

            if ($SS.location.dead)
                return;

            css = "#absbot,#boardNavDesktopFoot,#delPassword,#delform .mobile.center,#delform .post input[type=checkbox],#postForm,#qp .post input[type=checkbox],#qrTid,#quote-preview input[type=checkbox],#styleSwitcher,#toggleMsgBtn,.ad-plea,.deleteform,.exif:not([style]),.mobile,.stylechanger,.tab-select:not(:checked)+div,:root.fourchan-x.show-form #togglePostFormLink,:root.hide-banner #bannerCnt,:root.hide-banner .boardBanner>img,:root.hide-blotter #blotter,:root.hide-board-name .boardSubtitle,:root.hide-board-name .boardTitle,:root.hide-navlinkbot .navLinks.navLinksBot.desktop,:root.hide-navlinkbot .navLinks.navLinksBottom.mobilebtn,:root.hide-navlinks .navLinks,:root.hide-navlinks .navLinks.navLinksBot.desktop,:root.hide-navlinks body>.desktop:not(.pagelist):not(.navLinksBottom),:root.hide-navlinktop #info,:root.hide-navlinktop .navLinks:not(.navLinksBottom):not(.navLinksBot),:root.qr-controls #qr .close,:root.qr-controls #qr select[data-name=thread],:root.qr-controls #quickReply #qrClose,:root.qr-controls.fade-qr #qr .move label,:root.qr-controls.vertical-qr #qr .move label input,:root.reply-fit-width .sideArrows,:root.show-ads.hide-adl .adl,:root.show-ads.hide-board-banners .middlead.center,:root.show-ads.hide-bottom-ad #danbo-s-b+.adl,:root.show-ads.hide-bottom-ad #danbo-s-b.danbo-slot,:root.show-ads.hide-bottom-ad .bottomad.center,:root.show-ads.hide-top-ad #danbo-s-t+.adl,:root.show-ads.hide-top-ad #danbo-s-t.danbo-slot,:root.show-ads.hide-top-ad .topad.center,:root.show-file-info .file-info,:root:not(.qr-button).fourchan-x .qr-link-container,:root:not(.qr-button).fourchan-x .qr-link-container-bottom,:root:not(.qr-button).fourchan-x a[data-cmd=new-thread],:root:not(.show-ads) .adl,:root:not(.show-ads) .center:not(#settingsMenu .center):not(#customMenu .center):not(#theme-btns .center),:root:not(.show-ads) .danbo-slot,:root:not(.show-button):not(.fourchan-x) #togglePostFormLink,[hidden],div.pageJump a[href='#bottom'],hr+.adl,hr:not(#unread-line),iframe[src='about:blank']{display:none}a,input:focus,select,textarea:focus{outline:0!important}.boardBanner{border-image-source:none!important;border-style:none!important}.party-hat{left:0;margin-left:-11px;padding-left:" + $SS.conf["Margin Left"] + "px;margin-top:-75px;position:absolute;pointer-events:none;z-index:1}:root.force-indent .party-hat{margin-left:-23px}.sjis{font-size:16px;line-height:17px;white-space:pre;font-family:IPAMonaPGothic,Mona,'MS PGothic',monospace;overflow:auto;display:block;clear:left}.mu-s{font-weight:700}.mu-i{font-style:italic}.mu-r{color:#c41e3a}.mu-g{color:#00a550}.mu-b{color:#1d8dc4}div.post div.file .fileThumb{float:left;margin-left:13px;margin-right:20px;margin-bottom:10px}div.op.post div.file .fileThumb{margin-bottom:0}.fileText{margin-left:13px!important;margin-bottom:2px!important}body:has(#globalMessage).hasDropDownNav{margin-top:35px!important}.fixed.bottom-header body.is_thread{padding-bottom:0;padding-top:.5em}.fixed.bottom-header body.is_index{padding-bottom:4.5em;padding-top:.5em}.fixed.bottom-header body.is_catalog,.fixed.bottom-header.catalog-mode body{padding-bottom:3em;padding-top:.5em}.fixed.bottom-header body{padding-top:.5em}:root.bottom-header:not(.autohide) body.is_index{padding-bottom:5em!important}.fixed.top-header body.is_index{padding-bottom:2.5em;padding-top:" + (($SS.conf["Font Size"] <= 11) ? 3.2 : 2.4) + "em!important}.fixed.top-header body.is_thread{padding-bottom:0;padding-top:" + (($SS.conf["Font Size"] <= 11) ? 3.2 : 2.4) + "em!important}.fixed.top-header body.is_catalog,.fixed.top-header.catalog-mode body{padding-bottom:.5em;padding-top:" + (($SS.conf["Font Size"] <= 11) ? 3.2 : 2.4) + "em!important}.fixed.top-header.autohide body{padding-top:2em!important}.fixed.top-header body{padding-top:2.4em!important}div.post{margin:4px 0;overflow:hidden}:root:not(.reply-fit-width) #delform div.reply:not([hidden]){display:table!important}:root:not(.reply-fit-width) #delform .stub~div.reply:not([hidden]){display:none!important}div.thread{margin:0;clear:both;padding-bottom:10px}table.flashListing{border-spacing:1px;margin-left:auto;margin-right:auto}table.flashListing .postblock{padding:5px}div.pagelist div.pages{padding:4px}div.pagelist,div.pagelist>div{float:left}div.pagelist>div span{padding:4px;display:inline-block}.page-num{margin-right:auto!important}s{text-decoration:none!important}s,s:not(:hover)>.linkify,s:not(:hover)>a,span.spoiler{color:#000;background:none repeat scroll 0 0 #000}s:focus,s:hover,span.spoiler:focus,span.spoiler:hover{color:#fff}#globalMessage,.boardBanner{text-align:center}#globalMessage{margin-top:5px}div.sideArrows{float:left;margin-right:2px;margin-top:0;margin-left:2px;opacity:.3}hr{clear:both}table{border-spacing:1px;margin-left:auto;margin-right:auto}.adl,.center,.danbo-slot{text-align:center!important}.adl{font-size:.76em}#qf-box{width:120px}span.hide-announcement{margin-left:3px;vertical-align:sub}.bottomCtrl.desktop{float:right}.fixed.bottom-header body.is_index .bottomCtrl.desktop,.fixed.bottom-header body.is_thread .bottomCtrl.desktop{margin-bottom:35px}.fixed.top-header body.is_index .bottomCtrl.desktop,.fixed.top-header body.is_thread .bottomCtrl.desktop{margin-bottom:8px}input[value=Next],input[value=Previous]{padding:4px 13px}.identityIcon{margin-bottom:-3px}:root.isLight img[src*='//boards.4chan.org/js/jsMath/fonts/']{filter:invert(100%)}:root.reply-fit-width .inline{display:flow-root!important}:root:not(.fourchan-x) div#boardNavMobile select{padding:0 0 2px 2px}:root.centered-links #shortcuts{width:30vw!important}:root.centered-links #custom-board-list{left:12vw!important}div.meta{margin-bottom:5px}#blotter{margin:auto;font-size:11px}:root:not(.fourchan-x) #blotter tfoot{text-align:center!important}.brackets-wrap.pass-link-container.pass-login{float:right}#quickReply #qrFile,input#postFile{height:23px}#quickReply #qrFile{margin-right:0!important}:root.left-sidebar #quickReply,:root.right-sidebar #quickReply{max-width:300px!important}:root.left-sidebar #quickReply input[type=text],:root.left-sidebar #quickReply textarea,:root.right-sidebar #quickReply input[type=text],:root.right-sidebar #quickReply textarea{max-width:294px!important;min-width:294px!important}div#qrError{width:290px}#quickReply #qrFile,input#postFile{cursor:pointer;flex:1;min-width:0;padding:0!important}#qrForm>div:last-child{display:flex;gap:4px}#postForm input[type=submit],#quickReply #qrSpoiler,#quickReply input[type=submit]{flex-shrink:0}:root:not(.fourchan-x) #postForm,:root:not(.fourchan-x) #togglePostFormLink{margin-top:1em}:root.fourchan-x div#togglePostFormLink.desktop{text-align:center}#pf-spoiler,#qrSpoiler label{font-size:0;display:inline-flex;align-items:center;justify-content:center;width:22px;height:23px;cursor:pointer;border:1px solid var(--sc-inputbColor);background:var(--sc-mainColor);position:relative}#pf-spoiler::before,#qrSpoiler label::before{content:'S';font-weight:700;font-size:13px;color:var(--sc-textColor)}#pf-spoiler:has(:checked)::before,#qrSpoiler label:has(:checked)::before{content:'✓';color:var(--sc-quoteColor)}#pf-spoiler input[type=checkbox],#qrSpoiler input[type=checkbox]{position:absolute;opacity:0;width:100%;height:100%;margin:0;cursor:pointer}:root.normal-qr #quickReply:not(:hover):not(.focus){width:303px!important}:root.normal-qr #quickReply:not(:hover):not(.focus)>:not(#qrHeader){display:none!important}:root.normal-qr .qr-transition #quickReply>:not(#qrHeader){transition:opacity .2s ease-in-out .1s}#quickReply #qrFile::-webkit-file-upload-button,#quickReply #qrFile::file-selector-button,.postForm #postFile::-webkit-file-upload-button,.postForm #postFile::file-selector-button{appearance:none;cursor:pointer;height:23px;padding:0 6px;text-transform:uppercase;margin-right:4px;background:rgb(var(--sc-mainColor-rgb))!important;border-style:solid;border-width:1px;border-color:rgb(var(--sc-mainColor-shiftM15)) rgb(var(--sc-mainColor-shiftM15)) rgb(var(--sc-mainColor-shiftM30))!important;color:var(--sc-textColor)!important;font-family:" + $SS.formatFont($SS.conf["Font Family"]) + ";font-size:" + $SS.conf["UI Font Size"] + "px!important}#quickReply #qrFile:hover::-webkit-file-upload-button,#quickReply #qrFile:hover::file-selector-button,.postForm #postFile:hover::-webkit-file-upload-button,.postForm #postFile:hover::file-selector-button{background:rgb(var(--sc-mainColor-shift10))!important}:root:not(.fourchan-x):not(.right-sidebar):not(.left-sidebar) :root:not(#bannerCnt) div.boardBanner>div.boardTitle{margin-top:-15px;margin-bottom:10px}:root.left-sidebar :root:not(#bannerCnt) div.boardBanner>div.boardTitle,:root.right-sidebar :root:not(#bannerCnt) div.boardBanner>div.boardTitle{margin-top:50px}:root.highlight-you:not(.fourchan-x) .postContainer.hasQuoteYou>.post{border-left:" + $SS.conf["Width Decoration"] + "px solid rgba(var(--sc-quotesYouHLColor-rgb),1)!important}:root.highlight-you:not(.fourchan-x) .postContainer.hasQuoteYou>.sideArrows{color:rgba(var(--sc-quotesYouHLColor-rgb),1)!important}:root.highlight-own:not(.fourchan-x) .yourPost>.post.op,:root.highlight-own:not(.fourchan-x) .yourPost>.reply{border-left:" + $SS.conf["Width Decoration"] + "px dashed rgba(var(--sc-ownPostHLColor-rgb),1)!important}:root.highlight-own:not(.fourchan-x) .yourPost>.sideArrows{color:rgba(var(--sc-ownPostHLColor-rgb),1)!important}input#search-box{height:inherit}.pagelist.desktop{margin-bottom:10px}:root.follow-cursor #image-hover{max-width:calc(100vw - 100px);max-height:calc(100vh - 60px)}body{margin-left:" + $SS.conf["Margin Left"] + "px;margin-right:" + $SS.conf["Margin Right"] + "px;margin-top:0;margin-bottom:0}:root.show-ads .ad-cnt{margin-top:auto!important}:not(.fourchan-x) div.op{display:block}.postInfo{padding:5px 13px;display:block!important}.summary{margin-left:2px}.expanded-image{position:relative}:root.op-background .op{padding:4px 0}:root.force-indent .op{margin-left:-12px}:root.force-wrapping .op::after{clear:both;content:'';display:block}.thread>.replyContainer:not(.thread>.postContainer:last-of-type),.threadContainer>.replyContainer,:root.op-background .thread>.opContainer:not(.thread>.postContainer:last-of-type){margin-bottom:" + ($SS.conf["Margin Between Replies"] !== '' ? $SS.conf["Margin Between Replies"] : '0') + "px!important}.container~.inline{margin:2px 0 2px 13px!important}:root.bottom-backlinks .container~.inline{margin:0 13px 2px!important}:root.bottom-backlinks .container~.inline:last-of-type:not(.inline .hasInline .inline){margin-bottom:3px!important}#qp .op>.postInfo{min-width:600px}.postMessage{margin:" + $SS.conf["Margin Post Message"] + "!important}:root.bottom-backlinks .container{padding-left:8px}:root.bottom-backlinks .post:not(:root.op-background .op) .container:not(:empty){padding-bottom:4px}:root.fit-eximg.fit-height .full-image{max-height:calc(100vh - 8rem)!important}:root.reply-fit-width .reply.post{display:block!important}:root.reply-fit-width .stub~.reply.post{display:none!important}.hasInline .inline>.replyContainer:not(.expanded-image):not(.hasInline) .reply.post,:root.reply-fit-width .post.reply{overflow:hidden!important}:root.reply-fit-width .expanded-image>.post::after,:root.reply-fit-width .hasInline>.reply.post::after{clear:both!important;content:''!important;display:block!important}.threadContainer .hide-reply-button{margin-left:-12px!important}.stub{padding:2px}.stub>a.show-thread-button{margin-right:4px}:root.reply-hide .thread>.expanded-image>.reply,:root.reply-hide .thread>.hasInline>.reply{margin-left:12px!important}.threadContainer{margin-left:0!important;padding-left:20px!important}:root.reply-hide .thread>.threadContainer{margin-left:13px!important}:root.post-info .reply>.postInfo{box-shadow:inset rgba(0,0,0,.05) 0 -1px 2px;padding-top:2px!important}:root.post-info #hoverUI .reply,:root.post-info .inline .reply{padding:0 0 1px!important}.reply .menu-button i{position:relative;bottom:1px}:root.reply-fit-width .reply .container{padding-right:5px}:root.reply-fit-width.fit-postmenu .postInfo>.menu-button,:root.reply-fit-width.fit-postmenu .postInfo>.postMenuBtn{float:right!important}:root.reply-fit-width.fit-postmenu .postInfo>.postMenuBtn{margin:2px 20px 0 0}.container,.menu-button+.container:not(:empty){margin-left:4px!important}:root.reply-fit-width .post .menu-button{position:relative;opacity:0}:root.reply-fit-width .post .postMenuBtn{position:relative;opacity:0}:root.reply-fit-width .post:not(:hover) .menu-button,:root.reply-fit-width .post:not(:hover) .postMenuBtn{transition:opacity .3s ease-out 0s!important}:root.reply-fit-width .post:hover .menu-button,:root.reply-fit-width .post:hover .postMenuBtn{opacity:1;transition:opacity .3s ease-in .1s!important}.prettyprint{padding:5px!important;display:block;max-height:400px;overflow-x:auto;max-width:100%;white-space:pre-wrap;overflow-wrap:anywhere}input[type=button],input[type=checkbox],input[type=submit]{cursor:pointer}input[type=checkbox]{display:inline-block;height:12px!important;position:relative;width:12px!important;border-radius:2px!important;appearance:none;margin:0 2px -1px 0}input[type=checkbox]:checked::before{content:'✓';position:absolute;top:0;left:0;height:12px;width:11px;font-size:11px;line-height:12px;text-align:center;color:var(--sc-textColor)}div#menu.dialog label.toggle-you.entry input{display:inline-block;top:0}#header-bar{padding:4px 4px 5px!important}:root:not(.fixed) #header-bar{top:0;right:0;left:0;box-shadow:0 1px 2px rgba(0,0,0,.15);border-bottom:1px solid}:root.autohide body{padding-top:0!important;padding-bottom:0!important}:root:not(.fixed).right-sidebar #header-bar{right:300px}:root:not(.fixed).left-sidebar #header-bar{left:300px}:root:not(.fixed).fourchan-x .boardBanner{top:1px}.center,.danbo-slot{margin:5px!important}#full-board-list>a,.navSmall>a{margin-left:2px}:root.fixed:not(.autohide):not(.bottom) #globalMessage:not([hidden]){margin:10px 0 20px!important}.globalMessage,h2,h3{margin:auto}#custom-board-list,#full-board-list,.shortcut{vertical-align:baseline!important}:root.fixed-watcher #thread-watcher,:root.fixed-watcher #threadWatcher{position:fixed!important}a.qr-link{border-radius:0;vertical-align:middle;padding:7px 12px 6px}hr{height:2px;width:600px;border:none!important}:root.reply-fit-width #unread-line{margin:auto;width:100%}#unread-line{margin-top:" + (($SS.conf["Margin Between Replies"] < -2) ? ($SS.conf["Margin Between Replies"] - 1) : -3) + "px!important;margin-bottom:" + (($SS.conf["Margin Between Replies"] < -2) ? -5 : -3) + "px!important;position:relative}:root:not(.autohide) #scroll-marker{pointer-events:none!important}.boardBanner .boardTitle{cursor:default;letter-spacing:-2px;padding-top:.1em}#bannerCnt{border:0!important;margin:0 auto;width:300px;max-height:100px!important;max-width:100%}.boardBanner{width:302px;margin:auto}.boardBanner>img{border:none!important}:root.banner-opacity #bannerCnt{opacity:.5;transition:opacity .3s ease-out 0s}:root.banner-opacity #bannerCnt:hover{opacity:1}.pages.cataloglink{margin-left:12px}.pages.cataloglink a,input[value=Next],input[value=Previous]{font-weight:700;transition:opacity .3s ease-in 0s}.pages strong>a:hover,.pages.cataloglink a:hover,input[value=Next]:hover,input[value=Previous]:hover{opacity:.7}.pagelist{margin-left:18px;margin-bottom:15px}:root.reply-fit-width .pagelist{margin-left:0}.pages a{padding:5px 10px;margin-left:-1px}.pages strong>a{padding-top:3px;transition:opacity .3s ease-in 0s}.next,.prev{border:none!important;position:relative}:root.fourchan-x .next a,:root.fourchan-x .prev a{position:relative;right:5px}:root.fourchan-x .prev a::after{content:'<';position:inherit;top:4px;left:1px}:root.fourchan-x .next a::after{content:'>';position:inherit;top:4px;right:2px}.pagelist button,.pagelist button:hover{background:0 0!important;border:none!important;box-shadow:none!important;height:20px;width:20px}.pagelist span{opacity:.2}#swf-embed{z-index:21}table.flashListing{margin-top:20px;margin-bottom:20px}table.flashListing .highlightPost{background:var(--sc-mainColor-shiftM25)!important}.flashListing td{padding-left:4px!important;padding-right:4px!important;text-align:center!important}body.board_f #delform .file-info{padding-left:5px}body.board_f #delform .fileText{margin-left:0!important}:root.ad-opacity .center img,:root.ad-opacity .danbo-slot{opacity:.5;transition:opacity .3s ease-out 0s}:root.ad-opacity .center img:hover,:root.ad-opacity .danbo-slot:hover{opacity:1}#ctrl-top,body.is_index div.navLinks{padding-top:5px;margin-bottom:5px}body.is_thread div.navLinks:not(.navLinksBot){padding-top:.4%;margin-bottom:.4%}.navLinks.navLinksBot.desktop{margin-bottom:5px}#hoverUI{z-index:75!important}:root:not(.fourchan-x) div#boardNavMobile{padding:2px 4px;overflow:hidden;border-bottom:2px solid;position:fixed;top:0;left:0;right:0;font-size:12px;z-index:9001}:root:not(.fourchan-x) div.pageJump{float:right;padding-right:5px;padding-top:3px}#index-search,#search-box{width:9%;transition:color .25s,border-color .25s,width .25s}#index-search:focus,#search-box:focus{width:12%}:root.thumb-opacity .fileThumb img:not(.full-image){opacity:.5;transition:opacity .3s ease-out 0s}:root.thumb-opacity .fileThumb img:not(.full-image):hover{opacity:1}select{appearance:none}#delform{overflow-wrap:break-word;word-break:break-word;margin-bottom:15px}#reportTypes{margin-top:5px}#stylechan-mascots{position:fixed;bottom:0;z-index:-1;display:flex;flex-direction:column;align-items:center;gap:8px;pointer-events:none}#stylechan-mascots.mascots-right{right:10px}#stylechan-mascots.mascots-left{left:10px}#stylechan-mascots img{max-width:300px;display:block}#menu,#post-preview,#qr-filename-container,#t-load,#t-next,#t-root,#t-task,.boxbar,.captcha-root,.dd-menu ul,.globalMessage,.pages strong>a,.pages.cataloglink a,.pln,.post-last,.postblock,.tegaki-label,a.summary,body,div.boardBanner,input,select,table.postForm tr td,textarea{color:var(--sc-textColor)!important}.com,.nameBlock:not(.capcodeMod)>.name,.post-author{color:var(--sc-nameColor)!important}.nameBlock.capcodeMod,:root:not(.fourchan-x) span.capcodeMod span.name,:root:not(.fourchan-x) span.capcodeMod strong.capcode{color:purple!important}.id_admin,.nameBlock.capcodeAdmin span.name{color:red!important}.nameBlock>.postertrip,.post-tripcode,.tag{color:var(--sc-tripColor)!important}#arc-list .quotelink,:root .atn,:root .options-button,:root .tegaki-tb-btn,:root .typ,:root.catalog-mode .button,a.postMenuBtn,a.replylink:not(:hover),a:not(s>a),a:visited,body.is_catalog .button,s:hover>a:not(:hover){color:var(--sc-linkColor)!important}#arc-list .quotelink:hover,#import-link>.options-button:hover,.lit,.tegaki-tb-btn:hover,:root a:hover,:root div.post div.postInfo span.postNum a:hover,:root.catalog-mode .button:hover,body.is_catalog .button:hover{color:var(--sc-linkHColor)!important}#header-bar,:root:not(.fourchan-x) .boardSelect,:root:not(.fourchan-x) .boardSelect .customBoardList,a.current{color:var(--sc-headerColor)!important}#header-bar a:not(.current),:root:not(.fourchan-x) .boardSelect .customBoardList a,:root:not(.fourchan-x) div#boardNavMobile,:root:not(.fourchan-x) div.pageJump a{color:var(--sc-headerLColor)!important}#header-bar a:hover,:root:not(.fourchan-x) div#boardNavMobile a:hover{color:var(--sc-headerLHColor)!important}#custom-board-list .current{border-bottom:1px solid rgba(var(--sc-linkColor-rgb),1)!important}#custom-board-list .current:hover{border-bottom:1px solid rgba(var(--sc-linkHColor-rgb),1)!important}:root:not(.fourchan-x) div#boardNavMobile{background-color:var(--sc-headerBGColor);border-bottom-color:var(--sc-brderColor)}.atv,.catalog-thread>.comment>.quote,.new,.postMessage>.quote,.str,s:hover .quote{color:var(--sc-quoteColor)!important}.kwd,.option.header .option-title,.post-subject,.replytitle,.subject,.tab-label,.teaser b{color:var(--sc-titleColor)!important}.option.header{font-size:140%}.boardTitle{color:var(--sc-boardColor)!important;text-shadow:none!important}:root .backlink,:root .backlink.deadlink{color:var(--sc-blinkColor)!important}:root.backlink-shadow .backlink{text-shadow:1px 1px 5px}:root .deadlink,:root .quotelink{color:var(--sc-qlColor)!important}.catalog-code,.prettyprint{background:none repeat scroll 0 0 rgba(var(--sc-codeBackground))!important;border:1px solid rgba(var(--sc-codeBorder))!important}#qr-no-file,#t-load:disabled,.pun,::placeholder,:root.single-captcha #t-next:not(.is-ready),:root:not(.single-captcha) #t-next:disabled{color:rgba(var(--sc-textColor-rgb),.4)!important}body{background:var(--sc-bgImg) var(--sc-bgColor)!important}#post-preview,#qrCaptchaContainer,#qrHeader,#tegaki,#threadWatcher,.boxbar,.dd-menu ul,.dialog,.flashListing tr:nth-of-type(odd):not(.highlightPost),.reply,:root.catalog-hover-expand .catalog-container:hover>.post,:root.catalog-mode .panel,:root.op-background .op:not(.inline .op),body.is_catalog .panel,table.postForm tr td{background:rgba(var(--sc-mainColor-rgb),var(--sc-replyOp))!important}#fourchanx-settings,#oneechan-options,.tab-label{background:rgb(var(--sc-mainColor-rgb))!important}.flashListing tr:nth-of-type(2n):not(.highlightPost),:root.recolor-even .thread>.replyContainer:nth-of-type(2n):not(.hidden) .post:not(.reply:target,.inline>.postContainer>.post),:root:not(.fourchan-x) .reply.highlight{background:rgb(var(--sc-mainColor-shiftM10),var(--sc-replyOp))!important}:root:not(.header-gradient) #header-bar{background:rgba(var(--sc-headerBGColor-rgb),var(--sc-navOp))!important}:root.header-gradient #header-bar{background:linear-gradient(rgb(var(--sc-headerBGColor-shift15)),rgba(var(--sc-headerBGColor-rgb),var(--sc-navOp)))!important}#qrCaptchaContainer,#t-root,.captcha-root div,:root.header-shadow #header-bar{box-shadow:none!important}:root:not(.fixed) #header-bar{background:0 0!important}#postForm input[type=submit],#quickReply input[type=submit],.options-button,.pages strong>a,.pages.cataloglink,.qr-link,input[value=Next],input[value=Previous]{background:linear-gradient(rgb(var(--sc-mainColor-shift15)),rgb(var(--sc-mainColor-rgb)))!important}#postForm input[type=submit]:hover,#quickReply input[type=submit]:hover,.dd-menu li:hover,.import-input:hover+.options-button,.options-button:hover,.pages strong>a:hover,input[value=Next]:hover,input[value=Previous]:hover{background:rgb(var(--sc-mainColor-shift15))}.focused.entry{background:rgb(var(--sc-mainColor-shift10))!important}.qr-link:hover,:root.vertical-qr #qr .move{background:rgb(var(--sc-mainColor-rgb))}#qr input,#qr-filename-container,#t-load,#t-next,#t-root,.captcha-root>div,input.field,input[type=text],select,textarea{background:var(--sc-inputColor)!important;transition:background .2s,color .2s,border-color .2s,width .2s!important}input[type=checkbox]{background:rgb(var(--sc-inputColor-shift25))!important}#qr input:hover,#qr-filename-container:hover,#t-load:hover,#t-next:hover,input.field:hover,input[type=checkbox]:hover,input[type=text]:hover,select:hover,textarea:hover{background:rgb(var(--sc-inputColor-hover))!important}hr{background-image:linear-gradient(to left,rgba(var(--sc-brderColor-rgb),0),rgb(var(--sc-brderColor-rgb)),rgba(var(--sc-brderColor-rgb),0))}#unread-line{background-image:linear-gradient(to left,rgba(var(--sc-unreadColor-rgb),0),rgb(var(--sc-unreadColor-rgb)),rgba(var(--sc-unreadColor-rgb),0))}.newPostsMarker,.newPostsMarker:not(#quote-preview){box-shadow:0 3px rgb(var(--sc-unreadColor-rgb))!important}.inline{background:rgba(var(--sc-mainColor-shiftM16),.8)!important}:root.post-info .reply>.postInfo{background:rgba(var(--sc-mainColor-shiftM16),.2);border-bottom:1px solid rgb(var(--sc-mainColor-shift4))}.dd-menu ul,.reply,:root.op-background .op:not(#qp .op,.inline .op){border-width:0 1px 1px 0;border-style:solid}:root.borders-all .reply,:root.borders-all.op-background .op{border-width:1px!important}:root.borders-none .reply,:root.borders-none.op-background .op{border:0!important}#menu,.catalog-thumb{border-radius:0!important}:root.rounded-corners #add-theme,:root.rounded-corners #bannerCnt img,:root.rounded-corners #menu,:root.rounded-corners #oneechan-options,:root.rounded-corners #qrSpoiler label,:root.rounded-corners #t-load,:root.rounded-corners #t-next,:root.rounded-corners #thread-stats,:root.rounded-corners #threadWatcher,:root.rounded-corners #updater,:root.rounded-corners .catalog-thumb,:root.rounded-corners .color-picker-btn,:root.rounded-corners .dd-menu ul,:root.rounded-corners .dialog:not(#header-bar),:root.rounded-corners .fileThumb img:not(.full-image),:root.rounded-corners .inline,:root.rounded-corners .options-button,:root.rounded-corners .pages strong>a,:root.rounded-corners .pages.cataloglink,:root.rounded-corners .panel,:root.rounded-corners .preview-border,:root.rounded-corners .reply,:root.rounded-corners .thumb,:root.rounded-corners a.qr-link,:root.rounded-corners input[value=Next],:root.rounded-corners input[value=Previous],:root.rounded-corners label.tab-label,:root.rounded-corners.catalog-hover-expand .catalog-container:hover .catalog-reply,:root.rounded-corners.catalog-hover-expand .catalog-container:hover>.post,:root.rounded-corners.op-background .op,:root.rounded-corners.werkTyme .catalog-thread:not(:hover),:root.rounded-corners.werkTyme:not(.catalog-hover-expand) .catalog-thread{border-radius:3px!important}:root.post-info.rounded-corners .reply>.postInfo,:root.rounded-corners #qr,:root.rounded-corners #quickReply,:root.rounded-corners:root.vertical-qr #qr>.move{border-radius:3px 3px 0 0!important}:root:not(.rounded-corners) #post-preview{border-radius:0!important}#file-n-submit>input,#qr-file-button{border-radius:0!important}#post-preview,#qr select,#quickReply,.dialog,.entry,.flashListing td:not(:last-of-type):not(.postblock),.inline,.reply,:root.op-background .op,:root.vertical-qr #qr .move,fieldset,select{border-color:var(--sc-brderColor)!important}.dd-menu li{border-bottom:var(--sc-brderColor)!important}#post-preview,#qr select,#qr-filename-container,#quickReply,#t-load,#t-next,#t-root,#threadWatcher,.captcha-img,.captcha-root,.dd-menu ul,.postblock,:root.catalog-hover-expand .catalog-container:hover .catalog-reply,:root.catalog-hover-expand .catalog-container:hover>.post,:root.vertical-qr #qr .move,:root.werkTyme .catalog-thread:not(:hover),:root.werkTyme:not(.catalog-hover-expand) .catalog-thread,input,select,table.postForm tr td,textarea{border:1px solid var(--sc-inputbColor)!important}.options-button,.pages strong>a,.pages.cataloglink,.qr-link,input[value=Next],input[value=Previous]{border-style:solid;border-width:1px;border-color:rgb(var(--sc-mainColor-shiftM15)) rgb(var(--sc-mainColor-shiftM15)) rgb(var(--sc-mainColor-shiftM30))!important}a.backlink.forwardlink,a.quotelink.forwardlink{border-bottom:1px dashed}#qr input:focus,#qr-filename-container.focus,#qr-filename-container:focus,#t-load:focus,#t-next:focus,input.field:focus,input[type=text]:focus,select:focus,textarea:focus{border:1px solid var(--sc-linkColor)!important}#index-search:hover,#search-box:hover,.captcha-img:hover{border-color:var(--sc-linkColor)!important}#header-bar{border:none!important}.flashListing td:not(:last-of-type):not(.postblock){border-width:1px;border-style:solid}:root.header-highlight #custom-board-list .current,:root.header-highlight #custom-board-list .current:hover{border-bottom:none!important}.suboption-list>div:last-of-type{background:rgba(var(--sc-mainColor-rgb),var(--sc-replyOp))!important}.suboption-list::before,.suboption-list>div::before{border-color:var(--sc-brderColor)!important;left:.5em!important}#navlinks a{text-shadow:var(--sc-mainColor) -1px -1px,var(--sc-mainColor) 1px -1px,var(--sc-mainColor) -1px 1px,var(--sc-mainColor) 1px 1px,var(--sc-mainColor) -1px 0,var(--sc-mainColor) 1px 0,var(--sc-mainColor) 0 -1px,var(--sc-mainColor) 0 1px,rgba(0,0,0,.6) 0 2px 4px,rgba(0,0,0,.6) 0 0 2px}.thumb{box-shadow:0 0 5px rgba(0,0,0,.25)}#qr,#thread-watcher,#threadWatcher{box-shadow:1px 1px 3px rgba(0,0,0,.1)!important}.closed{margin-top:10px;color:red}#swf-embed-header.postblock{border:1px solid var(--sc-brderColor)!important;background-color:rgba(var(--sc-headerBGColor-rgb),var(--sc-navOp))!important;color:var(--sc-linkColor)!important}#swf-embed-close{right:1px!important}.fxt-card{color:var(--sc-textColor)!important;background-color:rgba(var(--sc-bgColor-rgb),var(--sc-replyOp))!important;border:1px solid var(--sc-brderColor)!important}:root.alt-spoiler .span.spoiler,:root.alt-spoiler s,:root.alt-spoiler s:not(:hover)>.linkify,:root.alt-spoiler s:not(:hover)>a{color:#fff;background:none repeat scroll 0 0 #fff}:root.alt-spoiler s:focus,:root.alt-spoiler s:hover,:root.alt-spoiler span.spoiler:focus,:root.alt-spoiler span.spoiler:hover{color:#000}#captchaFormPart,#post-preview,#qrCaptchaContainer,#togglePostFormLink,.persistentNav,::placeholder,:root.fourchan-x div.boardBanner div.boardTitle,a.qr-link,button,div#boardNavMobile,div#boardNavMobile option,div#topnav.boardnav,div.boardBanner div.boardTitle,div.captcha-root div,form,input,input#search-box,select,span,table.flashListing td,textarea,tr#captchaFormPart td div#t-root{font-family:inherit!important;font-size:inherit!important}body{font-family:" + ($SS.conf["Custom Font"] ? "'" + $SS.conf["Custom Font"] + "'" : $SS.formatFont($SS.conf["Font Family"])) + "!important;font-size:" + $SS.conf["Font Size"] + "px!important}.fileText,.summary{font-size:" + (($SS.conf["Font Size"] < 13) ? 10 : ($SS.conf["Font Size"] - 2)) + "px!important}:root.fourchan-x div.boardBanner div.boardTitle,div.boardBanner div.boardTitle{font-weight:400!important;font-size:" + (($SS.conf["Font Size"] < 13) ? 22 : 26) + "px!important}.prettyprint span{font-family:monospace!important;font-size:medium!important}#full-board-list,#full-board-list .fourchanx-link,body>#header-bar{font-size:" + ($SS.conf["Font Size"] - 1) + "px!important}@media (min-width:1280px) and (max-width:1920px){#board-list{word-spacing:" + (($SS.conf["Font Size"] < 14) ? -1 : -2) + "px}}:root.anonymize .name,:root.sw-yotsuba.anonymize .post-author:not([class*=capcode]){font-size:0!important}.backlink{font-size:" + $SS.conf["Backlink Font Size"] + "px!important}#fourchanx-settings,#oneechan-options,.UIPanel,.options-button,.pagelist.desktop,.panel,.tab-label,.theme-preview,a.options-button,a.qr-link,div#twHeader{font-size:" + (($SS.conf["Font Size"] >= 18) ? 18 : ($SS.conf["Font Size"] <= 9 ? 9 : $SS.conf["Font Size"])) + "px!important}#qr .move,#qr input[type=submit],#qr label,#qr-file-button,#qr-no-file,.hide-reply-button,.hide-thread-button,:root #t-load,:root #t-next,:root #t-task,select:not([id^=index-]):not([id$=-ctrl]):not(#boardSelectMobile,#oneechan-options select,#add-theme select,#fourchanx-settings select),span#qr-filename-container{font-size:" + $SS.conf["UI Font Size"] + "px!important}.catalog-stats,.meta{font-size:" + (($SS.conf["UI Font Size"] >= 14) ? 13 : ($SS.conf["UI Font Size"] <= 9 ? 9 : $SS.conf["UI Font Size"])) + "px!important}#qr input[type=submit],#qr label,#qr-file-button{text-transform:uppercase}#qr label{overflow:hidden;padding-bottom:2px}:root.underline-disabled a{text-decoration:none!important}.navLinks.navLinksBot.desktop a{text-decoration:underline}:root.underline-disabled .filtered{text-decoration:line-through!important}.deadlink.quotelink{text-decoration:none!important}:root.underline-quotes .backlink,:root.underline-quotes .deadlink.backlink,:root.underline-quotes .deadlink.quotelink,:root.underline-quotes .quotelink{text-decoration:underline!important}#oneechan-version a,a.options-button{text-decoration:none!important}.closed{text-align:center}.name,.option.header .option-title,.subject,.tab-label.selected,a.current{font-weight:" + ($SS.conf["Bitmap Font"] ? "normal" : "bold") + "!important}.tab-label:not(.selected):not(:hover){font-weight:400;opacity:.85}.postblock{font-weight:700}.summary{font-style:" + ($SS.conf["Bitmap Font"] ? 'none' : 'italic') + "}"+$SS.theme.customCSS+" "+($SS.conf["Sidebar Position"] !== 3 ? " :root:not(.fixed) #header-bar{z-index:10}:root.left-sidebar body{padding-left:306px}:root.right-sidebar body{padding-right:306px}:root.left-sidebar:not(.mini-sidebar) .boardBanner,:root.right-sidebar:not(.mini-sidebar) .boardBanner{position:fixed}:root.left-sidebar:not(.mini-sidebar) .boardBanner{left:2px}:root.right-sidebar:not(.mini-sidebar) .boardBanner{right:2px}:root.fixed:not(.autohide):not(.bottom) .boardBanner{margin-top:-6px}:root:not(.left-sidebar,.right-sidebar,.mini-sidebar):not(.autohide):not(.bottom) .boardBanner{margin-top:-3px}:root.left-sidebar #qr,:root.left-sidebar #quickReply{left:0!important;right:auto!important}:root.right-sidebar #qr,:root.right-sidebar #quickReply{right:0!important;left:auto!important}.captcha-img,.captcha-img img{min-width:100%!important;height:56px!important}:root.ss-sidebar body::before{background:var(--sc-sidebar-bg);border-left:2px solid rgba(var(--sc-mainColor-rgb),.9);box-shadow:inset var(--sc-brderColor) 1px 0 0,inset var(--sc-brderColor) -1px 0 0;content:'';height:100%;width:306px;position:fixed;top:0;right:0;pointer-events:none}:root.fixed.ss-sidebar #header-bar{box-shadow:-5px 1px 10px rgba(0,0,0,.2),inset var(--sc-brderColor) -1px 0 0}:root.fixed.header-shadow.ss-sidebar #header-bar{box-shadow:inset var(--sc-brderColor) -1px 0 0!important}:root.ss-sidebar.left-sidebar body::before{border-right:2px solid rgba(var(--sc-mainColor-rgb),.9);border-left:none!important;left:0;right:auto!important}:root.fixed.ss-sidebar.left-sidebar #header-bar{box-shadow:-5px 1px 10px rgba(0,0,0,.2),inset var(--sc-brderColor) 1px 0 0}:root.fixed.header-shadow.ss-sidebar.left-sidebar #header-bar{box-shadow:inset var(--sc-brderColor) 1px 0 0!important}:root.vertical-qr:root.left-sidebar #qr{transform:translateX(-100%);left:0!important;right:auto!important}:root.vertical-qr:root.left-sidebar #qr .move{transform:rotate(90deg);transform-origin:bottom right;left:63.5%;bottom:46px}:root.vertical-qr:root.left-sidebar #quickReply{transform:translateX(-100%);left:0!important;right:auto!important}:root.vertical-qr:root.left-sidebar #qrHeader{transform:rotate(90deg);transform-origin:bottom left;right:auto;left:100%}:root.mini-sidebar:root.left-sidebar body{padding-left:32px!important}:root.mini-sidebar:root.right-sidebar body{padding-right:32px!important}:root.mini-sidebar .boardSubtitle{display:none}:root.mini-sidebar:root.ss-sidebar body::before{width:31px!important}:root.mini-sidebar .boardTitle{top:72px!important;letter-spacing:-1.4px;position:fixed;padding-top:.05em}:root.mini-sidebar:root.right-sidebar .boardTitle{right:32px;transform-origin:top right;transform:rotate(-90deg)}:root.mini-sidebar:root.left-sidebar .boardTitle{left:32px;transform-origin:top left;transform:rotate(90deg)}" : "")+" #qr,#quickReply{box-shadow:none!important;border-radius:0!important}:root:not(.vertical-qr) #qr .move{min-width:302px}#qr .close{padding:2px 3px 2px 4px!important}#qr input[type=checkbox]{margin:0 4px 1px;vertical-align:baseline;position:relative;top:3px}:root.fourchan-xt #qr .move input[type=checkbox]{margin:0 4px 2px;top:2px}#qr-filename-container input[type=checkbox]{margin:0 0 1px}#qr input[type=submit],#qr-file-button,#quickReply input[type=submit]{height:25px!important;margin:0!important}#postForm input[type=submit]{height:22px!important;width:46px}#qr-file-button,:root:not(.fourchan-xt) #qr-filename-container{margin-right:1px!important}#qr-spoiler-label+input[type=submit]{margin-top:1px!important}#qr>form>select{margin:1px 0!important}#qr select[data-name=thread]{margin:1px 0 1px 0;max-width:133px;min-width:80px}#qr>form>div.persona>input:nth-child(4),#qr>form>div.persona>input:nth-child(5),#qr>form>div.persona>input:nth-child(6){margin-left:1px}:root.expand-inputs .persona{display:flex}:root.expand-inputs .persona .field{flex:1;width:0}:root.expand-inputs .persona .field:focus{flex:3}#qr textarea,#quickReply textarea{min-height:190px!important}:root.ua-blink #qr textarea,:root.ua-blink #quickReply textarea{min-height:185px!important}:root.ua-blink #qr textarea.field,:root.ua-blink #quickReply textarea,:root.ua-gecko #qr textarea.field,:root.ua-gecko #quickReply textarea{min-height:9em!important;min-width:302px!important}:root.fourchan-x:not(.fourchan-xt).ua-blink #qr textarea.field,:root.fourchan-x:not(.fourchan-xt).ua-gecko #qr textarea.field{max-height:65vh}:root.fourchan-xt.ua-blink #qr textarea.field,:root.fourchan-xt.ua-gecko #qr textarea.field{max-height:64vh}:root.left-sidebar #qr textarea.field,:root.right-sidebar #qr textarea.field{max-width:302px!important}:root.qr-background #qr,:root.qr-background #quickReply{background:0 0!important;border:none}:root.qr-opacity #qr,:root.qr-opacity #quickReply{opacity:.9}:root.ua-blink #t-help,:root.ua-gecko #t-help{margin:0 0 0 2px!important}.textarea{margin-top:1px;margin-bottom:1px;min-height:9em;max-height:64vh}:root.ua-gecko .textarea{margin-bottom:1px;margin-top:1px}.captcha-img{min-height:58px!important;margin-bottom:1px}.captcha-root div{border-radius:0!important}#t-load,#t-next{height:inherit!important;min-height:17px}:root.vertical-qr #qr .move #autohide,:root.vertical-qr #qr>div>label>div,:root.vertical-qr #qr>div>select{display:none}:root.vertical-qr #qr textarea{resize:vertical!important}:root.vertical-qr #qr{top:auto!important;position:fixed;right:0!important;left:auto!important;transform:translateX(100%)}:root.vertical-qr #qr .move{display:block;position:absolute;width:max-content;min-width:105px;cursor:default;padding:2px 0 2px 2px;text-align:center;bottom:88px}:root.vertical-qr #qr .move label{display:inline}:root.vertical-qr #qr:hover .move{transition:opacity .42s linear}:root.vertical-qr #qr.focus .move,:root.vertical-qr #qr:hover .move{opacity:0!important}:root.vertical-qr.bottom-header #qr{bottom:28px!important}:root.vertical-qr.top-header #qr{bottom:0!important}:root.vertical-qr .captcha-img,:root.vertical-qr .captcha-img img{max-width:247px}:root.vertical-qr #qr form{display:block!important}:root.vertical-qr #qr.focus,:root.vertical-qr #qr:hover{transform:translateX(0)!important}:root.qr-transition.vertical-qr #qr,:root.qr-transition.vertical-qr #quickReply{transition:transform .3s ease-in-out .1s!important}:root.vertical-qr #qr .move{transform:rotate(-90deg);right:86%}:root.vertical-qr #quickReply{top:auto!important;position:fixed;right:0!important;left:auto!important;bottom:0!important;transform:translateX(100%);max-width:300px!important}:root.vertical-qr #quickReply.focus,:root.vertical-qr #quickReply:hover{transform:translateX(0)!important}:root.vertical-qr #qrHeader{display:block;position:absolute;bottom:25vh;right:100%;width:max-content;min-width:105px;padding:2px 2px 4px 4px;text-align:center;cursor:default;transform:rotate(-90deg);transform-origin:bottom right;white-space:nowrap}:root.vertical-qr #quickReply:hover #qrHeader{opacity:0!important;transition:opacity .42s linear}#qr>form{overflow-y:hidden!important}:root.fade-qr #qr form,:root.fade-qr #quickReply form{display:block!important}:root.fade-qr #qr.autohide:not(.focus):not(:hover),:root.fade-qr #quickReply:not(.focus):not(:hover){opacity:.2!important;transition:opacity .2s ease-in-out 1s!important}input[type=number]{appearance:textfield}::-webkit-inner-spin-button,::-webkit-outer-spin-button{-webkit-appearance:none}#t-resp{width:178px!important}#file-n-submit .row.space{margin-top:1px}:root.single-captcha #t-slider{display:none!important}:root.single-captcha iframe#t-frame{margin-top:0!important}:root.single-captcha #qr>form>div.captcha-root>div,:root.single-captcha #quickReply #qrCaptchaContainer{min-height:145px!important}:root.single-captcha #t-next.tcaptcha-stepper.is-ready{display:inline-flex;align-items:center}:root.single-captcha #t-task{display:flex;flex-direction:column;gap:2px;margin:0 auto;overflow-y:auto;max-height:38vh;padding:2px 0!important;height:auto!important;white-space:normal!important;align-items:center!important;overflow-x:hidden;box-sizing:border-box;position:relative;scrollbar-width:none}:root.single-captcha #t-task::-webkit-scrollbar{width:0;height:0}:root.single-captcha #t-task.tcaptcha-compact{flex-direction:row;flex-wrap:wrap;justify-content:center;align-items:flex-start!important}:root.single-captcha #t-desc{position:sticky;top:0;z-index:1;white-space:pre-line;text-align:center;font-size:11px;line-height:1.15;user-select:none;width:100%;padding:2px 0 3px;margin-bottom:1px;background:inherit;pointer-events:none;text-shadow:0 1px 1px rgba(0,0,0,.12),0 0 2px rgba(255,255,255,.18)}:root.single-captcha #t-desc a{pointer-events:auto}:root.single-captcha #t-task.tcaptcha-compact #t-desc{position:static;flex:0 0 100%}:root.single-captcha #t-desc img{margin:2px!important;max-width:40px;max-height:40px;width:auto;height:auto}:root.single-captcha .tcaptcha-image{padding:0;margin:1px;border:none;background:0 0;cursor:pointer!important;width:calc(100% - 4px);max-width:172px;height:auto;flex:none;display:block}:root.single-captcha #t-task.tcaptcha-compact .tcaptcha-image{width:auto;max-width:none}:root.single-captcha .tcaptcha-image img{display:block;width:100%;height:auto}:root.single-captcha #t-task.tcaptcha-compact .tcaptcha-image img{width:auto;max-width:80px;max-height:80px}:root.single-captcha .tcaptcha-image.active{outline:2px solid var(--sc-linkColor);outline-offset:1px}:root.single-captcha #t-load{cursor:pointer!important}:root.single-captcha #t-next{align-items:center;gap:2px;margin-left:auto;padding:2px;font-size:11px}:root.single-captcha .tcaptcha-progress{min-width:38px;text-align:center;display:inline-block}:root.single-captcha .tcaptcha-nav{width:16px;height:16px;font-size:small!important;line-height:1;cursor:pointer!important}:root.single-captcha .tcaptcha-nav.is-disabled,:root.single-captcha .tcaptcha-nav[aria-disabled=true]{opacity:.35;cursor:default!important}#qrHeader{font-size:0}#qrHeader::before{content:'QUICK REPLY';font-size:11px}.closeIcon{background-image:none!important}.closeIcon::after{content:'x'}:root.no-pu .n-pu{vertical-align:middle;display:inline-block;width:16px;height:16px;margin-top:-2px;background:url(//s.4cdn.org/image/minileaf.gif)}.watch-thread-link{margin-bottom:-7px;margin-right:2px;top:auto!important;bottom:4px!important}:root.use-sc-icons .watch-thread-link{background-image:var(--sc-icon-star)!important}:root.use-sc-icons .watch-thread-link>svg{display:none}:root:not(.use-sc-icons).oneechan .watch-thread-link>svg{display:inherit!important}:root.backlink-icon .backlink{font-size:0!important;padding:" + (($SS.conf["Font Size"] < 12) ? 5 : 6) + "px!important;margin-right:0!important;opacity:.6!important;position:relative;bottom:5px;left:2px;background-image:var(--sc-icon-backlink)!important}:root.backlink-icon .backlink.inlined{font-size:0!important;padding:6px!important;margin-right:0!important;opacity:.6!important;position:relative;bottom:5px;left:3px;background-image:var(--sc-icon-downArrow)!important}:root.backlink-icon .backlink .quotelink{position:absolute;inset:0;font-size:0!important}:root.backlink-icon .reply .backlink{bottom:" + (($SS.conf["Font Size"] < 12) ? 4 : 6) + "px!important}:root.backlink-icon .backlink.inlined:hover,:root.backlink-icon .backlink:hover{opacity:1!important}:root.use-sc-icons img[title=Archived],:root.use-sc-icons img[title=Closed],:root.use-sc-icons img[title=Sticky]{color:transparent!important;font-size:0!important;background-color:transparent!important;background-position:center!important;background-repeat:no-repeat;display:inline-block;height:0!important;padding-top:16px!important;text-indent:-9999px!important;vertical-align:bottom;width:16px!important}:root.use-sc-icons .closedIcon{background-image:var(--sc-icon-threadClosed)!important}:root.use-sc-icons .stickyIcon{background-image:var(--sc-icon-threadPinned)!important}:root.use-sc-icons .archivedIcon{background-image:var(--sc-icon-threadArchived)!important}:root.hl-border .post.reply,:root.op-background.hl-border .postContainer.opContainer{border-left:" + $SS.conf["Width Decoration"] + "px " + $SS.conf["Highlight Style"] + " rgba(var(--sc-postHLColor-rgb),1)!important}:root.hl-border-down .post.reply,:root.op-background.hl-border-down .postContainer.opContainer{border-bottom:" + $SS.conf["Width Decoration"] + "px " + $SS.conf["Highlight Style"] + " rgba(var(--sc-postHLColor-rgb),1)!important}:root.hl-outline .post.reply,:root.op-background.hl-outline .postContainer.opContainer{outline:" + $SS.conf["Width Decoration"] + "px " + $SS.conf["Highlight Style"] + " rgba(var(--sc-postHLColor-rgb),1)}.filter-highlight .catalog-thumb{box-shadow:0 0 3px 3px rgba(var(--sc-postHLColor-rgb),.5)!important}.filter-highlight.opContainer,.filter-highlight>.reply{box-shadow:5px 0 rgba(var(--sc-postHLColor-rgb),.5) inset!important}.filter-highlight>div.sideArrows{color:rgba(var(--sc-postHLColor-rgb),.5)!important}.qphl{outline:2px solid rgba(var(--sc-linkColor-rgb),.5)!important}:root.highlight-you .quotesYou.post.op,:root.highlight-you .quotesYou>.reply,:root.highlight-you.fourchan-x .quotesYou.opContainer{border-left:" + $SS.conf["Width Decoration"] + "px solid rgba(var(--sc-quotesYouHLColor-rgb),1)!important}:root.highlight-you .quotesYou>.sideArrows{color:rgba(var(--sc-quotesYouHLColor-rgb),1)!important}:root.highlight-own .yourPost.post.op,:root.highlight-own .yourPost>.reply,:root.highlight-own.fourchan-x .yourPost.opContainer{border-left:" + $SS.conf["Width Decoration"] + "px dashed rgba(var(--sc-ownPostHLColor-rgb),1)!important}:root.highlight-own .yourPost>.sideArrows{color:rgba(var(--sc-ownPostHLColor-rgb),1)!important}.reply:target{background:rgba(var(--sc-replybgHLColor-rgb),.8)!important}.highlight{outline:2px solid rgba(var(--sc-replyslctColor-rgb),1)!important}.catalog-thread.watched .catalog-thumb,.catalog-thread.watched .werkTyme-filename,.thumb.pinned{border:2px solid rgba(var(--sc-postHLColor-rgb),1)!important}.replies-quoting-you>.watcher-link{color:rgba(var(--sc-quotesYouHLColor-rgb),1)!important}.replies-quoting-you>.watcher-link:hover{color:var(--sc-linkHColor)!important}#watched-threads>.replies-quoting-you>a{color:rgba(var(--sc-quotesYouHLColor-rgb),1)!important}#shortcuts>.shortcut>#watcher-link.disabled.replies-quoting-you{color:rgba(var(--sc-quotesYouHLColor-rgb),.45)!important}#shortcuts>.shortcut>#watcher-link.disabled.replies-quoting-you:hover,#watched-threads>.replies-quoting-you>a:hover{color:var(--sc-linkHColor)!important}:root.highlight-opQuotes .qmark-op{color:rgba(var(--sc-postHLColor-rgb),1);font-weight:700}:root.highlight-youQuotes .qmark-you{color:rgba(var(--sc-quotesYouHLColor-rgb),1);font-weight:700}.post-scroll-marker{color:rgba(var(--sc-ownPostHLColor-rgb),.8)}:root.ss-sidebar.right-sidebar .post-scroll-marker.you-scroll-marker{opacity:60%}.extended-large .teaser,.extended-small .teaser{margin-left:5px;margin-right:5px}#threads .thread{margin:2px 1px 0 0}#ctrl{padding-top:4px}#threads{padding:10px 0!important}:root.catalog-justify .catalog-post>.postMessage,:root.catalog-justify .teaser{text-align:justify!important}:root.catalog-background #threads div.thread,:root.catalog-background .catalog-thread{background:rgba(var(--sc-mainColor-rgb),var(--sc-replyOp))!important}:root.rounded-corners.catalog-background #threads div.thread,:root.rounded-corners.catalog-background .catalog-thread{border-radius:3px!important}:root.catalog-background .catalog-post>.postMessage,:root.catalog-background .teaser{margin:0 5px 5px 5px}:root.catalog-background .thumb,:root.catalog-background img.catalog-thumb{margin-top:8px}:root.catalog-background .extended-large .thread{min-height:410px}:root.catalog-background .extended-small .thread{min-height:320px}:root.catalog-thumbsize .thumb,:root.catalog-thumbsize img.catalog-thumb{width:150px!important;height:150px!important}:root.catalog-thumbsize #delform>.catalog-large img.catalog-thumb,:root.catalog-thumbsize #threads.extended-large .thumb,:root.catalog-thumbsize #threads.large .thumb{width:250px!important;height:250px!important}#stylechan-notifications{position:fixed;top:38px;right:10px;z-index:65;width:min(320px,calc(100vw - 20px));display:flex;flex-direction:column;gap:6px;pointer-events:none}:root.bottom-header #notifications,:root.bottom-header #stylechan-notifications{top:auto;bottom:10px}.stylechan-notification{pointer-events:auto;cursor:pointer;padding:7px 10px;border:1px solid;border-left-width:3px;border-radius:3px;box-shadow:rgba(0,0,0,.25) 0 2px 8px;opacity:0;transform:translateY(-4px);transition:opacity .15s ease,transform .15s ease;overflow-wrap:anywhere;font-size:12px;line-height:1.35;min-height:10px}.stylechan-notification.visible{opacity:1;transform:translateY(0)}.stylechan-notification.closing{opacity:0;transform:translateY(-4px)}.stylechan-notification-text{pointer-events:none}.stylechan-notification-text a{pointer-events:auto}.chX-notifs #header-bar{z-index:60!important}.chX-notifs #notifications{position:fixed!important;top:38px!important;right:10px!important;left:auto!important;z-index:10005!important;width:min(320px,calc(100vw - 20px))!important;height:auto!important;display:flex!important;flex-direction:column!important;gap:6px!important;pointer-events:none!important;text-align:left!important}.chX-notifs #notifications .notification{pointer-events:auto!important;padding:7px 10px!important;border:1px solid!important;border-left-width:3px!important;border-radius:3px!important;box-shadow:rgba(0,0,0,.25) 0 2px 8px!important;overflow-wrap:anywhere!important;font-size:12px!important;line-height:1.35!important;display:block!important;text-align:left!important;margin:0!important;width:auto!important;font-weight:lighter;text-shadow:none!important}.chX-notifs #notifications .notification{cursor:pointer!important}.chX-notifs #notifications .notification a.close{display:none!important}#header-bar #notifications a{color:#fff!important}#header-bar #notifications a:hover,.chX-notifs #header-bar #notifications a:hover{color:var(--sc-linkHColor)!important}.chX-notifs #header-bar #notifications a{color:var(--sc-linkColor)!important}#stylechan-notifications .stylechan-notification,.chX-notifs #notifications .notification{color:var(--sc-textColor)!important;background:rgb(var(--sc-mainColor-rgb))!important;border-color:rgb(var(--sc-brderColor-rgb))!important;border-left-color:var(--sc-linkColor)!important}#stylechan-notifications .stylechan-notification-info,.chX-notifs #notifications .notification.info{border-left-color:#6f8fb3!important}#stylechan-notifications .stylechan-notification-warning,.chX-notifs #notifications .notification.warning{border-left-color:#c7a85a!important}#stylechan-notifications .stylechan-notification-error,.chX-notifs #notifications .notification.error{border-left-color:#c06b6b!important}#stylechan-notifications .stylechan-notification-success,.chX-notifs #notifications .notification.success{border-left-color:var(--sc-quoteColor)!important}.chX-notifs #notifications .notification a{color:var(--sc-linkColor)!important}.chX-notifs #notifications .notification a:hover{color:var(--sc-linkHColor)!important}"+($SS.conf["Center Notifications"] ? "#stylechan-notifications{right:auto;left:50%;transform:translateX(-50%);width:min(500px,calc(100vw - 20px))}.chX-notifs #notifications{right:auto!important;top:30px!important;left:50%!important;transform:translateX(-50%)!important;width:min(480px,calc(100vw - 20px))!important}" : "")+" "+($SS.conf["Full Border"] ? "#stylechan-notifications .stylechan-notification,.chX-notifs #notifications .notification{border:" + $SS.conf["Width Decoration"] + "px " + $SS.conf["Highlight Style"] + "!important}#stylechan-notifications .stylechan-notification-info,.chX-notifs #notifications .notification.info{border-color:#6f8fb3!important}#stylechan-notifications .stylechan-notification-warning,.chX-notifs #notifications .notification.warning{border-color:#c7a85a!important}#stylechan-notifications .stylechan-notification-error,.chX-notifs #notifications .notification.error{border-color:#c06b6b!important}#stylechan-notifications .stylechan-notification-success,.chX-notifs #notifications .notification.success{border-color:var(--sc-quoteColor)!important}" : "")+" "+($SS.conf["Style Scrollbars"] ? ":root{scrollbar-color:var(--sc-titleColor) var(--sc-bgColor)}.field{scrollbar-color:var(--sc-textColor) var(--sc-inputColor)}" : "")+" "+($SS.conf["Style Scrollbars"] && $SS.conf["Thin Scrollbars"] ? "*{scrollbar-width:thin}" : "")+" "+(!$SS.is4chanX() ? "#sc-msg-icon{display:inline-block;height:16px;width:16px;opacity:.5;cursor:pointer;vertical-align:middle}#sc-msg-icon.active{opacity:1}" : "")+" #add-theme,#oneechan-options{border:0!important;position:fixed;margin:auto}#oneechan-options{min-width:40em;max-width:45%;text-align:left!important;height:65vh;max-height:100em;top:0;bottom:0;left:0;right:0;box-shadow:rgba(0,0,0,.6) 0 0 10px!important;padding:.4em .4em 2.7em .4em}#options-container:not(.yui-skin-sam){padding:3px;box-shadow:inset rgba(0,0,0,.3) 0 0 5px;border-radius:5px}#options-container:not(.yui-skin-sam),.options-section{height:100%}.options-section{overflow-y:auto;overflow-x:hidden}#main-section .option,#misc-section .option{display:block;border-top:1px solid rgba(0,0,0,.1);height:1.7em;padding:0 .45em}#main-section .option[hidden],#misc-section .option[hidden]{display:none!important}#main-section>.option:nth-of-type(2n),#misc-section>.option:nth-of-type(2n){background:var(--sc-mainColor-shiftM5)!important}#main-section .buttons-container+.option{border-top:none!important}.option-title{line-height:1.7em}#main-section .option:first-child,#misc-section .option:first-child{border-top:0!important}#main-section .option:last-child,#misc-section .option:last-child{border-bottom:0!important}#main-section input,#main-section select,#misc-section input,#misc-section select{float:right!important}#main-section input[type=checkbox],#misc-section input[type=checkbox]{float:left!important;margin-right:5px!important}input[name='Font Family']::-webkit-calendar-picker-indicator,input[name='Font Family']::-webkit-list-button{display:none!important}.suboption::before{border-bottom:1px solid rgba(0,0,0,.1);border-left:1px solid rgba(0,0,0,.1);content:'';display:inline-block;margin-right:2px;height:50%;width:6px}.suboption{padding-left:16px!important}.option.header{cursor:auto!important}.theme-preview{cursor:default}.theme-preview blockquote{margin:12px 40px!important}#themes-section .reply{padding:2px!important;position:relative;text-align:left;width:99.4%;border-radius:0!important}.theme-buttons-container{bottom:4px;right:2px;margin:0;opacity:0;position:absolute;z-index:3}.theme-preview:hover .theme-buttons-container{opacity:1}.theme-buttons-container>a{display:inline-block;margin:0 2px;padding:2px 5px;text-align:center;width:50px;border-radius:3px}.theme-preview .sfw-label{bottom:-5px;font-size:32px!important;margin:0!important;opacity:0;position:absolute;right:300px}.theme-preview.nsfw.selected .both,.theme-preview.nsfw:not(.selected) .sfw-label,.theme-preview.selected:not(.nsfw) .sfw-label{transition:opacity .3s,right .3s}.theme-preview.nsfw .notsafe,.theme-preview.selected .safe,.theme-preview.selected.nsfw .both{opacity:1;right:3px;z-index:1}.theme-preview.selected.nsfw .sfw-label:not(.both){opacity:0!important;right:300px!important;z-index:0!important}.theme-preview-post{flex-shrink:0;margin-bottom:8px;background:var(--sc-mainColor);font-size:11px;line-height:1.4;cursor:default;text-align:left;border-bottom:1px solid var(--sc-brderColor);padding-bottom:12px;box-shadow:0 9px 15px -12px rgba(0,0,0,.25)}.theme-preview-post .preview-border{display:block;border:1px solid var(--sc-brderColor);padding:6px;cursor:pointer}.theme-preview-post .preview-border:hover{outline:1px dashed var(--sc-linkColor)}.theme-preview-post [data-color]{cursor:pointer;transition:outline .1s}.theme-preview-post [data-color]:hover{outline:1px dashed var(--sc-linkColor)}.preview-name{color:var(--sc-nameColor);font-weight:700}.preview-trip{color:var(--sc-tripColor)}.preview-subject{color:var(--sc-titleColor);font-weight:700}.preview-quote{color:var(--sc-quoteColor)}.preview-backlink a{color:var(--sc-blinkColor)}.preview-date{color:var(--sc-textColor);font-size:10px}.preview-postnum a{color:var(--sc-linkColor)}.theme-body{flex:1 1 auto;min-height:0;overflow-y:auto}.side-switch{position:absolute;top:4px;right:8px;cursor:pointer;font-size:16px;opacity:.5;z-index:1}.side-switch:hover{opacity:1}#add-theme{padding:20px!important;position:fixed;top:0;right:0;left:auto;max-height:100vh;height:calc(100vh - 2.2em);max-width:45vw;overflow:hidden;text-align:left!important;box-sizing:border-box;display:flex;flex-direction:column;gap:6px;margin:2em .2em!important;box-shadow:-2px 0 12px rgba(0,0,0,.3)!important}#add-theme.left{right:auto;left:0;box-shadow:2px 0 12px rgba(0,0,0,.3)}#add-theme.left .side-switch{right:auto;left:8px}#add-theme .option-title{float:left;padding-left:5px;min-width:120px}#add-theme .theme-fields>label{line-height:22px;display:flex;justify-content:space-between;align-items:center;width:100%;padding:2px 4px;box-sizing:border-box;border:1px solid transparent}#add-theme .theme-fields>label.picked{outline:1px dashed var(--sc-linkColor);outline-offset:-2px}#add-theme .option-title{flex-shrink:0;padding-right:8px}#add-theme .theme-fields>label>input[type=text],#add-theme .theme-fields>label>select{width:auto;max-width:55%;appearance:auto;text-align:left}#add-theme .theme-body{flex:0 1 auto;min-height:0;max-height:calc(85vh - 90px);overflow-y:auto;scrollbar-width:none}#add-theme .theme-body::-webkit-scrollbar{display:none}#add-theme .theme-body>label#customCSS{width:100%;display:flex;flex-direction:column;min-height:0;text-align:left}#add-theme .theme-body>label#customCSS>textarea{width:100%;max-width:100%;min-height:5em;height:clamp(4em,24vh,34vh);max-height:48vh;flex:0 1 auto;box-sizing:border-box;resize:vertical;overflow-y:auto;font-family:monospace}#add-theme .theme-fields>label>input[type=text],#add-theme .theme-fields>label>select{width:auto;max-width:100%;appearance:auto}.color-picker-wrap{display:inline-flex;align-items:center;vertical-align:middle;gap:2px;margin-top:3px}#add-theme .color-hex{width:60px;height:20px;text-align:center;border:1px solid var(--sc-inputbColor)!important;border-radius:2px;outline:0;box-sizing:content-box;font-family:monospace;font-size:11px;background:0 0}.color-picker-btn{width:24px;height:24px;padding:0;border:1px solid var(--sc-inputbColor)!important;cursor:pointer;box-sizing:border-box;background:0 0}.color-picker-btn::-webkit-color-swatch-wrapper{padding:0}.color-picker-btn::-webkit-color-swatch{border:none}:root.rounded-corners #add-theme .color-hex,:root.rounded-corners .color-picker-btn{border-radius:3px!important}#add-theme>div{margin-top:.6em;text-align:left}#add-theme>.theme-buttons{flex:0 0 auto;margin-top:0;text-align:right;border-top:1px solid var(--sc-brderColor);padding-top:6px;box-shadow:0 -10px 12px -12px rgba(0,0,0,.25)}#options-tabs{list-style:none;margin:0;padding:0;position:absolute;top:-24px;left:-1px}.tab-item{float:left;margin:0;padding:0}.tab-label{display:block;height:16px;margin:0 1px;padding:5px;text-align:center;width:75px;transition:all .1s ease-in-out}#overlay{position:fixed;top:0;left:0;right:0;bottom:0;width:100%;height:100%;z-index:99!important;background-color:rgba(0,0,0,.3)!important}#overlay2{background:rgba(0,0,0,.1)!important;position:fixed;top:0;left:0;height:100%;width:100%;text-align:center;z-index:125!important}#overlay2::before{content:'';display:inline-block;height:100%;vertical-align:middle}#overlay.previewing{display:none}#overlay.previewing~#overlay2{background-color:rgba(0,0,0,0)!important}.buttons-container{bottom:3px;left:5px;right:5px;display:flex;justify-content:space-between;align-items:center;position:absolute;z-index:100;margin:0}.btn-center{text-align:center;flex:1}.btn-right{margin-left:auto}.options-button{display:inline-block;line-height:1.4em;margin:0 .15em;min-width:3em;padding:.15em .75em;text-align:center;cursor:pointer}.options-button-small{padding:.15em .4em;min-width:2.3em}#import-link{line-height:1.7em;overflow:hidden;position:relative;float:left;height:1.85em!important;margin-top:-.15em;padding-top:.15em}#import-settings{position:relative;overflow:hidden;vertical-align:bottom}#import-settings>.import-input{left:0}.import-input{position:absolute;opacity:0;cursor:pointer}label.option>input[type=checkbox]{margin:.3em .15em 0!important}.option>input[type=text],span.option>select{width:125px}#oneechan-options input[type=text],#oneechan-options select{max-height:1.55em;margin-top:0!important;padding:0 .25em!important}#oneechan-options textarea{background:0 0!important;border:0!important;height:100%!important;width:100%!important;resize:none}#oneechan-version{opacity:.7;font-size:x-small!important}.link-delim{opacity:.4}#misc-section .option.mascot-container{height:auto!important;padding:4px 6px!important;overflow:hidden}#misc-section .option.mascot-container::before{display:none!important}.mascot-container .mascot-opacity,.mascot-container .mascot-url{font-family:inherit!important;font-size:inherit!important}.mascot-row{display:flex;align-items:center;gap:4px;margin-bottom:3px}.mascot-row:last-of-type{margin-bottom:0}.mascot-url{flex:1;min-width:0;height:20px!important;width:auto!important;float:none!important}input[type=range].mascot-opacity{width:64px;float:none!important;margin:0!important;padding:0!important;height:20px;appearance:none;background:0 0}input[type=range].mascot-opacity::-webkit-slider-runnable-track{height:4px;background:rgba(0,0,0,.2);border-radius:2px}input[type=range].mascot-opacity::-webkit-slider-thumb{-webkit-appearance:none;width:12px;height:12px;border-radius:50%;background:var(--sc-textColor);margin-top:-4px;cursor:pointer}input[type=range].mascot-opacity::-moz-range-track{height:4px;background:rgba(0,0,0,.2);border-radius:2px;border:none}input[type=range].mascot-opacity::-moz-range-thumb{width:12px;height:12px;border-radius:50%;background:var(--sc-textColor);border:none;cursor:pointer}.mascot-opacity-val{width:30px;font-size:11px;text-align:right;line-height:20px;margin-right:.3em}.mascot-add{margin:4px 0 0}.mascot-remove{display:inline-block;cursor:pointer;border:1px solid var(--sc-inputbColor);background:0 0;padding:2px 6px;font-size:13px;line-height:18px;min-width:22px;text-align:center;border-radius:3px;margin:0;color:var(--sc-quoteColor)}:root.rounded-corners .mascot-opacity-val,:root.rounded-corners .mascot-url{border-radius:3px!important}:root.rounded-corners input[type=range].mascot-opacity{border-radius:3px!important}:root.rounded-corners input[type=range].mascot-opacity::-webkit-slider-runnable-track{border-radius:3px!important}:root.rounded-corners input[type=range].mascot-opacity::-moz-range-track{border-radius:3px!important}:root.rounded-corners input[type=range].mascot-opacity::-webkit-slider-thumb{border-radius:50%!important}:root.rounded-corners input[type=range].mascot-opacity::-moz-range-thumb{border-radius:50%!important}";

            if (reload)
                $("#ch4SS").text(css);
            else
                $(getDocHead()).append($("<style type='text/css' id=ch4SS>").text(css));
        },
        setThemeVariables: function () {
            var t = $SS.theme;
            if (!t || t.hidden) return;
            var sidebarBgOpacity = t.mainColor.isDark ? ".9" : ".2",
                css = ":root{" +
                "--sc-textColor:" + t.textColor.hex + ";" +
                "--sc-textColor-rgb:" + t.textColor.rgb + ";" +
                "--sc-nameColor:" + t.nameColor.hex + ";" +
                "--sc-tripColor:" + t.tripColor.hex + ";" +
                "--sc-linkColor:" + t.linkColor.hex + ";" +
                "--sc-linkColor-rgb:" + t.linkColor.rgb + ";" +
                "--sc-linkHColor:" + t.linkHColor.hex + ";" +
                "--sc-linkHColor-rgb:" + t.linkHColor.rgb + ";" +
                "--sc-headerColor:" + t.headerColor.hex + ";" +
                "--sc-headerLColor:" + t.headerLColor.hex + ";" +
                "--sc-headerLHColor:" + t.headerLHColor.hex + ";" +
                "--sc-quoteColor:" + t.quoteColor.hex + ";" +
                "--sc-quoteColor-rgb:" + t.quoteColor.rgb + ";" +
                "--sc-titleColor:" + t.titleColor.hex + ";" +
                "--sc-boardColor:" + t.boardColor.hex + ";" +
                "--sc-blinkColor:" + t.blinkColor.hex + ";" +
                "--sc-qlColor:" + t.qlColor.hex + ";" +
                "--sc-bgColor:" + t.bgColor.hex + ";" +
                "--sc-bgColor-rgb:" + t.bgColor.rgb + ";" +
                "--sc-mainColor:" + t.mainColor.hex + ";" +
                "--sc-mainColor-rgb:" + t.mainColor.rgb + ";" +
                "--sc-mainColor-shiftM30:" + t.mainColor.shiftRGB(-30) + ";" +
                "--sc-mainColor-shiftM25:" + t.mainColor.shiftRGB(-25) + ";" +
                "--sc-mainColor-shiftM18:" + t.mainColor.shiftRGB(-18) + ";" +
                "--sc-mainColor-shiftM16:" + t.mainColor.shiftRGB(-16) + ";" +
                "--sc-mainColor-shiftM15:" + t.mainColor.shiftRGB(-15) + ";" +
                "--sc-mainColor-shiftM10:" + t.mainColor.shiftRGB(-10) + ";" +
                "--sc-mainColor-shiftM5:" + t.mainColor.shiftRGB(-5) + ";" +
                "--sc-mainColor-shift4:" + t.mainColor.shiftRGB(4) + ";" +
                "--sc-mainColor-shift10:" + t.mainColor.shiftRGB(10) + ";" +
                "--sc-mainColor-shift15:" + t.mainColor.shiftRGB(15) + ";" +
                "--sc-brderColor:" + t.brderColor.hex + ";" +
                "--sc-brderColor-rgb:" + t.brderColor.rgb + ";" +
                "--sc-inputColor:" + t.inputColor.hex + ";" +
                "--sc-inputColor-rgb:" + t.inputColor.rgb + ";" +
                "--sc-inputColor-shift25:" + t.inputColor.shiftRGB(25) + ";" +
                "--sc-inputColor-hover:" + t.inputColor.hover + ";" +
                "--sc-inputbColor:" + t.inputbColor.hex + ";" +
                "--sc-headerBGColor:" + t.headerBGColor.hex + ";" +
                "--sc-headerBGColor-rgb:" + t.headerBGColor.rgb + ";" +
                "--sc-headerBGColor-shift15:" + t.headerBGColor.shiftRGB(15) + ";" +
                "--sc-unreadColor-rgb:" + t.unreadColor.rgb + ";" +
                "--sc-postHLColor-rgb:" + t.postHLColor.rgb + ";" +
                "--sc-quotesYouHLColor:" + t.quotesYouHLColor.hex + ";" +
                "--sc-quotesYouHLColor-rgb:" + t.quotesYouHLColor.rgb + ";" +
                "--sc-ownPostHLColor-rgb:" + t.ownPostHLColor.rgb + ";" +
                "--sc-replybgHLColor-rgb:" + t.replybgHLColor.rgb + ";" +
                "--sc-replyslctColor-rgb:" + t.replyslctColor.rgb + ";" +
                "--sc-codeBackground:" + t.codeBackground + ";" +
                "--sc-codeBorder:" + t.codeBorder + ";" +
                "--sc-replyOp:" + t.replyOp + ";" +
                "--sc-navOp:" + t.navOp + ";" +
                "--sc-sidebar-bg:rgba(" + t.mainColor.shiftRGB(-18) + "," + sidebarBgOpacity + ");" +
                "--sc-bgImg:" + t.bgImg.get() + ";" +
                "--sc-icon-star:url(\"data:image/svg+xml," + t.icons.star + "\");" +
                "--sc-icon-backlink:url(\"data:image/svg+xml," + t.icons.backlink + "\");" +
                "--sc-icon-downArrow:url(\"data:image/svg+xml," + t.icons.downArrow + "\");" +
                "--sc-icon-threadClosed:url(\"data:image/svg+xml," + t.icons.threadClosed + "\");" +
                "--sc-icon-threadPinned:url(\"data:image/svg+xml," + t.icons.threadPinned + "\");" +
                "--sc-icon-threadArchived:url(\"data:image/svg+xml," + t.icons.threadArchived + "\");" +
                "--sc-icon-msg:url(\"data:image/svg+xml," + t.icons.msg + "\")" +
                "}";
            var el = document.getElementById("sc-theme-vars");
            if (!el) {
                el = document.createElement("style");
                el.id = "sc-theme-vars";
                (document.head || document.documentElement).appendChild(el);
            }
            el.textContent = css;
        },
        initImageConvertOnDrop: function () {
            var MAX_BYTES = $SS.location.maxFileSize;

            function notify(msg) {
                $SS.notify({
                    type: 'success',
                    content: msg,
                    lifetime: 5
                });
            }

            function convertToJPEG(file, baseName, qrInput) {
                createImageBitmap(file).then(function (bitmap) {
                    var canvas = document.createElement("canvas"),
                        w = bitmap.width, h = bitmap.height,
                        board = $SS.location.board,
                        maxDim = ($SS.boardMaxDims[board] || 10000),
                        wasResized = false;

                    if (w > maxDim || h > maxDim) {
                        var scale = Math.min(maxDim / w, maxDim / h);
                        w = Math.round(w * scale);
                        h = Math.round(h * scale);
                        wasResized = true;
                    }
                    canvas.width = w;
                    canvas.height = h;
                    canvas.getContext("2d").drawImage(bitmap, 0, 0, w, h);
                    bitmap.close();

                    var qualities = [0.99, 0.98, 0.97, 0.96, 0.95, 0.90, 0.85, 0.80, 0.75];
                    var outName = baseName + ".jpg";

                    function tryQuality(index) {
                        var q = qualities[index];
                        canvas.toBlob(function (blob) {
                            if (blob.size <= MAX_BYTES || index === qualities.length - 1) {
                                var converted = new File([blob], outName, { type: "image/jpeg" });
                                var dt = new DataTransfer();
                                dt.items.add(converted);
                                qrInput.files = dt.files;
                                qrInput.dispatchEvent(new Event("input", { bubbles: true }));
                                qrInput.dispatchEvent(new Event("change", { bubbles: true }));
                                var msg = "Converted " + file.name + " to " + outName + " (q=" + Math.round(q * 100) + "%)";
                                if (wasResized) msg += ", resized to " + w + "x" + h;
                                notify(msg);
                            } else {
                                tryQuality(index + 1);
                            }
                        }, "image/jpeg", q);
                    }

                    tryQuality(0);
                }).catch(function (err) { console.warn("Image conversion failed:", err); });
            }

            function shouldConvert(file) {
                if (file.type === "image/gif") return false;
                return file.type === "image/webp" || (/^image\//.test(file.type) && file.size > MAX_BYTES);
            }

            function findQRFileInput() {
                return document.querySelector("#qr input[type=file]") ||
                    document.querySelector("#quickReply #qrFile") ||
                    document.querySelector("#quickReply input[type=file]") ||
                    document.querySelector("form[name='qrPost'] input[type=file]") ||
                    document.querySelector("form[name='post'] input[type=file]") ||
                    document.querySelector("#postForm input[type=file]") ||
                    document.querySelector("#postFile");
            }

            function clearSelectedFile(input) {
                try {
                    input.files = new DataTransfer().files;
                } catch (err) { console.warn("Failed to clear file:", err); }
            }

            // File picker: intercept change on the QR input
            document.addEventListener("change", function (e) {
                var input = e.target;
                if (input.type !== "file") return;
                if (!input.closest("#qr, #quickReply, #postForm, form[name='qrPost'], form[name='post']")) return;
                var file = input.files && input.files[0];
                if (!file || !shouldConvert(file)) return;
                e.stopImmediatePropagation();
                clearSelectedFile(input);
                convertToJPEG(file, file.name.replace(/\.[^.]+$/, ""), input);
            }, true);

            // Drag and drop
            document.addEventListener("drop", function (e) {
                var files = e.dataTransfer && e.dataTransfer.files;
                if (!files || !files.length) return;

                var file = files[0];
                if (!shouldConvert(file)) return;

                // Find the QR file input (4chanX or native)
                var qrInput = findQRFileInput();
                if (!qrInput) return;

                e.preventDefault();
                e.stopPropagation();

                var baseName = file.name.replace(/\.[^.]+$/, "");
                clearSelectedFile(qrInput);
                convertToJPEG(file, baseName, qrInput);
            }, true);
        },
        getNotificationRoot: function () {
            var root = document.getElementById('stylechan-notifications');

            if (root) return root;
            if (!getDocBody()) return null;

            root = document.createElement('div');
            root.id = 'stylechan-notifications';
            root.setAttribute('aria-live', 'polite');
            root.setAttribute('aria-atomic', 'true');

            getDocBody().appendChild(root);
            return root;
        },
        dismissNotification: function (node) {
            if (!node || node.dataset.closing === 'true') return;

            node.dataset.closing = 'true';
            node.classList.add('closing');

            setTimeout(function () {
                if (node.parentNode)
                    node.parentNode.removeChild(node);
            }, 180);
        },
        notify: function (detail) {
            var root, note, text, lifetime;

            if ($SS.conf && !$SS.conf["Toast Notifications"])
                return;

            if (typeof detail === 'string')
                detail = { content: detail };

            if (!detail || !detail.content)
                return;

            root = $SS.getNotificationRoot();
            if (!root) {
                return setTimeout(function () {
                    $SS.notify(detail);
                }, 25);
            }

            note = document.createElement('div');
            text = document.createElement('div');
            lifetime = detail.lifetime === undefined ? 4 : detail.lifetime;

            note.className = 'stylechan-notification stylechan-notification-' + (detail.type || 'info');
            note.setAttribute('role', 'status');
            note.setAttribute('tabindex', '0');
            note.title = 'Dismiss';

            text.className = 'stylechan-notification-text';
            if (typeof detail.content === 'string')
                text.textContent = detail.content;
            else
                text.appendChild(detail.content);
            note.appendChild(text);

            note.addEventListener('click', function (e) {
                if (e.target.closest('a'))
                    return;
                $SS.dismissNotification(note);
            });
            note.addEventListener('keydown', function (e) {
                if (e.target.closest && e.target.closest('a'))
                    return;
                if (e.key === "Enter" || e.key === "Escape") {
                    e.preventDefault();
                    $SS.dismissNotification(note);
                }
            });

            root.appendChild(note);
            if (root.childElementCount > 4)
                $SS.dismissNotification(root.firstElementChild);

            setTimeout(function () {
                note.classList.add('visible');
            }, 0);

            if (lifetime > 0) {
                setTimeout(function () {
                    $SS.dismissNotification(note);
                }, lifetime * 1000);
            }
        },
        initRememberComment: function () {
            if (!$SS.conf["Remember Comment Draft"]) return;
            $SS.handleFormNode();
        },
        getRememberCommentPrefix: function () {
            return NAMESPACE + "RememberComment:";
        },
        getRememberCommentKey: function () {
            return $SS.getRememberCommentPrefix() + location.pathname;
        },
        getRememberCommentExpiry: function () {
            return 24 * 60 * 60 * 1000;
        },
        saveRememberedComment: function (storageKey, text) {
            var val = JSON.stringify({ text: text, savedAt: Date.now() });
            if ($SS.hasGM) { try { GM_setValue(storageKey, val); } catch (e) {} }
            else { try { localStorage.setItem(storageKey, val); } catch (e) {} }
            $SS.cleanupRememberedComments();
        },
        clearRememberedComment: function () {
            var key = $SS.getRememberCommentKey();
            if ($SS.hasGM) { try { GM_deleteValue(key); } catch (e) {} }
            try { localStorage.removeItem(key); } catch (e) {}
        },
        cleanupRememberedComments: function () {
            var prefix;
            try { prefix = $SS.getRememberCommentPrefix(); } catch (e) { return; }
            if (!prefix) return;
            var keptEntries = [];
            var i, key, entry, keys = {}, allKeys;

            if ($SS.hasGM) {
                try { allKeys = GM_listValues(); for (i = 0; i < allKeys.length; i++) { if (allKeys[i].indexOf(prefix) === 0) keys[allKeys[i]] = true; } } catch (e) {}
            }
            try { for (i = 0; i < localStorage.length; i++) { key = localStorage.key(i); if (key && key.indexOf(prefix) === 0) keys[key] = true; } } catch (e) {}

            allKeys = Object.keys(keys);
            for (i = 0; i < allKeys.length; i++) {
                entry = $SS.loadRememberedComment(allKeys[i]);
                if (!entry) continue;
                keptEntries.push({ key: allKeys[i], savedAt: entry.savedAt });
            }

            keptEntries.sort(function (a, b) { return b.savedAt - a.savedAt; });
            keptEntries.slice(10).forEach(function (entry) {
                if ($SS.hasGM) { try { GM_deleteValue(entry.key); } catch (e) {} }
                try { localStorage.removeItem(entry.key); } catch (e) {}
            });
        },
        loadRememberedComment: function (storageKey) {
            var rawValue, parsedValue;
            if ($SS.hasGM) { try { rawValue = GM_getValue(storageKey); } catch (e) {} }
            if (!rawValue) { try { rawValue = localStorage.getItem(storageKey); } catch (e) { return null; } }
            if (!rawValue) return null;

            try { parsedValue = JSON.parse(rawValue); } catch (error) {
                if ($SS.hasGM) { try { GM_deleteValue(storageKey); } catch (e) {} }
                try { localStorage.removeItem(storageKey); } catch (e) {}
                return null;
            }

            if (!parsedValue || typeof parsedValue.text !== "string" || typeof parsedValue.savedAt !== "number") {
                if ($SS.hasGM) { try { GM_deleteValue(storageKey); } catch (e) {} }
                try { localStorage.removeItem(storageKey); } catch (e) {}
                return null;
            }

            if (Date.now() - parsedValue.savedAt > $SS.getRememberCommentExpiry()) {
                if ($SS.hasGM) { try { GM_deleteValue(storageKey); } catch (e) {} }
                try { localStorage.removeItem(storageKey); } catch (e) {}
                return null;
            }

            return parsedValue;
        },
        bindRememberComment: function (qrNode) {
            if (!qrNode || !$SS.conf["Remember Comment Draft"]) return;
            if (qrNode._rememberCommentBound) return;

            var commentField = qrNode.querySelector("textarea");
            var formNode = qrNode.querySelector("form") || qrNode.closest("form");
            var storageKey = $SS.getRememberCommentKey();
            var saveTimer = null;
            var savedDraft;
            var suppressRemember = false;

            if (!commentField) return;

            savedDraft = $SS.loadRememberedComment(storageKey);
            if (savedDraft && !commentField.value) {
                commentField.value = savedDraft.text;
                commentField.dispatchEvent(new Event("input", { bubbles: true }));
            }

            function queueSave() {
                if (suppressRemember) {
                    suppressRemember = false;
                }

                clearTimeout(saveTimer);
                saveTimer = setTimeout(function () {
                    if (commentField.value.trim())
                        $SS.saveRememberedComment(storageKey, commentField.value);
                    else
                        $SS.clearRememberedComment();
                }, 5000);
            }

            function clearSavedComment() {
                suppressRemember = true;
                clearTimeout(saveTimer);
                $SS.clearRememberedComment();
            }

            commentField.addEventListener("input", queueSave);
            if (formNode)
                formNode.addEventListener("submit", clearSavedComment, true);
            qrNode.addEventListener("click", function (e) {
                var submitNode = e.target.closest("input[type=submit], button[type=submit]");
                if (submitNode)
                    clearSavedComment();
            });

            qrNode._rememberCommentBound = true;
        },
        handleFormNode: function (form) {
            if (!form) {
                document.querySelectorAll("#qr, #quickReply, form[name='post'], form[name='qrPost']").forEach($SS.handleFormNode);
                return;
            }
            if ($SS.conf["Remember Comment Draft"]) {
                $SS.bindRememberComment(form);
            }
            if ($SS.conf["Watch Thread on Reply"]) {
                form.querySelectorAll("input[type=submit]").forEach(function (btn) {
                    if (!btn._watchThreadBound) {
                        btn.addEventListener("click", $SS.watchThread);
                        btn._watchThreadBound = true;
                    }
                });
            }
            var spoiler = form.querySelector("#qrSpoiler input[type=checkbox]");
            if (spoiler && !spoiler.title) spoiler.title = "Spoiler image";
        },
        initSingleViewCaptcha: function () {
            if (!$SS.conf["Single View Captcha"]) return;

            $.waitForFn(function () {
                return typeof TCaptcha !== "undefined" && typeof TCaptcha.buildSliderNode === "function";
            }, function () {
                var picksByTask = [];

                function tidyPrompt(promptText) {
                    return promptText
                        .replace(/Use the scroll bar below to\s*|,\s*then click next\.?/gi, '')
                        .replace(/(?:^|>)\s*([a-z])/i, function (match) {
                            return match.toUpperCase();
                        }) + '.';
                }

                function syncCaptchaResponse() {
                    if (!TCaptcha.respNode) return;
                    TCaptcha.respNode.value = picksByTask.map(function (choice) {
                        return choice === undefined ? "" : choice;
                    }).join("");
                }

                function paintNavigator() {
                    var stepperNode = TCaptcha.nextNode;
                    if (!stepperNode || !TCaptcha.tasks || !TCaptcha.tasks.length) return;

                    stepperNode.classList.remove("is-ready");
                    stepperNode.innerHTML = "";

                    var backButton = document.createElement("span");
                    backButton.className = "tcaptcha-nav tcaptcha-nav-back" + (TCaptcha.taskId <= 0 ? " is-disabled" : "");
                    backButton.textContent = "‹";
                    backButton.setAttribute("aria-disabled", TCaptcha.taskId <= 0 ? "true" : "false");
                    backButton.addEventListener("click", function (evt) {
                        evt.preventDefault();
                        if (TCaptcha.taskId > 0) {
                            TCaptcha.setTaskId(TCaptcha.taskId - 1);
                            renderCaptchaGrid();
                        }
                    });

                    var progressText = document.createElement("span");
                    progressText.className = "tcaptcha-progress";
                    progressText.textContent = (TCaptcha.taskId + 1) + "/" + TCaptcha.tasks.length;

                    var forwardButton = document.createElement("span");
                    forwardButton.className = "tcaptcha-nav tcaptcha-nav-forward" + (TCaptcha.taskId >= TCaptcha.tasks.length - 1 ? " is-disabled" : "");
                    forwardButton.textContent = "›";
                    forwardButton.setAttribute("aria-disabled", TCaptcha.taskId >= TCaptcha.tasks.length - 1 ? "true" : "false");
                    forwardButton.addEventListener("click", function (evt) {
                        evt.preventDefault();
                        if (TCaptcha.taskId < TCaptcha.tasks.length - 1) {
                            TCaptcha.setTaskId(TCaptcha.taskId + 1);
                            renderCaptchaGrid();
                        }
                    });

                    stepperNode.appendChild(backButton);
                    stepperNode.appendChild(progressText);
                    stepperNode.appendChild(forwardButton);
                    stepperNode.classList.add("is-ready");
                }

                function rememberChoice(choiceIndex) {
                    var activeTask = TCaptcha.taskId;
                    picksByTask[activeTask] = choiceIndex;
                    syncCaptchaResponse();

                    if (activeTask < TCaptcha.tasks.length - 1) {
                        TCaptcha.setTaskId(activeTask + 1);
                    } else if ($SS.conf["Auto Submit"]) {
                        var form = TCaptcha.node && TCaptcha.node.closest("form");
                        if (form) {
                            var submitBtn = form.querySelector("input[type=submit]");
                            if (submitBtn) {
                                setTimeout(function () { submitBtn.click(); }, 100);
                            }
                        }
                    }

                    renderCaptchaGrid();
                }

                function attachGridHandler(gridNode) {
                    if (!gridNode || gridNode.dataset.singleCaptchaBound) return;

                    gridNode.addEventListener("click", function (evt) {
                        var tileNode = evt.target.closest(".tcaptcha-image");
                        var choiceIndex;

                        if (!tileNode) return;

                        choiceIndex = parseInt(tileNode.getAttribute("data-choice"), 10);
                        if (!isNaN(choiceIndex)) {
                            rememberChoice(choiceIndex);
                        }
                    });

                    gridNode.dataset.singleCaptchaBound = "true";
                }

                function applyCaptchaLayout(gridNode) {
                    var previewNodes = Array.from(gridNode.querySelectorAll(".tcaptcha-image img"));
                    var isCompactMode = previewNodes.length > 0 && previewNodes.every(function (imageNode) {
                        if (!imageNode.naturalWidth || !imageNode.naturalHeight) return false;

                        return Math.abs(imageNode.naturalWidth - imageNode.naturalHeight) <= 4 &&
                            imageNode.naturalWidth <= 96 && imageNode.naturalHeight <= 96;
                    });

                    gridNode.classList.toggle("tcaptcha-compact", isCompactMode);
                }

                function refreshCaptchaLayout(gridNode) {
                    var previewNodes = Array.from(gridNode.querySelectorAll(".tcaptcha-image img"));

                    if (!previewNodes.length) {
                        gridNode.classList.remove("tcaptcha-compact");
                        return;
                    }

                    previewNodes.forEach(function (imageNode) {
                        if (imageNode.complete && imageNode.naturalWidth) return;

                        imageNode.addEventListener("load", function () {
                            applyCaptchaLayout(gridNode);
                        }, { once: true });
                        imageNode.addEventListener("error", function () {
                            applyCaptchaLayout(gridNode);
                        }, { once: true });
                    });

                    applyCaptchaLayout(gridNode);
                }

                function renderCaptchaGrid() {
                    var gridNode = document.querySelector("#t-task");
                    var activeChallenge = TCaptcha.getCurrentTask();
                    var promptHTML;
                    var tileHTML;
                    var currentPick = picksByTask[TCaptcha.taskId];

                    if (!TCaptcha.node || !gridNode || !activeChallenge) return;

                    TCaptcha.node.style.height = "auto";
                    TCaptcha.node.style.overflow = "visible";

                    if (activeChallenge.img) {
                        promptHTML = '<div id="t-desc"><img src="data:image/png;base64,' + activeChallenge.img + '"/></div>';
                    } else if (activeChallenge.str) {
                        promptHTML = '<div id="t-desc">' + tidyPrompt(activeChallenge.str) + '</div>';
                    } else {
                        promptHTML = '<div id="t-desc"></div>';
                    }

                    tileHTML = activeChallenge.items.map(function (bitmap, tileIndex) {
                        var activeClass = currentPick === tileIndex ? " active" : "";
                        return '<button type="button" class="tcaptcha-image' + activeClass + '" data-choice="' + tileIndex + '"><img src="data:image/png;base64,' + bitmap + '"/></button>';
                    }).join("");

                    gridNode.innerHTML = promptHTML + tileHTML;
                    gridNode.scrollTop = 0;
                    TCaptcha.taskNode = gridNode;
                    attachGridHandler(gridNode);
                    refreshCaptchaLayout(gridNode);
                    paintNavigator();
                }

                TCaptcha.setChallenge = function (challengeData) {
                    this.challengeIdNode.value = challengeData.challenge;
                    this.respNode.value = "";
                    picksByTask = [];
                    if (!challengeData.tasks) return this.setNoop();
                    this.tasks = challengeData.tasks;
                    this.setTaskId(0);
                    syncCaptchaResponse();
                    renderCaptchaGrid();
                };

                TCaptcha.setTaskId = function (taskIndex) {
                    this.taskId = Math.max(0, Math.min(taskIndex, this.tasks.length - 1));
                    paintNavigator();
                };

                TCaptcha.setTaskNodeContent = function (text) {
                    this.taskNode.innerHTML = '<div id="t-desc">' + text + '</div>';
                };

                TCaptcha.buildSliderNode = function () {
                    return Object.assign(document.createElement('span'), { id: 't-slider', hidden: true });
                };

                TCaptcha.buildNextNode = function () {
                    return Object.assign(document.createElement('button'), { id: 't-next', className: 'tcaptcha-stepper', type: 'button', textContent: 'Next' });
                };
            });
        },
        initNativeQRAutohide: function () {
            if ($SS.is4chanX()) return;
            $.waitFor("#quickReply", function (qr) {
                qr.addEventListener("focusin", function () {
                    qr.classList.add("focus");
                });
                qr.addEventListener("focusout", function (e) {
                    if (!qr.contains(e.relatedTarget))
                        qr.classList.remove("focus");
                });
                var nameInput = qr.querySelector("input[name=name]");
                if (nameInput) {
                    nameInput.addEventListener("input", function () {
                        if (this.value.length >= 100) {
                            this.style.setProperty("border-color", "red", "important");
                            var el = this;
                            setTimeout(function () { el.style.removeProperty("border-color"); }, 600);
                        }
                    });
                }
                var comInput = qr.querySelector("textarea[name=com]");
                if (comInput) {
                    comInput.setAttribute("maxlength", "2000");
                    comInput.addEventListener("input", function () {
                        if (this.value.length >= 2000) {
                            this.style.setProperty("border-color", "red", "important");
                            var el = this;
                            setTimeout(function () { el.style.removeProperty("border-color"); }, 600);
                        }
                    });
                }
                $SS.bindRememberComment(qr);
            });
        },
        getThreadTitle: function () {
            var el = document.querySelector(".post.op .subject");
            return (el && el.textContent.trim()) || document.title.replace(/\s*-\s*4chan$/, '') || "Untitled";
        },
        localJSON: {
            get: function (key) {
                try { return JSON.parse(localStorage.getItem(key)); } catch (e) { return null; }
            },
            set: function (key, data) {
                try { localStorage.setItem(key, JSON.stringify(data)); } catch (e) {}
            }
        },
        watchThread: function () {
            if (!$SS.conf["Watch Thread on Reply"] || !$SS.location.reply) return;
            try {
                var pathname = window.location.pathname.slice(1).split("/");
                var threadId = pathname[2];
                if (!threadId) return;
                var board = pathname[0];
                var key = threadId + "-" + board;
                var watchData = $SS.localJSON.get("4chan-watch") || {};
                watchData[key] = [$SS.getThreadTitle(), threadId, 0, null, 0];
                $SS.localJSON.set("4chan-watch", watchData);
            } catch (e) {}
        },
        markOwnPosts: function (root) {
            try {
                if ($SS.is4chanX()) return;
                var pathname = window.location.pathname.slice(1).split("/");
                if (pathname[1] !== "thread") return;
                var board = pathname[0], threadId = pathname[2];
                if (!board || !threadId) return;
                var data = $SS.localJSON.get("4chan-track-" + board + "-" + threadId);
                if (!data) return;
                Object.keys(data).forEach(function (key) {
                    var postId = key.replace(/^>>/, "");
                    var el = (root || document).getElementById("p" + postId);
                    if (el) { var c = el.closest(".postContainer"); if (c) c.classList.add("yourPost"); }
                });
            } catch (e) {}
        },
        markQuotingYou: function (root) {
            try {
                if ($SS.is4chanX()) return;
                (root || document).querySelectorAll(".ql-tracked").forEach(function (el) {
                    var pc = el.closest(".postContainer");
                    if (pc && !pc.classList.contains("yourPost")) {
                        pc.classList.add("hasQuoteYou");
                    }
                });
            } catch (e) {}
        },
        relativeDates: function (root) {
            if ($SS.is4chanX()) return;
            if (!$SS.conf["Relative Post Dates"]) return;
            var now = Date.now();
            (root || document).querySelectorAll(".dateTime").forEach(function (dt) {
                if (!dt._relativeDateSet && dt.dataset.utc) {
                    dt._relativeDateSet = true;
                    dt.title = dt.textContent;
                    var seconds = Math.floor(now / 1000) - parseInt(dt.dataset.utc);
                    var minutes = Math.floor(seconds / 60);
                    var hours = Math.floor(minutes / 60);
                    var days = Math.floor(hours / 24);
                    var weeks = Math.floor(days / 7);
                    var months = Math.floor(days / 30);
                    var text;
                    if (seconds < 60) text = "just now";
                    else if (minutes < 60) text = minutes + " min ago";
                    else if (hours < 24) text = hours + " hr ago";
                    else if (days < 7) text = days + " day" + (days > 1 ? "s" : "") + " ago";
                    else if (weeks < 5) text = weeks + " week" + (weeks > 1 ? "s" : "") + " ago";
                    else if (months < 12) text = months + " month" + (months > 1 ? "s" : "") + " ago";
                    else text = Math.floor(days / 365) + " year" + (Math.floor(days / 365) > 1 ? "s" : "") + " ago";
                    dt.textContent = text;
                }
            });
        },
        displayMascots: function () {
            try {
                var existing = document.getElementById("stylechan-mascots");
                if (existing) existing.remove();
                if (!$SS.conf["Enable Mascots"]) return;
                var mascots = [];
                try { mascots = JSON.parse($SS.conf["Mascots"] || "[]"); } catch (e) {}
                var available = mascots.filter(function (m) { return m.enabled !== false && m.url; });
                if (!available.length) return;
                var m = available.length > 1 ? available[Math.floor(Math.random() * available.length)] : available[0];
                var container = document.createElement("div");
                container.id = "stylechan-mascots";
                container.className = document.documentElement.classList.contains("left-sidebar") ? "mascots-left" : "mascots-right";
                var img = document.createElement("img");
                img.src = m.url;
                img.style.opacity = (m.opacity || 100) / 100;
                if (m.flip) img.style.transform = "scaleX(-1)";
                container.appendChild(img);
                document.body.appendChild(container);
            } catch (e) {}
        },
        insertToggleYou: function () {
            if ($SS.is4chanX()) return;
            var menu = document.getElementById("post-menu");
            if (!menu || menu.querySelector("[data-cmd='toggle-you']")) return;
            var hideItem = menu.querySelector("li[data-cmd='hide-r']") || menu.querySelector("li[data-id]");
            if (!hideItem) return;
            var postId = hideItem.getAttribute("data-id");
            var li = document.createElement("li");
            li.setAttribute("data-cmd", "toggle-you");
            li.setAttribute("data-id", postId);
            li.textContent = "Toggle You";
            hideItem.parentNode.insertBefore(li, hideItem.nextSibling);
        },
        toggleYou: function (li) {
            var postId = li.getAttribute("data-id");
            if (!postId) return;
            try {
                var pathname = window.location.pathname.slice(1).split("/");
                var board = pathname[0], threadId = pathname[2];
                if (!board || !threadId) return;
                var key = "4chan-track-" + board + "-" + threadId;
                var data = $SS.localJSON.get(key) || {};
                var ref = ">>" + postId;
                var el = document.getElementById("p" + postId);
                if (data[ref]) {
                    delete data[ref];
                    li.textContent = "Toggle You";
                    if (el) { var c = el.closest(".postContainer"); if (c) c.classList.remove("yourPost"); }
                } else {
                    data[ref] = 1;
                    li.textContent = "✓ You";
                    if (el) { var c = el.closest(".postContainer"); if (c) c.classList.add("yourPost"); }
                }
                if (Object.keys(data).length === 0) {
                    try { localStorage.removeItem(key); } catch (e) {}
                } else {
                    $SS.localJSON.set(key, data);
                }
            } catch (e) {}
        },
        QRDialogCreationHandler: function (e) {
            var qr = e.target;

            $("input[name=sub], input[name=name]", qr).each(function () {
                this.setAttribute("maxlength", "100");
                this.addEventListener("input", function () {
                    if (this.value.length >= 100) {
                        this.style.setProperty("border-color", "red", "important");
                        var el = this;
                        setTimeout(function () { el.style.removeProperty("border-color"); }, 600);
                    }
                });
            });
            if ($SS.conf["Watch Thread on Reply"] && $SS.location.reply) {
                $SS.handleFormNode(qr);
            }
            $SS.bindRememberComment(qr);

            var spoiler = qr.querySelector("#qrSpoiler input[type=checkbox]");
            if (spoiler) spoiler.title = "Spoiler image";

            $SS.QRhandled = true;
        },

        /* CONFIG */
        Config: {
            init: function () {
                var parseVal = function (key, val) {
                    if (/^(Selected|Hidden)+\s(Themes?)+$/.test(key)) {
                        if (key === "Selected Theme")
                            return parseInt(val);
                        else if (key === "NSFW Theme")
                            return parseInt(val);

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
                    if (!(/^::/.test(key))) {
                        $SS.exportOptions[key] = $SS.conf[key];
                    };
                };

                // Include saved 4chan settings in exports
                var chanKeys = ["4chan-settings", "4chan-watch", "4chan-watch-bl", "catalog-settings", "catalog-theme"];
                chanKeys.forEach(function (key) {
                    try { if (localStorage[key]) $SS.exportOptions["Saved4chan." + key] = JSON.parse(localStorage[key]); } catch (e) {}
                });

                if (!$SS.location.report) {
                    $SS.conf["Margin Left"] = $SS.conf["Left Margin"] !== 999 ? $SS.conf["Left Margin"] : $SS.conf["Custom Left Margin"];
                    $SS.conf["Margin Right"] = $SS.conf["Right Margin"] !== 999 ? $SS.conf["Right Margin"] : $SS.conf["Custom Right Margin"];
                };
                $SS.conf["Margin Post Message"] = $SS.conf["Post Message Margin"] === 1 ? "4px 16px" : ($SS.conf["Post Message Margin"] === 3 ? "20px 40px" : "");
                $SS.conf["Width Decoration"] = $SS.conf["Decoration Width"] !== 999 ? $SS.conf["Decoration Width"] : $SS.conf["Custom Decoration Width"];
            },
            get: function (name) {
                var key = NAMESPACE + name, val;
                try {
                    val = $SS.hasGM ? GM_getValue(key) : localStorage.getItem(key);
                    if (val != undefined) return JSON.parse(val);
                } catch (e) {}
                return defaultConfig[name];
            },
            set: function (name, val) {
                var key = NAMESPACE + name;
                if (typeof val !== "number") val = JSON.stringify(val);
                try {
                    if ($SS.hasGM) GM_setValue(key, val);
                    else localStorage.setItem(key, val);
                } catch (e) {}
            }
        },

        /* OPTIONS */
        options: {
            saveAndClose: false,
            init: function () {
                $(document).bind("keydown", $SS.options.keydown);

                const a = $("<span class='shortcut brackets-wrap'><a id='StyleChanLink' title='StyleChan Settings' class='fa fa-gears' href='javascript:;'>StyleChan</a></span>").bind("click", $SS.options.show);
                /* When no icons */
                const b = $("<span id='StyleChanLink'> [<a title='Stylechan Settings' href='javascript:;'>StyleChan</a>]&nbsp;</span>").bind("click", $SS.options.show);
                /* When 4chan XT */
                const c = $("<span id='shortcut-settings' class='shortcut brackets-wrap' data-index='840'><a class='settings-link' id='StyleChanLink' title='StyleChan Settings' href='javascript:;'><span class='icon--alt-text'>StyleChan</span>" + $SS.theme.icons.menuIcon + "</a></span>").bind("click", $SS.options.show);

                $.waitFor(".fourchan-x #shortcuts", function () {
                    $(".fourchan-x:not(.fourchan-xt)").exists() ? $(".shortcut.brackets-wrap:last-of-type").before(a) : $("#boardNavDesktop").append(b);
                    $(".fourchan-xt").exists() ? $(".shortcut.brackets-wrap:last-of-type").before(c) : $("#boardNavDesktop").append(b);
                });

                if (!$SS.is4chanX()) {
                    function makeNavLink() {
                        var link = document.createElement("a");
                        link.title = "StyleChan Settings";
                        link.href = "javascript:;";
                        link.addEventListener("click", $SS.options.show);
                        return link;
                    }
                    $.waitFor("#boardNavDesktop #navtopright", function (navtopright) {
                        var span = document.createElement("span");
                        span.appendChild(document.createTextNode(" ["));
                        var link = makeNavLink();
                        link.textContent = "StyleChan";
                        span.appendChild(link);
                        span.appendChild(document.createTextNode("]"));
                        navtopright.appendChild(span);
                    });
                    $.waitFor("#boardNavDesktop .pageJump", function (pageJump) {
                        var link = makeNavLink();
                        link.textContent = " StyleChan ";
                        pageJump.insertBefore(link, pageJump.lastElementChild);
                    });
                    $.waitFor("#boardNavMobile .pageJump", function (pageJump) {
                        var link = makeNavLink();
                        link.textContent = " StyleChan ";
                        pageJump.insertBefore(link, pageJump.lastElementChild);
                    });
                }
            },
            show: function () {
                if ($("#overlay").exists())
                    $SS.options.close();
                else {
                    var overlay = $("<div id=overlay>").bind("click", $SS.options.close),
                        tOptions = $("<div id='oneechan-options' class=dialog>").bind("click", function (e) {
                            return e.stopPropagation();
                        }),
                        optionsHTML = [
                            "<ul id=options-tabs>",
                            "<li class='tab-item'><label class='tab-label selected' for=main-select>Main</label></li>",
                            "<li class='tab-item'><label class='tab-label' for=misc-select>Misc</label></li>",
                            "<li class='tab-item'><label class='tab-label' for=themes-select>Themes</label></li>",
                            "</ul><div id=options-container><input type=radio class=tab-select name=tab-select id=main-select hidden checked><div id='main-section' class='options-section'>",
                            "<p class='buttons-container'>",
                            "<span class='btn-left'><a class='options-button' title='Export your settings as JSON.' name=Export>Export</a><a class='options-button' id='import-settings'><input type=file class='import-input' riced=true accept='application/json'>Import</a><a class='options-button' title='Reset StyleChan settings.' name=resetSettings>Reset</a></span>",
                            "<span class='btn-center' id=oneechan-version><span>StyleChan</span> v" + VERSION + "<span class=link-delim> | </span><a href='https://github.com/3nly/StyleChan/releases/latest' id=changelog-link target='_blank' title='Read the changelog.'>Changelog</a><span class=link-delim> | </span><a href='https://github.com/3nly/StyleChan/issues' id=issues-link target='_blank' title='Report an issue.'>Issues</a></span>",
                            "<span class='btn-right'><a class='options-button' name=save>Save</a><a class='options-button' name=cancel>Cancel</a></span></p>"
                        ];
                    var key, val, des, id, section = "";
                    var is4chanX = $SS.is4chanX();

                    for (key in defaultConfig) {
                        if (/^(Selected|Hidden)+\s(Themes?)+$/.test(key))
                            continue;

                        if (key === "Themes" || key === "Misc") section = "";
                        if (defaultConfig[key][0] === "header") {
                            section = key === ":: 4chan X" ? "4chanx" : key === ":: 4chan" ? "native" : "";
                            if ((section === "4chanx" && !is4chanX) || (section === "native" && is4chanX)) continue;
                            optionsHTML.push("<label class='option header'><span class='option-title'>" + key + "</span></label>");
                            if (key === ":: 4chan") {
                                optionsHTML.push("<p class='option-actions'><a class='options-button' name=save4chanSettings>Save 4chan settings</a><span class=link-delim> | </span><a class='options-button' name=restore4chanSettings>Restore</a></p>");
                            }
                            continue;
                        }
                        /* Hide menu elements depending on script */
                        if (section === "4chanx" && !is4chanX) continue;
                        if (section === "native" && is4chanX) continue;
                        if (!is4chanX && /^(Style 4chanX Notifications|Expanding Form Inputs|Fit Expanded Images)$/.test(key)) continue;

                        val = $SS.conf[key];
                        des = defaultConfig[key][1];

                        if ((defaultConfig[key][4] === true) && (key === "Custom Left Margin")) {
                            var pVal = $SS.conf[defaultConfig[key][2]];
                            id = defaultConfig[key][2].replace(/\s/g, "_") + defaultConfig[key][3];
                            optionsHTML.push("<span class='option suboption " + id + "' title=\"" + des + "\"" +
                                (pVal != defaultConfig[key][3] ? "hidden" : "") + "><span class='option-title'>" + key +
                                "</span><input name='Custom Left Margin' type=text value=" + $SS.conf["Custom Left Margin"] + "px></span>");
                        } else if ((defaultConfig[key][4] === true) && (key === "Custom Right Margin")) {
                            var pVal = $SS.conf[defaultConfig[key][2]];
                            id = defaultConfig[key][2].replace(/\s/g, "_") + defaultConfig[key][3];
                            optionsHTML.push("<span class='option suboption " + id + "' title=\"" + des + "\"" +
                                (pVal != defaultConfig[key][3] ? "hidden" : "") + "><span class='option-title'>" + key +
                                "</span><input name='Custom Right Margin' type=text value=" + $SS.conf["Custom Right Margin"] + "px></span>");
                        } else if ((defaultConfig[key][4] === true) && (key === "Custom Decoration Width")) {
                            var pVal = $SS.conf[defaultConfig[key][2]];
                            id = defaultConfig[key][2].replace(/\s/g, "_") + defaultConfig[key][3];
                            optionsHTML.push("<span class='option suboption " + id + "' title=\"" + des + "\"" +
                                (pVal != defaultConfig[key][3] ? "hidden" : "") + "><span class='option-title'>" + key +
                                "</span><input name='Custom Decoration Width' type=text value=" + $SS.conf["Custom Decoration Width"] + "px></span>");
                        } else if ((defaultConfig[key][4] === true) && (key === "Dark Theme" || key === "Light Theme")) {
                            var pVal = $SS.conf[defaultConfig[key][2]];
                            id = defaultConfig[key][2].replace(/\s/g, "_") + defaultConfig[key][3];
                            var html = "<label class='option suboption " + id + "' title=\"" + des + "\"" +
                                (pVal != defaultConfig[key][3] ? "hidden" : "") + "><span class='option-title'>" + key + "</span>" +
                                "<select name='" + key + "'>";
                            for (var i = 0, MAX = $SS.conf["Themes"].length; i < MAX; ++i) {
                                html += "<option value='" + i + "'" + (i == val ? " selected" : "") + ">" +
                                    $SS.conf["Themes"][i].name + "</option>";
                            }
                            html += "</select></label>";
                            optionsHTML.push(html);
                        } else if ((defaultConfig[key][4] === true) && (key === "Mascots")) {
                            var pVal = $SS.conf["Enable Mascots"];
                            id = "Enable_Mascots" + true;
                            var mascots = [];
                            try { mascots = JSON.parse($SS.conf["Mascots"] || "[]"); } catch (e) {}
                            var rows = "<div class='option suboption mascot-container " + id + "'" + (!pVal ? "hidden" : "") + ">";
                            mascots.forEach(function (m, i) {
                                var url = (m.url || "").replace(/"/g, "&quot;");
                                rows += "<div class='mascot-row'><input type=checkbox class='mascot-enabled' title='Enable this mascot'" + (m.enabled !== false ? " checked" : "") + "><input type=text class='mascot-url' value=\"" + url + "\" placeholder='URL or base64 image'><input type=range class='mascot-opacity' title='Opacity' min=0 max=100 value='" + (m.opacity || 100) + "'><span class='mascot-opacity-val'>" + (m.opacity || 100) + "%</span><input type=checkbox class='mascot-flip' title='Flip horizontally'" + (m.flip ? " checked" : "") + "><button class='mascot-remove' type=button title='Remove'>&times;</button></div>";
                            });
                            rows += "<a class='options-button mascot-add'>+ Add Mascot</a>";
                            rows += "</div>";
                            optionsHTML.push(rows);
                        } else if (defaultConfig[key][4] === true) // sub-option
                        {
                            var pVal = $SS.conf[defaultConfig[key][2]];
                            id = defaultConfig[key][2].replace(/\s/g, "_") + defaultConfig[key][3];
                            optionsHTML.push("<label class='option suboption " + id + "' title=\"" + des + "\"" +
                                (pVal != defaultConfig[key][3] ? "hidden" : "") + "><span class='option-title'>" + key +
                                "</span><input" + (val ? " checked" : "") + " name='" + key + "' type=checkbox></label>");
                        } else if (Array.isArray(defaultConfig[key][2])) // select
                        {
                            var opts = defaultConfig[key][2],
                                cFonts = [],
                                html = ["<label class=option title=\"" + des + "\"><span class='option-title'>" + key + "</span>",
                                    "<select name='" + key + "'" + (defaultConfig[key][3] === true ? " has-suboption" : "") + ">"];

                            for (var i = 0, MAX = opts.length; i < MAX; ++i) {
                                var name, value;

                                if (typeof opts[i] === "object") {
                                    name = opts[i].name;
                                    value = opts[i].value;
                                } else
                                    name = value = opts[i];

                                if (key === "Font Family") cFonts.push(value);
                                html.push("<option" + (key === "Font Family" ? " style=\"font-family:" + $SS.formatFont(value) + "!important\"" : "") +
                                    " value='" + value + "'" + (value == val ? " selected" : "") + ">" + name + "</option>");
                            }

                            if (key === "Font Family") {
                                var osFonts = $SS.systemFonts[$SS.getOS()] || [];
                                osFonts.forEach(function (font) {
                                    if (cFonts.indexOf(font) === -1) {
                                        cFonts.push(font);
                                        html.push("<option style=\"font-family:" + $SS.formatFont(font) + "!important\" value='" + font + "'" + (font == val ? " selected" : "") + ">" + font + "</option>");
                                    }
                                });
                            }
                            if (key === "Font Family" && cFonts.indexOf($SS.conf["Font Family"]) == -1)
                                html.push("<option style=\"font-family:" + $SS.formatFont($SS.conf["Font Family"]) + "!important\" value='" + $SS.conf["Font Family"] + "' selected>" + $SS.conf["Font Family"] + "</option>");
                            html.push("</select></label>");
                            optionsHTML.push(html.join(""));
                        } else if (key === "Custom Font") {
                            optionsHTML.push("<label class='option visible' title=\"" + des + "\"><span class='option-title'>Custom Font</span>" +
                                "<input type=text name='Custom Font' value=\"" + ($SS.conf["Custom Font"] || "") + "\" placeholder='system font name'></label>");
                        } else if (key === "Font Size") {
                            optionsHTML.push("<label class='option visible' title=\"" + des + "\"><span class='option-title'>" + key + "</span>" +
                                "<input type=text name='Font Size' value=" + $SS.conf["Font Size"] + "px></label>");
                        } else if (key === "UI Font Size") {
                            optionsHTML.push("<label class='option visible' title=\"" + des + "\"><span class='option-title'>" + key + "</span>" +
                                "<input type=text name='UI Font Size' value=" + $SS.conf["UI Font Size"] + "px></label>");
                        } else if (key === "Backlink Font Size") {
                            optionsHTML.push("<label class='option visible' title=\"" + des + "\"><span class='option-title'>" + key + "</span>" +
                                "<input type=text name='Backlink Font Size' value=" + $SS.conf["Backlink Font Size"] + "px></label>");
                        } else if (key === "Misc") {
                            optionsHTML.push("</div><input type=radio class=tab-select name=tab-select id=misc-select hidden><div id='misc-section' class='options-section'>" +
                                "<p class='buttons-container'><span class='btn-right'><a class='options-button' name=save>Save</a><a class='options-button' name=cancel>Cancel</a></span></p>");
                        } else if (key === "Themes") {
                            optionsHTML.push("</div><input type=radio class=tab-select name=tab-select class=tab-select  id=themes-select hidden><div id='themes-section' class='options-section'>");
                        } else // checkbox
                            optionsHTML.push("<label class=option title=\"" + des + "\"><span class='option-title'>" + key + "</span><input" + (val ? " checked" : "") +
                                " name='" + key + "' " + (defaultConfig[key][3] === true ? " has-suboption" : "") + " type=checkbox></label>");
                    }

                    optionsHTML.push("</div></div>");
                    tOptions.html(optionsHTML.join(""));
                    overlay.append(tOptions);

                    $(".import-input", tOptions).bind("change", function () {
                        var file = this.files[0],
                            reader = new FileReader(),
                            key, imported, val;
                        if (this.files[0].name.match(/\.json$/) == null) {
                            alert('Only JSON files are accepted!');
                            return;
                        } else if (!confirm('Your current settings will be entirely overwritten, are you sure?')) {
                            return;
                        }
                        reader.onload = (function () {
                            return function (e) {
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

                            };
                        })(file);

                        reader.readAsText(file);
                    });
                    $("a[name=Export]", tOptions).bind("click", function () {
                        if ($("a[download]", tOptions).exists())
                            return;
                        var exportalert = $("<a class='options-button'download='StyleChan v" + VERSION + " Settings.json' href='data:application/json," + encodeURIComponent(JSON.stringify($SS.exportOptions, null, 2)) + "'>Save me!").bind("click", $SS.options.close);
                        return $(this).replace(exportalert);
                    });
                    // Reset settings
                    $("a[name=resetSettings]", tOptions).bind("click", function () {
                        var confirmReset = confirm('Your current StyleChan settings will be wiped, are you sure?');
                        if (confirmReset) {
                            try {
                                if ($SS.hasGM) {
                                    var keys = GM_listValues();
                                    for (var i = 0, key = null; key = keys[i]; i++) {
                                        GM_deleteValue(key);
                                    }
                                }
                            } catch (e) {}
                            try {
                                Object.keys(localStorage).forEach(function (key) {
                                    if (/^(?:StyleChan)/.test(key)) {
                                        localStorage.removeItem(key);
                                    }
                                });
                            } catch (e) {}
                            alert('Your StyleChan settings have been reset. Reloading.');
                            return window.location.reload();
                        } else return;
                    });
                    // options window
                    $(".tab-label", tOptions).bind("click", function (e) {
                        var $this = $(this);
                        if ($this.hasClass("selected")) return;

                        $(".tab-label.selected").removeClass("selected");
                        $this.addClass("selected");
                    });
                    $("[has-suboption]", tOptions).bind("change", function () {
                        var id = this.name.replace(/\s/g, "_") + $(this).val(),
                            sub = $("." + id);

                        if (sub.exists())
                            sub.each(function () {
                                this.removeAttribute("hidden");
                            });
                        else
                            $("[class*='" + this.name.replace(/\s/g, "_") + "']").each(function () {
                                this.setAttribute("hidden", "");
                            });
                    });
                    $("input[name='System Theming']", tOptions).bind("change", function () {
                        var id = this.name.replace(/\s/g, "_") + this.checked,
                            sub = $("." + id);
                        if (sub.exists())
                            sub.each(function () { this.removeAttribute("hidden"); });
                        else
                            $("[class*='" + this.name.replace(/\s/g, "_") + "']").each(function () {
                                this.setAttribute("hidden", "");
                            });
                    });
                    $("input[name='Enable Mascots']", tOptions).bind("change", function () {
                        var id = this.name.replace(/\s/g, "_") + this.checked,
                            sub = $("." + id);
                        if (sub.exists())
                            sub.each(function () { this.removeAttribute("hidden"); });
                        else
                            $("[class*='" + this.name.replace(/\s/g, "_") + "']").each(function () {
                                this.setAttribute("hidden", "");
                            });
                    });
                    // Mascot handlers
                    var optsNode = tOptions.elems[0];
                    if (optsNode) {
                        optsNode.addEventListener("click", function (e) {
                            var add = e.target.closest(".mascot-add");
                            if (add) {
                                var container = add.closest(".mascot-container");
                                var row = document.createElement("div");
                                row.className = "mascot-row";
                                row.innerHTML = "<input type=checkbox class='mascot-enabled' title='Enable this mascot' checked><input type=text class='mascot-url' value='' placeholder='URL or base64 image'><input type=range class='mascot-opacity' title='Opacity' min=0 max=100 value=100><span class='mascot-opacity-val'>100%</span><input type=checkbox class='mascot-flip' title='Flip horizontally'><button class='mascot-remove' type=button title='Remove'>&times;</button>";
                                container.insertBefore(row, add);
                                return;
                            }
                            var rem = e.target.closest(".mascot-remove");
                            if (rem) {
                                rem.closest(".mascot-row").remove();
                            }
                        });
                        optsNode.addEventListener("input", function (e) {
                            var range = e.target.closest(".mascot-opacity");
                            if (range) {
                                var display = range.parentNode.querySelector(".mascot-opacity-val");
                                if (display) display.textContent = range.value + "%";
                            }
                        });
                    }
                    $("a[name=save]", tOptions).bind("click", function () {
                        $SS.options.saveAndClose = true;
                        $SS.options.save();
                        $SS.options.saveAndClose = false;
                    });
                    $("a[name=cancel]", tOptions).bind("click", $SS.options.close);

                    // main tab
                    $("input[name='Font Size']", tOptions).bind("keydown", function (e) {
                        var val = parseInt($(this).val());

                        if (e.key === "ArrowUp" && !isNaN(val))
                            $(this).val(++val + "px");
                        else if (e.key === "ArrowDown" && !isNaN(val))
                            $(this).val(--val + "px");
                    });

                    // themes tab
                    $SS.options.createThemesTab(tOptions);

                    // 4chan button handlers
                    (function () {
                        var chanKeys = ["4chan-settings", "4chan-watch", "4chan-watch-bl", "catalog-settings", "catalog-theme"];
                        $("a[name=save4chanSettings]", tOptions).bind("click", function () {
                            var count = 0;
                            chanKeys.forEach(function (key) {
                                var val = localStorage[key];
                                if (val) {
                                    $SS.Config.set("Saved4chanSettings." + key, val);
                                    count++;
                                }
                            });
                            if (count > 0)
                                $SS.notify({ content: '4chan settings saved.', type: 'success', lifetime: 3 });
                            else
                                $SS.notify({ content: 'No 4chan settings found.', type: 'info', lifetime: 3 });
                        });
                        $("a[name=restore4chanSettings]", tOptions).bind("click", function () {
                            var count = 0;
                            chanKeys.forEach(function (key) {
                                var saved = $SS.Config.get("Saved4chanSettings." + key);
                                if (saved) {
                                    localStorage[key] = saved;
                                    count++;
                                }
                            });
                            if (count > 0) {
                                $SS.notify({ content: '4chan settings restored. Reloading...', type: 'success', lifetime: 2 });
                                setTimeout(function () { location.reload(); }, 2000);
                            } else
                                $SS.notify({ content: 'No saved 4chan settings to restore.', type: 'info', lifetime: 3 });
                        });
                    })();

                    return $(getDocBody()).append(overlay);
                }
            },
            createThemesTab: function (tOptions) {
                var themes = $("#themes-section", tOptions).html(""),
                    p = $("<p class='buttons-container'>"),
                    left = $("<span class='btn-left'>");

                left.append($("<a class='options-button' name=addTheme title='Create a new theme.'>Create", tOptions).bind("click", $SS.options.showTheme));
                left.append($("<a class='options-button' href='https://github.com/3nly/StyleChan/wiki/Custom-Themes#custom-themes' target='_blank' title='Browse more themes on GitHub.'>More Themes</a>"));
                left.append($("<div id='import-link' title='Import a new theme file.'>").append($("<input type=file class='import-input' riced=true accept='application/json'>")
                    .bind("change", function () {
                        var file = this.files[0],
                            reader = new FileReader(),
                            theme, div, index;

                        reader.onload = (function () {
                            return function (e) {
                                try {
                                    theme = JSON.parse(e.target.result);
                                } catch (err) {
                                    alert("Invalid theme file!");
                                    return;
                                }

                                if (!theme.textColor || !theme.mainColor) {
                                    alert("Invalid theme file!");
                                    return;
                                }

                                index = $SS.conf["Themes"].push(theme);
                                theme = new $SS.Theme(--index);
                                div = theme.preview();
                                $("#overlay #themes-section").append(div);
                                div.fire("click").scrollIntoView(true);
                            };
                        })(file);

                        reader.readAsText(file);
                    })).append($("<span class='options-button'>Import")));
                left.append($("<a class='options-button' name=restoreThemes title='Restore hidden default themes'>Restore", tOptions)
                    .bind("click", function () {
                        $SS.conf["Hidden Themes"] = [];
                        $("#themes-section>div[hidden]").show();
                    })
                );

                p.append(left);
                p.append($("<span class='btn-right'><a class='options-button' name=save>Save</a><a class='options-button' name=cancel>Cancel</a></span>"));
                $("a[name=save]", p).bind("click", function () {
                    $SS.options.saveAndClose = true;
                    $SS.options.save();
                    $SS.options.saveAndClose = false;
                });
                $("a[name=cancel]", p).bind("click", $SS.options.close);

                if ($SS.conf["Hidden Themes"].length === 0)
                    $("a[name=restoreThemes]", p).hide();

                themes.append(p);

                for (var i = 0, MAX = $SS.conf["Themes"].length, tTheme; i < MAX; ++i) {
                    tTheme = new $SS.Theme(i);
                    themes.append(tTheme.preview());
                }
            },
            close: function () {
                return $("#overlay").remove();
            },
            keydown: function (e) {
                if (e.ctrlKey && e.key === "F1") {
                    e.preventDefault();
                    e.stopPropagation();
                    $SS.options.show();
                }
            },
            save: function () {
                var themes = [],
                    nsfwTheme,
                    selectedTheme;

                // Save main
                $("#oneechan-options input[name]:not(.tab-select), #oneechan-options select").each(function () {
                    var $this = $(this),
                        name = $this.attr("name"),
                        val = $this.val();

                    if (/^(Font Size|Custom (Right|Left) Margin|Custom Decoration Width|UI Font Size|Backlink Font Size|Dark Theme|Light Theme)$/.test(name)){
                        val = parseInt(val);
                    }

                    $SS.Config.set(name, val);
                });

                // Save Mascots
                var mascots = [];
                document.querySelectorAll("#oneechan-options .mascot-row").forEach(function (row) {
                    var input = row.querySelector(".mascot-url"),
                        range = row.querySelector(".mascot-opacity"),
                        enabled = row.querySelector(".mascot-enabled"),
                        flip = row.querySelector(".mascot-flip");
                    if (input && input.value.trim()) {
                        mascots.push({
                            url: input.value.trim(),
                            opacity: parseInt(range ? range.value : 100),
                            enabled: enabled ? enabled.checked : true,
                            flip: flip ? flip.checked : false
                        });
                    }
                });
                $SS.Config.set("Mascots", JSON.stringify(mascots));

                // Save Themes
                $("#oneechan-options #themes-section>div").each(function (index) {
                    var oldIndex = parseInt(this.id.substr(5));
                    if ($SS.conf["Themes"][oldIndex] && !$SS.conf["Themes"][oldIndex].default)
                        themes.push($SS.conf["Themes"][oldIndex]);
                });

                selectedTheme = (selectedTheme = $("#oneechan-options #themes-section>div.selected")).exists() ?
                    parseInt(selectedTheme.attr("id").substr(5)) : 0;
                // Ensure selectedTheme is valid
                if (selectedTheme >= $SS.conf["Themes"].length || !$SS.conf["Themes"][selectedTheme]) {
                    selectedTheme = 0;
                }

                nsfwTheme = (nsfwTheme = $("#oneechan-options #themes-section>div.nsfw")).exists() ?
                    parseInt(nsfwTheme.attr("id").substr(5)) : 0;
                // Ensure nsfwTheme is valid
                if (nsfwTheme >= $SS.conf["Themes"].length || !$SS.conf["Themes"][nsfwTheme]) {
                    nsfwTheme = 0;
                }

                $SS.Config.set("Themes", themes);
                $SS.Config.set("Selected Theme", selectedTheme);
                $SS.Config.set("NSFW Theme", nsfwTheme);
                $SS.Config.set("Hidden Themes", $SS.conf["Hidden Themes"]);

                if ($SS.options.saveAndClose)
                    $SS.options.close();

                return $SS.init(true);
            },
            showTheme: function (tIndex) {
                var div, overlay, previewThemeIndex = -1,
                    bEdit = typeof tIndex === "number",
                    tEdit = bEdit ? $SS.conf["Themes"][tIndex] : null,
                    themeIndex = tIndex,
                    originalSelectedTheme = $SS.conf["Selected Theme"]; // Store originally selected theme

                if (bEdit) {
                    var RPA, themeR, themePY, themePX, themeA;

                    if (tEdit.bgImg && tEdit.bgRPA) {
                        RPA = tEdit.bgRPA.split(" ");
                        themeR = RPA[0];
                        themePY = RPA[1];
                        themePX = RPA[2];
                        themeA = RPA[3];
                    }

                }

                div = $("<div id='add-theme' class='dialog'>");

                var switchBtn = "<span class='side-switch' title='Switch side'>&#8646;</span>";

                var previewPost = switchBtn + "<div class='theme-preview-post' data-color='mainColor'>" +
                    "<div class='preview-border' data-color='mainColor'>" +
                    "<span class='preview-subject' data-color='titleColor'>Post Subject</span><br>" +
                    "<span class='preview-name' data-color='nameColor'>Anonymous</span>" +
                    "<span class='preview-trip' data-color='tripColor'> !tripcode</span>" +
                    "<span class='preview-date' data-color='textColor'> 10/01/03(Mon)12:00:00</span>" +
                    "<span class='preview-postnum'> <a href='#' data-color='linkColor'>No.12345678</a></span>" +
                    "<br><span class='preview-backlink' data-color='blinkColor'><a href='#'>&gt;&gt;12345678</a></span>" +
                    "<br><span class='preview-quote' data-color='quoteColor'>&gt;be me, clickable</span>" +
                    "<br><span data-color='textColor'>I'm a dummy post and example text.</span>" +
                    "</div></div>";

                var innerHTML = previewPost + "<div class='theme-body'><div class='theme-fields'><label>" +
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

                for (var i = 0, MAX = themeInputs.length; i < MAX; ++i) {
                    var hex = (bEdit ? tEdit[themeInputs[i].name] : "000000") || "000000";
                    var rgb = $SS.RGBFromHex(hex);
                    var textColor = $SS.isLight(rgb) ? "#000" : "#fff";
                    innerHTML += "<label><span class='option-title'>" + themeInputs[i].dName + ":</span>" +
                        "<span class=color-picker-wrap>" +
                        "<input type=text name=" + themeInputs[i].name + " value=\"" + hex + "\" autocomplete=off " +
                            "class=color-hex style='background:#" + hex + " !important;color:" + textColor + " !important'>" +
                        "<input type=color value=\"#" + hex + "\" class=color-picker-btn>" +
                        "</span></label>";
                }

                innerHTML += "</div><label id=customCSS><span class='option-title'>Custom CSS:</span><textarea name=customCSS class='field'></textarea>" +
                    "</label></div><div class='theme-buttons'>" +
                    "<a class='options-button' name=export>Export</a>" +
                    "<a class='options-button' name=" + (bEdit ? "edit" : "add") + ">Save</a><a class='options-button' name=cancel>Cancel</a></div>";

                div.html(innerHTML);
                if (bEdit && tEdit.customCSS)
                    div.elems[0].querySelector("textarea[name=customCSS]").value = tEdit.customCSS;

                $(".side-switch", div).bind("click", function () {
                    div.elems[0].classList.toggle("left");
                });

                // Click preview elements to focus color inputs
                $("[data-color]", div).bind("click", function (e) {
                    e.stopPropagation();
                    var name = this.getAttribute("data-color"),
                        input = div.elems[0].querySelector("input[name='" + name + "']");
                    if (input) {
                        input.focus();
                        input.select();
                        $("label.picked", div).removeClass("picked");
                        var label = input.closest("label");
                        if (label) label.classList.add("picked");
                    }
                });

                // Live preview function
                var updateLivePreview = function () {
                    var overlay = $("#overlay2"),
                        previewTheme = {},
                        makeRPA = function () {
                            var RPA = [];
                            RPA.push($("select[name=bgR]", overlay).val() || "repeat");
                            RPA.push($("select[name=bgPY]", overlay).val() || "top");
                            RPA.push($("select[name=bgPX]", overlay).val() || "left");
                            RPA.push($("select[name=bgA]", overlay).val() || "scroll");
                            return RPA.join(" ");
                        };

                    // Collect all form values, but only include non-empty color values
                    $("input,textarea,select", overlay).each(function () {
                        var val = this.value;
                        if (this.name) {
                            // For color inputs, strip "#" prefix and include if non-white
                            if (this.type === "color") {
                                var hex = val.replace("#", "");
                                if (hex !== "" && hex !== "ffffff" && hex.length === 6) {
                                    previewTheme[this.name] = hex;
                                }
                            } else if (val !== "") {
                                // For non-color inputs, include if not empty
                                if (this.name === "bgImg") {
                                    var b64 = $("input[name=customIMGB64]", overlay);
                                    val = b64.exists() ? decodeURIComponent(b64.val()) : val;
                                }
                                previewTheme[this.name] = val;
                            }
                        }
                    });

                    // Set defaults for missing values
                    if (bEdit && tEdit) {
                        // When editing, use the original theme as base
                        for (var key in tEdit) {
                            if (previewTheme[key] === undefined && typeof tEdit[key] !== "object" && key !== "default") {
                                previewTheme[key] = tEdit[key];
                            }
                        }
                    } else {
                        // For new themes, use the currently selected theme as base (not first theme)
                        var baseTheme = $SS.conf["Themes"][originalSelectedTheme] || $SS.conf["Themes"][0];
                        for (var key in baseTheme) {
                            if (previewTheme[key] === undefined && typeof baseTheme[key] !== "object" && key !== "default") {
                                previewTheme[key] = baseTheme[key];
                            }
                        }
                    }

                    if (previewTheme.bgImg)
                        previewTheme.bgRPA = makeRPA();

                    // Create temporary theme in themes array
                    // Mark it as preview so we can identify and remove it later
                    previewTheme._isPreview = true;
                    if (previewThemeIndex === -1) {
                        previewThemeIndex = $SS.conf["Themes"].length;
                        $SS.conf["Themes"].push(previewTheme);
                    } else {
                        $SS.conf["Themes"][previewThemeIndex] = previewTheme;
                    }

                    // Temporarily switch to preview theme
                    $SS.conf["Selected Theme"] = previewThemeIndex;
                    $SS.theme = new $SS.Theme(previewThemeIndex);
                    $SS.setThemeVariables();
                };

                // Sync color swatch to hex text input and trigger preview
                $("input[type='color']", div).bind("input change", function () {
                    var textInput = this.parentNode.querySelector(".color-hex");
                    if (textInput) {
                        var hex = this.value.replace("#", "");
                        textInput.value = hex;
                        textInput.style.setProperty("background-color", "#" + hex, "important");
                        var rgb = $SS.RGBFromHex(hex);
                        textInput.style.setProperty("color", $SS.isLight(rgb) ? "#000" : "#fff", "important");
                    }
                    updateLivePreview();
                });

                // Live preview on text input / textarea / select changes
                $("input[type=text],textarea,select", div).bind("input change", function () {
                    if (this.classList.contains("color-hex")) {
                        var hex = this.value.replace("#", "");
                        if (/^[0-9a-f]{6}$/i.test(hex)) {
                            this.style.setProperty("background-color", "#" + hex, "important");
                            var rgb = $SS.RGBFromHex(hex);
                            this.style.setProperty("color", $SS.isLight(rgb) ? "#000" : "#fff", "important");
                        }
                    }
                    updateLivePreview();
                });

                overlay = $("<div id=overlay2>").append(div);

                $("a[name=export]", div).bind("click", function () {
                    var theme = $SS.options.addTheme(themeIndex, true);
                    if ($("a[download]", div).exists())
                        return;
                    var exportalert = $("<a class='options-button'download='" + theme.name + ".json' href='data:application/json," + encodeURIComponent(JSON.stringify(theme)) + "'>Save me!");
                    return $(this).replace(exportalert);
                });

                if (bEdit) {
                    $("a[name=edit]", div).bind("click", function () {
                        $SS.options.addTheme(themeIndex);
                        $("#overlay").removeClass("previewing");
                    });
                    $("#overlay").addClass("previewing");
                } else {
                    $("a[name=add]", div).bind("click", function () {
                        $SS.options.addTheme();
                    });
                    $("#overlay").addClass("previewing");
                }

                $("a[name=cancel]", div).bind("click", function () {
                    // Remove preview theme if it exists
                    if (previewThemeIndex !== -1) {
                        $SS.conf["Themes"].splice(previewThemeIndex, 1);
                    }
                    // Always restore to the originally selected theme (not the theme being edited)
                    $SS.conf["Selected Theme"] = originalSelectedTheme;
                    $SS.theme = new $SS.Theme(originalSelectedTheme);
                    $SS.setThemeVariables();
                    $SS.insertCSS();
                    $("#overlay").removeClass("previewing");
                    $("#overlay2").remove();
                });

                if (bEdit)
                    $("input,textarea,select", div).bind("change", tEdit.mHandler = function () {
                        tEdit.modified = true;
                        $("input,textarea,select", $("#addTheme")).unbind("change", tEdit.mHandler);
                    });

                return $(document.body).append(overlay);
            },
            addTheme: function (tIndex, exp) {
                var overlay = $("#overlay2");

                // Remove preview theme if it exists (from live preview)
                var previewIndex = -1;
                for (var i = $SS.conf["Themes"].length - 1; i >= 0; i--) {
                    if ($SS.conf["Themes"][i] && $SS.conf["Themes"][i]._isPreview) {
                        previewIndex = i;
                        break;
                    }
                }
                if (previewIndex !== -1) {
                    $SS.conf["Themes"].splice(previewIndex, 1);
                    // Adjust tIndex if it was after the preview theme
                    if (typeof tIndex === "number" && tIndex > previewIndex) {
                        tIndex--;
                    }
                }

                var tTheme = {},
                    makeRPA = function () {
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

                $("input[type=text],textarea", overlay).each(function () {
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
                            val += " [Modded]";
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
                    if (div.exists()) {
                        div.replace(tTheme.preview());
                    } else {
                        div = tTheme.preview();
                        $("#overlay #themes-section").append(div);
                    }
                } else {
                    tTheme.author = "You";
                    tIndex = $SS.conf["Themes"].push(tTheme);
                    tTheme = new $SS.Theme(--tIndex);
                    div = tTheme.preview();

                    $("#overlay #themes-section").append(div);
                }

                if (div && div.exists()) {
                    div.fire("click").scrollIntoView(true);
                }

                $("#overlay").removeClass("previewing");
                return overlay.remove();
            },
            deleteTheme: function (tIndex) {
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
                bgImg: false,
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
                bgImg: false,
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
                bgImg: false,
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
                customCSS: "body{\nbackground: rgba(19,19,19,1);\n}\n.boardBanner .boardTitle {\ntext-shadow: 0 0 3px #a0a0a0 !important;\nletter-spacing: 0px !important;\n}\n#delform {\n padding: 0 2px !important;\n background: rgba(19,19,19,1);\n}"
            }, {
                name: "Cold Snap",
                authorName: "Kori",
                authorTrip: "!STRaW/KORI",
                "default": true,
                bgImg: false,
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
                name: "Blue Phallus",
                authorName: "iluvOP",
                authorTrip: "!Tripfags can die.",
                "default": true,
                bgImg: false,
                replyOp: "1.0",
                navOp: "0.9",
                mainColor: "242436",
                brderColor: "242436",
                inputColor: "242436",
                inputbColor: "262638",
                headerBGColor: "242436",
                headerColor: "da637e",
                boardColor: "7787a3",
                bgColor: "20202f",
                textColor: "a7a7ad",
                blinkColor: "4b5e57",
                headerLColor: "4c626d",
                headerLHColor: "da637e",
                linkColor: "7787a3",
                linkHColor: "da637e",
                qlColor: "4b5e57",
                nameColor: "da637e",
                tripColor: "63918b",
                titleColor: "da637e",
                quoteColor: "b1b792",
                unreadColor: "64657b",
                postHLColor: "da637e",
                quotesYouHLColor: "da637e",
                ownPostHLColor: "da637e",
                threadHLColor: "da637e",
                replybgHLColor: "20202f",
                replyslctColor: "da637e",
                customCSS: ".reply { box-shadow: -2px 2px 2px rgba(0,0,0,.10); }"
            }, {
                name: "Midnight Caek",
                authorName: "saxamaphone",
                authorTrip: "!3.saxN0DHY",
                "default": true,
                bgImg: false,
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
                postHLColor: "7c2d2d",
                quotesYouHLColor: "7c2d2d",
                ownPostHLColor: "7c2d2d",
                threadHLColor: "aaaaaa",
                replybgHLColor: "0e0e0e",
                replyslctColor: "7c2d2d"
            }],

            init: function () {
                $SS.conf["Themes"] = Array.isArray($SS.conf["Themes"]) ?
                    this.defaults.concat($SS.conf["Themes"]) : this.defaults.slice(0);

                var i;
                if ($SS.conf["System Theming"]) {
                    i = window.matchMedia('(prefers-color-scheme: dark)').matches ?
                        parseInt($SS.conf["Dark Theme"], 10) : parseInt($SS.conf["Light Theme"], 10);
                } else {
                    i = $SS.location.nsfw ?
                        $SS.conf["NSFW Theme"] : $SS.conf["Selected Theme"];
                }

                var tIndex = $SS.conf["Themes"][i] ? i : 0;
                $SS.theme = new $SS.Theme(tIndex); // Set the active theme.
                $SS.setThemeVariables();

                // Listen for system color scheme changes
                if (!this._mqListener) {
                    this._mqListener = function () {
                        if ($SS.conf["System Theming"]) {
                            $SS.init(true);
                        }
                    };
                    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', this._mqListener);
                }
            }
        },

        classes: {
            init: function () {
                var cl = document.documentElement.classList;
                cl.add("oneechan");
                cl.toggle("isLight", $SS.theme.textColor.isLight === true);
                cl.toggle("dark-captcha", $SS.theme.bgColor.isLight === false);
                cl.toggle("underline-quotes", $SS.conf["Underline QuoteLinks"] === true);
                cl.toggle("underline-disabled", $SS.conf["Underline All Links"] === false);
                cl.toggle("rounded-corners", $SS.conf["Rounded Corners"] === true);
                cl.toggle("hide-board-name", $SS.conf["Show Board Name"] === false);
                cl.toggle("reply-fit-width", $SS.conf["Fit Width"] === true);
                cl.toggle("fit-postmenu", $SS.conf["Fit Post Menu"] === true);
                cl.toggle("hide-banner", $SS.conf["Show Banner"] === false);
                cl.toggle("banner-opacity", $SS.conf["Reduce Banner Opacity"] === true);
                cl.toggle("show-button", $SS.conf["Show Reply Form"] &&
                    (!$SS.conf["Show Only in Catalog"] || $SS.location.catalog));
                cl.toggle("qr-button", $SS.conf["Show QR Reply Button"]);
                cl.toggle("show-form", $SS.conf["Show Original Form"] === false);
                cl.toggle("post-info", $SS.conf["Show Reply Header"] === true);
                cl.toggle("show-file-info", $SS.conf["Show File Info"] === false);
                cl.toggle("borders-all", $SS.conf["Borders"] === 2);
                cl.toggle("borders-none", $SS.conf["Borders"] === 3);
                cl.toggle("hl-border", $SS.conf["Decoration Style"] === 1);
                cl.toggle("hl-outline", $SS.conf["Decoration Style"] === 2);
                cl.toggle("hl-border-down", $SS.conf["Decoration Style"] === 3);
                if (!$SS.location.report) {
                    cl.toggle("right-sidebar", $SS.conf["Sidebar Position"] === 1);
                    cl.toggle("left-sidebar", $SS.conf["Sidebar Position"] === 2);
                    cl.toggle("ss-sidebar", $SS.conf["SS-like Sidebar"] === true);
                    cl.toggle("mini-sidebar", $SS.conf["Minimal Sidebar"] === true);
                }
                cl.toggle("recolor-even", $SS.conf["Recolor Even Replies"] === true);
                cl.toggle("alt-spoiler", $SS.conf["Invert Spoiler"] === true);
                cl.toggle("backlink-icon", $SS.conf["Backlink Icons"] === true);
                cl.toggle("backlink-shadow", $SS.conf["Backlink Shadow"] === true);
                cl.toggle("no-pu", $SS.conf["Show 4chan Pass Users"] === true);
                cl.toggle("pass-login", $SS.conf["Show 4chan Pass Login"] === true);
                cl.toggle("fit-eximg", $SS.conf["Fit Expanded Images"] === true);
                cl.toggle("normal-qr", $SS.conf["Autohide Style"] === 1);
                cl.toggle("vertical-qr", $SS.conf["Autohide Style"] === 2);
                cl.toggle("fade-qr", $SS.conf["Autohide Style"] === 3);
                cl.toggle("qr-opacity", $SS.conf["Transparent QR"] === true);
                cl.toggle("qr-background", $SS.conf["Remove Background"] === true);
                cl.toggle("qr-controls", $SS.conf["Remove Controls"] === true);
                cl.toggle("force-indent", $SS.conf["Indent OP"] === false);
                cl.toggle("force-wrapping", $SS.conf["Allow Wrapping Around OP"] === false);
                cl.toggle("op-background", $SS.conf["OP Background"] === true);
                cl.toggle("expand-inputs", $SS.conf["Expanding Form Inputs"] === true);
                cl.toggle("single-captcha", $SS.conf["Single View Captcha"] === true);
                cl.toggle("qr-transition", $SS.conf["Animated Transition"] === true);
                cl.toggle("chX-notifs", $SS.conf["Style 4chanX Notifications"] === true);
                cl.toggle("header-gradient", $SS.conf["Show Header Background Gradient"] === true);
                cl.toggle("header-shadow", $SS.conf["Show Header Shadow"] === false);
                cl.toggle("header-highlight", $SS.conf["Highlight Current Board"] === false);
                cl.toggle("hide-blotter", $SS.conf["Show Blotter"] === false);
                cl.toggle("show-ads", $SS.conf["Show 4chan Ads"] === true);
                cl.toggle("hide-board-banners", $SS.conf["Show Board Banners"] === false);
                cl.toggle("hide-top-ad", $SS.conf["Show Top Ad"] === false);
                cl.toggle("hide-bottom-ad", $SS.conf["Show Bottom Ad"] === false);
                cl.toggle("hide-adl", $SS.conf["Show Buy Ad Banner"] === false);
                cl.toggle("ad-opacity", $SS.conf["Reduce Ad Opacity"] === true);
                cl.toggle("hide-navlinks", $SS.conf["Show Navigation Links"] === false);
                cl.toggle("hide-navlinktop", $SS.conf["Show Top Links"] === false);
                cl.toggle("hide-navlinkbot", $SS.conf["Show Bottom Links"] === false);
                cl.toggle("thumb-opacity", $SS.conf["Reduce Thumbnail Opacity"] === true);
                cl.toggle("follow-cursor", !$SS.is4chanX() && $SS.conf["Follow Cursor"] === true);
                cl.toggle("catalog-justify", $SS.conf["Justified Text"] === true);
                cl.toggle("catalog-background", $SS.conf["Show Background"] === true);
                cl.toggle("catalog-thumbsize", $SS.conf["Unified Thumbnail Size"] === true);
                cl.toggle("use-sc-icons", $SS.conf["Use StyleChan Icons"]);
                cl.toggle("highlight-you", $SS.conf["Highlight Posts Quoting You"] === true);
                cl.toggle("highlight-own", $SS.conf["Highlight Own Posts"] === true);
                if (!$SS.is4chanX()) {
                    if ($SS.conf["Highlight Own Posts"]) $SS.markOwnPosts();
                    if ($SS.conf["Highlight Posts Quoting You"]) $SS.markQuotingYou();
                    if ($SS.conf["Relative Post Dates"]) $SS.relativeDates();
                }
            }
        },

        /* STRUCTS */
        Color: function (hex, incHover) {
            this.hex = "#" + hex;
            this.private_rgb = $SS.RGBFromHex(hex);
            this.rgb = this.private_rgb.join(",");
            this.isLight = $SS.isLight(this.private_rgb);
            this.shiftRGB = function (shift, smart) {
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
        Image: function (img, RPA) {
            this.img = img;
            this.RPA = RPA;
            this.get = function () {
                if (!this.img) return "none ";

                var ret = "url('";
                if ($SS.validBase64(this.img))
                    ret = "data:image/" + $SS.typeofBase64(this.img) + ";base64," + this.img;
                else
                    ret = this.img;

                return (this.RPA !== undefined ? "url('" : "") + ret + (this.RPA !== undefined ? "')" + this.RPA : "");
            };
        },
        Theme: function (index) {
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
            this.codeBackground = (this.bgColor.isLight ? "255, 255, 255, 0.2" : "0, 0, 0, 0.2");
            this.codeBorder = (this.bgColor.isLight ? "204, 204, 204, 1.0" : "204, 204, 204, 0.1");
            this.icons = {
                menuIcon: "<svg viewBox='0 0 512 512' preserveAspectRatio='xMidYMid meet' class='icon' xmlns='http://www.w3.org/2000/svg'>" +
                    "<path fill='currentColor' d='M256 432q-15 1-16 16 1 15 16 16 15-1 16-16-1-15-16-16ZM64 288H448v32q-1 27-19 45t-45 19H320v64q-1 27-19 45t-45 19q-27-1-45-19t-19-45V384H128q-27-1-45-19T64 320V288v32-32ZM226 6l21 52q3 6 9 6t9-6L286 6q2-6 9-6H400q20 1 34 14 13 14 14 34V224v22 10H74 64V246 224 48q1-20 14-34Q92 1 112 0h10q6 0 8 6l21 52q3 6 9 6t9-6L190 6q2-6 9-6h19q6 0 8 6Z'/></svg>",
                star: "<svg viewBox='0 0 30 30' preserveAspectRatio='xMidYMid meet' xmlns='http://www.w3.org/2000/svg'>" +
                    "<path fill='rgb(" + this.textColor.rgb + ")' d='M14.615,4.928c0.487-0.986,1.284-0.986,1.771,0l2.249,4.554c0.486,0.986,1.775,1.923,2.864,2.081l5.024,0.73c1.089,0.158,1.335,0.916,0.547,1.684l-3.636,3.544c-0.788,0.769-1.28,2.283-1.095,3.368l0.859,5.004c0.186,1.085-0.459,1.553-1.433,1.041l-4.495-2.363c-0.974-0.512-2.567-0.512-3.541,0l-4.495,2.363c-0.974,0.512-1.618,0.044-1.432-1.041l0.858-5.004c0.186-1.085-0.307-2.6-1.094-3.368L3.93,13.977c-0.788-0.768-0.542-1.525,0.547-1.684l5.026-0.73c1.088-0.158,2.377-1.095,2.864-2.081L14.615,4.928z'/></svg>",
                msg: "<svg viewBox='0 0 30 30' preserveAspectRatio='xMidYMid meet' height='16' width='16' xmlns='http://www.w3.org/2000/svg'>" +
                    "<path fill='rgb(" + this.textColor.rgb + ")' d='M16,4.938c-7.732,0-14,4.701-14,10.5c0,1.981,0.741,3.833,2.016,5.414L2,25.272l5.613-1.44c2.339,1.316,5.237,2.106,8.387,2.106c7.732,0,14-4.701,14-10.5S23.732,4.938,16,4.938zM16.868,21.375h-1.969v-1.889h1.969V21.375zM16.772,18.094h-1.777l-0.176-8.083h2.113L16.772,18.094z'/></svg>",
                backlink: "<svg viewBox='0 0 30 30' preserveAspectRatio='xMidYMid meet' xmlns='http://www.w3.org/2000/svg'>" +
                    "<path fill='rgb(" + this.blinkColor.rgb + ")' d='M12.981,9.073V6.817l-12.106,6.99l12.106,6.99v-2.422c3.285-0.002,9.052,0.28,9.052,2.269c0,2.78-6.023,4.263-6.023,4.263v2.132c0,0,13.53,0.463,13.53-9.823C29.54,9.134,17.952,8.831,12.981,9.073z'/></svg>",
                threadClosed: "<svg viewBox='0 0 30 30' preserveAspectRatio='xMidYMid meet' height='16' width='16' xmlns='http://www.w3.org/2000/svg'>" +
                    "<path fill='rgb(" + this.headerColor.rgb + ")' d='M22.335,12.833V9.999h-0.001C22.333,6.501,19.498,3.666,16,3.666S9.666,6.502,9.666,10h0v2.833H7.375V25h17.25V12.833H22.335zM11.667,10C11.667,10,11.667,10,11.667,10c0-2.39,1.944-4.334,4.333-4.334c2.391,0,4.335,1.944,4.335,4.333c0,0,0,0,0,0v2.834h-8.668V10z'/></svg>",
                threadPinned: "<svg viewBox='0 0 30 30' preserveAspectRatio='xMidYMid meet' height='16' width='16' xmlns='http://www.w3.org/2000/svg'>" +
                    "<path fill='rgb(" + this.tripColor.rgb + ")' d='M16,3.5c-4.142,0-7.5,3.358-7.5,7.5c0,4.143,7.5,18.121,7.5,18.121S23.5,15.143,23.5,11C23.5,6.858,20.143,3.5,16,3.5z M16,14.584c-1.979,0-3.584-1.604-3.584-3.584S14.021,7.416,16,7.416S19.584,9.021,19.584,11S17.979,14.584,16,14.584z'/></svg>",
                threadArchived: "<svg viewBox='0 0 30 30' preserveAspectRatio='xMidYMid meet' height='16' width='16' xmlns='http://www.w3.org/2000/svg'>" +
                    "<path fill='rgb(" + this.tripColor.rgb + ")' d='M15.5,3.029l-10.8,6.235L4.7,21.735L15.5,27.971l10.8-6.235V9.265L15.5,3.029zM24.988,10.599L16,15.789v10.378c0,0.275-0.225,0.5-0.5,0.5s-0.5-0.225-0.5-0.5V15.786l-8.987-5.188c-0.239-0.138-0.321-0.444-0.183-0.683c0.138-0.238,0.444-0.321,0.683-0.183l8.988,5.189l8.988-5.189c0.238-0.138,0.545-0.055,0.684,0.184C25.309,10.155,25.227,10.461,24.988,10.599z'/></svg>",
                downArrow: "<svg viewBox='7 4 29 27' preserveAspectRatio='xMidYMid meet' height='16' width='16' xmlns='http://www.w3.org/2000/svg'>" +
                    "<path fill='rgb(" + this.tripColor.rgb + ")' d='M8.037,11.166L14.5,22.359c0.825,1.43,2.175,1.43,3,0l6.463-11.194c0.826-1.429,0.15-2.598-1.5-2.598H9.537C7.886,8.568,7.211,9.737,8.037,11.166z'/></svg>"
            };

            if (theme.customCSS) {
                try {
                    var css = String(theme.customCSS);
                    if (css.length > 2 && css[0] === "(" && css[css.length - 1] === ")") {
                        css = css.slice(1, -1);
                    }
                    css = css.replace(/^\\?"|\\?"$/g, '');
                    this.customCSS = $SS.trimLineBreaks(css);
                } catch (e) {
                    alert("Error processing " + this.name + "'s theme.customCSS!\n" + e.message);
                    this.customCSS = String(theme.customCSS || "");
                }
            } else
                this.customCSS = "";

            this.preview = function () {
                var div = $("<div " + (this.hidden ? "hidden=true " : "") +
                    " id=theme" + this.index + " class=\'theme-preview " + (($SS.conf["Selected Theme"] == $SS.conf["NSFW Theme"]) && ($SS.conf["Selected Theme"] == this.index) ? "selected nsfw" : ($SS.conf["Selected Theme"] == this.index ? "selected " : "") + ($SS.conf["NSFW Theme"] == this.index ? "nsfw " : "")) + "\'>").html("<div class=reply " +
                        "style='background-color:" + this.mainColor.hex + "!important;border:1px solid " + this.brderColor.hex + "!important;color:" + this.textColor.hex + "!important'>" +
                        "<span style='display:inline-block;width:10px;height:10px;border-radius:2px;background-color:" + this.inputColor.hex + "!important;border:1px solid " + this.inputbColor.hex + "!important;box-shadow:rgba(" + this.mainColor.shiftRGB(64) + ",.3) 0 1px;'></span>&ensp;" +
                        "<span style='color:" + this.titleColor.hex + "!important; font-weight: bold !important'>" + this.name + "</span>&ensp;" +
                        "<span style='color:" + this.nameColor.hex + "!important; font-weight: bold !important'>" + this.authorName + "</span>&ensp;" +
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

                $(div).bind("click", function () {
                    var $this = $(this);

                    if ($this.hasClass("selected nsfw")) return;

                    $this.parent().children(".selected").removeClass("selected");
                    $this.parent().children(".nsfw").removeClass("nsfw");
                    $this.addClass("selected nsfw");
                    $SS.options.save();
                });

                $("a[title='Sets the SFW theme.']", div).bind("click", function (e) {
                    e.stopPropagation();
                    var $this = $(this);
                    if ($this.hasClass("selected")) return;

                    $this.parent().parent().parent().parent().children(".selected").removeClass("selected");
                    $this.parent().parent().parent().addClass("selected");
                });

                $("a[title='Sets the NSFW theme.']", div).bind("click", function (e) {
                    e.stopPropagation();
                    var $this = $(this);
                    if ($this.hasClass("nsfw")) return;

                    $this.parent().parent().parent().parent().children(".nsfw").removeClass("nsfw");
                    $this.parent().parent().parent().addClass("nsfw");
                });
                $("a[title=Delete]", div).bind("click", function (e) {
                    e.stopPropagation();
                    $SS.options.deleteTheme(index);
                });
                $("a[title=Edit]", div).bind("click", function (e) {
                    e.stopPropagation();
                    $SS.options.showTheme(index);
                });

                return div;
            };
        },

        /* HELPER METHODS */
        formatFont: function (font) {
            if (/^(serif|sans-serif|monospace|cursive|system-ui)$/.test(font))
                return font;

            return "'" + font + "'";
        },
        systemFonts: {
            windows: [
                "Arial", "Arial Black", "Arial Narrow", "Calibri", "Cambria",
                "Candara", "Century Gothic", "Comic Sans MS", "Consolas",
                "Constantia", "Corbel", "Courier New", "Franklin Gothic Medium",
                "Georgia", "Impact", "Lucida Console",
                "Lucida Sans Unicode", "Palatino Linotype", "Segoe UI",
                "Tahoma", "Times New Roman", "Trebuchet MS", "Verdana"
            ],
            macos: [
                "Arial", "Arial Black", "Comic Sans MS", "Courier New",
                "Futura", "Georgia", "Gill Sans", "Helvetica",
                "Helvetica Neue", "Hoefler Text", "Impact", "Menlo",
                "Monaco", "Optima", "Palatino", "San Francisco",
                "SF Mono", "SF Pro", "Tahoma", "Times New Roman",
                "Trebuchet MS", "Verdana"
            ],
            linux: [
                "Arial", "Cantarell", "Courier New", "DejaVu Sans",
                "DejaVu Sans Mono", "DejaVu Serif", "Georgia",
                "Liberation Mono", "Liberation Sans", "Liberation Serif",
                "Noto Sans", "Noto Sans Mono", "Tahoma",
                "Times New Roman", "Ubuntu", "Ubuntu Mono", "Verdana"
            ]
        },
        is4chanX: function () {
            return document.documentElement.classList.contains("fourchan-x") || document.documentElement.classList.contains("fourchan-xt");
        },
        getOS: function () {
            var ua = navigator.userAgent;
            if (/Windows/i.test(ua)) return "windows";
            if (/Mac/i.test(ua)) return "macos";
            if (/Linux/i.test(ua)) return "linux";
            return "windows";
        },
        RGBFromHex: function (hex) {
            var rgb = [];
            hex = parseInt(hex, 16);

            rgb[0] = (hex >> 16) & 0xFF;
            rgb[1] = (hex >> 8) & 0xFF;
            rgb[2] = hex & 0xFF;

            return rgb;
        },
        isLight: function (rgb) {
            return rgb[0] + rgb[1] + rgb[2] >= 400;
        },
        trimLineBreaks: function (str) {
            return str.replace(/(\r\n|\r|\n)/gm, "");
        },
        cleanBase64: function (b64) {
            return b64.replace(/^(data:image\/(?:gif|jpe?g|png);base64,)(\r\n|\r|\n)?/gmi, "");
        },
        typeofBase64: function (b64) {
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
        validBase64: function (b64) {
            return /^(?:data:image\/(?:gif|jpe?g|png);base64,)?(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=|[A-Za-z0-9+\/]{4})$/i.test(b64);
        },
        validImageURL: function (img) {
            return /^https?:\/\/.+$/i.test(img);
        },
        /* Board max_filesize from https://a.4cdn.org/boards.json */
        boardFileSizes: {
            /* 2MB */ b: 2097152, bant: 2097152, s4s: 2097152,
            /* 5MB */ out: 5242880, p: 5242880, soc: 5242880,
            /* 6MB */ w: 6291456, wg: 6291456, wsg: 6291456,
            /* 8MB */ gd: 8388608, hc: 8388608, hm: 8388608, hr: 8388608,
            po: 8388608, qst: 8388608, r: 8388608, s: 8388608,
            tg: 8388608, trv: 8388608, wsr: 8388608
            /* all others: 4MB (4194304) */
        },
        boardMaxDims: {
            s: 8000, soc: 8000, hm: 8000, out: 8000, hc: 8000
            /* all others: 10000 */
        },

        getLocation: function (url) {
            var obj;

            if (typeof url === "string") {
                obj = document.createElement("a");
                obj.href = location.protocol + "//" + url;
            } else
                obj = window.location;

            var pathname = obj.pathname.slice(1).split("/");

            return {
                sub: obj.hostname.split(".")[0],
                board: pathname[0],
                nsfw: /^(aco|b|bant|d|e|f|gif|h|hr|r|s|t|u|wg|i|ic|r9k|hm|y|hc|pol|soc|s4s|trash)$/.test(pathname[0]),
                maxFileSize: $SS.boardFileSizes[pathname[0]] || 4194304,
                reply: pathname[1] === "thread",
                catalog: pathname[1] === "catalog",
                report: location.hostname === "sys.4chan.org",
                dead: document.title === "4chan - 404 Not Found"
            };
        }
    };
    /* END STYLE SCRIPT CLASSES */
    $SS.init();
})();
