define(["exports"],function(e){"use strict";function n(e,n){return function u(){var c=arguments;t(u),u.id=setTimeout(function(){e.apply(null,c)},n)}}function t(e){clearTimeout(e.id)}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=n,e.cancelDebounce=t,e.debounce=n});