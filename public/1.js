(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/DashBoard.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/DashBoard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "DashBoard",
  data: function data() {
    return {
      chartData: [['2020-05-02 15:24:05', 10], ['2020-05-02 15:24:05', 20]],
      order: [],
      chartOrder: [],
      chartShip: []
    };
  },
  methods: {
    getOrder: function getOrder() {
      var _this = this;

      axios.get('/api/admin/order').then(function (response) {
        console.log(response.data);
        _this.chartData = response.data;

        for (var i = 0; i < _this.chartData.length; i++) {
          _this.order = [];

          _this.order.push(moment__WEBPACK_IMPORTED_MODULE_0___default()(_this.chartData[i].created_at).format('DD-MM'));

          _this.order.push(_this.chartData[i].quantity);

          console.log("created_at" + moment__WEBPACK_IMPORTED_MODULE_0___default()(_this.chartData[i].created_at).format('DD-MM'));
          console.log("quantity" + _this.chartData[i].quantity);

          _this.chartOrder.push(_this.order);
        }
      });
    },
    getShip: function getShip() {
      var _this2 = this;

      axios.get('/api/getChartShip').then(function (response) {
        console.log(response.data);
        _this2.chartData = response.data;

        for (var i = 0; i < _this2.chartData.length; i++) {
          _this2.order = [];

          _this2.order.push(moment__WEBPACK_IMPORTED_MODULE_0___default()(_this2.chartData[i].created_at).format('DD-MM'));

          _this2.order.push(_this2.chartData[i].quantity);

          console.log("created_at" + moment__WEBPACK_IMPORTED_MODULE_0___default()(_this2.chartData[i].created_at).format('DD-MM'));
          console.log("quantity" + _this2.chartData[i].quantity);

          _this2.chartShip.push(_this2.order);
        }
      });
    }
  },
  created: function created() {
    this.getOrder();
    this.getShip();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/DashBoard.vue?vue&type=template&id=ec50b3ce&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/DashBoard.vue?vue&type=template&id=ec50b3ce&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c(
      "div",
      { staticClass: "form-group col-sm" },
      [
        _c("h4", [_vm._v("Số lượng sản phẩm khách hàng đã đặt trong 7 ngày")]),
        _vm._v(" "),
        _c("column-chart", { attrs: { data: _vm.chartOrder, max: 50 } })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "form-group col-sm" },
      [
        _c("h4", [_vm._v("Số lượng sản phẩm đã vận chuyển trong 7 ngày")]),
        _vm._v(" "),
        _c("column-chart", { attrs: { data: _vm.chartShip, max: 50 } })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/DashBoard.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/admin/DashBoard.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashBoard_vue_vue_type_template_id_ec50b3ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashBoard.vue?vue&type=template&id=ec50b3ce&scoped=true& */ "./resources/js/components/admin/DashBoard.vue?vue&type=template&id=ec50b3ce&scoped=true&");
/* harmony import */ var _DashBoard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashBoard.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/DashBoard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DashBoard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashBoard_vue_vue_type_template_id_ec50b3ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DashBoard_vue_vue_type_template_id_ec50b3ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ec50b3ce",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/DashBoard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/DashBoard.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/admin/DashBoard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashBoard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashBoard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/DashBoard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashBoard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/DashBoard.vue?vue&type=template&id=ec50b3ce&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/admin/DashBoard.vue?vue&type=template&id=ec50b3ce&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashBoard_vue_vue_type_template_id_ec50b3ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashBoard.vue?vue&type=template&id=ec50b3ce&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/DashBoard.vue?vue&type=template&id=ec50b3ce&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashBoard_vue_vue_type_template_id_ec50b3ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashBoard_vue_vue_type_template_id_ec50b3ce_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);