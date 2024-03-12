/*!
devtools-detect
https://github.com/sindresorhus/devtools-detect
By Sindre Sorhus
MIT License
*/
!function(){"use strict";const o={isOpen:!1,orientation:void 0};var t=(i,e)=>{window.dispatchEvent(new CustomEvent("devtoolschange",{detail:{isOpen:i,orientation:e}}))};setInterval(()=>{var i=160<window.outerWidth-window.innerWidth,e=160<window.outerHeight-window.innerHeight,n=i?"vertical":"horizontal";e&&i||!(window.Firebug&&window.Firebug.chrome&&window.Firebug.chrome.isInitialized||i||e)?(o.isOpen&&t(!1,void 0),o.isOpen=!1,o.orientation=void 0):(o.isOpen&&o.orientation===n||t(!0,n),o.isOpen=!0,o.orientation=n)},500),"undefined"!=typeof module&&module.exports?module.exports=o:window.devtools=o}();