define(["exports","metal/src/metal"],function(n,e){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=t(e),i=function(){function n(){r(this,n)}return n.buildConfigFromCall=function(n){var e={};n[1]&&(e.key=n[1]);for(var t=(n[2]||[]).concat(n.slice(3)),r=0;r<t.length;r+=2)e[t[r]]=t[r+1];return e},n.buildCallFromConfig=function(n,e){for(var t=[n,e.key,[]],r=Object.keys(e),o=0;o<r.length;o++)"children"!==r[o]&&t.push(r[o],e[r[o]]);return t},n.isComponentTag=function(n){return!o["default"].isString(n)||n[0]===n[0].toUpperCase()},n}();n["default"]=i});