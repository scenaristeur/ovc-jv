(window["shighl_jsonp"] = window["shighl_jsonp"] || []).push([[1],{

/***/ "01e7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d82f");
/*
 * Key Codes (events)
 */

var KEY_CODES = Object(_object__WEBPACK_IMPORTED_MODULE_0__[/* freeze */ "g"])({
  SPACE: 32,
  ENTER: 13,
  ESC: 27,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  PAGEUP: 33,
  PAGEDOWN: 34,
  HOME: 36,
  END: 35,
  TAB: 9,
  SHIFT: 16,
  CTRL: 17,
  BACKSPACE: 8,
  ALT: 18,
  PAUSE: 19,
  BREAK: 19,
  INSERT: 45,
  INS: 45,
  DELETE: 46
});
/* harmony default export */ __webpack_exports__["a"] = (KEY_CODES);

/***/ }),

/***/ "1947":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export props */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BButton; });
/* harmony import */ var vue_functional_data_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b42e");
/* harmony import */ var _utils_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dcb3");
/* harmony import */ var _utils_key_codes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("01e7");
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("2326");
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("228e");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("906c");
/* harmony import */ var _utils_inspect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("7b1e");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("d82f");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("cf75");
/* harmony import */ var _utils_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("4a38");
/* harmony import */ var _link_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("aa59");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











 // --- Constants ---

var NAME = 'BButton'; // --- Props ---

var linkProps = Object(_utils_object__WEBPACK_IMPORTED_MODULE_7__[/* omit */ "m"])(_link_link__WEBPACK_IMPORTED_MODULE_10__[/* props */ "b"], ['event', 'routerTag']);
delete linkProps.href.default;
delete linkProps.to.default;
var btnProps = {
  block: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: function _default() {
      return Object(_utils_config__WEBPACK_IMPORTED_MODULE_4__[/* getComponentConfig */ "c"])(NAME, 'size');
    }
  },
  variant: {
    type: String,
    default: function _default() {
      return Object(_utils_config__WEBPACK_IMPORTED_MODULE_4__[/* getComponentConfig */ "c"])(NAME, 'variant');
    }
  },
  type: {
    type: String,
    default: 'button'
  },
  tag: {
    type: String,
    default: 'button'
  },
  pill: {
    type: Boolean,
    default: false
  },
  squared: {
    type: Boolean,
    default: false
  },
  pressed: {
    // Tri-state: `true`, `false` or `null`
    // => On, off, not a toggle
    type: Boolean,
    default: null
  }
};
var props = _objectSpread(_objectSpread({}, btnProps), linkProps); // --- Helper methods ---
// Focus handler for toggle buttons
// Needs class of 'focus' when focused

var handleFocus = function handleFocus(evt) {
  if (evt.type === 'focusin') {
    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__[/* addClass */ "b"])(evt.target, 'focus');
  } else if (evt.type === 'focusout') {
    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__[/* removeClass */ "z"])(evt.target, 'focus');
  }
}; // Is the requested button a link?
// If tag prop is set to `a`, we use a <b-link> to get proper disabled handling


var isLink = function isLink(props) {
  return Object(_utils_router__WEBPACK_IMPORTED_MODULE_9__[/* isLink */ "d"])(props) || Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__[/* isTag */ "s"])(props.tag, 'a');
}; // Is the button to be a toggle button?


var isToggle = function isToggle(props) {
  return Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_6__[/* isBoolean */ "a"])(props.pressed);
}; // Is the button "really" a button?


var isButton = function isButton(props) {
  return !(isLink(props) || props.tag && !Object(_utils_dom__WEBPACK_IMPORTED_MODULE_5__[/* isTag */ "s"])(props.tag, 'button'));
}; // Is the requested tag not a button or link?


var isNonStandardTag = function isNonStandardTag(props) {
  return !isLink(props) && !isButton(props);
}; // Compute required classes (non static classes)


var computeClass = function computeClass(props) {
  var _ref;

  return ["btn-".concat(props.variant || Object(_utils_config__WEBPACK_IMPORTED_MODULE_4__[/* getComponentConfig */ "c"])(NAME, 'variant')), (_ref = {}, _defineProperty(_ref, "btn-".concat(props.size), props.size), _defineProperty(_ref, 'btn-block', props.block), _defineProperty(_ref, 'rounded-pill', props.pill), _defineProperty(_ref, 'rounded-0', props.squared && !props.pill), _defineProperty(_ref, "disabled", props.disabled), _defineProperty(_ref, "active", props.pressed), _ref)];
}; // Compute the link props to pass to b-link (if required)


var computeLinkProps = function computeLinkProps(props) {
  return isLink(props) ? Object(_utils_props__WEBPACK_IMPORTED_MODULE_8__[/* pluckProps */ "b"])(linkProps, props) : {};
}; // Compute the attributes for a button


var computeAttrs = function computeAttrs(props, data) {
  var button = isButton(props);
  var link = isLink(props);
  var toggle = isToggle(props);
  var nonStandardTag = isNonStandardTag(props);
  var hashLink = link && props.href === '#';
  var role = data.attrs && data.attrs.role ? data.attrs.role : null;
  var tabindex = data.attrs ? data.attrs.tabindex : null;

  if (nonStandardTag || hashLink) {
    tabindex = '0';
  }

  return {
    // Type only used for "real" buttons
    type: button && !link ? props.type : null,
    // Disabled only set on "real" buttons
    disabled: button ? props.disabled : null,
    // We add a role of button when the tag is not a link or button for ARIA
    // Don't bork any role provided in `data.attrs` when `isLink` or `isButton`
    // Except when link has `href` of `#`
    role: nonStandardTag || hashLink ? 'button' : role,
    // We set the `aria-disabled` state for non-standard tags
    'aria-disabled': nonStandardTag ? String(props.disabled) : null,
    // For toggles, we need to set the pressed state for ARIA
    'aria-pressed': toggle ? String(props.pressed) : null,
    // `autocomplete="off"` is needed in toggle mode to prevent some browsers
    // from remembering the previous setting when using the back button
    autocomplete: toggle ? 'off' : null,
    // `tabindex` is used when the component is not a button
    // Links are tabbable, but don't allow disabled, while non buttons or links
    // are not tabbable, so we mimic that functionality by disabling tabbing
    // when disabled, and adding a `tabindex="0"` to non buttons or non links
    tabindex: props.disabled && !button ? '-1' : tabindex
  };
}; // --- Main component ---
// @vue/component


var BButton = /*#__PURE__*/_utils_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].extend({
  name: NAME,
  functional: true,
  props: props,
  render: function render(h, _ref2) {
    var props = _ref2.props,
        data = _ref2.data,
        listeners = _ref2.listeners,
        children = _ref2.children;
    var toggle = isToggle(props);
    var link = isLink(props);
    var nonStandardTag = isNonStandardTag(props);
    var hashLink = link && props.href === '#';
    var on = {
      keydown: function keydown(evt) {
        // When the link is a `href="#"` or a non-standard tag (has `role="button"`),
        // we add a keydown handlers for SPACE/ENTER

        /* istanbul ignore next */
        if (props.disabled || !(nonStandardTag || hashLink)) {
          return;
        }

        var keyCode = evt.keyCode; // Add SPACE handler for `href="#"` and ENTER handler for non-standard tags

        if (keyCode === _utils_key_codes__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].SPACE || keyCode === _utils_key_codes__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].ENTER && nonStandardTag) {
          var target = evt.currentTarget || evt.target;
          evt.preventDefault();
          target.click();
        }
      },
      click: function click(evt) {
        /* istanbul ignore if: blink/button disabled should handle this */
        if (props.disabled && Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_6__[/* isEvent */ "c"])(evt)) {
          evt.stopPropagation();
          evt.preventDefault();
        } else if (toggle && listeners && listeners['update:pressed']) {
          // Send `.sync` updates to any "pressed" prop (if `.sync` listeners)
          // `concat()` will normalize the value to an array without
          // double wrapping an array value in an array
          Object(_utils_array__WEBPACK_IMPORTED_MODULE_3__[/* concat */ "b"])(listeners['update:pressed']).forEach(function (fn) {
            if (Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_6__[/* isFunction */ "e"])(fn)) {
              fn(!props.pressed);
            }
          });
        }
      }
    };

    if (toggle) {
      on.focusin = handleFocus;
      on.focusout = handleFocus;
    }

    var componentData = {
      staticClass: 'btn',
      class: computeClass(props),
      props: computeLinkProps(props),
      attrs: computeAttrs(props, data),
      on: on
    };
    return h(link ? _link_link__WEBPACK_IMPORTED_MODULE_10__[/* BLink */ "a"] : props.tag, Object(vue_functional_data_merge__WEBPACK_IMPORTED_MODULE_0__[/* mergeData */ "a"])(data, componentData), children);
  }
});

/***/ }),

/***/ "228e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getConfig */
/* unused harmony export getConfigValue */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getComponentConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getBreakpoints; });
/* unused harmony export getBreakpointsCached */
/* unused harmony export getBreakpointsUp */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getBreakpointsUpCached; });
/* unused harmony export getBreakpointsDown */
/* unused harmony export getBreakpointsDownCached */
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dcb3");
/* harmony import */ var _clone_deep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("c9a9");
/* harmony import */ var _get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("a874");
/* harmony import */ var _memoize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("b508");
/* harmony import */ var _config_defaults__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("93ac");




 // --- Constants ---

var PROP_NAME = '$bvConfig';
var VueProto = _vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].prototype; // --- Getter methods ---
// All methods return a deep clone (immutable) copy of the config
// value, to prevent mutation of the user config object.
// Get the current user config. For testing purposes only

var getConfig = function getConfig() {
  return VueProto[PROP_NAME] ? VueProto[PROP_NAME].getConfig() : {};
}; // Method to grab a config value based on a dotted/array notation key

var getConfigValue = function getConfigValue(key) {
  return VueProto[PROP_NAME] ? VueProto[PROP_NAME].getConfigValue(key) : Object(_clone_deep__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_get__WEBPACK_IMPORTED_MODULE_2__[/* getRaw */ "b"])(_config_defaults__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], key));
}; // Method to grab a config value for a particular component

var getComponentConfig = function getComponentConfig(cmpName) {
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  // Return the particular config value for key for if specified,
  // otherwise we return the full config (or an empty object if not found)
  return key ? getConfigValue("".concat(cmpName, ".").concat(key)) : getConfigValue(cmpName) || {};
}; // Convenience method for getting all breakpoint names

var getBreakpoints = function getBreakpoints() {
  return getConfigValue('breakpoints');
}; // Private function for caching / locking-in breakpoint names

var _getBreakpointsCached = Object(_memoize__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(function () {
  return getBreakpoints();
}); // Convenience method for getting all breakpoint names.
// Caches the results after first access.


var getBreakpointsCached = function getBreakpointsCached() {
  return Object(_clone_deep__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_getBreakpointsCached());
}; // Convenience method for getting breakpoints with
// the smallest breakpoint set as ''.
// Useful for components that create breakpoint specific props.

var getBreakpointsUp = function getBreakpointsUp() {
  var breakpoints = getBreakpoints();
  breakpoints[0] = '';
  return breakpoints;
}; // Convenience method for getting breakpoints with
// the smallest breakpoint set as ''.
// Useful for components that create breakpoint specific props.
// Caches the results after first access.

var getBreakpointsUpCached = Object(_memoize__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(function () {
  var breakpoints = getBreakpointsCached();
  breakpoints[0] = '';
  return breakpoints;
}); // Convenience method for getting breakpoints with
// the largest breakpoint set as ''.
// Useful for components that create breakpoint specific props.

var getBreakpointsDown = function getBreakpointsDown() {
  var breakpoints = getBreakpoints();
  breakpoints[breakpoints.length - 1] = '';
  return breakpoints;
}; // Convenience method for getting breakpoints with
// the largest breakpoint set as ''.
// Useful for components that create breakpoint specific props.
// Caches the results after first access.

/* istanbul ignore next: we don't use this method anywhere, yet */

var getBreakpointsDownCached = function getBreakpointsDownCached()
/* istanbul ignore next */
{
  var breakpoints = getBreakpointsCached();
  breakpoints[breakpoints.length - 1] = '';
  return breakpoints;
};

/***/ }),

/***/ "2326":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return from; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return arrayIncludes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return concat; });
// --- Static ---
var from = function from() {
  return Array.from.apply(Array, arguments);
};
var isArray = function isArray(val) {
  return Array.isArray(val);
}; // --- Instance ---

var arrayIncludes = function arrayIncludes(array, value) {
  return array.indexOf(value) !== -1;
};
var concat = function concat() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Array.prototype.concat.apply([], args);
};

/***/ }),

/***/ "365c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hasNormalizedSlot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return normalizeSlot; });
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6c06");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2326");
/* harmony import */ var _inspect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("7b1e");


 // Note for functional components:
// In functional components, `slots` is a function so it must be called
// first before passing to the below methods. `scopedSlots` is always an
// object and may be undefined (for Vue < 2.6.x)

/**
 * Returns true if either scoped or unscoped named slot exists
 *
 * @param {String, Array} name or name[]
 * @param {Object} scopedSlots
 * @param {Object} slots
 * @returns {Array|undefined} VNodes
 */

var hasNormalizedSlot = function hasNormalizedSlot(names) {
  var $scopedSlots = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var $slots = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  // Ensure names is an array
  names = Object(_array__WEBPACK_IMPORTED_MODULE_1__[/* concat */ "b"])(names).filter(_identity__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); // Returns true if the either a $scopedSlot or $slot exists with the specified name

  return names.some(function (name) {
    return $scopedSlots[name] || $slots[name];
  });
};
/**
 * Returns VNodes for named slot either scoped or unscoped
 *
 * @param {String, Array} name or name[]
 * @param {String} scope
 * @param {Object} scopedSlots
 * @param {Object} slots
 * @returns {Array|undefined} VNodes
 */


var normalizeSlot = function normalizeSlot(names) {
  var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var $scopedSlots = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var $slots = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  // Ensure names is an array
  names = Object(_array__WEBPACK_IMPORTED_MODULE_1__[/* concat */ "b"])(names).filter(_identity__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
  var slot;

  for (var i = 0; i < names.length && !slot; i++) {
    var name = names[i];
    slot = $scopedSlots[name] || $slots[name];
  } // Note: in Vue 2.6.x, all named slots are also scoped slots


  return Object(_inspect__WEBPACK_IMPORTED_MODULE_2__[/* isFunction */ "e"])(slot) ? slot(scope) : slot;
}; // Named exports


 // Default export (backwards compatibility)

/* unused harmony default export */ var _unused_webpack_default_export = (normalizeSlot);

/***/ }),

/***/ "3a58":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return toInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return toFloat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return toFixed; });
// Number utilities
// Converts a value (string, number, etc) to an integer number
// Assumes radix base 10
var toInteger = function toInteger(value) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : NaN;
  var integer = parseInt(value, 10);
  return isNaN(integer) ? defaultValue : integer;
}; // Converts a value (string, number, etc) to a number

var toFloat = function toFloat(value) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : NaN;
  var float = parseFloat(value);
  return isNaN(float) ? defaultValue : float;
}; // Converts a value (string, number, etc) to a string
// representation with `precision` digits after the decimal
// Returns the string 'NaN' if the value cannot be converted

var toFixed = function toFixed(val, precision) {
  return toFloat(val).toFixed(toInteger(precision, 0));
};

/***/ }),

/***/ "4362":
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    setTimeout(function () {
        fn.apply(null, args);
    }, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__("df7c");
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),

/***/ "493b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8c4e");

/* harmony default export */ __webpack_exports__["a"] = (Object(_utils_cache__WEBPACK_IMPORTED_MODULE_0__[/* makePropCacheMixin */ "a"])('$attrs', 'bvAttrs'));

/***/ }),

/***/ "4a38":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export stringifyQueryObj */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return parseQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isRouterLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return computeTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return computeRel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return computeHref; });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("906c");
/* harmony import */ var _inspect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("d82f");
/* harmony import */ var _inspect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("7b1e");
/* harmony import */ var _inspect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("2326");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("fa73");




var ANCHOR_TAG = 'a'; // Precompile RegExp

var commaRE = /%2C/g;
var encodeReserveRE = /[!'()*]/g;
var plusRE = /\+/g;
var queryStartRE = /^(\?|#|&)/; // Method to replace reserved chars

var encodeReserveReplacer = function encodeReserveReplacer(c) {
  return '%' + c.charCodeAt(0).toString(16);
}; // Fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas


var encode = function encode(str) {
  return encodeURIComponent(Object(_string__WEBPACK_IMPORTED_MODULE_4__[/* toString */ "f"])(str)).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ',');
};

var decode = decodeURIComponent; // Stringifies an object of query parameters
// See: https://github.com/vuejs/vue-router/blob/dev/src/util/query.js

var stringifyQueryObj = function stringifyQueryObj(obj) {
  if (!Object(_inspect__WEBPACK_IMPORTED_MODULE_1__[/* isPlainObject */ "k"])(obj)) {
    return '';
  }

  var query = Object(_inspect__WEBPACK_IMPORTED_MODULE_1__[/* keys */ "l"])(obj).map(function (key) {
    var val = obj[key];

    if (Object(_inspect__WEBPACK_IMPORTED_MODULE_2__[/* isUndefined */ "k"])(val)) {
      return '';
    } else if (Object(_inspect__WEBPACK_IMPORTED_MODULE_2__[/* isNull */ "f"])(val)) {
      return encode(key);
    } else if (Object(_inspect__WEBPACK_IMPORTED_MODULE_3__[/* isArray */ "d"])(val)) {
      return val.reduce(function (results, val2) {
        if (Object(_inspect__WEBPACK_IMPORTED_MODULE_2__[/* isNull */ "f"])(val2)) {
          results.push(encode(key));
        } else if (!Object(_inspect__WEBPACK_IMPORTED_MODULE_2__[/* isUndefined */ "k"])(val2)) {
          // Faster than string interpolation
          results.push(encode(key) + '=' + encode(val2));
        }

        return results;
      }, []).join('&');
    } // Faster than string interpolation


    return encode(key) + '=' + encode(val);
  })
  /* must check for length, as we only want to filter empty strings, not things that look falsey! */
  .filter(function (x) {
    return x.length > 0;
  }).join('&');
  return query ? "?".concat(query) : '';
};
var parseQuery = function parseQuery(query) {
  var parsed = {};
  query = Object(_string__WEBPACK_IMPORTED_MODULE_4__[/* toString */ "f"])(query).trim().replace(queryStartRE, '');

  if (!query) {
    return parsed;
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(plusRE, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0 ? decode(parts.join('=')) : null;

    if (Object(_inspect__WEBPACK_IMPORTED_MODULE_2__[/* isUndefined */ "k"])(parsed[key])) {
      parsed[key] = val;
    } else if (Object(_inspect__WEBPACK_IMPORTED_MODULE_3__[/* isArray */ "d"])(parsed[key])) {
      parsed[key].push(val);
    } else {
      parsed[key] = [parsed[key], val];
    }
  });
  return parsed;
};
var isLink = function isLink(props) {
  return !!(props.href || props.to);
};
var isRouterLink = function isRouterLink(tag) {
  return !Object(_dom__WEBPACK_IMPORTED_MODULE_0__[/* isTag */ "s"])(tag, ANCHOR_TAG);
};
var computeTag = function computeTag() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      to = _ref.to,
      disabled = _ref.disabled,
      routerComponentName = _ref.routerComponentName;

  var thisOrParent = arguments.length > 1 ? arguments[1] : undefined;
  var hasRouter = thisOrParent.$router;

  if (!hasRouter || hasRouter && disabled || hasRouter && !to) {
    return ANCHOR_TAG;
  } // TODO:
  //   Check registered components for existence of user supplied router link component name
  //   We would need to check PascalCase, kebab-case, and camelCase versions of name:
  //   const name = routerComponentName
  //   const names = [name, PascalCase(name), KebabCase(name), CamelCase(name)]
  //   exists = names.some(name => !!thisOrParent.$options.components[name])
  //   And may want to cache the result for performance or we just let the render fail
  //   if the component is not registered


  return routerComponentName || (thisOrParent.$nuxt ? 'nuxt-link' : 'router-link');
};
var computeRel = function computeRel() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      target = _ref2.target,
      rel = _ref2.rel;

  if (target === '_blank' && Object(_inspect__WEBPACK_IMPORTED_MODULE_2__[/* isNull */ "f"])(rel)) {
    return 'noopener';
  }

  return rel || null;
};
var computeHref = function computeHref() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      href = _ref3.href,
      to = _ref3.to;

  var tag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ANCHOR_TAG;
  var fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '#';
  var toFallback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '/';

  // We've already checked the $router in computeTag(), so isRouterLink() indicates a live router.
  // When deferring to Vue Router's router-link, don't use the href attribute at all.
  // We return null, and then remove href from the attributes passed to router-link
  if (isRouterLink(tag)) {
    return null;
  } // Return `href` when explicitly provided


  if (href) {
    return href;
  } // Reconstruct `href` when `to` used, but no router


  if (to) {
    // Fallback to `to` prop (if `to` is a string)
    if (Object(_inspect__WEBPACK_IMPORTED_MODULE_2__[/* isString */ "j"])(to)) {
      return to || toFallback;
    } // Fallback to `to.path + to.query + to.hash` prop (if `to` is an object)


    if (Object(_inspect__WEBPACK_IMPORTED_MODULE_1__[/* isPlainObject */ "k"])(to) && (to.path || to.query || to.hash)) {
      var path = Object(_string__WEBPACK_IMPORTED_MODULE_4__[/* toString */ "f"])(to.path);
      var query = stringifyQueryObj(to.query);
      var hash = Object(_string__WEBPACK_IMPORTED_MODULE_4__[/* toString */ "f"])(to.hash);
      hash = !hash || hash.charAt(0) === '#' ? hash : "#".concat(hash);
      return "".concat(path).concat(query).concat(hash) || toFallback;
    }
  } // If nothing is provided return the fallback


  return fallback;
};

/***/ }),

/***/ "6c06":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var identity = function identity(x) {
  return x;
};

/* harmony default export */ __webpack_exports__["a"] = (identity);

/***/ }),

/***/ "7b1e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export toType */
/* unused harmony export toRawType */
/* unused harmony export toRawTypeLC */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return isNull; });
/* unused harmony export isEmptyString */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return isUndefinedOrNull; });
/* unused harmony export isUndefinedOrNullOrEmpty */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return isNumber; });
/* unused harmony export isPrimitive */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return isPromise; });
/* harmony import */ var _safe_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a5d7");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



 // --- Convenience inspection utilities ---

var toType = function toType(val) {
  return _typeof(val);
};
var toRawType = function toRawType(val) {
  return Object.prototype.toString.call(val).slice(8, -1);
};
var toRawTypeLC = function toRawTypeLC(val) {
  return toRawType(val).toLowerCase();
};
var isUndefined = function isUndefined(val) {
  return val === undefined;
};
var isNull = function isNull(val) {
  return val === null;
};
var isEmptyString = function isEmptyString(val) {
  return val === '';
};
var isUndefinedOrNull = function isUndefinedOrNull(val) {
  return isUndefined(val) || isNull(val);
};
var isUndefinedOrNullOrEmpty = function isUndefinedOrNullOrEmpty(val) {
  return isUndefinedOrNull(val) || isEmptyString(val);
};
var isFunction = function isFunction(val) {
  return toType(val) === 'function';
};
var isBoolean = function isBoolean(val) {
  return toType(val) === 'boolean';
};
var isString = function isString(val) {
  return toType(val) === 'string';
};
var isNumber = function isNumber(val) {
  return toType(val) === 'number';
};
var isPrimitive = function isPrimitive(val) {
  return isBoolean(val) || isString(val) || isNumber(val);
};
var isDate = function isDate(val) {
  return val instanceof Date;
};
var isEvent = function isEvent(val) {
  return val instanceof Event;
};
var isFile = function isFile(val) {
  return val instanceof _safe_types__WEBPACK_IMPORTED_MODULE_0__[/* File */ "a"];
};
var isRegExp = function isRegExp(val) {
  return toRawType(val) === 'RegExp';
};
var isPromise = function isPromise(val) {
  return !isUndefinedOrNull(val) && isFunction(val.then) && isFunction(val.catch);
}; // Extra convenience named re-exports



/***/ }),

/***/ "8c18":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_normalize_slot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("365c");
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2326");


/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    hasNormalizedSlot: function hasNormalizedSlot(names) {
      // Returns true if the either a $scopedSlot or $slot exists with the specified name
      // `names` can be a string name or an array of names
      return Object(_utils_normalize_slot__WEBPACK_IMPORTED_MODULE_0__[/* hasNormalizedSlot */ "a"])(names, this.$scopedSlots, this.$slots);
    },
    normalizeSlot: function normalizeSlot(names) {
      var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      // Returns an array of rendered VNodes if slot found.
      // Returns undefined if not found.
      // `names` can be a string name or an array of names
      var vNodes = Object(_utils_normalize_slot__WEBPACK_IMPORTED_MODULE_0__[/* normalizeSlot */ "b"])(names, scope, this.$scopedSlots, this.$slots);

      return vNodes ? Object(_utils_array__WEBPACK_IMPORTED_MODULE_1__[/* concat */ "b"])(vNodes) : vNodes;
    }
  }
});

/***/ }),

/***/ "8c4e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export makePropWatcher */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return makePropCacheMixin; });
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d82f");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var makePropWatcher = function makePropWatcher(propName) {
  return {
    handler: function handler(newVal, oldVal) {
      for (var key in oldVal) {
        if (!Object(_object__WEBPACK_IMPORTED_MODULE_0__[/* hasOwnProperty */ "i"])(newVal, key)) {
          this.$delete(this.$data[propName], key);
        }
      }

      for (var _key in newVal) {
        this.$set(this.$data[propName], _key, newVal[_key]);
      }
    }
  };
};
var makePropCacheMixin = function makePropCacheMixin(propName, proxyPropName) {
  return {
    data: function data() {
      return _defineProperty({}, proxyPropName, {});
    },
    watch: _defineProperty({}, propName, makePropWatcher(proxyPropName)),
    created: function created() {
      this[proxyPropName] = _objectSpread({}, this[propName]);
    }
  };
};

/***/ }),

/***/ "906c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export matchesEl */
/* unused harmony export closestEl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return requestAF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MutationObs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return removeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return isElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getActiveElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return isTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return isActiveElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return isVisible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return isDisabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return reflow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return matches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return closest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return contains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return removeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return hasClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return setAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return removeAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return hasAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getBCR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getCS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return getSel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return offset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return getTabables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return attemptFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return attemptBlur; });
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2326");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("938d");
/* harmony import */ var _inspect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("7b1e");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("3a58");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("fa73");




 // --- Constants ---

var TABABLE_SELECTOR = ['button', '[href]:not(.disabled)', 'input', 'select', 'textarea', '[tabindex]', '[contenteditable]'].map(function (s) {
  return "".concat(s, ":not(:disabled):not([disabled])");
}).join(', ');
var w = _env__WEBPACK_IMPORTED_MODULE_1__[/* hasWindowSupport */ "i"] ? window : {};
var d = _env__WEBPACK_IMPORTED_MODULE_1__[/* hasDocumentSupport */ "b"] ? document : {};
var elProto = typeof Element !== 'undefined' ? Element.prototype : {}; // --- Normalization utils ---
// See: https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill

/* istanbul ignore next */

var matchesEl = elProto.matches || elProto.msMatchesSelector || elProto.webkitMatchesSelector; // See: https://developer.mozilla.org/en-US/docs/Web/API/Element/closest

/* istanbul ignore next */

var closestEl = elProto.closest || function (sel)
/* istanbul ignore next */
{
  var el = this;

  do {
    // Use our "patched" matches function
    if (matches(el, sel)) {
      return el;
    }

    el = el.parentElement || el.parentNode;
  } while (!Object(_inspect__WEBPACK_IMPORTED_MODULE_2__[/* isNull */ "f"])(el) && el.nodeType === Node.ELEMENT_NODE);

  return null;
}; // `requestAnimationFrame()` convenience method

/* istanbul ignore next: JSDOM always returns the first option */

var requestAF = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.mozRequestAnimationFrame || w.msRequestAnimationFrame || w.oRequestAnimationFrame || // Fallback, but not a true polyfill
// Only needed for Opera Mini

/* istanbul ignore next */
function (cb) {
  return setTimeout(cb, 16);
};
var MutationObs = w.MutationObserver || w.WebKitMutationObserver || w.MozMutationObserver || null; // --- Utils ---
// Remove a node from DOM

var removeNode = function removeNode(el) {
  return el && el.parentNode && el.parentNode.removeChild(el);
}; // Determine if an element is an HTML element

var isElement = function isElement(el) {
  return !!(el && el.nodeType === Node.ELEMENT_NODE);
}; // Get the currently active HTML element

var getActiveElement = function getActiveElement() {
  var excludes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var activeElement = d.activeElement;
  return activeElement && !excludes.some(function (el) {
    return el === activeElement;
  }) ? activeElement : null;
}; // Returns `true` if a tag's name equals `name`

var isTag = function isTag(tag, name) {
  return Object(_string__WEBPACK_IMPORTED_MODULE_4__[/* toString */ "f"])(tag).toLowerCase() === Object(_string__WEBPACK_IMPORTED_MODULE_4__[/* toString */ "f"])(name).toLowerCase();
}; // Determine if an HTML element is the currently active element

var isActiveElement = function isActiveElement(el) {
  return isElement(el) && el === getActiveElement();
}; // Determine if an HTML element is visible - Faster than CSS check

var isVisible = function isVisible(el) {
  if (!isElement(el) || !el.parentNode || !contains(d.body, el)) {
    // Note this can fail for shadow dom elements since they
    // are not a direct descendant of document.body
    return false;
  }

  if (el.style.display === 'none') {
    // We do this check to help with vue-test-utils when using v-show

    /* istanbul ignore next */
    return false;
  } // All browsers support getBoundingClientRect(), except JSDOM as it returns all 0's for values :(
  // So any tests that need isVisible will fail in JSDOM
  // Except when we override the getBCR prototype in some tests


  var bcr = getBCR(el);
  return !!(bcr && bcr.height > 0 && bcr.width > 0);
}; // Determine if an element is disabled

var isDisabled = function isDisabled(el) {
  return !isElement(el) || el.disabled || hasAttr(el, 'disabled') || hasClass(el, 'disabled');
}; // Cause/wait-for an element to reflow its content (adjusting its height/width)

var reflow = function reflow(el) {
  // Requesting an elements offsetHight will trigger a reflow of the element content

  /* istanbul ignore next: reflow doesn't happen in JSDOM */
  return isElement(el) && el.offsetHeight;
}; // Select all elements matching selector. Returns `[]` if none found

var selectAll = function selectAll(selector, root) {
  return Object(_array__WEBPACK_IMPORTED_MODULE_0__[/* from */ "c"])((isElement(root) ? root : d).querySelectorAll(selector));
}; // Select a single element, returns `null` if not found

var select = function select(selector, root) {
  return (isElement(root) ? root : d).querySelector(selector) || null;
}; // Determine if an element matches a selector

var matches = function matches(el, selector) {
  return isElement(el) ? matchesEl.call(el, selector) : false;
}; // Finds closest element matching selector. Returns `null` if not found

var closest = function closest(selector, root) {
  var includeRoot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (!isElement(root)) {
    return null;
  }

  var el = closestEl.call(root, selector); // Native closest behaviour when `includeRoot` is truthy,
  // else emulate jQuery closest and return `null` if match is
  // the passed in root element when `includeRoot` is falsey

  return includeRoot ? el : el === root ? null : el;
}; // Returns true if the parent element contains the child element

var contains = function contains(parent, child) {
  return parent && Object(_inspect__WEBPACK_IMPORTED_MODULE_2__[/* isFunction */ "e"])(parent.contains) ? parent.contains(child) : false;
}; // Get an element given an ID

var getById = function getById(id) {
  return d.getElementById(/^#/.test(id) ? id.slice(1) : id) || null;
}; // Add a class to an element

var addClass = function addClass(el, className) {
  // We are checking for `el.classList` existence here since IE 11
  // returns `undefined` for some elements (e.g. SVG elements)
  // See https://github.com/bootstrap-vue/bootstrap-vue/issues/2713
  if (className && isElement(el) && el.classList) {
    el.classList.add(className);
  }
}; // Remove a class from an element

var removeClass = function removeClass(el, className) {
  // We are checking for `el.classList` existence here since IE 11
  // returns `undefined` for some elements (e.g. SVG elements)
  // See https://github.com/bootstrap-vue/bootstrap-vue/issues/2713
  if (className && isElement(el) && el.classList) {
    el.classList.remove(className);
  }
}; // Test if an element has a class

var hasClass = function hasClass(el, className) {
  // We are checking for `el.classList` existence here since IE 11
  // returns `undefined` for some elements (e.g. SVG elements)
  // See https://github.com/bootstrap-vue/bootstrap-vue/issues/2713
  if (className && isElement(el) && el.classList) {
    return el.classList.contains(className);
  }

  return false;
}; // Set an attribute on an element

var setAttr = function setAttr(el, attr, val) {
  if (attr && isElement(el)) {
    el.setAttribute(attr, val);
  }
}; // Remove an attribute from an element

var removeAttr = function removeAttr(el, attr) {
  if (attr && isElement(el)) {
    el.removeAttribute(attr);
  }
}; // Get an attribute value from an element
// Returns `null` if not found

var getAttr = function getAttr(el, attr) {
  return attr && isElement(el) ? el.getAttribute(attr) : null;
}; // Determine if an attribute exists on an element
// Returns `true` or `false`, or `null` if element not found

var hasAttr = function hasAttr(el, attr) {
  return attr && isElement(el) ? el.hasAttribute(attr) : null;
}; // Return the Bounding Client Rect of an element
// Returns `null` if not an element

/* istanbul ignore next: getBoundingClientRect() doesn't work in JSDOM */

var getBCR = function getBCR(el) {
  return isElement(el) ? el.getBoundingClientRect() : null;
}; // Get computed style object for an element

/* istanbul ignore next: getComputedStyle() doesn't work in JSDOM */

var getCS = function getCS(el) {
  return _env__WEBPACK_IMPORTED_MODULE_1__[/* hasWindowSupport */ "i"] && isElement(el) ? w.getComputedStyle(el) : {};
}; // Returns a `Selection` object representing the range of text selected
// Returns `null` if no window support is given

/* istanbul ignore next: getSelection() doesn't work in JSDOM */

var getSel = function getSel() {
  return _env__WEBPACK_IMPORTED_MODULE_1__[/* hasWindowSupport */ "i"] && w.getSelection ? w.getSelection() : null;
}; // Return an element's offset with respect to document element
// https://j11y.io/jquery/#v=git&fn=jQuery.fn.offset

var offset = function offset(el)
/* istanbul ignore next: getBoundingClientRect(), getClientRects() doesn't work in JSDOM */
{
  var _offset = {
    top: 0,
    left: 0
  };

  if (!isElement(el) || el.getClientRects().length === 0) {
    return _offset;
  }

  var bcr = getBCR(el);

  if (bcr) {
    var win = el.ownerDocument.defaultView;
    _offset.top = bcr.top + win.pageYOffset;
    _offset.left = bcr.left + win.pageXOffset;
  }

  return _offset;
}; // Return an element's offset with respect to to its offsetParent
// https://j11y.io/jquery/#v=git&fn=jQuery.fn.position

var position = function position(el)
/* istanbul ignore next: getBoundingClientRect() doesn't work in JSDOM */
{
  var _offset = {
    top: 0,
    left: 0
  };

  if (!isElement(el)) {
    return _offset;
  }

  var parentOffset = {
    top: 0,
    left: 0
  };
  var elStyles = getCS(el);

  if (elStyles.position === 'fixed') {
    _offset = getBCR(el) || _offset;
  } else {
    _offset = offset(el);
    var doc = el.ownerDocument;
    var offsetParent = el.offsetParent || doc.documentElement;

    while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && getCS(offsetParent).position === 'static') {
      offsetParent = offsetParent.parentNode;
    }

    if (offsetParent && offsetParent !== el && offsetParent.nodeType === Node.ELEMENT_NODE) {
      parentOffset = offset(offsetParent);
      var offsetParentStyles = getCS(offsetParent);
      parentOffset.top += Object(_number__WEBPACK_IMPORTED_MODULE_3__[/* toFloat */ "b"])(offsetParentStyles.borderTopWidth, 0);
      parentOffset.left += Object(_number__WEBPACK_IMPORTED_MODULE_3__[/* toFloat */ "b"])(offsetParentStyles.borderLeftWidth, 0);
    }
  }

  return {
    top: _offset.top - parentOffset.top - Object(_number__WEBPACK_IMPORTED_MODULE_3__[/* toFloat */ "b"])(elStyles.marginTop, 0),
    left: _offset.left - parentOffset.left - Object(_number__WEBPACK_IMPORTED_MODULE_3__[/* toFloat */ "b"])(elStyles.marginLeft, 0)
  };
}; // Find all tabable elements in the given element
// Assumes users have not used `tabindex` > `0` on elements

var getTabables = function getTabables() {
  var rootEl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
  return selectAll(TABABLE_SELECTOR, rootEl).filter(isVisible).filter(function (el) {
    return el.tabIndex > -1 && !el.disabled;
  });
}; // Attempt to focus an element, and return `true` if successful

var attemptFocus = function attemptFocus(el) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  try {
    el.focus(options);
  } catch (_unused) {}

  return isActiveElement(el);
}; // Attempt to blur an element, and return `true` if successful

var attemptBlur = function attemptBlur(el) {
  try {
    el.blur();
  } catch (_unused2) {}

  return !isActiveElement(el);
};

/***/ }),

/***/ "938d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return hasWindowSupport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hasDocumentSupport; });
/* unused harmony export hasNavigatorSupport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return hasPromiseSupport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hasMutationObserverSupport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return isBrowser; });
/* unused harmony export userAgent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return isJSDOM; });
/* unused harmony export isIE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return hasPassiveEventSupport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hasTouchSupport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return hasPointerEventSupport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hasIntersectionObserverSupport; });
/* unused harmony export getEnv */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getNoWarn; });
/**
 * Utilities to get information about the current environment
 */
// --- Constants ---
var hasWindowSupport = typeof window !== 'undefined';
var hasDocumentSupport = typeof document !== 'undefined';
var hasNavigatorSupport = typeof navigator !== 'undefined';
var hasPromiseSupport = typeof Promise !== 'undefined';
/* istanbul ignore next: JSDOM always returns false */

var hasMutationObserverSupport = typeof MutationObserver !== 'undefined' || typeof WebKitMutationObserver !== 'undefined' || typeof MozMutationObserver !== 'undefined';
var isBrowser = hasWindowSupport && hasDocumentSupport && hasNavigatorSupport; // Browser type sniffing

var userAgent = isBrowser ? window.navigator.userAgent.toLowerCase() : '';
var isJSDOM = userAgent.indexOf('jsdom') > 0;
var isIE = /msie|trident/.test(userAgent); // Determine if the browser supports the option passive for events

var hasPassiveEventSupport = function () {
  var passiveEventSupported = false;

  if (isBrowser) {
    try {
      var options = {
        get passive() {
          // This function will be called when the browser
          // attempts to access the passive property.

          /* istanbul ignore next: will never be called in JSDOM */
          passiveEventSupported = true;
        }

      };
      window.addEventListener('test', options, options);
      window.removeEventListener('test', options, options);
    } catch (err) {
      /* istanbul ignore next: will never be called in JSDOM */
      passiveEventSupported = false;
    }
  }

  return passiveEventSupported;
}();
var hasTouchSupport = isBrowser && ('ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0);
var hasPointerEventSupport = isBrowser && Boolean(window.PointerEvent || window.MSPointerEvent);
/* istanbul ignore next: JSDOM only checks for 'IntersectionObserver' */

var hasIntersectionObserverSupport = isBrowser && 'IntersectionObserver' in window && 'IntersectionObserverEntry' in window && // Edge 15 and UC Browser lack support for `isIntersecting`
// but we an use intersectionRatio > 0 instead
// 'isIntersecting' in window.IntersectionObserverEntry.prototype &&
'intersectionRatio' in window.IntersectionObserverEntry.prototype; // --- Getters ---

var getEnv = function getEnv(key) {
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var env = typeof process !== 'undefined' && process ? Object({"NODE_ENV":"production","VUE_APP_APIKEY":"2ff19ad76092e0aa781bb55d473a6c12","BASE_URL":"/ovc-jv/"}) || false : {};

  if (!key) {
    /* istanbul ignore next */
    return env;
  }

  return env[key] || fallback;
};
var getNoWarn = function getNoWarn() {
  return getEnv('BOOTSTRAP_VUE_NO_WARN');
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))

/***/ }),

/***/ "93ac":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d82f");
 // --- General BootstrapVue configuration ---
// NOTES
//
// The global config SHALL NOT be used to set defaults for Boolean props, as the props
// would loose their semantic meaning, and force people writing 3rd party components to
// explicitly set a true or false value using the v-bind syntax on boolean props
//
// Supported config values (depending on the prop's supported type(s)):
// `String`, `Array`, `Object`, `null` or `undefined`
// BREAKPOINT DEFINITIONS
//
// Some components (`<b-col>` and `<b-form-group>`) generate props based on breakpoints,
// and this occurs when the component is first loaded (evaluated), which may happen
// before the config is created/modified
//
// To get around this we make these components' props async (lazy evaluation)
// The component definition is only called/executed when the first access to the
// component is used (and cached on subsequent uses)
// PROP DEFAULTS
//
// For default values on props, we use the default value factory function approach so
// that the default values are pulled in at each component instantiation
//
//  props: {
//    variant: {
//      type: String,
//      default: () => getConfigComponent('BAlert', 'variant')
//    }
//  }
//
// We also provide a cached getter for breakpoints, which are "frozen" on first access
// prettier-ignore

/* harmony default export */ __webpack_exports__["a"] = (Object(_object__WEBPACK_IMPORTED_MODULE_0__[/* deepFreeze */ "d"])({
  // Breakpoints
  breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'],
  // Form controls
  formControls: {
    size: undefined
  },
  // Component specific defaults are keyed by the component
  // name (PascalCase) and prop name (camelCase)
  BAlert: {
    dismissLabel: 'Close',
    variant: 'info'
  },
  BAvatar: {
    variant: 'secondary',
    badgeVariant: 'primary'
  },
  BBadge: {
    variant: 'secondary'
  },
  BButton: {
    size: undefined,
    variant: 'secondary'
  },
  BButtonClose: {
    content: '&times;',
    // `textVariant` is `null` to inherit the current text color
    textVariant: undefined,
    ariaLabel: 'Close'
  },
  BCalendar: {
    // BFormDate will choose these first if not provided in BFormDate section
    labelPrevDecade: 'Previous decade',
    labelPrevYear: 'Previous year',
    labelPrevMonth: 'Previous month',
    labelCurrentMonth: 'Current month',
    labelNextMonth: 'Next month',
    labelNextYear: 'Next year',
    labelNextDecade: 'Next decade',
    labelToday: 'Today',
    labelSelected: 'Selected date',
    labelNoDateSelected: 'No date selected',
    labelCalendar: 'Calendar',
    labelNav: 'Calendar navigation',
    labelHelp: 'Use cursor keys to navigate calendar dates'
  },
  BCardSubTitle: {
    // `<b-card>` and `<b-card-body>` also inherit this prop
    subTitleTextVariant: 'muted'
  },
  BCarousel: {
    labelPrev: 'Previous Slide',
    labelNext: 'Next Slide',
    labelGotoSlide: 'Goto Slide',
    labelIndicators: 'Select a slide to display'
  },
  BDropdown: {
    toggleText: 'Toggle Dropdown',
    size: undefined,
    variant: 'secondary',
    splitVariant: undefined
  },
  BFormDatepicker: {
    // BFormDatepicker will choose from BCalendar first if not provided here
    labelPrevDecade: undefined,
    labelPrevYear: undefined,
    labelPrevMonth: undefined,
    labelCurrentMonth: undefined,
    labelNextMonth: undefined,
    labelNextYear: undefined,
    labelNextDecade: undefined,
    labelToday: undefined,
    labelSelected: undefined,
    labelNoDateSelected: undefined,
    labelCalendar: undefined,
    labelNav: undefined,
    labelHelp: undefined,
    // These props are specific to BFormDatepicker
    labelTodayButton: 'Select today',
    labelResetButton: 'Reset',
    labelCloseButton: 'Close'
  },
  BFormFile: {
    browseText: 'Browse',
    // Chrome default file prompt
    placeholder: 'No file chosen',
    dropPlaceholder: 'Drop files here'
  },
  BFormRating: {
    variant: null,
    color: null
  },
  BFormTag: {
    removeLabel: 'Remove tag',
    variant: 'secondary'
  },
  BFormTags: {
    addButtonText: 'Add',
    addButtonVariant: 'outline-secondary',
    duplicateTagText: 'Duplicate tag(s)',
    invalidTagText: 'Invalid tag(s)',
    placeholder: 'Add tag...',
    tagRemoveLabel: 'Remove tag',
    tagRemovedLabel: 'Tag removed',
    tagVariant: 'secondary'
  },
  BFormText: {
    textVariant: 'muted'
  },
  BFormTimepicker: {
    // Fallback to BTime
    labelNoTimeSelected: undefined,
    labelSelected: undefined,
    labelHours: undefined,
    labelMinutes: undefined,
    labelSeconds: undefined,
    labelAmpm: undefined,
    labelAm: undefined,
    labelPm: undefined,
    // Fallback to BTime then BFormSpinbutton
    labelDecrement: undefined,
    labelIncrement: undefined,
    // These props are specific to BFormTimepicker
    labelNowButton: 'Select now',
    labelResetButton: 'Reset',
    labelCloseButton: 'Close'
  },
  BFormSpinbutton: {
    labelDecrement: 'Decrement',
    labelIncrement: 'Increment'
  },
  BImg: {
    blankColor: 'transparent'
  },
  BImgLazy: {
    blankColor: 'transparent'
  },
  BInputGroup: {
    size: undefined
  },
  BJumbotron: {
    bgVariant: undefined,
    borderVariant: undefined,
    textVariant: undefined
  },
  BLink: {
    routerComponentName: undefined
  },
  BListGroupItem: {
    variant: undefined
  },
  BModal: {
    titleTag: 'h5',
    size: 'md',
    headerBgVariant: undefined,
    headerBorderVariant: undefined,
    headerTextVariant: undefined,
    headerCloseVariant: undefined,
    bodyBgVariant: undefined,
    bodyTextVariant: undefined,
    footerBgVariant: undefined,
    footerBorderVariant: undefined,
    footerTextVariant: undefined,
    cancelTitle: 'Cancel',
    cancelVariant: 'secondary',
    okTitle: 'OK',
    okVariant: 'primary',
    headerCloseContent: '&times;',
    headerCloseLabel: 'Close'
  },
  BNavbar: {
    variant: null
  },
  BNavbarToggle: {
    label: 'Toggle navigation'
  },
  BPagination: {
    size: undefined
  },
  BPaginationNav: {
    size: undefined
  },
  BPopover: {
    boundary: 'scrollParent',
    boundaryPadding: 5,
    customClass: undefined,
    delay: 50,
    variant: undefined
  },
  BProgress: {
    variant: undefined
  },
  BProgressBar: {
    variant: undefined
  },
  BSpinner: {
    variant: undefined
  },
  BSidebar: {
    bgVariant: 'light',
    textVariant: 'dark',
    shadow: false,
    width: undefined,
    tag: 'div',
    backdropVariant: 'dark'
  },
  BTable: {
    selectedVariant: 'active',
    headVariant: undefined,
    footVariant: undefined
  },
  BTime: {
    labelNoTimeSelected: 'No time selected',
    labelSelected: 'Selected time',
    labelHours: 'Hours',
    labelMinutes: 'Minutes',
    labelSeconds: 'Seconds',
    labelAmpm: 'AM/PM',
    // It would be nice to be able to get these from Intl.DateTimeFormat somehow
    labelAm: 'AM',
    labelPm: 'PM',
    // The following inherit from BFormSpinbutton if not provided
    labelIncrement: undefined,
    labelDecrement: undefined
  },
  BToast: {
    toaster: 'b-toaster-top-right',
    autoHideDelay: 5000,
    variant: undefined,
    toastClass: undefined,
    headerClass: undefined,
    bodyClass: undefined
  },
  BToaster: {
    ariaLive: undefined,
    ariaAtomic: undefined,
    role: undefined
  },
  BTooltip: {
    boundary: 'scrollParent',
    boundaryPadding: 5,
    customClass: undefined,
    delay: 50,
    variant: undefined
  }
}));

/***/ }),

/***/ "a5d7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Element */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HTMLElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SVGElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return File; });
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("938d");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * SSR safe types
 */

var w = _env__WEBPACK_IMPORTED_MODULE_0__[/* hasWindowSupport */ "i"] ? window : {};
var Element = _env__WEBPACK_IMPORTED_MODULE_0__[/* hasWindowSupport */ "i"] ? w.Element : /*#__PURE__*/function (_Object) {
  _inherits(Element, _Object);

  var _super = _createSuper(Element);

  function Element() {
    _classCallCheck(this, Element);

    return _super.apply(this, arguments);
  }

  return Element;
}( /*#__PURE__*/_wrapNativeSuper(Object));
var HTMLElement = _env__WEBPACK_IMPORTED_MODULE_0__[/* hasWindowSupport */ "i"] ? w.HTMLElement : /*#__PURE__*/function (_Element) {
  _inherits(HTMLElement, _Element);

  var _super2 = _createSuper(HTMLElement);

  function HTMLElement() {
    _classCallCheck(this, HTMLElement);

    return _super2.apply(this, arguments);
  }

  return HTMLElement;
}(Element);
var SVGElement = _env__WEBPACK_IMPORTED_MODULE_0__[/* hasWindowSupport */ "i"] ? w.SVGElement : /*#__PURE__*/function (_Element2) {
  _inherits(SVGElement, _Element2);

  var _super3 = _createSuper(SVGElement);

  function SVGElement() {
    _classCallCheck(this, SVGElement);

    return _super3.apply(this, arguments);
  }

  return SVGElement;
}(Element);
var File = _env__WEBPACK_IMPORTED_MODULE_0__[/* hasWindowSupport */ "i"] ? w.File : /*#__PURE__*/function (_Object2) {
  _inherits(File, _Object2);

  var _super4 = _createSuper(File);

  function File() {
    _classCallCheck(this, File);

    return _super4.apply(this, arguments);
  }

  return File;
}( /*#__PURE__*/_wrapNativeSuper(Object));

/***/ }),

/***/ "a874":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getRaw; });
/* unused harmony export get */
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6c06");
/* harmony import */ var _inspect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2326");
/* harmony import */ var _inspect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("d82f");
/* harmony import */ var _inspect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("7b1e");


var RX_ARRAY_NOTATION = /\[(\d+)]/g;
/**
 * Get property defined by dot/array notation in string, returns undefined if not found
 *
 * @link https://gist.github.com/jeneg/9767afdcca45601ea44930ea03e0febf#gistcomment-1935901
 *
 * @param {Object} obj
 * @param {string|Array} path
 * @return {*}
 */

var getRaw = function getRaw(obj, path) {
  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  // Handle array of path values
  path = Object(_inspect__WEBPACK_IMPORTED_MODULE_1__[/* isArray */ "d"])(path) ? path.join('.') : path; // If no path or no object passed

  if (!path || !Object(_inspect__WEBPACK_IMPORTED_MODULE_2__[/* isObject */ "j"])(obj)) {
    return defaultValue;
  } // Handle edge case where user has dot(s) in top-level item field key
  // See https://github.com/bootstrap-vue/bootstrap-vue/issues/2762
  // Switched to `in` operator vs `hasOwnProperty` to handle obj.prototype getters
  // https://github.com/bootstrap-vue/bootstrap-vue/issues/3463


  if (path in obj) {
    return obj[path];
  } // Handle string array notation (numeric indices only)


  path = String(path).replace(RX_ARRAY_NOTATION, '.$1');
  var steps = path.split('.').filter(_identity__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]); // Handle case where someone passes a string of only dots

  if (steps.length === 0) {
    return defaultValue;
  } // Traverse path in object to find result
  // Switched to `in` operator vs `hasOwnProperty` to handle obj.prototype getters
  // https://github.com/bootstrap-vue/bootstrap-vue/issues/3463


  return steps.every(function (step) {
    return Object(_inspect__WEBPACK_IMPORTED_MODULE_2__[/* isObject */ "j"])(obj) && step in obj && !Object(_inspect__WEBPACK_IMPORTED_MODULE_3__[/* isUndefinedOrNull */ "l"])(obj = obj[step]);
  }) ? obj : Object(_inspect__WEBPACK_IMPORTED_MODULE_3__[/* isNull */ "f"])(obj) ? null : defaultValue;
};
/**
 * Get property defined by dot/array notation in string.
 *
 * @link https://gist.github.com/jeneg/9767afdcca45601ea44930ea03e0febf#gistcomment-1935901
 *
 * @param {Object} obj
 * @param {string|Array} path
 * @param {*} defaultValue (optional)
 * @return {*}
 */

var get = function get(obj, path) {
  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var val = getRaw(obj, path);
  return Object(_inspect__WEBPACK_IMPORTED_MODULE_3__[/* isUndefinedOrNull */ "l"])(val) ? defaultValue : val;
};
/* harmony default export */ __webpack_exports__["a"] = (get);

/***/ }),

/***/ "aa59":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routerLinkProps */
/* unused harmony export nuxtLinkProps */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return props; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BLink; });
/* harmony import */ var _utils_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dcb3");
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2326");
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("228e");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("906c");
/* harmony import */ var _utils_inspect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("7b1e");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cf75");
/* harmony import */ var _utils_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("4a38");
/* harmony import */ var _mixins_attrs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("493b");
/* harmony import */ var _mixins_listeners__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("bc9a");
/* harmony import */ var _mixins_normalize_slot__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("8c18");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










 // --- Constants ---

var NAME = 'BLink'; // --- Props ---
// <router-link> specific props

var routerLinkProps = {
  to: {
    type: [String, Object],
    default: null
  },
  append: {
    type: Boolean,
    default: false
  },
  replace: {
    type: Boolean,
    default: false
  },
  event: {
    type: [String, Array],
    default: 'click'
  },
  activeClass: {
    type: String // default: undefined

  },
  exact: {
    type: Boolean,
    default: false
  },
  exactActiveClass: {
    type: String // default: undefined

  },
  routerTag: {
    type: String,
    default: 'a'
  }
}; // <nuxt-link> specific props

var nuxtLinkProps = {
  prefetch: {
    type: Boolean,
    // Must be `null` to fall back to the value defined in the
    // `nuxt.config.js` configuration file for `router.prefetchLinks`
    // We convert `null` to `undefined`, so that Nuxt.js will use the
    // compiled default. Vue treats `undefined` as default of `false`
    // for Boolean props, so we must set it as `null` here to be a
    // true tri-state prop
    default: null
  },
  noPrefetch: {
    type: Boolean,
    default: false
  }
};
var props = _objectSpread(_objectSpread(_objectSpread({
  href: {
    type: String,
    default: null
  },
  rel: {
    type: String,
    // Must be `null` if no value provided
    default: null
  },
  target: {
    type: String,
    default: '_self'
  },
  active: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
}, routerLinkProps), nuxtLinkProps), {}, {
  // To support 3rd party router links based on `<router-link>` (i.e. `g-link` for Gridsome)
  // Default is to auto choose between `<router-link>` and `<nuxt-link>`
  // Gridsome doesn't provide a mechanism to auto detect and has caveats
  // such as not supporting FQDN URLs or hash only URLs
  routerComponentName: {
    type: String,
    default: function _default() {
      return Object(_utils_config__WEBPACK_IMPORTED_MODULE_2__[/* getComponentConfig */ "c"])(NAME, 'routerComponentName');
    }
  }
}); // --- Main component ---
// @vue/component

var BLink = /*#__PURE__*/_utils_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].extend({
  name: 'BLink',
  // Mixin order is important!
  mixins: [_mixins_attrs__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], _mixins_listeners__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], _mixins_normalize_slot__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"]],
  inheritAttrs: false,
  props: props,
  computed: {
    computedTag: function computedTag() {
      // We don't pass `this` as the first arg as we need reactivity of the props
      var to = this.to,
          disabled = this.disabled,
          routerComponentName = this.routerComponentName;
      return Object(_utils_router__WEBPACK_IMPORTED_MODULE_6__[/* computeTag */ "c"])({
        to: to,
        disabled: disabled,
        routerComponentName: routerComponentName
      }, this);
    },
    isRouterLink: function isRouterLink() {
      return Object(_utils_router__WEBPACK_IMPORTED_MODULE_6__[/* isRouterLink */ "e"])(this.computedTag);
    },
    computedRel: function computedRel() {
      // We don't pass `this` as the first arg as we need reactivity of the props
      return Object(_utils_router__WEBPACK_IMPORTED_MODULE_6__[/* computeRel */ "b"])({
        target: this.target,
        rel: this.rel
      });
    },
    computedHref: function computedHref() {
      // We don't pass `this` as the first arg as we need reactivity of the props
      return Object(_utils_router__WEBPACK_IMPORTED_MODULE_6__[/* computeHref */ "a"])({
        to: this.to,
        href: this.href
      }, this.computedTag);
    },
    computedProps: function computedProps() {
      var prefetch = this.prefetch;
      return this.isRouterLink ? _objectSpread(_objectSpread({}, Object(_utils_props__WEBPACK_IMPORTED_MODULE_5__[/* pluckProps */ "b"])(_objectSpread(_objectSpread({}, routerLinkProps), nuxtLinkProps), this)), {}, {
        // Coerce `prefetch` value `null` to be `undefined`
        prefetch: Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_4__[/* isBoolean */ "a"])(prefetch) ? prefetch : undefined,
        // Pass `router-tag` as `tag` prop
        tag: this.routerTag
      }) : {};
    },
    computedAttrs: function computedAttrs() {
      var bvAttrs = this.bvAttrs,
          href = this.computedHref,
          rel = this.computedRel,
          disabled = this.disabled,
          target = this.target,
          routerTag = this.routerTag,
          isRouterLink = this.isRouterLink;
      return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, bvAttrs), href ? {
        href: href
      } : {}), isRouterLink && routerTag !== 'a' && routerTag !== 'area' ? {} : {
        rel: rel,
        target: target
      }), {}, {
        tabindex: disabled ? '-1' : Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_4__[/* isUndefined */ "k"])(bvAttrs.tabindex) ? null : bvAttrs.tabindex,
        'aria-disabled': disabled ? 'true' : null
      });
    },
    computedListeners: function computedListeners() {
      return _objectSpread(_objectSpread({}, this.bvListeners), {}, {
        // We want to overwrite any click handler since our callback
        // will invoke the user supplied handler(s) if `!this.disabled`
        click: this.onClick
      });
    }
  },
  methods: {
    onClick: function onClick(evt) {
      var _arguments = arguments;
      var evtIsEvent = Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_4__[/* isEvent */ "c"])(evt);
      var isRouterLink = this.isRouterLink;
      var suppliedHandler = this.bvListeners.click;

      if (evtIsEvent && this.disabled) {
        // Stop event from bubbling up
        evt.stopPropagation(); // Kill the event loop attached to this specific `EventTarget`
        // Needed to prevent `vue-router` for doing its thing

        evt.stopImmediatePropagation();
      } else {
        /* istanbul ignore next: difficult to test, but we know it works */
        if (isRouterLink && evt.currentTarget.__vue__) {
          // Router links do not emit instance `click` events, so we
          // add in an `$emit('click', evt)` on its Vue instance
          evt.currentTarget.__vue__.$emit('click', evt);
        } // Call the suppliedHandler(s), if any provided


        Object(_utils_array__WEBPACK_IMPORTED_MODULE_1__[/* concat */ "b"])(suppliedHandler).filter(function (h) {
          return Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_4__[/* isFunction */ "e"])(h);
        }).forEach(function (handler) {
          handler.apply(void 0, _toConsumableArray(_arguments));
        }); // Emit the global `$root` click event

        this.$root.$emit('clicked::link', evt);
      } // Stop scroll-to-top behavior or navigation on
      // regular links when href is just '#'


      if (evtIsEvent && (this.disabled || !isRouterLink && this.computedHref === '#')) {
        evt.preventDefault();
      }
    },
    focus: function focus() {
      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__[/* attemptFocus */ "d"])(this.$el);
    },
    blur: function blur() {
      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_3__[/* attemptBlur */ "c"])(this.$el);
    }
  },
  render: function render(h) {
    var active = this.active,
        disabled = this.disabled;
    return h(this.computedTag, _defineProperty({
      class: {
        active: active,
        disabled: disabled
      },
      attrs: this.computedAttrs,
      props: this.computedProps
    }, this.isRouterLink ? 'nativeOn' : 'on', this.computedListeners), this.normalizeSlot('default'));
  }
});

/***/ }),

/***/ "b42e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return a; });
var e=function(){return(e=Object.assign||function(e){for(var t,r=1,s=arguments.length;r<s;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},t={kebab:/-(\w)/g,styleProp:/:(.*)/,styleList:/;(?![^(]*\))/g};function r(e,t){return t?t.toUpperCase():""}function s(e){for(var s,a={},c=0,o=e.split(t.styleList);c<o.length;c++){var n=o[c].split(t.styleProp),i=n[0],l=n[1];(i=i.trim())&&("string"==typeof l&&(l=l.trim()),a[(s=i,s.replace(t.kebab,r))]=l)}return a}function a(){for(var t,r,a={},c=arguments.length;c--;)for(var o=0,n=Object.keys(arguments[c]);o<n.length;o++)switch(t=n[o]){case"class":case"style":case"directives":if(Array.isArray(a[t])||(a[t]=[]),"style"===t){var i=void 0;i=Array.isArray(arguments[c].style)?arguments[c].style:[arguments[c].style];for(var l=0;l<i.length;l++){var y=i[l];"string"==typeof y&&(i[l]=s(y))}arguments[c].style=i}a[t]=a[t].concat(arguments[c][t]);break;case"staticClass":if(!arguments[c][t])break;void 0===a[t]&&(a[t]=""),a[t]&&(a[t]+=" "),a[t]+=arguments[c][t].trim();break;case"on":case"nativeOn":a[t]||(a[t]={});for(var p=0,f=Object.keys(arguments[c][t]||{});p<f.length;p++)r=f[p],a[t][r]?a[t][r]=[].concat(a[t][r],arguments[c][t][r]):a[t][r]=arguments[c][t][r];break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":a[t]||(a[t]={}),a[t]=e({},arguments[c][t],a[t]);break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:a[t]||(a[t]=arguments[c][t])}return a}
//# sourceMappingURL=lib.esm.js.map


/***/ }),

/***/ "b508":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d82f");


var memoize = function memoize(fn) {
  var cache = Object(_object__WEBPACK_IMPORTED_MODULE_0__[/* create */ "c"])(null);
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var argsKey = JSON.stringify(args);
    return cache[argsKey] = cache[argsKey] || fn.apply(null, args);
  };
};

/* harmony default export */ __webpack_exports__["a"] = (memoize);

/***/ }),

/***/ "bc9a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8c4e");

/* harmony default export */ __webpack_exports__["a"] = (Object(_utils_cache__WEBPACK_IMPORTED_MODULE_0__[/* makePropCacheMixin */ "a"])('$listeners', 'bvListeners'));

/***/ }),

/***/ "c9a9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export cloneDeep */
/* harmony import */ var _inspect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2326");
/* harmony import */ var _inspect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("d82f");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var cloneDeep = function cloneDeep(obj) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : obj;

  if (Object(_inspect__WEBPACK_IMPORTED_MODULE_0__[/* isArray */ "d"])(obj)) {
    return obj.reduce(function (result, val) {
      return [].concat(_toConsumableArray(result), [cloneDeep(val, val)]);
    }, []);
  }

  if (Object(_inspect__WEBPACK_IMPORTED_MODULE_1__[/* isPlainObject */ "k"])(obj)) {
    return Object(_inspect__WEBPACK_IMPORTED_MODULE_1__[/* keys */ "l"])(obj).reduce(function (result, key) {
      return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, key, cloneDeep(obj[key], obj[key])));
    }, {});
  }

  return defaultValue;
};
/* harmony default export */ __webpack_exports__["a"] = (cloneDeep);

/***/ }),

/***/ "cf75":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return prefixPropName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return unprefixPropName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return suffixPropName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return copyProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return pluckProps; });
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6c06");
/* harmony import */ var _inspect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2326");
/* harmony import */ var _inspect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("d82f");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("fa73");



 // Prefix a property

var prefixPropName = function prefixPropName(prefix, value) {
  return prefix + Object(_string__WEBPACK_IMPORTED_MODULE_3__[/* upperFirst */ "i"])(value);
}; // Remove a prefix from a property

var unprefixPropName = function unprefixPropName(prefix, value) {
  return Object(_string__WEBPACK_IMPORTED_MODULE_3__[/* lowerFirst */ "d"])(value.replace(prefix, ''));
}; // Suffix can be a falsey value so nothing is appended to string
// (helps when looping over props & some shouldn't change)
// Use data last parameters to allow for currying

var suffixPropName = function suffixPropName(suffix, str) {
  return str + (suffix ? Object(_string__WEBPACK_IMPORTED_MODULE_3__[/* upperFirst */ "i"])(suffix) : '');
}; // Copies props from one array/object to a new array/object
// Prop values are also cloned as new references to prevent possible
// mutation of original prop object values
// Optionally accepts a function to transform the prop name

var copyProps = function copyProps(props) {
  var transformFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _identity__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"];

  if (Object(_inspect__WEBPACK_IMPORTED_MODULE_1__[/* isArray */ "d"])(props)) {
    return props.map(transformFn);
  }

  var copied = {};

  for (var prop in props) {
    /* istanbul ignore else */
    if (Object(_inspect__WEBPACK_IMPORTED_MODULE_2__[/* hasOwnProperty */ "i"])(props, prop)) {
      // If the prop value is an object, do a shallow clone
      // to prevent potential mutations to the original object
      copied[transformFn(prop)] = Object(_inspect__WEBPACK_IMPORTED_MODULE_2__[/* isObject */ "j"])(props[prop]) ? Object(_inspect__WEBPACK_IMPORTED_MODULE_2__[/* clone */ "b"])(props[prop]) : props[prop];
    }
  }

  return copied;
}; // Given an array of properties or an object of property keys,
// plucks all the values off the target object, returning a new object
// that has props that reference the original prop values

var pluckProps = function pluckProps(keysToPluck, objToPluck) {
  var transformFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _identity__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"];
  return (Object(_inspect__WEBPACK_IMPORTED_MODULE_1__[/* isArray */ "d"])(keysToPluck) ? keysToPluck.slice() : Object(_inspect__WEBPACK_IMPORTED_MODULE_2__[/* keys */ "l"])(keysToPluck)).reduce(function (memo, prop) {
    memo[transformFn(prop)] = objToPluck[prop];
    return memo;
  }, {});
};

/***/ }),

/***/ "d82f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return defineProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return defineProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return freeze; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getOwnPropertyNames; });
/* unused harmony export getOwnPropertyDescriptor */
/* unused harmony export getOwnPropertySymbols */
/* unused harmony export getPrototypeOf */
/* unused harmony export is */
/* unused harmony export isFrozen */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return hasOwnProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return toString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return isPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return pick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return omit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return readonlyDescriptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deepFreeze; });
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2326");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

 // --- Static ---

var assign = function assign() {
  return Object.assign.apply(Object, arguments);
};
var create = function create(proto, optionalProps) {
  return Object.create(proto, optionalProps);
};
var defineProperties = function defineProperties(obj, props) {
  return Object.defineProperties(obj, props);
};
var defineProperty = function defineProperty(obj, prop, descriptor) {
  return Object.defineProperty(obj, prop, descriptor);
};
var freeze = function freeze(obj) {
  return Object.freeze(obj);
};
var getOwnPropertyNames = function getOwnPropertyNames(obj) {
  return Object.getOwnPropertyNames(obj);
};
var getOwnPropertyDescriptor = function getOwnPropertyDescriptor(obj, prop) {
  return Object.getOwnPropertyDescriptor(obj, prop);
};
var getOwnPropertySymbols = function getOwnPropertySymbols(obj) {
  return Object.getOwnPropertySymbols(obj);
};
var getPrototypeOf = function getPrototypeOf(obj) {
  return Object.getPrototypeOf(obj);
};
var is = function is(value1, value2) {
  return Object.is(value1, value2);
};
var isFrozen = function isFrozen(obj) {
  return Object.isFrozen(obj);
};
var keys = function keys(obj) {
  return Object.keys(obj);
}; // --- "Instance" ---

var hasOwnProperty = function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
};
var toString = function toString(obj) {
  return Object.prototype.toString.call(obj);
}; // --- Utilities ---

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 * Note object could be a complex type like array, date, etc.
 */

var isObject = function isObject(obj) {
  return obj !== null && _typeof(obj) === 'object';
};
/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */

var isPlainObject = function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
};
/**
 * Shallow copy an object. If the passed in object
 * is null or undefined, returns an empty object
 */

var clone = function clone(obj) {
  return _objectSpread({}, obj);
};
/**
 * Return a shallow copy of object with the specified properties only
 * @link https://gist.github.com/bisubus/2da8af7e801ffd813fab7ac221aa7afc
 */

var pick = function pick(obj, props) {
  return keys(obj).filter(function (key) {
    return props.indexOf(key) !== -1;
  }).reduce(function (result, key) {
    return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, key, obj[key]));
  }, {});
};
/**
 * Return a shallow copy of object with the specified properties omitted
 * @link https://gist.github.com/bisubus/2da8af7e801ffd813fab7ac221aa7afc
 */

var omit = function omit(obj, props) {
  return keys(obj).filter(function (key) {
    return props.indexOf(key) === -1;
  }).reduce(function (result, key) {
    return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, key, obj[key]));
  }, {});
};
/**
 * Convenience method to create a read-only descriptor
 */

var readonlyDescriptor = function readonlyDescriptor() {
  return {
    enumerable: true,
    configurable: false,
    writable: false
  };
};
/**
 * Deep-freezes and object, making it immutable / read-only.
 * Returns the same object passed-in, but frozen.
 * Freezes inner object/array/values first.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
 * Note: this method will not work for property values using Symbol() as a key
 */

var deepFreeze = function deepFreeze(obj) {
  // Retrieve the property names defined on object/array
  // Note: `keys` will ignore properties that are keyed by a `Symbol()`
  var props = keys(obj); // Iterate over each prop and recursively freeze it

  props.forEach(function (prop) {
    var value = obj[prop]; // If value is a plain object or array, we deepFreeze it

    obj[prop] = value && (isPlainObject(value) || Object(_array__WEBPACK_IMPORTED_MODULE_0__[/* isArray */ "d"])(value)) ? deepFreeze(value) : value;
  });
  return freeze(obj);
};

/***/ }),

/***/ "dcb3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2b0e");
//
// Single point of contact for Vue
//
// TODO:
//   Conditionally import Vue if no global Vue
//

/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "df7c":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))

/***/ }),

/***/ "fa73":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return kebabCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return pascalCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return lowerFirst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return upperFirst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return escapeRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return toString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return trimLeft; });
/* unused harmony export trimRight */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return trim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return lowerCase; });
/* unused harmony export upperCase */
/* harmony import */ var _inspect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7b1e");
/* harmony import */ var _inspect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2326");
/* harmony import */ var _inspect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("d82f");
// String utilities
 // --- Constants ---

var RX_TRIM_LEFT = /^\s+/;
var RX_TRIM_RIGHT = /\s+$/;
var RX_REGEXP_REPLACE = /[-/\\^$*+?.()|[\]{}]/g;
var RX_UN_KEBAB = /-(\w)/g;
var RX_HYPHENATE = /\B([A-Z])/g; // --- Utilities ---
// Converts PascalCase or camelCase to kebab-case

var kebabCase = function kebabCase(str) {
  return str.replace(RX_HYPHENATE, '-$1').toLowerCase();
}; // Converts a kebab-case or camelCase string to PascalCase

var pascalCase = function pascalCase(str) {
  str = kebabCase(str).replace(RX_UN_KEBAB, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
  return str.charAt(0).toUpperCase() + str.slice(1);
}; // Lowercases the first letter of a string and returns a new string

var lowerFirst = function lowerFirst(str) {
  str = Object(_inspect__WEBPACK_IMPORTED_MODULE_0__[/* isString */ "j"])(str) ? str.trim() : String(str);
  return str.charAt(0).toLowerCase() + str.slice(1);
}; // Uppercases the first letter of a string and returns a new string

var upperFirst = function upperFirst(str) {
  str = Object(_inspect__WEBPACK_IMPORTED_MODULE_0__[/* isString */ "j"])(str) ? str.trim() : String(str);
  return str.charAt(0).toUpperCase() + str.slice(1);
}; // Escape characters to be used in building a regular expression

var escapeRegExp = function escapeRegExp(str) {
  return str.replace(RX_REGEXP_REPLACE, '\\$&');
}; // Convert a value to a string that can be rendered
// `undefined`/`null` will be converted to `''`
// Plain objects and arrays will be JSON stringified

var toString = function toString(val) {
  var spaces = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return Object(_inspect__WEBPACK_IMPORTED_MODULE_0__[/* isUndefinedOrNull */ "l"])(val) ? '' : Object(_inspect__WEBPACK_IMPORTED_MODULE_1__[/* isArray */ "d"])(val) || Object(_inspect__WEBPACK_IMPORTED_MODULE_2__[/* isPlainObject */ "k"])(val) && val.toString === Object.prototype.toString ? JSON.stringify(val, null, spaces) : String(val);
}; // Remove leading white space from a string

var trimLeft = function trimLeft(str) {
  return toString(str).replace(RX_TRIM_LEFT, '');
}; // Remove Trailing white space from a string

var trimRight = function trimRight(str) {
  return toString(str).replace(RX_TRIM_RIGHT, '');
}; // Remove leading and trailing white space from a string

var trim = function trim(str) {
  return toString(str).trim();
}; // Lower case a string

var lowerCase = function lowerCase(str) {
  return toString(str).toLowerCase();
}; // Upper case a string

var upperCase = function upperCase(str) {
  return toString(str).toUpperCase();
};

/***/ })

}]);
//# sourceMappingURL=shighl.1.js.map