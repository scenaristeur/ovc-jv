(window["shighl_jsonp"] = window["shighl_jsonp"] || []).push([[5],{

/***/ "11de":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export props */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BForm; });
/* harmony import */ var _utils_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dcb3");
/* harmony import */ var vue_functional_data_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("b42e");


var props = {
  id: {
    type: String // default: null

  },
  inline: {
    type: Boolean,
    default: false
  },
  novalidate: {
    type: Boolean,
    default: false
  },
  validated: {
    type: Boolean,
    default: false
  }
}; // @vue/component

var BForm = /*#__PURE__*/_utils_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].extend({
  name: 'BForm',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h('form', Object(vue_functional_data_merge__WEBPACK_IMPORTED_MODULE_1__[/* mergeData */ "a"])(data, {
      class: {
        'form-inline': props.inline,
        'was-validated': props.validated
      },
      attrs: {
        id: props.id,
        novalidate: props.novalidate
      }
    }), children);
  }
});

/***/ }),

/***/ "3010":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export props */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BFormInvalidFeedback; });
/* harmony import */ var _utils_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dcb3");
/* harmony import */ var vue_functional_data_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("b42e");


var props = {
  id: {
    type: String // default: null

  },
  tag: {
    type: String,
    default: 'div'
  },
  tooltip: {
    type: Boolean,
    default: false
  },
  forceShow: {
    type: Boolean,
    default: false
  },
  state: {
    // Tri-stste prop: `true`, `false`, or `null`
    type: Boolean,
    default: null
  },
  ariaLive: {
    type: String // default: null

  },
  role: {
    type: String // default: null

  }
}; // @vue/component

var BFormInvalidFeedback = /*#__PURE__*/_utils_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].extend({
  name: 'BFormInvalidFeedback',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var show = props.forceShow === true || props.state === false;
    return h(props.tag, Object(vue_functional_data_merge__WEBPACK_IMPORTED_MODULE_1__[/* mergeData */ "a"])(data, {
      class: {
        'invalid-feedback': !props.tooltip,
        'invalid-tooltip': props.tooltip,
        'd-block': show
      },
      attrs: {
        id: props.id || null,
        role: props.role || null,
        'aria-live': props.ariaLive || null,
        'aria-atomic': props.ariaLive ? 'true' : null
      }
    }), children);
  }
});

/***/ }),

/***/ "4797":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ BFormInput; });

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/utils/vue.js
var vue = __webpack_require__("dcb3");

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/utils/array.js
var array = __webpack_require__("2326");

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/utils/dom.js
var dom = __webpack_require__("906c");

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/utils/env.js
var env = __webpack_require__("938d");

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/utils/object.js
var object = __webpack_require__("d82f");

// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/utils/events.js

 // --- Constants ---

var EVENT_OPTIONS_PASSIVE = {
  passive: true
};
var EVENT_OPTIONS_NO_CAPTURE = {
  passive: true,
  capture: false
}; // --- Utils ---
// Normalize event options based on support of passive option
// Exported only for testing purposes

var events_parseEventOptions = function parseEventOptions(options) {
  /* istanbul ignore else: can't test in JSDOM, as it supports passive */
  if (env["d" /* hasPassiveEventSupport */]) {
    return Object(object["i" /* isObject */])(options) ? options : {
      capture: !!options || false
    };
  } else {
    // Need to translate to actual Boolean value
    return !!(Object(object["i" /* isObject */])(options) ? options.capture : options);
  }
}; // Attach an event listener to an element

var eventOn = function eventOn(el, evtName, handler, options) {
  if (el && el.addEventListener) {
    el.addEventListener(evtName, handler, events_parseEventOptions(options));
  }
}; // Remove an event listener from an element

var eventOff = function eventOff(el, evtName, handler, options) {
  if (el && el.removeEventListener) {
    el.removeEventListener(evtName, handler, events_parseEventOptions(options));
  }
}; // Utility method to add/remove a event listener based on first argument (boolean)
// It passes all other arguments to the `eventOn()` or `eventOff` method

var eventOnOff = function eventOnOff(on) {
  var method = on ? eventOn : eventOff;

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  method.apply(void 0, args);
};
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/mixins/form.js

var SELECTOR = 'input, textarea, select'; // @vue/component

/* harmony default export */ var mixins_form = ({
  props: {
    name: {
      type: String // default: undefined

    },
    id: {
      type: String // default: undefined

    },
    disabled: {
      type: Boolean
    },
    required: {
      type: Boolean,
      default: false
    },
    form: {
      type: String // default: null

    },
    autofocus: {
      type: Boolean,
      default: false
    }
  },
  mounted: function mounted() {
    this.handleAutofocus();
  },

  /* istanbul ignore next */
  activated: function activated() {
    this.handleAutofocus();
  },
  methods: {
    handleAutofocus: function handleAutofocus() {
      var _this = this;

      this.$nextTick(function () {
        Object(dom["l" /* requestAF */])(function () {
          var el = _this.$el;

          if (_this.autofocus && Object(dom["h" /* isVisible */])(el)) {
            if (!Object(dom["i" /* matches */])(el, SELECTOR)) {
              el = Object(dom["m" /* select */])(SELECTOR, el);
            }

            Object(dom["d" /* attemptFocus */])(el);
          }
        });
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/mixins/form-selection.js
// @vue/component
/* harmony default export */ var form_selection = ({
  computed: {
    selectionStart: {
      // Expose selectionStart for formatters, etc
      cache: false,

      /* istanbul ignore next */
      get: function get() {
        return this.$refs.input.selectionStart;
      },

      /* istanbul ignore next */
      set: function set(val) {
        this.$refs.input.selectionStart = val;
      }
    },
    selectionEnd: {
      // Expose selectionEnd for formatters, etc
      cache: false,

      /* istanbul ignore next */
      get: function get() {
        return this.$refs.input.selectionEnd;
      },

      /* istanbul ignore next */
      set: function set(val) {
        this.$refs.input.selectionEnd = val;
      }
    },
    selectionDirection: {
      // Expose selectionDirection for formatters, etc
      cache: false,

      /* istanbul ignore next */
      get: function get() {
        return this.$refs.input.selectionDirection;
      },

      /* istanbul ignore next */
      set: function set(val) {
        this.$refs.input.selectionDirection = val;
      }
    }
  },
  methods: {
    /* istanbul ignore next */
    select: function select() {
      var _this$$refs$input;

      // For external handler that may want a select() method
      (_this$$refs$input = this.$refs.input).select.apply(_this$$refs$input, arguments);
    },

    /* istanbul ignore next */
    setSelectionRange: function setSelectionRange() {
      var _this$$refs$input2;

      // For external handler that may want a setSelectionRange(a,b,c) method
      (_this$$refs$input2 = this.$refs.input).setSelectionRange.apply(_this$$refs$input2, arguments);
    },

    /* istanbul ignore next */
    setRangeText: function setRangeText() {
      var _this$$refs$input3;

      // For external handler that may want a setRangeText(a,b,c) method
      (_this$$refs$input3 = this.$refs.input).setRangeText.apply(_this$$refs$input3, arguments);
    }
  }
});
// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/utils/config.js + 3 modules
var config = __webpack_require__("228e");

// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/mixins/form-size.js
 // @vue/component

/* harmony default export */ var form_size = ({
  props: {
    size: {
      type: String,
      default: function _default() {
        return Object(config["c" /* getComponentConfig */])('formControls', 'size');
      }
    }
  },
  computed: {
    sizeFormClass: function sizeFormClass() {
      return [this.size ? "form-control-".concat(this.size) : null];
    },

    /* istanbul ignore next: don't think this is used */
    sizeBtnClass: function sizeBtnClass() {
      return [this.size ? "btn-".concat(this.size) : null];
    }
  }
});
// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/mixins/form-state.js
var form_state = __webpack_require__("d520");

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/utils/inspect.js + 1 modules
var inspect = __webpack_require__("7b1e");

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/utils/math.js
var math = __webpack_require__("a8c8");

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/utils/number.js
var number = __webpack_require__("3a58");

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/utils/string.js
var string = __webpack_require__("fa73");

// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/mixins/form-text.js




 // @vue/component

/* harmony default export */ var form_text = ({
  model: {
    prop: 'value',
    event: 'update'
  },
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    ariaInvalid: {
      type: [Boolean, String],
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    plaintext: {
      type: Boolean,
      default: false
    },
    autocomplete: {
      type: String // default: null

    },
    placeholder: {
      type: String // default: null

    },
    formatter: {
      type: Function // default: null

    },
    lazyFormatter: {
      type: Boolean,
      default: false
    },
    trim: {
      type: Boolean,
      default: false
    },
    number: {
      type: Boolean,
      default: false
    },
    lazy: {
      // Only update the `v-model` on blur/change events
      type: Boolean,
      default: false
    },
    debounce: {
      // Debounce timeout (in ms). Not applicable with `lazy` prop
      type: [Number, String],
      default: 0
    }
  },
  data: function data() {
    return {
      localValue: Object(string["c" /* toString */])(this.value),
      vModelValue: this.value
    };
  },
  computed: {
    computedClass: function computedClass() {
      return [{
        // Range input needs class `custom-range`
        'custom-range': this.type === 'range',
        // `plaintext` not supported by `type="range"` or `type="color"`
        'form-control-plaintext': this.plaintext && this.type !== 'range' && this.type !== 'color',
        // `form-control` not used by `type="range"` or `plaintext`
        // Always used by `type="color"`
        'form-control': !this.plaintext && this.type !== 'range' || this.type === 'color'
      }, this.sizeFormClass, this.stateClass];
    },
    computedAriaInvalid: function computedAriaInvalid() {
      if (!this.ariaInvalid || this.ariaInvalid === 'false') {
        // `this.ariaInvalid` is `null` or `false` or 'false'
        return this.computedState === false ? 'true' : null;
      }

      if (this.ariaInvalid === true) {
        // User wants explicit `:aria-invalid="true"`
        return 'true';
      } // Most likely a string value (which could be the string 'true')


      return this.ariaInvalid;
    },
    computedDebounce: function computedDebounce() {
      // Ensure we have a positive number equal to or greater than 0
      return Object(math["a" /* mathMax */])(Object(number["b" /* toInteger */])(this.debounce, 0), 0);
    },
    hasFormatter: function hasFormatter() {
      return Object(inspect["d" /* isFunction */])(this.formatter);
    }
  },
  watch: {
    value: function value(newVal) {
      var stringifyValue = Object(string["c" /* toString */])(newVal);

      if (stringifyValue !== this.localValue && newVal !== this.vModelValue) {
        // Clear any pending debounce timeout, as we are overwriting the user input
        this.clearDebounce(); // Update the local values

        this.localValue = stringifyValue;
        this.vModelValue = newVal;
      }
    }
  },
  created: function created() {
    // Create private non-reactive props
    this.$_inputDebounceTimer = null;
  },
  mounted: function mounted() {
    // Set up destroy handler
    this.$on('hook:beforeDestroy', this.clearDebounce); // Preset the internal state

    var value = this.value;
    var stringifyValue = Object(string["c" /* toString */])(value);
    /* istanbul ignore next */

    if (stringifyValue !== this.localValue && value !== this.vModelValue) {
      this.localValue = stringifyValue;
      this.vModelValue = value;
    }
  },
  methods: {
    clearDebounce: function clearDebounce() {
      clearTimeout(this.$_inputDebounceTimer);
      this.$_inputDebounceTimer = null;
    },
    formatValue: function formatValue(value, evt) {
      var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      value = Object(string["c" /* toString */])(value);

      if (this.hasFormatter && (!this.lazyFormatter || force)) {
        value = this.formatter(value, evt);
      }

      return value;
    },
    modifyValue: function modifyValue(value) {
      // Emulate `.trim` modifier behaviour
      if (this.trim) {
        value = value.trim();
      } // Emulate `.number` modifier behaviour


      if (this.number) {
        value = Object(number["a" /* toFloat */])(value, value);
      }

      return value;
    },
    updateValue: function updateValue(value) {
      var _this = this;

      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var lazy = this.lazy;

      if (lazy && !force) {
        return;
      }

      value = this.modifyValue(value);

      if (value !== this.vModelValue) {
        this.clearDebounce();

        var doUpdate = function doUpdate() {
          _this.vModelValue = value;

          _this.$emit('update', value);
        };

        var debounce = this.computedDebounce; // Only debounce the value update when a value greater than `0`
        // is set and we are not in lazy mode or this is a forced update

        if (debounce > 0 && !lazy && !force) {
          this.$_inputDebounceTimer = setTimeout(doUpdate, debounce);
        } else {
          // Immediately update the v-model
          doUpdate();
        }
      } else if (this.hasFormatter) {
        // When the `vModelValue` hasn't changed but the actual input value
        // is out of sync, make sure to change it to the given one
        // Usually caused by browser autocomplete and how it triggers the
        // change or input event, or depending on the formatter function
        // https://github.com/bootstrap-vue/bootstrap-vue/issues/2657
        // https://github.com/bootstrap-vue/bootstrap-vue/issues/3498

        /* istanbul ignore next: hard to test */
        var $input = this.$refs.input;
        /* istanbul ignore if: hard to test out of sync value */

        if ($input && value !== $input.value) {
          $input.value = value;
        }
      }
    },
    onInput: function onInput(evt) {
      // `evt.target.composing` is set by Vue
      // https://github.com/vuejs/vue/blob/dev/src/platforms/web/runtime/directives/model.js
      // TODO: Is this needed now with the latest Vue?

      /* istanbul ignore if: hard to test composition events */
      if (evt.target.composing) {
        return;
      }

      var value = evt.target.value;
      var formattedValue = this.formatValue(value, evt); // Exit when the `formatter` function strictly returned `false`
      // or prevented the input event

      /* istanbul ignore next */

      if (formattedValue === false || evt.defaultPrevented) {
        evt.preventDefault();
        return;
      }

      this.localValue = formattedValue;
      this.updateValue(formattedValue);
      this.$emit('input', formattedValue);
    },
    onChange: function onChange(evt) {
      var value = evt.target.value;
      var formattedValue = this.formatValue(value, evt); // Exit when the `formatter` function strictly returned `false`
      // or prevented the input event

      /* istanbul ignore next */

      if (formattedValue === false || evt.defaultPrevented) {
        evt.preventDefault();
        return;
      }

      this.localValue = formattedValue;
      this.updateValue(formattedValue, true);
      this.$emit('change', formattedValue);
    },
    onBlur: function onBlur(evt) {
      // Apply the `localValue` on blur to prevent cursor jumps
      // on mobile browsers (e.g. caused by autocomplete)
      var value = evt.target.value;
      var formattedValue = this.formatValue(value, evt, true);

      if (formattedValue !== false) {
        // We need to use the modified value here to apply the
        // `.trim` and `.number` modifiers properly
        this.localValue = Object(string["c" /* toString */])(this.modifyValue(formattedValue)); // We pass the formatted value here since the `updateValue` method
        // handles the modifiers itself

        this.updateValue(formattedValue, true);
      } // Emit native blur event


      this.$emit('blur', evt);
    },
    focus: function focus() {
      // For external handler that may want a focus method
      if (!this.disabled) {
        Object(dom["d" /* attemptFocus */])(this.$el);
      }
    },
    blur: function blur() {
      // For external handler that may want a blur method
      if (!this.disabled) {
        Object(dom["c" /* attemptBlur */])(this.$el);
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/mixins/form-validity.js
// @vue/component
/* harmony default export */ var form_validity = ({
  computed: {
    validity: {
      // Expose validity property
      cache: false,

      /* istanbul ignore next */
      get: function get() {
        return this.$refs.input.validity;
      }
    },
    validationMessage: {
      // Expose validationMessage property
      cache: false,

      /* istanbul ignore next */
      get: function get() {
        return this.$refs.input.validationMessage;
      }
    },
    willValidate: {
      // Expose willValidate property
      cache: false,

      /* istanbul ignore next */
      get: function get() {
        return this.$refs.input.willValidate;
      }
    }
  },
  methods: {
    /* istanbul ignore next */
    setCustomValidity: function setCustomValidity() {
      var _this$$refs$input;

      // For external handler that may want a setCustomValidity(...) method
      return (_this$$refs$input = this.$refs.input).setCustomValidity.apply(_this$$refs$input, arguments);
    },

    /* istanbul ignore next */
    checkValidity: function checkValidity() {
      var _this$$refs$input2;

      // For external handler that may want a checkValidity(...) method
      return (_this$$refs$input2 = this.$refs.input).checkValidity.apply(_this$$refs$input2, arguments);
    },

    /* istanbul ignore next */
    reportValidity: function reportValidity() {
      var _this$$refs$input3;

      // For external handler that may want a reportValidity(...) method
      return (_this$$refs$input3 = this.$refs.input).reportValidity.apply(_this$$refs$input3, arguments);
    }
  }
});
// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/mixins/id.js
var id = __webpack_require__("90ef");

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/mixins/listeners.js
var listeners = __webpack_require__("bc9a");

// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/components/form-input/form-input.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












 // Valid supported input types

var TYPES = ['text', 'password', 'email', 'number', 'url', 'tel', 'search', 'range', 'color', 'date', 'time', 'datetime', 'datetime-local', 'month', 'week']; // @vue/component

var BFormInput = /*#__PURE__*/vue["a" /* default */].extend({
  name: 'BFormInput',
  // Mixin order is important!
  mixins: [listeners["a" /* default */], id["a" /* default */], mixins_form, form_size, form_state["a" /* default */], form_text, form_selection, form_validity],
  props: {
    // `value` prop is defined in form-text mixin
    type: {
      type: String,
      default: 'text',
      validator: function validator(type) {
        return Object(array["a" /* arrayIncludes */])(TYPES, type);
      }
    },
    noWheel: {
      // Disable mousewheel to prevent wheel from
      // changing values (i.e. number/date)
      type: Boolean,
      default: false
    },
    min: {
      type: [String, Number] // default: null

    },
    max: {
      type: [String, Number] // default: null

    },
    step: {
      type: [String, Number] // default: null

    },
    list: {
      type: String // default: null

    }
  },
  computed: {
    localType: function localType() {
      // We only allow certain types
      return Object(array["a" /* arrayIncludes */])(TYPES, this.type) ? this.type : 'text';
    },
    computedAttrs: function computedAttrs() {
      var type = this.localType,
          disabled = this.disabled,
          placeholder = this.placeholder,
          required = this.required,
          min = this.min,
          max = this.max,
          step = this.step;
      return {
        id: this.safeId(),
        name: this.name || null,
        form: this.form || null,
        type: type,
        disabled: disabled,
        placeholder: placeholder,
        required: required,
        autocomplete: this.autocomplete || null,
        readonly: this.readonly || this.plaintext,
        min: min,
        max: max,
        step: step,
        list: type !== 'password' ? this.list : null,
        'aria-required': required ? 'true' : null,
        'aria-invalid': this.computedAriaInvalid
      };
    },
    computedListeners: function computedListeners() {
      return _objectSpread(_objectSpread({}, this.bvListeners), {}, {
        input: this.onInput,
        change: this.onChange,
        blur: this.onBlur
      });
    }
  },
  watch: {
    noWheel: function noWheel(newVal) {
      this.setWheelStopper(newVal);
    }
  },
  mounted: function mounted() {
    this.setWheelStopper(this.noWheel);
  },

  /* istanbul ignore next */
  deactivated: function deactivated() {
    // Turn off listeners when keep-alive component deactivated

    /* istanbul ignore next */
    this.setWheelStopper(false);
  },

  /* istanbul ignore next */
  activated: function activated() {
    // Turn on listeners (if no-wheel) when keep-alive component activated

    /* istanbul ignore next */
    this.setWheelStopper(this.noWheel);
  },
  beforeDestroy: function beforeDestroy() {
    /* istanbul ignore next */
    this.setWheelStopper(false);
  },
  methods: {
    setWheelStopper: function setWheelStopper(on) {
      var input = this.$el; // We use native events, so that we don't interfere with propagation

      eventOnOff(on, input, 'focus', this.onWheelFocus);
      eventOnOff(on, input, 'blur', this.onWheelBlur);

      if (!on) {
        eventOff(document, 'wheel', this.stopWheel);
      }
    },
    onWheelFocus: function onWheelFocus() {
      eventOn(document, 'wheel', this.stopWheel);
    },
    onWheelBlur: function onWheelBlur() {
      eventOff(document, 'wheel', this.stopWheel);
    },
    stopWheel: function stopWheel(evt) {
      evt.preventDefault();
      Object(dom["c" /* attemptBlur */])(this.$el);
    }
  },
  render: function render(h) {
    return h('input', {
      ref: 'input',
      class: this.computedClass,
      attrs: this.computedAttrs,
      domProps: {
        value: this.localValue
      },
      on: this.computedListeners
    });
  }
});

/***/ }),

/***/ "4c93":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export alpha */
/* unused harmony export alpha_dash */
/* unused harmony export alpha_num */
/* unused harmony export alpha_spaces */
/* unused harmony export between */
/* unused harmony export confirmed */
/* unused harmony export digits */
/* unused harmony export dimensions */
/* unused harmony export email */
/* unused harmony export excluded */
/* unused harmony export ext */
/* unused harmony export image */
/* unused harmony export integer */
/* unused harmony export is */
/* unused harmony export is_not */
/* unused harmony export length */
/* unused harmony export max */
/* unused harmony export max_value */
/* unused harmony export mimes */
/* unused harmony export min */
/* unused harmony export min_value */
/* unused harmony export numeric */
/* unused harmony export oneOf */
/* unused harmony export regex */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return required; });
/* unused harmony export required_if */
/* unused harmony export size */
/**
  * vee-validate v3.3.7
  * (c) 2020 Abdelrahman Awad
  * @license MIT
  */
/**
 * Some Alpha Regex helpers.
 * https://github.com/chriso/validator.js/blob/master/src/lib/alpha.js
 */
/* eslint-disable no-misleading-character-class */
var alpha = {
    en: /^[A-Z]*$/i,
    cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
    da: /^[A-ZÆØÅ]*$/i,
    de: /^[A-ZÄÖÜß]*$/i,
    es: /^[A-ZÁÉÍÑÓÚÜ]*$/i,
    fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
    fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
    it: /^[A-Z\xC0-\xFF]*$/i,
    lt: /^[A-ZĄČĘĖĮŠŲŪŽ]*$/i,
    nl: /^[A-ZÉËÏÓÖÜ]*$/i,
    hu: /^[A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
    pl: /^[A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
    pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
    ro: /^[A-ZĂÂÎŞŢ]*$/i,
    ru: /^[А-ЯЁ]*$/i,
    sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
    sr: /^[A-ZČĆŽŠĐ]*$/i,
    sv: /^[A-ZÅÄÖ]*$/i,
    tr: /^[A-ZÇĞİıÖŞÜ]*$/i,
    uk: /^[А-ЩЬЮЯЄІЇҐ]*$/i,
    ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,
    az: /^[A-ZÇƏĞİıÖŞÜ]*$/i,
    el: /^[Α-ώ]*$/i
};
var alphaSpaces = {
    en: /^[A-Z\s]*$/i,
    cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ\s]*$/i,
    da: /^[A-ZÆØÅ\s]*$/i,
    de: /^[A-ZÄÖÜß\s]*$/i,
    es: /^[A-ZÁÉÍÑÓÚÜ\s]*$/i,
    fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
    fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ\s]*$/i,
    it: /^[A-Z\xC0-\xFF\s]*$/i,
    lt: /^[A-ZĄČĘĖĮŠŲŪŽ\s]*$/i,
    nl: /^[A-ZÉËÏÓÖÜ\s]*$/i,
    hu: /^[A-ZÁÉÍÓÖŐÚÜŰ\s]*$/i,
    pl: /^[A-ZĄĆĘŚŁŃÓŻŹ\s]*$/i,
    pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ\s]*$/i,
    ro: /^[A-ZĂÂÎŞŢ\s]*$/i,
    ru: /^[А-ЯЁ\s]*$/i,
    sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ\s]*$/i,
    sr: /^[A-ZČĆŽŠĐ\s]*$/i,
    sv: /^[A-ZÅÄÖ\s]*$/i,
    tr: /^[A-ZÇĞİıÖŞÜ\s]*$/i,
    uk: /^[А-ЩЬЮЯЄІЇҐ\s]*$/i,
    ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ\s]*$/,
    az: /^[A-ZÇƏĞİıÖŞÜ\s]*$/i,
    el: /^[Α-ώ\s]*$/i
};
var alphanumeric = {
    en: /^[0-9A-Z]*$/i,
    cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
    da: /^[0-9A-ZÆØÅ]$/i,
    de: /^[0-9A-ZÄÖÜß]*$/i,
    es: /^[0-9A-ZÁÉÍÑÓÚÜ]*$/i,
    fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
    fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
    it: /^[0-9A-Z\xC0-\xFF]*$/i,
    lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ]*$/i,
    hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
    nl: /^[0-9A-ZÉËÏÓÖÜ]*$/i,
    pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
    pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
    ro: /^[0-9A-ZĂÂÎŞŢ]*$/i,
    ru: /^[0-9А-ЯЁ]*$/i,
    sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
    sr: /^[0-9A-ZČĆŽŠĐ]*$/i,
    sv: /^[0-9A-ZÅÄÖ]*$/i,
    tr: /^[0-9A-ZÇĞİıÖŞÜ]*$/i,
    uk: /^[0-9А-ЩЬЮЯЄІЇҐ]*$/i,
    ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,
    az: /^[0-9A-ZÇƏĞİıÖŞÜ]*$/i,
    el: /^[0-9Α-ώ]*$/i
};
var alphaDash = {
    en: /^[0-9A-Z_-]*$/i,
    cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ_-]*$/i,
    da: /^[0-9A-ZÆØÅ_-]*$/i,
    de: /^[0-9A-ZÄÖÜß_-]*$/i,
    es: /^[0-9A-ZÁÉÍÑÓÚÜ_-]*$/i,
    fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
    fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ_-]*$/i,
    it: /^[0-9A-Z\xC0-\xFF_-]*$/i,
    lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ_-]*$/i,
    nl: /^[0-9A-ZÉËÏÓÖÜ_-]*$/i,
    hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ_-]*$/i,
    pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ_-]*$/i,
    pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ_-]*$/i,
    ro: /^[0-9A-ZĂÂÎŞŢ_-]*$/i,
    ru: /^[0-9А-ЯЁ_-]*$/i,
    sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ_-]*$/i,
    sr: /^[0-9A-ZČĆŽŠĐ_-]*$/i,
    sv: /^[0-9A-ZÅÄÖ_-]*$/i,
    tr: /^[0-9A-ZÇĞİıÖŞÜ_-]*$/i,
    uk: /^[0-9А-ЩЬЮЯЄІЇҐ_-]*$/i,
    ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ_-]*$/,
    az: /^[0-9A-ZÇƏĞİıÖŞÜ_-]*$/i,
    el: /^[0-9Α-ώ_-]*$/i
};

var validate = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).locale, locale = _b === void 0 ? '' : _b;
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate(val, { locale: locale }); });
    }
    // Match at least one locale.
    if (!locale) {
        return Object.keys(alpha).some(function (loc) { return alpha[loc].test(value); });
    }
    return (alpha[locale] || alpha.en).test(value);
};
var params = [
    {
        name: 'locale'
    }
];
var alpha$1 = {
    validate: validate,
    params: params
};

var validate$1 = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).locale, locale = _b === void 0 ? '' : _b;
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$1(val, { locale: locale }); });
    }
    // Match at least one locale.
    if (!locale) {
        return Object.keys(alphaDash).some(function (loc) { return alphaDash[loc].test(value); });
    }
    return (alphaDash[locale] || alphaDash.en).test(value);
};
var params$1 = [
    {
        name: 'locale'
    }
];
var alpha_dash = {
    validate: validate$1,
    params: params$1
};

var validate$2 = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).locale, locale = _b === void 0 ? '' : _b;
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$2(val, { locale: locale }); });
    }
    // Match at least one locale.
    if (!locale) {
        return Object.keys(alphanumeric).some(function (loc) { return alphanumeric[loc].test(value); });
    }
    return (alphanumeric[locale] || alphanumeric.en).test(value);
};
var params$2 = [
    {
        name: 'locale'
    }
];
var alpha_num = {
    validate: validate$2,
    params: params$2
};

var validate$3 = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).locale, locale = _b === void 0 ? '' : _b;
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$3(val, { locale: locale }); });
    }
    // Match at least one locale.
    if (!locale) {
        return Object.keys(alphaSpaces).some(function (loc) { return alphaSpaces[loc].test(value); });
    }
    return (alphaSpaces[locale] || alphaSpaces.en).test(value);
};
var params$3 = [
    {
        name: 'locale'
    }
];
var alpha_spaces = {
    validate: validate$3,
    params: params$3
};

var validate$4 = function (value, _a) {
    var _b = _a === void 0 ? {} : _a, min = _b.min, max = _b.max;
    if (Array.isArray(value)) {
        return value.every(function (val) { return !!validate$4(val, { min: min, max: max }); });
    }
    return Number(min) <= value && Number(max) >= value;
};
var params$4 = [
    {
        name: 'min'
    },
    {
        name: 'max'
    }
];
var between = {
    validate: validate$4,
    params: params$4
};

var validate$5 = function (value, _a) {
    var target = _a.target;
    return String(value) === String(target);
};
var params$5 = [
    {
        name: 'target',
        isTarget: true
    }
];
var confirmed = {
    validate: validate$5,
    params: params$5
};

var validate$6 = function (value, _a) {
    var length = _a.length;
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$6(val, { length: length }); });
    }
    var strVal = String(value);
    return /^[0-9]*$/.test(strVal) && strVal.length === length;
};
var params$6 = [
    {
        name: 'length',
        cast: function (value) {
            return Number(value);
        }
    }
];
var digits = {
    validate: validate$6,
    params: params$6
};

var validateImage = function (file, width, height) {
    var URL = window.URL || window.webkitURL;
    return new Promise(function (resolve) {
        var image = new Image();
        image.onerror = function () { return resolve(false); };
        image.onload = function () { return resolve(image.width === width && image.height === height); };
        image.src = URL.createObjectURL(file);
    });
};
var validate$7 = function (files, _a) {
    var width = _a.width, height = _a.height;
    var list = [];
    files = Array.isArray(files) ? files : [files];
    for (var i = 0; i < files.length; i++) {
        // if file is not an image, reject.
        if (!/\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(files[i].name)) {
            return Promise.resolve(false);
        }
        list.push(files[i]);
    }
    return Promise.all(list.map(function (file) { return validateImage(file, width, height); })).then(function (values) {
        return values.every(function (v) { return v; });
    });
};
var params$7 = [
    {
        name: 'width',
        cast: function (value) {
            return Number(value);
        }
    },
    {
        name: 'height',
        cast: function (value) {
            return Number(value);
        }
    }
];
var dimensions = {
    validate: validate$7,
    params: params$7
};

var validate$8 = function (value, _a) {
    var multiple = (_a === void 0 ? {} : _a).multiple;
    // eslint-disable-next-line
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (multiple && !Array.isArray(value)) {
        value = String(value)
            .split(',')
            .map(function (emailStr) { return emailStr.trim(); });
    }
    if (Array.isArray(value)) {
        return value.every(function (val) { return re.test(String(val)); });
    }
    return re.test(String(value));
};
var params$8 = [
    {
        name: 'multiple',
        default: false
    }
];
var email = {
    validate: validate$8,
    params: params$8
};

function isNullOrUndefined(value) {
    return value === null || value === undefined;
}
function isEmptyArray(arr) {
    return Array.isArray(arr) && arr.length === 0;
}
function isCallable(fn) {
    return typeof fn === 'function';
}

function includes(collection, item) {
    return collection.indexOf(item) !== -1;
}
/**
 * Converts an array-like object to array, provides a simple polyfill for Array.from
 */
function toArray(arrayLike) {
    if (isCallable(Array.from)) {
        return Array.from(arrayLike);
    }
    /* istanbul ignore next */
    return _copyArray(arrayLike);
}
/* istanbul ignore next */
function _copyArray(arrayLike) {
    var array = [];
    var length = arrayLike.length;
    for (var i = 0; i < length; i++) {
        array.push(arrayLike[i]);
    }
    return array;
}

var validate$9 = function (value, options) {
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$9(val, options); });
    }
    return toArray(options).some(function (item) {
        // eslint-disable-next-line
        return item == value;
    });
};
var oneOf = {
    validate: validate$9
};

var validate$a = function (value, args) {
    return !validate$9(value, args);
};
var excluded = {
    validate: validate$a
};

var validate$b = function (files, extensions) {
    var regex = new RegExp(".(" + extensions.join('|') + ")$", 'i');
    if (Array.isArray(files)) {
        return files.every(function (file) { return regex.test(file.name); });
    }
    return regex.test(files.name);
};
var ext = {
    validate: validate$b
};

var validate$c = function (files) {
    var regex = /\.(jpg|svg|jpeg|png|bmp|gif|webp)$/i;
    if (Array.isArray(files)) {
        return files.every(function (file) { return regex.test(file.name); });
    }
    return regex.test(files.name);
};
var image = {
    validate: validate$c
};

var validate$d = function (value) {
    if (Array.isArray(value)) {
        return value.every(function (val) { return /^-?[0-9]+$/.test(String(val)); });
    }
    return /^-?[0-9]+$/.test(String(value));
};
var integer = {
    validate: validate$d
};

var validate$e = function (value, _a) {
    var other = _a.other;
    return value === other;
};
var params$9 = [
    {
        name: 'other'
    }
];
var is = {
    validate: validate$e,
    params: params$9
};

var validate$f = function (value, _a) {
    var other = _a.other;
    return value !== other;
};
var params$a = [
    {
        name: 'other'
    }
];
var is_not = {
    validate: validate$f,
    params: params$a
};

var validate$g = function (value, _a) {
    var length = _a.length;
    if (isNullOrUndefined(value)) {
        return false;
    }
    if (typeof value === 'number') {
        value = String(value);
    }
    if (!value.length) {
        value = toArray(value);
    }
    return value.length === length;
};
var params$b = [
    {
        name: 'length',
        cast: function (value) { return Number(value); }
    }
];
var length = {
    validate: validate$g,
    params: params$b
};

var validate$h = function (value, _a) {
    var length = _a.length;
    if (isNullOrUndefined(value)) {
        return length >= 0;
    }
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$h(val, { length: length }); });
    }
    return String(value).length <= length;
};
var params$c = [
    {
        name: 'length',
        cast: function (value) {
            return Number(value);
        }
    }
];
var max = {
    validate: validate$h,
    params: params$c
};

var validate$i = function (value, _a) {
    var max = _a.max;
    if (isNullOrUndefined(value) || value === '') {
        return false;
    }
    if (Array.isArray(value)) {
        return value.length > 0 && value.every(function (val) { return validate$i(val, { max: max }); });
    }
    return Number(value) <= max;
};
var params$d = [
    {
        name: 'max',
        cast: function (value) {
            return Number(value);
        }
    }
];
var max_value = {
    validate: validate$i,
    params: params$d
};

var validate$j = function (files, mimes) {
    var regex = new RegExp(mimes.join('|').replace('*', '.+') + "$", 'i');
    if (Array.isArray(files)) {
        return files.every(function (file) { return regex.test(file.type); });
    }
    return regex.test(files.type);
};
var mimes = {
    validate: validate$j
};

var validate$k = function (value, _a) {
    var length = _a.length;
    if (isNullOrUndefined(value)) {
        return false;
    }
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$k(val, { length: length }); });
    }
    return String(value).length >= length;
};
var params$e = [
    {
        name: 'length',
        cast: function (value) {
            return Number(value);
        }
    }
];
var min = {
    validate: validate$k,
    params: params$e
};

var validate$l = function (value, _a) {
    var min = _a.min;
    if (isNullOrUndefined(value) || value === '') {
        return false;
    }
    if (Array.isArray(value)) {
        return value.length > 0 && value.every(function (val) { return validate$l(val, { min: min }); });
    }
    return Number(value) >= min;
};
var params$f = [
    {
        name: 'min',
        cast: function (value) {
            return Number(value);
        }
    }
];
var min_value = {
    validate: validate$l,
    params: params$f
};

var ar = /^[٠١٢٣٤٥٦٧٨٩]+$/;
var en = /^[0-9]+$/;
var validate$m = function (value) {
    var testValue = function (val) {
        var strValue = String(val);
        return en.test(strValue) || ar.test(strValue);
    };
    if (Array.isArray(value)) {
        return value.every(testValue);
    }
    return testValue(value);
};
var numeric = {
    validate: validate$m
};

var validate$n = function (value, _a) {
    var regex = _a.regex;
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$n(val, { regex: regex }); });
    }
    return regex.test(String(value));
};
var params$g = [
    {
        name: 'regex',
        cast: function (value) {
            if (typeof value === 'string') {
                return new RegExp(value);
            }
            return value;
        }
    }
];
var regex = {
    validate: validate$n,
    params: params$g
};

var validate$o = function (value, _a) {
    var allowFalse = (_a === void 0 ? { allowFalse: true } : _a).allowFalse;
    var result = {
        valid: false,
        required: true
    };
    if (isNullOrUndefined(value) || isEmptyArray(value)) {
        return result;
    }
    // incase a field considers `false` as an empty value like checkboxes.
    if (value === false && !allowFalse) {
        return result;
    }
    result.valid = !!String(value).trim().length;
    return result;
};
var computesRequired = true;
var params$h = [
    {
        name: 'allowFalse',
        default: true
    }
];
var required = {
    validate: validate$o,
    params: params$h,
    computesRequired: computesRequired
};

var testEmpty = function (value) {
    return isEmptyArray(value) || includes([false, null, undefined], value) || !String(value).trim().length;
};
var validate$p = function (value, _a) {
    var target = _a.target, values = _a.values;
    var required;
    if (values && values.length) {
        if (!Array.isArray(values) && typeof values === 'string') {
            values = [values];
        }
        // eslint-disable-next-line
        required = values.some(function (val) { return val == String(target).trim(); });
    }
    else {
        required = !testEmpty(target);
    }
    if (!required) {
        return {
            valid: true,
            required: required
        };
    }
    return {
        valid: !testEmpty(value),
        required: required
    };
};
var params$i = [
    {
        name: 'target',
        isTarget: true
    },
    {
        name: 'values'
    }
];
var computesRequired$1 = true;
var required_if = {
    validate: validate$p,
    params: params$i,
    computesRequired: computesRequired$1
};

var validate$q = function (files, _a) {
    var size = _a.size;
    if (isNaN(size)) {
        return false;
    }
    var nSize = size * 1024;
    if (!Array.isArray(files)) {
        return files.size <= nSize;
    }
    for (var i = 0; i < files.length; i++) {
        if (files[i].size > nSize) {
            return false;
        }
    }
    return true;
};
var params$j = [
    {
        name: 'size',
        cast: function (value) {
            return Number(value);
        }
    }
];
var size = {
    validate: validate$q,
    params: params$j
};




/***/ }),

/***/ "6190":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ BTab; });

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/utils/vue.js
var vue = __webpack_require__("dcb3");

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/mixins/id.js
var id = __webpack_require__("90ef");

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/mixins/normalize-slot.js + 1 modules
var normalize_slot = __webpack_require__("8c18");

// EXTERNAL MODULE: ./node_modules/vue-functional-data-merge/dist/lib.esm.js
var lib_esm = __webpack_require__("b42e");

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/utils/object.js
var object = __webpack_require__("d82f");

// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/utils/bv-transition.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Generic Bootstrap v4 fade (no-fade) transition component
//
// Assumes that `show` class is not required when
// the transition has finished the enter transition
// (show and fade classes are only applied during transition)



var NO_FADE_PROPS = {
  name: '',
  enterClass: '',
  enterActiveClass: '',
  enterToClass: 'show',
  leaveClass: 'show',
  leaveActiveClass: '',
  leaveToClass: ''
};

var FADE_PROPS = _objectSpread(_objectSpread({}, NO_FADE_PROPS), {}, {
  enterActiveClass: 'fade',
  leaveActiveClass: 'fade'
}); // @vue/component


var BVTransition = /*#__PURE__*/vue["a" /* default */].extend({
  name: 'BVTransition',
  functional: true,
  props: {
    noFade: {
      // Only applicable to the built in transition
      // Has no effect if `trans-props` provided
      type: Boolean,
      default: false
    },
    appear: {
      // Has no effect if `trans-props` provided
      type: Boolean,
      default: false
    },
    mode: {
      // Can be overridden by user supplied trans-props
      type: String // default: undefined

    },
    // For user supplied transitions (if needed)
    transProps: {
      type: Object,
      default: null
    }
  },
  render: function render(h, _ref) {
    var children = _ref.children,
        data = _ref.data,
        props = _ref.props;
    var transProps = props.transProps;

    if (!Object(object["j" /* isPlainObject */])(transProps)) {
      transProps = props.noFade ? NO_FADE_PROPS : FADE_PROPS;

      if (props.appear) {
        // Default the appear classes to equal the enter classes
        transProps = _objectSpread(_objectSpread({}, transProps), {}, {
          appear: true,
          appearClass: transProps.enterClass,
          appearActiveClass: transProps.enterActiveClass,
          appearToClass: transProps.enterToClass
        });
      }
    }

    transProps = _objectSpread(_objectSpread({
      mode: props.mode
    }, transProps), {}, {
      // We always need `css` true
      css: true
    });
    return h('transition', // Any transition event listeners will get merged here
    Object(lib_esm["a" /* mergeData */])(data, {
      props: transProps
    }), children);
  }
});
/* harmony default export */ var bv_transition = (BVTransition);
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/components/tabs/tab.js



 // @vue/component

var BTab = /*#__PURE__*/vue["a" /* default */].extend({
  name: 'BTab',
  mixins: [id["a" /* default */], normalize_slot["a" /* default */]],
  inject: {
    bvTabs: {
      default: function _default() {
        return {};
      }
    }
  },
  props: {
    active: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: 'div'
    },
    buttonId: {
      type: String // default: ''

    },
    title: {
      type: String,
      default: ''
    },
    titleItemClass: {
      // Sniffed by tabs.js and added to nav 'li.nav-item'
      type: [String, Array, Object] // default: null

    },
    titleLinkClass: {
      // Sniffed by tabs.js and added to nav 'a.nav-link'
      type: [String, Array, Object] // default: null

    },
    titleLinkAttributes: {
      type: Object // default: null

    },
    disabled: {
      type: Boolean,
      default: false
    },
    noBody: {
      type: Boolean,
      default: false
    },
    lazy: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      localActive: this.active && !this.disabled,
      show: false
    };
  },
  computed: {
    tabClasses: function tabClasses() {
      return [{
        active: this.localActive,
        disabled: this.disabled,
        'card-body': this.bvTabs.card && !this.noBody
      }, // Apply <b-tabs> `activeTabClass` styles when this tab is active
      this.localActive ? this.bvTabs.activeTabClass : null];
    },
    controlledBy: function controlledBy() {
      return this.buttonId || this.safeId('__BV_tab_button__');
    },
    computedNoFade: function computedNoFade() {
      return !(this.bvTabs.fade || false);
    },
    computedLazy: function computedLazy() {
      return this.bvTabs.lazy || this.lazy;
    },
    _isTab: function _isTab() {
      // For parent sniffing of child
      return true;
    }
  },
  watch: {
    localActive: function localActive(newVal) {
      // Make 'active' prop work with `.sync` modifier
      this.$emit('update:active', newVal);
    },
    active: function active(newVal, oldVal) {
      if (newVal !== oldVal) {
        if (newVal) {
          // If activated post mount
          this.activate();
        } else {
          /* istanbul ignore next */
          if (!this.deactivate()) {
            // Tab couldn't be deactivated, so we reset the synced active prop
            // Deactivation will fail if no other tabs to activate
            this.$emit('update:active', this.localActive);
          }
        }
      }
    },
    disabled: function disabled(newVal, oldVal) {
      if (newVal !== oldVal) {
        if (newVal && this.localActive && this.bvTabs.firstTab) {
          this.localActive = false;
          this.bvTabs.firstTab();
        }
      }
    }
  },
  mounted: function mounted() {
    // Inform b-tabs of our presence
    this.registerTab(); // Initially show on mount if active and not disabled

    this.show = this.localActive;
  },
  updated: function updated() {
    // Force the tab button content to update (since slots are not reactive)
    // Only done if we have a title slot, as the title prop is reactive
    if (this.hasNormalizedSlot('title') && this.bvTabs.updateButton) {
      this.bvTabs.updateButton(this);
    }
  },
  destroyed: function destroyed() {
    // inform b-tabs of our departure
    this.unregisterTab();
  },
  methods: {
    // Private methods
    registerTab: function registerTab() {
      // Inform `b-tabs` of our presence
      this.bvTabs.registerTab && this.bvTabs.registerTab(this);
    },
    unregisterTab: function unregisterTab() {
      // Inform `b-tabs` of our departure
      this.bvTabs.unregisterTab && this.bvTabs.unregisterTab(this);
    },
    // Public methods
    activate: function activate() {
      if (this.bvTabs.activateTab && !this.disabled) {
        return this.bvTabs.activateTab(this);
      } else {
        // Not inside a <b-tabs> component or tab is disabled
        return false;
      }
    },
    deactivate: function deactivate() {
      if (this.bvTabs.deactivateTab && this.localActive) {
        return this.bvTabs.deactivateTab(this);
      } else {
        // Not inside a <b-tabs> component or not active to begin with
        return false;
      }
    }
  },
  render: function render(h) {
    var content = h(this.tag, {
      ref: 'panel',
      staticClass: 'tab-pane',
      class: this.tabClasses,
      directives: [{
        name: 'show',
        rawName: 'v-show',
        value: this.localActive,
        expression: 'localActive'
      }],
      attrs: {
        role: 'tabpanel',
        id: this.safeId(),
        'aria-hidden': this.localActive ? 'false' : 'true',
        'aria-labelledby': this.controlledBy || null
      }
    }, // Render content lazily if requested
    [this.localActive || !this.computedLazy ? this.normalizeSlot('default') : h()]);
    return h(bv_transition, {
      props: {
        mode: 'out-in',
        noFade: this.computedNoFade
      }
    }, [content]);
  }
});

/***/ }),

/***/ "7bb1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ValidationProvider; });
/* unused harmony export configure */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return extend; });
/* unused harmony export localeChanged */
/* unused harmony export localize */
/* unused harmony export normalizeRules */
/* unused harmony export setInteractionMode */
/* unused harmony export validate */
/* unused harmony export version */
/* unused harmony export withValidation */
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2b0e");
/**
  * vee-validate v3.3.7
  * (c) 2020 Abdelrahman Awad
  * @license MIT
  */


/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function isNaN(value) {
    // NaN is the one value that does not equal itself.
    // eslint-disable-next-line
    return value !== value;
}
function isNullOrUndefined(value) {
    return value === null || value === undefined;
}
function isEmptyArray(arr) {
    return Array.isArray(arr) && arr.length === 0;
}
var isObject = function (obj) {
    return obj !== null && obj && typeof obj === 'object' && !Array.isArray(obj);
};
/**
 * A reference comparison function with NaN support
 */
function isRefEqual(lhs, rhs) {
    if (isNaN(lhs) && isNaN(rhs)) {
        return true;
    }
    return lhs === rhs;
}
/**
 * Shallow object comparison.
 */
function isEqual(lhs, rhs) {
    if (lhs instanceof RegExp && rhs instanceof RegExp) {
        return isEqual(lhs.source, rhs.source) && isEqual(lhs.flags, rhs.flags);
    }
    if (Array.isArray(lhs) && Array.isArray(rhs)) {
        if (lhs.length !== rhs.length)
            return false;
        for (var i = 0; i < lhs.length; i++) {
            if (!isEqual(lhs[i], rhs[i])) {
                return false;
            }
        }
        return true;
    }
    // if both are objects, compare each key recursively.
    if (isObject(lhs) && isObject(rhs)) {
        return (Object.keys(lhs).every(function (key) {
            return isEqual(lhs[key], rhs[key]);
        }) &&
            Object.keys(rhs).every(function (key) {
                return isEqual(lhs[key], rhs[key]);
            }));
    }
    return isRefEqual(lhs, rhs);
}
// Checks if a given value is not an empty string or null or undefined.
function isSpecified(val) {
    if (val === '') {
        return false;
    }
    return !isNullOrUndefined(val);
}
function isCallable(fn) {
    return typeof fn === 'function';
}
function isLocator(value) {
    return isCallable(value) && !!value.__locatorRef;
}

function findIndex(arrayLike, predicate) {
    var array = Array.isArray(arrayLike) ? arrayLike : toArray(arrayLike);
    if (isCallable(array.findIndex)) {
        return array.findIndex(predicate);
    }
    /* istanbul ignore next */
    for (var i = 0; i < array.length; i++) {
        if (predicate(array[i], i)) {
            return i;
        }
    }
    /* istanbul ignore next */
    return -1;
}
/**
 * finds the first element that satisfies the predicate callback, polyfills array.find
 */
function find(arrayLike, predicate) {
    var array = Array.isArray(arrayLike) ? arrayLike : toArray(arrayLike);
    var idx = findIndex(array, predicate);
    return idx === -1 ? undefined : array[idx];
}
function includes(collection, item) {
    return collection.indexOf(item) !== -1;
}
/**
 * Converts an array-like object to array, provides a simple polyfill for Array.from
 */
function toArray(arrayLike) {
    if (isCallable(Array.from)) {
        return Array.from(arrayLike);
    }
    /* istanbul ignore next */
    return _copyArray(arrayLike);
}
/* istanbul ignore next */
function _copyArray(arrayLike) {
    var array = [];
    var length = arrayLike.length;
    for (var i = 0; i < length; i++) {
        array.push(arrayLike[i]);
    }
    return array;
}
function values(obj) {
    if (isCallable(Object.values)) {
        return Object.values(obj);
    }
    // fallback to keys()
    /* istanbul ignore next */
    return Object.keys(obj).map(function (k) { return obj[k]; });
}
function merge(target, source) {
    Object.keys(source).forEach(function (key) {
        if (isObject(source[key])) {
            if (!target[key]) {
                target[key] = {};
            }
            merge(target[key], source[key]);
            return;
        }
        target[key] = source[key];
    });
    return target;
}

function createFlags() {
    return {
        untouched: true,
        touched: false,
        dirty: false,
        pristine: true,
        valid: false,
        invalid: false,
        validated: false,
        pending: false,
        required: false,
        changed: false,
        passed: false,
        failed: false
    };
}

function identity(x) {
    return x;
}
function debounce(fn, wait, token) {
    if (wait === void 0) { wait = 0; }
    if (token === void 0) { token = { cancelled: false }; }
    if (wait === 0) {
        return fn;
    }
    var timeout;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var later = function () {
            timeout = undefined;
            // check if the fn call was cancelled.
            if (!token.cancelled)
                fn.apply(void 0, args);
        };
        // because we might want to use Node.js setTimout for SSR.
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Emits a warning to the console
 */
function warn(message) {
    console.warn("[vee-validate] " + message);
}
/**
 * Replaces placeholder values in a string with their actual values
 */
function interpolate(template, values) {
    return template.replace(/{([^}]+)}/g, function (_, p) {
        return p in values ? values[p] : "{" + p + "}";
    });
}

var RULES = {};
function normalizeSchema(schema) {
    var _a;
    if ((_a = schema.params) === null || _a === void 0 ? void 0 : _a.length) {
        schema.params = schema.params.map(function (param) {
            if (typeof param === 'string') {
                return { name: param };
            }
            return param;
        });
    }
    return schema;
}
var RuleContainer = /** @class */ (function () {
    function RuleContainer() {
    }
    RuleContainer.extend = function (name, schema) {
        // if rule already exists, overwrite it.
        var rule = normalizeSchema(schema);
        if (RULES[name]) {
            RULES[name] = merge(RULES[name], schema);
            return;
        }
        RULES[name] = __assign({ lazy: false, computesRequired: false }, rule);
    };
    RuleContainer.isLazy = function (name) {
        var _a;
        return !!((_a = RULES[name]) === null || _a === void 0 ? void 0 : _a.lazy);
    };
    RuleContainer.isRequireRule = function (name) {
        var _a;
        return !!((_a = RULES[name]) === null || _a === void 0 ? void 0 : _a.computesRequired);
    };
    RuleContainer.getRuleDefinition = function (ruleName) {
        return RULES[ruleName];
    };
    return RuleContainer;
}());
/**
 * Adds a custom validator to the list of validation rules.
 */
function extend(name, schema) {
    // makes sure new rules are properly formatted.
    guardExtend(name, schema);
    // Full schema object.
    if (typeof schema === 'object') {
        RuleContainer.extend(name, schema);
        return;
    }
    RuleContainer.extend(name, {
        validate: schema
    });
}
/**
 * Guards from extension violations.
 */
function guardExtend(name, validator) {
    if (isCallable(validator)) {
        return;
    }
    if (isCallable(validator.validate)) {
        return;
    }
    if (RuleContainer.getRuleDefinition(name)) {
        return;
    }
    throw new Error("Extension Error: The validator '" + name + "' must be a function or have a 'validate' method.");
}

var DEFAULT_CONFIG = {
    defaultMessage: "{_field_} is not valid.",
    skipOptional: true,
    classes: {
        touched: 'touched',
        untouched: 'untouched',
        valid: 'valid',
        invalid: 'invalid',
        pristine: 'pristine',
        dirty: 'dirty' // control has been interacted with
    },
    bails: true,
    mode: 'aggressive',
    useConstraintAttrs: true
};
var currentConfig = __assign({}, DEFAULT_CONFIG);
var getConfig = function () { return currentConfig; };
var setConfig = function (newConf) {
    currentConfig = __assign(__assign({}, currentConfig), newConf);
};
var configure = function (cfg) {
    setConfig(cfg);
};

/**
 * Normalizes the given rules expression.
 */
function normalizeRules(rules) {
    // if falsy value return an empty object.
    var acc = {};
    Object.defineProperty(acc, '_$$isNormalized', {
        value: true,
        writable: false,
        enumerable: false,
        configurable: false
    });
    if (!rules) {
        return acc;
    }
    // Object is already normalized, skip.
    if (isObject(rules) && rules._$$isNormalized) {
        return rules;
    }
    if (isObject(rules)) {
        return Object.keys(rules).reduce(function (prev, curr) {
            var params = [];
            if (rules[curr] === true) {
                params = [];
            }
            else if (Array.isArray(rules[curr])) {
                params = rules[curr];
            }
            else if (isObject(rules[curr])) {
                params = rules[curr];
            }
            else {
                params = [rules[curr]];
            }
            if (rules[curr] !== false) {
                prev[curr] = buildParams(curr, params);
            }
            return prev;
        }, acc);
    }
    /* istanbul ignore if */
    if (typeof rules !== 'string') {
        warn('rules must be either a string or an object.');
        return acc;
    }
    return rules.split('|').reduce(function (prev, rule) {
        var parsedRule = parseRule(rule);
        if (!parsedRule.name) {
            return prev;
        }
        prev[parsedRule.name] = buildParams(parsedRule.name, parsedRule.params);
        return prev;
    }, acc);
}
function buildParams(ruleName, provided) {
    var ruleSchema = RuleContainer.getRuleDefinition(ruleName);
    if (!ruleSchema) {
        return provided;
    }
    var params = {};
    if (!ruleSchema.params && !Array.isArray(provided)) {
        throw new Error('You provided an object params to a rule that has no defined schema.');
    }
    // Rule probably uses an array for their args, keep it as is.
    if (Array.isArray(provided) && !ruleSchema.params) {
        return provided;
    }
    var definedParams;
    // collect the params schema.
    if (!ruleSchema.params || (ruleSchema.params.length < provided.length && Array.isArray(provided))) {
        var lastDefinedParam_1;
        // collect any additional parameters in the last item.
        definedParams = provided.map(function (_, idx) {
            var _a;
            var param = (_a = ruleSchema.params) === null || _a === void 0 ? void 0 : _a[idx];
            lastDefinedParam_1 = param || lastDefinedParam_1;
            if (!param) {
                param = lastDefinedParam_1;
            }
            return param;
        });
    }
    else {
        definedParams = ruleSchema.params;
    }
    // Match the provided array length with a temporary schema.
    for (var i = 0; i < definedParams.length; i++) {
        var options = definedParams[i];
        var value = options.default;
        // if the provided is an array, map element value.
        if (Array.isArray(provided)) {
            if (i in provided) {
                value = provided[i];
            }
        }
        else {
            // If the param exists in the provided object.
            if (options.name in provided) {
                value = provided[options.name];
                // if the provided is the first param value.
            }
            else if (definedParams.length === 1) {
                value = provided;
            }
        }
        // if the param is a target, resolve the target value.
        if (options.isTarget) {
            value = createLocator(value, options.cast);
        }
        // A target param using interpolation
        if (typeof value === 'string' && value[0] === '@') {
            value = createLocator(value.slice(1), options.cast);
        }
        // If there is a transformer defined.
        if (!isLocator(value) && options.cast) {
            value = options.cast(value);
        }
        // already been set, probably multiple values.
        if (params[options.name]) {
            params[options.name] = Array.isArray(params[options.name]) ? params[options.name] : [params[options.name]];
            params[options.name].push(value);
        }
        else {
            // set the value.
            params[options.name] = value;
        }
    }
    return params;
}
/**
 * Parses a rule string expression.
 */
var parseRule = function (rule) {
    var params = [];
    var name = rule.split(':')[0];
    if (includes(rule, ':')) {
        params = rule
            .split(':')
            .slice(1)
            .join(':')
            .split(',');
    }
    return { name: name, params: params };
};
function createLocator(value, castFn) {
    var locator = function (crossTable) {
        var val = crossTable[value];
        return castFn ? castFn(val) : val;
    };
    locator.__locatorRef = value;
    return locator;
}
function extractLocators(params) {
    if (Array.isArray(params)) {
        return params.filter(isLocator);
    }
    return Object.keys(params)
        .filter(function (key) { return isLocator(params[key]); })
        .map(function (key) { return params[key]; });
}

/**
 * Validates a value against the rules.
 */
function validate(value, rules, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var shouldBail, skipIfEmpty, field, result, errors, failedRules, regenerateMap;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    shouldBail = options === null || options === void 0 ? void 0 : options.bails;
                    skipIfEmpty = options === null || options === void 0 ? void 0 : options.skipIfEmpty;
                    field = {
                        name: (options === null || options === void 0 ? void 0 : options.name) || '{field}',
                        rules: normalizeRules(rules),
                        bails: shouldBail !== null && shouldBail !== void 0 ? shouldBail : true,
                        skipIfEmpty: skipIfEmpty !== null && skipIfEmpty !== void 0 ? skipIfEmpty : true,
                        forceRequired: false,
                        crossTable: (options === null || options === void 0 ? void 0 : options.values) || {},
                        names: (options === null || options === void 0 ? void 0 : options.names) || {},
                        customMessages: (options === null || options === void 0 ? void 0 : options.customMessages) || {}
                    };
                    return [4 /*yield*/, _validate(field, value, options)];
                case 1:
                    result = _a.sent();
                    errors = [];
                    failedRules = {};
                    regenerateMap = {};
                    result.errors.forEach(function (e) {
                        var msg = e.msg();
                        errors.push(msg);
                        failedRules[e.rule] = msg;
                        regenerateMap[e.rule] = e.msg;
                    });
                    return [2 /*return*/, {
                            valid: result.valid,
                            errors: errors,
                            failedRules: failedRules,
                            regenerateMap: regenerateMap
                        }];
            }
        });
    });
}
/**
 * Starts the validation process.
 */
function _validate(field, value, _a) {
    var _b = (_a === void 0 ? {} : _a).isInitial, isInitial = _b === void 0 ? false : _b;
    return __awaiter(this, void 0, void 0, function () {
        var _c, shouldSkip, errors, rules, length, i, rule, result;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, _shouldSkip(field, value)];
                case 1:
                    _c = _d.sent(), shouldSkip = _c.shouldSkip, errors = _c.errors;
                    if (shouldSkip) {
                        return [2 /*return*/, {
                                valid: !errors.length,
                                errors: errors
                            }];
                    }
                    rules = Object.keys(field.rules).filter(function (rule) { return !RuleContainer.isRequireRule(rule); });
                    length = rules.length;
                    i = 0;
                    _d.label = 2;
                case 2:
                    if (!(i < length)) return [3 /*break*/, 5];
                    if (isInitial && RuleContainer.isLazy(rules[i])) {
                        return [3 /*break*/, 4];
                    }
                    rule = rules[i];
                    return [4 /*yield*/, _test(field, value, {
                            name: rule,
                            params: field.rules[rule]
                        })];
                case 3:
                    result = _d.sent();
                    if (!result.valid && result.error) {
                        errors.push(result.error);
                        if (field.bails) {
                            return [2 /*return*/, {
                                    valid: false,
                                    errors: errors
                                }];
                        }
                    }
                    _d.label = 4;
                case 4:
                    i++;
                    return [3 /*break*/, 2];
                case 5: return [2 /*return*/, {
                        valid: !errors.length,
                        errors: errors
                    }];
            }
        });
    });
}
function _shouldSkip(field, value) {
    return __awaiter(this, void 0, void 0, function () {
        var requireRules, length, errors, isEmpty, isEmptyAndOptional, isRequired, i, rule, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    requireRules = Object.keys(field.rules).filter(RuleContainer.isRequireRule);
                    length = requireRules.length;
                    errors = [];
                    isEmpty = isNullOrUndefined(value) || value === '' || isEmptyArray(value);
                    isEmptyAndOptional = isEmpty && field.skipIfEmpty;
                    isRequired = false;
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < length)) return [3 /*break*/, 4];
                    rule = requireRules[i];
                    return [4 /*yield*/, _test(field, value, {
                            name: rule,
                            params: field.rules[rule]
                        })];
                case 2:
                    result = _a.sent();
                    if (!isObject(result)) {
                        throw new Error('Require rules has to return an object (see docs)');
                    }
                    if (result.required) {
                        isRequired = true;
                    }
                    if (!result.valid && result.error) {
                        errors.push(result.error);
                        // Exit early as the field is required and failed validation.
                        if (field.bails) {
                            return [2 /*return*/, {
                                    shouldSkip: true,
                                    errors: errors
                                }];
                        }
                    }
                    _a.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4:
                    if (isEmpty && !isRequired && !field.skipIfEmpty) {
                        return [2 /*return*/, {
                                shouldSkip: false,
                                errors: errors
                            }];
                    }
                    // field is configured to run through the pipeline regardless
                    if (!field.bails && !isEmptyAndOptional) {
                        return [2 /*return*/, {
                                shouldSkip: false,
                                errors: errors
                            }];
                    }
                    // skip if the field is not required and has an empty value.
                    return [2 /*return*/, {
                            shouldSkip: !isRequired && isEmpty,
                            errors: errors
                        }];
            }
        });
    });
}
/**
 * Tests a single input value against a rule.
 */
function _test(field, value, rule) {
    return __awaiter(this, void 0, void 0, function () {
        var ruleSchema, normalizedValue, params, result, values_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ruleSchema = RuleContainer.getRuleDefinition(rule.name);
                    if (!ruleSchema || !ruleSchema.validate) {
                        throw new Error("No such validator '" + rule.name + "' exists.");
                    }
                    normalizedValue = ruleSchema.castValue ? ruleSchema.castValue(value) : value;
                    params = fillTargetValues(rule.params, field.crossTable);
                    return [4 /*yield*/, ruleSchema.validate(normalizedValue, params)];
                case 1:
                    result = _a.sent();
                    if (typeof result === 'string') {
                        values_1 = __assign(__assign({}, (params || {})), { _field_: field.name, _value_: value, _rule_: rule.name });
                        return [2 /*return*/, {
                                valid: false,
                                error: { rule: rule.name, msg: function () { return interpolate(result, values_1); } }
                            }];
                    }
                    if (!isObject(result)) {
                        result = { valid: result };
                    }
                    return [2 /*return*/, {
                            valid: result.valid,
                            required: result.required,
                            error: result.valid ? undefined : _generateFieldError(field, value, ruleSchema, rule.name, params)
                        }];
            }
        });
    });
}
/**
 * Generates error messages.
 */
function _generateFieldError(field, value, ruleSchema, ruleName, params) {
    var _a;
    var message = (_a = field.customMessages[ruleName]) !== null && _a !== void 0 ? _a : ruleSchema.message;
    var ruleTargets = _getRuleTargets(field, ruleSchema, ruleName);
    var _b = _getUserTargets(field, ruleSchema, ruleName, message), userTargets = _b.userTargets, userMessage = _b.userMessage;
    var values = __assign(__assign(__assign(__assign({}, (params || {})), { _field_: field.name, _value_: value, _rule_: ruleName }), ruleTargets), userTargets);
    return {
        msg: function () { return _normalizeMessage(userMessage || getConfig().defaultMessage, field.name, values); },
        rule: ruleName
    };
}
function _getRuleTargets(field, ruleSchema, ruleName) {
    var params = ruleSchema.params;
    if (!params) {
        return {};
    }
    var numTargets = params.filter(function (param) { return param.isTarget; }).length;
    if (numTargets <= 0) {
        return {};
    }
    var names = {};
    var ruleConfig = field.rules[ruleName];
    if (!Array.isArray(ruleConfig) && isObject(ruleConfig)) {
        ruleConfig = params.map(function (param) {
            return ruleConfig[param.name];
        });
    }
    for (var index = 0; index < params.length; index++) {
        var param = params[index];
        var key = ruleConfig[index];
        if (!isLocator(key)) {
            continue;
        }
        key = key.__locatorRef;
        var name_1 = field.names[key] || key;
        names[param.name] = name_1;
        names["_" + param.name + "_"] = field.crossTable[key];
    }
    return names;
}
function _getUserTargets(field, ruleSchema, ruleName, userMessage) {
    var userTargets = {};
    var rules = field.rules[ruleName];
    var params = ruleSchema.params || [];
    // early return if no rules
    if (!rules) {
        return {};
    }
    // check all rules to convert targets
    Object.keys(rules).forEach(function (key, index) {
        // get the rule
        var rule = rules[key];
        if (!isLocator(rule)) {
            return {};
        }
        // get associated parameter
        var param = params[index];
        if (!param) {
            return {};
        }
        // grab the name of the target
        var name = rule.__locatorRef;
        userTargets[param.name] = field.names[name] || name;
        userTargets["_" + param.name + "_"] = field.crossTable[name];
    });
    return {
        userTargets: userTargets,
        userMessage: userMessage
    };
}
function _normalizeMessage(template, field, values) {
    if (typeof template === 'function') {
        return template(field, values);
    }
    return interpolate(template, __assign(__assign({}, values), { _field_: field }));
}
function fillTargetValues(params, crossTable) {
    if (Array.isArray(params)) {
        return params;
    }
    var values = {};
    var normalize = function (value) {
        if (isLocator(value)) {
            return value(crossTable);
        }
        return value;
    };
    Object.keys(params).forEach(function (param) {
        values[param] = normalize(params[param]);
    });
    return values;
}

var aggressive = function () { return ({
    on: ['input', 'blur']
}); };
var lazy = function () { return ({
    on: ['change']
}); };
var eager = function (_a) {
    var errors = _a.errors;
    if (errors.length) {
        return {
            on: ['input', 'change']
        };
    }
    return {
        on: ['change', 'blur']
    };
};
var passive = function () { return ({
    on: []
}); };
var modes = {
    aggressive: aggressive,
    eager: eager,
    passive: passive,
    lazy: lazy
};
var setInteractionMode = function (mode, implementation) {
    setConfig({ mode: mode });
    if (!implementation) {
        return;
    }
    if (!isCallable(implementation)) {
        throw new Error('A mode implementation must be a function');
    }
    modes[mode] = implementation;
};

var EVENT_BUS = new vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]();
function localeChanged() {
    EVENT_BUS.$emit('change:locale');
}

var Dictionary = /** @class */ (function () {
    function Dictionary(locale, dictionary) {
        this.container = {};
        this.locale = locale;
        this.merge(dictionary);
    }
    Dictionary.prototype.resolve = function (field, rule, values) {
        return this.format(this.locale, field, rule, values);
    };
    Dictionary.prototype.format = function (locale, field, rule, values) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var message;
        // find if specific message for that field was specified.
        message = ((_c = (_b = (_a = this.container[locale]) === null || _a === void 0 ? void 0 : _a.fields) === null || _b === void 0 ? void 0 : _b[field]) === null || _c === void 0 ? void 0 : _c[rule]) || ((_e = (_d = this.container[locale]) === null || _d === void 0 ? void 0 : _d.messages) === null || _e === void 0 ? void 0 : _e[rule]);
        if (!message) {
            message = '{_field_} is not valid';
        }
        field = (_h = (_g = (_f = this.container[locale]) === null || _f === void 0 ? void 0 : _f.names) === null || _g === void 0 ? void 0 : _g[field]) !== null && _h !== void 0 ? _h : field;
        return isCallable(message) ? message(field, values) : interpolate(message, __assign(__assign({}, values), { _field_: field }));
    };
    Dictionary.prototype.merge = function (dictionary) {
        merge(this.container, dictionary);
    };
    Dictionary.prototype.hasRule = function (name) {
        var _a, _b;
        return !!((_b = (_a = this.container[this.locale]) === null || _a === void 0 ? void 0 : _a.messages) === null || _b === void 0 ? void 0 : _b[name]);
    };
    return Dictionary;
}());
var DICTIONARY;
function localize(locale, dictionary) {
    var _a;
    if (!DICTIONARY) {
        DICTIONARY = new Dictionary('en', {});
        setConfig({
            defaultMessage: function (field, values) {
                return DICTIONARY.resolve(field, values === null || values === void 0 ? void 0 : values._rule_, values || {});
            }
        });
    }
    if (typeof locale === 'string') {
        DICTIONARY.locale = locale;
        if (dictionary) {
            DICTIONARY.merge((_a = {}, _a[locale] = dictionary, _a));
        }
        localeChanged();
        return;
    }
    DICTIONARY.merge(locale);
}

var isEvent = function (evt) {
    if (!evt) {
        return false;
    }
    if (typeof Event !== 'undefined' && isCallable(Event) && evt instanceof Event) {
        return true;
    }
    // this is for IE
    /* istanbul ignore next */
    if (evt && evt.srcElement) {
        return true;
    }
    return false;
};
function normalizeEventValue(value) {
    var _a, _b;
    if (!isEvent(value)) {
        return value;
    }
    var input = value.target;
    if (input.type === 'file' && input.files) {
        return toArray(input.files);
    }
    // If the input has a `v-model.number` modifier applied.
    if ((_a = input._vModifiers) === null || _a === void 0 ? void 0 : _a.number) {
        // as per the spec the v-model.number uses parseFloat
        var valueAsNumber = parseFloat(input.value);
        if (isNaN(valueAsNumber)) {
            return input.value;
        }
        return valueAsNumber;
    }
    if ((_b = input._vModifiers) === null || _b === void 0 ? void 0 : _b.trim) {
        var trimmedValue = typeof input.value === 'string' ? input.value.trim() : input.value;
        return trimmedValue;
    }
    return input.value;
}

var isTextInput = function (vnode) {
    var _a;
    var attrs = ((_a = vnode.data) === null || _a === void 0 ? void 0 : _a.attrs) || vnode.elm;
    // it will fallback to being a text input per browsers spec.
    if (vnode.tag === 'input' && (!attrs || !attrs.type)) {
        return true;
    }
    if (vnode.tag === 'textarea') {
        return true;
    }
    return includes(['text', 'password', 'search', 'email', 'tel', 'url', 'number'], attrs === null || attrs === void 0 ? void 0 : attrs.type);
};
// export const isCheckboxOrRadioInput = (vnode: VNode): boolean => {
//   const attrs = (vnode.data && vnode.data.attrs) || vnode.elm;
//   return includes(['radio', 'checkbox'], attrs && attrs.type);
// };
// Gets the model object on the vnode.
function findModel(vnode) {
    if (!vnode.data) {
        return undefined;
    }
    // Component Model
    // THIS IS NOT TYPED IN OFFICIAL VUE TYPINGS
    // eslint-disable-next-line
    var nonStandardVNodeData = vnode.data;
    if ('model' in nonStandardVNodeData) {
        return nonStandardVNodeData.model;
    }
    if (!vnode.data.directives) {
        return undefined;
    }
    return find(vnode.data.directives, function (d) { return d.name === 'model'; });
}
function findValue(vnode) {
    var _a, _b;
    var model = findModel(vnode);
    if (model) {
        return { value: model.value };
    }
    var config = findModelConfig(vnode);
    var prop = (config === null || config === void 0 ? void 0 : config.prop) || 'value';
    if (((_a = vnode.componentOptions) === null || _a === void 0 ? void 0 : _a.propsData) && prop in vnode.componentOptions.propsData) {
        var propsDataWithValue = vnode.componentOptions.propsData;
        return { value: propsDataWithValue[prop] };
    }
    if (((_b = vnode.data) === null || _b === void 0 ? void 0 : _b.domProps) && 'value' in vnode.data.domProps) {
        return { value: vnode.data.domProps.value };
    }
    return undefined;
}
function extractChildren(vnode) {
    if (Array.isArray(vnode)) {
        return vnode;
    }
    if (Array.isArray(vnode.children)) {
        return vnode.children;
    }
    /* istanbul ignore next */
    if (vnode.componentOptions && Array.isArray(vnode.componentOptions.children)) {
        return vnode.componentOptions.children;
    }
    return [];
}
function findInputNode(vnode) {
    if (!Array.isArray(vnode) && findValue(vnode) !== undefined) {
        return vnode;
    }
    var children = extractChildren(vnode);
    return children.reduce(function (candidate, node) {
        if (candidate) {
            return candidate;
        }
        return findInputNode(node);
    }, null);
}
// Resolves v-model config if exists.
function findModelConfig(vnode) {
    /* istanbul ignore next */
    if (!vnode.componentOptions)
        return null;
    // This is also not typed in the standard Vue TS.
    return vnode.componentOptions.Ctor.options.model;
}
// Adds a listener to vnode listener object.
function mergeVNodeListeners(obj, eventName, handler) {
    // no listener at all.
    if (isNullOrUndefined(obj[eventName])) {
        obj[eventName] = [handler];
        return;
    }
    // Is an invoker.
    if (isCallable(obj[eventName]) && obj[eventName].fns) {
        var invoker = obj[eventName];
        invoker.fns = Array.isArray(invoker.fns) ? invoker.fns : [invoker.fns];
        if (!includes(invoker.fns, handler)) {
            invoker.fns.push(handler);
        }
        return;
    }
    if (isCallable(obj[eventName])) {
        var prev = obj[eventName];
        obj[eventName] = [prev];
    }
    if (Array.isArray(obj[eventName]) && !includes(obj[eventName], handler)) {
        obj[eventName].push(handler);
    }
}
// Adds a listener to a native HTML vnode.
function addNativeNodeListener(node, eventName, handler) {
    /* istanbul ignore next */
    if (!node.data) {
        node.data = {};
    }
    if (isNullOrUndefined(node.data.on)) {
        node.data.on = {};
    }
    mergeVNodeListeners(node.data.on, eventName, handler);
}
// Adds a listener to a Vue component vnode.
function addComponentNodeListener(node, eventName, handler) {
    /* istanbul ignore next */
    if (!node.componentOptions) {
        return;
    }
    /* istanbul ignore next */
    if (!node.componentOptions.listeners) {
        node.componentOptions.listeners = {};
    }
    mergeVNodeListeners(node.componentOptions.listeners, eventName, handler);
}
function addVNodeListener(vnode, eventName, handler) {
    if (vnode.componentOptions) {
        addComponentNodeListener(vnode, eventName, handler);
        return;
    }
    addNativeNodeListener(vnode, eventName, handler);
}
// Determines if `change` should be used over `input` for listeners.
function getInputEventName(vnode, model) {
    var _a;
    // Is a component.
    if (vnode.componentOptions) {
        var event_1 = (findModelConfig(vnode) || { event: 'input' }).event;
        return event_1;
    }
    // Lazy Models typically use change event
    if ((_a = model === null || model === void 0 ? void 0 : model.modifiers) === null || _a === void 0 ? void 0 : _a.lazy) {
        return 'change';
    }
    // is a textual-type input.
    if (isTextInput(vnode)) {
        return 'input';
    }
    return 'change';
}
function isHTMLNode(node) {
    return includes(['input', 'select', 'textarea'], node.tag);
}
// TODO: Type this one properly.
function normalizeSlots(slots, ctx) {
    var acc = [];
    return Object.keys(slots).reduce(function (arr, key) {
        slots[key].forEach(function (vnode) {
            if (!vnode.context) {
                slots[key].context = ctx;
                if (!vnode.data) {
                    vnode.data = {};
                }
                vnode.data.slot = key;
            }
        });
        return arr.concat(slots[key]);
    }, acc);
}
function resolveTextualRules(vnode) {
    var _a;
    var attrs = (_a = vnode.data) === null || _a === void 0 ? void 0 : _a.attrs;
    var rules = {};
    if (!attrs)
        return rules;
    if (attrs.type === 'email' && RuleContainer.getRuleDefinition('email')) {
        rules.email = ['multiple' in attrs];
    }
    if (attrs.pattern && RuleContainer.getRuleDefinition('regex')) {
        rules.regex = attrs.pattern;
    }
    if (attrs.maxlength >= 0 && RuleContainer.getRuleDefinition('max')) {
        rules.max = attrs.maxlength;
    }
    if (attrs.minlength >= 0 && RuleContainer.getRuleDefinition('min')) {
        rules.min = attrs.minlength;
    }
    if (attrs.type === 'number') {
        if (isSpecified(attrs.min) && RuleContainer.getRuleDefinition('min_value')) {
            rules.min_value = Number(attrs.min);
        }
        if (isSpecified(attrs.max) && RuleContainer.getRuleDefinition('max_value')) {
            rules.max_value = Number(attrs.max);
        }
    }
    return rules;
}
function resolveRules(vnode) {
    var _a;
    var htmlTags = ['input', 'select', 'textarea'];
    var attrs = (_a = vnode.data) === null || _a === void 0 ? void 0 : _a.attrs;
    if (!includes(htmlTags, vnode.tag) || !attrs) {
        return {};
    }
    var rules = {};
    if ('required' in attrs && attrs.required !== false && RuleContainer.getRuleDefinition('required')) {
        rules.required = attrs.type === 'checkbox' ? [true] : true;
    }
    if (isTextInput(vnode)) {
        return normalizeRules(__assign(__assign({}, rules), resolveTextualRules(vnode)));
    }
    return normalizeRules(rules);
}
function normalizeChildren(context, slotProps) {
    if (context.$scopedSlots.default) {
        return context.$scopedSlots.default(slotProps) || [];
    }
    return context.$slots.default || [];
}

/**
 * Determines if a provider needs to run validation.
 */
function shouldValidate(ctx, value) {
    // when an immediate/initial validation is needed and wasn't done before.
    if (!ctx._ignoreImmediate && ctx.immediate) {
        return true;
    }
    // when the value changes for whatever reason.
    if (!isRefEqual(ctx.value, value) && ctx.normalizedEvents.length) {
        return true;
    }
    // when it needs validation due to props/cross-fields changes.
    if (ctx._needsValidation) {
        return true;
    }
    // when the initial value is undefined and the field wasn't rendered yet.
    if (!ctx.initialized && value === undefined) {
        return true;
    }
    return false;
}
function createValidationCtx(ctx) {
    return __assign(__assign({}, ctx.flags), { errors: ctx.errors, classes: ctx.classes, failedRules: ctx.failedRules, reset: function () { return ctx.reset(); }, validate: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return ctx.validate.apply(ctx, args);
        }, ariaInput: {
            'aria-invalid': ctx.flags.invalid ? 'true' : 'false',
            'aria-required': ctx.isRequired ? 'true' : 'false',
            'aria-errormessage': "vee_" + ctx.id
        }, ariaMsg: {
            id: "vee_" + ctx.id,
            'aria-live': ctx.errors.length ? 'assertive' : 'off'
        } });
}
function onRenderUpdate(vm, value) {
    if (!vm.initialized) {
        vm.initialValue = value;
    }
    var validateNow = shouldValidate(vm, value);
    vm._needsValidation = false;
    vm.value = value;
    vm._ignoreImmediate = true;
    if (!validateNow) {
        return;
    }
    var validate = function () {
        if (vm.immediate || vm.flags.validated) {
            return triggerThreadSafeValidation(vm);
        }
        vm.validateSilent();
    };
    if (vm.initialized) {
        validate();
        return;
    }
    vm.$once('hook:mounted', function () { return validate(); });
}
function computeModeSetting(ctx) {
    var compute = (isCallable(ctx.mode) ? ctx.mode : modes[ctx.mode]);
    return compute(ctx);
}
function triggerThreadSafeValidation(vm) {
    var pendingPromise = vm.validateSilent();
    // avoids race conditions between successive validations.
    vm._pendingValidation = pendingPromise;
    return pendingPromise.then(function (result) {
        if (pendingPromise === vm._pendingValidation) {
            vm.applyResult(result);
            vm._pendingValidation = undefined;
        }
        return result;
    });
}
// Creates the common handlers for a validatable context.
function createCommonHandlers(vm) {
    if (!vm.$veeOnInput) {
        vm.$veeOnInput = function (e) {
            vm.syncValue(e); // track and keep the value updated.
            vm.setFlags({ dirty: true, pristine: false });
        };
    }
    var onInput = vm.$veeOnInput;
    if (!vm.$veeOnBlur) {
        vm.$veeOnBlur = function () {
            vm.setFlags({ touched: true, untouched: false });
        };
    }
    // Blur event listener.
    var onBlur = vm.$veeOnBlur;
    var onValidate = vm.$veeHandler;
    var mode = computeModeSetting(vm);
    // Handle debounce changes.
    if (!onValidate || vm.$veeDebounce !== vm.debounce) {
        onValidate = debounce(function () {
            vm.$nextTick(function () {
                if (!vm._pendingReset) {
                    triggerThreadSafeValidation(vm);
                }
                vm._pendingReset = false;
            });
        }, mode.debounce || vm.debounce);
        // Cache the handler so we don't create it each time.
        vm.$veeHandler = onValidate;
        // cache the debounce value so we detect if it was changed.
        vm.$veeDebounce = vm.debounce;
    }
    return { onInput: onInput, onBlur: onBlur, onValidate: onValidate };
}
// Adds all plugin listeners to the vnode.
function addListeners(vm, node) {
    var value = findValue(node);
    // cache the input eventName.
    vm._inputEventName = vm._inputEventName || getInputEventName(node, findModel(node));
    onRenderUpdate(vm, value === null || value === void 0 ? void 0 : value.value);
    var _a = createCommonHandlers(vm), onInput = _a.onInput, onBlur = _a.onBlur, onValidate = _a.onValidate;
    addVNodeListener(node, vm._inputEventName, onInput);
    addVNodeListener(node, 'blur', onBlur);
    // add the validation listeners.
    vm.normalizedEvents.forEach(function (evt) {
        addVNodeListener(node, evt, onValidate);
    });
    vm.initialized = true;
}

var PROVIDER_COUNTER = 0;
function data() {
    var errors = [];
    var fieldName = '';
    var defaultValues = {
        errors: errors,
        value: undefined,
        initialized: false,
        initialValue: undefined,
        flags: createFlags(),
        failedRules: {},
        isActive: true,
        fieldName: fieldName,
        id: ''
    };
    return defaultValues;
}
var ValidationProvider = vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].extend({
    inject: {
        $_veeObserver: {
            from: '$_veeObserver',
            default: function () {
                if (!this.$vnode.context.$_veeObserver) {
                    this.$vnode.context.$_veeObserver = createObserver();
                }
                return this.$vnode.context.$_veeObserver;
            }
        }
    },
    props: {
        vid: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: null
        },
        mode: {
            type: [String, Function],
            default: function () {
                return getConfig().mode;
            }
        },
        rules: {
            type: [Object, String],
            default: null
        },
        immediate: {
            type: Boolean,
            default: false
        },
        bails: {
            type: Boolean,
            default: function () { return getConfig().bails; }
        },
        skipIfEmpty: {
            type: Boolean,
            default: function () { return getConfig().skipOptional; }
        },
        debounce: {
            type: Number,
            default: 0
        },
        tag: {
            type: String,
            default: 'span'
        },
        slim: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        customMessages: {
            type: Object,
            default: function () {
                return {};
            }
        }
    },
    watch: {
        rules: {
            deep: true,
            handler: function (val, oldVal) {
                this._needsValidation = !isEqual(val, oldVal);
            }
        }
    },
    data: data,
    computed: {
        fieldDeps: function () {
            var _this = this;
            return Object.keys(this.normalizedRules).reduce(function (acc, rule) {
                var deps = extractLocators(_this.normalizedRules[rule]).map(function (dep) { return dep.__locatorRef; });
                acc.push.apply(acc, deps);
                deps.forEach(function (depName) {
                    watchCrossFieldDep(_this, depName);
                });
                return acc;
            }, []);
        },
        normalizedEvents: function () {
            var _this = this;
            var on = computeModeSetting(this).on;
            return (on || []).map(function (e) {
                if (e === 'input') {
                    return _this._inputEventName;
                }
                return e;
            });
        },
        isRequired: function () {
            var rules = __assign(__assign({}, this._resolvedRules), this.normalizedRules);
            var isRequired = Object.keys(rules).some(RuleContainer.isRequireRule);
            this.flags.required = !!isRequired;
            return isRequired;
        },
        classes: function () {
            var names = getConfig().classes;
            return computeClassObj(names, this.flags);
        },
        normalizedRules: function () {
            return normalizeRules(this.rules);
        }
    },
    mounted: function () {
        var _this = this;
        var onLocaleChanged = function () {
            if (!_this.flags.validated) {
                return;
            }
            var regenerateMap = _this._regenerateMap;
            if (regenerateMap) {
                var errors_1 = [];
                var failedRules_1 = {};
                Object.keys(regenerateMap).forEach(function (rule) {
                    var msg = regenerateMap[rule]();
                    errors_1.push(msg);
                    failedRules_1[rule] = msg;
                });
                _this.applyResult({ errors: errors_1, failedRules: failedRules_1, regenerateMap: regenerateMap });
                return;
            }
            _this.validate();
        };
        EVENT_BUS.$on('change:locale', onLocaleChanged);
        this.$on('hook:beforeDestroy', function () {
            EVENT_BUS.$off('change:locale', onLocaleChanged);
        });
    },
    render: function (h) {
        var _a, _b, _c, _d;
        this.registerField();
        var ctx = createValidationCtx(this);
        var children = normalizeChildren(this, ctx);
        var input = findInputNode(children);
        if (!input) {
            // Silent exit if no input was found.
            return this.slim && children.length <= 1 ? children[0] : h(this.tag, children);
        }
        var resolved = getConfig().useConstraintAttrs ? resolveRules(input) : {};
        if (!isEqual(this._resolvedRules, resolved)) {
            this._needsValidation = true;
        }
        if (isHTMLNode(input)) {
            this.fieldName = ((_b = (_a = input.data) === null || _a === void 0 ? void 0 : _a.attrs) === null || _b === void 0 ? void 0 : _b.name) || ((_d = (_c = input.data) === null || _c === void 0 ? void 0 : _c.attrs) === null || _d === void 0 ? void 0 : _d.id);
        }
        this._resolvedRules = resolved;
        addListeners(this, input);
        return this.slim && children.length <= 1 ? children[0] : h(this.tag, children);
    },
    beforeDestroy: function () {
        // cleanup reference.
        this.$_veeObserver.unobserve(this.id);
    },
    activated: function () {
        this.isActive = true;
    },
    deactivated: function () {
        this.isActive = false;
    },
    methods: {
        setFlags: function (flags) {
            var _this = this;
            Object.keys(flags).forEach(function (flag) {
                _this.flags[flag] = flags[flag];
            });
        },
        syncValue: function (v) {
            var value = normalizeEventValue(v);
            this.value = value;
            this.flags.changed = this.initialValue !== value;
        },
        reset: function () {
            var _this = this;
            this.errors = [];
            this.initialValue = this.value;
            var flags = createFlags();
            flags.required = this.isRequired;
            this.setFlags(flags);
            this.failedRules = {};
            this.validateSilent();
            this._pendingValidation = undefined;
            this._pendingReset = true;
            setTimeout(function () {
                _this._pendingReset = false;
            }, this.debounce);
        },
        validate: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (args.length > 0) {
                        this.syncValue(args[0]);
                    }
                    return [2 /*return*/, triggerThreadSafeValidation(this)];
                });
            });
        },
        validateSilent: function () {
            return __awaiter(this, void 0, void 0, function () {
                var rules, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.setFlags({ pending: true });
                            rules = __assign(__assign({}, this._resolvedRules), this.normalizedRules);
                            Object.defineProperty(rules, '_$$isNormalized', {
                                value: true,
                                writable: false,
                                enumerable: false,
                                configurable: false
                            });
                            return [4 /*yield*/, validate(this.value, rules, __assign(__assign({ name: this.name || this.fieldName }, createLookup(this)), { bails: this.bails, skipIfEmpty: this.skipIfEmpty, isInitial: !this.initialized, customMessages: this.customMessages }))];
                        case 1:
                            result = _a.sent();
                            this.setFlags({
                                pending: false,
                                valid: result.valid,
                                invalid: !result.valid
                            });
                            return [2 /*return*/, result];
                    }
                });
            });
        },
        setErrors: function (errors) {
            this.applyResult({ errors: errors, failedRules: {} });
        },
        applyResult: function (_a) {
            var errors = _a.errors, failedRules = _a.failedRules, regenerateMap = _a.regenerateMap;
            this.errors = errors;
            this._regenerateMap = regenerateMap;
            this.failedRules = __assign({}, (failedRules || {}));
            this.setFlags({
                valid: !errors.length,
                passed: !errors.length,
                invalid: !!errors.length,
                failed: !!errors.length,
                validated: true,
                changed: this.value !== this.initialValue
            });
        },
        registerField: function () {
            updateRenderingContextRefs(this);
        }
    }
});
function computeClassObj(names, flags) {
    var acc = {};
    var keys = Object.keys(flags);
    var length = keys.length;
    var _loop_1 = function (i) {
        var flag = keys[i];
        var className = (names && names[flag]) || flag;
        var value = flags[flag];
        if (isNullOrUndefined(value)) {
            return "continue";
        }
        if ((flag === 'valid' || flag === 'invalid') && !flags.validated) {
            return "continue";
        }
        if (typeof className === 'string') {
            acc[className] = value;
        }
        else if (Array.isArray(className)) {
            className.forEach(function (cls) {
                acc[cls] = value;
            });
        }
    };
    for (var i = 0; i < length; i++) {
        _loop_1(i);
    }
    return acc;
}
function createLookup(vm) {
    var providers = vm.$_veeObserver.refs;
    var reduced = {
        names: {},
        values: {}
    };
    return vm.fieldDeps.reduce(function (acc, depName) {
        if (!providers[depName]) {
            return acc;
        }
        acc.values[depName] = providers[depName].value;
        acc.names[depName] = providers[depName].name;
        return acc;
    }, reduced);
}
function extractId(vm) {
    if (vm.vid) {
        return vm.vid;
    }
    if (vm.name) {
        return vm.name;
    }
    if (vm.id) {
        return vm.id;
    }
    if (vm.fieldName) {
        return vm.fieldName;
    }
    PROVIDER_COUNTER++;
    return "_vee_" + PROVIDER_COUNTER;
}
function updateRenderingContextRefs(vm) {
    var providedId = extractId(vm);
    var id = vm.id;
    // Nothing has changed.
    if (!vm.isActive || (id === providedId && vm.$_veeObserver.refs[id])) {
        return;
    }
    // vid was changed.
    if (id !== providedId && vm.$_veeObserver.refs[id] === vm) {
        vm.$_veeObserver.unobserve(id);
    }
    vm.id = providedId;
    vm.$_veeObserver.observe(vm);
}
function createObserver() {
    return {
        refs: {},
        observe: function (vm) {
            this.refs[vm.id] = vm;
        },
        unobserve: function (id) {
            delete this.refs[id];
        }
    };
}
function watchCrossFieldDep(ctx, depName, withHooks) {
    if (withHooks === void 0) { withHooks = true; }
    var providers = ctx.$_veeObserver.refs;
    if (!ctx._veeWatchers) {
        ctx._veeWatchers = {};
    }
    if (!providers[depName] && withHooks) {
        return ctx.$once('hook:mounted', function () {
            watchCrossFieldDep(ctx, depName, false);
        });
    }
    if (!isCallable(ctx._veeWatchers[depName]) && providers[depName]) {
        ctx._veeWatchers[depName] = providers[depName].$watch('value', function () {
            if (ctx.flags.validated) {
                ctx._needsValidation = true;
                ctx.validate();
            }
        });
    }
}

var FLAGS_STRATEGIES = [
    ['pristine', 'every'],
    ['dirty', 'some'],
    ['touched', 'some'],
    ['untouched', 'every'],
    ['valid', 'every'],
    ['invalid', 'some'],
    ['pending', 'some'],
    ['validated', 'every'],
    ['changed', 'some'],
    ['passed', 'every'],
    ['failed', 'some']
];
var OBSERVER_COUNTER = 0;
function data$1() {
    var refs = {};
    var errors = {};
    var flags = createObserverFlags();
    var fields = {};
    // FIXME: Not sure of this one can be typed, circular type reference.
    var observers = [];
    return {
        id: '',
        refs: refs,
        observers: observers,
        errors: errors,
        flags: flags,
        fields: fields
    };
}
function provideSelf() {
    return {
        $_veeObserver: this
    };
}
var ValidationObserver = vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].extend({
    name: 'ValidationObserver',
    provide: provideSelf,
    inject: {
        $_veeObserver: {
            from: '$_veeObserver',
            default: function () {
                if (!this.$vnode.context.$_veeObserver) {
                    return null;
                }
                return this.$vnode.context.$_veeObserver;
            }
        }
    },
    props: {
        tag: {
            type: String,
            default: 'span'
        },
        vid: {
            type: String,
            default: function () {
                return "obs_" + OBSERVER_COUNTER++;
            }
        },
        slim: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data: data$1,
    created: function () {
        var _this = this;
        this.id = this.vid;
        register(this);
        var onChange = debounce(function (_a) {
            var errors = _a.errors, flags = _a.flags, fields = _a.fields;
            _this.errors = errors;
            _this.flags = flags;
            _this.fields = fields;
        }, 16);
        this.$watch(computeObserverState, onChange);
    },
    activated: function () {
        register(this);
    },
    deactivated: function () {
        unregister(this);
    },
    beforeDestroy: function () {
        unregister(this);
    },
    render: function (h) {
        var children = normalizeChildren(this, prepareSlotProps(this));
        return this.slim && children.length <= 1 ? children[0] : h(this.tag, { on: this.$listeners }, children);
    },
    methods: {
        observe: function (subscriber, kind) {
            var _a;
            if (kind === void 0) { kind = 'provider'; }
            if (kind === 'observer') {
                this.observers.push(subscriber);
                return;
            }
            this.refs = __assign(__assign({}, this.refs), (_a = {}, _a[subscriber.id] = subscriber, _a));
        },
        unobserve: function (id, kind) {
            if (kind === void 0) { kind = 'provider'; }
            if (kind === 'provider') {
                var provider = this.refs[id];
                if (!provider) {
                    return;
                }
                this.$delete(this.refs, id);
                return;
            }
            var idx = findIndex(this.observers, function (o) { return o.id === id; });
            if (idx !== -1) {
                this.observers.splice(idx, 1);
            }
        },
        validate: function (_a) {
            var _b = (_a === void 0 ? {} : _a).silent, silent = _b === void 0 ? false : _b;
            return __awaiter(this, void 0, void 0, function () {
                var results;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, Promise.all(__spreadArrays(values(this.refs)
                                .filter(function (r) { return !r.disabled; })
                                .map(function (ref) { return ref[silent ? 'validateSilent' : 'validate']().then(function (r) { return r.valid; }); }), this.observers.filter(function (o) { return !o.disabled; }).map(function (obs) { return obs.validate({ silent: silent }); })))];
                        case 1:
                            results = _c.sent();
                            return [2 /*return*/, results.every(function (r) { return r; })];
                    }
                });
            });
        },
        handleSubmit: function (cb) {
            return __awaiter(this, void 0, void 0, function () {
                var isValid;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.validate()];
                        case 1:
                            isValid = _a.sent();
                            if (!isValid || !cb) {
                                return [2 /*return*/];
                            }
                            return [2 /*return*/, cb()];
                    }
                });
            });
        },
        reset: function () {
            return __spreadArrays(values(this.refs), this.observers).forEach(function (ref) { return ref.reset(); });
        },
        setErrors: function (errors) {
            var _this = this;
            Object.keys(errors).forEach(function (key) {
                var provider = _this.refs[key];
                if (!provider)
                    return;
                var errorArr = errors[key] || [];
                errorArr = typeof errorArr === 'string' ? [errorArr] : errorArr;
                provider.setErrors(errorArr);
            });
            this.observers.forEach(function (observer) {
                observer.setErrors(errors);
            });
        }
    }
});
function unregister(vm) {
    if (vm.$_veeObserver) {
        vm.$_veeObserver.unobserve(vm.id, 'observer');
    }
}
function register(vm) {
    if (vm.$_veeObserver) {
        vm.$_veeObserver.observe(vm, 'observer');
    }
}
function prepareSlotProps(vm) {
    return __assign(__assign({}, vm.flags), { errors: vm.errors, fields: vm.fields, validate: vm.validate, passes: vm.handleSubmit, handleSubmit: vm.handleSubmit, reset: vm.reset });
}
// Creates a modified version of validation flags
function createObserverFlags() {
    return __assign(__assign({}, createFlags()), { valid: true, invalid: false });
}
function computeObserverState() {
    var vms = __spreadArrays(values(this.refs), this.observers);
    var errors = {};
    var flags = createObserverFlags();
    var fields = {};
    var length = vms.length;
    for (var i = 0; i < length; i++) {
        var vm = vms[i];
        // validation provider
        if (Array.isArray(vm.errors)) {
            errors[vm.id] = vm.errors;
            fields[vm.id] = __assign({ id: vm.id, name: vm.name, failedRules: vm.failedRules }, vm.flags);
            continue;
        }
        // Nested observer, merge errors and fields
        errors = __assign(__assign({}, errors), vm.errors);
        fields = __assign(__assign({}, fields), vm.fields);
    }
    FLAGS_STRATEGIES.forEach(function (_a) {
        var flag = _a[0], method = _a[1];
        flags[flag] = vms[method](function (vm) { return vm.flags[flag]; });
    });
    return { errors: errors, flags: flags, fields: fields };
}

function withValidation(component, mapProps) {
    var _a;
    if (mapProps === void 0) { mapProps = identity; }
    var options = 'options' in component ? component.options : component;
    var providerOpts = ValidationProvider.options;
    var hoc = {
        name: (options.name || 'AnonymousHoc') + "WithValidation",
        props: __assign({}, providerOpts.props),
        data: providerOpts.data,
        computed: __assign({}, providerOpts.computed),
        methods: __assign({}, providerOpts.methods),
        beforeDestroy: providerOpts.beforeDestroy,
        inject: providerOpts.inject
    };
    var eventName = ((_a = options === null || options === void 0 ? void 0 : options.model) === null || _a === void 0 ? void 0 : _a.event) || 'input';
    hoc.render = function (h) {
        var _a;
        this.registerField();
        var vctx = createValidationCtx(this);
        var listeners = __assign({}, this.$listeners);
        var model = findModel(this.$vnode);
        this._inputEventName = this._inputEventName || getInputEventName(this.$vnode, model);
        var value = findValue(this.$vnode);
        onRenderUpdate(this, value === null || value === void 0 ? void 0 : value.value);
        var _b = createCommonHandlers(this), onInput = _b.onInput, onBlur = _b.onBlur, onValidate = _b.onValidate;
        mergeVNodeListeners(listeners, eventName, onInput);
        mergeVNodeListeners(listeners, 'blur', onBlur);
        this.normalizedEvents.forEach(function (evt) {
            mergeVNodeListeners(listeners, evt, onValidate);
        });
        // Props are any attrs not associated with ValidationProvider Plus the model prop.
        // WARNING: Accidental prop overwrite will probably happen.
        var prop = (findModelConfig(this.$vnode) || { prop: 'value' }).prop;
        var props = __assign(__assign(__assign({}, this.$attrs), (_a = {}, _a[prop] = model === null || model === void 0 ? void 0 : model.value, _a)), mapProps(vctx));
        return h(options, {
            attrs: this.$attrs,
            props: props,
            on: listeners
        }, normalizeSlots(this.$slots, this.$vnode.context));
    };
    return hoc;
}

var version = '3.3.7';




/***/ }),

/***/ "8226":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ BFormGroup; });

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/utils/memoize.js
var memoize = __webpack_require__("b508");

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/utils/array.js
var array = __webpack_require__("2326");

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/utils/config.js + 3 modules
var config = __webpack_require__("228e");

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/utils/dom.js
var dom = __webpack_require__("906c");

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/utils/env.js
var env = __webpack_require__("938d");

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/utils/inspect.js + 1 modules
var inspect = __webpack_require__("7b1e");

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/utils/number.js
var number = __webpack_require__("3a58");

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/utils/object.js
var object = __webpack_require__("d82f");

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/utils/string.js
var string = __webpack_require__("fa73");

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/mixins/form-state.js
var form_state = __webpack_require__("d520");

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/mixins/id.js
var mixins_id = __webpack_require__("90ef");

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/mixins/normalize-slot.js + 1 modules
var normalize_slot = __webpack_require__("8c18");

// EXTERNAL MODULE: ./node_modules/vue-functional-data-merge/dist/lib.esm.js
var lib_esm = __webpack_require__("b42e");

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/utils/identity.js
var identity = __webpack_require__("6c06");

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/utils/props.js
var utils_props = __webpack_require__("cf75");

// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/components/layout/col.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var RX_COL_CLASS = /^col-/; // Generates a prop object with a type of `[Boolean, String, Number]`

var boolStrNum = function boolStrNum() {
  return {
    type: [Boolean, String, Number],
    default: false
  };
}; // Generates a prop object with a type of `[String, Number]`


var strNum = function strNum() {
  return {
    type: [String, Number],
    default: null
  };
}; // Compute a breakpoint class name


var col_computeBreakpoint = function computeBreakpoint(type, breakpoint, val) {
  var className = type;

  if (Object(inspect["h" /* isUndefinedOrNull */])(val) || val === false) {
    return undefined;
  }

  if (breakpoint) {
    className += "-".concat(breakpoint);
  } // Handling the boolean style prop when accepting [Boolean, String, Number]
  // means Vue will not convert <b-col sm></b-col> to sm: true for us.
  // Since the default is false, an empty string indicates the prop's presence.


  if (type === 'col' && (val === '' || val === true)) {
    // .col-md
    return Object(string["a" /* lowerCase */])(className);
  } // .order-md-6


  className += "-".concat(val);
  return Object(string["a" /* lowerCase */])(className);
}; // Memoized function for better performance on generating class names


var computeBreakpointClass = Object(memoize["a" /* default */])(col_computeBreakpoint); // Cached copy of the breakpoint prop names

var breakpointPropMap = Object(object["c" /* create */])(null); // Lazy evaled props factory for BCol

var col_generateProps = function generateProps() {
  // Grab the breakpoints from the cached config (exclude the '' (xs) breakpoint)
  var breakpoints = Object(config["b" /* getBreakpointsUpCached */])().filter(identity["a" /* default */]); // Supports classes like: .col-sm, .col-md-6, .col-lg-auto

  var breakpointCol = breakpoints.reduce(function (propMap, breakpoint) {
    if (breakpoint) {
      // We filter out the '' breakpoint (xs), as making a prop name ''
      // would not work. The `cols` prop is used for `xs`
      propMap[breakpoint] = boolStrNum();
    }

    return propMap;
  }, Object(object["c" /* create */])(null)); // Supports classes like: .offset-md-1, .offset-lg-12

  var breakpointOffset = breakpoints.reduce(function (propMap, breakpoint) {
    propMap[Object(utils_props["b" /* suffixPropName */])(breakpoint, 'offset')] = strNum();
    return propMap;
  }, Object(object["c" /* create */])(null)); // Supports classes like: .order-md-1, .order-lg-12

  var breakpointOrder = breakpoints.reduce(function (propMap, breakpoint) {
    propMap[Object(utils_props["b" /* suffixPropName */])(breakpoint, 'order')] = strNum();
    return propMap;
  }, Object(object["c" /* create */])(null)); // For loop doesn't need to check hasOwnProperty
  // when using an object created from null

  breakpointPropMap = Object(object["a" /* assign */])(Object(object["c" /* create */])(null), {
    col: Object(object["k" /* keys */])(breakpointCol),
    offset: Object(object["k" /* keys */])(breakpointOffset),
    order: Object(object["k" /* keys */])(breakpointOrder)
  }); // Return the generated props

  return _objectSpread(_objectSpread(_objectSpread(_objectSpread({
    // Generic flexbox .col (xs)
    col: {
      type: Boolean,
      default: false
    },
    // .col-[1-12]|auto  (xs)
    cols: strNum()
  }, breakpointCol), {}, {
    offset: strNum()
  }, breakpointOffset), {}, {
    order: strNum()
  }, breakpointOrder), {}, {
    // Flex alignment
    alignSelf: {
      type: String,
      default: null,
      validator: function validator(str) {
        return Object(array["a" /* arrayIncludes */])(['auto', 'start', 'end', 'center', 'baseline', 'stretch'], str);
      }
    },
    tag: {
      type: String,
      default: 'div'
    }
  });
}; // We do not use Vue.extend here as that would evaluate the props
// immediately, which we do not want to happen
// @vue/component


var BCol = {
  name: 'BCol',
  functional: true,

  get props() {
    // Allow props to be lazy evaled on first access and
    // then they become a non-getter afterwards.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get#Smart_self-overwriting_lazy_getters
    delete this.props; // eslint-disable-next-line no-return-assign

    return this.props = col_generateProps();
  },

  render: function render(h, _ref) {
    var _classList$push;

    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var classList = []; // Loop through `col`, `offset`, `order` breakpoint props

    for (var type in breakpointPropMap) {
      // Returns colSm, offset, offsetSm, orderMd, etc.
      var _keys = breakpointPropMap[type];

      for (var i = 0; i < _keys.length; i++) {
        // computeBreakpoint(col, colSm => Sm, value=[String, Number, Boolean])
        var c = computeBreakpointClass(type, _keys[i].replace(type, ''), props[_keys[i]]); // If a class is returned, push it onto the array.

        if (c) {
          classList.push(c);
        }
      }
    }

    var hasColClasses = classList.some(function (className) {
      return RX_COL_CLASS.test(className);
    });
    classList.push((_classList$push = {
      // Default to .col if no other col-{bp}-* classes generated nor `cols` specified.
      col: props.col || !hasColClasses && !props.cols
    }, _defineProperty(_classList$push, "col-".concat(props.cols), props.cols), _defineProperty(_classList$push, "offset-".concat(props.offset), props.offset), _defineProperty(_classList$push, "order-".concat(props.order), props.order), _defineProperty(_classList$push, "align-self-".concat(props.alignSelf), props.alignSelf), _classList$push));
    return h(props.tag, Object(lib_esm["a" /* mergeData */])(data, {
      class: classList
    }), children);
  }
};
// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/utils/vue.js
var vue = __webpack_require__("dcb3");

// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/components/layout/form-row.js


var form_row_props = {
  tag: {
    type: String,
    default: 'div'
  }
}; // @vue/component

var BFormRow = /*#__PURE__*/vue["a" /* default */].extend({
  name: 'BFormRow',
  functional: true,
  props: form_row_props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, Object(lib_esm["a" /* mergeData */])(data, {
      staticClass: 'form-row'
    }), children);
  }
});
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/components/form/form-text.js
function form_text_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var NAME = 'BFormText';
var form_text_props = {
  id: {
    type: String // default: null

  },
  tag: {
    type: String,
    default: 'small'
  },
  textVariant: {
    type: String,
    default: function _default() {
      return Object(config["c" /* getComponentConfig */])(NAME, 'textVariant');
    }
  },
  inline: {
    type: Boolean,
    default: false
  }
}; // @vue/component

var BFormText = /*#__PURE__*/vue["a" /* default */].extend({
  name: NAME,
  functional: true,
  props: form_text_props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, Object(lib_esm["a" /* mergeData */])(data, {
      class: form_text_defineProperty({
        'form-text': !props.inline
      }, "text-".concat(props.textVariant), props.textVariant),
      attrs: {
        id: props.id
      }
    }), children);
  }
});
// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/components/form/form-invalid-feedback.js
var form_invalid_feedback = __webpack_require__("3010");

// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/components/form/form-valid-feedback.js


var form_valid_feedback_props = {
  id: {
    type: String // default: null

  },
  tag: {
    type: String,
    default: 'div'
  },
  tooltip: {
    type: Boolean,
    default: false
  },
  forceShow: {
    type: Boolean,
    default: false
  },
  state: {
    // Tri-state prop: `true`, `false`, or `null`
    type: Boolean,
    default: null
  },
  ariaLive: {
    type: String // default: null

  },
  role: {
    type: String // default: null

  }
}; // @vue/component

var BFormValidFeedback = /*#__PURE__*/vue["a" /* default */].extend({
  name: 'BFormValidFeedback',
  functional: true,
  props: form_valid_feedback_props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var show = props.forceShow === true || props.state === true;
    return h(props.tag, Object(lib_esm["a" /* mergeData */])(data, {
      class: {
        'valid-feedback': !props.tooltip,
        'valid-tooltip': props.tooltip,
        'd-block': show
      },
      attrs: {
        id: props.id || null,
        role: props.role || null,
        'aria-live': props.ariaLive || null,
        'aria-atomic': props.ariaLive ? 'true' : null
      }
    }), children);
  }
});
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/components/form-group/form-group.js
function form_group_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function form_group_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { form_group_ownKeys(Object(source), true).forEach(function (key) { form_group_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { form_group_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function form_group_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















 // --- Constants ---
// Component name

var form_group_NAME = 'BFormGroup'; // Selector for finding first input in the form-group

var SELECTOR = 'input:not([disabled]),textarea:not([disabled]),select:not([disabled])'; // --- Render methods ---

var form_group_renderInvalidFeedback = function renderInvalidFeedback(h, ctx) {
  var content = ctx.normalizeSlot('invalid-feedback') || ctx.invalidFeedback;
  var invalidFeedback = h();

  if (content) {
    invalidFeedback = h(form_invalid_feedback["a" /* BFormInvalidFeedback */], {
      props: {
        id: ctx.invalidFeedbackId,
        // If state is explicitly false, always show the feedback
        state: ctx.computedState,
        tooltip: ctx.tooltip,
        ariaLive: ctx.feedbackAriaLive,
        role: ctx.feedbackAriaLive ? 'alert' : null
      },
      attrs: {
        tabindex: content ? '-1' : null
      }
    }, [content]);
  }

  return invalidFeedback;
};

var form_group_renderValidFeedback = function renderValidFeedback(h, ctx) {
  var content = ctx.normalizeSlot('valid-feedback') || ctx.validFeedback;
  var validFeedback = h();

  if (content) {
    validFeedback = h(BFormValidFeedback, {
      props: {
        id: ctx.validFeedbackId,
        // If state is explicitly true, always show the feedback
        state: ctx.computedState,
        tooltip: ctx.tooltip,
        ariaLive: ctx.feedbackAriaLive,
        role: ctx.feedbackAriaLive ? 'alert' : null
      },
      attrs: {
        tabindex: content ? '-1' : null
      }
    }, [content]);
  }

  return validFeedback;
};

var form_group_renderHelpText = function renderHelpText(h, ctx) {
  // Form help text (description)
  var content = ctx.normalizeSlot('description') || ctx.description;
  var description = h();

  if (content) {
    description = h(BFormText, {
      attrs: {
        id: ctx.descriptionId,
        tabindex: content ? '-1' : null
      }
    }, [content]);
  }

  return description;
};

var form_group_renderLabel = function renderLabel(h, ctx) {
  // Render label/legend inside b-col if necessary
  var content = ctx.normalizeSlot('label') || ctx.label;
  var labelFor = ctx.labelFor;
  var isLegend = !labelFor;
  var isHorizontal = ctx.isHorizontal;
  var labelTag = isLegend ? 'legend' : 'label';

  if (!content && !isHorizontal) {
    return h();
  } else if (ctx.labelSrOnly) {
    var label = h();

    if (content) {
      label = h(labelTag, {
        class: 'sr-only',
        attrs: {
          id: ctx.labelId,
          for: labelFor || null
        }
      }, [content]);
    }

    return h(isHorizontal ? BCol : 'div', {
      props: isHorizontal ? ctx.labelColProps : {}
    }, [label]);
  } else {
    return h(isHorizontal ? BCol : labelTag, {
      on: isLegend ? {
        click: ctx.legendClick
      } : {},
      props: isHorizontal ? form_group_objectSpread({
        tag: labelTag
      }, ctx.labelColProps) : {},
      attrs: {
        id: ctx.labelId,
        for: labelFor || null,
        // We add a tab index to legend so that screen readers
        // will properly read the aria-labelledby in IE.
        tabindex: isLegend ? '-1' : null
      },
      class: [// Hide the focus ring on the legend
      isLegend ? 'bv-no-focus-ring' : '', // When horizontal or if a legend is rendered, add col-form-label
      // for correct sizing as Bootstrap has inconsistent font styling
      // for legend in non-horizontal form-groups.
      // See: https://github.com/twbs/bootstrap/issues/27805
      isHorizontal || isLegend ? 'col-form-label' : '', // Emulate label padding top of 0 on legend when not horizontal
      !isHorizontal && isLegend ? 'pt-0' : '', // If not horizontal and not a legend, we add d-block to label
      // so that label-align works
      !isHorizontal && !isLegend ? 'd-block' : '', ctx.labelSize ? "col-form-label-".concat(ctx.labelSize) : '', ctx.labelAlignClasses, ctx.labelClass]
    }, [content]);
  }
}; // -- BFormGroup Prop factory -- used for lazy generation of props
// Memoize this function to return cached values to
// save time in computed functions


var makePropName = Object(memoize["a" /* default */])(function () {
  var breakpoint = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var prefix = arguments.length > 1 ? arguments[1] : undefined;
  return "".concat(prefix).concat(Object(string["d" /* upperFirst */])(breakpoint));
}); // BFormGroup prop generator for lazy generation of props

var form_group_generateProps = function generateProps() {
  var BREAKPOINTS = Object(config["b" /* getBreakpointsUpCached */])(); // Generate the labelCol breakpoint props

  var bpLabelColProps = BREAKPOINTS.reduce(function (props, breakpoint) {
    // i.e. label-cols, label-cols-sm, label-cols-md, ...
    props[makePropName(breakpoint, 'labelCols')] = {
      type: [Number, String, Boolean],
      default: breakpoint ? false : null
    };
    return props;
  }, Object(object["c" /* create */])(null)); // Generate the labelAlign breakpoint props

  var bpLabelAlignProps = BREAKPOINTS.reduce(function (props, breakpoint) {
    // label-align, label-align-sm, label-align-md, ...
    props[makePropName(breakpoint, 'labelAlign')] = {
      type: String // left, right, center
      // default: null

    };
    return props;
  }, Object(object["c" /* create */])(null));
  return form_group_objectSpread(form_group_objectSpread(form_group_objectSpread({
    label: {
      type: String // default: null

    },
    labelFor: {
      type: String // default: null

    },
    labelSize: {
      type: String // default: null

    },
    labelSrOnly: {
      type: Boolean,
      default: false
    }
  }, bpLabelColProps), bpLabelAlignProps), {}, {
    labelClass: {
      type: [String, Array, Object] // default: null

    },
    description: {
      type: String // default: null

    },
    invalidFeedback: {
      type: String // default: null

    },
    validFeedback: {
      type: String // default: null

    },
    tooltip: {
      // Enable tooltip style feedback
      type: Boolean,
      default: false
    },
    feedbackAriaLive: {
      type: String,
      default: 'assertive'
    },
    validated: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  });
}; // We do not use Vue.extend here as that would evaluate the props
// immediately, which we do not want to happen
// @vue/component


var BFormGroup = {
  name: form_group_NAME,
  mixins: [mixins_id["a" /* default */], form_state["a" /* default */], normalize_slot["a" /* default */]],

  get props() {
    // Allow props to be lazy evaled on first access and
    // then they become a non-getter afterwards.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get#Smart_self-overwriting_lazy_getters
    delete this.props; // eslint-disable-next-line no-return-assign

    return this.props = form_group_generateProps();
  },

  computed: {
    labelColProps: function labelColProps() {
      var _this = this;

      var props = {};
      Object(config["b" /* getBreakpointsUpCached */])().forEach(function (breakpoint) {
        // Grab the value if the label column breakpoint prop
        var propVal = _this[makePropName(breakpoint, 'labelCols')]; // Handle case where the prop's value is an empty string,
        // which represents true


        propVal = propVal === '' ? true : propVal || false;

        if (!Object(inspect["a" /* isBoolean */])(propVal) && propVal !== 'auto') {
          // Convert to column size to number
          propVal = Object(number["b" /* toInteger */])(propVal, 0); // Ensure column size is greater than 0

          propVal = propVal > 0 ? propVal : false;
        }

        if (propVal) {
          // Add the prop to the list of props to give to b-col
          // If breakpoint is '' (labelCols=true), then we use the
          // col prop to make equal width at xs
          var bColPropName = breakpoint || (Object(inspect["a" /* isBoolean */])(propVal) ? 'col' : 'cols'); // Add it to the props

          props[bColPropName] = propVal;
        }
      });
      return props;
    },
    labelAlignClasses: function labelAlignClasses() {
      var _this2 = this;

      var classes = [];
      Object(config["b" /* getBreakpointsUpCached */])().forEach(function (breakpoint) {
        // Assemble the label column breakpoint align classes
        var propVal = _this2[makePropName(breakpoint, 'labelAlign')] || null;

        if (propVal) {
          var className = breakpoint ? "text-".concat(breakpoint, "-").concat(propVal) : "text-".concat(propVal);
          classes.push(className);
        }
      });
      return classes;
    },
    isHorizontal: function isHorizontal() {
      // Determine if the resultant form-group will be rendered
      // horizontal (meaning it has label-col breakpoints)
      return Object(object["k" /* keys */])(this.labelColProps).length > 0;
    },
    labelId: function labelId() {
      return this.hasNormalizedSlot('label') || this.label ? this.safeId('_BV_label_') : null;
    },
    descriptionId: function descriptionId() {
      return this.hasNormalizedSlot('description') || this.description ? this.safeId('_BV_description_') : null;
    },
    hasInvalidFeedback: function hasInvalidFeedback() {
      // Used for computing aria-describedby
      return this.computedState === false && (this.hasNormalizedSlot('invalid-feedback') || this.invalidFeedback);
    },
    invalidFeedbackId: function invalidFeedbackId() {
      return this.hasInvalidFeedback ? this.safeId('_BV_feedback_invalid_') : null;
    },
    hasValidFeedback: function hasValidFeedback() {
      // Used for computing aria-describedby
      return this.computedState === true && (this.hasNormalizedSlot('valid-feedback') || this.validFeedback);
    },
    validFeedbackId: function validFeedbackId() {
      return this.hasValidFeedback ? this.safeId('_BV_feedback_valid_') : null;
    },
    describedByIds: function describedByIds() {
      // Screen readers will read out any content linked to by aria-describedby
      // even if the content is hidden with `display: none;`, hence we only include
      // feedback IDs if the form-group's state is explicitly valid or invalid.
      return [this.descriptionId, this.invalidFeedbackId, this.validFeedbackId].filter(Boolean).join(' ') || null;
    }
  },
  watch: {
    describedByIds: function describedByIds(add, remove) {
      if (add !== remove) {
        this.setInputDescribedBy(add, remove);
      }
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    this.$nextTick(function () {
      // Set the aria-describedby IDs on the input specified by label-for
      // We do this in a nextTick to ensure the children have finished rendering
      _this3.setInputDescribedBy(_this3.describedByIds);
    });
  },
  methods: {
    legendClick: function legendClick(evt) {
      if (this.labelFor) {
        // Don't do anything if labelFor is set

        /* istanbul ignore next: clicking a label will focus the input, so no need to test */
        return;
      }

      var tagName = evt.target ? evt.target.tagName : '';

      if (/^(input|select|textarea|label|button|a)$/i.test(tagName)) {
        // If clicked an interactive element inside legend,
        // we just let the default happen

        /* istanbul ignore next */
        return;
      }

      var inputs = Object(dom["n" /* selectAll */])(SELECTOR, this.$refs.content).filter(dom["h" /* isVisible */]); // If only a single input, focus it, emulating label behaviour

      if (inputs && inputs.length === 1) {
        Object(dom["d" /* attemptFocus */])(inputs[0]);
      }
    },
    setInputDescribedBy: function setInputDescribedBy(add, remove) {
      // Sets the `aria-describedby` attribute on the input if label-for is set.
      // Optionally accepts a string of IDs to remove as the second parameter.
      // Preserves any aria-describedby value(s) user may have on input.
      if (this.labelFor && env["g" /* isBrowser */]) {
        var input = Object(dom["m" /* select */])("#".concat(this.labelFor), this.$refs.content);

        if (input) {
          var adb = 'aria-describedby';
          var ids = (Object(dom["e" /* getAttr */])(input, adb) || '').split(/\s+/);
          add = (add || '').split(/\s+/);
          remove = (remove || '').split(/\s+/); // Update ID list, preserving any original IDs
          // and ensuring the ID's are unique

          ids = ids.filter(function (id) {
            return !Object(array["a" /* arrayIncludes */])(remove, id);
          }).concat(add).filter(Boolean);
          ids = Object(object["k" /* keys */])(ids.reduce(function (memo, id) {
            return form_group_objectSpread(form_group_objectSpread({}, memo), {}, form_group_defineProperty({}, id, true));
          }, {})).join(' ').trim();

          if (ids) {
            Object(dom["o" /* setAttr */])(input, adb, ids);
          } else {
            // No IDs, so remove the attribute
            Object(dom["j" /* removeAttr */])(input, adb);
          }
        }
      }
    }
  },
  render: function render(h) {
    var isFieldset = !this.labelFor;
    var isHorizontal = this.isHorizontal; // Generate the label

    var label = form_group_renderLabel(h, this); // Generate the content

    var content = h(isHorizontal ? BCol : 'div', {
      ref: 'content',
      // Hide focus ring
      staticClass: 'bv-no-focus-ring',
      attrs: {
        tabindex: isFieldset ? '-1' : null,
        role: isFieldset ? 'group' : null
      }
    }, [this.normalizeSlot('default') || h(), form_group_renderInvalidFeedback(h, this), form_group_renderValidFeedback(h, this), form_group_renderHelpText(h, this)]); // Create the form-group

    var data = {
      staticClass: 'form-group',
      class: [this.validated ? 'was-validated' : null, this.stateClass],
      attrs: {
        id: this.safeId(),
        disabled: isFieldset ? this.disabled : null,
        role: isFieldset ? null : 'group',
        'aria-invalid': this.computedState === false ? 'true' : null,
        // Only apply aria-labelledby if we are a horizontal fieldset
        // as the legend is no longer a direct child of fieldset
        'aria-labelledby': isFieldset && isHorizontal ? this.labelId : null,
        // Only apply aria-describedby IDs if we are a fieldset
        // as the input will have the IDs when not a fieldset
        'aria-describedby': isFieldset ? this.describedByIds : null
      }
    }; // Return it wrapped in a form-group
    // Note: Fieldsets do not support adding `row` or `form-row` directly
    // to them due to browser specific render issues, so we move the `form-row`
    // to an inner wrapper div when horizontal and using a fieldset

    return h(isFieldset ? 'fieldset' : isHorizontal ? BFormRow : 'div', data, isHorizontal && isFieldset ? [h(BFormRow, [label, content])] : [label, content]);
  }
};

/***/ }),

/***/ "8f77":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export props */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BNavbarBrand; });
/* harmony import */ var vue_functional_data_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b42e");
/* harmony import */ var _utils_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dcb3");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("d82f");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cf75");
/* harmony import */ var _link_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("aa59");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // --- Props ---

var linkProps = Object(_utils_object__WEBPACK_IMPORTED_MODULE_2__[/* omit */ "l"])(_link_link__WEBPACK_IMPORTED_MODULE_4__[/* props */ "b"], ['event', 'routerTag']);
linkProps.href.default = undefined;
linkProps.to.default = undefined;
var props = _objectSpread({
  tag: {
    type: String,
    default: 'div'
  }
}, linkProps); // --- Main component ---
// @vue/component

var BNavbarBrand = /*#__PURE__*/_utils_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].extend({
  name: 'BNavbarBrand',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var isLink = props.to || props.href;
    var tag = isLink ? _link_link__WEBPACK_IMPORTED_MODULE_4__[/* BLink */ "a"] : props.tag;
    return h(tag, Object(vue_functional_data_merge__WEBPACK_IMPORTED_MODULE_0__[/* mergeData */ "a"])(data, {
      staticClass: 'navbar-brand',
      props: isLink ? Object(_utils_props__WEBPACK_IMPORTED_MODULE_3__[/* pluckProps */ "a"])(linkProps, props) : {}
    }), children);
  }
});

/***/ }),

/***/ "90ef":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// SSR safe client-side ID attribute generation
// ID's can only be generated client-side, after mount
// `this._uid` is not synched between server and client
// @vue/component
/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    id: {
      type: String // default: null

    }
  },
  data: function data() {
    return {
      localId_: null
    };
  },
  computed: {
    safeId: function safeId() {
      // Computed property that returns a dynamic function for creating the ID
      // Reacts to changes in both `.id` and `.localId_` and regenerates a new function
      var id = this.id || this.localId_; // We return a function that accepts an optional suffix string
      // So this computed prop looks and works like a method
      // but benefits from Vue's computed prop caching

      var fn = function fn(suffix) {
        if (!id) {
          return null;
        }

        suffix = String(suffix || '').replace(/\s+/g, '_');
        return suffix ? id + '_' + suffix : id;
      };

      return fn;
    }
  },
  mounted: function mounted() {
    var _this = this;

    // `mounted()` only occurs client-side
    this.$nextTick(function () {
      // Update DOM with auto-generated ID after mount
      // to prevent SSR hydration errors
      _this.localId_ = "__BVID__".concat(_this._uid);
    });
  }
});

/***/ }),

/***/ "a8c8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export mathMin */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mathMax; });
/* unused harmony export mathAbs */
/* unused harmony export mathCeil */
/* unused harmony export mathFloor */
/* unused harmony export mathPow */
/* unused harmony export mathRound */
// Math utilty functions
var mathMin = Math.min;
var mathMax = Math.max;
var mathAbs = Math.abs;
var mathCeil = Math.ceil;
var mathFloor = Math.floor;
var mathPow = Math.pow;
var mathRound = Math.round;

/***/ }),

/***/ "d0b9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export props */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BNavbar; });
/* harmony import */ var _utils_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dcb3");
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("228e");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("906c");
/* harmony import */ var _utils_inspect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("7b1e");
/* harmony import */ var _mixins_normalize_slot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("8c18");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // --- Constants ---

var NAME = 'BNavbar'; // --- Props ---

var props = {
  tag: {
    type: String,
    default: 'nav'
  },
  type: {
    type: String,
    default: 'light'
  },
  variant: {
    type: String,
    default: function _default() {
      return Object(_utils_config__WEBPACK_IMPORTED_MODULE_1__[/* getComponentConfig */ "c"])(NAME, 'variant');
    }
  },
  toggleable: {
    type: [Boolean, String],
    default: false
  },
  fixed: {
    type: String
  },
  sticky: {
    type: Boolean,
    default: false
  },
  print: {
    type: Boolean,
    default: false
  }
}; // --- Main component ---
// @vue/component

var BNavbar = /*#__PURE__*/_utils_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].extend({
  name: NAME,
  mixins: [_mixins_normalize_slot__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]],
  props: props,
  provide: function provide() {
    return {
      bvNavbar: this
    };
  },
  computed: {
    breakpointClass: function breakpointClass() {
      var breakpoint = null;
      var xs = Object(_utils_config__WEBPACK_IMPORTED_MODULE_1__[/* getBreakpoints */ "a"])()[0];
      var toggleable = this.toggleable;

      if (toggleable && Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_3__[/* isString */ "f"])(toggleable) && toggleable !== xs) {
        breakpoint = "navbar-expand-".concat(toggleable);
      } else if (toggleable === false) {
        breakpoint = 'navbar-expand';
      }

      return breakpoint;
    }
  },
  render: function render(h) {
    var _ref;

    return h(this.tag, {
      staticClass: 'navbar',
      class: [(_ref = {
        'd-print': this.print,
        'sticky-top': this.sticky
      }, _defineProperty(_ref, "navbar-".concat(this.type), this.type), _defineProperty(_ref, "bg-".concat(this.variant), this.variant), _defineProperty(_ref, "fixed-".concat(this.fixed), this.fixed), _ref), this.breakpointClass],
      attrs: {
        role: Object(_utils_dom__WEBPACK_IMPORTED_MODULE_2__[/* isTag */ "g"])(this.tag, 'nav') ? null : 'navigation'
      }
    }, [this.normalizeSlot('default')]);
  }
});

/***/ }),

/***/ "d520":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_inspect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7b1e");
/* Form control contextual state class computation
 *
 * Returned class is either 'is-valid' or 'is-invalid' based on the 'state' prop
 * state can be one of five values:
 *  - true for is-valid
 *  - false for is-invalid
 *  - null for no contextual state
 */
 // @vue/component

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    state: {
      // Tri-state prop: true, false, null (or undefined)
      type: Boolean,
      default: null
    }
  },
  computed: {
    computedState: function computedState() {
      // If not a boolean, ensure that value is null
      return Object(_utils_inspect__WEBPACK_IMPORTED_MODULE_0__[/* isBoolean */ "a"])(this.state) ? this.state : null;
    },
    stateClass: function stateClass() {
      var state = this.computedState;
      return state === true ? 'is-valid' : state === false ? 'is-invalid' : null;
    }
  }
});

/***/ }),

/***/ "f902":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ BTabs; });

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/utils/vue.js
var vue = __webpack_require__("dcb3");

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/utils/identity.js
var identity = __webpack_require__("6c06");

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/utils/key-codes.js
var key_codes = __webpack_require__("01e7");

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/utils/object.js
var object = __webpack_require__("d82f");

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/utils/inspect.js + 1 modules
var inspect = __webpack_require__("7b1e");

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/utils/array.js
var array = __webpack_require__("2326");

// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/utils/loose-equal.js

 // Assumes both a and b are arrays!
// Handles when arrays are "sparse" (array.every(...) doesn't handle sparse)

var compareArrays = function compareArrays(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  var equal = true;

  for (var i = 0; equal && i < a.length; i++) {
    equal = loose_equal_looseEqual(a[i], b[i]);
  }

  return equal;
};
/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 * Returns boolean true or false
 */


var loose_equal_looseEqual = function looseEqual(a, b) {
  if (a === b) {
    return true;
  }

  var aValidType = Object(inspect["b" /* isDate */])(a);
  var bValidType = Object(inspect["b" /* isDate */])(b);

  if (aValidType || bValidType) {
    return aValidType && bValidType ? a.getTime() === b.getTime() : false;
  }

  aValidType = Object(array["d" /* isArray */])(a);
  bValidType = Object(array["d" /* isArray */])(b);

  if (aValidType || bValidType) {
    return aValidType && bValidType ? compareArrays(a, b) : false;
  }

  aValidType = Object(object["i" /* isObject */])(a);
  bValidType = Object(object["i" /* isObject */])(b);

  if (aValidType || bValidType) {
    /* istanbul ignore if: this if will probably never be called */
    if (!aValidType || !bValidType) {
      return false;
    }

    var aKeysCount = Object(object["k" /* keys */])(a).length;
    var bKeysCount = Object(object["k" /* keys */])(b).length;

    if (aKeysCount !== bKeysCount) {
      return false;
    }

    for (var key in a) {
      // eslint-disable-next-line no-prototype-builtins
      var aHasKey = a.hasOwnProperty(key); // eslint-disable-next-line no-prototype-builtins

      var bHasKey = b.hasOwnProperty(key);

      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
        return false;
      }
    }
  }

  return String(a) === String(b);
};

/* harmony default export */ var loose_equal = (loose_equal_looseEqual);
// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/utils/dom.js
var dom = __webpack_require__("906c");

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/utils/env.js
var env = __webpack_require__("938d");

// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/utils/warn.js

/**
 * Log a warning message to the console with BootstrapVue formatting
 * @param {string} message
 */

var warn_warn = function warn(message)
/* istanbul ignore next */
{
  var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (!Object(env["a" /* getNoWarn */])()) {
    console.warn("[BootstrapVue warn]: ".concat(source ? "".concat(source, " - ") : '').concat(message));
  }
};
/**
 * Warn when no Promise support is given
 * @param {string} source
 * @returns {boolean} warned
 */

var warn_warnNotClient = function warnNotClient(source) {
  /* istanbul ignore else */
  if (env["g" /* isBrowser */]) {
    return false;
  } else {
    warn_warn("".concat(source, ": Can not be called during SSR."));
    return true;
  }
};
/**
 * Warn when no Promise support is given
 * @param {string} source
 * @returns {boolean} warned
 */

var warn_warnNoPromiseSupport = function warnNoPromiseSupport(source) {
  /* istanbul ignore else */
  if (env["e" /* hasPromiseSupport */]) {
    return false;
  } else {
    warn_warn("".concat(source, ": Requires Promise support."));
    return true;
  }
};
/**
 * Warn when no MutationObserver support is given
 * @param {string} source
 * @returns {boolean} warned
 */

var warn_warnNoMutationObserverSupport = function warnNoMutationObserverSupport(source) {
  /* istanbul ignore else */
  if (env["c" /* hasMutationObserverSupport */]) {
    return false;
  } else {
    warn_warn("".concat(source, ": Requires MutationObserver support."));
    return true;
  }
};
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/utils/observe-dom.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * Observe a DOM element changes, falls back to eventListener mode
 * @param {Element} el The DOM element to observe
 * @param {Function} callback callback to be called on change
 * @param {object} [options={childList: true, subtree: true}] observe options
 * @see https://stackoverflow.com/questions/3219758
 */

var observe_dom_observeDom = function observeDom(el, callback, options)
/* istanbul ignore next: difficult to test in JSDOM */
{
  // Handle cases where we might be passed a Vue instance
  el = el ? el.$el || el : null; // Early exit when we have no element

  /* istanbul ignore next: difficult to test in JSDOM */

  if (!Object(dom["f" /* isElement */])(el)) {
    return null;
  } // Exit and throw a warning when `MutationObserver` isn't available


  if (warn_warnNoMutationObserverSupport('observeDom')) {
    return null;
  } // Define a new observer


  var obs = new dom["a" /* MutationObs */](function (mutations) {
    var changed = false; // A mutation can contain several change records, so we loop
    // through them to see what has changed
    // We break out of the loop early if any "significant" change
    // has been detected

    for (var i = 0; i < mutations.length && !changed; i++) {
      // The mutation record
      var mutation = mutations[i]; // Mutation type

      var type = mutation.type; // DOM node (could be any DOM node type - HTMLElement, Text, comment, etc.)

      var target = mutation.target; // Detect whether a change happened based on type and target

      if (type === 'characterData' && target.nodeType === Node.TEXT_NODE) {
        // We ignore nodes that are not TEXT (i.e. comments, etc)
        // as they don't change layout
        changed = true;
      } else if (type === 'attributes') {
        changed = true;
      } else if (type === 'childList' && (mutation.addedNodes.length > 0 || mutation.removedNodes.length > 0)) {
        // This includes HTMLElement and text nodes being
        // added/removed/re-arranged
        changed = true;
      }
    } // We only call the callback if a change that could affect
    // layout/size truly happened


    if (changed) {
      callback();
    }
  }); // Have the observer observe foo for changes in children, etc

  obs.observe(el, _objectSpread({
    childList: true,
    subtree: true
  }, options)); // We return a reference to the observer so that `obs.disconnect()`
  // can be called if necessary
  // To reduce overhead when the root element is hidden

  return obs;
};

/* harmony default export */ var observe_dom = (observe_dom_observeDom);
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/utils/stable-sort.js
/*
 * Consistent and stable sort function across JavaScript platforms
 *
 * Inconsistent sorts can cause SSR problems between client and server
 * such as in <b-table> if sortBy is applied to the data on server side render.
 * Chrome and V8 native sorts are inconsistent/unstable
 *
 * This function uses native sort with fallback to index compare when the a and b
 * compare returns 0
 *
 * Algorithm based on:
 * https://stackoverflow.com/questions/1427608/fast-stable-sorting-algorithm-implementation-in-javascript/45422645#45422645
 *
 * @param {array} array to sort
 * @param {function} sort compare function
 * @return {array}
 */
var stableSort = function stableSort(array, compareFn) {
  // Using `.bind(compareFn)` on the wrapped anonymous function improves
  // performance by avoiding the function call setup. We don't use an arrow
  // function here as it binds `this` to the `stableSort` context rather than
  // the `compareFn` context, which wouldn't give us the performance increase.
  return array.map(function (a, index) {
    return [index, a];
  }).sort(function (a, b) {
    return this(a[1], b[1]) || a[0] - b[0];
  }.bind(compareFn)).map(function (e) {
    return e[1];
  });
};

/* harmony default export */ var stable_sort = (stableSort);
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/utils/bv-event.class.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var bv_event_class_BvEvent = /*#__PURE__*/function () {
  function BvEvent(type) {
    var eventInit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, BvEvent);

    // Start by emulating native Event constructor
    if (!type) {
      /* istanbul ignore next */
      throw new TypeError("Failed to construct '".concat(this.constructor.name, "'. 1 argument required, ").concat(arguments.length, " given."));
    } // Merge defaults first, the eventInit, and the type last
    // so it can't be overwritten


    Object(object["a" /* assign */])(this, BvEvent.Defaults, this.constructor.Defaults, eventInit, {
      type: type
    }); // Freeze some props as readonly, but leave them enumerable

    Object(object["e" /* defineProperties */])(this, {
      type: Object(object["m" /* readonlyDescriptor */])(),
      cancelable: Object(object["m" /* readonlyDescriptor */])(),
      nativeEvent: Object(object["m" /* readonlyDescriptor */])(),
      target: Object(object["m" /* readonlyDescriptor */])(),
      relatedTarget: Object(object["m" /* readonlyDescriptor */])(),
      vueTarget: Object(object["m" /* readonlyDescriptor */])(),
      componentId: Object(object["m" /* readonlyDescriptor */])()
    }); // Create a private variable using closure scoping

    var defaultPrevented = false; // Recreate preventDefault method. One way setter

    this.preventDefault = function preventDefault() {
      if (this.cancelable) {
        defaultPrevented = true;
      }
    }; // Create `defaultPrevented` publicly accessible prop that
    // can only be altered by the preventDefault method


    Object(object["f" /* defineProperty */])(this, 'defaultPrevented', {
      enumerable: true,
      get: function get() {
        return defaultPrevented;
      }
    });
  }

  _createClass(BvEvent, null, [{
    key: "Defaults",
    get: function get() {
      return {
        type: '',
        cancelable: true,
        nativeEvent: null,
        target: null,
        relatedTarget: null,
        vueTarget: null,
        componentId: null
      };
    }
  }]);

  return BvEvent;
}(); // Named Exports



// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/utils/math.js
var math = __webpack_require__("a8c8");

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/utils/number.js
var number = __webpack_require__("3a58");

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/mixins/id.js
var id = __webpack_require__("90ef");

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/mixins/normalize-slot.js + 1 modules
var normalize_slot = __webpack_require__("8c18");

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/components/link/link.js + 1 modules
var link_link = __webpack_require__("aa59");

// EXTERNAL MODULE: ./node_modules/vue-functional-data-merge/dist/lib.esm.js
var lib_esm = __webpack_require__("b42e");

// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/components/nav/nav.js
function nav_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // -- Constants --

var nav_props = {
  tag: {
    type: String,
    default: 'ul'
  },
  fill: {
    type: Boolean,
    default: false
  },
  justified: {
    type: Boolean,
    default: false
  },
  align: {
    type: String // default: null

  },
  tabs: {
    type: Boolean,
    default: false
  },
  pills: {
    type: Boolean,
    default: false
  },
  vertical: {
    type: Boolean,
    default: false
  },
  small: {
    type: Boolean,
    default: false
  },
  cardHeader: {
    // Set to true if placing in a card header
    type: Boolean,
    default: false
  }
}; // -- Utils --

var computeJustifyContent = function computeJustifyContent(value) {
  // Normalize value
  value = value === 'left' ? 'start' : value === 'right' ? 'end' : value;
  return "justify-content-".concat(value);
}; // @vue/component


var BNav = /*#__PURE__*/vue["a" /* default */].extend({
  name: 'BNav',
  functional: true,
  props: nav_props,
  render: function render(h, _ref) {
    var _class;

    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, Object(lib_esm["a" /* mergeData */])(data, {
      staticClass: 'nav',
      class: (_class = {
        'nav-tabs': props.tabs,
        'nav-pills': props.pills && !props.tabs,
        'card-header-tabs': !props.vertical && props.cardHeader && props.tabs,
        'card-header-pills': !props.vertical && props.cardHeader && props.pills && !props.tabs,
        'flex-column': props.vertical,
        'nav-fill': !props.vertical && props.fill,
        'nav-justified': !props.vertical && props.justified
      }, nav_defineProperty(_class, computeJustifyContent(props.align), !props.vertical && props.align), nav_defineProperty(_class, "small", props.small), _class)
    }), children);
  }
});
// CONCATENATED MODULE: ./node_modules/bootstrap-vue/esm/components/tabs/tabs.js
function tabs_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function tabs_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { tabs_ownKeys(Object(source), true).forEach(function (key) { tabs_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { tabs_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function tabs_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















 // -- Constants --

var navProps = Object(object["l" /* omit */])(nav_props, ['tabs', 'isNavBar', 'cardHeader']); // -- Utils --
// Filter function to filter out disabled tabs

var notDisabled = function notDisabled(tab) {
  return !tab.disabled;
}; // --- Helper components ---
// @vue/component


var BTabButtonHelper = /*#__PURE__*/vue["a" /* default */].extend({
  name: 'BTabButtonHelper',
  inject: {
    bvTabs: {
      /* istanbul ignore next */
      default: function _default()
      /* istanbul ignore next */
      {
        return {};
      }
    }
  },
  props: {
    // Reference to the child <b-tab> instance
    tab: {
      default: null
    },
    tabs: {
      type: Array,

      /* istanbul ignore next */
      default: function _default()
      /* istanbul ignore next */
      {
        return [];
      }
    },
    id: {
      type: String,
      default: null
    },
    controls: {
      type: String,
      default: null
    },
    tabIndex: {
      type: Number,
      default: null
    },
    posInSet: {
      type: Number,
      default: null
    },
    setSize: {
      type: Number,
      default: null
    },
    noKeyNav: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    focus: function focus() {
      Object(dom["d" /* attemptFocus */])(this.$refs.link);
    },
    handleEvt: function handleEvt(evt) {
      var stop = function stop() {
        evt.preventDefault();
        evt.stopPropagation();
      };

      if (this.tab.disabled) {
        /* istanbul ignore next */
        return;
      }

      var type = evt.type;
      var key = evt.keyCode;
      var shift = evt.shiftKey;

      if (type === 'click') {
        stop();
        this.$emit('click', evt);
      } else if (type === 'keydown' && key === key_codes["a" /* default */].SPACE) {
        // For ARIA tabs the SPACE key will also trigger a click/select
        // Even with keyboard navigation disabled, SPACE should "click" the button
        // See: https://github.com/bootstrap-vue/bootstrap-vue/issues/4323
        stop();
        this.$emit('click', evt);
      } else if (type === 'keydown' && !this.noKeyNav) {
        // For keyboard navigation
        if (key === key_codes["a" /* default */].UP || key === key_codes["a" /* default */].LEFT || key === key_codes["a" /* default */].HOME) {
          stop();

          if (shift || key === key_codes["a" /* default */].HOME) {
            this.$emit('first', evt);
          } else {
            this.$emit('prev', evt);
          }
        } else if (key === key_codes["a" /* default */].DOWN || key === key_codes["a" /* default */].RIGHT || key === key_codes["a" /* default */].END) {
          stop();

          if (shift || key === key_codes["a" /* default */].END) {
            this.$emit('last', evt);
          } else {
            this.$emit('next', evt);
          }
        }
      }
    }
  },
  render: function render(h) {
    var link = h(link_link["a" /* BLink */], {
      ref: 'link',
      staticClass: 'nav-link',
      class: [{
        active: this.tab.localActive && !this.tab.disabled,
        disabled: this.tab.disabled
      }, this.tab.titleLinkClass, // Apply <b-tabs> `activeNavItemClass` styles when the tab is active
      this.tab.localActive ? this.bvTabs.activeNavItemClass : null],
      props: {
        disabled: this.tab.disabled
      },
      attrs: tabs_objectSpread(tabs_objectSpread({}, this.tab.titleLinkAttributes), {}, {
        role: 'tab',
        id: this.id,
        // Roving tab index when keynav enabled
        tabindex: this.tabIndex,
        'aria-selected': this.tab.localActive && !this.tab.disabled ? 'true' : 'false',
        'aria-setsize': this.setSize,
        'aria-posinset': this.posInSet,
        'aria-controls': this.controls
      }),
      on: {
        click: this.handleEvt,
        keydown: this.handleEvt
      }
    }, [this.tab.normalizeSlot('title') || this.tab.title]);
    return h('li', {
      staticClass: 'nav-item',
      class: [this.tab.titleItemClass],
      attrs: {
        role: 'presentation'
      }
    }, [link]);
  }
}); // @vue/component

var BTabs = /*#__PURE__*/vue["a" /* default */].extend({
  name: 'BTabs',
  mixins: [id["a" /* default */], normalize_slot["a" /* default */]],
  provide: function provide() {
    return {
      bvTabs: this
    };
  },
  model: {
    prop: 'value',
    event: 'input'
  },
  props: tabs_objectSpread(tabs_objectSpread({}, navProps), {}, {
    tag: {
      type: String,
      default: 'div'
    },
    card: {
      type: Boolean,
      default: false
    },
    end: {
      // Synonym for 'bottom'
      type: Boolean,
      default: false
    },
    noFade: {
      type: Boolean,
      default: false
    },
    noNavStyle: {
      type: Boolean,
      default: false
    },
    noKeyNav: {
      type: Boolean,
      default: false
    },
    lazy: {
      // This prop is sniffed by the <b-tab> child
      type: Boolean,
      default: false
    },
    contentClass: {
      type: [String, Array, Object] // default: null

    },
    navClass: {
      type: [String, Array, Object] // default: null

    },
    navWrapperClass: {
      type: [String, Array, Object] // default: null

    },
    activeNavItemClass: {
      // Only applied to the currently active <b-nav-item>
      type: [String, Array, Object] // default: null

    },
    activeTabClass: {
      // Only applied to the currently active <b-tab>
      // This prop is sniffed by the <b-tab> child
      type: [String, Array, Object] // default: null

    },
    value: {
      // v-model
      type: Number,
      default: null
    }
  }),
  data: function data() {
    return {
      // Index of current tab
      currentTab: Object(number["b" /* toInteger */])(this.value, -1),
      // Array of direct child <b-tab> instances, in DOM order
      tabs: [],
      // Array of child instances registered (for triggering reactive updates)
      registeredTabs: [],
      // Flag to know if we are mounted or not
      isMounted: false
    };
  },
  computed: {
    fade: function fade() {
      // This computed prop is sniffed by the tab child
      return !this.noFade;
    },
    localNavClass: function localNavClass() {
      var classes = [];

      if (this.card && this.vertical) {
        classes.push('card-header', 'h-100', 'border-bottom-0', 'rounded-0');
      }

      return [].concat(classes, [this.navClass]);
    }
  },
  watch: {
    currentTab: function currentTab(newVal) {
      var index = -1; // Ensure only one tab is active at most

      this.tabs.forEach(function (tab, idx) {
        if (newVal === idx && !tab.disabled) {
          tab.localActive = true;
          index = idx;
        } else {
          tab.localActive = false;
        }
      }); // Update the v-model

      this.$emit('input', index);
    },
    value: function value(newVal, oldVal) {
      if (newVal !== oldVal) {
        newVal = Object(number["b" /* toInteger */])(newVal, -1);
        oldVal = Object(number["b" /* toInteger */])(oldVal, 0);
        var tabs = this.tabs;

        if (tabs[newVal] && !tabs[newVal].disabled) {
          this.activateTab(tabs[newVal]);
        } else {
          // Try next or prev tabs
          if (newVal < oldVal) {
            this.previousTab();
          } else {
            this.nextTab();
          }
        }
      }
    },
    registeredTabs: function registeredTabs() {
      var _this = this;

      // Each b-tab will register/unregister itself.
      // We use this to detect when tabs are added/removed
      // to trigger the update of the tabs.
      this.$nextTick(function () {
        Object(dom["l" /* requestAF */])(function () {
          _this.updateTabs();
        });
      });
    },
    tabs: function tabs(newVal, oldVal) {
      var _this2 = this;

      // If tabs added, removed, or re-ordered, we emit a `changed` event.
      // We use `tab._uid` instead of `tab.safeId()`, as the later is changed
      // in a nextTick if no explicit ID is provided, causing duplicate emits.
      if (!loose_equal(newVal.map(function (t) {
        return t._uid;
      }), oldVal.map(function (t) {
        return t._uid;
      }))) {
        // In a nextTick to ensure currentTab has been set first.
        this.$nextTick(function () {
          // We emit shallow copies of the new and old arrays of tabs, to
          // prevent users from potentially mutating the internal arrays.
          _this2.$emit('changed', newVal.slice(), oldVal.slice());
        });
      }
    },
    isMounted: function isMounted(newVal) {
      var _this3 = this;

      // Trigger an update after mounted.  Needed for tabs inside lazy modals.
      if (newVal) {
        Object(dom["l" /* requestAF */])(function () {
          _this3.updateTabs();
        });
      } // Enable or disable the observer


      this.setObserver(newVal);
    }
  },
  created: function created() {
    var _this4 = this;

    // Create private non-reactive props
    this.$_observer = null;
    this.currentTab = Object(number["b" /* toInteger */])(this.value, -1); // For SSR and to make sure only a single tab is shown on mount
    // We wrap this in a `$nextTick()` to ensure the child tabs have been created

    this.$nextTick(function () {
      _this4.updateTabs();
    });
  },
  mounted: function mounted() {
    var _this5 = this;

    // Call `updateTabs()` just in case...
    this.updateTabs();
    this.$nextTick(function () {
      // Flag we are now mounted and to switch to DOM for tab probing.
      // As this.$slots.default appears to lie about component instances
      // after b-tabs is destroyed and re-instantiated.
      // And this.$children does not respect DOM order.
      _this5.isMounted = true;
    });
  },

  /* istanbul ignore next */
  deactivated: function deactivated()
  /* istanbul ignore next */
  {
    this.isMounted = false;
  },

  /* istanbul ignore next */
  activated: function activated()
  /* istanbul ignore next */
  {
    var _this6 = this;

    this.currentTab = Object(number["b" /* toInteger */])(this.value, -1);
    this.$nextTick(function () {
      _this6.updateTabs();

      _this6.isMounted = true;
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.isMounted = false;
  },
  destroyed: function destroyed() {
    // Ensure no references to child instances exist
    this.tabs = [];
  },
  methods: {
    registerTab: function registerTab(tab) {
      var _this7 = this;

      if (!Object(array["a" /* arrayIncludes */])(this.registeredTabs, tab)) {
        this.registeredTabs.push(tab);
        tab.$once('hook:destroyed', function () {
          _this7.unregisterTab(tab);
        });
      }
    },
    unregisterTab: function unregisterTab(tab) {
      this.registeredTabs = this.registeredTabs.slice().filter(function (t) {
        return t !== tab;
      });
    },
    // DOM observer is needed to detect changes in order of tabs
    setObserver: function setObserver(on) {
      this.$_observer && this.$_observer.disconnect();
      this.$_observer = null;

      if (on) {
        var self = this;
        /* istanbul ignore next: difficult to test mutation observer in JSDOM */

        var handler = function handler() {
          // We delay the update to ensure that `tab.safeId()` has
          // updated with the final ID value.
          self.$nextTick(function () {
            Object(dom["l" /* requestAF */])(function () {
              self.updateTabs();
            });
          });
        }; // Watch for changes to <b-tab> sub components


        this.$_observer = observe_dom(this.$refs.tabsContainer, handler, {
          childList: true,
          subtree: false,
          attributes: true,
          attributeFilter: ['id']
        });
      }
    },
    getTabs: function getTabs() {
      // We use registeredTabs as the source of truth for child tab components. And we
      // filter out any BTab components that are extended BTab with a root child BTab.
      // https://github.com/bootstrap-vue/bootstrap-vue/issues/3260
      var tabs = this.registeredTabs.filter(function (tab) {
        return tab.$children.filter(function (t) {
          return t._isTab;
        }).length === 0;
      }); // DOM Order of Tabs

      var order = [];

      if (this.isMounted && tabs.length > 0) {
        // We rely on the DOM when mounted to get the 'true' order of the b-tab children.
        // querySelectorAll(...) always returns elements in document order, regardless of
        // order specified in the selector.
        var selector = tabs.map(function (tab) {
          return "#".concat(tab.safeId());
        }).join(', ');
        order = Object(dom["n" /* selectAll */])(selector, this.$el).map(function (el) {
          return el.id;
        }).filter(identity["a" /* default */]);
      } // Stable sort keeps the original order if not found in the
      // `order` array, which will be an empty array before mount.


      return stable_sort(tabs, function (a, b) {
        return order.indexOf(a.safeId()) - order.indexOf(b.safeId());
      });
    },
    // Update list of <b-tab> children
    updateTabs: function updateTabs() {
      // Probe tabs
      var tabs = this.getTabs(); // Find *last* active non-disabled tab in current tabs
      // We trust tab state over currentTab, in case tabs were added/removed/re-ordered

      var tabIndex = tabs.indexOf(tabs.slice().reverse().find(function (tab) {
        return tab.localActive && !tab.disabled;
      })); // Else try setting to currentTab

      if (tabIndex < 0) {
        var currentTab = this.currentTab;

        if (currentTab >= tabs.length) {
          // Handle last tab being removed, so find the last non-disabled tab
          tabIndex = tabs.indexOf(tabs.slice().reverse().find(notDisabled));
        } else if (tabs[currentTab] && !tabs[currentTab].disabled) {
          // Current tab is not disabled
          tabIndex = currentTab;
        }
      } // Else find *first* non-disabled tab in current tabs


      if (tabIndex < 0) {
        tabIndex = tabs.indexOf(tabs.find(notDisabled));
      } // Set the current tab state to active


      tabs.forEach(function (tab) {
        // tab.localActive = idx === tabIndex && !tab.disabled
        tab.localActive = false;
      });

      if (tabs[tabIndex]) {
        tabs[tabIndex].localActive = true;
      } // Update the array of tab children


      this.tabs = tabs; // Set the currentTab index (can be -1 if no non-disabled tabs)

      this.currentTab = tabIndex;
    },
    // Find a button that controls a tab, given the tab reference
    // Returns the button vm instance
    getButtonForTab: function getButtonForTab(tab) {
      return (this.$refs.buttons || []).find(function (btn) {
        return btn.tab === tab;
      });
    },
    // Force a button to re-render its content, given a <b-tab> instance
    // Called by <b-tab> on `update()`
    updateButton: function updateButton(tab) {
      var button = this.getButtonForTab(tab);

      if (button && button.$forceUpdate) {
        button.$forceUpdate();
      }
    },
    // Activate a tab given a <b-tab> instance
    // Also accessed by <b-tab>
    activateTab: function activateTab(tab) {
      var result = false;

      if (tab) {
        var index = this.tabs.indexOf(tab);

        if (!tab.disabled && index > -1 && index !== this.currentTab) {
          var tabEvt = new bv_event_class_BvEvent('activate-tab', {
            cancelable: true,
            vueTarget: this,
            componentId: this.safeId()
          });
          this.$emit(tabEvt.type, index, this.currentTab, tabEvt);

          if (!tabEvt.defaultPrevented) {
            result = true;
            this.currentTab = index;
          }
        }
      } // Couldn't set tab, so ensure v-model is set to `this.currentTab`

      /* istanbul ignore next: should rarely happen */


      if (!result && this.currentTab !== this.value) {
        this.$emit('input', this.currentTab);
      }

      return result;
    },
    // Deactivate a tab given a <b-tab> instance
    // Accessed by <b-tab>
    deactivateTab: function deactivateTab(tab) {
      if (tab) {
        // Find first non-disabled tab that isn't the one being deactivated
        // If no tabs are available, then don't deactivate current tab
        return this.activateTab(this.tabs.filter(function (t) {
          return t !== tab;
        }).find(notDisabled));
      }
      /* istanbul ignore next: should never/rarely happen */


      return false;
    },
    // Focus a tab button given its <b-tab> instance
    focusButton: function focusButton(tab) {
      var _this8 = this;

      // Wrap in `$nextTick()` to ensure DOM has completed rendering/updating before focusing
      this.$nextTick(function () {
        Object(dom["d" /* attemptFocus */])(_this8.getButtonForTab(tab));
      });
    },
    // Emit a click event on a specified <b-tab> component instance
    emitTabClick: function emitTabClick(tab, evt) {
      if (Object(inspect["c" /* isEvent */])(evt) && tab && tab.$emit && !tab.disabled) {
        tab.$emit('click', evt);
      }
    },
    // Click handler
    clickTab: function clickTab(tab, evt) {
      this.activateTab(tab);
      this.emitTabClick(tab, evt);
    },
    // Move to first non-disabled tab
    firstTab: function firstTab(focus) {
      var tab = this.tabs.find(notDisabled);

      if (this.activateTab(tab) && focus) {
        this.focusButton(tab);
        this.emitTabClick(tab, focus);
      }
    },
    // Move to previous non-disabled tab
    previousTab: function previousTab(focus) {
      var currentIndex = Object(math["a" /* mathMax */])(this.currentTab, 0);
      var tab = this.tabs.slice(0, currentIndex).reverse().find(notDisabled);

      if (this.activateTab(tab) && focus) {
        this.focusButton(tab);
        this.emitTabClick(tab, focus);
      }
    },
    // Move to next non-disabled tab
    nextTab: function nextTab(focus) {
      var currentIndex = Object(math["a" /* mathMax */])(this.currentTab, -1);
      var tab = this.tabs.slice(currentIndex + 1).find(notDisabled);

      if (this.activateTab(tab) && focus) {
        this.focusButton(tab);
        this.emitTabClick(tab, focus);
      }
    },
    // Move to last non-disabled tab
    lastTab: function lastTab(focus) {
      var tab = this.tabs.slice().reverse().find(notDisabled);

      if (this.activateTab(tab) && focus) {
        this.focusButton(tab);
        this.emitTabClick(tab, focus);
      }
    }
  },
  render: function render(h) {
    var _this9 = this;

    var tabs = this.tabs; // Currently active tab

    var activeTab = tabs.find(function (tab) {
      return tab.localActive && !tab.disabled;
    }); // Tab button to allow focusing when no active tab found (keynav only)

    var fallbackTab = tabs.find(function (tab) {
      return !tab.disabled;
    }); // For each <b-tab> found create the tab buttons

    var buttons = tabs.map(function (tab, index) {
      var tabIndex = null; // Ensure at least one tab button is focusable when keynav enabled (if possible)

      if (!_this9.noKeyNav) {
        // Buttons are not in tab index unless active, or a fallback tab
        tabIndex = -1;

        if (activeTab === tab || !activeTab && fallbackTab === tab) {
          // Place tab button in tab sequence
          tabIndex = null;
        }
      }

      return h(BTabButtonHelper, {
        key: tab._uid || index,
        ref: 'buttons',
        // Needed to make `this.$refs.buttons` an array
        refInFor: true,
        props: {
          tab: tab,
          tabs: tabs,
          id: tab.controlledBy || (tab.safeId ? tab.safeId("_BV_tab_button_") : null),
          controls: tab.safeId ? tab.safeId() : null,
          tabIndex: tabIndex,
          setSize: tabs.length,
          posInSet: index + 1,
          noKeyNav: _this9.noKeyNav
        },
        on: {
          click: function click(evt) {
            _this9.clickTab(tab, evt);
          },
          first: _this9.firstTab,
          prev: _this9.previousTab,
          next: _this9.nextTab,
          last: _this9.lastTab
        }
      });
    }); // Nav

    var nav = h(BNav, {
      ref: 'nav',
      class: this.localNavClass,
      attrs: {
        role: 'tablist',
        id: this.safeId('_BV_tab_controls_')
      },
      props: {
        fill: this.fill,
        justified: this.justified,
        align: this.align,
        tabs: !this.noNavStyle && !this.pills,
        pills: !this.noNavStyle && this.pills,
        vertical: this.vertical,
        small: this.small,
        cardHeader: this.card && !this.vertical
      }
    }, [this.normalizeSlot('tabs-start') || h(), buttons, this.normalizeSlot('tabs-end') || h()]);
    nav = h('div', {
      key: 'bv-tabs-nav',
      class: [{
        'card-header': this.card && !this.vertical && !this.end,
        'card-footer': this.card && !this.vertical && this.end,
        'col-auto': this.vertical
      }, this.navWrapperClass]
    }, [nav]);
    var empty = h();

    if (!tabs || tabs.length === 0) {
      empty = h('div', {
        key: 'bv-empty-tab',
        class: ['tab-pane', 'active', {
          'card-body': this.card
        }]
      }, this.normalizeSlot('empty'));
    } // Main content section


    var content = h('div', {
      ref: 'tabsContainer',
      key: 'bv-tabs-container',
      staticClass: 'tab-content',
      class: [{
        col: this.vertical
      }, this.contentClass],
      attrs: {
        id: this.safeId('_BV_tab_container_')
      }
    }, Object(array["b" /* concat */])(this.normalizeSlot('default'), empty)); // Render final output

    return h(this.tag, {
      staticClass: 'tabs',
      class: {
        row: this.vertical,
        'no-gutters': this.vertical && this.card
      },
      attrs: {
        id: this.safeId()
      }
    }, [this.end ? content : h(), [nav], this.end ? h() : content]);
  }
});

/***/ })

}]);
//# sourceMappingURL=shighl.5.js.map