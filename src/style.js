<%= grunt.file.read('src/css/Cleanup.css') %>
<%= grunt.file.read('src/css/Original.css') %>
<%= grunt.file.read('src/css/General.css') %>
<%= grunt.file.read('src/css/Colors.css') %>
<%= grunt.file.read('src/css/Fonts.css') %>
" + $SS.theme.customCSS + "
" + ($SS.conf["Sidebar Position"] !== 3 ? "<%= grunt.file.read('src/css/Sidebar.css') %>" : "") + "
<%= grunt.file.read('src/css/Quickreply.css') %>
<%= grunt.file.read('src/css/Icons.css') %>
<%= grunt.file.read('src/css/Highlight.css') %>
<%= grunt.file.read('src/css/Catalog.css') %>
<%= grunt.file.read('src/css/Notifications.css') %>
/* Notifications*/
" + ($SS.conf["Center Notifications"] ? "#stylechan-notifications{right:auto;left:50%;transform:translateX(-50%);width:min(500px,calc(100vw - 20px))}.chX-notifs #notifications{right:auto!important;top:30px!important;left:50%!important;transform:translateX(-50%)!important;width:min(480px,calc(100vw - 20px))!important}" : "") + "
" + ($SS.conf["Full Border"] ? "#stylechan-notifications .stylechan-notification,.chX-notifs #notifications .notification{border:" + $SS.conf["Width Decoration"] + "px " + $SS.conf["Highlight Style"] + " !important}#stylechan-notifications .stylechan-notification-info,.chX-notifs #notifications .notification.info{border-color:#6f8fb3!important}#stylechan-notifications .stylechan-notification-warning,.chX-notifs #notifications .notification.warning{border-color:#c7a85a!important}#stylechan-notifications .stylechan-notification-error,.chX-notifs #notifications .notification.error{border-color:#c06b6b!important}#stylechan-notifications .stylechan-notification-success,.chX-notifs #notifications .notification.success{border-color:var(--sc-quoteColor)!important}" : "") + "
/* Scrollbars */
" + ($SS.conf["Style Scrollbars"] ? "*{scrollbar-color:" + $SS.theme.brderColor.hex + " " + $SS.theme.mainColor.hex + "}" : "") + "
" + ($SS.conf["Style Scrollbars"] && $SS.conf["Thin Scrollbars"] ? "*{scrollbar-width:thin}" : "") + "
/* Floating announcement */
" + (!$SS.is4chanX ?
    "#sc-msg-icon{position:relative;display:inline-block;height:16px;width:16px;opacity:.5;cursor:pointer;z-index:14}" +
    "#sc-msg-icon:hover{opacity:.95}" : "") + "
/* Leave one at the bottom otherwise file format breaks */
<%= grunt.file.read('src/css/Options.css') %>
