define(["exports","metal-component/src/all/component","metal-soy/src/Soy"],function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(e,"__esModule",{value:!0}),e.templates=e.Rating=void 0;var s,r=a(t),u=a(n);goog.loadModule(function(e){function t(e,t,n){a("div",null,null,"aria-valuemin",e.options[0].value,"aria-valuemax",e.options[e.options.length-1].value,"aria-valuenow",e.options[e.value]?e.options[e.value].value:"","aria-valuetext",e.options[e.value]?e.options[e.value].title:"","class","rating","data-onmouseleave","handleMouseLeaveEvent"),e.label&&(a("label",null,null,"class","rate-label"),i((goog.asserts.assert(null!=e.label),e.label)),o("label")),a("div",null,null,"class","rating-items");for(var s=e.options.length,r=0;s>r;r++)l("button",null,null,"aria-disabled",e.disabled,"aria-pressed",r<=e.value,"aria-label",e.options[r].title,"class","btn rating-item "+(r<=e.value?e.cssClasses.on:e.cssClasses.off),"data-index",r,"data-onclick","handleClickEvent","data-onmouseover","handleMouseOverEvent","title",e.options[r].title,"type","button");o("div"),a("input",null,null,"type","hidden","aria-hidden","true","name",e.inputHiddenName,"value",e.options[e.value]?e.options[e.value].value:e.value),o("input"),o("div")}goog.module("Rating.incrementaldom");goog.require("soy"),goog.require("soydata");goog.require("goog.i18n.bidi"),goog.require("goog.asserts");var n=goog.require("incrementaldom"),a=n.elementOpen,o=n.elementClose,l=n.elementVoid,i=(n.elementOpenStart,n.elementOpenEnd,n.text);n.attr;return e.render=t,goog.DEBUG&&(t.soyTemplateName="Rating.render"),e.render.params=["label","cssClasses","disabled","inputHiddenName","options","value"],e.render.types={label:"any",cssClasses:"any",disabled:"any",inputHiddenName:"any",options:"any",value:"any"},e.templates=s=e,e});var d=function(e){function t(){return o(this,t),l(this,e.apply(this,arguments))}return i(t,e),t}(r["default"]);u["default"].register(d,s),e.Rating=d,e.templates=s,e["default"]=s});