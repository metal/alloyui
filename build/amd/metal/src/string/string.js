'use strict';

define(['exports'], function (exports) {
	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var string = (function () {
		function string() {
			_classCallCheck(this, string);
		}

		string.collapseBreakingSpaces = function collapseBreakingSpaces(str) {
			return str.replace(/[\t\r\n ]+/g, ' ').replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, '');
		};

		string.hashCode = function hashCode(val) {
			var hash = 0;

			for (var i = 0, len = val.length; i < len; i++) {
				hash = 31 * hash + val.charCodeAt(i);
				hash %= 0x100000000;
			}

			return hash;
		};

		string.replaceInterval = function replaceInterval(str, start, end, value) {
			return str.substring(0, start) + value + str.substring(end);
		};

		return string;
	})();

	exports.default = string;
});
//# sourceMappingURL=string.js.map