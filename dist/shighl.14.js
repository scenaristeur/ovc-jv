(window["shighl_jsonp"] = window["shighl_jsonp"] || []).push([[14],{

/***/ "03fe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommonLog_vue_vue_type_style_index_0_id_c30ad102_scoped_true_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2742");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommonLog_vue_vue_type_style_index_0_id_c30ad102_scoped_true_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommonLog_vue_vue_type_style_index_0_id_c30ad102_scoped_true_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommonLog_vue_vue_type_style_index_0_id_c30ad102_scoped_true_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommonLog_vue_vue_type_style_index_0_id_c30ad102_scoped_true_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommonLog_vue_vue_type_style_index_0_id_c30ad102_scoped_true_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "2742":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("b7cc");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("d6591972", content, shadowRoot)
};

/***/ }),

/***/ "4360":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("2b0e");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./src/store/modules/solid.js
//import shop from '../../api/shop'
// initial state
const state = () => ({
  all: [],
  webId: null,
  logged: false,
  storage: "",
  chatPath: "",
  messages: ["one", "two"]
}); // getters


const getters = {}; // actions

const actions = {
  send(context, message) {
    console.log("in action", message, context.state.chatPath);
    let date = new Date();
    let d = date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2);
    console.log(d, context.state.webId); //  context.commit('send', message)

    let path = context.state.chatPath + d + ".ttl";
    console.log(path, context.state.webId);
    context.commit('send', message); //await solid[]
  }
  /*  getAllProducts ({ commit }) {
  shop.getProducts(products => {
  commit('setProducts', products)
  })
  }*/


}; // mutations

const mutations = {
  setWebId(state, webId) {
    state.webId = webId;
  },

  setLogged(state, logged) {
    state.logged = logged;
  },

  setChatPath(state, path) {
    state.chatPath = path;
  },

  send(state, message) {
    state.messages.push(message);
    console.log(state.messages); // eslint-disable-next-line

    console.log("LDFLEX", solid);
  },

  setStorage(state, st) {
    state.storage = st;
  }
  /*  setProducts (state, products) {
  state.all = products
  },
  decrementProductInventory (state, { id }) {
  const product = state.all.find(product => product.id === id)
  product.inventory--
  }*/


};
/* harmony default export */ var modules_solid = ({
  namespaced: true,
  state,
  getters,
  actions,
  mutations
});
// CONCATENATED MODULE: ./src/store/index.js



vue_runtime_esm["default"].use(vuex_esm["a" /* default */]);
/* harmony default export */ var store = __webpack_exports__["a"] = (new vuex_esm["a" /* default */].Store({
  state: {
    keyword: "",
    count: 0
  },
  mutations: {
    setKeyword(state, payload) {
      console.log(state.keyword, payload);
      state.keyword = payload;
    },

    add(state, montant) {
      console.log(state.count);
      state.count = state.count + montant;
      console.log(montant);
    }

  },
  actions: {},
  modules: {
    solid: modules_solid
  }
}));

/***/ }),

/***/ "b7cc":
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

/***/ "d513":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3fb395a8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Common/CommonLog.vue?vue&type=template&id=c30ad102&scoped=true&shadow
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"common-log text-light bg-dark"},[_c('h1',[_vm._v("Common log")]),_c('h1',[_vm._v(_vm._s(_vm.msg))]),_c('b-button',{attrs:{"variant":"primary"},on:{"click":_vm.add}},[_vm._v("Common LOG button")]),_vm._v(" - "+_vm._s(_vm.count)+"- ")],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Common/CommonLog.vue?vue&type=template&id=c30ad102&scoped=true&shadow

// EXTERNAL MODULE: ./src/store/index.js + 1 modules
var store = __webpack_require__("4360");

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/components/button/button.js
var button_button = __webpack_require__("1947");

// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.css
var bootstrap = __webpack_require__("f9e3");

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/dist/bootstrap-vue.css
var bootstrap_vue = __webpack_require__("2dd8");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Common/CommonLog.vue?vue&type=script&lang=js&shadow
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




/* harmony default export */ var CommonLogvue_type_script_lang_js_shadow = ({
  store: store["a" /* default */],
  name: 'CommonLog',
  props: {
    msg: String
  },
  components: {
    BButton: button_button["a" /* BButton */]
  },
  computed: {
    count() {
      console.log(this.$store.state.count);
      return this.$store.state.count;
    }

  },
  methods: {
    add() {
      console.log("add", 8);
      this.$store.commit("add", 8);
    }

  }
});
// CONCATENATED MODULE: ./src/components/Common/CommonLog.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var Common_CommonLogvue_type_script_lang_js_shadow = (CommonLogvue_type_script_lang_js_shadow); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Common/CommonLog.vue?shadow



function injectStyles (context) {
  
  var style0 = __webpack_require__("03fe")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Common_CommonLogvue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "c30ad102",
  null
  ,true
)

/* harmony default export */ var CommonLogshadow = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=shighl.14.js.map