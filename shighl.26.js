(window["shighl_jsonp"] = window["shighl_jsonp"] || []).push([[26],{

/***/ "7144":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3fb395a8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Solid/SolidChat.vue?vue&type=template&id=3a0feaf3&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"solid-chat"},[_vm._v(" Solid-chat "),_c('div',{staticClass:"brute-hide"},[_vm._v(" count : "+_vm._s(_vm.count)),_c('br'),_vm._v(" logged : "+_vm._s(_vm.logged)),_c('br'),_vm._v(" webId : "+_vm._s(_vm.webId)),_c('br'),_vm._v(" storage: "+_vm._s(_vm.storage)),_c('br'),_vm._v(" messages : "+_vm._s(_vm.messages)),_c('br'),_vm._v(" chatPath : "+_vm._s(_vm.chatPath)+" "),_c('hr'),_c('SolidChatSend')],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Solid/SolidChat.vue?vue&type=template&id=3a0feaf3&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./src/store/index.js + 1 modules
var store = __webpack_require__("4360");

// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.css
var bootstrap = __webpack_require__("f9e3");

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/dist/bootstrap-vue.css
var bootstrap_vue = __webpack_require__("2dd8");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Solid/SolidChat.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 //import { BButton } from "bootstrap-vue";



/* harmony default export */ var SolidChatvue_type_script_lang_js_ = ({
  store: store["a" /* default */],
  name: 'SolidChat',
  props: {
    msg: String,
    doc: [Boolean, String],
    chatPath: String
  },
  components: {
    //  BButton
    SolidChatSend: () => __webpack_require__.e(/* import() */ 5).then(__webpack_require__.bind(null, "43e8"))
  },

  mounted() {
    this.$store.commit("solid/setChatPath", this.chatPath);
  },

  computed: {
    count() {
      console.log(this.$store.state.count);
      return this.$store.state.count;
    },

    webId() {
      console.log(this.$store.state.solid.webId);
      return this.$store.state.solid.webId;
    },

    storage() {
      console.log(this.$store.state.solid.storage);
      return this.$store.state.solid.storage;
    },

    logged() {
      console.log(this.$store.state.solid.logged);
      return this.$store.state.solid.logged;
    },

    messages() {
      console.log(this.$store.state.solid.messages);
      return this.$store.state.solid.messages;
    }

  },
  methods: {
    add() {
      console.log("add", 8);
      this.$store.commit("add", 8);
    }

  }
});
// CONCATENATED MODULE: ./src/components/Solid/SolidChat.vue?vue&type=script&lang=js&
 /* harmony default export */ var Solid_SolidChatvue_type_script_lang_js_ = (SolidChatvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Solid/SolidChat.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__("fb70")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Solid_SolidChatvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3a0feaf3",
  null
  ,true
)

/* harmony default export */ var SolidChat = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "c8b6":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("d32d");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("1815a170", content, shadowRoot)
};

/***/ }),

/***/ "d32d":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("4bad");
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__("f904");
var ___CSS_LOADER_AT_RULE_IMPORT_1___ = __webpack_require__("a368");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_1___);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "fb70":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SolidChat_vue_vue_type_style_index_0_id_3a0feaf3_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c8b6");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SolidChat_vue_vue_type_style_index_0_id_3a0feaf3_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SolidChat_vue_vue_type_style_index_0_id_3a0feaf3_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SolidChat_vue_vue_type_style_index_0_id_3a0feaf3_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SolidChat_vue_vue_type_style_index_0_id_3a0feaf3_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SolidChat_vue_vue_type_style_index_0_id_3a0feaf3_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=shighl.26.js.map