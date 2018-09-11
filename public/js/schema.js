/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/Schema/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/Schema/basic/index.js":
/*!**************************************!*\
  !*** ./source/Schema/basic/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_background_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/background-color */ \"./source/Schema/basic/properties/background-color.js\");\n/* harmony import */ var _properties_text_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties/text-color */ \"./source/Schema/basic/properties/text-color.js\");\n/* harmony import */ var _properties_font_family__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./properties/font-family */ \"./source/Schema/basic/properties/font-family.js\");\n/* harmony import */ var _properties_link_color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./properties/link-color */ \"./source/Schema/basic/properties/link-color.js\");\n/* harmony import */ var _properties_link_hover_color__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./properties/link-hover-color */ \"./source/Schema/basic/properties/link-hover-color.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nvar properties = Object.assign({}, _properties_background_color__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _properties_text_color__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _properties_font_family__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _properties_link_color__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _properties_link_hover_color__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\nvar propertyName = 'basic';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, propertyName, {\n    type: 'object',\n    title: propertyName,\n    description: 'Basic design styles',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/basic/index.js?");

/***/ }),

/***/ "./source/Schema/basic/properties/background-color.js":
/*!************************************************************!*\
  !*** ./source/Schema/basic/properties/background-color.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar propertyName = 'backgroundColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, propertyName, Object.assign({\n    title: propertyName,\n    description: 'Basic background color of the design'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/basic/properties/background-color.js?");

/***/ }),

/***/ "./source/Schema/basic/properties/font-family.js":
/*!*******************************************************!*\
  !*** ./source/Schema/basic/properties/font-family.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar propertyName = 'fontFamily';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, propertyName, Object.assign({\n    title: propertyName,\n    description: 'Basic font-family of the desing'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].font)));\n\n//# sourceURL=webpack:///./source/Schema/basic/properties/font-family.js?");

/***/ }),

/***/ "./source/Schema/basic/properties/link-color.js":
/*!******************************************************!*\
  !*** ./source/Schema/basic/properties/link-color.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar propertyName = 'linkColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, propertyName, Object.assign({\n    title: propertyName,\n    description: 'Basic link color of the design'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/basic/properties/link-color.js?");

/***/ }),

/***/ "./source/Schema/basic/properties/link-hover-color.js":
/*!************************************************************!*\
  !*** ./source/Schema/basic/properties/link-hover-color.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar propertyName = 'linkHoverColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, propertyName, Object.assign({\n    title: propertyName,\n    description: 'Basic link hover color of the design'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/basic/properties/link-hover-color.js?");

/***/ }),

/***/ "./source/Schema/basic/properties/text-color.js":
/*!******************************************************!*\
  !*** ./source/Schema/basic/properties/text-color.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar propertyName = 'textColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, propertyName, Object.assign({\n    title: propertyName,\n    description: 'Basic text color of the design'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/basic/properties/text-color.js?");

/***/ }),

/***/ "./source/Schema/components/buy-button/index.js":
/*!******************************************************!*\
  !*** ./source/Schema/components/buy-button/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/icon */ \"./source/Schema/components/buy-button/properties/icon/index.js\");\n/* harmony import */ var _properties_text_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties/text-color */ \"./source/Schema/components/buy-button/properties/text-color.js\");\n/* harmony import */ var _properties_text_hover_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./properties/text-hover-color */ \"./source/Schema/components/buy-button/properties/text-hover-color.js\");\n/* harmony import */ var _properties_background_color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./properties/background-color */ \"./source/Schema/components/buy-button/properties/background-color.js\");\n/* harmony import */ var _properties_background_hover_color__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./properties/background-hover-color */ \"./source/Schema/components/buy-button/properties/background-hover-color.js\");\n/* harmony import */ var _properties_font_family__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./properties/font-family */ \"./source/Schema/components/buy-button/properties/font-family.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\nvar properties = Object.assign({}, _properties_icon__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _properties_text_color__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _properties_text_hover_color__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _properties_background_color__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _properties_background_hover_color__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _properties_font_family__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\nvar propertyName = 'buyButton';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, propertyName, {\n    type: 'object',\n    title: propertyName,\n    description: 'Buy button',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/buy-button/index.js?");

/***/ }),

/***/ "./source/Schema/components/buy-button/properties/background-color.js":
/*!****************************************************************************!*\
  !*** ./source/Schema/components/buy-button/properties/background-color.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar propertyName = 'backgroundColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, propertyName, Object.assign({\n    title: propertyName,\n    description: '\"Buy\" button background color'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/buy-button/properties/background-color.js?");

/***/ }),

/***/ "./source/Schema/components/buy-button/properties/background-hover-color.js":
/*!**********************************************************************************!*\
  !*** ./source/Schema/components/buy-button/properties/background-hover-color.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar propertyName = 'backgroundHoverColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, propertyName, Object.assign({\n    title: propertyName,\n    description: '\"Buy\" button background hover color'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/buy-button/properties/background-hover-color.js?");

/***/ }),

/***/ "./source/Schema/components/buy-button/properties/font-family.js":
/*!***********************************************************************!*\
  !*** ./source/Schema/components/buy-button/properties/font-family.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar propertyName = 'fontFamily';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, propertyName, Object.assign({\n    title: propertyName,\n    description: '\"Buy\" button font family'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].font)));\n\n//# sourceURL=webpack:///./source/Schema/components/buy-button/properties/font-family.js?");

/***/ }),

/***/ "./source/Schema/components/buy-button/properties/icon/index.js":
/*!**********************************************************************!*\
  !*** ./source/Schema/components/buy-button/properties/icon/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/color */ \"./source/Schema/components/buy-button/properties/icon/properties/color.js\");\n/* harmony import */ var _properties_file__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties/file */ \"./source/Schema/components/buy-button/properties/icon/properties/file.js\");\n/* harmony import */ var _properties_hover_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./properties/hover-color */ \"./source/Schema/components/buy-button/properties/icon/properties/hover-color.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nvar properties = Object.assign({}, _properties_file__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _properties_color__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _properties_hover_color__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\nvar propertyName = 'icon';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, propertyName, {\n    type: 'object',\n    title: propertyName,\n    description: '\"Buy\" button icon',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/buy-button/properties/icon/index.js?");

/***/ }),

/***/ "./source/Schema/components/buy-button/properties/icon/properties/color.js":
/*!*********************************************************************************!*\
  !*** ./source/Schema/components/buy-button/properties/icon/properties/color.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar propertyName = 'color';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, propertyName, Object.assign({\n    title: propertyName,\n    description: '\"Buy\" button icon color'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/buy-button/properties/icon/properties/color.js?");

/***/ }),

/***/ "./source/Schema/components/buy-button/properties/icon/properties/file.js":
/*!********************************************************************************!*\
  !*** ./source/Schema/components/buy-button/properties/icon/properties/file.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar propertyName = 'file';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, propertyName, Object.assign({\n    title: propertyName,\n    description: 'SVG icon for buy button'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].file)));\n\n//# sourceURL=webpack:///./source/Schema/components/buy-button/properties/icon/properties/file.js?");

/***/ }),

/***/ "./source/Schema/components/buy-button/properties/icon/properties/hover-color.js":
/*!***************************************************************************************!*\
  !*** ./source/Schema/components/buy-button/properties/icon/properties/hover-color.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar propertyName = 'hoverColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, propertyName, Object.assign({\n    title: propertyName,\n    description: '\"Buy\" button icon hover color'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/buy-button/properties/icon/properties/hover-color.js?");

/***/ }),

/***/ "./source/Schema/components/buy-button/properties/text-color.js":
/*!**********************************************************************!*\
  !*** ./source/Schema/components/buy-button/properties/text-color.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar propertyName = 'textColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, propertyName, Object.assign({\n    title: propertyName,\n    description: '\"Buy\" button text color'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/buy-button/properties/text-color.js?");

/***/ }),

/***/ "./source/Schema/components/buy-button/properties/text-hover-color.js":
/*!****************************************************************************!*\
  !*** ./source/Schema/components/buy-button/properties/text-hover-color.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar propertyName = 'textHoverColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, propertyName, Object.assign({\n    title: propertyName,\n    description: '\"Buy\" button text hover color'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/buy-button/properties/text-hover-color.js?");

/***/ }),

/***/ "./source/Schema/definitions/color.js":
/*!********************************************!*\
  !*** ./source/Schema/definitions/color.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    type: 'string',\n    pattern: '^#([A-Fa-f0-9]{3}){1,2}$|^rgb\\\\(\\\\s*\\\\d{1,3},\\\\s*\\\\d{1,3},\\\\s*\\\\d{1,3}\\\\s*\\\\)$|^rgba\\\\(\\\\s*\\\\d{1,3},\\\\s*\\\\d{1,3},\\\\s*\\\\d{1,3},\\\\s*(0|1|(0?.\\\\d+))\\\\s*\\\\)$',\n    ui: {\n        'ui:widget': 'CustomColorWidget',\n        'ui:help': 'Supported formats: hex, rgb, rgba',\n        'ui:readonly': true\n    }\n});\n\n//# sourceURL=webpack:///./source/Schema/definitions/color.js?");

/***/ }),

/***/ "./source/Schema/definitions/file.js":
/*!*******************************************!*\
  !*** ./source/Schema/definitions/file.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    type: 'string',\n    ui: {\n        'ui:widget': 'CustomFileWidget',\n        'ui:help': 'The file must be in SVG format'\n    }\n});\n\n//# sourceURL=webpack:///./source/Schema/definitions/file.js?");

/***/ }),

/***/ "./source/Schema/definitions/font.js":
/*!*******************************************!*\
  !*** ./source/Schema/definitions/font.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    type: 'string',\n    ui: {\n        'ui:help': 'Comma separated font-family names'\n    }\n});\n\n//# sourceURL=webpack:///./source/Schema/definitions/font.js?");

/***/ }),

/***/ "./source/Schema/definitions/index.js":
/*!********************************************!*\
  !*** ./source/Schema/definitions/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color */ \"./source/Schema/definitions/color.js\");\n/* harmony import */ var _font__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./font */ \"./source/Schema/definitions/font.js\");\n/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./file */ \"./source/Schema/definitions/file.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({ font: _font__WEBPACK_IMPORTED_MODULE_1__[\"default\"], file: _file__WEBPACK_IMPORTED_MODULE_2__[\"default\"], color: _color__WEBPACK_IMPORTED_MODULE_0__[\"default\"] });\n\n//# sourceURL=webpack:///./source/Schema/definitions/index.js?");

/***/ }),

/***/ "./source/Schema/index.js":
/*!********************************!*\
  !*** ./source/Schema/index.js ***!
  \********************************/
/*! exports provided: schema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"schema\", function() { return schema; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic */ \"./source/Schema/basic/index.js\");\n/* harmony import */ var _components_buy_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/buy-button */ \"./source/Schema/components/buy-button/index.js\");\n\n\n\n\nvar properties = Object.assign({}, _basic__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _components_buy_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\nvar schema = {\n    type: 'object',\n    description: 'Design settings',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n};\n\n//# sourceURL=webpack:///./source/Schema/index.js?");

/***/ }),

/***/ "./source/Schema/utils.js":
/*!********************************!*\
  !*** ./source/Schema/utils.js ***!
  \********************************/
/*! exports provided: getKeyValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getKeyValues\", function() { return getKeyValues; });\nfunction getKeyValues(key, obj) {\n    var result = {};\n    if (obj.constructor !== Object) return result;\n    Object.keys(obj).forEach(function (k) {\n        if (obj[k].constructor === Object && obj[k].hasOwnProperty(key)) {\n            result[k] = obj[k][key];\n        };\n    });\n    return result;\n};\n\n\n\n//# sourceURL=webpack:///./source/Schema/utils.js?");

/***/ })

/******/ });