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
<%= grunt.file.read('src/css/Options.css') %>
<%= grunt.file.read('src/css/Catalog.css') %>
<%= grunt.file.read('src/css/Notifications.css') %>
//" + ($SS.conf[""] ? "<%= grunt.file.read('src/css/Native.css') %>" : "") + "
<%= grunt.file.read('src/css/Native.css') %>
