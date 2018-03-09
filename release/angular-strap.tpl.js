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
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = __webpack_require__(0);

var _angular2 = _interopRequireDefault(_angular);

var _core = __webpack_require__(4);

var _core2 = _interopRequireDefault(_core);

var _dimensions = __webpack_require__(3);

var _dimensions2 = _interopRequireDefault(_dimensions);

var _modalTpl = __webpack_require__(6);

var _modalTpl2 = _interopRequireDefault(_modalTpl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MODULE_NAME = 'mgcrea.ngStrap.modal';

_angular2.default.module(MODULE_NAME, [_core2.default, _dimensions2.default]).provider('$modal', function () {
  var defaults = this.defaults = {
    animation: 'am-fade',
    backdropAnimation: 'am-fade',
    customClass: '',
    prefixClass: 'modal',
    prefixEvent: 'modal',
    placement: 'top',
    templateUrl: 'modal/modal.tpl.html',
    template: '',
    contentTemplate: false,
    container: false,
    element: null,
    backdrop: true,
    keyboard: true,
    html: false,
    show: true,
    size: null,
    zIndex: null
  };

  this.$get = ['$window', '$rootScope', '$bsCompiler', '$animate', '$timeout', '$sce', 'dimensions', function ($window, $rootScope, $bsCompiler, $animate, $timeout, $sce, dimensions) {
    var forEach = _angular2.default.forEach;
    var requestAnimationFrame = $window.requestAnimationFrame || $window.setTimeout;
    var bodyElement = _angular2.default.element($window.document.body);

    var backdropCount = 0;
    var dialogBaseZindex = 1050;
    var backdropBaseZindex = 1040;

    var validSizes = {
      lg: 'modal-lg',
      sm: 'modal-sm'
    };

    function ModalFactory(config) {
      var $modal = {};

      // Common vars
      var options = $modal.$options = _angular2.default.extend({}, defaults, config);
      var promise = $modal.$promise = $bsCompiler.compile(options);
      var scope = $modal.$scope = options.scope && options.scope.$new() || $rootScope.$new();

      if (!options.element && !options.container) {
        options.container = 'body';
      }

      if (options.zIndex) {
        dialogBaseZindex = parseInt(options.zIndex, 10);
        backdropBaseZindex = dialogBaseZindex - 10;
      }

      // Store $id to identify the triggering element in events
      // give priority to options.id, otherwise, try to use
      // element id if defined
      $modal.$id = options.id || options.element && options.element.attr('id') || '';

      // Support scope as string options
      forEach(['title', 'content'], function (key) {
        if (options[key]) scope[key] = $sce.trustAsHtml(options[key]);
      });

      // Provide scope helpers
      scope.$hide = function () {
        scope.$$postDigest(function () {
          $modal.hide();
        });
      };
      scope.$show = function () {
        scope.$$postDigest(function () {
          $modal.show();
        });
      };
      scope.$toggle = function () {
        scope.$$postDigest(function () {
          $modal.toggle();
        });
      };
      // Publish isShown as a protected var on scope
      $modal.$isShown = scope.$isShown = false;

      // Fetch, compile then initialize modal
      var compileData;
      var modalElement;
      var modalScope;
      var backdropElement = _angular2.default.element('<div class="' + options.prefixClass + '-backdrop"/>');
      backdropElement.css({ position: 'fixed', top: '0px', left: '0px', bottom: '0px', right: '0px' });
      promise.then(function (data) {
        compileData = data;
        $modal.init();
      });

      $modal.init = function () {
        // Options: show
        if (options.show) {
          scope.$$postDigest(function () {
            $modal.show();
          });
        }
      };

      $modal.destroy = function () {
        // Remove element
        destroyModalElement();

        // remove backdrop element
        if (backdropElement) {
          backdropElement.remove();
          backdropElement = null;
        }

        // Destroy scope
        scope.$destroy();
      };

      $modal.show = function () {
        if ($modal.$isShown) return;

        var parent;
        var after;
        if (_angular2.default.isElement(options.container)) {
          parent = options.container;
          after = options.container[0].lastChild ? _angular2.default.element(options.container[0].lastChild) : null;
        } else {
          if (options.container) {
            parent = findElement(options.container);
            after = parent[0] && parent[0].lastChild ? _angular2.default.element(parent[0].lastChild) : null;
          } else {
            parent = null;
            after = options.element;
          }
        }

        // destroy any existing modal elements
        if (modalElement) destroyModalElement();

        // create a new scope, so we can destroy it and all child scopes
        // when destroying the modal element
        modalScope = $modal.$scope.$new();
        // Fetch a cloned element linked from template (noop callback is required)
        modalElement = $modal.$element = compileData.link(modalScope, function (clonedElement, scope) {});

        if (options.backdrop) {
          // set z-index
          modalElement.css({ 'z-index': dialogBaseZindex + backdropCount * 20 });
          backdropElement.css({ 'z-index': backdropBaseZindex + backdropCount * 20 });

          // increment number of backdrops
          backdropCount++;
        }

        if (scope.$emit(options.prefixEvent + '.show.before', $modal).defaultPrevented) {
          return;
        }
        if (_angular2.default.isDefined(options.onBeforeShow) && _angular2.default.isFunction(options.onBeforeShow)) {
          options.onBeforeShow($modal);
        }

        // Set the initial positioning.
        modalElement.css({ display: 'block' }).addClass(options.placement);

        // Options: customClass
        if (options.customClass) {
          modalElement.addClass(options.customClass);
        }

        // Options: size
        if (options.size && validSizes[options.size]) {
          _angular2.default.element(findElement('.modal-dialog', modalElement[0])).addClass(validSizes[options.size]);
        }

        // Options: animation
        if (options.animation) {
          if (options.backdrop) {
            backdropElement.addClass(options.backdropAnimation);
          }
          modalElement.addClass(options.animation);
        }

        if (options.backdrop) {
          $animate.enter(backdropElement, bodyElement, null);
        }

        // Support v1.2+ $animate
        // https://github.com/angular/angular.js/issues/11713
        if (_angular2.default.version.minor <= 2) {
          $animate.enter(modalElement, parent, after, enterAnimateCallback);
        } else {
          $animate.enter(modalElement, parent, after).then(enterAnimateCallback);
        }

        $modal.$isShown = scope.$isShown = true;
        safeDigest(scope);
        // Focus once the enter-animation has started
        // Weird PhantomJS bug hack
        var el = modalElement[0];
        requestAnimationFrame(function () {
          el.focus();
        });

        bodyElement.addClass(options.prefixClass + '-open');
        if (options.animation) {
          bodyElement.addClass(options.prefixClass + '-with-' + options.animation);
        }

        // Bind events
        bindBackdropEvents();
        bindKeyboardEvents();
        $modal.focus();
      };

      function enterAnimateCallback() {
        scope.$emit(options.prefixEvent + '.show', $modal);
        if (_angular2.default.isDefined(options.onShow) && _angular2.default.isFunction(options.onShow)) {
          options.onShow($modal);
        }
      }

      $modal.hide = function () {
        if (!$modal.$isShown) return;

        if (scope.$emit(options.prefixEvent + '.hide.before', $modal).defaultPrevented) {
          return;
        }
        if (_angular2.default.isDefined(options.onBeforeHide) && _angular2.default.isFunction(options.onBeforeHide)) {
          options.onBeforeHide($modal);
        }

        // Support v1.2+ $animate
        // https://github.com/angular/angular.js/issues/11713
        if (_angular2.default.version.minor <= 2) {
          $animate.leave(modalElement, leaveAnimateCallback);
        } else {
          $animate.leave(modalElement).then(leaveAnimateCallback);
        }

        if (options.backdrop) {
          // decrement number of backdrops
          backdropCount--;
          $animate.leave(backdropElement);
        }
        $modal.$isShown = scope.$isShown = false;
        safeDigest(scope);

        // Unbind events
        unbindBackdropEvents();
        unbindKeyboardEvents();
      };

      function leaveAnimateCallback() {
        scope.$emit(options.prefixEvent + '.hide', $modal);
        if (_angular2.default.isDefined(options.onHide) && _angular2.default.isFunction(options.onHide)) {
          options.onHide($modal);
        }
        if (findElement('.modal').length <= 0) {
          bodyElement.removeClass(options.prefixClass + '-open');
        }
        if (options.animation) {
          bodyElement.removeClass(options.prefixClass + '-with-' + options.animation);
        }
      }

      $modal.toggle = function () {
        if ($modal.$isShown) {
          $modal.hide();
        } else {
          $modal.show();
        }
      };

      $modal.focus = function () {
        modalElement[0].focus();
      };

      // Protected methods

      $modal.$onKeyUp = function (evt) {
        if (evt.which === 27 && $modal.$isShown) {
          $modal.hide();
          evt.stopPropagation();
        }
      };

      function bindBackdropEvents() {
        if (options.backdrop) {
          modalElement.on('click', hideOnBackdropClick);
          backdropElement.on('click', hideOnBackdropClick);
          backdropElement.on('wheel', preventEventDefault);
        }
      }

      function unbindBackdropEvents() {
        if (options.backdrop) {
          modalElement.off('click', hideOnBackdropClick);
          backdropElement.off('click', hideOnBackdropClick);
          backdropElement.off('wheel', preventEventDefault);
        }
      }

      function bindKeyboardEvents() {
        if (options.keyboard) {
          modalElement.on('keyup', $modal.$onKeyUp);
        }
      }

      function unbindKeyboardEvents() {
        if (options.keyboard) {
          modalElement.off('keyup', $modal.$onKeyUp);
        }
      }

      // Private helpers

      function hideOnBackdropClick(evt) {
        if (evt.target !== evt.currentTarget) return;
        if (options.backdrop === 'static') {
          $modal.focus();
        } else {
          $modal.hide();
        }
      }

      function preventEventDefault(evt) {
        evt.preventDefault();
      }

      function destroyModalElement() {
        if ($modal.$isShown && modalElement !== null) {
          // un-bind events
          unbindBackdropEvents();
          unbindKeyboardEvents();
        }

        if (modalScope) {
          modalScope.$destroy();
          modalScope = null;
        }

        if (modalElement) {
          modalElement.remove();
          modalElement = $modal.$element = null;
        }
      }

      return $modal;
    }

    // Helper functions

    function safeDigest(scope) {
      /* eslint-disable no-unused-expressions */
      scope.$$phase || scope.$root && scope.$root.$$phase || scope.$digest();
      /* eslint-enable no-unused-expressions */
    }

    function findElement(query, element) {
      return _angular2.default.element((element || document).querySelectorAll(query));
    }

    return ModalFactory;
  }];
}).directive('bsModal', ['$window', '$sce', '$parse', '$modal', function ($window, $sce, $parse, $modal) {
  return {
    restrict: 'EA',
    scope: true,
    link: function postLink(scope, element, attr, transclusion) {
      // Directive options
      var options = { scope: scope, element: element, show: false };
      _angular2.default.forEach(['template', 'templateUrl', 'controller', 'controllerAs', 'contentTemplate', 'placement', 'backdrop', 'keyboard', 'html', 'container', 'animation', 'backdropAnimation', 'id', 'prefixEvent', 'prefixClass', 'customClass', 'modalClass', 'size', 'zIndex'], function (key) {
        if (_angular2.default.isDefined(attr[key])) options[key] = attr[key];
      });

      // Options: alias modalClass to customClass
      if (options.modalClass) {
        options.customClass = options.modalClass;
      }

      // use string regex match boolean attr falsy values, leave truthy values be
      var falseValueRegExp = /^(false|0|)$/i;
      _angular2.default.forEach(['backdrop', 'keyboard', 'html', 'container'], function (key) {
        if (_angular2.default.isDefined(attr[key]) && falseValueRegExp.test(attr[key])) options[key] = false;
      });

      // bind functions from the attrs to the show and hide events
      _angular2.default.forEach(['onBeforeShow', 'onShow', 'onBeforeHide', 'onHide'], function (key) {
        var bsKey = 'bs' + key.charAt(0).toUpperCase() + key.slice(1);
        if (_angular2.default.isDefined(attr[bsKey])) {
          options[key] = scope.$eval(attr[bsKey]);
        }
      });

      // Support scope as data-attrs
      _angular2.default.forEach(['title', 'content'], function (key) {
        if (attr[key]) {
          attr.$observe(key, function (newValue, oldValue) {
            scope[key] = $sce.trustAsHtml(newValue);
          });
        }
      });

      // Support scope as an object
      if (attr.bsModal) {
        scope.$watch(attr.bsModal, function (newValue, oldValue) {
          if (_angular2.default.isObject(newValue)) {
            _angular2.default.extend(scope, newValue);
          } else {
            scope.content = newValue;
          }
        }, true);
      }

      // Initialize modal
      var modal = $modal(options);

      // Trigger
      element.on(attr.trigger || 'click', modal.toggle);

      // Garbage collection
      scope.$on('$destroy', function () {
        if (modal) modal.destroy();
        options = null;
        modal = null;
      });
    }
  };
}]);

exports.default = MODULE_NAME;

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = __webpack_require__(0);

var _angular2 = _interopRequireDefault(_angular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MODULE_NAME = 'mgcrea.ngStrap.helpers.dimensions';

_angular2.default.module(MODULE_NAME, []).factory('dimensions', function () {
  var fn = {};

  /**
   * Test the element nodeName
   * @param element
   * @param name
   */
  var nodeName = fn.nodeName = function (element, name) {
    return element.nodeName && element.nodeName.toLowerCase() === name.toLowerCase();
  };

  /**
   * Returns the element computed style
   * @param element
   * @param prop
   * @param extra
   */
  fn.css = function (element, prop, extra) {
    var value;
    if (element.currentStyle) {
      // IE
      value = element.currentStyle[prop];
    } else if (window.getComputedStyle) {
      value = window.getComputedStyle(element)[prop];
    } else {
      value = element.style[prop];
    }
    return extra === true ? parseFloat(value) || 0 : value;
  };

  /**
   * Provides read-only equivalent of jQuery's offset function:
   * @required-by bootstrap-tooltip, bootstrap-affix
   * @url http://api.jquery.com/offset/
   * @param element
   */
  fn.offset = function (element) {
    var boxRect = element.getBoundingClientRect();
    var docElement = element.ownerDocument;
    return {
      width: boxRect.width || element.offsetWidth,
      height: boxRect.height || element.offsetHeight,
      top: boxRect.top + (window.pageYOffset || docElement.documentElement.scrollTop) - (docElement.documentElement.clientTop || 0),
      left: boxRect.left + (window.pageXOffset || docElement.documentElement.scrollLeft) - (docElement.documentElement.clientLeft || 0)
    };
  };

  /**
   * Provides set equivalent of jQuery's offset function:
   * @required-by bootstrap-tooltip
   * @url http://api.jquery.com/offset/
   * @param element
   * @param options
   * @param i
   */
  fn.setOffset = function (element, options, i) {
    var curPosition;
    var curLeft;
    var curCSSTop;
    var curTop;
    var curOffset;
    var curCSSLeft;
    var calculatePosition;
    var position = fn.css(element, 'position');
    var curElem = _angular2.default.element(element);
    var props = {};

    // Set position first, in-case top/left are set even on static elem
    if (position === 'static') {
      element.style.position = 'relative';
    }

    curOffset = fn.offset(element);
    curCSSTop = fn.css(element, 'top');
    curCSSLeft = fn.css(element, 'left');
    calculatePosition = (position === 'absolute' || position === 'fixed') && (curCSSTop + curCSSLeft).indexOf('auto') > -1;

    // Need to be able to calculate position if either
    // top or left is auto and position is either absolute or fixed
    if (calculatePosition) {
      curPosition = fn.position(element);
      curTop = curPosition.top;
      curLeft = curPosition.left;
    } else {
      curTop = parseFloat(curCSSTop) || 0;
      curLeft = parseFloat(curCSSLeft) || 0;
    }

    if (_angular2.default.isFunction(options)) {
      options = options.call(element, i, curOffset);
    }

    if (options.top !== null) {
      props.top = options.top - curOffset.top + curTop;
    }
    if (options.left !== null) {
      props.left = options.left - curOffset.left + curLeft;
    }

    if ('using' in options) {
      options.using.call(curElem, props);
    } else {
      curElem.css({
        top: props.top + 'px',
        left: props.left + 'px'
      });
    }
  };

  /**
   * Provides read-only equivalent of jQuery's position function
   * @required-by bootstrap-tooltip, bootstrap-affix
   * @url http://api.jquery.com/offset/
   * @param element
   */
  fn.position = function (element) {
    var offsetParentRect = { top: 0, left: 0 };
    var offsetParentEl;
    var offset;

    // Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is it's only offset parent
    if (fn.css(element, 'position') === 'fixed') {
      // We assume that getBoundingClientRect is available when computed position is fixed
      offset = element.getBoundingClientRect();
    } else {
      // Get *real* offsetParentEl
      offsetParentEl = offsetParentElement(element);

      // Get correct offsets
      offset = fn.offset(element);
      if (!nodeName(offsetParentEl, 'html')) {
        offsetParentRect = fn.offset(offsetParentEl);
      }

      // Add offsetParent borders
      offsetParentRect.top += fn.css(offsetParentEl, 'borderTopWidth', true);
      offsetParentRect.left += fn.css(offsetParentEl, 'borderLeftWidth', true);
    }

    // Subtract parent offsets and element margins
    return {
      width: element.offsetWidth,
      height: element.offsetHeight,
      top: offset.top - offsetParentRect.top - fn.css(element, 'marginTop', true),
      left: offset.left - offsetParentRect.left - fn.css(element, 'marginLeft', true)
    };
  };

  /**
   * Returns the closest, non-statically positioned offsetParent of a given element
   * @required-by fn.position
   * @param element
   */
  function offsetParentElement(element) {
    var docElement = element.ownerDocument;
    var offsetParent = element.offsetParent || docElement;
    if (nodeName(offsetParent, '#document')) return docElement.documentElement;
    while (offsetParent && !nodeName(offsetParent, 'html') && fn.css(offsetParent, 'position') === 'static') {
      offsetParent = offsetParent.offsetParent;
    }
    return offsetParent || docElement.documentElement;
  }
  return fn;
});

exports.default = MODULE_NAME;

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.alertTpl = undefined;

var _alert = __webpack_require__(34);

var _alert2 = _interopRequireDefault(_alert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.alertTpl = _alert2.default;

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _angular = __webpack_require__(0);

var _angular2 = _interopRequireDefault(_angular);

var _alertTpl = __webpack_require__(35);

var _alertTpl2 = _interopRequireDefault(_alertTpl);

var _alert = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_angular2.default.module(_alert.MODULE_NAME).run(['$templateCache', function ($templateCache) {
  $templateCache.put(_alertTpl2.default);
}]);

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

var path = 'alert/alert.tpl.html';
var html = "<div role=alert class=alert ng-class=\"[type ? 'alert-' + type : null]\"> <button type=button class=close ng-if=dismissable ng-click=$hide()>&times;</button> <span ng-if=title> <strong ng-bind=title></strong>&nbsp;<span ng-bind-html=content></span> </span> <span ng-if=!title ng-bind-html=content></span> </div> ";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = __webpack_require__(0);

var _angular2 = _interopRequireDefault(_angular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

bsCompilerService.$inject = ['$q', '$http', '$injector', '$compile', '$controller', '$templateCache'];
var MODULE_NAME = 'mgcrea.ngStrap.core';

// NOTICE: This file was forked from the angular-material project (github.com/angular/material)
// MIT Licensed - Copyright (c) 2014-2015 Google, Inc. http://angularjs.org

_angular2.default.module(MODULE_NAME, []).service('$bsCompiler', bsCompilerService);

function bsCompilerService($q, $http, $injector, $compile, $controller, $templateCache) {

  /*
   * @ngdoc service
   * @name $bsCompiler
   * @module material.core
   * @description
   * The $bsCompiler service is an abstraction of angular's compiler, that allows the developer
   * to easily compile an element with a templateUrl, controller, and locals.
   *
   * @usage
   * <hljs lang="js">
   * $bsCompiler.compile({
   *   templateUrl: 'modal.html',
   *   controller: 'ModalCtrl',
   *   locals: {
   *     modal: myModalInstance;
   *   }
   * }).then(function(compileData) {
   *   compileData.element; // modal.html's template in an element
   *   compileData.link(myScope); //attach controller & scope to element
   * });
   * </hljs>
   */

  /*
   * @ngdoc method
   * @name $bsCompiler#compile
   * @description A helper to compile an HTML template/templateUrl with a given controller,
   * locals, and scope.
   * @param {object} options An options object, with the following properties:
   *
   *    - `controller` - `{(string=|function()=}` Controller fn that should be associated with
   *      newly created scope or the name of a registered controller if passed as a string.
   *    - `controllerAs` - `{string=}` A controller alias name. If present the controller will be
   *      published to scope under the `controllerAs` name.
   *    - `template` - `{string=}` An html template as a string.
   *    - `templateUrl` - `{string=}` A path to an html template.
   *    - `transformTemplate` - `{function(template)=}` A function which transforms the template after
   *      it is loaded. It will be given the template string as a parameter, and should
   *      return a a new string representing the transformed template.
   *    - `resolve` - `{Object.<string, function>=}` - An optional map of dependencies which should
   *      be injected into the controller. If any of these dependencies are promises, the compiler
   *      will wait for them all to be resolved, or if one is rejected before the controller is
   *      instantiated `compile()` will fail..
   *      * `key` - `{string}`: a name of a dependency to be injected into the controller.
   *      * `factory` - `{string|function}`: If `string` then it is an alias for a service.
   *        Otherwise if function, then it is injected and the return value is treated as the
   *        dependency. If the result is a promise, it is resolved before its value is
   *        injected into the controller.
   *
   * @returns {object=} promise A promise, which will be resolved with a `compileData` object.
   * `compileData` has the following properties:
   *
   *   - `element` - `{element}`: an uncompiled element matching the provided template.
   *   - `link` - `{function(scope)}`: A link function, which, when called, will compile
   *     the element and instantiate the provided controller (if given).
   *   - `locals` - `{object}`: The locals which will be passed into the controller once `link` is
   *     called. If `bindToController` is true, they will be coppied to the ctrl instead
   *   - `bindToController` - `bool`: bind the locals to the controller, instead of passing them in.
   */
  this.compile = function (options) {

    if (options.template && /\.html$/.test(options.template)) {
      console.warn('Deprecated use of `template` option to pass a file. Please use the `templateUrl` option instead.');
      options.templateUrl = options.template;
      options.template = '';
    }

    var templateUrl = options.templateUrl;
    var template = options.template || '';
    var controller = options.controller;
    var controllerAs = options.controllerAs;
    var resolve = options.resolve || {};
    var locals = options.locals || {};
    var transformTemplate = options.transformTemplate || _angular2.default.identity;
    var bindToController = options.bindToController;

    // Take resolve values and invoke them.
    // Resolves can either be a string (value: 'MyRegisteredAngularConst'),
    // or an invokable 'factory' of sorts: (value: function ValueGetter($dependency) {})
    _angular2.default.forEach(resolve, function (value, key) {
      if (_angular2.default.isString(value)) {
        resolve[key] = $injector.get(value);
      } else {
        resolve[key] = $injector.invoke(value);
      }
    });
    // Add the locals, which are just straight values to inject
    // eg locals: { three: 3 }, will inject three into the controller
    _angular2.default.extend(resolve, locals);

    if (template) {
      resolve.$template = $q.when(template);
    } else if (templateUrl) {
      resolve.$template = fetchTemplate(templateUrl);
    } else {
      throw new Error('Missing `template` / `templateUrl` option.');
    }

    if (options.titleTemplate) {
      resolve.$template = $q.all([resolve.$template, fetchTemplate(options.titleTemplate)]).then(function (templates) {
        var templateEl = _angular2.default.element(templates[0]);
        findElement('[ng-bind="title"]', templateEl[0]).removeAttr('ng-bind').html(templates[1]);
        return templateEl[0].outerHTML;
      });
    }

    if (options.contentTemplate) {
      // TODO(mgcrea): deprecate?
      resolve.$template = $q.all([resolve.$template, fetchTemplate(options.contentTemplate)]).then(function (templates) {
        var templateEl = _angular2.default.element(templates[0]);
        var contentEl = findElement('[ng-bind="content"]', templateEl[0]).removeAttr('ng-bind').html(templates[1]);
        // Drop the default footer as you probably don't want it if you use a custom contentTemplate
        if (!options.templateUrl) contentEl.next().remove();
        return templateEl[0].outerHTML;
      });
    }

    // Wait for all the resolves to finish if they are promises
    return $q.all(resolve).then(function (locals) {

      var template = transformTemplate(locals.$template);
      if (options.html) {
        template = template.replace(/ng-bind="/ig, 'ng-bind-html="');
      }
      // var element = options.element || angular.element('<div>').html(template.trim()).contents();
      var element = _angular2.default.element('<div>').html(template.trim()).contents();
      var linkFn = $compile(element);

      // Return a linking function that can be used later when the element is ready
      return {
        locals: locals,
        element: element,
        link: function link(scope) {
          locals.$scope = scope;

          // Instantiate controller if it exists, because we have scope
          if (controller) {
            var invokeCtrl = $controller(controller, locals, true);
            if (bindToController) {
              _angular2.default.extend(invokeCtrl.instance, locals);
            }
            // Support angular@~1.2 invokeCtrl
            var ctrl = _angular2.default.isObject(invokeCtrl) ? invokeCtrl : invokeCtrl();
            // See angular-route source for this logic
            element.data('$ngControllerController', ctrl);
            element.children().data('$ngControllerController', ctrl);

            if (controllerAs) {
              scope[controllerAs] = ctrl;
            }
          }

          return linkFn.apply(null, arguments);
        }
      };
    });
  };

  function findElement(query, element) {
    return _angular2.default.element((element || document).querySelectorAll(query));
  }

  var fetchPromises = {};
  function fetchTemplate(template) {
    if (fetchPromises[template]) return fetchPromises[template];
    return fetchPromises[template] = $http.get(template, { cache: $templateCache }).then(function (res) {
      return res.data;
    });
  }
}

exports.default = MODULE_NAME;

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MODULE_NAME = undefined;

var _angular = __webpack_require__(0);

var _angular2 = _interopRequireDefault(_angular);

var _modal = __webpack_require__(2);

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MODULE_NAME = 'mgcrea.ngStrap.alert';

_angular2.default.module(MODULE_NAME, [_modal2.default]).provider('$alert', function () {
  var defaults = this.defaults = {
    animation: 'am-fade',
    prefixClass: 'alert',
    prefixEvent: 'alert',
    placement: null,
    templateUrl: 'alert/alert.tpl.html',
    container: false,
    element: null,
    backdrop: false,
    keyboard: true,
    show: true,
    // Specific options
    duration: false,
    type: false,
    dismissable: true
  };

  this.$get = ['$modal', '$timeout', function ($modal, $timeout) {
    function AlertFactory(config) {
      var $alert = {};

      // Common vars
      var options = _angular2.default.extend({}, defaults, config);

      $alert = $modal(options);

      // Support scope as string options [/*title, content, */ type, dismissable]
      $alert.$scope.dismissable = !!options.dismissable;
      if (options.type) {
        $alert.$scope.type = options.type;
      }

      // Support auto-close duration
      var show = $alert.show;
      if (options.duration) {
        $alert.show = function () {
          show();
          $timeout(function () {
            $alert.hide();
          }, options.duration * 1000);
        };
      }

      return $alert;
    }

    return AlertFactory;
  }];
}).directive('bsAlert', ['$window', '$sce', '$alert', function ($window, $sce, $alert) {
  return {
    restrict: 'EAC',
    scope: true,
    link: function postLink(scope, element, attr, transclusion) {
      // Directive options
      var options = { scope: scope, element: element, show: false };
      _angular2.default.forEach(['template', 'templateUrl', 'controller', 'controllerAs', 'placement', 'keyboard', 'html', 'container', 'animation', 'duration', 'dismissable'], function (key) {
        if (_angular2.default.isDefined(attr[key])) options[key] = attr[key];
      });

      // use string regex match boolean attr falsy values, leave truthy values be
      var falseValueRegExp = /^(false|0|)$/i;
      _angular2.default.forEach(['keyboard', 'html', 'container', 'dismissable'], function (key) {
        if (_angular2.default.isDefined(attr[key]) && falseValueRegExp.test(attr[key])) options[key] = false;
      });

      // bind functions from the attrs to the show and hide events
      _angular2.default.forEach(['onBeforeShow', 'onShow', 'onBeforeHide', 'onHide'], function (key) {
        var bsKey = 'bs' + key.charAt(0).toUpperCase() + key.slice(1);
        if (_angular2.default.isDefined(attr[bsKey])) {
          options[key] = scope.$eval(attr[bsKey]);
        }
      });

      // overwrite inherited title value when no value specified
      // fix for angular 1.3.1 531a8de72c439d8ddd064874bf364c00cedabb11
      if (!scope.hasOwnProperty('title')) {
        scope.title = '';
      }

      // Support scope as data-attrs
      _angular2.default.forEach(['title', 'content', 'type'], function (key) {
        if (attr[key]) {
          attr.$observe(key, function (newValue, oldValue) {
            scope[key] = $sce.trustAsHtml(newValue);
          });
        }
      });

      // Support scope as an object
      if (attr.bsAlert) {
        scope.$watch(attr.bsAlert, function (newValue, oldValue) {
          if (_angular2.default.isObject(newValue)) {
            _angular2.default.extend(scope, newValue);
          } else {
            scope.content = newValue;
          }
        }, true);
      }

      // Initialize alert
      var alert = $alert(options);

      // Trigger
      element.on(attr.trigger || 'click', alert.toggle);

      // Garbage collection
      scope.$on('$destroy', function () {
        if (alert) alert.destroy();
        options = null;
        alert = null;
      });
    }
  };
}]);

exports.MODULE_NAME = MODULE_NAME;
exports.default = MODULE_NAME;

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

var path = 'modal/modal.tpl.html';
var html = "<div class=modal tabindex=-1 role=dialog aria-hidden=true> <div class=modal-dialog> <div class=modal-content> <div class=modal-header ng-show=title> <h5 class=modal-title ng-bind=title></h5> <button type=button role=button class=close aria-label=Close ng-click=$hide()><span aria-hidden=true>&times;</span></button> </div> <div class=modal-body ng-bind=content></div> <div class=modal-footer> <button type=button class=\"btn btn-default\" ng-click=$hide() aria-label=Close>Close</button> </div> </div> </div> </div> ";
window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
module.exports = path;

/***/ })

/******/ });
});