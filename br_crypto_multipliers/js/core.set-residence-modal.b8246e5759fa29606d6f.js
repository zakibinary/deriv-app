/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["set-residence-modal"],{

/***/ "./sass/app/modules/set-residence.scss":
/*!*********************************************!*\
  !*** ./sass/app/modules/set-residence.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zYXNzL2FwcC9tb2R1bGVzL3NldC1yZXNpZGVuY2Uuc2Nzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Nhc3MvYXBwL21vZHVsZXMvc2V0LXJlc2lkZW5jZS5zY3NzPzY3ZTMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm1hcHBpbmdzIjoiO0FBQUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sass/app/modules/set-residence.scss\n");

/***/ }),

/***/ "./App/Containers/SetResidenceModal/index.js":
/*!***************************************************!*\
  !*** ./App/Containers/SetResidenceModal/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _set_residence_modal_jsx__WEBPACK_IMPORTED_MODULE_0__.default)\n/* harmony export */ });\n/* harmony import */ var _set_residence_modal_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set-residence-modal.jsx */ \"./App/Containers/SetResidenceModal/set-residence-modal.jsx\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BcHAvQ29udGFpbmVycy9TZXRSZXNpZGVuY2VNb2RhbC9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL0FwcC9Db250YWluZXJzL1NldFJlc2lkZW5jZU1vZGFsL2luZGV4LmpzPzlkN2UiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnJvbSAnLi9zZXQtcmVzaWRlbmNlLW1vZGFsLmpzeCc7XG4iXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./App/Containers/SetResidenceModal/index.js\n");

/***/ }),

/***/ "./App/Containers/SetResidenceModal/set-residence-form.jsx":
/*!*****************************************************************!*\
  !*** ./App/Containers/SetResidenceModal/set-residence-form.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formik */ \"../../../node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"../../../node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../../../node_modules/react/index.js\");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @deriv/components */ \"../../components/src/index.js\");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @deriv/translations */ \"../../translations/src/index.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\nvar SetResidenceForm = function SetResidenceForm(_ref) {\n  var _ref$class_prefix = _ref.class_prefix,\n      class_prefix = _ref$class_prefix === void 0 ? 'set-residence' : _ref$class_prefix,\n      children = _ref.children,\n      default_value = _ref.default_value,\n      header_text = _ref.header_text,\n      errors = _ref.errors,\n      touched = _ref.touched,\n      setFieldTouched = _ref.setFieldTouched,\n      setFieldValue = _ref.setFieldValue,\n      residence_list = _ref.residence_list;\n  react__WEBPACK_IMPORTED_MODULE_2__.useEffect(function () {\n    if (default_value) {\n      setFieldTouched('residence', true);\n      setFieldValue('residence', default_value, true);\n    }\n  }, []); // eslint-disable-line react-hooks/exhaustive-deps\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"div\", {\n    className: \"\".concat(class_prefix, \"__residence-selection\")\n  }, !!header_text && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_3__.Text, {\n    as: \"p\",\n    align: \"center\",\n    weight: \"bold\",\n    className: \"\".concat(class_prefix, \"__heading\")\n  }, header_text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_3__.Text, {\n    as: \"p\",\n    className: \"\".concat(class_prefix, \"__\").concat(header_text ? 'text' : 'heading')\n  }, (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_4__.localize)('Where do you live?')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(formik__WEBPACK_IMPORTED_MODULE_0__.Field, {\n    name: \"residence\"\n  }, function (_ref2) {\n    var field = _ref2.field;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_3__.DesktopWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_3__.Autocomplete, _extends({}, field, {\n      autoComplete: \"off\",\n      id: \"signup_residence_select\",\n      className: \"\".concat(class_prefix, \"__residence-field\"),\n      type: \"text\",\n      label: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_4__.localize)('Choose country'),\n      error: touched.residence && errors.residence,\n      required: true,\n      list_items: residence_list,\n      onItemSelection: function onItemSelection(_ref3) {\n        var value = _ref3.value,\n            text = _ref3.text;\n        return setFieldValue('residence', value ? text : '', true);\n      }\n    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_3__.MobileWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_3__.SelectNative, {\n      placeholder: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_4__.localize)('Please select'),\n      label: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_4__.localize)('Choose country'),\n      value: field.value,\n      list_items: residence_list,\n      error: touched.residence && errors.residence,\n      required: true,\n      use_text: true,\n      onChange: function onChange(e) {\n        setFieldTouched('residence', true);\n        setFieldValue('residence', e.target.value, true);\n      }\n    })));\n  }), children);\n};\n\nSetResidenceForm.propTypes = {\n  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),\n  default_value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),\n  class_prefix: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),\n  header_text: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),\n  residence_list: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().object))\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SetResidenceForm);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BcHAvQ29udGFpbmVycy9TZXRSZXNpZGVuY2VNb2RhbC9zZXQtcmVzaWRlbmNlLWZvcm0uanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vQXBwL0NvbnRhaW5lcnMvU2V0UmVzaWRlbmNlTW9kYWwvc2V0LXJlc2lkZW5jZS1mb3JtLmpzeD85NmFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpZWxkIH0gZnJvbSAnZm9ybWlrJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXV0b2NvbXBsZXRlLCBEZXNrdG9wV3JhcHBlciwgTW9iaWxlV3JhcHBlciwgU2VsZWN0TmF0aXZlLCBUZXh0IH0gZnJvbSAnQGRlcml2L2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgbG9jYWxpemUgfSBmcm9tICdAZGVyaXYvdHJhbnNsYXRpb25zJztcblxuY29uc3QgU2V0UmVzaWRlbmNlRm9ybSA9ICh7XG4gICAgY2xhc3NfcHJlZml4ID0gJ3NldC1yZXNpZGVuY2UnLFxuICAgIGNoaWxkcmVuLFxuICAgIGRlZmF1bHRfdmFsdWUsXG4gICAgaGVhZGVyX3RleHQsXG4gICAgZXJyb3JzLFxuICAgIHRvdWNoZWQsXG4gICAgc2V0RmllbGRUb3VjaGVkLFxuICAgIHNldEZpZWxkVmFsdWUsXG4gICAgcmVzaWRlbmNlX2xpc3QsXG59KSA9PiB7XG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGRlZmF1bHRfdmFsdWUpIHtcbiAgICAgICAgICAgIHNldEZpZWxkVG91Y2hlZCgncmVzaWRlbmNlJywgdHJ1ZSk7XG4gICAgICAgICAgICBzZXRGaWVsZFZhbHVlKCdyZXNpZGVuY2UnLCBkZWZhdWx0X3ZhbHVlLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3NfcHJlZml4fV9fcmVzaWRlbmNlLXNlbGVjdGlvbmB9PlxuICAgICAgICAgICAgeyEhaGVhZGVyX3RleHQgJiYgKFxuICAgICAgICAgICAgICAgIDxUZXh0IGFzPSdwJyBhbGlnbj0nY2VudGVyJyB3ZWlnaHQ9J2JvbGQnIGNsYXNzTmFtZT17YCR7Y2xhc3NfcHJlZml4fV9faGVhZGluZ2B9PlxuICAgICAgICAgICAgICAgICAgICB7aGVhZGVyX3RleHR9XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxUZXh0IGFzPSdwJyBjbGFzc05hbWU9e2Ake2NsYXNzX3ByZWZpeH1fXyR7aGVhZGVyX3RleHQgPyAndGV4dCcgOiAnaGVhZGluZyd9YH0+XG4gICAgICAgICAgICAgICAge2xvY2FsaXplKCdXaGVyZSBkbyB5b3UgbGl2ZT8nKX1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDxGaWVsZCBuYW1lPSdyZXNpZGVuY2UnPlxuICAgICAgICAgICAgICAgIHsoeyBmaWVsZCB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEZXNrdG9wV3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXV0b2NvbXBsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPSdvZmYnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdzaWdudXBfcmVzaWRlbmNlX3NlbGVjdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc19wcmVmaXh9X19yZXNpZGVuY2UtZmllbGRgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17bG9jYWxpemUoJ0Nob29zZSBjb3VudHJ5Jyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXt0b3VjaGVkLnJlc2lkZW5jZSAmJiBlcnJvcnMucmVzaWRlbmNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0X2l0ZW1zPXtyZXNpZGVuY2VfbGlzdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JdGVtU2VsZWN0aW9uPXsoeyB2YWx1ZSwgdGV4dCB9KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RmllbGRWYWx1ZSgncmVzaWRlbmNlJywgdmFsdWUgPyB0ZXh0IDogJycsIHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9EZXNrdG9wV3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNb2JpbGVXcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3ROYXRpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2xvY2FsaXplKCdQbGVhc2Ugc2VsZWN0Jyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtsb2NhbGl6ZSgnQ2hvb3NlIGNvdW50cnknKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZpZWxkLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0X2l0ZW1zPXtyZXNpZGVuY2VfbGlzdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e3RvdWNoZWQucmVzaWRlbmNlICYmIGVycm9ycy5yZXNpZGVuY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZV90ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEZpZWxkVG91Y2hlZCgncmVzaWRlbmNlJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRGaWVsZFZhbHVlKCdyZXNpZGVuY2UnLCBlLnRhcmdldC52YWx1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTW9iaWxlV3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cblNldFJlc2lkZW5jZUZvcm0ucHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICBkZWZhdWx0X3ZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNsYXNzX3ByZWZpeDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBoZWFkZXJfdGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICByZXNpZGVuY2VfbGlzdDogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZXRSZXNpZGVuY2VGb3JtO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVZBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQW5CQTtBQXVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./App/Containers/SetResidenceModal/set-residence-form.jsx\n");

/***/ }),

/***/ "./App/Containers/SetResidenceModal/set-residence-modal.jsx":
/*!******************************************************************!*\
  !*** ./App/Containers/SetResidenceModal/set-residence-modal.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"../../../node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ \"../../../node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"../../../node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"../../../node_modules/react/index.js\");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @deriv/components */ \"../../components/src/index.js\");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @deriv/translations */ \"../../translations/src/index.js\");\n/* harmony import */ var Stores_connect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Stores/connect */ \"./Stores/connect.js\");\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @deriv/shared */ \"../../shared/src/index.js\");\n/* harmony import */ var _set_residence_form_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./set-residence-form.jsx */ \"./App/Containers/SetResidenceModal/set-residence-form.jsx\");\n/* harmony import */ var Sass_app_modules_set_residence_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Sass/app/modules/set-residence.scss */ \"./sass/app/modules/set-residence.scss\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n // TODO: Move some of these functions to helpers since some of them are shared with AccountSignUpModal\n\nvar isResidenceText = function isResidenceText(item, values) {\n  return item.text.toLowerCase() === values.residence.toLowerCase();\n};\n\nvar validateResidence = function validateResidence(values, residence_list) {\n  var errors = {};\n\n  if (!values.residence) {\n    errors.residence = true;\n  } else {\n    var index_of_selection = residence_list.findIndex(function (item) {\n      return isResidenceText(item, values);\n    });\n\n    if (index_of_selection === -1 || residence_list[index_of_selection].disabled === 'DISABLED') {\n      errors.residence = (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_5__.localize)('Unfortunately, {{website_name}} is not available in your country.', {\n        website_name: _deriv_shared__WEBPACK_IMPORTED_MODULE_7__.website_name\n      });\n    }\n  }\n\n  return errors;\n};\n\nvar SetResidence = function SetResidence(_ref) {\n  var enableApp = _ref.enableApp,\n      onSetResidence = _ref.onSetResidence,\n      residence_list = _ref.residence_list,\n      toggleModalVisibility = _ref.toggleModalVisibility;\n\n  var onSetResidenceComplete = function onSetResidenceComplete(error) {\n    // TODO: Proper error handling (currently we have no place to put the message)\n    if (error) {\n      throw Error(error);\n    } // Handle lower level modal controls due to overriding modal rendering\n\n\n    toggleModalVisibility(false);\n    enableApp();\n  };\n\n  var onSetResidencePassthrough = function onSetResidencePassthrough(values) {\n    var index_of_selection = residence_list.findIndex(function (item) {\n      return isResidenceText(item, values);\n    });\n\n    var modded_values = _objectSpread(_objectSpread({}, values), {}, {\n      residence: residence_list[index_of_selection].value\n    });\n\n    onSetResidence(modded_values, onSetResidenceComplete);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"div\", {\n    className: \"set-residence\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {\n    initialValues: {\n      residence: ''\n    },\n    validate: function validate(values) {\n      return validateResidence(values, residence_list);\n    },\n    onSubmit: onSetResidencePassthrough\n  }, function (_ref2) {\n    var isSubmitting = _ref2.isSubmitting,\n        errors = _ref2.errors,\n        values = _ref2.values,\n        setFieldValue = _ref2.setFieldValue,\n        touched = _ref2.touched;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(formik__WEBPACK_IMPORTED_MODULE_1__.Form, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_set_residence_form_jsx__WEBPACK_IMPORTED_MODULE_8__.default, {\n      errors: errors,\n      touched: touched,\n      setFieldValue: setFieldValue,\n      residence_list: residence_list\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_4__.Text, {\n      as: \"p\",\n      size: \"xxs\",\n      weight: \"bold\",\n      className: \"set-residence__subtext\"\n    }, (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_5__.localize)('We need this to make sure our service complies with laws and regulations in your country.')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_4__.Button, {\n      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('set-residence__btn', {\n        'set-residence__btn--disabled': !values.residence || errors.residence || isSubmitting\n      }),\n      type: \"submit\",\n      is_disabled: !values.residence || !!errors.residence || isSubmitting,\n      text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_5__.localize)('Set residence'),\n      primary: true\n    }))));\n  }));\n};\n\nSetResidence.propTypes = {\n  enableApp: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),\n  onSetResidence: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),\n  residence_list: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array),\n  toggleModalVisibility: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)\n};\n\nvar SetResidenceModal = function SetResidenceModal(_ref3) {\n  var enableApp = _ref3.enableApp,\n      disableApp = _ref3.disableApp,\n      is_loading = _ref3.is_loading,\n      is_visible = _ref3.is_visible,\n      onSetResidence = _ref3.onSetResidence,\n      residence_list = _ref3.residence_list,\n      toggleSetResidenceModal = _ref3.toggleSetResidenceModal;\n  if (residence_list.length < 1) return null;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_4__.Dialog, {\n    is_visible: is_visible,\n    disableApp: disableApp,\n    enableApp: enableApp,\n    is_loading: is_loading || !residence_list.length,\n    is_content_centered: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(SetResidence, {\n    onSetResidence: onSetResidence,\n    residence_list: residence_list,\n    toggleModalVisibility: toggleSetResidenceModal,\n    enableApp: enableApp\n  }));\n};\n\nSetResidenceModal.propTypes = {\n  disableApp: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),\n  enableApp: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),\n  is_loading: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),\n  is_visible: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),\n  onSetResidence: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),\n  residence_list: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().object))\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,Stores_connect__WEBPACK_IMPORTED_MODULE_6__.connect)(function (_ref4) {\n  var ui = _ref4.ui,\n      client = _ref4.client;\n  return {\n    is_visible: ui.is_set_residence_modal_visible,\n    toggleSetResidenceModal: ui.toggleSetResidenceModal,\n    enableApp: ui.enableApp,\n    disableApp: ui.disableApp,\n    is_loading: ui.is_loading,\n    onSetResidence: client.onSetResidence,\n    residence_list: client.residence_list\n  };\n})(SetResidenceModal));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BcHAvQ29udGFpbmVycy9TZXRSZXNpZGVuY2VNb2RhbC9zZXQtcmVzaWRlbmNlLW1vZGFsLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL0FwcC9Db250YWluZXJzL1NldFJlc2lkZW5jZU1vZGFsL3NldC1yZXNpZGVuY2UtbW9kYWwuanN4PzRiNTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBGb3JtaWssIEZvcm0gfSBmcm9tICdmb3JtaWsnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24sIERpYWxvZywgVGV4dCB9IGZyb20gJ0BkZXJpdi9jb21wb25lbnRzJztcbmltcG9ydCB7IGxvY2FsaXplIH0gZnJvbSAnQGRlcml2L3RyYW5zbGF0aW9ucyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnU3RvcmVzL2Nvbm5lY3QnO1xuaW1wb3J0IHsgd2Vic2l0ZV9uYW1lIH0gZnJvbSAnQGRlcml2L3NoYXJlZCc7XG5pbXBvcnQgUmVzaWRlbmNlRm9ybSBmcm9tICcuL3NldC1yZXNpZGVuY2UtZm9ybS5qc3gnO1xuaW1wb3J0ICdTYXNzL2FwcC9tb2R1bGVzL3NldC1yZXNpZGVuY2Uuc2Nzcyc7XG5cbi8vIFRPRE86IE1vdmUgc29tZSBvZiB0aGVzZSBmdW5jdGlvbnMgdG8gaGVscGVycyBzaW5jZSBzb21lIG9mIHRoZW0gYXJlIHNoYXJlZCB3aXRoIEFjY291bnRTaWduVXBNb2RhbFxuY29uc3QgaXNSZXNpZGVuY2VUZXh0ID0gKGl0ZW0sIHZhbHVlcykgPT4gaXRlbS50ZXh0LnRvTG93ZXJDYXNlKCkgPT09IHZhbHVlcy5yZXNpZGVuY2UudG9Mb3dlckNhc2UoKTtcblxuY29uc3QgdmFsaWRhdGVSZXNpZGVuY2UgPSAodmFsdWVzLCByZXNpZGVuY2VfbGlzdCkgPT4ge1xuICAgIGNvbnN0IGVycm9ycyA9IHt9O1xuXG4gICAgaWYgKCF2YWx1ZXMucmVzaWRlbmNlKSB7XG4gICAgICAgIGVycm9ycy5yZXNpZGVuY2UgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGluZGV4X29mX3NlbGVjdGlvbiA9IHJlc2lkZW5jZV9saXN0LmZpbmRJbmRleChpdGVtID0+IGlzUmVzaWRlbmNlVGV4dChpdGVtLCB2YWx1ZXMpKTtcblxuICAgICAgICBpZiAoaW5kZXhfb2Zfc2VsZWN0aW9uID09PSAtMSB8fCByZXNpZGVuY2VfbGlzdFtpbmRleF9vZl9zZWxlY3Rpb25dLmRpc2FibGVkID09PSAnRElTQUJMRUQnKSB7XG4gICAgICAgICAgICBlcnJvcnMucmVzaWRlbmNlID0gbG9jYWxpemUoJ1VuZm9ydHVuYXRlbHksIHt7d2Vic2l0ZV9uYW1lfX0gaXMgbm90IGF2YWlsYWJsZSBpbiB5b3VyIGNvdW50cnkuJywge1xuICAgICAgICAgICAgICAgIHdlYnNpdGVfbmFtZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9ycztcbn07XG5cbmNvbnN0IFNldFJlc2lkZW5jZSA9ICh7IGVuYWJsZUFwcCwgb25TZXRSZXNpZGVuY2UsIHJlc2lkZW5jZV9saXN0LCB0b2dnbGVNb2RhbFZpc2liaWxpdHkgfSkgPT4ge1xuICAgIGNvbnN0IG9uU2V0UmVzaWRlbmNlQ29tcGxldGUgPSBlcnJvciA9PiB7XG4gICAgICAgIC8vIFRPRE86IFByb3BlciBlcnJvciBoYW5kbGluZyAoY3VycmVudGx5IHdlIGhhdmUgbm8gcGxhY2UgdG8gcHV0IHRoZSBtZXNzYWdlKVxuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBIYW5kbGUgbG93ZXIgbGV2ZWwgbW9kYWwgY29udHJvbHMgZHVlIHRvIG92ZXJyaWRpbmcgbW9kYWwgcmVuZGVyaW5nXG4gICAgICAgIHRvZ2dsZU1vZGFsVmlzaWJpbGl0eShmYWxzZSk7XG4gICAgICAgIGVuYWJsZUFwcCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBvblNldFJlc2lkZW5jZVBhc3N0aHJvdWdoID0gdmFsdWVzID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXhfb2Zfc2VsZWN0aW9uID0gcmVzaWRlbmNlX2xpc3QuZmluZEluZGV4KGl0ZW0gPT4gaXNSZXNpZGVuY2VUZXh0KGl0ZW0sIHZhbHVlcykpO1xuICAgICAgICBjb25zdCBtb2RkZWRfdmFsdWVzID0geyAuLi52YWx1ZXMsIHJlc2lkZW5jZTogcmVzaWRlbmNlX2xpc3RbaW5kZXhfb2Zfc2VsZWN0aW9uXS52YWx1ZSB9O1xuICAgICAgICBvblNldFJlc2lkZW5jZShtb2RkZWRfdmFsdWVzLCBvblNldFJlc2lkZW5jZUNvbXBsZXRlKTtcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZXQtcmVzaWRlbmNlJz5cbiAgICAgICAgICAgIDxGb3JtaWtcbiAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7IHJlc2lkZW5jZTogJycgfX1cbiAgICAgICAgICAgICAgICB2YWxpZGF0ZT17dmFsdWVzID0+IHZhbGlkYXRlUmVzaWRlbmNlKHZhbHVlcywgcmVzaWRlbmNlX2xpc3QpfVxuICAgICAgICAgICAgICAgIG9uU3VibWl0PXtvblNldFJlc2lkZW5jZVBhc3N0aHJvdWdofVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHsoeyBpc1N1Ym1pdHRpbmcsIGVycm9ycywgdmFsdWVzLCBzZXRGaWVsZFZhbHVlLCB0b3VjaGVkIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlc2lkZW5jZUZvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzPXtlcnJvcnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoZWQ9e3RvdWNoZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEZpZWxkVmFsdWU9e3NldEZpZWxkVmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2lkZW5jZV9saXN0PXtyZXNpZGVuY2VfbGlzdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGFzPSdwJyBzaXplPSd4eHMnIHdlaWdodD0nYm9sZCcgY2xhc3NOYW1lPSdzZXQtcmVzaWRlbmNlX19zdWJ0ZXh0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnV2UgbmVlZCB0aGlzIHRvIG1ha2Ugc3VyZSBvdXIgc2VydmljZSBjb21wbGllcyB3aXRoIGxhd3MgYW5kIHJlZ3VsYXRpb25zIGluIHlvdXIgY291bnRyeS4nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnc2V0LXJlc2lkZW5jZV9fYnRuJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzZXQtcmVzaWRlbmNlX19idG4tLWRpc2FibGVkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXZhbHVlcy5yZXNpZGVuY2UgfHwgZXJyb3JzLnJlc2lkZW5jZSB8fCBpc1N1Ym1pdHRpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzX2Rpc2FibGVkPXshdmFsdWVzLnJlc2lkZW5jZSB8fCAhIWVycm9ycy5yZXNpZGVuY2UgfHwgaXNTdWJtaXR0aW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17bG9jYWxpemUoJ1NldCByZXNpZGVuY2UnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Jlc2lkZW5jZUZvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvRm9ybWlrPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuU2V0UmVzaWRlbmNlLnByb3BUeXBlcyA9IHtcbiAgICBlbmFibGVBcHA6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uU2V0UmVzaWRlbmNlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICByZXNpZGVuY2VfbGlzdDogUHJvcFR5cGVzLmFycmF5LFxuICAgIHRvZ2dsZU1vZGFsVmlzaWJpbGl0eTogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5jb25zdCBTZXRSZXNpZGVuY2VNb2RhbCA9ICh7XG4gICAgZW5hYmxlQXBwLFxuICAgIGRpc2FibGVBcHAsXG4gICAgaXNfbG9hZGluZyxcbiAgICBpc192aXNpYmxlLFxuICAgIG9uU2V0UmVzaWRlbmNlLFxuICAgIHJlc2lkZW5jZV9saXN0LFxuICAgIHRvZ2dsZVNldFJlc2lkZW5jZU1vZGFsLFxufSkgPT4ge1xuICAgIGlmIChyZXNpZGVuY2VfbGlzdC5sZW5ndGggPCAxKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gKFxuICAgICAgICA8RGlhbG9nXG4gICAgICAgICAgICBpc192aXNpYmxlPXtpc192aXNpYmxlfVxuICAgICAgICAgICAgZGlzYWJsZUFwcD17ZGlzYWJsZUFwcH1cbiAgICAgICAgICAgIGVuYWJsZUFwcD17ZW5hYmxlQXBwfVxuICAgICAgICAgICAgaXNfbG9hZGluZz17aXNfbG9hZGluZyB8fCAhcmVzaWRlbmNlX2xpc3QubGVuZ3RofVxuICAgICAgICAgICAgaXNfY29udGVudF9jZW50ZXJlZFxuICAgICAgICA+XG4gICAgICAgICAgICA8U2V0UmVzaWRlbmNlXG4gICAgICAgICAgICAgICAgb25TZXRSZXNpZGVuY2U9e29uU2V0UmVzaWRlbmNlfVxuICAgICAgICAgICAgICAgIHJlc2lkZW5jZV9saXN0PXtyZXNpZGVuY2VfbGlzdH1cbiAgICAgICAgICAgICAgICB0b2dnbGVNb2RhbFZpc2liaWxpdHk9e3RvZ2dsZVNldFJlc2lkZW5jZU1vZGFsfVxuICAgICAgICAgICAgICAgIGVuYWJsZUFwcD17ZW5hYmxlQXBwfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9EaWFsb2c+XG4gICAgKTtcbn07XG5cblNldFJlc2lkZW5jZU1vZGFsLnByb3BUeXBlcyA9IHtcbiAgICBkaXNhYmxlQXBwOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBlbmFibGVBcHA6IFByb3BUeXBlcy5mdW5jLFxuICAgIGlzX2xvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuICAgIGlzX3Zpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgIG9uU2V0UmVzaWRlbmNlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICByZXNpZGVuY2VfbGlzdDogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCh7IHVpLCBjbGllbnQgfSkgPT4gKHtcbiAgICBpc192aXNpYmxlOiB1aS5pc19zZXRfcmVzaWRlbmNlX21vZGFsX3Zpc2libGUsXG4gICAgdG9nZ2xlU2V0UmVzaWRlbmNlTW9kYWw6IHVpLnRvZ2dsZVNldFJlc2lkZW5jZU1vZGFsLFxuICAgIGVuYWJsZUFwcDogdWkuZW5hYmxlQXBwLFxuICAgIGRpc2FibGVBcHA6IHVpLmRpc2FibGVBcHAsXG4gICAgaXNfbG9hZGluZzogdWkuaXNfbG9hZGluZyxcbiAgICBvblNldFJlc2lkZW5jZTogY2xpZW50Lm9uU2V0UmVzaWRlbmNlLFxuICAgIHJlc2lkZW5jZV9saXN0OiBjbGllbnQucmVzaWRlbmNlX2xpc3QsXG59KSkoU2V0UmVzaWRlbmNlTW9kYWwpO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBZEE7QUErQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./App/Containers/SetResidenceModal/set-residence-modal.jsx\n");

/***/ })

}]);