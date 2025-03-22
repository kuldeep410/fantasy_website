/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/cropperjs/dist/cropper.js":
/*!************************************************!*\
  !*** ./node_modules/cropperjs/dist/cropper.js ***!
  \************************************************/
/***/ (function(module) {

/*!
 * Cropper.js v1.6.2
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2024-04-21T07:43:05.335Z
 */

(function (global, factory) {
   true ? module.exports = factory() :
  0;
})(this, (function () { 'use strict';

  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
        _defineProperty(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var IS_BROWSER = typeof window !== 'undefined' && typeof window.document !== 'undefined';
  var WINDOW = IS_BROWSER ? window : {};
  var IS_TOUCH_DEVICE = IS_BROWSER && WINDOW.document.documentElement ? 'ontouchstart' in WINDOW.document.documentElement : false;
  var HAS_POINTER_EVENT = IS_BROWSER ? 'PointerEvent' in WINDOW : false;
  var NAMESPACE = 'cropper';

  // Actions
  var ACTION_ALL = 'all';
  var ACTION_CROP = 'crop';
  var ACTION_MOVE = 'move';
  var ACTION_ZOOM = 'zoom';
  var ACTION_EAST = 'e';
  var ACTION_WEST = 'w';
  var ACTION_SOUTH = 's';
  var ACTION_NORTH = 'n';
  var ACTION_NORTH_EAST = 'ne';
  var ACTION_NORTH_WEST = 'nw';
  var ACTION_SOUTH_EAST = 'se';
  var ACTION_SOUTH_WEST = 'sw';

  // Classes
  var CLASS_CROP = "".concat(NAMESPACE, "-crop");
  var CLASS_DISABLED = "".concat(NAMESPACE, "-disabled");
  var CLASS_HIDDEN = "".concat(NAMESPACE, "-hidden");
  var CLASS_HIDE = "".concat(NAMESPACE, "-hide");
  var CLASS_INVISIBLE = "".concat(NAMESPACE, "-invisible");
  var CLASS_MODAL = "".concat(NAMESPACE, "-modal");
  var CLASS_MOVE = "".concat(NAMESPACE, "-move");

  // Data keys
  var DATA_ACTION = "".concat(NAMESPACE, "Action");
  var DATA_PREVIEW = "".concat(NAMESPACE, "Preview");

  // Drag modes
  var DRAG_MODE_CROP = 'crop';
  var DRAG_MODE_MOVE = 'move';
  var DRAG_MODE_NONE = 'none';

  // Events
  var EVENT_CROP = 'crop';
  var EVENT_CROP_END = 'cropend';
  var EVENT_CROP_MOVE = 'cropmove';
  var EVENT_CROP_START = 'cropstart';
  var EVENT_DBLCLICK = 'dblclick';
  var EVENT_TOUCH_START = IS_TOUCH_DEVICE ? 'touchstart' : 'mousedown';
  var EVENT_TOUCH_MOVE = IS_TOUCH_DEVICE ? 'touchmove' : 'mousemove';
  var EVENT_TOUCH_END = IS_TOUCH_DEVICE ? 'touchend touchcancel' : 'mouseup';
  var EVENT_POINTER_DOWN = HAS_POINTER_EVENT ? 'pointerdown' : EVENT_TOUCH_START;
  var EVENT_POINTER_MOVE = HAS_POINTER_EVENT ? 'pointermove' : EVENT_TOUCH_MOVE;
  var EVENT_POINTER_UP = HAS_POINTER_EVENT ? 'pointerup pointercancel' : EVENT_TOUCH_END;
  var EVENT_READY = 'ready';
  var EVENT_RESIZE = 'resize';
  var EVENT_WHEEL = 'wheel';
  var EVENT_ZOOM = 'zoom';

  // Mime types
  var MIME_TYPE_JPEG = 'image/jpeg';

  // RegExps
  var REGEXP_ACTIONS = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/;
  var REGEXP_DATA_URL = /^data:/;
  var REGEXP_DATA_URL_JPEG = /^data:image\/jpeg;base64,/;
  var REGEXP_TAG_NAME = /^img|canvas$/i;

  // Misc
  // Inspired by the default width and height of a canvas element.
  var MIN_CONTAINER_WIDTH = 200;
  var MIN_CONTAINER_HEIGHT = 100;

  var DEFAULTS = {
    // Define the view mode of the cropper
    viewMode: 0,
    // 0, 1, 2, 3

    // Define the dragging mode of the cropper
    dragMode: DRAG_MODE_CROP,
    // 'crop', 'move' or 'none'

    // Define the initial aspect ratio of the crop box
    initialAspectRatio: NaN,
    // Define the aspect ratio of the crop box
    aspectRatio: NaN,
    // An object with the previous cropping result data
    data: null,
    // A selector for adding extra containers to preview
    preview: '',
    // Re-render the cropper when resize the window
    responsive: true,
    // Restore the cropped area after resize the window
    restore: true,
    // Check if the current image is a cross-origin image
    checkCrossOrigin: true,
    // Check the current image's Exif Orientation information
    checkOrientation: true,
    // Show the black modal
    modal: true,
    // Show the dashed lines for guiding
    guides: true,
    // Show the center indicator for guiding
    center: true,
    // Show the white modal to highlight the crop box
    highlight: true,
    // Show the grid background
    background: true,
    // Enable to crop the image automatically when initialize
    autoCrop: true,
    // Define the percentage of automatic cropping area when initializes
    autoCropArea: 0.8,
    // Enable to move the image
    movable: true,
    // Enable to rotate the image
    rotatable: true,
    // Enable to scale the image
    scalable: true,
    // Enable to zoom the image
    zoomable: true,
    // Enable to zoom the image by dragging touch
    zoomOnTouch: true,
    // Enable to zoom the image by wheeling mouse
    zoomOnWheel: true,
    // Define zoom ratio when zoom the image by wheeling mouse
    wheelZoomRatio: 0.1,
    // Enable to move the crop box
    cropBoxMovable: true,
    // Enable to resize the crop box
    cropBoxResizable: true,
    // Toggle drag mode between "crop" and "move" when click twice on the cropper
    toggleDragModeOnDblclick: true,
    // Size limitation
    minCanvasWidth: 0,
    minCanvasHeight: 0,
    minCropBoxWidth: 0,
    minCropBoxHeight: 0,
    minContainerWidth: MIN_CONTAINER_WIDTH,
    minContainerHeight: MIN_CONTAINER_HEIGHT,
    // Shortcuts of events
    ready: null,
    cropstart: null,
    cropmove: null,
    cropend: null,
    crop: null,
    zoom: null
  };

  var TEMPLATE = '<div class="cropper-container" touch-action="none">' + '<div class="cropper-wrap-box">' + '<div class="cropper-canvas"></div>' + '</div>' + '<div class="cropper-drag-box"></div>' + '<div class="cropper-crop-box">' + '<span class="cropper-view-box"></span>' + '<span class="cropper-dashed dashed-h"></span>' + '<span class="cropper-dashed dashed-v"></span>' + '<span class="cropper-center"></span>' + '<span class="cropper-face"></span>' + '<span class="cropper-line line-e" data-cropper-action="e"></span>' + '<span class="cropper-line line-n" data-cropper-action="n"></span>' + '<span class="cropper-line line-w" data-cropper-action="w"></span>' + '<span class="cropper-line line-s" data-cropper-action="s"></span>' + '<span class="cropper-point point-e" data-cropper-action="e"></span>' + '<span class="cropper-point point-n" data-cropper-action="n"></span>' + '<span class="cropper-point point-w" data-cropper-action="w"></span>' + '<span class="cropper-point point-s" data-cropper-action="s"></span>' + '<span class="cropper-point point-ne" data-cropper-action="ne"></span>' + '<span class="cropper-point point-nw" data-cropper-action="nw"></span>' + '<span class="cropper-point point-sw" data-cropper-action="sw"></span>' + '<span class="cropper-point point-se" data-cropper-action="se"></span>' + '</div>' + '</div>';

  /**
   * Check if the given value is not a number.
   */
  var isNaN = Number.isNaN || WINDOW.isNaN;

  /**
   * Check if the given value is a number.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a number, else `false`.
   */
  function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
  }

  /**
   * Check if the given value is a positive number.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a positive number, else `false`.
   */
  var isPositiveNumber = function isPositiveNumber(value) {
    return value > 0 && value < Infinity;
  };

  /**
   * Check if the given value is undefined.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is undefined, else `false`.
   */
  function isUndefined(value) {
    return typeof value === 'undefined';
  }

  /**
   * Check if the given value is an object.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is an object, else `false`.
   */
  function isObject(value) {
    return _typeof(value) === 'object' && value !== null;
  }
  var hasOwnProperty = Object.prototype.hasOwnProperty;

  /**
   * Check if the given value is a plain object.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a plain object, else `false`.
   */
  function isPlainObject(value) {
    if (!isObject(value)) {
      return false;
    }
    try {
      var _constructor = value.constructor;
      var prototype = _constructor.prototype;
      return _constructor && prototype && hasOwnProperty.call(prototype, 'isPrototypeOf');
    } catch (error) {
      return false;
    }
  }

  /**
   * Check if the given value is a function.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a function, else `false`.
   */
  function isFunction(value) {
    return typeof value === 'function';
  }
  var slice = Array.prototype.slice;

  /**
   * Convert array-like or iterable object to an array.
   * @param {*} value - The value to convert.
   * @returns {Array} Returns a new array.
   */
  function toArray(value) {
    return Array.from ? Array.from(value) : slice.call(value);
  }

  /**
   * Iterate the given data.
   * @param {*} data - The data to iterate.
   * @param {Function} callback - The process function for each element.
   * @returns {*} The original data.
   */
  function forEach(data, callback) {
    if (data && isFunction(callback)) {
      if (Array.isArray(data) || isNumber(data.length) /* array-like */) {
        toArray(data).forEach(function (value, key) {
          callback.call(data, value, key, data);
        });
      } else if (isObject(data)) {
        Object.keys(data).forEach(function (key) {
          callback.call(data, data[key], key, data);
        });
      }
    }
    return data;
  }

  /**
   * Extend the given object.
   * @param {*} target - The target object to extend.
   * @param {*} args - The rest objects for merging to the target object.
   * @returns {Object} The extended object.
   */
  var assign = Object.assign || function assign(target) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (isObject(target) && args.length > 0) {
      args.forEach(function (arg) {
        if (isObject(arg)) {
          Object.keys(arg).forEach(function (key) {
            target[key] = arg[key];
          });
        }
      });
    }
    return target;
  };
  var REGEXP_DECIMALS = /\.\d*(?:0|9){12}\d*$/;

  /**
   * Normalize decimal number.
   * Check out {@link https://0.30000000000000004.com/}
   * @param {number} value - The value to normalize.
   * @param {number} [times=100000000000] - The times for normalizing.
   * @returns {number} Returns the normalized number.
   */
  function normalizeDecimalNumber(value) {
    var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100000000000;
    return REGEXP_DECIMALS.test(value) ? Math.round(value * times) / times : value;
  }
  var REGEXP_SUFFIX = /^width|height|left|top|marginLeft|marginTop$/;

  /**
   * Apply styles to the given element.
   * @param {Element} element - The target element.
   * @param {Object} styles - The styles for applying.
   */
  function setStyle(element, styles) {
    var style = element.style;
    forEach(styles, function (value, property) {
      if (REGEXP_SUFFIX.test(property) && isNumber(value)) {
        value = "".concat(value, "px");
      }
      style[property] = value;
    });
  }

  /**
   * Check if the given element has a special class.
   * @param {Element} element - The element to check.
   * @param {string} value - The class to search.
   * @returns {boolean} Returns `true` if the special class was found.
   */
  function hasClass(element, value) {
    return element.classList ? element.classList.contains(value) : element.className.indexOf(value) > -1;
  }

  /**
   * Add classes to the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be added.
   */
  function addClass(element, value) {
    if (!value) {
      return;
    }
    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        addClass(elem, value);
      });
      return;
    }
    if (element.classList) {
      element.classList.add(value);
      return;
    }
    var className = element.className.trim();
    if (!className) {
      element.className = value;
    } else if (className.indexOf(value) < 0) {
      element.className = "".concat(className, " ").concat(value);
    }
  }

  /**
   * Remove classes from the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be removed.
   */
  function removeClass(element, value) {
    if (!value) {
      return;
    }
    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        removeClass(elem, value);
      });
      return;
    }
    if (element.classList) {
      element.classList.remove(value);
      return;
    }
    if (element.className.indexOf(value) >= 0) {
      element.className = element.className.replace(value, '');
    }
  }

  /**
   * Add or remove classes from the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be toggled.
   * @param {boolean} added - Add only.
   */
  function toggleClass(element, value, added) {
    if (!value) {
      return;
    }
    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        toggleClass(elem, value, added);
      });
      return;
    }

    // IE10-11 doesn't support the second parameter of `classList.toggle`
    if (added) {
      addClass(element, value);
    } else {
      removeClass(element, value);
    }
  }
  var REGEXP_CAMEL_CASE = /([a-z\d])([A-Z])/g;

  /**
   * Transform the given string from camelCase to kebab-case
   * @param {string} value - The value to transform.
   * @returns {string} The transformed value.
   */
  function toParamCase(value) {
    return value.replace(REGEXP_CAMEL_CASE, '$1-$2').toLowerCase();
  }

  /**
   * Get data from the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to get.
   * @returns {string} The data value.
   */
  function getData(element, name) {
    if (isObject(element[name])) {
      return element[name];
    }
    if (element.dataset) {
      return element.dataset[name];
    }
    return element.getAttribute("data-".concat(toParamCase(name)));
  }

  /**
   * Set data to the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to set.
   * @param {string} data - The data value.
   */
  function setData(element, name, data) {
    if (isObject(data)) {
      element[name] = data;
    } else if (element.dataset) {
      element.dataset[name] = data;
    } else {
      element.setAttribute("data-".concat(toParamCase(name)), data);
    }
  }

  /**
   * Remove data from the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to remove.
   */
  function removeData(element, name) {
    if (isObject(element[name])) {
      try {
        delete element[name];
      } catch (error) {
        element[name] = undefined;
      }
    } else if (element.dataset) {
      // #128 Safari not allows to delete dataset property
      try {
        delete element.dataset[name];
      } catch (error) {
        element.dataset[name] = undefined;
      }
    } else {
      element.removeAttribute("data-".concat(toParamCase(name)));
    }
  }
  var REGEXP_SPACES = /\s\s*/;
  var onceSupported = function () {
    var supported = false;
    if (IS_BROWSER) {
      var once = false;
      var listener = function listener() {};
      var options = Object.defineProperty({}, 'once', {
        get: function get() {
          supported = true;
          return once;
        },
        /**
         * This setter can fix a `TypeError` in strict mode
         * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only}
         * @param {boolean} value - The value to set
         */
        set: function set(value) {
          once = value;
        }
      });
      WINDOW.addEventListener('test', listener, options);
      WINDOW.removeEventListener('test', listener, options);
    }
    return supported;
  }();

  /**
   * Remove event listener from the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Function} listener - The event listener.
   * @param {Object} options - The event options.
   */
  function removeListener(element, type, listener) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var handler = listener;
    type.trim().split(REGEXP_SPACES).forEach(function (event) {
      if (!onceSupported) {
        var listeners = element.listeners;
        if (listeners && listeners[event] && listeners[event][listener]) {
          handler = listeners[event][listener];
          delete listeners[event][listener];
          if (Object.keys(listeners[event]).length === 0) {
            delete listeners[event];
          }
          if (Object.keys(listeners).length === 0) {
            delete element.listeners;
          }
        }
      }
      element.removeEventListener(event, handler, options);
    });
  }

  /**
   * Add event listener to the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Function} listener - The event listener.
   * @param {Object} options - The event options.
   */
  function addListener(element, type, listener) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var _handler = listener;
    type.trim().split(REGEXP_SPACES).forEach(function (event) {
      if (options.once && !onceSupported) {
        var _element$listeners = element.listeners,
          listeners = _element$listeners === void 0 ? {} : _element$listeners;
        _handler = function handler() {
          delete listeners[event][listener];
          element.removeEventListener(event, _handler, options);
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          listener.apply(element, args);
        };
        if (!listeners[event]) {
          listeners[event] = {};
        }
        if (listeners[event][listener]) {
          element.removeEventListener(event, listeners[event][listener], options);
        }
        listeners[event][listener] = _handler;
        element.listeners = listeners;
      }
      element.addEventListener(event, _handler, options);
    });
  }

  /**
   * Dispatch event on the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Object} data - The additional event data.
   * @returns {boolean} Indicate if the event is default prevented or not.
   */
  function dispatchEvent(element, type, data) {
    var event;

    // Event and CustomEvent on IE9-11 are global objects, not constructors
    if (isFunction(Event) && isFunction(CustomEvent)) {
      event = new CustomEvent(type, {
        detail: data,
        bubbles: true,
        cancelable: true
      });
    } else {
      event = document.createEvent('CustomEvent');
      event.initCustomEvent(type, true, true, data);
    }
    return element.dispatchEvent(event);
  }

  /**
   * Get the offset base on the document.
   * @param {Element} element - The target element.
   * @returns {Object} The offset data.
   */
  function getOffset(element) {
    var box = element.getBoundingClientRect();
    return {
      left: box.left + (window.pageXOffset - document.documentElement.clientLeft),
      top: box.top + (window.pageYOffset - document.documentElement.clientTop)
    };
  }
  var location = WINDOW.location;
  var REGEXP_ORIGINS = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;

  /**
   * Check if the given URL is a cross origin URL.
   * @param {string} url - The target URL.
   * @returns {boolean} Returns `true` if the given URL is a cross origin URL, else `false`.
   */
  function isCrossOriginURL(url) {
    var parts = url.match(REGEXP_ORIGINS);
    return parts !== null && (parts[1] !== location.protocol || parts[2] !== location.hostname || parts[3] !== location.port);
  }

  /**
   * Add timestamp to the given URL.
   * @param {string} url - The target URL.
   * @returns {string} The result URL.
   */
  function addTimestamp(url) {
    var timestamp = "timestamp=".concat(new Date().getTime());
    return url + (url.indexOf('?') === -1 ? '?' : '&') + timestamp;
  }

  /**
   * Get transforms base on the given object.
   * @param {Object} obj - The target object.
   * @returns {string} A string contains transform values.
   */
  function getTransforms(_ref) {
    var rotate = _ref.rotate,
      scaleX = _ref.scaleX,
      scaleY = _ref.scaleY,
      translateX = _ref.translateX,
      translateY = _ref.translateY;
    var values = [];
    if (isNumber(translateX) && translateX !== 0) {
      values.push("translateX(".concat(translateX, "px)"));
    }
    if (isNumber(translateY) && translateY !== 0) {
      values.push("translateY(".concat(translateY, "px)"));
    }

    // Rotate should come first before scale to match orientation transform
    if (isNumber(rotate) && rotate !== 0) {
      values.push("rotate(".concat(rotate, "deg)"));
    }
    if (isNumber(scaleX) && scaleX !== 1) {
      values.push("scaleX(".concat(scaleX, ")"));
    }
    if (isNumber(scaleY) && scaleY !== 1) {
      values.push("scaleY(".concat(scaleY, ")"));
    }
    var transform = values.length ? values.join(' ') : 'none';
    return {
      WebkitTransform: transform,
      msTransform: transform,
      transform: transform
    };
  }

  /**
   * Get the max ratio of a group of pointers.
   * @param {string} pointers - The target pointers.
   * @returns {number} The result ratio.
   */
  function getMaxZoomRatio(pointers) {
    var pointers2 = _objectSpread2({}, pointers);
    var maxRatio = 0;
    forEach(pointers, function (pointer, pointerId) {
      delete pointers2[pointerId];
      forEach(pointers2, function (pointer2) {
        var x1 = Math.abs(pointer.startX - pointer2.startX);
        var y1 = Math.abs(pointer.startY - pointer2.startY);
        var x2 = Math.abs(pointer.endX - pointer2.endX);
        var y2 = Math.abs(pointer.endY - pointer2.endY);
        var z1 = Math.sqrt(x1 * x1 + y1 * y1);
        var z2 = Math.sqrt(x2 * x2 + y2 * y2);
        var ratio = (z2 - z1) / z1;
        if (Math.abs(ratio) > Math.abs(maxRatio)) {
          maxRatio = ratio;
        }
      });
    });
    return maxRatio;
  }

  /**
   * Get a pointer from an event object.
   * @param {Object} event - The target event object.
   * @param {boolean} endOnly - Indicates if only returns the end point coordinate or not.
   * @returns {Object} The result pointer contains start and/or end point coordinates.
   */
  function getPointer(_ref2, endOnly) {
    var pageX = _ref2.pageX,
      pageY = _ref2.pageY;
    var end = {
      endX: pageX,
      endY: pageY
    };
    return endOnly ? end : _objectSpread2({
      startX: pageX,
      startY: pageY
    }, end);
  }

  /**
   * Get the center point coordinate of a group of pointers.
   * @param {Object} pointers - The target pointers.
   * @returns {Object} The center point coordinate.
   */
  function getPointersCenter(pointers) {
    var pageX = 0;
    var pageY = 0;
    var count = 0;
    forEach(pointers, function (_ref3) {
      var startX = _ref3.startX,
        startY = _ref3.startY;
      pageX += startX;
      pageY += startY;
      count += 1;
    });
    pageX /= count;
    pageY /= count;
    return {
      pageX: pageX,
      pageY: pageY
    };
  }

  /**
   * Get the max sizes in a rectangle under the given aspect ratio.
   * @param {Object} data - The original sizes.
   * @param {string} [type='contain'] - The adjust type.
   * @returns {Object} The result sizes.
   */
  function getAdjustedSizes(_ref4) {
    var aspectRatio = _ref4.aspectRatio,
      height = _ref4.height,
      width = _ref4.width;
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'contain';
    var isValidWidth = isPositiveNumber(width);
    var isValidHeight = isPositiveNumber(height);
    if (isValidWidth && isValidHeight) {
      var adjustedWidth = height * aspectRatio;
      if (type === 'contain' && adjustedWidth > width || type === 'cover' && adjustedWidth < width) {
        height = width / aspectRatio;
      } else {
        width = height * aspectRatio;
      }
    } else if (isValidWidth) {
      height = width / aspectRatio;
    } else if (isValidHeight) {
      width = height * aspectRatio;
    }
    return {
      width: width,
      height: height
    };
  }

  /**
   * Get the new sizes of a rectangle after rotated.
   * @param {Object} data - The original sizes.
   * @returns {Object} The result sizes.
   */
  function getRotatedSizes(_ref5) {
    var width = _ref5.width,
      height = _ref5.height,
      degree = _ref5.degree;
    degree = Math.abs(degree) % 180;
    if (degree === 90) {
      return {
        width: height,
        height: width
      };
    }
    var arc = degree % 90 * Math.PI / 180;
    var sinArc = Math.sin(arc);
    var cosArc = Math.cos(arc);
    var newWidth = width * cosArc + height * sinArc;
    var newHeight = width * sinArc + height * cosArc;
    return degree > 90 ? {
      width: newHeight,
      height: newWidth
    } : {
      width: newWidth,
      height: newHeight
    };
  }

  /**
   * Get a canvas which drew the given image.
   * @param {HTMLImageElement} image - The image for drawing.
   * @param {Object} imageData - The image data.
   * @param {Object} canvasData - The canvas data.
   * @param {Object} options - The options.
   * @returns {HTMLCanvasElement} The result canvas.
   */
  function getSourceCanvas(image, _ref6, _ref7, _ref8) {
    var imageAspectRatio = _ref6.aspectRatio,
      imageNaturalWidth = _ref6.naturalWidth,
      imageNaturalHeight = _ref6.naturalHeight,
      _ref6$rotate = _ref6.rotate,
      rotate = _ref6$rotate === void 0 ? 0 : _ref6$rotate,
      _ref6$scaleX = _ref6.scaleX,
      scaleX = _ref6$scaleX === void 0 ? 1 : _ref6$scaleX,
      _ref6$scaleY = _ref6.scaleY,
      scaleY = _ref6$scaleY === void 0 ? 1 : _ref6$scaleY;
    var aspectRatio = _ref7.aspectRatio,
      naturalWidth = _ref7.naturalWidth,
      naturalHeight = _ref7.naturalHeight;
    var _ref8$fillColor = _ref8.fillColor,
      fillColor = _ref8$fillColor === void 0 ? 'transparent' : _ref8$fillColor,
      _ref8$imageSmoothingE = _ref8.imageSmoothingEnabled,
      imageSmoothingEnabled = _ref8$imageSmoothingE === void 0 ? true : _ref8$imageSmoothingE,
      _ref8$imageSmoothingQ = _ref8.imageSmoothingQuality,
      imageSmoothingQuality = _ref8$imageSmoothingQ === void 0 ? 'low' : _ref8$imageSmoothingQ,
      _ref8$maxWidth = _ref8.maxWidth,
      maxWidth = _ref8$maxWidth === void 0 ? Infinity : _ref8$maxWidth,
      _ref8$maxHeight = _ref8.maxHeight,
      maxHeight = _ref8$maxHeight === void 0 ? Infinity : _ref8$maxHeight,
      _ref8$minWidth = _ref8.minWidth,
      minWidth = _ref8$minWidth === void 0 ? 0 : _ref8$minWidth,
      _ref8$minHeight = _ref8.minHeight,
      minHeight = _ref8$minHeight === void 0 ? 0 : _ref8$minHeight;
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var maxSizes = getAdjustedSizes({
      aspectRatio: aspectRatio,
      width: maxWidth,
      height: maxHeight
    });
    var minSizes = getAdjustedSizes({
      aspectRatio: aspectRatio,
      width: minWidth,
      height: minHeight
    }, 'cover');
    var width = Math.min(maxSizes.width, Math.max(minSizes.width, naturalWidth));
    var height = Math.min(maxSizes.height, Math.max(minSizes.height, naturalHeight));

    // Note: should always use image's natural sizes for drawing as
    // imageData.naturalWidth === canvasData.naturalHeight when rotate % 180 === 90
    var destMaxSizes = getAdjustedSizes({
      aspectRatio: imageAspectRatio,
      width: maxWidth,
      height: maxHeight
    });
    var destMinSizes = getAdjustedSizes({
      aspectRatio: imageAspectRatio,
      width: minWidth,
      height: minHeight
    }, 'cover');
    var destWidth = Math.min(destMaxSizes.width, Math.max(destMinSizes.width, imageNaturalWidth));
    var destHeight = Math.min(destMaxSizes.height, Math.max(destMinSizes.height, imageNaturalHeight));
    var params = [-destWidth / 2, -destHeight / 2, destWidth, destHeight];
    canvas.width = normalizeDecimalNumber(width);
    canvas.height = normalizeDecimalNumber(height);
    context.fillStyle = fillColor;
    context.fillRect(0, 0, width, height);
    context.save();
    context.translate(width / 2, height / 2);
    context.rotate(rotate * Math.PI / 180);
    context.scale(scaleX, scaleY);
    context.imageSmoothingEnabled = imageSmoothingEnabled;
    context.imageSmoothingQuality = imageSmoothingQuality;
    context.drawImage.apply(context, [image].concat(_toConsumableArray(params.map(function (param) {
      return Math.floor(normalizeDecimalNumber(param));
    }))));
    context.restore();
    return canvas;
  }
  var fromCharCode = String.fromCharCode;

  /**
   * Get string from char code in data view.
   * @param {DataView} dataView - The data view for read.
   * @param {number} start - The start index.
   * @param {number} length - The read length.
   * @returns {string} The read result.
   */
  function getStringFromCharCode(dataView, start, length) {
    var str = '';
    length += start;
    for (var i = start; i < length; i += 1) {
      str += fromCharCode(dataView.getUint8(i));
    }
    return str;
  }
  var REGEXP_DATA_URL_HEAD = /^data:.*,/;

  /**
   * Transform Data URL to array buffer.
   * @param {string} dataURL - The Data URL to transform.
   * @returns {ArrayBuffer} The result array buffer.
   */
  function dataURLToArrayBuffer(dataURL) {
    var base64 = dataURL.replace(REGEXP_DATA_URL_HEAD, '');
    var binary = atob(base64);
    var arrayBuffer = new ArrayBuffer(binary.length);
    var uint8 = new Uint8Array(arrayBuffer);
    forEach(uint8, function (value, i) {
      uint8[i] = binary.charCodeAt(i);
    });
    return arrayBuffer;
  }

  /**
   * Transform array buffer to Data URL.
   * @param {ArrayBuffer} arrayBuffer - The array buffer to transform.
   * @param {string} mimeType - The mime type of the Data URL.
   * @returns {string} The result Data URL.
   */
  function arrayBufferToDataURL(arrayBuffer, mimeType) {
    var chunks = [];

    // Chunk Typed Array for better performance (#435)
    var chunkSize = 8192;
    var uint8 = new Uint8Array(arrayBuffer);
    while (uint8.length > 0) {
      // XXX: Babel's `toConsumableArray` helper will throw error in IE or Safari 9
      // eslint-disable-next-line prefer-spread
      chunks.push(fromCharCode.apply(null, toArray(uint8.subarray(0, chunkSize))));
      uint8 = uint8.subarray(chunkSize);
    }
    return "data:".concat(mimeType, ";base64,").concat(btoa(chunks.join('')));
  }

  /**
   * Get orientation value from given array buffer.
   * @param {ArrayBuffer} arrayBuffer - The array buffer to read.
   * @returns {number} The read orientation value.
   */
  function resetAndGetOrientation(arrayBuffer) {
    var dataView = new DataView(arrayBuffer);
    var orientation;

    // Ignores range error when the image does not have correct Exif information
    try {
      var littleEndian;
      var app1Start;
      var ifdStart;

      // Only handle JPEG image (start by 0xFFD8)
      if (dataView.getUint8(0) === 0xFF && dataView.getUint8(1) === 0xD8) {
        var length = dataView.byteLength;
        var offset = 2;
        while (offset + 1 < length) {
          if (dataView.getUint8(offset) === 0xFF && dataView.getUint8(offset + 1) === 0xE1) {
            app1Start = offset;
            break;
          }
          offset += 1;
        }
      }
      if (app1Start) {
        var exifIDCode = app1Start + 4;
        var tiffOffset = app1Start + 10;
        if (getStringFromCharCode(dataView, exifIDCode, 4) === 'Exif') {
          var endianness = dataView.getUint16(tiffOffset);
          littleEndian = endianness === 0x4949;
          if (littleEndian || endianness === 0x4D4D /* bigEndian */) {
            if (dataView.getUint16(tiffOffset + 2, littleEndian) === 0x002A) {
              var firstIFDOffset = dataView.getUint32(tiffOffset + 4, littleEndian);
              if (firstIFDOffset >= 0x00000008) {
                ifdStart = tiffOffset + firstIFDOffset;
              }
            }
          }
        }
      }
      if (ifdStart) {
        var _length = dataView.getUint16(ifdStart, littleEndian);
        var _offset;
        var i;
        for (i = 0; i < _length; i += 1) {
          _offset = ifdStart + i * 12 + 2;
          if (dataView.getUint16(_offset, littleEndian) === 0x0112 /* Orientation */) {
            // 8 is the offset of the current tag's value
            _offset += 8;

            // Get the original orientation value
            orientation = dataView.getUint16(_offset, littleEndian);

            // Override the orientation with its default value
            dataView.setUint16(_offset, 1, littleEndian);
            break;
          }
        }
      }
    } catch (error) {
      orientation = 1;
    }
    return orientation;
  }

  /**
   * Parse Exif Orientation value.
   * @param {number} orientation - The orientation to parse.
   * @returns {Object} The parsed result.
   */
  function parseOrientation(orientation) {
    var rotate = 0;
    var scaleX = 1;
    var scaleY = 1;
    switch (orientation) {
      // Flip horizontal
      case 2:
        scaleX = -1;
        break;

      // Rotate left 180°
      case 3:
        rotate = -180;
        break;

      // Flip vertical
      case 4:
        scaleY = -1;
        break;

      // Flip vertical and rotate right 90°
      case 5:
        rotate = 90;
        scaleY = -1;
        break;

      // Rotate right 90°
      case 6:
        rotate = 90;
        break;

      // Flip horizontal and rotate right 90°
      case 7:
        rotate = 90;
        scaleX = -1;
        break;

      // Rotate left 90°
      case 8:
        rotate = -90;
        break;
    }
    return {
      rotate: rotate,
      scaleX: scaleX,
      scaleY: scaleY
    };
  }

  var render = {
    render: function render() {
      this.initContainer();
      this.initCanvas();
      this.initCropBox();
      this.renderCanvas();
      if (this.cropped) {
        this.renderCropBox();
      }
    },
    initContainer: function initContainer() {
      var element = this.element,
        options = this.options,
        container = this.container,
        cropper = this.cropper;
      var minWidth = Number(options.minContainerWidth);
      var minHeight = Number(options.minContainerHeight);
      addClass(cropper, CLASS_HIDDEN);
      removeClass(element, CLASS_HIDDEN);
      var containerData = {
        width: Math.max(container.offsetWidth, minWidth >= 0 ? minWidth : MIN_CONTAINER_WIDTH),
        height: Math.max(container.offsetHeight, minHeight >= 0 ? minHeight : MIN_CONTAINER_HEIGHT)
      };
      this.containerData = containerData;
      setStyle(cropper, {
        width: containerData.width,
        height: containerData.height
      });
      addClass(element, CLASS_HIDDEN);
      removeClass(cropper, CLASS_HIDDEN);
    },
    // Canvas (image wrapper)
    initCanvas: function initCanvas() {
      var containerData = this.containerData,
        imageData = this.imageData;
      var viewMode = this.options.viewMode;
      var rotated = Math.abs(imageData.rotate) % 180 === 90;
      var naturalWidth = rotated ? imageData.naturalHeight : imageData.naturalWidth;
      var naturalHeight = rotated ? imageData.naturalWidth : imageData.naturalHeight;
      var aspectRatio = naturalWidth / naturalHeight;
      var canvasWidth = containerData.width;
      var canvasHeight = containerData.height;
      if (containerData.height * aspectRatio > containerData.width) {
        if (viewMode === 3) {
          canvasWidth = containerData.height * aspectRatio;
        } else {
          canvasHeight = containerData.width / aspectRatio;
        }
      } else if (viewMode === 3) {
        canvasHeight = containerData.width / aspectRatio;
      } else {
        canvasWidth = containerData.height * aspectRatio;
      }
      var canvasData = {
        aspectRatio: aspectRatio,
        naturalWidth: naturalWidth,
        naturalHeight: naturalHeight,
        width: canvasWidth,
        height: canvasHeight
      };
      this.canvasData = canvasData;
      this.limited = viewMode === 1 || viewMode === 2;
      this.limitCanvas(true, true);
      canvasData.width = Math.min(Math.max(canvasData.width, canvasData.minWidth), canvasData.maxWidth);
      canvasData.height = Math.min(Math.max(canvasData.height, canvasData.minHeight), canvasData.maxHeight);
      canvasData.left = (containerData.width - canvasData.width) / 2;
      canvasData.top = (containerData.height - canvasData.height) / 2;
      canvasData.oldLeft = canvasData.left;
      canvasData.oldTop = canvasData.top;
      this.initialCanvasData = assign({}, canvasData);
    },
    limitCanvas: function limitCanvas(sizeLimited, positionLimited) {
      var options = this.options,
        containerData = this.containerData,
        canvasData = this.canvasData,
        cropBoxData = this.cropBoxData;
      var viewMode = options.viewMode;
      var aspectRatio = canvasData.aspectRatio;
      var cropped = this.cropped && cropBoxData;
      if (sizeLimited) {
        var minCanvasWidth = Number(options.minCanvasWidth) || 0;
        var minCanvasHeight = Number(options.minCanvasHeight) || 0;
        if (viewMode > 1) {
          minCanvasWidth = Math.max(minCanvasWidth, containerData.width);
          minCanvasHeight = Math.max(minCanvasHeight, containerData.height);
          if (viewMode === 3) {
            if (minCanvasHeight * aspectRatio > minCanvasWidth) {
              minCanvasWidth = minCanvasHeight * aspectRatio;
            } else {
              minCanvasHeight = minCanvasWidth / aspectRatio;
            }
          }
        } else if (viewMode > 0) {
          if (minCanvasWidth) {
            minCanvasWidth = Math.max(minCanvasWidth, cropped ? cropBoxData.width : 0);
          } else if (minCanvasHeight) {
            minCanvasHeight = Math.max(minCanvasHeight, cropped ? cropBoxData.height : 0);
          } else if (cropped) {
            minCanvasWidth = cropBoxData.width;
            minCanvasHeight = cropBoxData.height;
            if (minCanvasHeight * aspectRatio > minCanvasWidth) {
              minCanvasWidth = minCanvasHeight * aspectRatio;
            } else {
              minCanvasHeight = minCanvasWidth / aspectRatio;
            }
          }
        }
        var _getAdjustedSizes = getAdjustedSizes({
          aspectRatio: aspectRatio,
          width: minCanvasWidth,
          height: minCanvasHeight
        });
        minCanvasWidth = _getAdjustedSizes.width;
        minCanvasHeight = _getAdjustedSizes.height;
        canvasData.minWidth = minCanvasWidth;
        canvasData.minHeight = minCanvasHeight;
        canvasData.maxWidth = Infinity;
        canvasData.maxHeight = Infinity;
      }
      if (positionLimited) {
        if (viewMode > (cropped ? 0 : 1)) {
          var newCanvasLeft = containerData.width - canvasData.width;
          var newCanvasTop = containerData.height - canvasData.height;
          canvasData.minLeft = Math.min(0, newCanvasLeft);
          canvasData.minTop = Math.min(0, newCanvasTop);
          canvasData.maxLeft = Math.max(0, newCanvasLeft);
          canvasData.maxTop = Math.max(0, newCanvasTop);
          if (cropped && this.limited) {
            canvasData.minLeft = Math.min(cropBoxData.left, cropBoxData.left + (cropBoxData.width - canvasData.width));
            canvasData.minTop = Math.min(cropBoxData.top, cropBoxData.top + (cropBoxData.height - canvasData.height));
            canvasData.maxLeft = cropBoxData.left;
            canvasData.maxTop = cropBoxData.top;
            if (viewMode === 2) {
              if (canvasData.width >= containerData.width) {
                canvasData.minLeft = Math.min(0, newCanvasLeft);
                canvasData.maxLeft = Math.max(0, newCanvasLeft);
              }
              if (canvasData.height >= containerData.height) {
                canvasData.minTop = Math.min(0, newCanvasTop);
                canvasData.maxTop = Math.max(0, newCanvasTop);
              }
            }
          }
        } else {
          canvasData.minLeft = -canvasData.width;
          canvasData.minTop = -canvasData.height;
          canvasData.maxLeft = containerData.width;
          canvasData.maxTop = containerData.height;
        }
      }
    },
    renderCanvas: function renderCanvas(changed, transformed) {
      var canvasData = this.canvasData,
        imageData = this.imageData;
      if (transformed) {
        var _getRotatedSizes = getRotatedSizes({
            width: imageData.naturalWidth * Math.abs(imageData.scaleX || 1),
            height: imageData.naturalHeight * Math.abs(imageData.scaleY || 1),
            degree: imageData.rotate || 0
          }),
          naturalWidth = _getRotatedSizes.width,
          naturalHeight = _getRotatedSizes.height;
        var width = canvasData.width * (naturalWidth / canvasData.naturalWidth);
        var height = canvasData.height * (naturalHeight / canvasData.naturalHeight);
        canvasData.left -= (width - canvasData.width) / 2;
        canvasData.top -= (height - canvasData.height) / 2;
        canvasData.width = width;
        canvasData.height = height;
        canvasData.aspectRatio = naturalWidth / naturalHeight;
        canvasData.naturalWidth = naturalWidth;
        canvasData.naturalHeight = naturalHeight;
        this.limitCanvas(true, false);
      }
      if (canvasData.width > canvasData.maxWidth || canvasData.width < canvasData.minWidth) {
        canvasData.left = canvasData.oldLeft;
      }
      if (canvasData.height > canvasData.maxHeight || canvasData.height < canvasData.minHeight) {
        canvasData.top = canvasData.oldTop;
      }
      canvasData.width = Math.min(Math.max(canvasData.width, canvasData.minWidth), canvasData.maxWidth);
      canvasData.height = Math.min(Math.max(canvasData.height, canvasData.minHeight), canvasData.maxHeight);
      this.limitCanvas(false, true);
      canvasData.left = Math.min(Math.max(canvasData.left, canvasData.minLeft), canvasData.maxLeft);
      canvasData.top = Math.min(Math.max(canvasData.top, canvasData.minTop), canvasData.maxTop);
      canvasData.oldLeft = canvasData.left;
      canvasData.oldTop = canvasData.top;
      setStyle(this.canvas, assign({
        width: canvasData.width,
        height: canvasData.height
      }, getTransforms({
        translateX: canvasData.left,
        translateY: canvasData.top
      })));
      this.renderImage(changed);
      if (this.cropped && this.limited) {
        this.limitCropBox(true, true);
      }
    },
    renderImage: function renderImage(changed) {
      var canvasData = this.canvasData,
        imageData = this.imageData;
      var width = imageData.naturalWidth * (canvasData.width / canvasData.naturalWidth);
      var height = imageData.naturalHeight * (canvasData.height / canvasData.naturalHeight);
      assign(imageData, {
        width: width,
        height: height,
        left: (canvasData.width - width) / 2,
        top: (canvasData.height - height) / 2
      });
      setStyle(this.image, assign({
        width: imageData.width,
        height: imageData.height
      }, getTransforms(assign({
        translateX: imageData.left,
        translateY: imageData.top
      }, imageData))));
      if (changed) {
        this.output();
      }
    },
    initCropBox: function initCropBox() {
      var options = this.options,
        canvasData = this.canvasData;
      var aspectRatio = options.aspectRatio || options.initialAspectRatio;
      var autoCropArea = Number(options.autoCropArea) || 0.8;
      var cropBoxData = {
        width: canvasData.width,
        height: canvasData.height
      };
      if (aspectRatio) {
        if (canvasData.height * aspectRatio > canvasData.width) {
          cropBoxData.height = cropBoxData.width / aspectRatio;
        } else {
          cropBoxData.width = cropBoxData.height * aspectRatio;
        }
      }
      this.cropBoxData = cropBoxData;
      this.limitCropBox(true, true);

      // Initialize auto crop area
      cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
      cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight);

      // The width/height of auto crop area must large than "minWidth/Height"
      cropBoxData.width = Math.max(cropBoxData.minWidth, cropBoxData.width * autoCropArea);
      cropBoxData.height = Math.max(cropBoxData.minHeight, cropBoxData.height * autoCropArea);
      cropBoxData.left = canvasData.left + (canvasData.width - cropBoxData.width) / 2;
      cropBoxData.top = canvasData.top + (canvasData.height - cropBoxData.height) / 2;
      cropBoxData.oldLeft = cropBoxData.left;
      cropBoxData.oldTop = cropBoxData.top;
      this.initialCropBoxData = assign({}, cropBoxData);
    },
    limitCropBox: function limitCropBox(sizeLimited, positionLimited) {
      var options = this.options,
        containerData = this.containerData,
        canvasData = this.canvasData,
        cropBoxData = this.cropBoxData,
        limited = this.limited;
      var aspectRatio = options.aspectRatio;
      if (sizeLimited) {
        var minCropBoxWidth = Number(options.minCropBoxWidth) || 0;
        var minCropBoxHeight = Number(options.minCropBoxHeight) || 0;
        var maxCropBoxWidth = limited ? Math.min(containerData.width, canvasData.width, canvasData.width + canvasData.left, containerData.width - canvasData.left) : containerData.width;
        var maxCropBoxHeight = limited ? Math.min(containerData.height, canvasData.height, canvasData.height + canvasData.top, containerData.height - canvasData.top) : containerData.height;

        // The min/maxCropBoxWidth/Height must be less than container's width/height
        minCropBoxWidth = Math.min(minCropBoxWidth, containerData.width);
        minCropBoxHeight = Math.min(minCropBoxHeight, containerData.height);
        if (aspectRatio) {
          if (minCropBoxWidth && minCropBoxHeight) {
            if (minCropBoxHeight * aspectRatio > minCropBoxWidth) {
              minCropBoxHeight = minCropBoxWidth / aspectRatio;
            } else {
              minCropBoxWidth = minCropBoxHeight * aspectRatio;
            }
          } else if (minCropBoxWidth) {
            minCropBoxHeight = minCropBoxWidth / aspectRatio;
          } else if (minCropBoxHeight) {
            minCropBoxWidth = minCropBoxHeight * aspectRatio;
          }
          if (maxCropBoxHeight * aspectRatio > maxCropBoxWidth) {
            maxCropBoxHeight = maxCropBoxWidth / aspectRatio;
          } else {
            maxCropBoxWidth = maxCropBoxHeight * aspectRatio;
          }
        }

        // The minWidth/Height must be less than maxWidth/Height
        cropBoxData.minWidth = Math.min(minCropBoxWidth, maxCropBoxWidth);
        cropBoxData.minHeight = Math.min(minCropBoxHeight, maxCropBoxHeight);
        cropBoxData.maxWidth = maxCropBoxWidth;
        cropBoxData.maxHeight = maxCropBoxHeight;
      }
      if (positionLimited) {
        if (limited) {
          cropBoxData.minLeft = Math.max(0, canvasData.left);
          cropBoxData.minTop = Math.max(0, canvasData.top);
          cropBoxData.maxLeft = Math.min(containerData.width, canvasData.left + canvasData.width) - cropBoxData.width;
          cropBoxData.maxTop = Math.min(containerData.height, canvasData.top + canvasData.height) - cropBoxData.height;
        } else {
          cropBoxData.minLeft = 0;
          cropBoxData.minTop = 0;
          cropBoxData.maxLeft = containerData.width - cropBoxData.width;
          cropBoxData.maxTop = containerData.height - cropBoxData.height;
        }
      }
    },
    renderCropBox: function renderCropBox() {
      var options = this.options,
        containerData = this.containerData,
        cropBoxData = this.cropBoxData;
      if (cropBoxData.width > cropBoxData.maxWidth || cropBoxData.width < cropBoxData.minWidth) {
        cropBoxData.left = cropBoxData.oldLeft;
      }
      if (cropBoxData.height > cropBoxData.maxHeight || cropBoxData.height < cropBoxData.minHeight) {
        cropBoxData.top = cropBoxData.oldTop;
      }
      cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
      cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight);
      this.limitCropBox(false, true);
      cropBoxData.left = Math.min(Math.max(cropBoxData.left, cropBoxData.minLeft), cropBoxData.maxLeft);
      cropBoxData.top = Math.min(Math.max(cropBoxData.top, cropBoxData.minTop), cropBoxData.maxTop);
      cropBoxData.oldLeft = cropBoxData.left;
      cropBoxData.oldTop = cropBoxData.top;
      if (options.movable && options.cropBoxMovable) {
        // Turn to move the canvas when the crop box is equal to the container
        setData(this.face, DATA_ACTION, cropBoxData.width >= containerData.width && cropBoxData.height >= containerData.height ? ACTION_MOVE : ACTION_ALL);
      }
      setStyle(this.cropBox, assign({
        width: cropBoxData.width,
        height: cropBoxData.height
      }, getTransforms({
        translateX: cropBoxData.left,
        translateY: cropBoxData.top
      })));
      if (this.cropped && this.limited) {
        this.limitCanvas(true, true);
      }
      if (!this.disabled) {
        this.output();
      }
    },
    output: function output() {
      this.preview();
      dispatchEvent(this.element, EVENT_CROP, this.getData());
    }
  };

  var preview = {
    initPreview: function initPreview() {
      var element = this.element,
        crossOrigin = this.crossOrigin;
      var preview = this.options.preview;
      var url = crossOrigin ? this.crossOriginUrl : this.url;
      var alt = element.alt || 'The image to preview';
      var image = document.createElement('img');
      if (crossOrigin) {
        image.crossOrigin = crossOrigin;
      }
      image.src = url;
      image.alt = alt;
      this.viewBox.appendChild(image);
      this.viewBoxImage = image;
      if (!preview) {
        return;
      }
      var previews = preview;
      if (typeof preview === 'string') {
        previews = element.ownerDocument.querySelectorAll(preview);
      } else if (preview.querySelector) {
        previews = [preview];
      }
      this.previews = previews;
      forEach(previews, function (el) {
        var img = document.createElement('img');

        // Save the original size for recover
        setData(el, DATA_PREVIEW, {
          width: el.offsetWidth,
          height: el.offsetHeight,
          html: el.innerHTML
        });
        if (crossOrigin) {
          img.crossOrigin = crossOrigin;
        }
        img.src = url;
        img.alt = alt;

        /**
         * Override img element styles
         * Add `display:block` to avoid margin top issue
         * Add `height:auto` to override `height` attribute on IE8
         * (Occur only when margin-top <= -height)
         */
        img.style.cssText = 'display:block;' + 'width:100%;' + 'height:auto;' + 'min-width:0!important;' + 'min-height:0!important;' + 'max-width:none!important;' + 'max-height:none!important;' + 'image-orientation:0deg!important;"';
        el.innerHTML = '';
        el.appendChild(img);
      });
    },
    resetPreview: function resetPreview() {
      forEach(this.previews, function (element) {
        var data = getData(element, DATA_PREVIEW);
        setStyle(element, {
          width: data.width,
          height: data.height
        });
        element.innerHTML = data.html;
        removeData(element, DATA_PREVIEW);
      });
    },
    preview: function preview() {
      var imageData = this.imageData,
        canvasData = this.canvasData,
        cropBoxData = this.cropBoxData;
      var cropBoxWidth = cropBoxData.width,
        cropBoxHeight = cropBoxData.height;
      var width = imageData.width,
        height = imageData.height;
      var left = cropBoxData.left - canvasData.left - imageData.left;
      var top = cropBoxData.top - canvasData.top - imageData.top;
      if (!this.cropped || this.disabled) {
        return;
      }
      setStyle(this.viewBoxImage, assign({
        width: width,
        height: height
      }, getTransforms(assign({
        translateX: -left,
        translateY: -top
      }, imageData))));
      forEach(this.previews, function (element) {
        var data = getData(element, DATA_PREVIEW);
        var originalWidth = data.width;
        var originalHeight = data.height;
        var newWidth = originalWidth;
        var newHeight = originalHeight;
        var ratio = 1;
        if (cropBoxWidth) {
          ratio = originalWidth / cropBoxWidth;
          newHeight = cropBoxHeight * ratio;
        }
        if (cropBoxHeight && newHeight > originalHeight) {
          ratio = originalHeight / cropBoxHeight;
          newWidth = cropBoxWidth * ratio;
          newHeight = originalHeight;
        }
        setStyle(element, {
          width: newWidth,
          height: newHeight
        });
        setStyle(element.getElementsByTagName('img')[0], assign({
          width: width * ratio,
          height: height * ratio
        }, getTransforms(assign({
          translateX: -left * ratio,
          translateY: -top * ratio
        }, imageData))));
      });
    }
  };

  var events = {
    bind: function bind() {
      var element = this.element,
        options = this.options,
        cropper = this.cropper;
      if (isFunction(options.cropstart)) {
        addListener(element, EVENT_CROP_START, options.cropstart);
      }
      if (isFunction(options.cropmove)) {
        addListener(element, EVENT_CROP_MOVE, options.cropmove);
      }
      if (isFunction(options.cropend)) {
        addListener(element, EVENT_CROP_END, options.cropend);
      }
      if (isFunction(options.crop)) {
        addListener(element, EVENT_CROP, options.crop);
      }
      if (isFunction(options.zoom)) {
        addListener(element, EVENT_ZOOM, options.zoom);
      }
      addListener(cropper, EVENT_POINTER_DOWN, this.onCropStart = this.cropStart.bind(this));
      if (options.zoomable && options.zoomOnWheel) {
        addListener(cropper, EVENT_WHEEL, this.onWheel = this.wheel.bind(this), {
          passive: false,
          capture: true
        });
      }
      if (options.toggleDragModeOnDblclick) {
        addListener(cropper, EVENT_DBLCLICK, this.onDblclick = this.dblclick.bind(this));
      }
      addListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove = this.cropMove.bind(this));
      addListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd = this.cropEnd.bind(this));
      if (options.responsive) {
        addListener(window, EVENT_RESIZE, this.onResize = this.resize.bind(this));
      }
    },
    unbind: function unbind() {
      var element = this.element,
        options = this.options,
        cropper = this.cropper;
      if (isFunction(options.cropstart)) {
        removeListener(element, EVENT_CROP_START, options.cropstart);
      }
      if (isFunction(options.cropmove)) {
        removeListener(element, EVENT_CROP_MOVE, options.cropmove);
      }
      if (isFunction(options.cropend)) {
        removeListener(element, EVENT_CROP_END, options.cropend);
      }
      if (isFunction(options.crop)) {
        removeListener(element, EVENT_CROP, options.crop);
      }
      if (isFunction(options.zoom)) {
        removeListener(element, EVENT_ZOOM, options.zoom);
      }
      removeListener(cropper, EVENT_POINTER_DOWN, this.onCropStart);
      if (options.zoomable && options.zoomOnWheel) {
        removeListener(cropper, EVENT_WHEEL, this.onWheel, {
          passive: false,
          capture: true
        });
      }
      if (options.toggleDragModeOnDblclick) {
        removeListener(cropper, EVENT_DBLCLICK, this.onDblclick);
      }
      removeListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove);
      removeListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd);
      if (options.responsive) {
        removeListener(window, EVENT_RESIZE, this.onResize);
      }
    }
  };

  var handlers = {
    resize: function resize() {
      if (this.disabled) {
        return;
      }
      var options = this.options,
        container = this.container,
        containerData = this.containerData;
      var ratioX = container.offsetWidth / containerData.width;
      var ratioY = container.offsetHeight / containerData.height;
      var ratio = Math.abs(ratioX - 1) > Math.abs(ratioY - 1) ? ratioX : ratioY;

      // Resize when width changed or height changed
      if (ratio !== 1) {
        var canvasData;
        var cropBoxData;
        if (options.restore) {
          canvasData = this.getCanvasData();
          cropBoxData = this.getCropBoxData();
        }
        this.render();
        if (options.restore) {
          this.setCanvasData(forEach(canvasData, function (n, i) {
            canvasData[i] = n * ratio;
          }));
          this.setCropBoxData(forEach(cropBoxData, function (n, i) {
            cropBoxData[i] = n * ratio;
          }));
        }
      }
    },
    dblclick: function dblclick() {
      if (this.disabled || this.options.dragMode === DRAG_MODE_NONE) {
        return;
      }
      this.setDragMode(hasClass(this.dragBox, CLASS_CROP) ? DRAG_MODE_MOVE : DRAG_MODE_CROP);
    },
    wheel: function wheel(event) {
      var _this = this;
      var ratio = Number(this.options.wheelZoomRatio) || 0.1;
      var delta = 1;
      if (this.disabled) {
        return;
      }
      event.preventDefault();

      // Limit wheel speed to prevent zoom too fast (#21)
      if (this.wheeling) {
        return;
      }
      this.wheeling = true;
      setTimeout(function () {
        _this.wheeling = false;
      }, 50);
      if (event.deltaY) {
        delta = event.deltaY > 0 ? 1 : -1;
      } else if (event.wheelDelta) {
        delta = -event.wheelDelta / 120;
      } else if (event.detail) {
        delta = event.detail > 0 ? 1 : -1;
      }
      this.zoom(-delta * ratio, event);
    },
    cropStart: function cropStart(event) {
      var buttons = event.buttons,
        button = event.button;
      if (this.disabled

      // Handle mouse event and pointer event and ignore touch event
      || (event.type === 'mousedown' || event.type === 'pointerdown' && event.pointerType === 'mouse') && (
      // No primary button (Usually the left button)
      isNumber(buttons) && buttons !== 1 || isNumber(button) && button !== 0

      // Open context menu
      || event.ctrlKey)) {
        return;
      }
      var options = this.options,
        pointers = this.pointers;
      var action;
      if (event.changedTouches) {
        // Handle touch event
        forEach(event.changedTouches, function (touch) {
          pointers[touch.identifier] = getPointer(touch);
        });
      } else {
        // Handle mouse event and pointer event
        pointers[event.pointerId || 0] = getPointer(event);
      }
      if (Object.keys(pointers).length > 1 && options.zoomable && options.zoomOnTouch) {
        action = ACTION_ZOOM;
      } else {
        action = getData(event.target, DATA_ACTION);
      }
      if (!REGEXP_ACTIONS.test(action)) {
        return;
      }
      if (dispatchEvent(this.element, EVENT_CROP_START, {
        originalEvent: event,
        action: action
      }) === false) {
        return;
      }

      // This line is required for preventing page zooming in iOS browsers
      event.preventDefault();
      this.action = action;
      this.cropping = false;
      if (action === ACTION_CROP) {
        this.cropping = true;
        addClass(this.dragBox, CLASS_MODAL);
      }
    },
    cropMove: function cropMove(event) {
      var action = this.action;
      if (this.disabled || !action) {
        return;
      }
      var pointers = this.pointers;
      event.preventDefault();
      if (dispatchEvent(this.element, EVENT_CROP_MOVE, {
        originalEvent: event,
        action: action
      }) === false) {
        return;
      }
      if (event.changedTouches) {
        forEach(event.changedTouches, function (touch) {
          // The first parameter should not be undefined (#432)
          assign(pointers[touch.identifier] || {}, getPointer(touch, true));
        });
      } else {
        assign(pointers[event.pointerId || 0] || {}, getPointer(event, true));
      }
      this.change(event);
    },
    cropEnd: function cropEnd(event) {
      if (this.disabled) {
        return;
      }
      var action = this.action,
        pointers = this.pointers;
      if (event.changedTouches) {
        forEach(event.changedTouches, function (touch) {
          delete pointers[touch.identifier];
        });
      } else {
        delete pointers[event.pointerId || 0];
      }
      if (!action) {
        return;
      }
      event.preventDefault();
      if (!Object.keys(pointers).length) {
        this.action = '';
      }
      if (this.cropping) {
        this.cropping = false;
        toggleClass(this.dragBox, CLASS_MODAL, this.cropped && this.options.modal);
      }
      dispatchEvent(this.element, EVENT_CROP_END, {
        originalEvent: event,
        action: action
      });
    }
  };

  var change = {
    change: function change(event) {
      var options = this.options,
        canvasData = this.canvasData,
        containerData = this.containerData,
        cropBoxData = this.cropBoxData,
        pointers = this.pointers;
      var action = this.action;
      var aspectRatio = options.aspectRatio;
      var left = cropBoxData.left,
        top = cropBoxData.top,
        width = cropBoxData.width,
        height = cropBoxData.height;
      var right = left + width;
      var bottom = top + height;
      var minLeft = 0;
      var minTop = 0;
      var maxWidth = containerData.width;
      var maxHeight = containerData.height;
      var renderable = true;
      var offset;

      // Locking aspect ratio in "free mode" by holding shift key
      if (!aspectRatio && event.shiftKey) {
        aspectRatio = width && height ? width / height : 1;
      }
      if (this.limited) {
        minLeft = cropBoxData.minLeft;
        minTop = cropBoxData.minTop;
        maxWidth = minLeft + Math.min(containerData.width, canvasData.width, canvasData.left + canvasData.width);
        maxHeight = minTop + Math.min(containerData.height, canvasData.height, canvasData.top + canvasData.height);
      }
      var pointer = pointers[Object.keys(pointers)[0]];
      var range = {
        x: pointer.endX - pointer.startX,
        y: pointer.endY - pointer.startY
      };
      var check = function check(side) {
        switch (side) {
          case ACTION_EAST:
            if (right + range.x > maxWidth) {
              range.x = maxWidth - right;
            }
            break;
          case ACTION_WEST:
            if (left + range.x < minLeft) {
              range.x = minLeft - left;
            }
            break;
          case ACTION_NORTH:
            if (top + range.y < minTop) {
              range.y = minTop - top;
            }
            break;
          case ACTION_SOUTH:
            if (bottom + range.y > maxHeight) {
              range.y = maxHeight - bottom;
            }
            break;
        }
      };
      switch (action) {
        // Move crop box
        case ACTION_ALL:
          left += range.x;
          top += range.y;
          break;

        // Resize crop box
        case ACTION_EAST:
          if (range.x >= 0 && (right >= maxWidth || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
            renderable = false;
            break;
          }
          check(ACTION_EAST);
          width += range.x;
          if (width < 0) {
            action = ACTION_WEST;
            width = -width;
            left -= width;
          }
          if (aspectRatio) {
            height = width / aspectRatio;
            top += (cropBoxData.height - height) / 2;
          }
          break;
        case ACTION_NORTH:
          if (range.y <= 0 && (top <= minTop || aspectRatio && (left <= minLeft || right >= maxWidth))) {
            renderable = false;
            break;
          }
          check(ACTION_NORTH);
          height -= range.y;
          top += range.y;
          if (height < 0) {
            action = ACTION_SOUTH;
            height = -height;
            top -= height;
          }
          if (aspectRatio) {
            width = height * aspectRatio;
            left += (cropBoxData.width - width) / 2;
          }
          break;
        case ACTION_WEST:
          if (range.x <= 0 && (left <= minLeft || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
            renderable = false;
            break;
          }
          check(ACTION_WEST);
          width -= range.x;
          left += range.x;
          if (width < 0) {
            action = ACTION_EAST;
            width = -width;
            left -= width;
          }
          if (aspectRatio) {
            height = width / aspectRatio;
            top += (cropBoxData.height - height) / 2;
          }
          break;
        case ACTION_SOUTH:
          if (range.y >= 0 && (bottom >= maxHeight || aspectRatio && (left <= minLeft || right >= maxWidth))) {
            renderable = false;
            break;
          }
          check(ACTION_SOUTH);
          height += range.y;
          if (height < 0) {
            action = ACTION_NORTH;
            height = -height;
            top -= height;
          }
          if (aspectRatio) {
            width = height * aspectRatio;
            left += (cropBoxData.width - width) / 2;
          }
          break;
        case ACTION_NORTH_EAST:
          if (aspectRatio) {
            if (range.y <= 0 && (top <= minTop || right >= maxWidth)) {
              renderable = false;
              break;
            }
            check(ACTION_NORTH);
            height -= range.y;
            top += range.y;
            width = height * aspectRatio;
          } else {
            check(ACTION_NORTH);
            check(ACTION_EAST);
            if (range.x >= 0) {
              if (right < maxWidth) {
                width += range.x;
              } else if (range.y <= 0 && top <= minTop) {
                renderable = false;
              }
            } else {
              width += range.x;
            }
            if (range.y <= 0) {
              if (top > minTop) {
                height -= range.y;
                top += range.y;
              }
            } else {
              height -= range.y;
              top += range.y;
            }
          }
          if (width < 0 && height < 0) {
            action = ACTION_SOUTH_WEST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_NORTH_WEST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_SOUTH_EAST;
            height = -height;
            top -= height;
          }
          break;
        case ACTION_NORTH_WEST:
          if (aspectRatio) {
            if (range.y <= 0 && (top <= minTop || left <= minLeft)) {
              renderable = false;
              break;
            }
            check(ACTION_NORTH);
            height -= range.y;
            top += range.y;
            width = height * aspectRatio;
            left += cropBoxData.width - width;
          } else {
            check(ACTION_NORTH);
            check(ACTION_WEST);
            if (range.x <= 0) {
              if (left > minLeft) {
                width -= range.x;
                left += range.x;
              } else if (range.y <= 0 && top <= minTop) {
                renderable = false;
              }
            } else {
              width -= range.x;
              left += range.x;
            }
            if (range.y <= 0) {
              if (top > minTop) {
                height -= range.y;
                top += range.y;
              }
            } else {
              height -= range.y;
              top += range.y;
            }
          }
          if (width < 0 && height < 0) {
            action = ACTION_SOUTH_EAST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_NORTH_EAST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_SOUTH_WEST;
            height = -height;
            top -= height;
          }
          break;
        case ACTION_SOUTH_WEST:
          if (aspectRatio) {
            if (range.x <= 0 && (left <= minLeft || bottom >= maxHeight)) {
              renderable = false;
              break;
            }
            check(ACTION_WEST);
            width -= range.x;
            left += range.x;
            height = width / aspectRatio;
          } else {
            check(ACTION_SOUTH);
            check(ACTION_WEST);
            if (range.x <= 0) {
              if (left > minLeft) {
                width -= range.x;
                left += range.x;
              } else if (range.y >= 0 && bottom >= maxHeight) {
                renderable = false;
              }
            } else {
              width -= range.x;
              left += range.x;
            }
            if (range.y >= 0) {
              if (bottom < maxHeight) {
                height += range.y;
              }
            } else {
              height += range.y;
            }
          }
          if (width < 0 && height < 0) {
            action = ACTION_NORTH_EAST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_SOUTH_EAST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_NORTH_WEST;
            height = -height;
            top -= height;
          }
          break;
        case ACTION_SOUTH_EAST:
          if (aspectRatio) {
            if (range.x >= 0 && (right >= maxWidth || bottom >= maxHeight)) {
              renderable = false;
              break;
            }
            check(ACTION_EAST);
            width += range.x;
            height = width / aspectRatio;
          } else {
            check(ACTION_SOUTH);
            check(ACTION_EAST);
            if (range.x >= 0) {
              if (right < maxWidth) {
                width += range.x;
              } else if (range.y >= 0 && bottom >= maxHeight) {
                renderable = false;
              }
            } else {
              width += range.x;
            }
            if (range.y >= 0) {
              if (bottom < maxHeight) {
                height += range.y;
              }
            } else {
              height += range.y;
            }
          }
          if (width < 0 && height < 0) {
            action = ACTION_NORTH_WEST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_SOUTH_WEST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_NORTH_EAST;
            height = -height;
            top -= height;
          }
          break;

        // Move canvas
        case ACTION_MOVE:
          this.move(range.x, range.y);
          renderable = false;
          break;

        // Zoom canvas
        case ACTION_ZOOM:
          this.zoom(getMaxZoomRatio(pointers), event);
          renderable = false;
          break;

        // Create crop box
        case ACTION_CROP:
          if (!range.x || !range.y) {
            renderable = false;
            break;
          }
          offset = getOffset(this.cropper);
          left = pointer.startX - offset.left;
          top = pointer.startY - offset.top;
          width = cropBoxData.minWidth;
          height = cropBoxData.minHeight;
          if (range.x > 0) {
            action = range.y > 0 ? ACTION_SOUTH_EAST : ACTION_NORTH_EAST;
          } else if (range.x < 0) {
            left -= width;
            action = range.y > 0 ? ACTION_SOUTH_WEST : ACTION_NORTH_WEST;
          }
          if (range.y < 0) {
            top -= height;
          }

          // Show the crop box if is hidden
          if (!this.cropped) {
            removeClass(this.cropBox, CLASS_HIDDEN);
            this.cropped = true;
            if (this.limited) {
              this.limitCropBox(true, true);
            }
          }
          break;
      }
      if (renderable) {
        cropBoxData.width = width;
        cropBoxData.height = height;
        cropBoxData.left = left;
        cropBoxData.top = top;
        this.action = action;
        this.renderCropBox();
      }

      // Override
      forEach(pointers, function (p) {
        p.startX = p.endX;
        p.startY = p.endY;
      });
    }
  };

  var methods = {
    // Show the crop box manually
    crop: function crop() {
      if (this.ready && !this.cropped && !this.disabled) {
        this.cropped = true;
        this.limitCropBox(true, true);
        if (this.options.modal) {
          addClass(this.dragBox, CLASS_MODAL);
        }
        removeClass(this.cropBox, CLASS_HIDDEN);
        this.setCropBoxData(this.initialCropBoxData);
      }
      return this;
    },
    // Reset the image and crop box to their initial states
    reset: function reset() {
      if (this.ready && !this.disabled) {
        this.imageData = assign({}, this.initialImageData);
        this.canvasData = assign({}, this.initialCanvasData);
        this.cropBoxData = assign({}, this.initialCropBoxData);
        this.renderCanvas();
        if (this.cropped) {
          this.renderCropBox();
        }
      }
      return this;
    },
    // Clear the crop box
    clear: function clear() {
      if (this.cropped && !this.disabled) {
        assign(this.cropBoxData, {
          left: 0,
          top: 0,
          width: 0,
          height: 0
        });
        this.cropped = false;
        this.renderCropBox();
        this.limitCanvas(true, true);

        // Render canvas after crop box rendered
        this.renderCanvas();
        removeClass(this.dragBox, CLASS_MODAL);
        addClass(this.cropBox, CLASS_HIDDEN);
      }
      return this;
    },
    /**
     * Replace the image's src and rebuild the cropper
     * @param {string} url - The new URL.
     * @param {boolean} [hasSameSize] - Indicate if the new image has the same size as the old one.
     * @returns {Cropper} this
     */
    replace: function replace(url) {
      var hasSameSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!this.disabled && url) {
        if (this.isImg) {
          this.element.src = url;
        }
        if (hasSameSize) {
          this.url = url;
          this.image.src = url;
          if (this.ready) {
            this.viewBoxImage.src = url;
            forEach(this.previews, function (element) {
              element.getElementsByTagName('img')[0].src = url;
            });
          }
        } else {
          if (this.isImg) {
            this.replaced = true;
          }
          this.options.data = null;
          this.uncreate();
          this.load(url);
        }
      }
      return this;
    },
    // Enable (unfreeze) the cropper
    enable: function enable() {
      if (this.ready && this.disabled) {
        this.disabled = false;
        removeClass(this.cropper, CLASS_DISABLED);
      }
      return this;
    },
    // Disable (freeze) the cropper
    disable: function disable() {
      if (this.ready && !this.disabled) {
        this.disabled = true;
        addClass(this.cropper, CLASS_DISABLED);
      }
      return this;
    },
    /**
     * Destroy the cropper and remove the instance from the image
     * @returns {Cropper} this
     */
    destroy: function destroy() {
      var element = this.element;
      if (!element[NAMESPACE]) {
        return this;
      }
      element[NAMESPACE] = undefined;
      if (this.isImg && this.replaced) {
        element.src = this.originalUrl;
      }
      this.uncreate();
      return this;
    },
    /**
     * Move the canvas with relative offsets
     * @param {number} offsetX - The relative offset distance on the x-axis.
     * @param {number} [offsetY=offsetX] - The relative offset distance on the y-axis.
     * @returns {Cropper} this
     */
    move: function move(offsetX) {
      var offsetY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : offsetX;
      var _this$canvasData = this.canvasData,
        left = _this$canvasData.left,
        top = _this$canvasData.top;
      return this.moveTo(isUndefined(offsetX) ? offsetX : left + Number(offsetX), isUndefined(offsetY) ? offsetY : top + Number(offsetY));
    },
    /**
     * Move the canvas to an absolute point
     * @param {number} x - The x-axis coordinate.
     * @param {number} [y=x] - The y-axis coordinate.
     * @returns {Cropper} this
     */
    moveTo: function moveTo(x) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
      var canvasData = this.canvasData;
      var changed = false;
      x = Number(x);
      y = Number(y);
      if (this.ready && !this.disabled && this.options.movable) {
        if (isNumber(x)) {
          canvasData.left = x;
          changed = true;
        }
        if (isNumber(y)) {
          canvasData.top = y;
          changed = true;
        }
        if (changed) {
          this.renderCanvas(true);
        }
      }
      return this;
    },
    /**
     * Zoom the canvas with a relative ratio
     * @param {number} ratio - The target ratio.
     * @param {Event} _originalEvent - The original event if any.
     * @returns {Cropper} this
     */
    zoom: function zoom(ratio, _originalEvent) {
      var canvasData = this.canvasData;
      ratio = Number(ratio);
      if (ratio < 0) {
        ratio = 1 / (1 - ratio);
      } else {
        ratio = 1 + ratio;
      }
      return this.zoomTo(canvasData.width * ratio / canvasData.naturalWidth, null, _originalEvent);
    },
    /**
     * Zoom the canvas to an absolute ratio
     * @param {number} ratio - The target ratio.
     * @param {Object} pivot - The zoom pivot point coordinate.
     * @param {Event} _originalEvent - The original event if any.
     * @returns {Cropper} this
     */
    zoomTo: function zoomTo(ratio, pivot, _originalEvent) {
      var options = this.options,
        canvasData = this.canvasData;
      var width = canvasData.width,
        height = canvasData.height,
        naturalWidth = canvasData.naturalWidth,
        naturalHeight = canvasData.naturalHeight;
      ratio = Number(ratio);
      if (ratio >= 0 && this.ready && !this.disabled && options.zoomable) {
        var newWidth = naturalWidth * ratio;
        var newHeight = naturalHeight * ratio;
        if (dispatchEvent(this.element, EVENT_ZOOM, {
          ratio: ratio,
          oldRatio: width / naturalWidth,
          originalEvent: _originalEvent
        }) === false) {
          return this;
        }
        if (_originalEvent) {
          var pointers = this.pointers;
          var offset = getOffset(this.cropper);
          var center = pointers && Object.keys(pointers).length ? getPointersCenter(pointers) : {
            pageX: _originalEvent.pageX,
            pageY: _originalEvent.pageY
          };

          // Zoom from the triggering point of the event
          canvasData.left -= (newWidth - width) * ((center.pageX - offset.left - canvasData.left) / width);
          canvasData.top -= (newHeight - height) * ((center.pageY - offset.top - canvasData.top) / height);
        } else if (isPlainObject(pivot) && isNumber(pivot.x) && isNumber(pivot.y)) {
          canvasData.left -= (newWidth - width) * ((pivot.x - canvasData.left) / width);
          canvasData.top -= (newHeight - height) * ((pivot.y - canvasData.top) / height);
        } else {
          // Zoom from the center of the canvas
          canvasData.left -= (newWidth - width) / 2;
          canvasData.top -= (newHeight - height) / 2;
        }
        canvasData.width = newWidth;
        canvasData.height = newHeight;
        this.renderCanvas(true);
      }
      return this;
    },
    /**
     * Rotate the canvas with a relative degree
     * @param {number} degree - The rotate degree.
     * @returns {Cropper} this
     */
    rotate: function rotate(degree) {
      return this.rotateTo((this.imageData.rotate || 0) + Number(degree));
    },
    /**
     * Rotate the canvas to an absolute degree
     * @param {number} degree - The rotate degree.
     * @returns {Cropper} this
     */
    rotateTo: function rotateTo(degree) {
      degree = Number(degree);
      if (isNumber(degree) && this.ready && !this.disabled && this.options.rotatable) {
        this.imageData.rotate = degree % 360;
        this.renderCanvas(true, true);
      }
      return this;
    },
    /**
     * Scale the image on the x-axis.
     * @param {number} scaleX - The scale ratio on the x-axis.
     * @returns {Cropper} this
     */
    scaleX: function scaleX(_scaleX) {
      var scaleY = this.imageData.scaleY;
      return this.scale(_scaleX, isNumber(scaleY) ? scaleY : 1);
    },
    /**
     * Scale the image on the y-axis.
     * @param {number} scaleY - The scale ratio on the y-axis.
     * @returns {Cropper} this
     */
    scaleY: function scaleY(_scaleY) {
      var scaleX = this.imageData.scaleX;
      return this.scale(isNumber(scaleX) ? scaleX : 1, _scaleY);
    },
    /**
     * Scale the image
     * @param {number} scaleX - The scale ratio on the x-axis.
     * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
     * @returns {Cropper} this
     */
    scale: function scale(scaleX) {
      var scaleY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : scaleX;
      var imageData = this.imageData;
      var transformed = false;
      scaleX = Number(scaleX);
      scaleY = Number(scaleY);
      if (this.ready && !this.disabled && this.options.scalable) {
        if (isNumber(scaleX)) {
          imageData.scaleX = scaleX;
          transformed = true;
        }
        if (isNumber(scaleY)) {
          imageData.scaleY = scaleY;
          transformed = true;
        }
        if (transformed) {
          this.renderCanvas(true, true);
        }
      }
      return this;
    },
    /**
     * Get the cropped area position and size data (base on the original image)
     * @param {boolean} [rounded=false] - Indicate if round the data values or not.
     * @returns {Object} The result cropped data.
     */
    getData: function getData() {
      var rounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var options = this.options,
        imageData = this.imageData,
        canvasData = this.canvasData,
        cropBoxData = this.cropBoxData;
      var data;
      if (this.ready && this.cropped) {
        data = {
          x: cropBoxData.left - canvasData.left,
          y: cropBoxData.top - canvasData.top,
          width: cropBoxData.width,
          height: cropBoxData.height
        };
        var ratio = imageData.width / imageData.naturalWidth;
        forEach(data, function (n, i) {
          data[i] = n / ratio;
        });
        if (rounded) {
          // In case rounding off leads to extra 1px in right or bottom border
          // we should round the top-left corner and the dimension (#343).
          var bottom = Math.round(data.y + data.height);
          var right = Math.round(data.x + data.width);
          data.x = Math.round(data.x);
          data.y = Math.round(data.y);
          data.width = right - data.x;
          data.height = bottom - data.y;
        }
      } else {
        data = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      }
      if (options.rotatable) {
        data.rotate = imageData.rotate || 0;
      }
      if (options.scalable) {
        data.scaleX = imageData.scaleX || 1;
        data.scaleY = imageData.scaleY || 1;
      }
      return data;
    },
    /**
     * Set the cropped area position and size with new data
     * @param {Object} data - The new data.
     * @returns {Cropper} this
     */
    setData: function setData(data) {
      var options = this.options,
        imageData = this.imageData,
        canvasData = this.canvasData;
      var cropBoxData = {};
      if (this.ready && !this.disabled && isPlainObject(data)) {
        var transformed = false;
        if (options.rotatable) {
          if (isNumber(data.rotate) && data.rotate !== imageData.rotate) {
            imageData.rotate = data.rotate;
            transformed = true;
          }
        }
        if (options.scalable) {
          if (isNumber(data.scaleX) && data.scaleX !== imageData.scaleX) {
            imageData.scaleX = data.scaleX;
            transformed = true;
          }
          if (isNumber(data.scaleY) && data.scaleY !== imageData.scaleY) {
            imageData.scaleY = data.scaleY;
            transformed = true;
          }
        }
        if (transformed) {
          this.renderCanvas(true, true);
        }
        var ratio = imageData.width / imageData.naturalWidth;
        if (isNumber(data.x)) {
          cropBoxData.left = data.x * ratio + canvasData.left;
        }
        if (isNumber(data.y)) {
          cropBoxData.top = data.y * ratio + canvasData.top;
        }
        if (isNumber(data.width)) {
          cropBoxData.width = data.width * ratio;
        }
        if (isNumber(data.height)) {
          cropBoxData.height = data.height * ratio;
        }
        this.setCropBoxData(cropBoxData);
      }
      return this;
    },
    /**
     * Get the container size data.
     * @returns {Object} The result container data.
     */
    getContainerData: function getContainerData() {
      return this.ready ? assign({}, this.containerData) : {};
    },
    /**
     * Get the image position and size data.
     * @returns {Object} The result image data.
     */
    getImageData: function getImageData() {
      return this.sized ? assign({}, this.imageData) : {};
    },
    /**
     * Get the canvas position and size data.
     * @returns {Object} The result canvas data.
     */
    getCanvasData: function getCanvasData() {
      var canvasData = this.canvasData;
      var data = {};
      if (this.ready) {
        forEach(['left', 'top', 'width', 'height', 'naturalWidth', 'naturalHeight'], function (n) {
          data[n] = canvasData[n];
        });
      }
      return data;
    },
    /**
     * Set the canvas position and size with new data.
     * @param {Object} data - The new canvas data.
     * @returns {Cropper} this
     */
    setCanvasData: function setCanvasData(data) {
      var canvasData = this.canvasData;
      var aspectRatio = canvasData.aspectRatio;
      if (this.ready && !this.disabled && isPlainObject(data)) {
        if (isNumber(data.left)) {
          canvasData.left = data.left;
        }
        if (isNumber(data.top)) {
          canvasData.top = data.top;
        }
        if (isNumber(data.width)) {
          canvasData.width = data.width;
          canvasData.height = data.width / aspectRatio;
        } else if (isNumber(data.height)) {
          canvasData.height = data.height;
          canvasData.width = data.height * aspectRatio;
        }
        this.renderCanvas(true);
      }
      return this;
    },
    /**
     * Get the crop box position and size data.
     * @returns {Object} The result crop box data.
     */
    getCropBoxData: function getCropBoxData() {
      var cropBoxData = this.cropBoxData;
      var data;
      if (this.ready && this.cropped) {
        data = {
          left: cropBoxData.left,
          top: cropBoxData.top,
          width: cropBoxData.width,
          height: cropBoxData.height
        };
      }
      return data || {};
    },
    /**
     * Set the crop box position and size with new data.
     * @param {Object} data - The new crop box data.
     * @returns {Cropper} this
     */
    setCropBoxData: function setCropBoxData(data) {
      var cropBoxData = this.cropBoxData;
      var aspectRatio = this.options.aspectRatio;
      var widthChanged;
      var heightChanged;
      if (this.ready && this.cropped && !this.disabled && isPlainObject(data)) {
        if (isNumber(data.left)) {
          cropBoxData.left = data.left;
        }
        if (isNumber(data.top)) {
          cropBoxData.top = data.top;
        }
        if (isNumber(data.width) && data.width !== cropBoxData.width) {
          widthChanged = true;
          cropBoxData.width = data.width;
        }
        if (isNumber(data.height) && data.height !== cropBoxData.height) {
          heightChanged = true;
          cropBoxData.height = data.height;
        }
        if (aspectRatio) {
          if (widthChanged) {
            cropBoxData.height = cropBoxData.width / aspectRatio;
          } else if (heightChanged) {
            cropBoxData.width = cropBoxData.height * aspectRatio;
          }
        }
        this.renderCropBox();
      }
      return this;
    },
    /**
     * Get a canvas drawn the cropped image.
     * @param {Object} [options={}] - The config options.
     * @returns {HTMLCanvasElement} - The result canvas.
     */
    getCroppedCanvas: function getCroppedCanvas() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (!this.ready || !window.HTMLCanvasElement) {
        return null;
      }
      var canvasData = this.canvasData;
      var source = getSourceCanvas(this.image, this.imageData, canvasData, options);

      // Returns the source canvas if it is not cropped.
      if (!this.cropped) {
        return source;
      }
      var _this$getData = this.getData(options.rounded),
        initialX = _this$getData.x,
        initialY = _this$getData.y,
        initialWidth = _this$getData.width,
        initialHeight = _this$getData.height;
      var ratio = source.width / Math.floor(canvasData.naturalWidth);
      if (ratio !== 1) {
        initialX *= ratio;
        initialY *= ratio;
        initialWidth *= ratio;
        initialHeight *= ratio;
      }
      var aspectRatio = initialWidth / initialHeight;
      var maxSizes = getAdjustedSizes({
        aspectRatio: aspectRatio,
        width: options.maxWidth || Infinity,
        height: options.maxHeight || Infinity
      });
      var minSizes = getAdjustedSizes({
        aspectRatio: aspectRatio,
        width: options.minWidth || 0,
        height: options.minHeight || 0
      }, 'cover');
      var _getAdjustedSizes = getAdjustedSizes({
          aspectRatio: aspectRatio,
          width: options.width || (ratio !== 1 ? source.width : initialWidth),
          height: options.height || (ratio !== 1 ? source.height : initialHeight)
        }),
        width = _getAdjustedSizes.width,
        height = _getAdjustedSizes.height;
      width = Math.min(maxSizes.width, Math.max(minSizes.width, width));
      height = Math.min(maxSizes.height, Math.max(minSizes.height, height));
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      canvas.width = normalizeDecimalNumber(width);
      canvas.height = normalizeDecimalNumber(height);
      context.fillStyle = options.fillColor || 'transparent';
      context.fillRect(0, 0, width, height);
      var _options$imageSmoothi = options.imageSmoothingEnabled,
        imageSmoothingEnabled = _options$imageSmoothi === void 0 ? true : _options$imageSmoothi,
        imageSmoothingQuality = options.imageSmoothingQuality;
      context.imageSmoothingEnabled = imageSmoothingEnabled;
      if (imageSmoothingQuality) {
        context.imageSmoothingQuality = imageSmoothingQuality;
      }

      // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D.drawImage
      var sourceWidth = source.width;
      var sourceHeight = source.height;

      // Source canvas parameters
      var srcX = initialX;
      var srcY = initialY;
      var srcWidth;
      var srcHeight;

      // Destination canvas parameters
      var dstX;
      var dstY;
      var dstWidth;
      var dstHeight;
      if (srcX <= -initialWidth || srcX > sourceWidth) {
        srcX = 0;
        srcWidth = 0;
        dstX = 0;
        dstWidth = 0;
      } else if (srcX <= 0) {
        dstX = -srcX;
        srcX = 0;
        srcWidth = Math.min(sourceWidth, initialWidth + srcX);
        dstWidth = srcWidth;
      } else if (srcX <= sourceWidth) {
        dstX = 0;
        srcWidth = Math.min(initialWidth, sourceWidth - srcX);
        dstWidth = srcWidth;
      }
      if (srcWidth <= 0 || srcY <= -initialHeight || srcY > sourceHeight) {
        srcY = 0;
        srcHeight = 0;
        dstY = 0;
        dstHeight = 0;
      } else if (srcY <= 0) {
        dstY = -srcY;
        srcY = 0;
        srcHeight = Math.min(sourceHeight, initialHeight + srcY);
        dstHeight = srcHeight;
      } else if (srcY <= sourceHeight) {
        dstY = 0;
        srcHeight = Math.min(initialHeight, sourceHeight - srcY);
        dstHeight = srcHeight;
      }
      var params = [srcX, srcY, srcWidth, srcHeight];

      // Avoid "IndexSizeError"
      if (dstWidth > 0 && dstHeight > 0) {
        var scale = width / initialWidth;
        params.push(dstX * scale, dstY * scale, dstWidth * scale, dstHeight * scale);
      }

      // All the numerical parameters should be integer for `drawImage`
      // https://github.com/fengyuanchen/cropper/issues/476
      context.drawImage.apply(context, [source].concat(_toConsumableArray(params.map(function (param) {
        return Math.floor(normalizeDecimalNumber(param));
      }))));
      return canvas;
    },
    /**
     * Change the aspect ratio of the crop box.
     * @param {number} aspectRatio - The new aspect ratio.
     * @returns {Cropper} this
     */
    setAspectRatio: function setAspectRatio(aspectRatio) {
      var options = this.options;
      if (!this.disabled && !isUndefined(aspectRatio)) {
        // 0 -> NaN
        options.aspectRatio = Math.max(0, aspectRatio) || NaN;
        if (this.ready) {
          this.initCropBox();
          if (this.cropped) {
            this.renderCropBox();
          }
        }
      }
      return this;
    },
    /**
     * Change the drag mode.
     * @param {string} mode - The new drag mode.
     * @returns {Cropper} this
     */
    setDragMode: function setDragMode(mode) {
      var options = this.options,
        dragBox = this.dragBox,
        face = this.face;
      if (this.ready && !this.disabled) {
        var croppable = mode === DRAG_MODE_CROP;
        var movable = options.movable && mode === DRAG_MODE_MOVE;
        mode = croppable || movable ? mode : DRAG_MODE_NONE;
        options.dragMode = mode;
        setData(dragBox, DATA_ACTION, mode);
        toggleClass(dragBox, CLASS_CROP, croppable);
        toggleClass(dragBox, CLASS_MOVE, movable);
        if (!options.cropBoxMovable) {
          // Sync drag mode to crop box when it is not movable
          setData(face, DATA_ACTION, mode);
          toggleClass(face, CLASS_CROP, croppable);
          toggleClass(face, CLASS_MOVE, movable);
        }
      }
      return this;
    }
  };

  var AnotherCropper = WINDOW.Cropper;
  var Cropper = /*#__PURE__*/function () {
    /**
     * Create a new Cropper.
     * @param {Element} element - The target element for cropping.
     * @param {Object} [options={}] - The configuration options.
     */
    function Cropper(element) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      _classCallCheck(this, Cropper);
      if (!element || !REGEXP_TAG_NAME.test(element.tagName)) {
        throw new Error('The first argument is required and must be an <img> or <canvas> element.');
      }
      this.element = element;
      this.options = assign({}, DEFAULTS, isPlainObject(options) && options);
      this.cropped = false;
      this.disabled = false;
      this.pointers = {};
      this.ready = false;
      this.reloading = false;
      this.replaced = false;
      this.sized = false;
      this.sizing = false;
      this.init();
    }
    return _createClass(Cropper, [{
      key: "init",
      value: function init() {
        var element = this.element;
        var tagName = element.tagName.toLowerCase();
        var url;
        if (element[NAMESPACE]) {
          return;
        }
        element[NAMESPACE] = this;
        if (tagName === 'img') {
          this.isImg = true;

          // e.g.: "img/picture.jpg"
          url = element.getAttribute('src') || '';
          this.originalUrl = url;

          // Stop when it's a blank image
          if (!url) {
            return;
          }

          // e.g.: "https://example.com/img/picture.jpg"
          url = element.src;
        } else if (tagName === 'canvas' && window.HTMLCanvasElement) {
          url = element.toDataURL();
        }
        this.load(url);
      }
    }, {
      key: "load",
      value: function load(url) {
        var _this = this;
        if (!url) {
          return;
        }
        this.url = url;
        this.imageData = {};
        var element = this.element,
          options = this.options;
        if (!options.rotatable && !options.scalable) {
          options.checkOrientation = false;
        }

        // Only IE10+ supports Typed Arrays
        if (!options.checkOrientation || !window.ArrayBuffer) {
          this.clone();
          return;
        }

        // Detect the mime type of the image directly if it is a Data URL
        if (REGEXP_DATA_URL.test(url)) {
          // Read ArrayBuffer from Data URL of JPEG images directly for better performance
          if (REGEXP_DATA_URL_JPEG.test(url)) {
            this.read(dataURLToArrayBuffer(url));
          } else {
            // Only a JPEG image may contains Exif Orientation information,
            // the rest types of Data URLs are not necessary to check orientation at all.
            this.clone();
          }
          return;
        }

        // 1. Detect the mime type of the image by a XMLHttpRequest.
        // 2. Load the image as ArrayBuffer for reading orientation if its a JPEG image.
        var xhr = new XMLHttpRequest();
        var clone = this.clone.bind(this);
        this.reloading = true;
        this.xhr = xhr;

        // 1. Cross origin requests are only supported for protocol schemes:
        // http, https, data, chrome, chrome-extension.
        // 2. Access to XMLHttpRequest from a Data URL will be blocked by CORS policy
        // in some browsers as IE11 and Safari.
        xhr.onabort = clone;
        xhr.onerror = clone;
        xhr.ontimeout = clone;
        xhr.onprogress = function () {
          // Abort the request directly if it not a JPEG image for better performance
          if (xhr.getResponseHeader('content-type') !== MIME_TYPE_JPEG) {
            xhr.abort();
          }
        };
        xhr.onload = function () {
          _this.read(xhr.response);
        };
        xhr.onloadend = function () {
          _this.reloading = false;
          _this.xhr = null;
        };

        // Bust cache when there is a "crossOrigin" property to avoid browser cache error
        if (options.checkCrossOrigin && isCrossOriginURL(url) && element.crossOrigin) {
          url = addTimestamp(url);
        }

        // The third parameter is required for avoiding side-effect (#682)
        xhr.open('GET', url, true);
        xhr.responseType = 'arraybuffer';
        xhr.withCredentials = element.crossOrigin === 'use-credentials';
        xhr.send();
      }
    }, {
      key: "read",
      value: function read(arrayBuffer) {
        var options = this.options,
          imageData = this.imageData;

        // Reset the orientation value to its default value 1
        // as some iOS browsers will render image with its orientation
        var orientation = resetAndGetOrientation(arrayBuffer);
        var rotate = 0;
        var scaleX = 1;
        var scaleY = 1;
        if (orientation > 1) {
          // Generate a new URL which has the default orientation value
          this.url = arrayBufferToDataURL(arrayBuffer, MIME_TYPE_JPEG);
          var _parseOrientation = parseOrientation(orientation);
          rotate = _parseOrientation.rotate;
          scaleX = _parseOrientation.scaleX;
          scaleY = _parseOrientation.scaleY;
        }
        if (options.rotatable) {
          imageData.rotate = rotate;
        }
        if (options.scalable) {
          imageData.scaleX = scaleX;
          imageData.scaleY = scaleY;
        }
        this.clone();
      }
    }, {
      key: "clone",
      value: function clone() {
        var element = this.element,
          url = this.url;
        var crossOrigin = element.crossOrigin;
        var crossOriginUrl = url;
        if (this.options.checkCrossOrigin && isCrossOriginURL(url)) {
          if (!crossOrigin) {
            crossOrigin = 'anonymous';
          }

          // Bust cache when there is not a "crossOrigin" property (#519)
          crossOriginUrl = addTimestamp(url);
        }
        this.crossOrigin = crossOrigin;
        this.crossOriginUrl = crossOriginUrl;
        var image = document.createElement('img');
        if (crossOrigin) {
          image.crossOrigin = crossOrigin;
        }
        image.src = crossOriginUrl || url;
        image.alt = element.alt || 'The image to crop';
        this.image = image;
        image.onload = this.start.bind(this);
        image.onerror = this.stop.bind(this);
        addClass(image, CLASS_HIDE);
        element.parentNode.insertBefore(image, element.nextSibling);
      }
    }, {
      key: "start",
      value: function start() {
        var _this2 = this;
        var image = this.image;
        image.onload = null;
        image.onerror = null;
        this.sizing = true;

        // Match all browsers that use WebKit as the layout engine in iOS devices,
        // such as Safari for iOS, Chrome for iOS, and in-app browsers.
        var isIOSWebKit = WINDOW.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(WINDOW.navigator.userAgent);
        var done = function done(naturalWidth, naturalHeight) {
          assign(_this2.imageData, {
            naturalWidth: naturalWidth,
            naturalHeight: naturalHeight,
            aspectRatio: naturalWidth / naturalHeight
          });
          _this2.initialImageData = assign({}, _this2.imageData);
          _this2.sizing = false;
          _this2.sized = true;
          _this2.build();
        };

        // Most modern browsers (excepts iOS WebKit)
        if (image.naturalWidth && !isIOSWebKit) {
          done(image.naturalWidth, image.naturalHeight);
          return;
        }
        var sizingImage = document.createElement('img');
        var body = document.body || document.documentElement;
        this.sizingImage = sizingImage;
        sizingImage.onload = function () {
          done(sizingImage.width, sizingImage.height);
          if (!isIOSWebKit) {
            body.removeChild(sizingImage);
          }
        };
        sizingImage.src = image.src;

        // iOS WebKit will convert the image automatically
        // with its orientation once append it into DOM (#279)
        if (!isIOSWebKit) {
          sizingImage.style.cssText = 'left:0;' + 'max-height:none!important;' + 'max-width:none!important;' + 'min-height:0!important;' + 'min-width:0!important;' + 'opacity:0;' + 'position:absolute;' + 'top:0;' + 'z-index:-1;';
          body.appendChild(sizingImage);
        }
      }
    }, {
      key: "stop",
      value: function stop() {
        var image = this.image;
        image.onload = null;
        image.onerror = null;
        image.parentNode.removeChild(image);
        this.image = null;
      }
    }, {
      key: "build",
      value: function build() {
        if (!this.sized || this.ready) {
          return;
        }
        var element = this.element,
          options = this.options,
          image = this.image;

        // Create cropper elements
        var container = element.parentNode;
        var template = document.createElement('div');
        template.innerHTML = TEMPLATE;
        var cropper = template.querySelector(".".concat(NAMESPACE, "-container"));
        var canvas = cropper.querySelector(".".concat(NAMESPACE, "-canvas"));
        var dragBox = cropper.querySelector(".".concat(NAMESPACE, "-drag-box"));
        var cropBox = cropper.querySelector(".".concat(NAMESPACE, "-crop-box"));
        var face = cropBox.querySelector(".".concat(NAMESPACE, "-face"));
        this.container = container;
        this.cropper = cropper;
        this.canvas = canvas;
        this.dragBox = dragBox;
        this.cropBox = cropBox;
        this.viewBox = cropper.querySelector(".".concat(NAMESPACE, "-view-box"));
        this.face = face;
        canvas.appendChild(image);

        // Hide the original image
        addClass(element, CLASS_HIDDEN);

        // Inserts the cropper after to the current image
        container.insertBefore(cropper, element.nextSibling);

        // Show the hidden image
        removeClass(image, CLASS_HIDE);
        this.initPreview();
        this.bind();
        options.initialAspectRatio = Math.max(0, options.initialAspectRatio) || NaN;
        options.aspectRatio = Math.max(0, options.aspectRatio) || NaN;
        options.viewMode = Math.max(0, Math.min(3, Math.round(options.viewMode))) || 0;
        addClass(cropBox, CLASS_HIDDEN);
        if (!options.guides) {
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-dashed")), CLASS_HIDDEN);
        }
        if (!options.center) {
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-center")), CLASS_HIDDEN);
        }
        if (options.background) {
          addClass(cropper, "".concat(NAMESPACE, "-bg"));
        }
        if (!options.highlight) {
          addClass(face, CLASS_INVISIBLE);
        }
        if (options.cropBoxMovable) {
          addClass(face, CLASS_MOVE);
          setData(face, DATA_ACTION, ACTION_ALL);
        }
        if (!options.cropBoxResizable) {
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-line")), CLASS_HIDDEN);
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-point")), CLASS_HIDDEN);
        }
        this.render();
        this.ready = true;
        this.setDragMode(options.dragMode);
        if (options.autoCrop) {
          this.crop();
        }
        this.setData(options.data);
        if (isFunction(options.ready)) {
          addListener(element, EVENT_READY, options.ready, {
            once: true
          });
        }
        dispatchEvent(element, EVENT_READY);
      }
    }, {
      key: "unbuild",
      value: function unbuild() {
        if (!this.ready) {
          return;
        }
        this.ready = false;
        this.unbind();
        this.resetPreview();
        var parentNode = this.cropper.parentNode;
        if (parentNode) {
          parentNode.removeChild(this.cropper);
        }
        removeClass(this.element, CLASS_HIDDEN);
      }
    }, {
      key: "uncreate",
      value: function uncreate() {
        if (this.ready) {
          this.unbuild();
          this.ready = false;
          this.cropped = false;
        } else if (this.sizing) {
          this.sizingImage.onload = null;
          this.sizing = false;
          this.sized = false;
        } else if (this.reloading) {
          this.xhr.onabort = null;
          this.xhr.abort();
        } else if (this.image) {
          this.stop();
        }
      }

      /**
       * Get the no conflict cropper class.
       * @returns {Cropper} The cropper class.
       */
    }], [{
      key: "noConflict",
      value: function noConflict() {
        window.Cropper = AnotherCropper;
        return Cropper;
      }

      /**
       * Change the default options.
       * @param {Object} options - The new default options.
       */
    }, {
      key: "setDefaults",
      value: function setDefaults(options) {
        assign(DEFAULTS, isPlainObject(options) && options);
      }
    }]);
  }();
  assign(Cropper.prototype, render, preview, events, handlers, change, methods);

  return Cropper;

}));


/***/ }),

/***/ "./platform/core/media/resources/js/App/Config/MediaConfig.js":
/*!********************************************************************!*\
  !*** ./platform/core/media/resources/js/App/Config/MediaConfig.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MediaConfig: () => (/* binding */ MediaConfig),
/* harmony export */   RecentItems: () => (/* binding */ RecentItems)
/* harmony export */ });
var MediaConfig = $.parseJSON(localStorage.getItem('MediaConfig')) || {};
var defaultConfig = {
  app_key: RV_MEDIA_CONFIG.random_hash ? RV_MEDIA_CONFIG.random_hash : '21d06709fe1d3abdf0e35ddda89c4b282',
  request_params: {
    view_type: 'tiles',
    filter: 'everything',
    view_in: 'all_media',
    sort_by: 'created_at-desc',
    folder_id: 0
  },
  hide_details_pane: false,
  icons: {
    folder: "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n            <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n            <path d=\"M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2\"></path>\n        </svg>"
  },
  actions_list: {
    basic: [{
      icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                    <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n                    <path d=\"M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0\"></path>\n                    <path d=\"M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6\"></path>\n                </svg>",
      name: 'Preview',
      action: 'preview',
      order: 0,
      "class": 'rv-action-preview'
    }, {
      icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                    <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n                    <path d=\"M8 5v10a1 1 0 0 0 1 1h10\"></path>\n                    <path d=\"M5 8h10a1 1 0 0 1 1 1v10\"></path>\n                </svg>",
      name: 'Crop',
      action: 'crop',
      order: 1,
      "class": 'rv-action-crop'
    }],
    file: [{
      icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                    <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n                    <path d=\"M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1\"></path>\n                    <path d=\"M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z\"></path>\n                    <path d=\"M16 5l3 3\"></path>\n                </svg>",
      name: 'Rename',
      action: 'rename',
      order: 0,
      "class": 'rv-action-rename'
    }, {
      icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                    <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n                    <path d=\"M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z\"></path>\n                    <path d=\"M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2\"></path>\n                </svg>",
      name: 'Make a copy',
      action: 'make_copy',
      order: 1,
      "class": 'rv-action-make-copy'
    }, {
      icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                    <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n                    <path d=\"M15 8h.01\"></path>\n                    <path d=\"M11 20h-4a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v4\"></path>\n                    <path d=\"M4 15l4 -4c.928 -.893 2.072 -.893 3 0l3 3\"></path>\n                    <path d=\"M14 14l1 -1c.31 -.298 .644 -.497 .987 -.596\"></path>\n                    <path d=\"M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39z\"></path>\n                </svg>",
      name: 'Alt text',
      action: 'alt_text',
      order: 2,
      "class": 'rv-action-alt-text'
    }, {
      icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                    <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n                    <path d=\"M9 15l6 -6\"></path>\n                    <path d=\"M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464\"></path>\n                    <path d=\"M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463\"></path>\n                </svg>",
      name: 'Copy link',
      action: 'copy_link',
      order: 3,
      "class": 'rv-action-copy-link'
    }, {
      icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                    <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n                    <path d=\"M9 15l6 -6\"></path>\n                    <path d=\"M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464\"></path>\n                    <path d=\"M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463\"></path>\n                </svg>",
      name: 'Copy indirect link',
      action: 'copy_indirect_link',
      order: 4,
      "class": 'rv-action-copy-indirect-link'
    }, {
      icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                  <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n                  <path d=\"M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0\"></path>\n                  <path d=\"M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0\"></path>\n                  <path d=\"M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0\"></path>\n                  <path d=\"M8.7 10.7l6.6 -3.4\"></path>\n                  <path d=\"M8.7 13.3l6.6 3.4\"></path>\n                </svg>",
      name: 'Share',
      action: 'share',
      order: 5,
      "class": 'rv-action-share'
    }],
    user: [{
      icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                    <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n                    <path d=\"M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z\"></path>\n                </svg>",
      name: 'Favorite',
      action: 'favorite',
      order: 2,
      "class": 'rv-action-favorite'
    }, {
      icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                    <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n                    <path d=\"M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z\"></path>\n                </svg>",
      name: 'Remove favorite',
      action: 'remove_favorite',
      order: 3,
      "class": 'rv-action-favorite'
    }],
    other: [{
      icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                    <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n                    <path d=\"M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2\"></path>\n                    <path d=\"M7 11l5 5l5 -5\"></path>\n                    <path d=\"M12 4l0 12\"></path>\n                </svg>",
      name: 'Download',
      action: 'download',
      order: 0,
      "class": 'rv-action-download'
    }, {
      icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                    <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n                    <path d=\"M4 7l16 0\"></path>\n                    <path d=\"M10 11l0 6\"></path>\n                    <path d=\"M14 11l0 6\"></path>\n                    <path d=\"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12\"></path>\n                    <path d=\"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3\"></path>\n                </svg>",
      name: 'Move to trash',
      action: 'trash',
      order: 1,
      "class": 'rv-action-trash'
    }, {
      icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                    <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n                    <path d=\"M19 20h-10.5l-4.21 -4.3a1 1 0 0 1 0 -1.41l10 -10a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41l-9.2 9.3\"></path>\n                    <path d=\"M18 13.3l-6.3 -6.3\"></path>\n                </svg>",
      name: 'Delete permanently',
      action: 'delete',
      order: 2,
      "class": 'rv-action-delete'
    }, {
      icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                    <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n                    <path d=\"M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1\"></path>\n                </svg>",
      name: 'Restore',
      action: 'restore',
      order: 3,
      "class": 'rv-action-restore'
    }, {
      icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-palette\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25\" /><path d=\"M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /></svg>",
      name: 'Properties',
      action: 'properties',
      order: 4,
      "class": 'rv-action-properties'
    }]
  }
};
if (!MediaConfig.app_key || MediaConfig.app_key !== defaultConfig.app_key) {
  MediaConfig = defaultConfig;
}
MediaConfig.request_params.search = '';
var RecentItems = $.parseJSON(localStorage.getItem('RecentItems')) || [];


/***/ }),

/***/ "./platform/core/media/resources/js/App/Helpers/Helpers.js":
/*!*****************************************************************!*\
  !*** ./platform/core/media/resources/js/App/Helpers/Helpers.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Helpers: () => (/* binding */ Helpers)
/* harmony export */ });
/* harmony import */ var _Config_MediaConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Config/MediaConfig */ "./platform/core/media/resources/js/App/Config/MediaConfig.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Helpers = /*#__PURE__*/function () {
  function Helpers() {
    _classCallCheck(this, Helpers);
  }
  return _createClass(Helpers, null, [{
    key: "getUrlParam",
    value: function getUrlParam(paramName) {
      var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (!url) {
        url = window.location.search;
      }
      var reParam = new RegExp('(?:[?&]|&)' + paramName + '=([^&]+)', 'i');
      var match = url.match(reParam);
      return match && match.length > 1 ? match[1] : null;
    }
  }, {
    key: "asset",
    value: function asset(url) {
      if (url.substring(0, 2) === '//' || url.substring(0, 7) === 'http://' || url.substring(0, 8) === 'https://') {
        return url;
      }
      var baseUrl = RV_MEDIA_URL.base_url.substr(-1, 1) !== '/' ? RV_MEDIA_URL.base_url + '/' : RV_MEDIA_URL.base_url;
      if (url.substring(0, 1) === '/') {
        return baseUrl + url.substring(1);
      }
      return baseUrl + url;
    }
  }, {
    key: "showAjaxLoading",
    value: function showAjaxLoading() {
      var $element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $('.rv-media-main');
      $element.addClass('on-loading').append($('#rv_media_loading').html());
    }
  }, {
    key: "hideAjaxLoading",
    value: function hideAjaxLoading() {
      var $element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $('.rv-media-main');
      $element.removeClass('on-loading').find('.loading-spinner').remove();
    }
  }, {
    key: "isOnAjaxLoading",
    value: function isOnAjaxLoading() {
      var $element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $('.rv-media-items');
      return $element.hasClass('on-loading');
    }
  }, {
    key: "jsonEncode",
    value: function jsonEncode(object) {
      if (typeof object === 'undefined') {
        object = null;
      }
      return JSON.stringify(object);
    }
  }, {
    key: "jsonDecode",
    value: function jsonDecode(jsonString, defaultValue) {
      if (!jsonString) {
        return defaultValue;
      }
      if (typeof jsonString === 'string') {
        var result;
        try {
          result = $.parseJSON(jsonString);
        } catch (err) {
          result = defaultValue;
        }
        return result;
      }
      return jsonString;
    }
  }, {
    key: "getRequestParams",
    value: function getRequestParams() {
      if (window.rvMedia.options && window.rvMedia.options.open_in === 'modal') {
        return _objectSpread(_objectSpread({}, _Config_MediaConfig__WEBPACK_IMPORTED_MODULE_0__.MediaConfig.request_params), window.rvMedia.options);
      }
      return _Config_MediaConfig__WEBPACK_IMPORTED_MODULE_0__.MediaConfig.request_params;
    }
  }, {
    key: "setSelectedFile",
    value: function setSelectedFile(fileId) {
      if (typeof window.rvMedia.options !== 'undefined') {
        window.rvMedia.options.selected_file_id = fileId;
      } else {
        _Config_MediaConfig__WEBPACK_IMPORTED_MODULE_0__.MediaConfig.request_params.selected_file_id = fileId;
      }
    }
  }, {
    key: "getConfigs",
    value: function getConfigs() {
      return _Config_MediaConfig__WEBPACK_IMPORTED_MODULE_0__.MediaConfig;
    }
  }, {
    key: "storeConfig",
    value: function storeConfig() {
      localStorage.setItem('MediaConfig', Helpers.jsonEncode(_Config_MediaConfig__WEBPACK_IMPORTED_MODULE_0__.MediaConfig));
    }
  }, {
    key: "storeRecentItems",
    value: function storeRecentItems() {
      localStorage.setItem('RecentItems', Helpers.jsonEncode(_Config_MediaConfig__WEBPACK_IMPORTED_MODULE_0__.RecentItems));
    }
  }, {
    key: "addToRecent",
    value: function addToRecent(id) {
      if (id instanceof Array) {
        Helpers.each(id, function (value) {
          _Config_MediaConfig__WEBPACK_IMPORTED_MODULE_0__.RecentItems.push(value);
        });
      } else {
        _Config_MediaConfig__WEBPACK_IMPORTED_MODULE_0__.RecentItems.push(id);
        this.storeRecentItems();
      }
    }
  }, {
    key: "getItems",
    value: function getItems() {
      var items = [];
      $('.js-media-list-title').each(function (index, el) {
        var $box = $(el);
        var data = $box.data() || {};
        data.index_key = $box.index();
        items.push(data);
      });
      return items;
    }
  }, {
    key: "getSelectedItems",
    value: function getSelectedItems() {
      var selected = [];
      $('.js-media-list-title input[type=checkbox]:checked').each(function (index, el) {
        var $box = $(el).closest('.js-media-list-title');
        var data = $box.data() || {};
        data.index_key = $box.index();
        selected.push(data);
      });
      return selected;
    }
  }, {
    key: "getSelectedFiles",
    value: function getSelectedFiles() {
      var selected = [];
      $('.js-media-list-title[data-context=file] input[type=checkbox]:checked').each(function (index, el) {
        var $box = $(el).closest('.js-media-list-title');
        var data = $box.data() || {};
        data.index_key = $box.index();
        selected.push(data);
      });
      return selected;
    }
  }, {
    key: "getSelectedFolder",
    value: function getSelectedFolder() {
      var selected = [];
      $('.js-media-list-title[data-context=folder] input[type=checkbox]:checked').each(function (index, el) {
        var $box = $(el).closest('.js-media-list-title');
        var data = $box.data() || {};
        data.index_key = $box.index();
        selected.push(data);
      });
      return selected;
    }
  }, {
    key: "isUseInModal",
    value: function isUseInModal() {
      return window.rvMedia && window.rvMedia.options && window.rvMedia.options.open_in === 'modal';
    }
  }, {
    key: "resetPagination",
    value: function resetPagination() {
      RV_MEDIA_CONFIG.pagination = {
        paged: 1,
        posts_per_page: 40,
        in_process_get_media: false,
        has_more: true
      };
    }
  }, {
    key: "trans",
    value: function trans(key) {
      return _.get(RV_MEDIA_CONFIG.translations, key, key);
    }
  }, {
    key: "config",
    value: function config(key) {
      var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return _.get(RV_MEDIA_CONFIG, key, defaultValue);
    }
  }, {
    key: "hasPermission",
    value: function hasPermission(key) {
      return Helpers.inArray(Helpers.config('permissions', []), key);
    }
  }, {
    key: "inArray",
    value: function inArray(array, value) {
      return _.includes(array, value);
    }
  }, {
    key: "each",
    value: function each(array, callback) {
      return _.each(array, callback);
    }
  }, {
    key: "forEach",
    value: function forEach(array, callback) {
      return _.forEach(array, callback);
    }
  }, {
    key: "arrayReject",
    value: function arrayReject(array, callback) {
      return _.reject(array, callback);
    }
  }, {
    key: "arrayFilter",
    value: function arrayFilter(array, callback) {
      return _.filter(array, callback);
    }
  }, {
    key: "arrayFirst",
    value: function arrayFirst(array) {
      return _.first(array);
    }
  }, {
    key: "isArray",
    value: function isArray(value) {
      return _.isArray(value);
    }
  }, {
    key: "isEmpty",
    value: function isEmpty(value) {
      return _.isEmpty(value);
    }
  }, {
    key: "size",
    value: function size(item) {
      return _.size(item);
    }
  }]);
}();

/***/ }),

/***/ "./platform/core/media/resources/js/App/Services/ActionsService.js":
/*!*************************************************************************!*\
  !*** ./platform/core/media/resources/js/App/Services/ActionsService.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionsService: () => (/* binding */ ActionsService)
/* harmony export */ });
/* harmony import */ var cropperjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cropperjs */ "./node_modules/cropperjs/dist/cropper.js");
/* harmony import */ var cropperjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cropperjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Config_MediaConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Config/MediaConfig */ "./platform/core/media/resources/js/App/Config/MediaConfig.js");
/* harmony import */ var _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Helpers/Helpers */ "./platform/core/media/resources/js/App/Helpers/Helpers.js");
/* harmony import */ var _MessageService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MessageService */ "./platform/core/media/resources/js/App/Services/MessageService.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




var ActionsService = /*#__PURE__*/function () {
  function ActionsService() {
    _classCallCheck(this, ActionsService);
  }
  return _createClass(ActionsService, null, [{
    key: "handleDropdown",
    value: function handleDropdown() {
      var selected = _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.size(_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.getSelectedItems());
      ActionsService.renderActions();
      if (selected > 0) {
        $('.rv-dropdown-actions > .dropdown-toggle').removeClass('disabled').prop('disabled', false);
      } else {
        $('.rv-dropdown-actions > .dropdown-toggle').addClass('disabled').prop('disabled', true);
      }
    }
  }, {
    key: "handlePreview",
    value: function handlePreview() {
      var selected = [];
      _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.each(_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.getSelectedFiles(), function (value) {
        if (value.preview_url) {
          if (value.type === 'document') {
            var iframe = document.createElement('iframe');
            iframe.src = value.preview_url;
            iframe.allowFullscreen = true;
            iframe.style.width = '100vh';
            iframe.style.height = '100vh';
            selected.push(iframe);
          } else {
            selected.push(value.preview_url);
          }
          _Config_MediaConfig__WEBPACK_IMPORTED_MODULE_1__.RecentItems.push(value.id);
        }
      });
      if (_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.size(selected) > 0) {
        Botble.lightbox(selected);
        _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.storeRecentItems();
      } else {
        this.handleGlobalAction('download');
      }
    }
  }, {
    key: "renderCropImage",
    value: function renderCropImage() {
      var html = $('#rv_media_crop_image').html();
      var modal = $('#modal_crop_image .crop-image').empty();
      var item = _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.getSelectedItems()[0];
      var form = $('#modal_crop_image .form-crop');
      var cropData;
      var el = html.replace(/__src__/gi, item.full_url);
      modal.append(el);
      var image = modal.find('img')[0];
      var options = {
        minContainerWidth: 500,
        minContainerHeight: 550,
        dragMode: 'move',
        crop: function crop(event) {
          cropData = event.detail;
          form.find('input[name="image_id"]').val(item.id);
          form.find('input[name="crop_data"]').val(JSON.stringify(cropData));
          setHeight(cropData.height);
          setWidth(cropData.width);
        }
      };
      var cropper = new (cropperjs__WEBPACK_IMPORTED_MODULE_0___default())(image, options);
      form.find('#aspectRatio').on('click', function () {
        cropper.destroy();
        if ($(this).is(':checked')) {
          options.aspectRatio = cropData.width / cropData.height;
        } else {
          options.aspectRatio = null;
        }
        cropper = new (cropperjs__WEBPACK_IMPORTED_MODULE_0___default())(image, options);
      });
      form.find('#dataHeight').on('change', function () {
        cropData.height = parseFloat($(this).val());
        cropper.setData(cropData);
        setHeight(cropData.height);
      });
      form.find('#dataWidth').on('change', function () {
        cropData.width = parseFloat($(this).val());
        cropper.setData(cropData);
        setWidth(cropData.width);
      });
      var setHeight = function setHeight(height) {
        form.find('#dataHeight').val(parseInt(height));
      };
      var setWidth = function setWidth(width) {
        form.find('#dataWidth').val(parseInt(width));
      };
    }
  }, {
    key: "handleCopyLink",
    value: function () {
      var _handleCopyLink = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var links;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              links = '';
              _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.each(_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.getSelectedFiles(), function (value) {
                if (!_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.isEmpty(links)) {
                  links += '\n';
                }
                links += value.full_url;
              });
              _context.next = 4;
              return Botble.copyToClipboard(links);
            case 4:
              _MessageService__WEBPACK_IMPORTED_MODULE_3__.MessageService.showMessage('success', _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.trans('clipboard.success'), _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.trans('message.success_header'));
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function handleCopyLink() {
        return _handleCopyLink.apply(this, arguments);
      }
      return handleCopyLink;
    }()
  }, {
    key: "handleCopyIndirectLink",
    value: function () {
      var _handleCopyIndirectLink = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var links;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              links = '';
              _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.each(_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.getSelectedFiles(), function (value) {
                if (!_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.isEmpty(links)) {
                  links += '\n';
                }
                links += value.indirect_url;
              });
              _context2.next = 4;
              return Botble.copyToClipboard(links);
            case 4:
              _MessageService__WEBPACK_IMPORTED_MODULE_3__.MessageService.showMessage('success', _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.trans('clipboard.success'), _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.trans('message.success_header'));
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function handleCopyIndirectLink() {
        return _handleCopyIndirectLink.apply(this, arguments);
      }
      return handleCopyIndirectLink;
    }()
  }, {
    key: "handleShare",
    value: function handleShare() {
      $('#modal_share_items').modal('show').find('form.form-alt-text').data('action', type);
    }
  }, {
    key: "handleGlobalAction",
    value: function handleGlobalAction(type, callback) {
      var selected = [];
      _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.each(_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.getSelectedItems(), function (value) {
        selected.push({
          is_folder: value.is_folder,
          id: value.id,
          full_url: value.full_url
        });
      });
      switch (type) {
        case 'rename':
          $('#modal_rename_items').modal('show').find('form.form-rename').data('action', type);
          break;
        case 'copy_link':
          ActionsService.handleCopyLink().then(function () {});
          break;
        case 'copy_indirect_link':
          ActionsService.handleCopyIndirectLink().then(function () {});
          break;
        case 'share':
          $('#modal_share_items').modal('show');
          break;
        case 'preview':
          ActionsService.handlePreview();
          break;
        case 'alt_text':
          $('#modal_alt_text_items').modal('show').find('form.form-alt-text').data('action', type);
          break;
        case 'crop':
          $('#modal_crop_image').modal('show').find('form.rv-form').data('action', type);
          break;
        case 'trash':
          $('#modal_trash_items').modal('show').find('form.form-delete-items').data('action', type);
          break;
        case 'delete':
          $('#modal_delete_items').modal('show').find('form.form-delete-items').data('action', type);
          break;
        case 'empty_trash':
          $('#modal_empty_trash').modal('show').find('form.form-empty-trash').data('action', type);
          break;
        case 'download':
          var files = [];
          _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.each(_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.getSelectedItems(), function (value) {
            if (!_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.inArray(_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.getConfigs().denied_download, value.mime_type)) {
              files.push({
                id: value.id,
                is_folder: value.is_folder
              });
            }
          });
          if (files.length) {
            ActionsService.handleDownload(files);
          } else {
            _MessageService__WEBPACK_IMPORTED_MODULE_3__.MessageService.showMessage('error', _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.trans('download.error'), _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.trans('message.error_header'));
          }
          break;
        case 'properties':
          $('#modal-properties').modal('show');
          break;
        default:
          ActionsService.processAction({
            selected: selected,
            action: type
          }, callback);
          break;
      }
    }
  }, {
    key: "processAction",
    value: function processAction(data) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.showAjaxLoading();
      $httpClient.make().post(RV_MEDIA_URL.global_actions, data).then(function (_ref) {
        var data = _ref.data;
        _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.resetPagination();
        _MessageService__WEBPACK_IMPORTED_MODULE_3__.MessageService.showMessage('success', data.message, _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.trans('message.success_header'));
        callback && callback(data);
      })["catch"](function (_ref2) {
        var response = _ref2.response;
        return callback && callback(response.data);
      })["finally"](function () {
        return _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.hideAjaxLoading();
      });
    }
  }, {
    key: "renderRenameItems",
    value: function renderRenameItems() {
      var VIEW = $('#rv_media_rename_item').html();
      var $itemsWrapper = $('#modal_rename_items .rename-items').empty();
      _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.each(_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.getSelectedItems(), function (value) {
        var item = VIEW.replace(/__icon__/gi, value.icon || "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                    <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n                    <path d=\"M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2\"></path>\n                </svg>").replace(/__placeholder__/gi, 'Input file name').replace(/__value__/gi, value.name);
        var $item = $(item);
        $item.data('id', value.id.toString());
        $item.data('is_folder', value.is_folder);
        $item.data('name', value.name);
        var $renamePhysicalFile = $item.find('input[name="rename_physical_file"]');
        $renamePhysicalFile.closest('.form-check').find('span').text(value.is_folder ? $renamePhysicalFile.data('folder-label') : $renamePhysicalFile.data('file-label'));
        $item.find('input[name="rename_physical_file"]').on('change', function () {
          $item.data('rename_physical_file', $(this).is(':checked'));
        });
        $itemsWrapper.append($item);
        Botble.initFieldCollapse();
      });
    }
  }, {
    key: "renderAltTextItems",
    value: function renderAltTextItems() {
      var VIEW = $('#rv_media_alt_text_item').html();
      var $itemsWrapper = $('#modal_alt_text_items .alt-text-items').empty();
      _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.each(_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.getSelectedItems(), function (value) {
        var item = VIEW.replace(/__icon__/gi, value.icon || "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                    <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n                    <path d=\"M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2\"></path>\n                </svg>").replace(/__placeholder__/gi, 'Input file alt').replace(/__value__/gi, value.alt === null ? '' : value.alt);
        var $item = $(item);
        $item.data('id', value.id);
        $item.data('alt', value.alt);
        $itemsWrapper.append($item);
      });
    }
  }, {
    key: "renderShareItems",
    value: function renderShareItems() {
      var target = $('#modal_share_items [data-bb-value="share-result"]');
      var shareType = $('#modal_share_items select[data-bb-value="share-type"]').val();
      target.val('');
      var results = [];
      _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.each(_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.getSelectedItems(), function (value) {
        switch (shareType) {
          case 'html':
            results.push(value.type === 'image' ? "<img src=\"".concat(value.full_url, "\" alt=\"").concat(value.alt, "\" />") : "<a href=\"".concat(value.full_url, "\" target=\"_blank\">").concat(value.alt, "</a>"));
            break;
          case 'markdown':
            results.push((value.type === 'image' ? '!' : '') + "[".concat(value.alt, "](").concat(value.full_url, ")"));
            break;
          case 'indirect_url':
            results.push(value.indirect_url);
            break;
          default:
            results.push(value.full_url);
        }
      });
      target.val(results.join('\n'));
    }
  }, {
    key: "renderActions",
    value: function renderActions() {
      var hasFolderSelected = _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.getSelectedFolder().length > 0;
      var ACTION_TEMPLATE = $('#rv_action_item').html();
      var initializedItem = 0;
      var $dropdownActions = $('.rv-dropdown-actions .dropdown-menu');
      $dropdownActions.empty();
      var actionsList = $.extend({}, true, _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.getConfigs().actions_list);
      if (hasFolderSelected) {
        var ignoreActions = ['preview', 'crop', 'alt_text', 'copy_link', 'copy_direct_link', 'share'];
        actionsList.basic = _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.arrayReject(actionsList.basic, function (item) {
          return ignoreActions.includes(item.action);
        });
        if (!_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.hasPermission('folders.create')) {
          actionsList.file = _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.arrayReject(actionsList.file, function (item) {
            return item.action === 'make_copy';
          });
        }
        if (!_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.hasPermission('folders.edit')) {
          actionsList.file = _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.arrayReject(actionsList.file, function (item) {
            return _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.inArray(['rename'], item.action);
          });
          actionsList.user = _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.arrayReject(actionsList.user, function (item) {
            return _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.inArray(['rename'], item.action);
          });
        }
        if (!_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.hasPermission('folders.trash')) {
          actionsList.other = _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.arrayReject(actionsList.other, function (item) {
            return _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.inArray(['trash', 'restore'], item.action);
          });
        }
        if (!_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.hasPermission('folders.destroy')) {
          actionsList.other = _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.arrayReject(actionsList.other, function (item) {
            return _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.inArray(['delete'], item.action);
          });
        }
        if (!_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.hasPermission('folders.favorite')) {
          actionsList.other = _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.arrayReject(actionsList.other, function (item) {
            return _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.inArray(['favorite', 'remove_favorite'], item.action);
          });
        }
      }
      var selectedFiles = _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.getSelectedFiles();
      var canPreview = _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.arrayFilter(selectedFiles, function (value) {
        return value.preview_url;
      }).length;
      if (!canPreview) {
        actionsList.basic = _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.arrayReject(actionsList.basic, function (item) {
          return item.action === 'preview';
        });
      }
      var fileIsImage = _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.arrayFilter(selectedFiles, function (value) {
        return value.type === 'image';
      }).length;
      if (!fileIsImage) {
        actionsList.basic = _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.arrayReject(actionsList.basic, function (item) {
          return item.action === 'crop';
        });
        actionsList.file = _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.arrayReject(actionsList.file, function (item) {
          return item.action === 'alt_text';
        });
      }
      if (selectedFiles.length > 0) {
        if (!_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.hasPermission('files.create')) {
          actionsList.file = _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.arrayReject(actionsList.file, function (item) {
            return item.action === 'make_copy';
          });
        }
        if (!_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.hasPermission('files.edit')) {
          actionsList.file = _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.arrayReject(actionsList.file, function (item) {
            return _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.inArray(['rename'], item.action);
          });
        }
        if (!_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.hasPermission('files.trash')) {
          actionsList.other = _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.arrayReject(actionsList.other, function (item) {
            return _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.inArray(['trash', 'restore'], item.action);
          });
        }
        if (!_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.hasPermission('files.destroy')) {
          actionsList.other = _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.arrayReject(actionsList.other, function (item) {
            return _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.inArray(['delete'], item.action);
          });
        }
        if (!_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.hasPermission('files.favorite')) {
          actionsList.other = _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.arrayReject(actionsList.other, function (item) {
            return _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.inArray(['favorite', 'remove_favorite'], item.action);
          });
        }
        if (selectedFiles.length > 1) {
          actionsList.basic = _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.arrayReject(actionsList.basic, function (item) {
            return item.action === 'crop';
          });
        }
      }
      if (!_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.hasPermission('folders.edit') || selectedFiles.length > 0) {
        actionsList.other = _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.arrayReject(actionsList.other, function (item) {
          return _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.inArray(['properties'], item.action);
        });
      }
      _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.each(actionsList, function (action, key) {
        _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.each(action, function (item, index) {
          var is_break = false;
          switch (_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.getRequestParams().view_in) {
            case 'all_media':
              if (_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.inArray(['remove_favorite', 'delete', 'restore'], item.action)) {
                is_break = true;
              }
              break;
            case 'recent':
              if (_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.inArray(['remove_favorite', 'delete', 'restore', 'make_copy'], item.action)) {
                is_break = true;
              }
              break;
            case 'favorites':
              if (_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.inArray(['favorite', 'delete', 'restore', 'make_copy'], item.action)) {
                is_break = true;
              }
              break;
            case 'trash':
              if (!_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.inArray(['preview', 'delete', 'restore', 'rename', 'download'], item.action)) {
                is_break = true;
              }
              break;
          }
          if (!is_break) {
            var template = ACTION_TEMPLATE.replace(/__action__/gi, item.action || '').replace('<i class="__icon__ dropdown-item-icon dropdown-item-icon"></i>', '<span class="icon-tabler-wrapper dropdown-item-icon">__icon__</span>').replace('__icon__', '<span class="icon-tabler-wrapper dropdown-item-icon">__icon__</span>').replace('__icon__', item.icon || '').replace(/__name__/gi, _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.trans("actions_list.".concat(key, ".").concat(item.action)) || item.name);
            if (item.icon) {
              template = template.replace('media-icon', 'media-icon dropdown-item-icon');
            }
            if (!index && initializedItem) {
              template = "<li role=\"separator\" class=\"divider\"></li>".concat(template);
            }
            $dropdownActions.append(template);
          }
        });
        if (action.length > 0) {
          initializedItem++;
        }
      });
    }
  }, {
    key: "handleDownload",
    value: function handleDownload(files) {
      var html = $('.media-download-popup');
      var downloadTimeout = null;
      html.show();
      $httpClient.make().withResponseType('blob').post(RV_MEDIA_URL.download, {
        selected: files
      }).then(function (response) {
        var fileName = (response.headers['content-disposition'] || '').split('filename=')[1].split(';')[0];
        var objectUrl = URL.createObjectURL(response.data);
        var a = document.createElement('a');
        a.href = objectUrl;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(objectUrl);
      })["finally"](function () {
        html.hide();
        clearTimeout(downloadTimeout);
      });
    }
  }]);
}();

/***/ }),

/***/ "./platform/core/media/resources/js/App/Services/ContextMenuService.js":
/*!*****************************************************************************!*\
  !*** ./platform/core/media/resources/js/App/Services/ContextMenuService.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContextMenuService: () => (/* binding */ ContextMenuService)
/* harmony export */ });
/* harmony import */ var _ActionsService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActionsService */ "./platform/core/media/resources/js/App/Services/ActionsService.js");
/* harmony import */ var _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Helpers/Helpers */ "./platform/core/media/resources/js/App/Helpers/Helpers.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var ContextMenuService = /*#__PURE__*/function () {
  function ContextMenuService() {
    _classCallCheck(this, ContextMenuService);
  }
  return _createClass(ContextMenuService, null, [{
    key: "initContext",
    value: function initContext() {
      if (jQuery().contextMenu) {
        $.contextMenu({
          selector: '.js-context-menu[data-context="file"]',
          build: function build() {
            return {
              items: ContextMenuService._fileContextMenu()
            };
          }
        });
        $.contextMenu({
          selector: '.js-context-menu[data-context="folder"]',
          build: function build() {
            return {
              items: ContextMenuService._folderContextMenu()
            };
          }
        });
      }
    }
  }, {
    key: "_fileContextMenu",
    value: function _fileContextMenu() {
      var items = {
        preview: {
          name: 'Preview',
          icon: function icon(opt, $itemElement, itemKey, item) {
            $itemElement.html("<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                        <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n                        <path d=\"M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0\"></path>\n                        <path d=\"M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6\"></path>\n                    </svg> ".concat(item.name));
            return 'context-menu-icon-updated';
          },
          callback: function callback() {
            _ActionsService__WEBPACK_IMPORTED_MODULE_0__.ActionsService.handlePreview();
          }
        }
      };
      _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.each(_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.getConfigs().actions_list, function (actionGroup, key) {
        _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.each(actionGroup, function (value) {
          items[value.action] = {
            name: value.name,
            icon: function icon(opt, $itemElement, itemKey, item) {
              $itemElement.html("".concat(value.icon, " ").concat(_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.trans("actions_list.".concat(key, ".").concat(value.action)) || item.name));
              return "context-menu-icon-updated media-action-".concat(value.action);
            },
            callback: function callback() {
              $(".js-files-action[data-action=\"".concat(value.action, "\"]")).trigger('click');
            }
          };
        });
      });
      var except = [];
      switch (_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.getRequestParams().view_in) {
        case 'all_media':
          except = ['remove_favorite', 'delete', 'restore'];
          break;
        case 'recent':
          except = ['remove_favorite', 'delete', 'restore', 'make_copy'];
          break;
        case 'favorites':
          except = ['favorite', 'delete', 'restore', 'make_copy'];
          break;
        case 'trash':
          items = {
            preview: items.preview,
            rename: items.rename,
            download: items.download,
            "delete": items["delete"],
            restore: items.restore
          };
          break;
      }
      _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.each(except, function (value) {
        items[value] = undefined;
      });
      var hasFolderSelected = _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.getSelectedFolder().length > 0;
      if (hasFolderSelected) {
        items.preview = undefined;
        items.crop = undefined;
        items.copy_link = undefined;
        items.copy_indirect_link = undefined;
        items.share = undefined;
        items.alt_text = undefined;
        if (!_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.hasPermission('folders.create')) {
          items.make_copy = undefined;
        }
        if (!_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.hasPermission('folders.edit')) {
          items.rename = undefined;
        }
        if (!_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.hasPermission('folders.trash')) {
          items.trash = undefined;
          items.restore = undefined;
        }
        if (!_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.hasPermission('folders.destroy')) {
          items["delete"] = undefined;
        }
        if (!_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.hasPermission('folders.favorite')) {
          items.favorite = undefined;
          items.remove_favorite = undefined;
        }
      }
      var selectedFiles = _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.getSelectedFiles();
      if (selectedFiles.length > 0) {
        if (!_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.hasPermission('files.create')) {
          items.make_copy = undefined;
        }
        if (!_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.hasPermission('files.edit')) {
          items.rename = undefined;
        }
        if (!_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.hasPermission('files.trash')) {
          items.trash = undefined;
          items.restore = undefined;
        }
        if (!_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.hasPermission('files.destroy')) {
          items["delete"] = undefined;
        }
        if (!_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.hasPermission('files.favorite')) {
          items.favorite = undefined;
          items.remove_favorite = undefined;
        }
        if (selectedFiles.length > 1) {
          items.crop = undefined;
        }
        items.properties = undefined;
      }
      var canPreview = _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.arrayFilter(selectedFiles, function (value) {
        return value.preview_url;
      }).length;
      if (!canPreview) {
        items.preview = undefined;
      }
      var fileIsImage = _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.arrayFilter(selectedFiles, function (value) {
        return value.type === 'image';
      }).length;
      if (!fileIsImage) {
        items.crop = undefined;
        items.alt_text = undefined;
      }
      if (!_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.arrayFilter(selectedFiles, function (value) {
        return value.full_url;
      }).length) {
        items.copy_link = undefined;
      }
      return items;
    }
  }, {
    key: "_folderContextMenu",
    value: function _folderContextMenu() {
      var items = ContextMenuService._fileContextMenu();
      items.preview = undefined;
      items.copy_link = undefined;
      return items;
    }
  }, {
    key: "destroyContext",
    value: function destroyContext() {
      if (jQuery().contextMenu) {
        $.contextMenu('destroy');
      }
    }
  }]);
}();

/***/ }),

/***/ "./platform/core/media/resources/js/App/Services/DownloadService.js":
/*!**************************************************************************!*\
  !*** ./platform/core/media/resources/js/App/Services/DownloadService.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DownloadService: () => (/* binding */ DownloadService)
/* harmony export */ });
/* harmony import */ var _MediaService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MediaService */ "./platform/core/media/resources/js/App/Services/MediaService.js");
/* harmony import */ var _MessageService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MessageService */ "./platform/core/media/resources/js/App/Services/MessageService.js");
/* harmony import */ var _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Helpers/Helpers */ "./platform/core/media/resources/js/App/Helpers/Helpers.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var DownloadService = /*#__PURE__*/function () {
  function DownloadService() {
    _classCallCheck(this, DownloadService);
    this.MediaService = new _MediaService__WEBPACK_IMPORTED_MODULE_0__.MediaService();
    $(document).on('shown.bs.modal', '#modal_download_url', function (event) {
      $(event.currentTarget).find('.form-download-url input[type=text]').focus();
    });
  }
  return _createClass(DownloadService, [{
    key: "download",
    value: function () {
      var _download = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(urls, onProgress, onCompleted) {
        var _self, index, hasError, _iterator, _step, _loop;
        return _regeneratorRuntime().wrap(function _callee$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _self = this;
              urls = $.trim(urls).split(/\r?\n/);
              index = 0;
              hasError = false;
              _iterator = _createForOfIteratorHelper(urls);
              _context2.prev = 5;
              _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
                var url, filename, ok;
                return _regeneratorRuntime().wrap(function _loop$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      url = _step.value;
                      filename = '';
                      try {
                        filename = new URL(url).pathname.split('/').pop();
                      } catch (e) {
                        filename = url;
                      }
                      ok = onProgress("".concat(index, " / ").concat(urls.length), filename, url);
                      _context.next = 6;
                      return new Promise(function (resolve, reject) {
                        $httpClient.make().post(RV_MEDIA_URL.download_url, {
                          folderId: _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.getRequestParams().folder_id,
                          url: url
                        }).then(function (_ref) {
                          var _data$data;
                          var data = _ref.data;
                          ok(true, data.message || ((_data$data = data.data) === null || _data$data === void 0 ? void 0 : _data$data.message));
                          resolve();
                        })["finally"](function () {
                          return onCompleted();
                        })["catch"](function (error) {
                          return reject(error);
                        });
                      });
                    case 6:
                      index += 1;
                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }, _loop);
              });
              _iterator.s();
            case 8:
              if ((_step = _iterator.n()).done) {
                _context2.next = 12;
                break;
              }
              return _context2.delegateYield(_loop(), "t0", 10);
            case 10:
              _context2.next = 8;
              break;
            case 12:
              _context2.next = 17;
              break;
            case 14:
              _context2.prev = 14;
              _context2.t1 = _context2["catch"](5);
              _iterator.e(_context2.t1);
            case 17:
              _context2.prev = 17;
              _iterator.f();
              return _context2.finish(17);
            case 20:
              _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.resetPagination();
              _self.MediaService.getMedia(true);
              if (!hasError) {
                DownloadService.closeModal();
                _MessageService__WEBPACK_IMPORTED_MODULE_1__.MessageService.showMessage('success', _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.trans('message.success_header'));
              }
            case 23:
            case "end":
              return _context2.stop();
          }
        }, _callee, this, [[5, 14, 17, 20]]);
      }));
      function download(_x, _x2, _x3) {
        return _download.apply(this, arguments);
      }
      return download;
    }()
  }], [{
    key: "closeModal",
    value: function closeModal() {
      $(document).find('#modal_download_url').modal('hide');
    }
  }]);
}();

/***/ }),

/***/ "./platform/core/media/resources/js/App/Services/FolderService.js":
/*!************************************************************************!*\
  !*** ./platform/core/media/resources/js/App/Services/FolderService.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FolderService: () => (/* binding */ FolderService)
/* harmony export */ });
/* harmony import */ var _Config_MediaConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Config/MediaConfig */ "./platform/core/media/resources/js/App/Config/MediaConfig.js");
/* harmony import */ var _MediaService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MediaService */ "./platform/core/media/resources/js/App/Services/MediaService.js");
/* harmony import */ var _MessageService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MessageService */ "./platform/core/media/resources/js/App/Services/MessageService.js");
/* harmony import */ var _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Helpers/Helpers */ "./platform/core/media/resources/js/App/Helpers/Helpers.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




var FolderService = /*#__PURE__*/function () {
  function FolderService() {
    _classCallCheck(this, FolderService);
    this.MediaService = new _MediaService__WEBPACK_IMPORTED_MODULE_1__.MediaService();
    $(document).on('shown.bs.modal', '#modal_add_folder', function (event) {
      $(event.currentTarget).find('form input[type=text]').focus();
    });
  }
  return _createClass(FolderService, [{
    key: "create",
    value: function create(folderName) {
      var _self = this;
      $httpClient.make().withButtonLoading($(document).find('#modal_add_folder button[type=submit]')).post(RV_MEDIA_URL.create_folder, {
        parent_id: _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_3__.Helpers.getRequestParams().folder_id,
        name: folderName
      }).then(function (_ref) {
        var data = _ref.data;
        _MessageService__WEBPACK_IMPORTED_MODULE_2__.MessageService.showMessage('success', data.message, _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_3__.Helpers.trans('message.success_header'));
        _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_3__.Helpers.resetPagination();
        _self.MediaService.getMedia(true);
        FolderService.closeModal();
      });
    }
  }, {
    key: "changeFolder",
    value: function changeFolder(folderId) {
      _Config_MediaConfig__WEBPACK_IMPORTED_MODULE_0__.MediaConfig.request_params.folder_id = folderId;
      _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_3__.Helpers.storeConfig();
      this.MediaService.getMedia(true);
    }
  }], [{
    key: "closeModal",
    value: function closeModal() {
      $(document).find('#modal_add_folder').modal('hide');
    }
  }]);
}();

/***/ }),

/***/ "./platform/core/media/resources/js/App/Services/MediaService.js":
/*!***********************************************************************!*\
  !*** ./platform/core/media/resources/js/App/Services/MediaService.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MediaService: () => (/* binding */ MediaService)
/* harmony export */ });
/* harmony import */ var _Config_MediaConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Config/MediaConfig */ "./platform/core/media/resources/js/App/Config/MediaConfig.js");
/* harmony import */ var _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Helpers/Helpers */ "./platform/core/media/resources/js/App/Helpers/Helpers.js");
/* harmony import */ var _ActionsService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ActionsService */ "./platform/core/media/resources/js/App/Services/ActionsService.js");
/* harmony import */ var _ContextMenuService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContextMenuService */ "./platform/core/media/resources/js/App/Services/ContextMenuService.js");
/* harmony import */ var _Views_MediaList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Views/MediaList */ "./platform/core/media/resources/js/App/Views/MediaList.js");
/* harmony import */ var _Views_MediaDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Views/MediaDetails */ "./platform/core/media/resources/js/App/Views/MediaDetails.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }






var MediaService = /*#__PURE__*/function () {
  function MediaService() {
    _classCallCheck(this, MediaService);
    this.MediaList = new _Views_MediaList__WEBPACK_IMPORTED_MODULE_4__.MediaList();
    this.MediaDetails = new _Views_MediaDetails__WEBPACK_IMPORTED_MODULE_5__.MediaDetails();
    this.breadcrumbTemplate = $('#rv_media_breadcrumb_item').html();
  }
  return _createClass(MediaService, [{
    key: "getMedia",
    value: function getMedia() {
      var reload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var is_popup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var load_more_file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      if (typeof RV_MEDIA_CONFIG.pagination != 'undefined') {
        if (RV_MEDIA_CONFIG.pagination.in_process_get_media) {
          return;
        }
        RV_MEDIA_CONFIG.pagination.in_process_get_media = true;
      }
      var _self = this;
      _self.getFileDetails({
        icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n                <path d=\"M15 8h.01\"></path>\n                <path d=\"M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z\"></path>\n                <path d=\"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5\"></path>\n                <path d=\"M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3\"></path>\n            </svg>",
        nothing_selected: ''
      });
      var params = _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.getRequestParams();
      if (params.view_in === 'recent') {
        params = _objectSpread(_objectSpread({}, params), {}, {
          recent_items: _Config_MediaConfig__WEBPACK_IMPORTED_MODULE_0__.RecentItems
        });
      }
      if (is_popup === true) {
        params = _objectSpread(_objectSpread({}, params), {}, {
          is_popup: true
        });
      } else {
        params = _objectSpread(_objectSpread({}, params), {}, {
          is_popup: undefined
        });
      }
      params = _objectSpread(_objectSpread({}, params), {}, {
        onSelectFiles: undefined
      });
      if (typeof params.search != 'undefined' && params.search !== '' && typeof params.selected_file_id != 'undefined') {
        params = _objectSpread(_objectSpread({}, params), {}, {
          selected_file_id: undefined
        });
      }
      params = _objectSpread(_objectSpread({}, params), {}, {
        load_more_file: load_more_file
      });
      if (typeof RV_MEDIA_CONFIG.pagination != 'undefined') {
        params = _objectSpread(_objectSpread({}, params), {}, {
          paged: RV_MEDIA_CONFIG.pagination.paged,
          posts_per_page: RV_MEDIA_CONFIG.pagination.posts_per_page
        });
      }
      _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.showAjaxLoading();
      $httpClient.make().get(RV_MEDIA_URL.get_media, params).then(function (_ref) {
        var data = _ref.data;
        _self.MediaList.renderData(data.data, reload, load_more_file);
        _self.renderBreadcrumbs(data.data.breadcrumbs);
        MediaService.refreshFilter();
        _ActionsService__WEBPACK_IMPORTED_MODULE_2__.ActionsService.renderActions();
        if (typeof RV_MEDIA_CONFIG.pagination != 'undefined') {
          if (typeof RV_MEDIA_CONFIG.pagination.paged != 'undefined') {
            RV_MEDIA_CONFIG.pagination.paged += 1;
          }
          if (typeof RV_MEDIA_CONFIG.pagination.in_process_get_media != 'undefined') {
            RV_MEDIA_CONFIG.pagination.in_process_get_media = false;
          }
          if (typeof RV_MEDIA_CONFIG.pagination.posts_per_page != 'undefined' && data.data.files.length + data.data.folders.length < RV_MEDIA_CONFIG.pagination.posts_per_page && typeof RV_MEDIA_CONFIG.pagination.has_more != 'undefined') {
            RV_MEDIA_CONFIG.pagination.has_more = false;
          }
        }
      })["finally"](function () {
        return _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.hideAjaxLoading();
      });
    }
  }, {
    key: "getFileDetails",
    value: function getFileDetails(data) {
      this.MediaDetails.renderData(data);
    }
  }, {
    key: "renderBreadcrumbs",
    value: function renderBreadcrumbs(breadcrumbItems) {
      var _self = this;
      var $breadcrumbContainer = $('.rv-media-breadcrumb .breadcrumb');
      $breadcrumbContainer.find('li').remove();
      _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.each(breadcrumbItems, function (value) {
        var template = _self.breadcrumbTemplate;
        template = template.replace(/__name__/gi, value.name || '').replace(/__icon__/gi, (value === null || value === void 0 ? void 0 : value.icon) || "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                    <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n                    <path d=\"M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2\"></path>\n                </svg>").replace(/__folderId__/gi, value.id || 0);
        $breadcrumbContainer.append($(template));
      });
      $('.rv-media-container').attr('data-breadcrumb-count', _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.size(breadcrumbItems));
    }
  }], [{
    key: "refreshFilter",
    value: function refreshFilter() {
      var $rvMediaContainer = $('.rv-media-container');
      var viewIn = _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.getRequestParams().view_in;
      var $actionsTarget = $('.rv-media-actions .btn:not([data-type="refresh"]):not([data-bs-toggle="offcanvas"])');
      if (viewIn !== 'all_media' && !_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.getRequestParams().folder_id) {
        $actionsTarget.addClass('disabled');
        $rvMediaContainer.attr('data-allow-upload', 'false');
      } else {
        $actionsTarget.removeClass('disabled');
        $rvMediaContainer.attr('data-allow-upload', 'true');
      }
      $('.rv-media-actions .btn.js-rv-media-change-filter-group').removeClass('disabled');
      var $emptyTrashBtn = $('.rv-media-actions .btn[data-action="empty_trash"]');
      $emptyTrashBtn.hide();
      if (viewIn === 'trash' && _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.size(_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.getItems()) > 0) {
        $emptyTrashBtn.removeClass('d-none disabled').show();
      }
      _ContextMenuService__WEBPACK_IMPORTED_MODULE_3__.ContextMenuService.destroyContext();
      _ContextMenuService__WEBPACK_IMPORTED_MODULE_3__.ContextMenuService.initContext();
      $rvMediaContainer.attr('data-view-in', viewIn);
    }
  }]);
}();

/***/ }),

/***/ "./platform/core/media/resources/js/App/Services/MessageService.js":
/*!*************************************************************************!*\
  !*** ./platform/core/media/resources/js/App/Services/MessageService.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessageService: () => (/* binding */ MessageService)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var MessageService = /*#__PURE__*/function () {
  function MessageService() {
    _classCallCheck(this, MessageService);
  }
  return _createClass(MessageService, null, [{
    key: "showMessage",
    value: function showMessage(type, message) {
      Botble.showNotice(type, message);
    }
  }]);
}();

/***/ }),

/***/ "./platform/core/media/resources/js/App/Services/UploadService.js":
/*!************************************************************************!*\
  !*** ./platform/core/media/resources/js/App/Services/UploadService.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UploadService: () => (/* binding */ UploadService)
/* harmony export */ });
/* harmony import */ var _MediaService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MediaService */ "./platform/core/media/resources/js/App/Services/MediaService.js");
/* harmony import */ var _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Helpers/Helpers */ "./platform/core/media/resources/js/App/Helpers/Helpers.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var UploadService = /*#__PURE__*/function () {
  function UploadService() {
    _classCallCheck(this, UploadService);
    this.$body = $('body');
    this.dropZone = null;
    this.uploadUrl = RV_MEDIA_URL.upload_file;
    this.uploadProgressBox = $('.rv-upload-progress');
    this.uploadProgressContainer = $('.rv-upload-progress .rv-upload-progress-table');
    this.uploadProgressTemplate = $('#rv_media_upload_progress_item').html();
    this.totalQueued = 1;
    this.MediaService = new _MediaService__WEBPACK_IMPORTED_MODULE_0__.MediaService();
    this.totalError = 0;
  }
  return _createClass(UploadService, [{
    key: "init",
    value: function init() {
      if (_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.hasPermission('files.create') && $('.rv-media-items').length > 0) {
        this.setupDropZone();
      }
      this.handleEvents();
    }
  }, {
    key: "setupDropZone",
    value: function setupDropZone() {
      var _self = this;
      var _dropZoneConfig = this.getDropZoneConfig();
      _self.filesUpload = 0;
      if (_self.dropZone) {
        _self.dropZone.destroy();
      }
      _self.dropZone = new Dropzone(document.querySelector('.rv-media-items'), _objectSpread(_objectSpread({}, _dropZoneConfig), {}, {
        thumbnailWidth: false,
        thumbnailHeight: false,
        parallelUploads: 1,
        autoQueue: true,
        clickable: '.js-dropzone-upload',
        previewsContainer: false,
        sending: function sending(file, xhr, formData) {
          formData.append('_token', $('meta[name="csrf-token"]').attr('content'));
          formData.append('folder_id', _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.getRequestParams().folder_id);
          formData.append('view_in', _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.getRequestParams().view_in);
          formData.append('path', file.fullPath);
        },
        chunksUploaded: function chunksUploaded(file, done) {
          _self.uploadProgressContainer.find('.progress-percent').html('100%');
          done();
        },
        accept: function accept(file, done) {
          _self.filesUpload++;
          _self.totalError = 0;
          done();
        },
        uploadprogress: function uploadprogress(file, progress, bytesSent) {
          var percent = bytesSent / file.size * 100;
          if (file.upload.chunked && percent > 99) {
            percent = percent - 1;
          }
          var percentShow = (percent > 100 ? '100' : parseInt(percent)) + '%';
          var el = _self.uploadProgressContainer.find('tr').eq(file.index - 1);
          el.find('.progress-percent').html(percentShow);
        }
      }));
      _self.dropZone.on('addedfile', function (file) {
        file.index = _self.totalQueued;
        _self.totalQueued++;
      });
      _self.dropZone.on('sending', function (file) {
        _self.initProgress(file.name, file.size);
      });
      _self.dropZone.on('complete', function (file) {
        if (file.accepted) {
          _self.changeProgressStatus(file);
        }
        _self.filesUpload = 0;
      });
      _self.dropZone.on('queuecomplete', function () {
        _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.resetPagination();
        _self.MediaService.getMedia(true);
        if (_self.totalError === 0) {
          setTimeout(function () {
            $('.rv-upload-progress .close-pane').trigger('click');
          }, 5000);
        }
      });
    }
  }, {
    key: "handleEvents",
    value: function handleEvents() {
      var _self = this;
      /**
       * Close upload progress pane
       */
      _self.$body.off('click', '.rv-upload-progress .close-pane').on('click', '.rv-upload-progress .close-pane', function (event) {
        event.preventDefault();
        $('.rv-upload-progress').addClass('hide-the-pane');
        _self.totalError = 0;
        setTimeout(function () {
          $('.rv-upload-progress tr').remove();
          _self.totalQueued = 1;
        }, 300);
      });
    }
  }, {
    key: "initProgress",
    value: function initProgress($fileName, $fileSize) {
      var template = this.uploadProgressTemplate.replace(/__fileName__/gi, $fileName).replace(/__fileSize__/gi, UploadService.formatFileSize($fileSize)).replace(/__status__/gi, 'warning').replace(/__message__/gi, 'Uploading...');
      if (this.checkUploadTotalProgress() && this.uploadProgressContainer.find('tr').length >= 1) {
        return;
      }
      this.uploadProgressContainer.append(template);
      this.uploadProgressBox.removeClass('hide-the-pane');
      this.uploadProgressBox.find('.table').animate({
        scrollTop: this.uploadProgressContainer.height()
      }, 150);
    }
  }, {
    key: "changeProgressStatus",
    value: function changeProgressStatus(file) {
      var _self = this;
      var $progressLine = _self.uploadProgressContainer.find("tr:nth-child(".concat(file.index, ")"));
      var $label = $progressLine.find('.file-status');
      var response = _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.jsonDecode(file.xhr.responseText || '', {});
      _self.totalError = _self.totalError + (response.error === true || file.status === 'error' ? 1 : 0);
      $label.removeClass('text-success text-danger text-warning');
      $label.addClass(response.error === true || file.status === 'error' ? 'text-danger' : 'text-success');
      $label.html(response.error === true || file.status === 'error' ? 'Error' : 'Uploaded');
      if (file.status === 'error') {
        if (file.xhr.status === 422) {
          var errorHtml = '';
          $.each(response.errors, function (key, item) {
            errorHtml += "<span class=\"text-danger\">".concat(item, "</span><br>");
          });
          $progressLine.find('.file-error').html(errorHtml);
        } else if (file.xhr.status === 500) {
          $progressLine.find('.file-error').html("<span class=\"text-danger\">".concat(file.xhr.statusText, "</span>"));
        }
      } else if (response.error) {
        $progressLine.find('.file-error').html("<span class=\"text-danger\">".concat(response.message, "</span>"));
      } else {
        _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.addToRecent(response.data.id);
        _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_1__.Helpers.setSelectedFile(response.data.id);
      }
    }
  }, {
    key: "getDropZoneConfig",
    value: function getDropZoneConfig() {
      return {
        url: this.uploadUrl,
        uploadMultiple: !RV_MEDIA_CONFIG.chunk.enabled,
        chunking: RV_MEDIA_CONFIG.chunk.enabled,
        forceChunking: true,
        // forces chunking when file.size < chunkSize
        parallelChunkUploads: false,
        // allows chunks to be uploaded in parallel (this is independent of the parallelUploads option)
        chunkSize: RV_MEDIA_CONFIG.chunk.chunk_size,
        // chunk size 1,000,000 bytes (~1MB)
        retryChunks: true,
        // retry chunks on failure
        retryChunksLimit: 3,
        // retry maximum of 3 times (default is 3)
        timeout: 0,
        // MB,
        maxFilesize: RV_MEDIA_CONFIG.chunk.max_file_size,
        // MB
        maxFiles: null // max files upload,
      };
    }
  }, {
    key: "checkUploadTotalProgress",
    value: function checkUploadTotalProgress() {
      return this.filesUpload === 1;
    }
  }], [{
    key: "formatFileSize",
    value: function formatFileSize(bytes) {
      var si = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var thresh = si ? 1000 : 1024;
      if (Math.abs(bytes) < thresh) {
        return bytes + ' B';
      }
      var units = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
      var u = -1;
      do {
        bytes /= thresh;
        ++u;
      } while (Math.abs(bytes) >= thresh && u < units.length - 1);
      return bytes.toFixed(1) + ' ' + units[u];
    }
  }]);
}();

/***/ }),

/***/ "./platform/core/media/resources/js/App/Views/MediaDetails.js":
/*!********************************************************************!*\
  !*** ./platform/core/media/resources/js/App/Views/MediaDetails.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MediaDetails: () => (/* binding */ MediaDetails)
/* harmony export */ });
/* harmony import */ var _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Helpers/Helpers */ "./platform/core/media/resources/js/App/Helpers/Helpers.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var MediaDetails = /*#__PURE__*/function () {
  function MediaDetails() {
    _classCallCheck(this, MediaDetails);
    this.$detailsWrapper = $('.rv-media-main .rv-media-details');
    this.descriptionItemTemplate = "<div class=\"mb-3 rv-media-name\">\n            <label class=\"form-label\">__title__</label>\n            __url__\n        </div>";
    this.onlyFields = ['name', 'alt', 'full_url', 'size', 'mime_type', 'created_at', 'updated_at', 'nothing_selected'];
  }
  return _createClass(MediaDetails, [{
    key: "renderData",
    value: function renderData(data) {
      var _this = this;
      var _self = this;
      var thumb = data.type === 'image' && data.full_url ? "<img src=\"".concat(data.full_url, "\" alt=\"").concat(data.name, "\">") : data.icon;
      var description = '';
      _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__.Helpers.forEach(data, function (val, index) {
        if (_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__.Helpers.inArray(_self.onlyFields, index) && val) {
          if (!_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__.Helpers.inArray(['mime_type'], index)) {
            description += _self.descriptionItemTemplate.replace(/__title__/gi, _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__.Helpers.trans(index)).replace(/__url__/gi, val ? index === 'full_url' ? "<div class=\"input-group pe-1\">\n                                        <input type=\"text\" id=\"file_details_url\" class=\"form-control\" value=\"".concat(val, "\" />\n                                        <button class=\"input-group-text btn btn-default js-btn-copy-to-clipboard\" type=\"button\"\n                                                data-bb-toggle=\"clipboard\"\n                                                data-clipboard-action=\"copy\"\n                                                data-clipboard-message=\"Copied\"\n                                                data-clipboard-target=\"#file_details_url\"\n                                        >\n                                            <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-clipboard me-0\" data-clipboard-icon=\"true\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                                               <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n                                               <path d=\"M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2\"></path>\n                                               <path d=\"M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z\"></path>\n                                            </svg>\n                                            <svg class=\"icon text-success me-0 d-none\" data-clipboard-success-icon=\"true\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                                              <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n                                              <path d=\"M5 12l5 5l10 -10\"></path>\n                                            </svg>\n                                        </button>\n                                    </div>") : "<span title=\"".concat(val, "\">").concat(val, "</span>") : '');
          }
        }
      });
      _self.$detailsWrapper.find('.rv-media-thumbnail').html(thumb);
      _self.$detailsWrapper.find('.rv-media-thumbnail').css('color', data.color);
      _self.$detailsWrapper.find('.rv-media-description').html(description);
      var dimensions = '';
      if (data.mime_type && data.mime_type.indexOf('image') !== -1) {
        var image = new Image();
        image.src = data.full_url;
        image.onload = function () {
          dimensions += _this.descriptionItemTemplate.replace(/__title__/gi, _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__.Helpers.trans('width')).replace(/__url__/gi, "<span title=\"".concat(image.width, "\">").concat(image.width, "px</span>"));
          dimensions += _this.descriptionItemTemplate.replace(/__title__/gi, _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__.Helpers.trans('height')).replace(/__url__/gi, "<span title=\"".concat(image.height, "\">").concat(image.height, "px</span>"));
          _self.$detailsWrapper.find('.rv-media-description').append(dimensions);
        };
      }
    }
  }]);
}();

/***/ }),

/***/ "./platform/core/media/resources/js/App/Views/MediaList.js":
/*!*****************************************************************!*\
  !*** ./platform/core/media/resources/js/App/Views/MediaList.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MediaList: () => (/* binding */ MediaList)
/* harmony export */ });
/* harmony import */ var _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Helpers/Helpers */ "./platform/core/media/resources/js/App/Helpers/Helpers.js");
/* harmony import */ var _Services_ActionsService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/ActionsService */ "./platform/core/media/resources/js/App/Services/ActionsService.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var MediaList = /*#__PURE__*/function () {
  function MediaList() {
    _classCallCheck(this, MediaList);
    this.group = {};
    this.group.list = $('#rv_media_items_list').html();
    this.group.tiles = $('#rv_media_items_tiles').html();
    this.item = {};
    this.item.list = $('#rv_media_items_list_element').html();
    this.item.tiles = $('#rv_media_items_tiles_element').html();
    this.$groupContainer = $('.rv-media-items');
  }
  return _createClass(MediaList, [{
    key: "renderData",
    value: function renderData(data) {
      var reload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var load_more_file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var _self = this;
      var MediaConfig = _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__.Helpers.getConfigs();
      var template = _self.group[_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__.Helpers.getRequestParams().view_type];
      var view_in = _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__.Helpers.getRequestParams().view_in;
      if (!_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__.Helpers.inArray(['all_media', 'public', 'trash', 'favorites', 'recent'], view_in)) {
        view_in = 'all_media';
      }
      var icon;
      switch (view_in) {
        case 'all_media':
          icon = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                    <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n                    <path d=\"M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2\"></path>\n                    <path d=\"M7 9l5 -5l5 5\"></path>\n                    <path d=\"M12 4l0 12\"></path>\n                </svg>";
          break;
        case 'public':
          icon = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                    <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n                    <path d=\"M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4\"></path>\n                    <path d=\"M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4\"></path>\n                </svg>";
          break;
        case 'trash':
          icon = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                    <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n                    <path d=\"M4 7l16 0\"></path>\n                    <path d=\"M10 11l0 6\"></path>\n                    <path d=\"M14 11l0 6\"></path>\n                    <path d=\"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12\"></path>\n                    <path d=\"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3\"></path>\n                </svg>";
          break;
        case 'favorites':
          icon = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                    <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n                    <path d=\"M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z\" stroke-width=\"0\" fill=\"currentColor\"></path>\n                </svg>";
          break;
        case 'recent':
          icon = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                    <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n                    <path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0\"></path>\n                    <path d=\"M12 7v5l3 3\"></path>\n                </svg>";
      }
      template = template.replace(/__noItemIcon__/gi, icon).replace(/__noItemTitle__/gi, _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__.Helpers.trans("no_item.".concat(view_in, ".title")) || '').replace(/__noItemMessage__/gi, _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__.Helpers.trans("no_item.".concat(view_in, ".message")) || '');
      var $result = $(template);
      var $itemsWrapper = $result.find('ul');
      if (load_more_file && this.$groupContainer.find('.rv-media-grid ul').length > 0) {
        $itemsWrapper = this.$groupContainer.find('.rv-media-grid ul');
      }
      if (_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__.Helpers.size(data.folders) > 0 || _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__.Helpers.size(data.files) > 0 || load_more_file) {
        $('.rv-media-items').addClass('has-items');
      } else {
        $('.rv-media-items').removeClass('has-items');
      }
      _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__.Helpers.forEach(data.folders, function (value) {
        var item = _self.item[_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__.Helpers.getRequestParams().view_type];
        item = item.replace(/__type__/gi, 'folder').replace(/__id__/gi, value.id).replace(/__name__/gi, value.name || '').replace(/__size__/gi, '').replace(/__date__/gi, value.created_at || '').replace(/__thumb__/gi, "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                    <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n                    <path d=\"M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2\"></path>\n                </svg>");
        var $item = $(item);
        _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__.Helpers.forEach(value, function (val, index) {
          $item.data(index, val);
        });
        $item.data('is_folder', true);
        $item.data('icon', MediaConfig.icons.folder);
        $item.find('.rv-media-thumbnail').css('color', value.color);
        $itemsWrapper.append($item);
      });
      _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__.Helpers.forEach(data.files, function (value) {
        var item = _self.item[_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__.Helpers.getRequestParams().view_type];
        item = item.replace(/__type__/gi, 'file').replace(/__id__/gi, value.id).replace(/__name__/gi, value.name || '').replace(/__size__/gi, value.size || '').replace(/__date__/gi, value.created_at || '');
        if (_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__.Helpers.getRequestParams().view_type === 'list') {
          item = item.replace(/__thumb__/gi, value.icon);
        } else {
          item = item.replace(/__thumb__/gi, value.thumb ? "<img src=\"".concat(value.thumb ? value.thumb : value.full_url, "\" alt=\"").concat(value.name, "\">") : value.icon);
        }
        var $item = $(item);
        $item.data('is_folder', false);
        _Helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__.Helpers.forEach(value, function (val, index) {
          $item.data(index, val);
        });
        $itemsWrapper.append($item);
      });
      if (reload !== false) {
        _self.$groupContainer.empty();
      }
      if (!(load_more_file && this.$groupContainer.find('.rv-media-grid ul').length > 0)) {
        _self.$groupContainer.append($result);
      }
      _self.$groupContainer.find('.loading-spinner').remove();
      _Services_ActionsService__WEBPACK_IMPORTED_MODULE_1__.ActionsService.handleDropdown();

      // Trigger event click for file selected
      $(".js-media-list-title[data-id=".concat(data.selected_file_id, "]")).trigger('click');
    }
  }]);
}();

/***/ }),

/***/ "./platform/core/media/resources/js/integrate.js":
/*!*******************************************************!*\
  !*** ./platform/core/media/resources/js/integrate.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditorService: () => (/* binding */ EditorService)
/* harmony export */ });
/* harmony import */ var _App_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App/Helpers/Helpers */ "./platform/core/media/resources/js/App/Helpers/Helpers.js");
/* harmony import */ var _App_Config_MediaConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App/Config/MediaConfig */ "./platform/core/media/resources/js/App/Config/MediaConfig.js");
/* harmony import */ var _App_Services_ContextMenuService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App/Services/ContextMenuService */ "./platform/core/media/resources/js/App/Services/ContextMenuService.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var EditorService = /*#__PURE__*/function () {
  function EditorService() {
    _classCallCheck(this, EditorService);
  }
  return _createClass(EditorService, null, [{
    key: "editorSelectFile",
    value: function editorSelectFile(selectedFiles) {
      var is_ckeditor = _App_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__.Helpers.getUrlParam('CKEditor') || _App_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__.Helpers.getUrlParam('CKEditorFuncNum');
      if (window.opener && is_ckeditor) {
        var firstItem = _App_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__.Helpers.arrayFirst(selectedFiles);
        window.opener.CKEDITOR.tools.callFunction(_App_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__.Helpers.getUrlParam('CKEditorFuncNum'), firstItem.full_url);
        if (window.opener) {
          window.close();
        }
      } else {
        // No WYSIWYG editor found, use custom method.
      }
    }
  }]);
}();
var rvMedia = /*#__PURE__*/_createClass(function rvMedia(selector, options) {
  _classCallCheck(this, rvMedia);
  var customHandler = window.RvMediaCustomCallback || null;
  if (typeof customHandler === 'function') {
    customHandler(selector, options);
    return;
  }
  window.rvMedia = window.rvMedia || {};
  var $body = $('body');
  var defaultOptions = {
    multiple: true,
    type: '*',
    onSelectFiles: function onSelectFiles(files, $el) {}
  };
  options = $.extend(true, defaultOptions, options);
  var clickCallback = function clickCallback(event) {
    event.preventDefault();
    var $current = $(event.currentTarget);
    $('#rv_media_modal').modal('show');
    window.rvMedia.options = options;
    window.rvMedia.options.open_in = 'modal';
    window.rvMedia.$el = $current;
    _App_Config_MediaConfig__WEBPACK_IMPORTED_MODULE_1__.MediaConfig.request_params.filter = 'everything';
    _App_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__.Helpers.storeConfig();
    var elementOptions = window.rvMedia.$el.data('rv-media');
    if (typeof elementOptions !== 'undefined' && elementOptions.length > 0) {
      elementOptions = elementOptions[0];
      window.rvMedia.options = $.extend(true, window.rvMedia.options, elementOptions || {});
      if (typeof elementOptions.selected_file_id !== 'undefined') {
        window.rvMedia.options.is_popup = true;
      } else if (typeof window.rvMedia.options.is_popup !== 'undefined') {
        window.rvMedia.options.is_popup = undefined;
      }
    }
    if ($('#rv_media_body .rv-media-container').length === 0) {
      $('#rv_media_body').load(RV_MEDIA_URL.popup, function (data) {
        if (data.error) {
          alert(data.message);
        }
        $('#rv_media_body').removeClass('media-modal-loading').closest('.modal-content').removeClass('bb-loading');
        $(document).find('.rv-media-container .js-change-action[data-type=refresh]').trigger('click');
        if (_App_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__.Helpers.getRequestParams().filter !== 'everything') {
          $('.rv-media-actions .btn.js-rv-media-change-filter-group.js-filter-by-type').hide();
        }
        _App_Services_ContextMenuService__WEBPACK_IMPORTED_MODULE_2__.ContextMenuService.destroyContext();
        _App_Services_ContextMenuService__WEBPACK_IMPORTED_MODULE_2__.ContextMenuService.initContext();
      });
    } else {
      $(document).find('.rv-media-container .js-change-action[data-type=refresh]').trigger('click');
    }
  };
  if (typeof selector === 'string') {
    $body.off('click', selector).on('click', selector, clickCallback);
  } else {
    selector.off('click').on('click', clickCallback);
  }
});
window.RvMediaStandAlone = rvMedia;
$('.js-insert-to-editor').off('click').on('click', function (event) {
  event.preventDefault();
  var selectedFiles = _App_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__.Helpers.getSelectedFiles();
  if (_App_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__.Helpers.size(selectedFiles) > 0) {
    EditorService.editorSelectFile(selectedFiles);
  }
});
$.fn.rvMedia = function (options) {
  var $selector = $(this);
  _App_Config_MediaConfig__WEBPACK_IMPORTED_MODULE_1__.MediaConfig.request_params.filter = 'everything';
  $(document).find('.js-insert-to-editor').prop('disabled', _App_Config_MediaConfig__WEBPACK_IMPORTED_MODULE_1__.MediaConfig.request_params.view_in === 'trash');
  _App_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_0__.Helpers.storeConfig();
  var customHandler = window.RvMediaCustomCallback || null;
  if (typeof customHandler === 'function') {
    customHandler($selector, options);
    return;
  }
  new rvMedia($selector, options);
};
document.dispatchEvent(new CustomEvent('core-media-loaded'));

/***/ }),

/***/ "./platform/core/media/resources/js/jquery.doubletap.js":
/*!**************************************************************!*\
  !*** ./platform/core/media/resources/js/jquery.doubletap.js ***!
  \**************************************************************/
/***/ (() => {

;
(function ($) {
  $.event.special.doubletap = {
    bindType: 'touchend',
    delegateType: 'touchend',
    handle: function handle(event) {
      var handleObj = event.handleObj,
        targetData = jQuery.data(event.target),
        now = new Date().getTime(),
        delta = targetData.lastTouch ? now - targetData.lastTouch : 0,
        delay = delay == null ? 300 : delay;
      if (delta < delay && delta > 30) {
        targetData.lastTouch = null;
        event.type = handleObj.origType;
        ['clientX', 'clientY', 'pageX', 'pageY'].forEach(function (property) {
          event[property] = event.originalEvent.changedTouches[0][property];
        });
        handleObj.handler.apply(this, arguments);
      } else {
        targetData.lastTouch = now;
      }
    }
  };
})(jQuery);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!***************************************************!*\
  !*** ./platform/core/media/resources/js/media.js ***!
  \***************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jquery_doubletap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jquery.doubletap */ "./platform/core/media/resources/js/jquery.doubletap.js");
/* harmony import */ var _jquery_doubletap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jquery_doubletap__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_Config_MediaConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App/Config/MediaConfig */ "./platform/core/media/resources/js/App/Config/MediaConfig.js");
/* harmony import */ var _App_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App/Helpers/Helpers */ "./platform/core/media/resources/js/App/Helpers/Helpers.js");
/* harmony import */ var _App_Services_MediaService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App/Services/MediaService */ "./platform/core/media/resources/js/App/Services/MediaService.js");
/* harmony import */ var _App_Services_FolderService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App/Services/FolderService */ "./platform/core/media/resources/js/App/Services/FolderService.js");
/* harmony import */ var _App_Services_UploadService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App/Services/UploadService */ "./platform/core/media/resources/js/App/Services/UploadService.js");
/* harmony import */ var _App_Services_ActionsService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./App/Services/ActionsService */ "./platform/core/media/resources/js/App/Services/ActionsService.js");
/* harmony import */ var _App_Services_DownloadService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./App/Services/DownloadService */ "./platform/core/media/resources/js/App/Services/DownloadService.js");
/* harmony import */ var _integrate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./integrate */ "./platform/core/media/resources/js/integrate.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }









var MediaManagement = /*#__PURE__*/function () {
  function MediaManagement() {
    _classCallCheck(this, MediaManagement);
    this.MediaService = new _App_Services_MediaService__WEBPACK_IMPORTED_MODULE_3__.MediaService();
    this.UploadService = new _App_Services_UploadService__WEBPACK_IMPORTED_MODULE_5__.UploadService();
    this.FolderService = new _App_Services_FolderService__WEBPACK_IMPORTED_MODULE_4__.FolderService();
    this.DownloadService = new _App_Services_DownloadService__WEBPACK_IMPORTED_MODULE_7__.DownloadService();
    this.$body = $('body');
  }
  return _createClass(MediaManagement, [{
    key: "init",
    value: function init() {
      _App_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.resetPagination();
      this.setupLayout();
      this.handleMediaList();
      this.changeViewType();
      this.changeFilter();
      this.search();
      this.handleActions();
      this.UploadService.init();
      this.handleModals();
      this.scrollGetMore();
    }
  }, {
    key: "setupLayout",
    value: function setupLayout() {
      /**
       * Sidebar
       */
      var $currentFilter = $(".js-rv-media-change-filter[data-type=\"filter\"][data-value=\"".concat(_App_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.getRequestParams().filter, "\"]"));
      $currentFilter.closest('button.dropdown-item').addClass('active').closest('.dropdown').find('.js-rv-media-filter-current').html("(".concat($currentFilter.html(), ")"));
      var $currentViewIn = $(".js-rv-media-change-filter[data-type=\"view_in\"][data-value=\"".concat(_App_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.getRequestParams().view_in, "\"]"));
      $currentViewIn.closest('button.dropdown-item').addClass('active').closest('.dropdown').find('.js-rv-media-filter-current').html("(".concat($currentViewIn.html(), ")"));
      if (_App_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.isUseInModal()) {
        $('.rv-media-footer').removeClass('d-none');
      }

      /**
       * Sort
       */
      $(".js-rv-media-change-filter[data-type=\"sort_by\"][data-value=\"".concat(_App_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.getRequestParams().sort_by, "\"]")).closest('button.dropdown-item').addClass('active');

      /**
       * Details pane
       */
      var $mediaDetailsCheckbox = $('#media_details_collapse');
      $mediaDetailsCheckbox.prop('checked', _App_Config_MediaConfig__WEBPACK_IMPORTED_MODULE_1__.MediaConfig.hide_details_pane || false);
      setTimeout(function () {
        $('.rv-media-details').show();
      }, 300);
      $mediaDetailsCheckbox.on('change', function (event) {
        event.preventDefault();
        _App_Config_MediaConfig__WEBPACK_IMPORTED_MODULE_1__.MediaConfig.hide_details_pane = $(event.currentTarget).is(':checked');
        _App_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.storeConfig();
      });
      $(document).on('click', '.js-download-action', function (event) {
        event.preventDefault();
        $('#modal_download_url').modal('show');
      });
      $(document).on('click', '.js-create-folder-action', function (event) {
        event.preventDefault();
        $('#modal_add_folder').modal('show');
      });
    }
  }, {
    key: "handleMediaList",
    value: function handleMediaList() {
      var _self = this;

      /*Ctrl key in Windows*/
      var ctrl_key = false;

      /*Command key in MAC*/
      var meta_key = false;

      /*Shift key*/
      var shift_key = false;
      $(document).on('keyup keydown', function (e) {
        /*User hold ctrl key*/
        ctrl_key = e.ctrlKey;
        /*User hold command key*/
        meta_key = e.metaKey;
        /*User hold shift key*/
        shift_key = e.shiftKey;
      });
      _self.$body.off('click', '.js-media-list-title').on('click', '.js-media-list-title', function (event) {
        event.preventDefault();
        var $current = $(event.currentTarget);
        if (shift_key) {
          var firstItem = _App_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.arrayFirst(_App_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.getSelectedItems());
          if (firstItem) {
            var firstIndex = firstItem.index_key;
            var currentIndex = $current.index();
            $('.rv-media-items li').each(function (index, el) {
              if (index > firstIndex && index <= currentIndex) {
                $(el).find('input[type=checkbox]').prop('checked', true);
              }
            });
          }
        } else if (!ctrl_key && !meta_key) {
          $current.closest('.rv-media-items').find('input[type=checkbox]').prop('checked', false);
        }
        var $lineCheckBox = $current.find('input[type=checkbox]');
        $lineCheckBox.prop('checked', true);
        _App_Services_ActionsService__WEBPACK_IMPORTED_MODULE_6__.ActionsService.handleDropdown();
        _self.MediaService.getFileDetails($current.data());
      }).on('dblclick doubletap', '.js-media-list-title', function (event) {
        event.preventDefault();
        var data = $(event.currentTarget).data();
        if (data.is_folder === true) {
          _App_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.resetPagination();
          _self.FolderService.changeFolder(data.id);
        } else {
          if (!_App_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.isUseInModal()) {
            _App_Services_ActionsService__WEBPACK_IMPORTED_MODULE_6__.ActionsService.handlePreview();
          } else if (_App_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.getConfigs().request_params.view_in !== 'trash') {
            var selectedFiles = _App_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.getSelectedFiles();
            if (_App_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.size(selectedFiles) > 0) {
              _integrate__WEBPACK_IMPORTED_MODULE_8__.EditorService.editorSelectFile(selectedFiles);
            }
          }
        }
        return false;
      }).on('dblclick doubletap', '.js-up-one-level', function (event) {
        event.preventDefault();
        var count = $('.rv-media-breadcrumb .breadcrumb li').length;
        $(".rv-media-breadcrumb .breadcrumb li:nth-child(".concat(count - 1, ") a")).trigger('click');
      }).on('contextmenu', '.js-context-menu', function (event) {
        if (!$(event.currentTarget).find('input[type=checkbox]').is(':checked')) {
          $(event.currentTarget).trigger('click');
        }
      }).on('click contextmenu', '.rv-media-items', function (e) {
        if (!_App_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.size(e.target.closest('.js-context-menu'))) {
          $('.rv-media-items input[type="checkbox"]').prop('checked', false);
          _App_Services_ActionsService__WEBPACK_IMPORTED_MODULE_6__.ActionsService.handleDropdown();
          _self.MediaService.getFileDetails({
            icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                            <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n                            <path d=\"M15 8h.01\"></path>\n                            <path d=\"M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z\"></path>\n                            <path d=\"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5\"></path>\n                            <path d=\"M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3\"></path>\n                        </svg>",
            nothing_selected: ''
          });
        }
      });
    }
  }, {
    key: "changeViewType",
    value: function changeViewType() {
      var _self = this;
      _self.$body.off('click', '.js-rv-media-change-view-type button').on('click', '.js-rv-media-change-view-type button', function (event) {
        event.preventDefault();
        var $current = $(event.currentTarget);
        if ($current.hasClass('active')) {
          return;
        }
        $current.closest('.js-rv-media-change-view-type').find('button').removeClass('active');
        $current.addClass('active');
        _App_Config_MediaConfig__WEBPACK_IMPORTED_MODULE_1__.MediaConfig.request_params.view_type = $current.data('type');
        if ($current.data('type') === 'trash') {
          $(document).find('.js-insert-to-editor').prop('disabled', true);
        } else {
          $(document).find('.js-insert-to-editor').prop('disabled', false);
        }
        _App_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.storeConfig();
        if (typeof RV_MEDIA_CONFIG.pagination != 'undefined') {
          if (typeof RV_MEDIA_CONFIG.pagination.paged != 'undefined') {
            RV_MEDIA_CONFIG.pagination.paged = 1;
          }
        }
        _self.MediaService.getMedia(true, false);
      });
      $(".js-rv-media-change-view-type .btn[data-type=\"".concat(_App_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.getRequestParams().view_type, "\"]")).trigger('click');
      this.bindIntegrateModalEvents();
    }
  }, {
    key: "changeFilter",
    value: function changeFilter() {
      var _self = this;
      _self.$body.off('click', '.js-rv-media-change-filter').on('click', '.js-rv-media-change-filter', function (event) {
        event.preventDefault();
        if (!_App_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.isOnAjaxLoading()) {
          var $current = $(event.currentTarget);
          var data = $current.data();
          _App_Config_MediaConfig__WEBPACK_IMPORTED_MODULE_1__.MediaConfig.request_params[data.type] = data.value;
          if (window.rvMedia.options && data.type === 'view_in') {
            window.rvMedia.options.view_in = data.value;
          }
          if (data.type === 'view_in') {
            _App_Config_MediaConfig__WEBPACK_IMPORTED_MODULE_1__.MediaConfig.request_params.folder_id = 0;
            if (data.value === 'trash') {
              $(document).find('.js-insert-to-editor').prop('disabled', true);
            } else {
              $(document).find('.js-insert-to-editor').prop('disabled', false);
            }
          }
          $current.closest('.dropdown').find('.js-rv-media-filter-current').html("(".concat($current.html(), ")"));
          _App_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.storeConfig();
          _App_Services_MediaService__WEBPACK_IMPORTED_MODULE_3__.MediaService.refreshFilter();
          _App_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.resetPagination();
          _self.MediaService.getMedia(true);
          $current.addClass('active');
          $current.siblings().removeClass('active');
        }
      });
    }
  }, {
    key: "search",
    value: function search() {
      var _self = this;
      $('.input-search-wrapper input[type="text"]').val(_App_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.getRequestParams().search || '');
      _self.$body.off('submit', '.input-search-wrapper').on('submit', '.input-search-wrapper', function (event) {
        event.preventDefault();
        _App_Config_MediaConfig__WEBPACK_IMPORTED_MODULE_1__.MediaConfig.request_params.search = $(event.currentTarget).find('input[name="search"]').val();
        _App_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.storeConfig();
        _App_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.resetPagination();
        _self.MediaService.getMedia(true);
      });
    }
  }, {
    key: "handleActions",
    value: function handleActions() {
      var _self = this;
      _self.$body.off('click', '.rv-media-actions .js-change-action[data-type="refresh"]').on('click', '.rv-media-actions .js-change-action[data-type="refresh"]', function (event) {
        event.preventDefault();
        _App_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.resetPagination();
        var ele_options = typeof window.rvMedia.$el !== 'undefined' ? window.rvMedia.$el.data('rv-media') : undefined;
        if (typeof ele_options !== 'undefined' && ele_options.length > 0 && typeof ele_options[0].selected_file_id !== 'undefined') {
          _self.MediaService.getMedia(true, true);
        } else {
          _self.MediaService.getMedia(true, false);
        }
      }).off('click', '.rv-media-items li.no-items').on('click', '.rv-media-items li.no-items', function (event) {
        event.preventDefault();
        $('.rv-media-header .rv-media-top-header .rv-media-actions .js-dropzone-upload').trigger('click');
      }).off('submit', '.form-add-folder').on('submit', '.form-add-folder', function (event) {
        event.preventDefault();
        var $input = $(event.currentTarget).find('input[name="name"]');
        var folderName = $input.val();
        _self.FolderService.create(folderName);
        $input.val('');
        return false;
      }).off('click', '.js-change-folder').on('click', '.js-change-folder', function (event) {
        event.preventDefault();
        var folderId = $(event.currentTarget).data('folder');
        _App_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.resetPagination();
        _self.FolderService.changeFolder(folderId);
      }).off('click', '.js-files-action').on('click', '.js-files-action', function (event) {
        event.preventDefault();
        _App_Services_ActionsService__WEBPACK_IMPORTED_MODULE_6__.ActionsService.handleGlobalAction($(event.currentTarget).data('action'), function () {
          _App_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.resetPagination();
          _self.MediaService.getMedia(true);
        });
      }).off('submit', '.form-download-url').on('submit', '.form-download-url', /*#__PURE__*/function () {
        var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
          var $el, $wrapper, $notice, $header, $input, $button, url, remainUrls;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                $el = $('#modal_download_url');
                $wrapper = $el.find('#download-form-wrapper');
                $notice = $el.find('#modal-notice').empty();
                $header = $el.find('.modal-title');
                $input = $el.find('textarea[name="urls"]').prop('disabled', true);
                $button = $el.find('[type="submit"]');
                url = $input.val();
                remainUrls = [];
                Botble.showButtonLoading($button);
                $wrapper.slideUp();

                // start to download
                _context.next = 13;
                return _self.DownloadService.download(url, function (progress, item, url) {
                  var $noticeItem = $("\n                        <div class=\"p-2 text-primary\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                                <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n                                <path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0\"></path>\n                                <path d=\"M12 9h.01\"></path>\n                                <path d=\"M11 12h1v4h1\"></path>\n                            </svg>\n                            <span>".concat(item, "</span>\n                        </div>\n                    "));
                  $notice.append($noticeItem).scrollTop($notice[0].scrollHeight);
                  $header.html("<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                            <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n                            <path d=\"M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2\"></path>\n                            <path d=\"M7 11l5 5l5 -5\"></path>\n                            <path d=\"M12 4l0 12\"></path>\n                        </svg>\n                        ".concat($header.data('downloading'), " (").concat(progress, ")"));
                  return function (success) {
                    var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
                    if (!success) {
                      remainUrls.push(url);
                    }
                    $noticeItem.find('span').text("".concat(item, ": ").concat(message));
                    $noticeItem.attr('class', "py-2 text-".concat(success ? 'success' : 'danger')).find('i').attr('class', success ? 'icon ti ti-check-circle' : 'icon ti ti-x-circle');
                  };
                }, function () {
                  $wrapper.slideDown();
                  $input.val(remainUrls.join('\n')).prop('disabled', false);
                  $header.html("<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n                            <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n                            <path d=\"M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2\"></path>\n                            <path d=\"M7 11l5 5l5 -5\"></path>\n                            <path d=\"M12 4l0 12\"></path>\n                        </svg>\n                        ".concat($header.data('text'), "\n                    "));
                  Botble.hideButtonLoading($button);
                });
              case 13:
                return _context.abrupt("return", false);
              case 14:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "handleModals",
    value: function handleModals() {
      var _self = this;
      _self.$body.on('show.bs.modal', '#modal_rename_items', function () {
        _App_Services_ActionsService__WEBPACK_IMPORTED_MODULE_6__.ActionsService.renderRenameItems();
      });
      _self.$body.on('show.bs.modal', '#modal_alt_text_items', function () {
        _App_Services_ActionsService__WEBPACK_IMPORTED_MODULE_6__.ActionsService.renderAltTextItems();
      });
      _self.$body.on('show.bs.modal', '#modal_share_items', function () {
        _App_Services_ActionsService__WEBPACK_IMPORTED_MODULE_6__.ActionsService.renderShareItems();
      });
      _self.$body.on('change', '#modal_share_items select[data-bb-value="share-type"]', function () {
        _App_Services_ActionsService__WEBPACK_IMPORTED_MODULE_6__.ActionsService.renderShareItems();
      });
      _self.$body.on('show.bs.modal', '#modal_crop_image', function () {
        _App_Services_ActionsService__WEBPACK_IMPORTED_MODULE_6__.ActionsService.renderCropImage();
      });
      _self.$body.on('show.bs.modal', '#modal-properties', function (event) {
        if (_App_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.getSelectedItems().length === 1) {
          var $modal = $(event.currentTarget);
          var selected = _App_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.getSelectedItems()[0];
          $modal.find("input[name=\"color\"][value=\"".concat(selected.color, "\"]")).prop('checked', true);
        }
      });
      _self.$body.on('hidden.bs.modal', '#modal_download_url', function () {
        var $el = $('#modal_download_url');
        $el.find('textarea').val('');
        $el.find('#modal-notice').empty();
      });
      _self.$body.off('click', '#modal-properties button[type="submit"]').on('click', '#modal-properties button[type="submit"]', function (event) {
        event.preventDefault();
        var $modal = $(event.currentTarget).closest('.modal');
        Botble.showButtonLoading($modal.find('button[type="submit"]'));
        _App_Services_ActionsService__WEBPACK_IMPORTED_MODULE_6__.ActionsService.processAction({
          action: 'properties',
          color: $modal.find('input[name="color"]:checked').val(),
          selected: _App_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.getSelectedItems().map(function (item) {
            return item.id.toString();
          })
        }, function () {
          $modal.modal('hide');
          Botble.hideButtonLoading($modal.find('button[type="submit"]'));
          _self.MediaService.getMedia(true);
        });
      });
      _self.$body.off('submit', '#modal_crop_image .form-crop').on('submit', '#modal_crop_image .form-crop', function (event) {
        event.preventDefault();
        var $form = $(event.currentTarget);
        Botble.showButtonLoading($form.find('button[type="submit"]'));
        var imageId = $form.find('input[name="image_id"]').val();
        var cropData = $form.find('input[name="crop_data"]').val();
        _App_Services_ActionsService__WEBPACK_IMPORTED_MODULE_6__.ActionsService.processAction({
          action: $form.data('action'),
          imageId: imageId,
          cropData: cropData
        }, function (response) {
          if (!response.error) {
            $form.closest('.modal').modal('hide');
            _self.MediaService.getMedia(true);
          }
          Botble.hideButtonLoading($form.find('button[type="submit"]'));
        });
      });
      _self.$body.off('submit', '#modal_rename_items .form-rename').on('submit', '#modal_rename_items .form-rename', function (event) {
        event.preventDefault();
        var items = [];
        var $form = $(event.currentTarget);
        $('#modal_rename_items .form-control').each(function (index, el) {
          var $current = $(el);
          var data = $current.closest('.mb-3').data();
          data.name = $current.val();
          items.push(data);
        });
        Botble.showButtonLoading($form.find('button[type="submit"]'));
        _App_Services_ActionsService__WEBPACK_IMPORTED_MODULE_6__.ActionsService.processAction({
          action: $form.data('action'),
          selected: items
        }, function (res) {
          if (!res.error) {
            $form.closest('.modal').modal('hide');
            _self.MediaService.getMedia(true);
          } else {
            $('#modal_rename_items .mb-3').each(function (index, el) {
              var $current = $(el);
              if (_App_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.inArray(res.data, $current.data('id'))) {
                $current.addClass('has-error');
              } else {
                $current.removeClass('has-error');
              }
            });
          }
          Botble.hideButtonLoading($form.find('button[type="submit"]'));
        });
      });
      _self.$body.off('submit', '#modal_alt_text_items .form-alt-text').on('submit', '#modal_alt_text_items .form-alt-text', function (event) {
        event.preventDefault();
        var items = [];
        var $form = $(event.currentTarget);
        $('#modal_alt_text_items .form-control').each(function (index, el) {
          var $current = $(el);
          var data = $current.closest('.mb-3').data();
          data.alt = $current.val();
          items.push(data);
        });
        Botble.showButtonLoading($form.find('button[type="submit"]'));
        _App_Services_ActionsService__WEBPACK_IMPORTED_MODULE_6__.ActionsService.processAction({
          action: $form.data('action'),
          selected: items
        }, function (res) {
          if (!res.error) {
            $form.closest('.modal').modal('hide');
            _self.MediaService.getMedia(true);
          } else {
            $('#modal_alt_text_items .mb-3').each(function (index, el) {
              var $current = $(el);
              if (_App_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.inArray(res.data, $current.data('id'))) {
                $current.addClass('has-error');
              } else {
                $current.removeClass('has-error');
              }
            });
          }
          Botble.hideButtonLoading($form.find('button[type="submit"]'));
        });
      });

      /*Delete files*/
      _self.$body.off('submit', 'form.form-delete-items').on('submit', 'form.form-delete-items', function (event) {
        event.preventDefault();
        var items = [];
        var $form = $(event.currentTarget);
        Botble.showButtonLoading($form.find('button[type="submit"]'));
        _App_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.each(_App_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.getSelectedItems(), function (value) {
          items.push({
            id: value.id,
            is_folder: value.is_folder
          });
        });
        _App_Services_ActionsService__WEBPACK_IMPORTED_MODULE_6__.ActionsService.processAction({
          action: $form.data('action'),
          selected: items,
          skip_trash: $form.find('input[name="skip_trash"]').is(':checked')
        }, function (res) {
          $form.closest('.modal').modal('hide');
          if (!res.error) {
            _self.MediaService.getMedia(true);
          }
          $form.find('input[name="skip_trash"]').prop('checked', false);
          Botble.hideButtonLoading($form.find('button[type="submit"]'));
        });
      });

      /*Empty trash*/
      _self.$body.off('submit', '#modal_empty_trash .form-empty-trash').on('submit', '#modal_empty_trash .form-empty-trash', function (event) {
        event.preventDefault();
        var $form = $(event.currentTarget);
        Botble.showButtonLoading($form.find('button[type="submit"]'));
        _App_Services_ActionsService__WEBPACK_IMPORTED_MODULE_6__.ActionsService.processAction({
          action: $form.data('action')
        }, function () {
          $form.closest('.modal').modal('hide');
          _self.MediaService.getMedia(true);
          Botble.hideButtonLoading($form.find('button[type="submit"]'));
        });
      });
      if (_App_Config_MediaConfig__WEBPACK_IMPORTED_MODULE_1__.MediaConfig.request_params.view_in === 'trash') {
        $(document).find('.js-insert-to-editor').prop('disabled', true);
      } else {
        $(document).find('.js-insert-to-editor').prop('disabled', false);
      }
      this.bindIntegrateModalEvents();
    }
  }, {
    key: "checkFileTypeSelect",
    value: function checkFileTypeSelect(selectedFiles) {
      if (typeof window.rvMedia.$el !== 'undefined') {
        var firstItem = _App_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.arrayFirst(selectedFiles);
        var ele_options = window.rvMedia.$el.data('rv-media');
        if (typeof ele_options !== 'undefined' && typeof ele_options[0] !== 'undefined' && typeof ele_options[0].file_type !== 'undefined' && firstItem !== 'undefined' && firstItem.type !== 'undefined') {
          if (!ele_options[0].file_type.match(firstItem.type)) {
            return false;
          } else {
            if (typeof ele_options[0].ext_allowed !== 'undefined' && $.isArray(ele_options[0].ext_allowed)) {
              if ($.inArray(firstItem.mime_type, ele_options[0].ext_allowed) === -1) {
                return false;
              }
            }
          }
        }
      }
      return true;
    }
  }, {
    key: "bindIntegrateModalEvents",
    value: function bindIntegrateModalEvents() {
      var $mainModal = $('#rv_media_modal');
      var _self = this;
      $mainModal.off('click', '.js-insert-to-editor').on('click', '.js-insert-to-editor', function (event) {
        event.preventDefault();
        var selectedFiles = _App_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.getSelectedFiles();
        if (_App_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.size(selectedFiles) > 0) {
          window.rvMedia.options.onSelectFiles(selectedFiles, window.rvMedia.$el);
          if (_self.checkFileTypeSelect(selectedFiles)) {
            $mainModal.find('.btn-close').trigger('click');
          }
        }
      });
      $mainModal.off('dblclick doubletap', '.js-media-list-title[data-context="file"]').on('dblclick doubletap', '.js-media-list-title[data-context="file"]', function (event) {
        event.preventDefault();
        if (_App_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.getConfigs().request_params.view_in !== 'trash') {
          var selectedFiles = _App_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.getSelectedFiles();
          if (_App_Helpers_Helpers__WEBPACK_IMPORTED_MODULE_2__.Helpers.size(selectedFiles) > 0) {
            window.rvMedia.options.onSelectFiles(selectedFiles, window.rvMedia.$el);
            if (_self.checkFileTypeSelect(selectedFiles)) {
              $mainModal.find('.btn-close').trigger('click');
            }
          }
        } else {
          _App_Services_ActionsService__WEBPACK_IMPORTED_MODULE_6__.ActionsService.handlePreview();
        }
      });
    }

    // Scroll get more media
  }, {
    key: "scrollGetMore",
    value: function scrollGetMore() {
      var _self = this;
      $('.rv-media-main .rv-media-items').bind('DOMMouseScroll mousewheel', function (e) {
        if (e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) {
          var loadMore;
          if ($(e.currentTarget).closest('.media-modal').length > 0) {
            loadMore = $(e.currentTarget).scrollTop() + $(e.currentTarget).innerHeight() / 2 >= $(e.currentTarget)[0].scrollHeight - 450;
          } else {
            loadMore = $(e.currentTarget).scrollTop() + $(e.currentTarget).innerHeight() >= $(e.currentTarget)[0].scrollHeight - 150;
          }
          if (loadMore) {
            if (typeof RV_MEDIA_CONFIG.pagination != 'undefined' && RV_MEDIA_CONFIG.pagination.has_more) {
              _self.MediaService.getMedia(false, false, true);
            }
          }
        }
      });
    }
  }]);
}();
$(function () {
  window.rvMedia = window.rvMedia || {};
  new MediaManagement().init();
});
})();

/******/ })()
;