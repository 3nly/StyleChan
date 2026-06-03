// ==UserScript==
// @name         StyleChan
// @version      1.6.0
// @namespace    StyleChan
// @description  Customizable themes for 4chan X.
// @license      GPL-3.0; https://github.com/3nly/StyleChan/blob/main/LICENSE 
// @match        http://boards.4chan.org/*
// @match        https://boards.4chan.org/*
// @match        http://sys.4chan.org/*
// @match        https://sys.4chan.org/*
// @exclude      http://www.4chan.org/
// @exclude      https://www.4chan.org/
// @exclude      http://www.4chan.org/*
// @exclude      https://www.4chan.org/*
// @exclude      http://www.4chan.org/advertise
// @exclude      https://www.4chan.org/advertise
// @exclude      http://www.4chan.org/advertise?*
// @exclude      https://www.4chan.org/advertise?*
// @exclude      http://www.4chan.org/donate
// @exclude      https://www.4chan.org/donate
// @exclude      http://www.4chan.org/donate?*
// @exclude      https://www.4chan.org/donate?*
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
// @run-at       document-body
// @updateURL    https://github.com/3nly/StyleChan/releases/latest/download/StyleChan.meta.js
// @downloadURL  https://github.com/3nly/StyleChan/releases/latest/download/StyleChan.user.js
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAA5FBMVEUAAADqC43tAIyAxjjtAIwBruzrCY0ArvBPtkn37wJQtkkAru9QtkkDrukBru4CrupPtkj/8gD/8gBQtklQtkn98QHsBIwCr+sBru0Crur+8gBQtkntAYz98gAAru7tAYz98QHsAoxQtknsAoxPtknrBoxPtkj78QFQtknsBoz37wIAru8Aru/+8gD88QHsA4wBru3rBoz68QH58AL58AL+8gDsAozsAozsAoz88QEBru5QtklQtklQtkn88QHrBoz58ALtAYz+8gABru9Qtkn68QH98QH78AIArvD/8gBQtkntAIxfAaaZAAAASHRSTlMACPgK8k0R8CkQ7N7NDJ4lEPfr3Z+bfTsxFPLBtrOyrKmNiWRZQDUiHBsX6M7Ad25pU0Q5HNDMwp6GhXJmRzEvKN7cwLVoXE9ZFwasAAACE0lEQVRIx8WS2ZKaQBSGG1RAQFHAuI86uDtxXzPj7AvI+79PeqHTQlNduUhlvhu6rP+T858GfAOZsaaV0AE+x38R7787utN8KA1dR9cddwjElNwLwdTJ0zmLhdtLElMT5TXnwnEvEvoXnveMQHhIEZolgXDWecEVLsnkhT6XEs9kjsX35iby+jk9qEwUCR/GzdSl1i2rcB1fHF72LU/BVxGrcYt3WisahvGWA5RJSw4h8mEAIEPzKo9XujR8hLqk/98JI148iRosX/il+gQ1escqG1KyPyKDzVMv+n+4IT2OIUPGhoaa6/fJvD+zUF5qhWmG3gfJvK9WqcAbLs4XWJ4JoBemGBmA+/oxZjUsDLJxI7sAESTPlZY6YcJYkfyS7jOxVuDJqULhBqX4CkA5JEosJICp3XEjpXWQe7Q0Z6ikdC+RR9/gtDJHStWIG7kU4Yjz3aB8ysNDzkgRFtedOxP4y6gdBEG5QgxeeGIdZJL/GWA4Y1ZL3IN8RPlnmCd0t6gHa14EhKc9/bgVlse0kWHR+3izADVaWRjfryQ2D30Hmqq+vFPhPEWYpygDzxso6JTv0izrAZVqLofjPKcgTnkOhKztIIG9FuUzbCBWPC8QRq+8YD8LhEebFxqbfylMd7zwOgICTrwg3uu0TfffiJ7w5oRsKzaK7T7Xbag0dh8wLybz+Dn/WE8ByG++vjZb8P/5DaGCFxaoVX+0AAAAAElFTkSuQmCC
// ==/UserScript==