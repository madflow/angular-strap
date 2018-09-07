(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"));
	else if(typeof define === 'function' && define.amd)
		define("angular-strap.tpl", ["angular"], factory);
	else if(typeof exports === 'object')
		exports["angular-strap.tpl"] = factory(require("angular"));
	else
		root["angular-strap.tpl"] = factory(root["angular"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var MODULE_NAME = 'mgcrea.ngStrap';

exports.default = MODULE_NAME;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\"> <div class=\"modal-dialog\"> <div class=\"modal-content\"> <div class=\"modal-header\" ng-show=\"title\"> <h5 class=\"modal-title\" ng-bind=\"title\"></h5> <button type=\"button\" role=\"button\" class=\"close\" aria-label=\"Close\" ng-click=\"$hide()\"><span aria-hidden=\"true\">&times;</span></button> </div> <div class=\"modal-body\" ng-bind=\"content\"></div> <div class=\"modal-footer\"> <button type=\"button\" class=\"btn btn-default\" ng-click=\"$hide()\" aria-label=\"Close\">Close</button> </div> </div> </div> </div> ";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var MODULE_NAME = 'mgcrea.ngStrap.modal';

exports.default = MODULE_NAME;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var MODULE_NAME = 'mgcrea.ngStrap.alert';

exports.default = MODULE_NAME;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var MODULE_NAME = 'mgcrea.ngStrap.tooltip';
exports.default = MODULE_NAME;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var MODULE_NAME = 'mgcrea.ngStrap.datepicker';
exports.default = MODULE_NAME;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var MODULE_NAME = 'mgcrea.ngStrap.dropdown';

exports.default = MODULE_NAME;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var MODULE_NAME = 'mgcrea.ngStrap.popover';
exports.default = MODULE_NAME;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var MODULE_NAME = 'mgcrea.ngStrap.select';
exports.default = MODULE_NAME;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var MODULE_NAME = 'mgcrea.ngStrap.timepicker';
exports.default = MODULE_NAME;

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = __webpack_require__(0);

var _angular2 = _interopRequireDefault(_angular);

var _angularStrap = __webpack_require__(2);

var _angularStrap2 = _interopRequireDefault(_angularStrap);

var _alert = __webpack_require__(28);

var _alert2 = _interopRequireDefault(_alert);

var _datepicker = __webpack_require__(30);

var _datepicker2 = _interopRequireDefault(_datepicker);

var _dropdown = __webpack_require__(32);

var _dropdown2 = _interopRequireDefault(_dropdown);

var _modal = __webpack_require__(34);

var _modal2 = _interopRequireDefault(_modal);

var _popover = __webpack_require__(35);

var _popover2 = _interopRequireDefault(_popover);

var _select = __webpack_require__(37);

var _select2 = _interopRequireDefault(_select);

var _timepicker = __webpack_require__(39);

var _timepicker2 = _interopRequireDefault(_timepicker);

var _tooltip = __webpack_require__(41);

var _tooltip2 = _interopRequireDefault(_tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _angularStrap2.default + '.tpl';

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _angular = __webpack_require__(0);

var _angular2 = _interopRequireDefault(_angular);

var _alertTpl = __webpack_require__(29);

var _alertTpl2 = _interopRequireDefault(_alertTpl);

var _alert = __webpack_require__(5);

var _alert2 = _interopRequireDefault(_alert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_angular2.default.module(_alert2.default).run(['$templateCache', function ($templateCache) {
  $templateCache.put('alert/alert.tpl.html', _alertTpl2.default);
}]);

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = "<div role=\"alert\" class=\"alert\" ng-class=\"[type ? 'alert-' + type : null]\"> <button type=\"button\" class=\"close\" ng-if=\"dismissable\" ng-click=\"$hide()\">&times;</button> <span ng-if=\"title\"> <strong ng-bind=\"title\"></strong>&nbsp;<span ng-bind-html=\"content\"></span> </span> <span ng-if=\"!title\" ng-bind-html=\"content\"></span> </div> ";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _angular = __webpack_require__(0);

var _angular2 = _interopRequireDefault(_angular);

var _datepickerTpl = __webpack_require__(31);

var _datepickerTpl2 = _interopRequireDefault(_datepickerTpl);

var _datepicker = __webpack_require__(7);

var _datepicker2 = _interopRequireDefault(_datepicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_angular2.default.module(_datepicker2.default).run(['$templateCache', function ($templateCache) {
  $templateCache.put('datepicker/datepicker.tpl.html', _datepickerTpl2.default);
}]);

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown-menu datepicker\" ng-class=\"'datepicker-mode-' + $mode\" style=\"max-width:320px\" aria-hidden=\"true\"> <table style=\"table-layout:fixed;height:100%;width:100%\"> <thead> <tr class=\"text-center\"> <th> <button tabindex=\"-1\" type=\"button\" class=\"btn btn-default pull-left\" ng-click=\"$selectPane(-1)\"> <i class=\"{{$iconLeft}}\"></i> </button> </th> <th colspan=\"{{ rows[0].length - 2 }}\"> <button tabindex=\"-1\" type=\"button\" class=\"btn btn-default btn-block text-strong\" ng-click=\"$toggleMode()\"> <strong style=\"text-transform:capitalize\" ng-bind=\"title\"></strong> </button> </th> <th> <button tabindex=\"-1\" type=\"button\" class=\"btn btn-default pull-right\" ng-click=\"$selectPane(+1)\"> <i class=\"{{$iconRight}}\"></i> </button> </th> </tr> <tr ng-if=\"showLabels\" ng-bind-html=\"labels\"></tr> </thead> <tbody> <tr ng-repeat=\"(i, row) in rows\" height=\"{{ 100 / rows.length }}%\"> <td class=\"text-center\" ng-repeat=\"(j, el) in row\"> <button tabindex=\"-1\" type=\"button\" class=\"btn btn-default\" style=\"width:100%\" ng-class=\"{'btn-primary': el.selected, 'btn-info btn-today': el.isToday && !el.selected}\" ng-click=\"$select(el.date, el.disabled)\" ng-disabled=\"el.disabled\"> <span ng-class=\"{'text-muted': el.muted}\" ng-bind=\"el.label\"></span> </button> </td> </tr> </tbody> <tfoot> <tr> <td colspan=\"{{ rows[0].length }}\"> <div class=\"btn-group btn-group-justified\" role=\"group\"> <div class=\"btn-group\" role=\"group\" ng-if=\"$hasToday\"> <button type=\"button\" class=\"btn btn-default today\" ng-click=\"$setToday()\" ng-disabled=\"isTodayDisabled\"> <strong style=\"text-transform:capitalize\">Today</strong> </button> </div> <div class=\"btn-group\" role=\"group\" ng-if=\"$hasClear\"> <button type=\"button\" class=\"btn btn-default clear\" ng-click=\"$clear()\"> <strong style=\"text-transform:capitalize\">Clear</strong> </button> </div> </div> </td> </tr> </tfoot> </table> </div> ";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _angular = __webpack_require__(0);

var _angular2 = _interopRequireDefault(_angular);

var _dropdownTpl = __webpack_require__(33);

var _dropdownTpl2 = _interopRequireDefault(_dropdownTpl);

var _dropdown = __webpack_require__(8);

var _dropdown2 = _interopRequireDefault(_dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_angular2.default.module(_dropdown2.default).run(['$templateCache', function ($templateCache) {
  $templateCache.put('dropdown/dropdown.tpl.html', _dropdownTpl2.default);
}]);

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = "<ul tabindex=\"-1\" class=\"dropdown-menu\" role=\"menu\" ng-show=\"content && content.length\"> <li role=\"presentation\" ng-class=\"{'dropdown-divider': item.divider, active: item.active}\" ng-repeat=\"item in content\"> <a class=\"dropdown-item\" role=\"menuitem\" tabindex=\"-1\" ng-href=\"{{item.href}}\" ng-if=\"!item.divider && item.href\" target=\"{{item.target || ''}}\" ng-bind=\"item.text\"></a> <a class=\"dropdown-item\" role=\"menuitem\" tabindex=\"-1\" href ng-if=\"!item.divider && item.click\" ng-click=\"$eval(item.click);$hide()\" ng-bind=\"item.text\"></a> </li> </ul>";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _angular = __webpack_require__(0);

var _angular2 = _interopRequireDefault(_angular);

var _modalTpl = __webpack_require__(3);

var _modalTpl2 = _interopRequireDefault(_modalTpl);

var _modal = __webpack_require__(4);

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_angular2.default.module(_modal2.default).run(['$templateCache', function ($templateCache) {
  $templateCache.put('modal/modal.tpl.html', _modalTpl2.default);
}]);

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _angular = __webpack_require__(0);

var _angular2 = _interopRequireDefault(_angular);

var _popoverTpl = __webpack_require__(36);

var _popoverTpl2 = _interopRequireDefault(_popoverTpl);

var _popover = __webpack_require__(9);

var _popover2 = _interopRequireDefault(_popover);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_angular2.default.module(_popover2.default).run(['$templateCache', function ($templateCache) {
  $templateCache.put('popover/popover.tpl.html', _popoverTpl2.default);
}]);

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = "<div class=\"popover\" tabindex=\"-1\" role=\"tooltip\"> <div class=\"arrow\"></div> <h3 class=\"popover-header\" ng-bind=\"title\" ng-show=\"title\"></h3> <div class=\"popover-body\" ng-bind=\"content\"></div> </div>";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _angular = __webpack_require__(0);

var _angular2 = _interopRequireDefault(_angular);

var _selectTpl = __webpack_require__(38);

var _selectTpl2 = _interopRequireDefault(_selectTpl);

var _select = __webpack_require__(10);

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_angular2.default.module(_select2.default).run(['$templateCache', function ($templateCache) {
  $templateCache.put('select/select.tpl.html', _selectTpl2.default);
}]);

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = "<ul tabindex=\"-1\" class=\"select dropdown-menu\" ng-show=\"$isVisible()\" role=\"menu\"> <li ng-if=\"$showAllNoneButtons\"> <div class=\"btn-group\" style=\"margin-bottom:5px;margin-left:5px\" role=\"group\"> <button type=\"button\" class=\"btn btn-secondary btn-sm\" ng-click=\"$selectAll()\">{{$allText}}</button> <button type=\"button\" class=\"btn btn-secondary btn-sm\" ng-click=\"$selectNone()\">{{$noneText}}</button> </div> </li> <li role=\"presentation\" ng-repeat=\"match in $matches\"> <a ng-class=\"{active: $isActive($index)}\" class=\"dropdown-item\" style=\"cursor:default\" role=\"menuitem\" tabindex=\"-1\" ng-click=\"$select($index, $event)\"> <i class=\"{{$iconCheckmark}} pull-right\" ng-if=\"$isMultiple && $isActive($index)\"></i> <span ng-bind=\"match.label\" role=\"menuitem\"></span> </a> </li> </ul> ";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _angular = __webpack_require__(0);

var _angular2 = _interopRequireDefault(_angular);

var _timepickerTpl = __webpack_require__(40);

var _timepickerTpl2 = _interopRequireDefault(_timepickerTpl);

var _timepicker = __webpack_require__(11);

var _timepicker2 = _interopRequireDefault(_timepicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_angular2.default.module(_timepicker2.default).run(['$templateCache', function ($templateCache) {
  $templateCache.put('timepicker/timepicker.tpl.html', _timepickerTpl2.default);
}]);

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown-menu timepicker\" style=\"min-width:0;width:auto\" aria-hidden=\"true\"> <table height=\"100%\"> <thead> <tr class=\"text-center\"> <th> <button tabindex=\"-1\" type=\"button\" class=\"btn btn-default pull-left\" ng-click=\"$arrowAction(-1, 0)\"> <i class=\"{{ $iconUp }}\"></i> </button> </th> <th> &nbsp; </th> <th> <button tabindex=\"-1\" type=\"button\" class=\"btn btn-default pull-left\" ng-click=\"$arrowAction(-1, 1)\"> <i class=\"{{ $iconUp }}\"></i> </button> </th> <th ng-if=\"showSeconds\"> &nbsp; </th> <th ng-if=\"showSeconds\"> <button tabindex=\"-1\" type=\"button\" class=\"btn btn-default pull-left\" ng-click=\"$arrowAction(-1, 2)\"> <i class=\"{{ $iconUp }}\"></i> </button> </th> </tr> </thead> <tbody> <tr ng-repeat=\"(i, row) in rows\"> <td class=\"text-center\"> <button tabindex=\"-1\" style=\"width:100%\" type=\"button\" class=\"btn btn-default\" ng-class=\"{'btn-primary': row[0].selected}\" ng-click=\"$select(row[0].date, 0)\" ng-disabled=\"row[0].disabled\"> <span ng-class=\"{'text-muted': row[0].muted}\" ng-bind=\"row[0].label\"></span> </button> </td> <td> <span ng-bind=\"i == midIndex ? timeSeparator : ' '\"></span> </td> <td class=\"text-center\"> <button tabindex=\"-1\" ng-if=\"row[1].date\" style=\"width:100%\" type=\"button\" class=\"btn btn-default\" ng-class=\"{'btn-primary': row[1].selected}\" ng-click=\"$select(row[1].date, 1)\" ng-disabled=\"row[1].disabled\"> <span ng-class=\"{'text-muted': row[1].muted}\" ng-bind=\"row[1].label\"></span> </button> </td> <td ng-if=\"showSeconds\"> <span ng-bind=\"i == midIndex ? timeSeparator : ' '\"></span> </td> <td ng-if=\"showSeconds\" class=\"text-center\"> <button tabindex=\"-1\" ng-if=\"row[2].date\" style=\"width:100%\" type=\"button\" class=\"btn btn-default\" ng-class=\"{'btn-primary': row[2].selected}\" ng-click=\"$select(row[2].date, 2)\" ng-disabled=\"row[2].disabled\"> <span ng-class=\"{'text-muted': row[2].muted}\" ng-bind=\"row[2].label\"></span> </button> </td> <td ng-if=\"showAM\"> &nbsp; </td> <td ng-if=\"showAM\"> <button tabindex=\"-1\" ng-show=\"i == midIndex - !isAM * 1\" style=\"width:100%\" type=\"button\" ng-class=\"{'btn-primary': !!isAM}\" class=\"btn btn-default\" ng-click=\"$switchMeridian()\" ng-disabled=\"el.disabled\">AM</button> <button tabindex=\"-1\" ng-show=\"i == midIndex + 1 - !isAM * 1\" style=\"width:100%\" type=\"button\" ng-class=\"{'btn-primary': !isAM}\" class=\"btn btn-default\" ng-click=\"$switchMeridian()\" ng-disabled=\"el.disabled\">PM</button> </td> </tr> </tbody> <tfoot> <tr class=\"text-center\"> <th> <button tabindex=\"-1\" type=\"button\" class=\"btn btn-default pull-left\" ng-click=\"$arrowAction(1, 0)\"> <i class=\"{{ $iconDown }}\"></i> </button> </th> <th> &nbsp; </th> <th> <button tabindex=\"-1\" type=\"button\" class=\"btn btn-default pull-left\" ng-click=\"$arrowAction(1, 1)\"> <i class=\"{{ $iconDown }}\"></i> </button> </th> <th ng-if=\"showSeconds\"> &nbsp; </th> <th ng-if=\"showSeconds\"> <button ng-if=\"showSeconds\" tabindex=\"-1\" type=\"button\" class=\"btn btn-default pull-left\" ng-click=\"$arrowAction(1, 2)\"> <i class=\"{{ $iconDown }}\"></i> </button> </th> </tr> </tfoot> </table> </div> ";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _angular = __webpack_require__(0);

var _angular2 = _interopRequireDefault(_angular);

var _tooltipTpl = __webpack_require__(42);

var _tooltipTpl2 = _interopRequireDefault(_tooltipTpl);

var _tooltip = __webpack_require__(6);

var _tooltip2 = _interopRequireDefault(_tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_angular2.default.module(_tooltip2.default).run(['$templateCache', function ($templateCache) {
  $templateCache.put('tooltip/tooltip.tpl.html', _tooltipTpl2.default);
}]);

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = "<div class=\"tooltip show\" ng-show=\"title\"> <div class=\"arrow\"></div> <div class=\"tooltip-inner\" ng-bind=\"title\"></div> </div>";

/***/ })
/******/ ]);
});