(window["shighl_jsonp"] = window["shighl_jsonp"] || []).push([[28],{

/***/ "24e3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  data: () => ({
    uri: "https://www.w3.org/ns/activitystreams#Object",
    disjointWith: "https://www.w3.org/ns/activitystreams#Link",
    attachement: "",
    attributedTo: "",
    audience: "BJNJ",
    content: "",
    context: "",
    name: "",
    endTime: "",
    generator: "",
    icon: "",
    image: "",
    inReplyTo: "",
    location: "",
    preview: "",
    published: "",
    replies: "",
    startTime: "",
    summary: "",
    tag: "",
    updated: "",
    url: "",
    to: "",
    bto: "",
    cc: "",
    bcc: "",
    mediaType: "",
    duration: "",
    count: 2
  }),
  methods: {
    increment() {
      this.count++;
    }

  },
  computed: {
    double() {
      return this.count * 2;
    }

  }
}); // define a mixin object

/*
export const AsObject = {
data: function () {
return {
uri: "https://www.w3.org/ns/activitystreams#Object",
disjointWith : "https://www.w3.org/ns/activitystreams#Link",
attachement: "",
attributedTo: "",
audience: "BJNJ",
content: "",
context: "",
name: "",
endTime: "",
generator: "",
icon: "",
image: "",
inReplyTo: "",
location: "",
preview: "",
published: "",
replies: "",
startTime: "",
summary: "",
tag: "",
updated: "",
url: "",
to: "",
bto: "",
cc: "",
bcc: "",
mediaType: "",
duration: ""}
},

created: function () {
this.hello()
},
methods: {
hello: function () {
console.log('hello from mixin!')
}
}
}
*/

/***/ }),

/***/ "3a9e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"3fb395a8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Renderless/RObject.vue?vue&type=template&id=3db10656&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._v(" ActivityStream Object : "),_vm._l((_vm._data),function(object,predicate,index){return _c('div',{key:index},[_c('input',{attrs:{"placeholder":predicate},domProps:{"value":object}}),_c('br')])}),_vm._v(" uri"+_vm._s(_vm.uri)+" "+_vm._s(_vm.audience)+" "+_vm._s(_vm._data)+" ")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Renderless/RObject.vue?vue&type=template&id=3db10656&

// EXTERNAL MODULE: ./src/mixins/AsObject.js
var AsObject = __webpack_require__("24e3");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Renderless/RObject.vue?vue&type=script&lang=js&
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

/* harmony default export */ var RObjectvue_type_script_lang_js_ = ({
  mixins: [AsObject["a" /* default */]],
  components: {},

  created() {
    console.log("data", this._data);
  },

  methods: {
    decrement() {
      this.count--;
      console.log(this.count);
    }

  }
});
// CONCATENATED MODULE: ./src/components/Renderless/RObject.vue?vue&type=script&lang=js&
 /* harmony default export */ var Renderless_RObjectvue_type_script_lang_js_ = (RObjectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Renderless/RObject.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Renderless_RObjectvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var RObject = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=shighl.28.js.map