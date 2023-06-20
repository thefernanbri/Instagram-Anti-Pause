// ==UserScript==
// @name         Instagram anti pause video switch
// @version      1.0
// @description  Instagram anti pause video if tab is switched
// @author       TheFernanbri (Fernando Brito)
// @match        http://*.instagram.com/*
// @match        https://*.instagram.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=instagram.com
// @grant        none
// ==/UserScript==

(function() {
   'use strict';
   window.addEventListener("visibilitychange", function(event) {
          event.stopImmediatePropagation();
   }, true);

})();