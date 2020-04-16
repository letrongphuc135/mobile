(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Category.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Category.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  name: "Category",
  data: function data() {
    return {
      editMode: false,
      categories: [],
      form: new Form({
        id: '',
        name: '',
        status: 1,
        created_at: ''
      }),
      error: null
    };
  },
  methods: {
    openAddCategory: function openAddCategory() {
      this.editMode = false;
      this.form.reset();
    },
    addCategory: function addCategory() {
      this.form.post('/api/admin/category', this.form).then(function (response) {
        console.log(response);
        Toast.fire({
          icon: 'success',
          title: response.data.message
        });
        $('#exampleModal').modal('hide');
        Fire.$emit('afterSaveChange');
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getAllCategory: function getAllCategory() {
      var _this = this;

      axios.get('/api/admin/category').then(function (response) {
        console.log(response.data);
        _this.categories = response.data;
      });
    },
    deleteCategroy: function deleteCategroy(id, index) {
      var _this2 = this;

      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function (result) {
        if (result.value) {
          Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
          var app = _this2;
          axios["delete"]('/api/admin/category/' + id).then(function (resp) {
            app.categories.splice(index, 1);
            console.log(resp);
          })["catch"](function (resp) {
            alert("Could not delete company");
            console.log(resp);
          });
        }
      });
    },
    getCategoryById: function getCategoryById(category) {
      this.editMode = true;
      this.form.clear();
      $('#exampleModal').modal('show');
      this.form.fill(category);
    },
    updateCategory: function updateCategory() {
      this.form.put('/api/admin/category/' + this.form.id).then(function (response) {
        console.log(response);
        Toast.fire({
          icon: 'success',
          title: 'update successfully'
        });
        $('#exampleModal').modal('hide');
        Fire.$emit('afterSaveChange');
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  created: function created() {
    var _this3 = this;

    this.getAllCategory();
    Fire.$on('afterSaveChange', function () {
      _this3.getAllCategory();
    }); // setInterval(()=>this.getAllCategory(), 5000);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Category.vue?vue&type=template&id=d1b3502e&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/Category.vue?vue&type=template&id=d1b3502e&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "button",
      {
        staticClass: "btn btn-outline-success float-right",
        attrs: { "data-toggle": "modal", "data-target": "#exampleModal" },
        on: {
          click: function($event) {
            return _vm.openAddCategory()
          }
        }
      },
      [_vm._v("Add category\n    ")]
    ),
    _vm._v(" "),
    _c("h2", { staticClass: "text-center mb-3" }, [_vm._v("All category")]),
    _vm._v(" "),
    _c("table", { staticClass: "table table-bordered table-hover" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "tbody",
        _vm._l(_vm.categories, function(category, index) {
          return _c("tr", { key: index + "-" + category.id }, [
            _c("th", { attrs: { scope: "row" } }, [_vm._v(_vm._s(index + 1))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(category.name))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(_vm._f("myDate")(category.created_at)))]),
            _vm._v(" "),
            _c("td", [
              _c("div", { staticClass: "btn-group" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-outline-warning",
                    staticStyle: {
                      color: "#ffc107",
                      "border-color": "#ffc107"
                    },
                    attrs: {
                      "data-target": "#exampleModal",
                      "data-toggle": "modal"
                    },
                    on: {
                      click: function($event) {
                        return _vm.getCategoryById(category)
                      }
                    }
                  },
                  [_vm._v("Edit\n                    ")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-outline-danger",
                    on: {
                      click: function($event) {
                        return _vm.deleteCategroy(category.id, index)
                      }
                    }
                  },
                  [_vm._v("Delete\n                    ")]
                )
              ])
            ])
          ])
        }),
        0
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "exampleModal",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "exampleModalLabel",
          "aria-hidden": "true"
        }
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog modal-lg", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _vm.editMode
                  ? _c("h5", { staticClass: "modal-title text-success" }, [
                      _vm._v("Edit\n                        category")
                    ])
                  : _c("h5", { staticClass: "modal-title text-success" }, [
                      _vm._v("Add\n                        category")
                    ]),
                _vm._v(" "),
                _vm._m(1)
              ]),
              _vm._v(" "),
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      _vm.editMode ? _vm.updateCategory() : _vm.addCategory()
                    }
                  }
                },
                [
                  _c("div", { staticClass: "modal-body" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", [_vm._v("Category name")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.name,
                              expression: "form.name"
                            }
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.form.errors.has("name") },
                          attrs: { type: "text", name: "name" },
                          domProps: { value: _vm.form.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "name", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "name" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("fieldset", { staticClass: "form-group" }, [
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "legend",
                          { staticClass: "col-form-label col-sm-2 pt-0" },
                          [_vm._v("Status")]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-10" }, [
                          _c("div", { staticClass: "form-check" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.status,
                                  expression: "form.status"
                                }
                              ],
                              staticClass: "form-check-input",
                              attrs: {
                                type: "radio",
                                name: "publication_status",
                                id: "publication_status",
                                value: "1",
                                checked: ""
                              },
                              domProps: {
                                checked: _vm._q(_vm.form.status, "1")
                              },
                              on: {
                                change: function($event) {
                                  return _vm.$set(_vm.form, "status", "1")
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "label",
                              {
                                staticClass: "form-check-label",
                                attrs: { for: "publication_status" }
                              },
                              [
                                _vm._v(
                                  "\n                                            Published\n                                        "
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-check" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.status,
                                  expression: "form.status"
                                }
                              ],
                              staticClass: "form-check-input",
                              attrs: {
                                type: "radio",
                                name: "publication_status",
                                id: "unpublished",
                                value: "0"
                              },
                              domProps: {
                                checked: _vm._q(_vm.form.status, "0")
                              },
                              on: {
                                change: function($event) {
                                  return _vm.$set(_vm.form, "status", "0")
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "label",
                              {
                                staticClass: "form-check-label",
                                attrs: { for: "unpublished" }
                              },
                              [
                                _vm._v(
                                  "\n                                            Unpublished\n                                        "
                                )
                              ]
                            )
                          ])
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._m(2)
                ]
              )
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Id")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Created At")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Action")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "modal",
          "aria-label": "Close"
        }
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-secondary",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("Close\n                        ")]
      ),
      _vm._v(" "),
      _c(
        "button",
        { staticClass: "btn btn-primary", attrs: { type: "submit" } },
        [
          _vm._v(
            "Save\n                            changes\n                        "
          )
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/Category.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/admin/Category.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Category_vue_vue_type_template_id_d1b3502e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Category.vue?vue&type=template&id=d1b3502e&scoped=true& */ "./resources/js/components/admin/Category.vue?vue&type=template&id=d1b3502e&scoped=true&");
/* harmony import */ var _Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Category.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/Category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Category_vue_vue_type_template_id_d1b3502e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Category_vue_vue_type_template_id_d1b3502e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d1b3502e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/Category.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/Category.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/admin/Category.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Category.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/Category.vue?vue&type=template&id=d1b3502e&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/admin/Category.vue?vue&type=template&id=d1b3502e&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_template_id_d1b3502e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Category.vue?vue&type=template&id=d1b3502e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/Category.vue?vue&type=template&id=d1b3502e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_template_id_d1b3502e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_template_id_d1b3502e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);