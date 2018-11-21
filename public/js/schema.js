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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/backgroundColor */ \"./source/Schema/basic/properties/backgroundColor.js\");\n/* harmony import */ var _properties_textColor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties/textColor */ \"./source/Schema/basic/properties/textColor.js\");\n/* harmony import */ var _properties_fontFamily__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./properties/fontFamily */ \"./source/Schema/basic/properties/fontFamily.js\");\n/* harmony import */ var _properties_linkColor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./properties/linkColor */ \"./source/Schema/basic/properties/linkColor.js\");\n/* harmony import */ var _properties_linkHoverColor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./properties/linkHoverColor */ \"./source/Schema/basic/properties/linkHoverColor.js\");\n/* harmony import */ var _properties_externalFontFamily__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./properties/externalFontFamily */ \"./source/Schema/basic/properties/externalFontFamily.js\");\n/* harmony import */ var _properties_themePrimaryColor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./properties/themePrimaryColor */ \"./source/Schema/basic/properties/themePrimaryColor.js\");\n/* harmony import */ var _properties_themeSecondaryColor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./properties/themeSecondaryColor */ \"./source/Schema/basic/properties/themeSecondaryColor.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\nvar NAME = 'basic';\n\nvar properties = Object.assign({}, _properties_externalFontFamily__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _properties_fontFamily__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _properties_themePrimaryColor__WEBPACK_IMPORTED_MODULE_7__[\"default\"], _properties_themeSecondaryColor__WEBPACK_IMPORTED_MODULE_8__[\"default\"], _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _properties_textColor__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _properties_linkColor__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _properties_linkHoverColor__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\nvar required = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getRequiredPropertyKeys\"])(Object.keys(properties), [Object.keys(_properties_externalFontFamily__WEBPACK_IMPORTED_MODULE_6__[\"default\"])[0]]);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: 'Basic design styles',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/basic/index.js?");

/***/ }),

/***/ "./source/Schema/basic/properties/backgroundColor.js":
/*!***********************************************************!*\
  !*** ./source/Schema/basic/properties/backgroundColor.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar propertyName = 'backgroundColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, propertyName, Object.assign({\n    title: propertyName,\n    description: 'Basic background color of the design'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/basic/properties/backgroundColor.js?");

/***/ }),

/***/ "./source/Schema/basic/properties/externalFontFamily.js":
/*!**************************************************************!*\
  !*** ./source/Schema/basic/properties/externalFontFamily.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar propertyName = 'externalFontFamily';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, propertyName, Object.assign({\n    title: propertyName,\n    description: 'URL for Google Fonts (see https://fonts.google.com/)'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].url)));\n\n//# sourceURL=webpack:///./source/Schema/basic/properties/externalFontFamily.js?");

/***/ }),

/***/ "./source/Schema/basic/properties/fontFamily.js":
/*!******************************************************!*\
  !*** ./source/Schema/basic/properties/fontFamily.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar propertyName = 'fontFamily';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, propertyName, Object.assign({\n    title: propertyName,\n    description: 'Basic font-family of the desing'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].font)));\n\n//# sourceURL=webpack:///./source/Schema/basic/properties/fontFamily.js?");

/***/ }),

/***/ "./source/Schema/basic/properties/linkColor.js":
/*!*****************************************************!*\
  !*** ./source/Schema/basic/properties/linkColor.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar propertyName = 'linkColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, propertyName, Object.assign({\n    title: propertyName,\n    description: 'Basic link color of the design'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/basic/properties/linkColor.js?");

/***/ }),

/***/ "./source/Schema/basic/properties/linkHoverColor.js":
/*!**********************************************************!*\
  !*** ./source/Schema/basic/properties/linkHoverColor.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar propertyName = 'linkHoverColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, propertyName, Object.assign({\n    title: propertyName,\n    description: 'Basic link hover color of the design'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/basic/properties/linkHoverColor.js?");

/***/ }),

/***/ "./source/Schema/basic/properties/textColor.js":
/*!*****************************************************!*\
  !*** ./source/Schema/basic/properties/textColor.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar propertyName = 'textColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, propertyName, Object.assign({\n    title: propertyName,\n    description: 'Basic text color of the design'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/basic/properties/textColor.js?");

/***/ }),

/***/ "./source/Schema/basic/properties/themePrimaryColor.js":
/*!*************************************************************!*\
  !*** ./source/Schema/basic/properties/themePrimaryColor.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar propertyName = 'themePrimaryColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, propertyName, Object.assign({\n    title: propertyName,\n    description: 'Primary theme color of the design'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/basic/properties/themePrimaryColor.js?");

/***/ }),

/***/ "./source/Schema/basic/properties/themeSecondaryColor.js":
/*!***************************************************************!*\
  !*** ./source/Schema/basic/properties/themeSecondaryColor.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar propertyName = 'themeSecondaryColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, propertyName, Object.assign({\n    title: propertyName,\n    description: 'Secondary theme color of the design'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/basic/properties/themeSecondaryColor.js?");

/***/ }),

/***/ "./source/Schema/components/buyButton/index.js":
/*!*****************************************************!*\
  !*** ./source/Schema/components/buyButton/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/icon */ \"./source/Schema/components/buyButton/properties/icon/index.js\");\n/* harmony import */ var _properties_textColor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties/textColor */ \"./source/Schema/components/buyButton/properties/textColor.js\");\n/* harmony import */ var _properties_textHoverColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./properties/textHoverColor */ \"./source/Schema/components/buyButton/properties/textHoverColor.js\");\n/* harmony import */ var _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./properties/backgroundColor */ \"./source/Schema/components/buyButton/properties/backgroundColor.js\");\n/* harmony import */ var _properties_backgroundHoverColor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./properties/backgroundHoverColor */ \"./source/Schema/components/buyButton/properties/backgroundHoverColor.js\");\n/* harmony import */ var _properties_fontFamily__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./properties/fontFamily */ \"./source/Schema/components/buyButton/properties/fontFamily.js\");\n/* harmony import */ var _properties_iconActive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./properties/iconActive */ \"./source/Schema/components/buyButton/properties/iconActive/index.js\");\n/* harmony import */ var _properties_backgroundActiveColor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./properties/backgroundActiveColor */ \"./source/Schema/components/buyButton/properties/backgroundActiveColor.js\");\n/* harmony import */ var _properties_textActiveColor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./properties/textActiveColor */ \"./source/Schema/components/buyButton/properties/textActiveColor.js\");\n/* harmony import */ var _properties_iconContactUs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./properties/iconContactUs */ \"./source/Schema/components/buyButton/properties/iconContactUs/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar NAME = 'buyButton';\n\nvar properties = Object.assign({}, _properties_fontFamily__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _properties_icon__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _properties_textColor__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _properties_textHoverColor__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _properties_backgroundHoverColor__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _properties_iconActive__WEBPACK_IMPORTED_MODULE_7__[\"default\"], _properties_backgroundActiveColor__WEBPACK_IMPORTED_MODULE_8__[\"default\"], _properties_textActiveColor__WEBPACK_IMPORTED_MODULE_9__[\"default\"], _properties_iconContactUs__WEBPACK_IMPORTED_MODULE_10__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: 'Buy button',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/buyButton/index.js?");

/***/ }),

/***/ "./source/Schema/components/buyButton/properties/backgroundActiveColor.js":
/*!********************************************************************************!*\
  !*** ./source/Schema/components/buyButton/properties/backgroundActiveColor.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'backgroundActiveColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'Background color for \"buy\" button of the product that is in cart'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/buyButton/properties/backgroundActiveColor.js?");

/***/ }),

/***/ "./source/Schema/components/buyButton/properties/backgroundColor.js":
/*!**************************************************************************!*\
  !*** ./source/Schema/components/buyButton/properties/backgroundColor.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'backgroundColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: '\"Buy\" button background color'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/buyButton/properties/backgroundColor.js?");

/***/ }),

/***/ "./source/Schema/components/buyButton/properties/backgroundHoverColor.js":
/*!*******************************************************************************!*\
  !*** ./source/Schema/components/buyButton/properties/backgroundHoverColor.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'backgroundHoverColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: '\"Buy\" button background hover color'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/buyButton/properties/backgroundHoverColor.js?");

/***/ }),

/***/ "./source/Schema/components/buyButton/properties/fontFamily.js":
/*!*********************************************************************!*\
  !*** ./source/Schema/components/buyButton/properties/fontFamily.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'fontFamily';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: '\"Buy\" button font family'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].font)));\n\n//# sourceURL=webpack:///./source/Schema/components/buyButton/properties/fontFamily.js?");

/***/ }),

/***/ "./source/Schema/components/buyButton/properties/icon/index.js":
/*!*********************************************************************!*\
  !*** ./source/Schema/components/buyButton/properties/icon/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/color */ \"./source/Schema/components/buyButton/properties/icon/properties/color.js\");\n/* harmony import */ var _properties_file__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties/file */ \"./source/Schema/components/buyButton/properties/icon/properties/file.js\");\n/* harmony import */ var _properties_hoverColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./properties/hoverColor */ \"./source/Schema/components/buyButton/properties/icon/properties/hoverColor.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nvar NAME = 'icon';\n\nvar properties = Object.assign({}, _properties_file__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _properties_color__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _properties_hoverColor__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: '\"Buy\" button icon',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/buyButton/properties/icon/index.js?");

/***/ }),

/***/ "./source/Schema/components/buyButton/properties/icon/properties/color.js":
/*!********************************************************************************!*\
  !*** ./source/Schema/components/buyButton/properties/icon/properties/color.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'color';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: '\"Buy\" button icon color'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/buyButton/properties/icon/properties/color.js?");

/***/ }),

/***/ "./source/Schema/components/buyButton/properties/icon/properties/file.js":
/*!*******************************************************************************!*\
  !*** ./source/Schema/components/buyButton/properties/icon/properties/file.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'file';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'SVG icon for \"buy\" button'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].file)));\n\n//# sourceURL=webpack:///./source/Schema/components/buyButton/properties/icon/properties/file.js?");

/***/ }),

/***/ "./source/Schema/components/buyButton/properties/icon/properties/hoverColor.js":
/*!*************************************************************************************!*\
  !*** ./source/Schema/components/buyButton/properties/icon/properties/hoverColor.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'hoverColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: '\"Buy\" button icon hover color'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/buyButton/properties/icon/properties/hoverColor.js?");

/***/ }),

/***/ "./source/Schema/components/buyButton/properties/iconActive/index.js":
/*!***************************************************************************!*\
  !*** ./source/Schema/components/buyButton/properties/iconActive/index.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/color */ \"./source/Schema/components/buyButton/properties/iconActive/properties/color.js\");\n/* harmony import */ var _properties_file__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties/file */ \"./source/Schema/components/buyButton/properties/iconActive/properties/file.js\");\n/* harmony import */ var _properties_hoverColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./properties/hoverColor */ \"./source/Schema/components/buyButton/properties/iconActive/properties/hoverColor.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nvar NAME = 'iconActive';\n\nvar properties = Object.assign({}, _properties_file__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _properties_color__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _properties_hoverColor__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: 'Icon for \"buy\" button of the product that is in cart',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/buyButton/properties/iconActive/index.js?");

/***/ }),

/***/ "./source/Schema/components/buyButton/properties/iconActive/properties/color.js":
/*!**************************************************************************************!*\
  !*** ./source/Schema/components/buyButton/properties/iconActive/properties/color.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'color';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: '\"Buy\" button icon color of the product that is in cart'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/buyButton/properties/iconActive/properties/color.js?");

/***/ }),

/***/ "./source/Schema/components/buyButton/properties/iconActive/properties/file.js":
/*!*************************************************************************************!*\
  !*** ./source/Schema/components/buyButton/properties/iconActive/properties/file.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'file';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'SVG icon for \"buy\" button of the product that is in cart'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].file)));\n\n//# sourceURL=webpack:///./source/Schema/components/buyButton/properties/iconActive/properties/file.js?");

/***/ }),

/***/ "./source/Schema/components/buyButton/properties/iconActive/properties/hoverColor.js":
/*!*******************************************************************************************!*\
  !*** ./source/Schema/components/buyButton/properties/iconActive/properties/hoverColor.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'hoverColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: '\"Buy\" button icon hover color of the product that is in cart'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n// SVG icon\n\n//# sourceURL=webpack:///./source/Schema/components/buyButton/properties/iconActive/properties/hoverColor.js?");

/***/ }),

/***/ "./source/Schema/components/buyButton/properties/iconContactUs/index.js":
/*!******************************************************************************!*\
  !*** ./source/Schema/components/buyButton/properties/iconContactUs/index.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/color */ \"./source/Schema/components/buyButton/properties/iconContactUs/properties/color.js\");\n/* harmony import */ var _properties_file__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties/file */ \"./source/Schema/components/buyButton/properties/iconContactUs/properties/file.js\");\n/* harmony import */ var _properties_hoverColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./properties/hoverColor */ \"./source/Schema/components/buyButton/properties/iconContactUs/properties/hoverColor.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nvar NAME = 'iconContactUs';\n\nvar properties = Object.assign({}, _properties_file__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _properties_color__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _properties_hoverColor__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: '\"Contact us\" button icon',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/buyButton/properties/iconContactUs/index.js?");

/***/ }),

/***/ "./source/Schema/components/buyButton/properties/iconContactUs/properties/color.js":
/*!*****************************************************************************************!*\
  !*** ./source/Schema/components/buyButton/properties/iconContactUs/properties/color.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'color';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: '\"Contact us\" button icon color'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/buyButton/properties/iconContactUs/properties/color.js?");

/***/ }),

/***/ "./source/Schema/components/buyButton/properties/iconContactUs/properties/file.js":
/*!****************************************************************************************!*\
  !*** ./source/Schema/components/buyButton/properties/iconContactUs/properties/file.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'file';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'SVG icon for \"contact us\" button'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].file)));\n\n//# sourceURL=webpack:///./source/Schema/components/buyButton/properties/iconContactUs/properties/file.js?");

/***/ }),

/***/ "./source/Schema/components/buyButton/properties/iconContactUs/properties/hoverColor.js":
/*!**********************************************************************************************!*\
  !*** ./source/Schema/components/buyButton/properties/iconContactUs/properties/hoverColor.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'hoverColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: '\"Contact us\" button icon hover color'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/buyButton/properties/iconContactUs/properties/hoverColor.js?");

/***/ }),

/***/ "./source/Schema/components/buyButton/properties/textActiveColor.js":
/*!**************************************************************************!*\
  !*** ./source/Schema/components/buyButton/properties/textActiveColor.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'textActiveColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'Text color for \"buy\" button of the product that is in cart'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/buyButton/properties/textActiveColor.js?");

/***/ }),

/***/ "./source/Schema/components/buyButton/properties/textColor.js":
/*!********************************************************************!*\
  !*** ./source/Schema/components/buyButton/properties/textColor.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'textColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: '\"Buy\" button text color'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/buyButton/properties/textColor.js?");

/***/ }),

/***/ "./source/Schema/components/buyButton/properties/textHoverColor.js":
/*!*************************************************************************!*\
  !*** ./source/Schema/components/buyButton/properties/textHoverColor.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'textHoverColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: '\"Buy\" button text hover color'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/buyButton/properties/textHoverColor.js?");

/***/ }),

/***/ "./source/Schema/components/catalogItem/index.js":
/*!*******************************************************!*\
  !*** ./source/Schema/components/catalogItem/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/backgroundColor */ \"./source/Schema/components/catalogItem/properties/backgroundColor.js\");\n/* harmony import */ var _properties_title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties/title */ \"./source/Schema/components/catalogItem/properties/title/index.js\");\n/* harmony import */ var _properties_price__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./properties/price */ \"./source/Schema/components/catalogItem/properties/price/index.js\");\n/* harmony import */ var _properties_oldPrice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./properties/oldPrice */ \"./source/Schema/components/catalogItem/properties/oldPrice/index.js\");\n/* harmony import */ var _properties_label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./properties/label */ \"./source/Schema/components/catalogItem/properties/label/index.js\");\n/* harmony import */ var _properties_stateAvailable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./properties/stateAvailable */ \"./source/Schema/components/catalogItem/properties/stateAvailable/index.js\");\n/* harmony import */ var _properties_stateClarify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./properties/stateClarify */ \"./source/Schema/components/catalogItem/properties/stateClarify/index.js\");\n/* harmony import */ var _properties_stateOrder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./properties/stateOrder */ \"./source/Schema/components/catalogItem/properties/stateOrder/index.js\");\n/* harmony import */ var _properties_gift__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./properties/gift */ \"./source/Schema/components/catalogItem/properties/gift/index.js\");\n/* harmony import */ var _properties_timer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./properties/timer */ \"./source/Schema/components/catalogItem/properties/timer/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar NAME = 'catalogItem';\n\nvar properties = Object.assign({}, _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _properties_title__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _properties_price__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _properties_oldPrice__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _properties_label__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _properties_stateAvailable__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _properties_stateClarify__WEBPACK_IMPORTED_MODULE_7__[\"default\"], _properties_stateOrder__WEBPACK_IMPORTED_MODULE_8__[\"default\"], _properties_gift__WEBPACK_IMPORTED_MODULE_9__[\"default\"], _properties_timer__WEBPACK_IMPORTED_MODULE_10__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: 'Item of a product list',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/catalogItem/index.js?");

/***/ }),

/***/ "./source/Schema/components/catalogItem/properties/backgroundColor.js":
/*!****************************************************************************!*\
  !*** ./source/Schema/components/catalogItem/properties/backgroundColor.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'backgroundColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'Background color of the product list item'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/catalogItem/properties/backgroundColor.js?");

/***/ }),

/***/ "./source/Schema/components/catalogItem/properties/gift/index.js":
/*!***********************************************************************!*\
  !*** ./source/Schema/components/catalogItem/properties/gift/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/icon */ \"./source/Schema/components/catalogItem/properties/gift/properties/icon/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar NAME = 'gift';\n\nvar properties = Object.assign({}, _properties_icon__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: 'Gift label of the product list item',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/catalogItem/properties/gift/index.js?");

/***/ }),

/***/ "./source/Schema/components/catalogItem/properties/gift/properties/icon/index.js":
/*!***************************************************************************************!*\
  !*** ./source/Schema/components/catalogItem/properties/gift/properties/icon/index.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/color */ \"./source/Schema/components/catalogItem/properties/gift/properties/icon/properties/color.js\");\n/* harmony import */ var _properties_file__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties/file */ \"./source/Schema/components/catalogItem/properties/gift/properties/icon/properties/file.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar NAME = 'icon';\n\nvar properties = Object.assign({}, _properties_file__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _properties_color__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: 'Gift icon',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/catalogItem/properties/gift/properties/icon/index.js?");

/***/ }),

/***/ "./source/Schema/components/catalogItem/properties/gift/properties/icon/properties/color.js":
/*!**************************************************************************************************!*\
  !*** ./source/Schema/components/catalogItem/properties/gift/properties/icon/properties/color.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions/index */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'color';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'Gift icon color'\n}, Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/catalogItem/properties/gift/properties/icon/properties/color.js?");

/***/ }),

/***/ "./source/Schema/components/catalogItem/properties/gift/properties/icon/properties/file.js":
/*!*************************************************************************************************!*\
  !*** ./source/Schema/components/catalogItem/properties/gift/properties/icon/properties/file.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions/index */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'file';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'SVG icon for product with gifts'\n}, Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].file)));\n\n//# sourceURL=webpack:///./source/Schema/components/catalogItem/properties/gift/properties/icon/properties/file.js?");

/***/ }),

/***/ "./source/Schema/components/catalogItem/properties/label/index.js":
/*!************************************************************************!*\
  !*** ./source/Schema/components/catalogItem/properties/label/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_textColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/textColor */ \"./source/Schema/components/catalogItem/properties/label/properties/textColor.js\");\n/* harmony import */ var _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties/backgroundColor */ \"./source/Schema/components/catalogItem/properties/label/properties/backgroundColor.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar NAME = 'label';\n\nvar properties = Object.assign({}, _properties_textColor__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: 'Product label',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/catalogItem/properties/label/index.js?");

/***/ }),

/***/ "./source/Schema/components/catalogItem/properties/label/properties/backgroundColor.js":
/*!*********************************************************************************************!*\
  !*** ./source/Schema/components/catalogItem/properties/label/properties/backgroundColor.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'backgroundColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'Product label background color'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/catalogItem/properties/label/properties/backgroundColor.js?");

/***/ }),

/***/ "./source/Schema/components/catalogItem/properties/label/properties/textColor.js":
/*!***************************************************************************************!*\
  !*** ./source/Schema/components/catalogItem/properties/label/properties/textColor.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'textColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'Product label text color'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/catalogItem/properties/label/properties/textColor.js?");

/***/ }),

/***/ "./source/Schema/components/catalogItem/properties/oldPrice/index.js":
/*!***************************************************************************!*\
  !*** ./source/Schema/components/catalogItem/properties/oldPrice/index.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_textColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/textColor */ \"./source/Schema/components/catalogItem/properties/oldPrice/properties/textColor.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar NAME = 'oldPrice';\n\nvar properties = Object.assign({}, _properties_textColor__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: 'Product old price',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/catalogItem/properties/oldPrice/index.js?");

/***/ }),

/***/ "./source/Schema/components/catalogItem/properties/oldPrice/properties/textColor.js":
/*!******************************************************************************************!*\
  !*** ./source/Schema/components/catalogItem/properties/oldPrice/properties/textColor.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'textColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'Product old price text color'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/catalogItem/properties/oldPrice/properties/textColor.js?");

/***/ }),

/***/ "./source/Schema/components/catalogItem/properties/price/index.js":
/*!************************************************************************!*\
  !*** ./source/Schema/components/catalogItem/properties/price/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_textColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/textColor */ \"./source/Schema/components/catalogItem/properties/price/properties/textColor.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar NAME = 'price';\n\nvar properties = Object.assign({}, _properties_textColor__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: 'Product price',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/catalogItem/properties/price/index.js?");

/***/ }),

/***/ "./source/Schema/components/catalogItem/properties/price/properties/textColor.js":
/*!***************************************************************************************!*\
  !*** ./source/Schema/components/catalogItem/properties/price/properties/textColor.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'textColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'Product price text color'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/catalogItem/properties/price/properties/textColor.js?");

/***/ }),

/***/ "./source/Schema/components/catalogItem/properties/stateAvailable/index.js":
/*!*********************************************************************************!*\
  !*** ./source/Schema/components/catalogItem/properties/stateAvailable/index.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_textColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/textColor */ \"./source/Schema/components/catalogItem/properties/stateAvailable/properties/textColor.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar NAME = 'stateAvailable';\n\nvar properties = Object.assign({}, _properties_textColor__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: 'Product \"available\" indicator',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/catalogItem/properties/stateAvailable/index.js?");

/***/ }),

/***/ "./source/Schema/components/catalogItem/properties/stateAvailable/properties/textColor.js":
/*!************************************************************************************************!*\
  !*** ./source/Schema/components/catalogItem/properties/stateAvailable/properties/textColor.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'textColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'Product \"available\" indicator text color'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/catalogItem/properties/stateAvailable/properties/textColor.js?");

/***/ }),

/***/ "./source/Schema/components/catalogItem/properties/stateClarify/index.js":
/*!*******************************************************************************!*\
  !*** ./source/Schema/components/catalogItem/properties/stateClarify/index.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_textColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/textColor */ \"./source/Schema/components/catalogItem/properties/stateClarify/properties/textColor.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar NAME = 'stateClarify';\n\nvar properties = Object.assign({}, _properties_textColor__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: 'Product \"clarify availability\" indicator',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/catalogItem/properties/stateClarify/index.js?");

/***/ }),

/***/ "./source/Schema/components/catalogItem/properties/stateClarify/properties/textColor.js":
/*!**********************************************************************************************!*\
  !*** ./source/Schema/components/catalogItem/properties/stateClarify/properties/textColor.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'textColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'Product \"clarify availability\" indicator text color'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/catalogItem/properties/stateClarify/properties/textColor.js?");

/***/ }),

/***/ "./source/Schema/components/catalogItem/properties/stateOrder/index.js":
/*!*****************************************************************************!*\
  !*** ./source/Schema/components/catalogItem/properties/stateOrder/index.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_textColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/textColor */ \"./source/Schema/components/catalogItem/properties/stateOrder/properties/textColor.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar NAME = 'stateOrder';\n\nvar properties = Object.assign({}, _properties_textColor__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: 'Product \"under order\" indicator',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/catalogItem/properties/stateOrder/index.js?");

/***/ }),

/***/ "./source/Schema/components/catalogItem/properties/stateOrder/properties/textColor.js":
/*!********************************************************************************************!*\
  !*** ./source/Schema/components/catalogItem/properties/stateOrder/properties/textColor.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'textColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'Product \"under order\" indicator text color'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/catalogItem/properties/stateOrder/properties/textColor.js?");

/***/ }),

/***/ "./source/Schema/components/catalogItem/properties/timer/index.js":
/*!************************************************************************!*\
  !*** ./source/Schema/components/catalogItem/properties/timer/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/icon */ \"./source/Schema/components/catalogItem/properties/timer/properties/icon/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar NAME = 'timer';\n\nvar properties = Object.assign({}, _properties_icon__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: 'Timer label of the product list item',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/catalogItem/properties/timer/index.js?");

/***/ }),

/***/ "./source/Schema/components/catalogItem/properties/timer/properties/icon/index.js":
/*!****************************************************************************************!*\
  !*** ./source/Schema/components/catalogItem/properties/timer/properties/icon/index.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/color */ \"./source/Schema/components/catalogItem/properties/timer/properties/icon/properties/color.js\");\n/* harmony import */ var _properties_file__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties/file */ \"./source/Schema/components/catalogItem/properties/timer/properties/icon/properties/file.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar NAME = 'icon';\n\nvar properties = Object.assign({}, _properties_file__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _properties_color__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: 'Timer icon',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/catalogItem/properties/timer/properties/icon/index.js?");

/***/ }),

/***/ "./source/Schema/components/catalogItem/properties/timer/properties/icon/properties/color.js":
/*!***************************************************************************************************!*\
  !*** ./source/Schema/components/catalogItem/properties/timer/properties/icon/properties/color.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions/index */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'color';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'Gift icon color'\n}, Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/catalogItem/properties/timer/properties/icon/properties/color.js?");

/***/ }),

/***/ "./source/Schema/components/catalogItem/properties/timer/properties/icon/properties/file.js":
/*!**************************************************************************************************!*\
  !*** ./source/Schema/components/catalogItem/properties/timer/properties/icon/properties/file.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions/index */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'file';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'SVG icon for product with gifts'\n}, Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].file)));\n\n//# sourceURL=webpack:///./source/Schema/components/catalogItem/properties/timer/properties/icon/properties/file.js?");

/***/ }),

/***/ "./source/Schema/components/catalogItem/properties/title/index.js":
/*!************************************************************************!*\
  !*** ./source/Schema/components/catalogItem/properties/title/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_textColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/textColor */ \"./source/Schema/components/catalogItem/properties/title/properties/textColor.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar NAME = 'title';\n\nvar properties = Object.assign({}, _properties_textColor__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: 'Product name',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/catalogItem/properties/title/index.js?");

/***/ }),

/***/ "./source/Schema/components/catalogItem/properties/title/properties/textColor.js":
/*!***************************************************************************************!*\
  !*** ./source/Schema/components/catalogItem/properties/title/properties/textColor.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'textColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'Product name text color'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/catalogItem/properties/title/properties/textColor.js?");

/***/ }),

/***/ "./source/Schema/components/footer/index.js":
/*!**************************************************!*\
  !*** ./source/Schema/components/footer/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/backgroundColor */ \"./source/Schema/components/footer/properties/backgroundColor.js\");\n/* harmony import */ var _properties_textColor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties/textColor */ \"./source/Schema/components/footer/properties/textColor.js\");\n/* harmony import */ var _properties_linkColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./properties/linkColor */ \"./source/Schema/components/footer/properties/linkColor.js\");\n/* harmony import */ var _properties_linkHoverColor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./properties/linkHoverColor */ \"./source/Schema/components/footer/properties/linkHoverColor.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nvar NAME = 'footer';\n\nvar properties = Object.assign({}, _properties_textColor__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _properties_linkColor__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _properties_linkHoverColor__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: 'Footer is a bottom part of the website with contact info, copyrights etc',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/footer/index.js?");

/***/ }),

/***/ "./source/Schema/components/footer/properties/backgroundColor.js":
/*!***********************************************************************!*\
  !*** ./source/Schema/components/footer/properties/backgroundColor.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'backgroundColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'Footer background color'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/footer/properties/backgroundColor.js?");

/***/ }),

/***/ "./source/Schema/components/footer/properties/linkColor.js":
/*!*****************************************************************!*\
  !*** ./source/Schema/components/footer/properties/linkColor.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar propertyName = 'linkColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, propertyName, Object.assign({\n    title: propertyName,\n    description: 'Color of the links inside footer'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/footer/properties/linkColor.js?");

/***/ }),

/***/ "./source/Schema/components/footer/properties/linkHoverColor.js":
/*!**********************************************************************!*\
  !*** ./source/Schema/components/footer/properties/linkHoverColor.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar propertyName = 'linkHoverColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, propertyName, Object.assign({\n    title: propertyName,\n    description: 'Hover color of the links inside footer'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/footer/properties/linkHoverColor.js?");

/***/ }),

/***/ "./source/Schema/components/footer/properties/textColor.js":
/*!*****************************************************************!*\
  !*** ./source/Schema/components/footer/properties/textColor.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'textColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'Footer text color'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/footer/properties/textColor.js?");

/***/ }),

/***/ "./source/Schema/components/groupItem/index.js":
/*!*****************************************************!*\
  !*** ./source/Schema/components/groupItem/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/backgroundColor */ \"./source/Schema/components/groupItem/properties/backgroundColor.js\");\n/* harmony import */ var _properties_counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties/counter */ \"./source/Schema/components/groupItem/properties/counter/index.js\");\n/* harmony import */ var _properties_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./properties/title */ \"./source/Schema/components/groupItem/properties/title/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nvar NAME = 'groupItem';\n\nvar properties = Object.assign({}, _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _properties_title__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _properties_counter__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: 'Item of a group list',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/groupItem/index.js?");

/***/ }),

/***/ "./source/Schema/components/groupItem/properties/backgroundColor.js":
/*!**************************************************************************!*\
  !*** ./source/Schema/components/groupItem/properties/backgroundColor.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'backgroundColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'Background color of the group list item'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/groupItem/properties/backgroundColor.js?");

/***/ }),

/***/ "./source/Schema/components/groupItem/properties/counter/index.js":
/*!************************************************************************!*\
  !*** ./source/Schema/components/groupItem/properties/counter/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_textColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/textColor */ \"./source/Schema/components/groupItem/properties/counter/properties/textColor.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar NAME = 'counter';\n\nvar properties = Object.assign({}, _properties_textColor__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: 'Product counter of the group',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/groupItem/properties/counter/index.js?");

/***/ }),

/***/ "./source/Schema/components/groupItem/properties/counter/properties/textColor.js":
/*!***************************************************************************************!*\
  !*** ./source/Schema/components/groupItem/properties/counter/properties/textColor.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'textColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'Product counter text color of the group'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/groupItem/properties/counter/properties/textColor.js?");

/***/ }),

/***/ "./source/Schema/components/groupItem/properties/title/index.js":
/*!**********************************************************************!*\
  !*** ./source/Schema/components/groupItem/properties/title/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_textColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/textColor */ \"./source/Schema/components/groupItem/properties/title/properties/textColor.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar NAME = 'title';\n\nvar properties = Object.assign({}, _properties_textColor__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: 'Group name',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/groupItem/properties/title/index.js?");

/***/ }),

/***/ "./source/Schema/components/groupItem/properties/title/properties/textColor.js":
/*!*************************************************************************************!*\
  !*** ./source/Schema/components/groupItem/properties/title/properties/textColor.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'textColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'Group name text color'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/groupItem/properties/title/properties/textColor.js?");

/***/ }),

/***/ "./source/Schema/components/hamburgerMenu/index.js":
/*!*********************************************************!*\
  !*** ./source/Schema/components/hamburgerMenu/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_textColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/textColor */ \"./source/Schema/components/hamburgerMenu/properties/textColor.js\");\n/* harmony import */ var _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties/backgroundColor */ \"./source/Schema/components/hamburgerMenu/properties/backgroundColor.js\");\n/* harmony import */ var _properties_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./properties/cart */ \"./source/Schema/components/hamburgerMenu/properties/cart/index.js\");\n/* harmony import */ var _properties_hamburger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./properties/hamburger */ \"./source/Schema/components/hamburgerMenu/properties/hamburger/index.js\");\n/* harmony import */ var _properties_phone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./properties/phone */ \"./source/Schema/components/hamburgerMenu/properties/phone/index.js\");\n/* harmony import */ var _properties_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./properties/search */ \"./source/Schema/components/hamburgerMenu/properties/search/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\nvar NAME = 'hamburgerMenu';\n\nvar properties = Object.assign({}, _properties_textColor__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _properties_hamburger__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _properties_search__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _properties_phone__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _properties_cart__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: 'Mobile top panel with menu, search, phone and cart buttons',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/hamburgerMenu/index.js?");

/***/ }),

/***/ "./source/Schema/components/hamburgerMenu/properties/backgroundColor.js":
/*!******************************************************************************!*\
  !*** ./source/Schema/components/hamburgerMenu/properties/backgroundColor.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'backgroundColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'Background color of the mobile top panel'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/hamburgerMenu/properties/backgroundColor.js?");

/***/ }),

/***/ "./source/Schema/components/hamburgerMenu/properties/cart/index.js":
/*!*************************************************************************!*\
  !*** ./source/Schema/components/hamburgerMenu/properties/cart/index.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/icon */ \"./source/Schema/components/hamburgerMenu/properties/cart/properties/icon/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar NAME = 'cart';\n\nvar properties = Object.assign({}, _properties_icon__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: '\"Cart\" button',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/hamburgerMenu/properties/cart/index.js?");

/***/ }),

/***/ "./source/Schema/components/hamburgerMenu/properties/cart/properties/icon/index.js":
/*!*****************************************************************************************!*\
  !*** ./source/Schema/components/hamburgerMenu/properties/cart/properties/icon/index.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/file */ \"./source/Schema/components/hamburgerMenu/properties/cart/properties/icon/properties/file.js\");\n/* harmony import */ var _properties_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties/color */ \"./source/Schema/components/hamburgerMenu/properties/cart/properties/icon/properties/color.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar NAME = 'icon';\n\nvar properties = Object.assign({}, _properties_file__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _properties_color__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: '\"Cart\" icon',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/hamburgerMenu/properties/cart/properties/icon/index.js?");

/***/ }),

/***/ "./source/Schema/components/hamburgerMenu/properties/cart/properties/icon/properties/color.js":
/*!****************************************************************************************************!*\
  !*** ./source/Schema/components/hamburgerMenu/properties/cart/properties/icon/properties/color.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions/index */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'color';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: '\"Cart\" icon color'\n}, Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/hamburgerMenu/properties/cart/properties/icon/properties/color.js?");

/***/ }),

/***/ "./source/Schema/components/hamburgerMenu/properties/cart/properties/icon/properties/file.js":
/*!***************************************************************************************************!*\
  !*** ./source/Schema/components/hamburgerMenu/properties/cart/properties/icon/properties/file.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions/index */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'file';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'SVG of the \"cart\" icon'\n}, Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].file)));\n\n//# sourceURL=webpack:///./source/Schema/components/hamburgerMenu/properties/cart/properties/icon/properties/file.js?");

/***/ }),

/***/ "./source/Schema/components/hamburgerMenu/properties/hamburger/index.js":
/*!******************************************************************************!*\
  !*** ./source/Schema/components/hamburgerMenu/properties/hamburger/index.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/icon */ \"./source/Schema/components/hamburgerMenu/properties/hamburger/properties/icon/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar NAME = 'hamburger';\n\nvar properties = Object.assign({}, _properties_icon__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: '\"Hamburger\" button',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/hamburgerMenu/properties/hamburger/index.js?");

/***/ }),

/***/ "./source/Schema/components/hamburgerMenu/properties/hamburger/properties/icon/index.js":
/*!**********************************************************************************************!*\
  !*** ./source/Schema/components/hamburgerMenu/properties/hamburger/properties/icon/index.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/file */ \"./source/Schema/components/hamburgerMenu/properties/hamburger/properties/icon/properties/file.js\");\n/* harmony import */ var _properties_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties/color */ \"./source/Schema/components/hamburgerMenu/properties/hamburger/properties/icon/properties/color.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar NAME = 'icon';\n\nvar properties = Object.assign({}, _properties_file__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _properties_color__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: '\"Hamburger\" icon',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/hamburgerMenu/properties/hamburger/properties/icon/index.js?");

/***/ }),

/***/ "./source/Schema/components/hamburgerMenu/properties/hamburger/properties/icon/properties/color.js":
/*!*********************************************************************************************************!*\
  !*** ./source/Schema/components/hamburgerMenu/properties/hamburger/properties/icon/properties/color.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions/index */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'color';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: '\"Hamburger\" icon color'\n}, Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/hamburgerMenu/properties/hamburger/properties/icon/properties/color.js?");

/***/ }),

/***/ "./source/Schema/components/hamburgerMenu/properties/hamburger/properties/icon/properties/file.js":
/*!********************************************************************************************************!*\
  !*** ./source/Schema/components/hamburgerMenu/properties/hamburger/properties/icon/properties/file.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions/index */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'file';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'SVG of the \"hamburger\" icon'\n}, Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].file)));\n\n//# sourceURL=webpack:///./source/Schema/components/hamburgerMenu/properties/hamburger/properties/icon/properties/file.js?");

/***/ }),

/***/ "./source/Schema/components/hamburgerMenu/properties/phone/index.js":
/*!**************************************************************************!*\
  !*** ./source/Schema/components/hamburgerMenu/properties/phone/index.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/icon */ \"./source/Schema/components/hamburgerMenu/properties/phone/properties/icon/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar NAME = 'phone';\n\nvar properties = Object.assign({}, _properties_icon__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: '\"Phone\" button',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/hamburgerMenu/properties/phone/index.js?");

/***/ }),

/***/ "./source/Schema/components/hamburgerMenu/properties/phone/properties/icon/index.js":
/*!******************************************************************************************!*\
  !*** ./source/Schema/components/hamburgerMenu/properties/phone/properties/icon/index.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/file */ \"./source/Schema/components/hamburgerMenu/properties/phone/properties/icon/properties/file.js\");\n/* harmony import */ var _properties_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties/color */ \"./source/Schema/components/hamburgerMenu/properties/phone/properties/icon/properties/color.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar NAME = 'icon';\n\nvar properties = Object.assign({}, _properties_file__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _properties_color__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: '\"Phone\" icon',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/hamburgerMenu/properties/phone/properties/icon/index.js?");

/***/ }),

/***/ "./source/Schema/components/hamburgerMenu/properties/phone/properties/icon/properties/color.js":
/*!*****************************************************************************************************!*\
  !*** ./source/Schema/components/hamburgerMenu/properties/phone/properties/icon/properties/color.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions/index */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'color';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: '\"Phone\" icon color'\n}, Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/hamburgerMenu/properties/phone/properties/icon/properties/color.js?");

/***/ }),

/***/ "./source/Schema/components/hamburgerMenu/properties/phone/properties/icon/properties/file.js":
/*!****************************************************************************************************!*\
  !*** ./source/Schema/components/hamburgerMenu/properties/phone/properties/icon/properties/file.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions/index */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'file';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'SVG of the \"phone\" icon'\n}, Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].file)));\n\n//# sourceURL=webpack:///./source/Schema/components/hamburgerMenu/properties/phone/properties/icon/properties/file.js?");

/***/ }),

/***/ "./source/Schema/components/hamburgerMenu/properties/search/index.js":
/*!***************************************************************************!*\
  !*** ./source/Schema/components/hamburgerMenu/properties/search/index.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/icon */ \"./source/Schema/components/hamburgerMenu/properties/search/properties/icon/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar NAME = 'search';\n\nvar properties = Object.assign({}, _properties_icon__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: '\"Search\" button',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/hamburgerMenu/properties/search/index.js?");

/***/ }),

/***/ "./source/Schema/components/hamburgerMenu/properties/search/properties/icon/index.js":
/*!*******************************************************************************************!*\
  !*** ./source/Schema/components/hamburgerMenu/properties/search/properties/icon/index.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/file */ \"./source/Schema/components/hamburgerMenu/properties/search/properties/icon/properties/file.js\");\n/* harmony import */ var _properties_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties/color */ \"./source/Schema/components/hamburgerMenu/properties/search/properties/icon/properties/color.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar NAME = 'icon';\n\nvar properties = Object.assign({}, _properties_file__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _properties_color__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: '\"Search\" icon',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/hamburgerMenu/properties/search/properties/icon/index.js?");

/***/ }),

/***/ "./source/Schema/components/hamburgerMenu/properties/search/properties/icon/properties/color.js":
/*!******************************************************************************************************!*\
  !*** ./source/Schema/components/hamburgerMenu/properties/search/properties/icon/properties/color.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions/index */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'color';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: '\"Search\" icon color'\n}, Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/hamburgerMenu/properties/search/properties/icon/properties/color.js?");

/***/ }),

/***/ "./source/Schema/components/hamburgerMenu/properties/search/properties/icon/properties/file.js":
/*!*****************************************************************************************************!*\
  !*** ./source/Schema/components/hamburgerMenu/properties/search/properties/icon/properties/file.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions/index */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'file';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'SVG of the \"search\" icon'\n}, Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].file)));\n\n//# sourceURL=webpack:///./source/Schema/components/hamburgerMenu/properties/search/properties/icon/properties/file.js?");

/***/ }),

/***/ "./source/Schema/components/hamburgerMenu/properties/textColor.js":
/*!************************************************************************!*\
  !*** ./source/Schema/components/hamburgerMenu/properties/textColor.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'textColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'Text color of the mobile top panel'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/hamburgerMenu/properties/textColor.js?");

/***/ }),

/***/ "./source/Schema/components/header/index.js":
/*!**************************************************!*\
  !*** ./source/Schema/components/header/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/backgroundColor */ \"./source/Schema/components/header/properties/backgroundColor.js\");\n/* harmony import */ var _properties_textColor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties/textColor */ \"./source/Schema/components/header/properties/textColor.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar NAME = 'header';\n\nvar properties = Object.assign({}, _properties_textColor__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: 'Header is a top part of the website with logo, company name etc',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/header/index.js?");

/***/ }),

/***/ "./source/Schema/components/header/properties/backgroundColor.js":
/*!***********************************************************************!*\
  !*** ./source/Schema/components/header/properties/backgroundColor.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'backgroundColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'Header background color'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/header/properties/backgroundColor.js?");

/***/ }),

/***/ "./source/Schema/components/header/properties/textColor.js":
/*!*****************************************************************!*\
  !*** ./source/Schema/components/header/properties/textColor.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'textColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'Header text color'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/header/properties/textColor.js?");

/***/ }),

/***/ "./source/Schema/components/horizontalMenu/index.js":
/*!**********************************************************!*\
  !*** ./source/Schema/components/horizontalMenu/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/backgroundColor */ \"./source/Schema/components/horizontalMenu/properties/backgroundColor.js\");\n/* harmony import */ var _properties_textColor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties/textColor */ \"./source/Schema/components/horizontalMenu/properties/textColor.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar NAME = 'horizontalMenu';\n\nvar properties = Object.assign({}, _properties_textColor__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: 'Horizontal menu',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/horizontalMenu/index.js?");

/***/ }),

/***/ "./source/Schema/components/horizontalMenu/properties/backgroundColor.js":
/*!*******************************************************************************!*\
  !*** ./source/Schema/components/horizontalMenu/properties/backgroundColor.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'backgroundColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'Horizontal menu background color'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/horizontalMenu/properties/backgroundColor.js?");

/***/ }),

/***/ "./source/Schema/components/horizontalMenu/properties/textColor.js":
/*!*************************************************************************!*\
  !*** ./source/Schema/components/horizontalMenu/properties/textColor.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'textColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'Horizontal menu text color'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/horizontalMenu/properties/textColor.js?");

/***/ }),

/***/ "./source/Schema/components/navigationLink/index.js":
/*!**********************************************************!*\
  !*** ./source/Schema/components/navigationLink/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/icon */ \"./source/Schema/components/navigationLink/properties/icon/index.js\");\n/* harmony import */ var _properties_textColor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties/textColor */ \"./source/Schema/components/navigationLink/properties/textColor.js\");\n/* harmony import */ var _properties_textHoverColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./properties/textHoverColor */ \"./source/Schema/components/navigationLink/properties/textHoverColor.js\");\n/* harmony import */ var _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./properties/backgroundColor */ \"./source/Schema/components/navigationLink/properties/backgroundColor.js\");\n/* harmony import */ var _properties_backgroundHoverColor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./properties/backgroundHoverColor */ \"./source/Schema/components/navigationLink/properties/backgroundHoverColor.js\");\n/* harmony import */ var _properties_fontFamily__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./properties/fontFamily */ \"./source/Schema/components/navigationLink/properties/fontFamily.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\nvar NAME = 'navigationLink';\n\nvar properties = Object.assign({}, _properties_fontFamily__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _properties_textColor__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _properties_textHoverColor__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _properties_backgroundHoverColor__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _properties_icon__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: 'Navigation element (link) such as \"show more\", \"read more\", \"more\" etc.',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/navigationLink/index.js?");

/***/ }),

/***/ "./source/Schema/components/navigationLink/properties/backgroundColor.js":
/*!*******************************************************************************!*\
  !*** ./source/Schema/components/navigationLink/properties/backgroundColor.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'backgroundColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'Navigation link background color'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/navigationLink/properties/backgroundColor.js?");

/***/ }),

/***/ "./source/Schema/components/navigationLink/properties/backgroundHoverColor.js":
/*!************************************************************************************!*\
  !*** ./source/Schema/components/navigationLink/properties/backgroundHoverColor.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'backgroundHoverColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'Navigation link background hover color'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/navigationLink/properties/backgroundHoverColor.js?");

/***/ }),

/***/ "./source/Schema/components/navigationLink/properties/fontFamily.js":
/*!**************************************************************************!*\
  !*** ./source/Schema/components/navigationLink/properties/fontFamily.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'fontFamily';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'Navigation link font family'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].font)));\n\n//# sourceURL=webpack:///./source/Schema/components/navigationLink/properties/fontFamily.js?");

/***/ }),

/***/ "./source/Schema/components/navigationLink/properties/icon/index.js":
/*!**************************************************************************!*\
  !*** ./source/Schema/components/navigationLink/properties/icon/index.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/color */ \"./source/Schema/components/navigationLink/properties/icon/properties/color.js\");\n/* harmony import */ var _properties_file__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties/file */ \"./source/Schema/components/navigationLink/properties/icon/properties/file.js\");\n/* harmony import */ var _properties_hoverColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./properties/hoverColor */ \"./source/Schema/components/navigationLink/properties/icon/properties/hoverColor.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nvar NAME = 'icon';\n\nvar properties = Object.assign({}, _properties_file__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _properties_color__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _properties_hoverColor__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: 'Navigation link icon',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/navigationLink/properties/icon/index.js?");

/***/ }),

/***/ "./source/Schema/components/navigationLink/properties/icon/properties/color.js":
/*!*************************************************************************************!*\
  !*** ./source/Schema/components/navigationLink/properties/icon/properties/color.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'color';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'Navigation link icon color'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/navigationLink/properties/icon/properties/color.js?");

/***/ }),

/***/ "./source/Schema/components/navigationLink/properties/icon/properties/file.js":
/*!************************************************************************************!*\
  !*** ./source/Schema/components/navigationLink/properties/icon/properties/file.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'file';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'SVG icon for navigation link'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].file)));\n\n//# sourceURL=webpack:///./source/Schema/components/navigationLink/properties/icon/properties/file.js?");

/***/ }),

/***/ "./source/Schema/components/navigationLink/properties/icon/properties/hoverColor.js":
/*!******************************************************************************************!*\
  !*** ./source/Schema/components/navigationLink/properties/icon/properties/hoverColor.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'hoverColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'Navigation link icon hover color'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/navigationLink/properties/icon/properties/hoverColor.js?");

/***/ }),

/***/ "./source/Schema/components/navigationLink/properties/textColor.js":
/*!*************************************************************************!*\
  !*** ./source/Schema/components/navigationLink/properties/textColor.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'textColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'Navigation link color'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/navigationLink/properties/textColor.js?");

/***/ }),

/***/ "./source/Schema/components/navigationLink/properties/textHoverColor.js":
/*!******************************************************************************!*\
  !*** ./source/Schema/components/navigationLink/properties/textHoverColor.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'textHoverColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'Navigation link hover color'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/navigationLink/properties/textHoverColor.js?");

/***/ }),

/***/ "./source/Schema/components/portfolioItem/index.js":
/*!*********************************************************!*\
  !*** ./source/Schema/components/portfolioItem/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_textColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/textColor */ \"./source/Schema/components/portfolioItem/properties/textColor.js\");\n/* harmony import */ var _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties/backgroundColor */ \"./source/Schema/components/portfolioItem/properties/backgroundColor.js\");\n/* harmony import */ var _properties_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./properties/title */ \"./source/Schema/components/portfolioItem/properties/title/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nvar NAME = 'portfolioItem';\n\nvar properties = Object.assign({}, _properties_textColor__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _properties_title__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: 'Item of a portfolio list',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/portfolioItem/index.js?");

/***/ }),

/***/ "./source/Schema/components/portfolioItem/properties/backgroundColor.js":
/*!******************************************************************************!*\
  !*** ./source/Schema/components/portfolioItem/properties/backgroundColor.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'backgroundColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'Background color of the portfolio list item'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/portfolioItem/properties/backgroundColor.js?");

/***/ }),

/***/ "./source/Schema/components/portfolioItem/properties/textColor.js":
/*!************************************************************************!*\
  !*** ./source/Schema/components/portfolioItem/properties/textColor.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'textColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'Text color of the portfolio list item'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/portfolioItem/properties/textColor.js?");

/***/ }),

/***/ "./source/Schema/components/portfolioItem/properties/title/index.js":
/*!**************************************************************************!*\
  !*** ./source/Schema/components/portfolioItem/properties/title/index.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_textColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/textColor */ \"./source/Schema/components/portfolioItem/properties/title/properties/textColor.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar NAME = 'title';\n\nvar properties = Object.assign({}, _properties_textColor__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: 'Portfolio name',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/portfolioItem/properties/title/index.js?");

/***/ }),

/***/ "./source/Schema/components/portfolioItem/properties/title/properties/textColor.js":
/*!*****************************************************************************************!*\
  !*** ./source/Schema/components/portfolioItem/properties/title/properties/textColor.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'textColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'Portfolio name text color'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/portfolioItem/properties/title/properties/textColor.js?");

/***/ }),

/***/ "./source/Schema/components/promoPanel/index.js":
/*!******************************************************!*\
  !*** ./source/Schema/components/promoPanel/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/backgroundColor */ \"./source/Schema/components/promoPanel/properties/backgroundColor.js\");\n/* harmony import */ var _properties_textColor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties/textColor */ \"./source/Schema/components/promoPanel/properties/textColor.js\");\n/* harmony import */ var _properties_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./properties/button */ \"./source/Schema/components/promoPanel/properties/button/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nvar NAME = 'promoPanel';\n\nvar properties = Object.assign({}, _properties_textColor__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _properties_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: 'Promo panel',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/promoPanel/index.js?");

/***/ }),

/***/ "./source/Schema/components/promoPanel/properties/backgroundColor.js":
/*!***************************************************************************!*\
  !*** ./source/Schema/components/promoPanel/properties/backgroundColor.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'backgroundColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'Promo panel background color'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/promoPanel/properties/backgroundColor.js?");

/***/ }),

/***/ "./source/Schema/components/promoPanel/properties/button/index.js":
/*!************************************************************************!*\
  !*** ./source/Schema/components/promoPanel/properties/button/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/backgroundColor */ \"./source/Schema/components/promoPanel/properties/button/properties/backgroundColor.js\");\n/* harmony import */ var _properties_borderColor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties/borderColor */ \"./source/Schema/components/promoPanel/properties/button/properties/borderColor.js\");\n/* harmony import */ var _properties_textColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./properties/textColor */ \"./source/Schema/components/promoPanel/properties/button/properties/textColor.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nvar NAME = 'button';\n\nvar properties = Object.assign({}, _properties_textColor__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _properties_borderColor__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: 'Promo panel button',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/promoPanel/properties/button/index.js?");

/***/ }),

/***/ "./source/Schema/components/promoPanel/properties/button/properties/backgroundColor.js":
/*!*********************************************************************************************!*\
  !*** ./source/Schema/components/promoPanel/properties/button/properties/backgroundColor.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'backgroundColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'Background color of the promo panel button'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/promoPanel/properties/button/properties/backgroundColor.js?");

/***/ }),

/***/ "./source/Schema/components/promoPanel/properties/button/properties/borderColor.js":
/*!*****************************************************************************************!*\
  !*** ./source/Schema/components/promoPanel/properties/button/properties/borderColor.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'borderColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'Border color of the promo panel button'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/promoPanel/properties/button/properties/borderColor.js?");

/***/ }),

/***/ "./source/Schema/components/promoPanel/properties/button/properties/textColor.js":
/*!***************************************************************************************!*\
  !*** ./source/Schema/components/promoPanel/properties/button/properties/textColor.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'textColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'Text color of the promo panel button'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/promoPanel/properties/button/properties/textColor.js?");

/***/ }),

/***/ "./source/Schema/components/promoPanel/properties/textColor.js":
/*!*********************************************************************!*\
  !*** ./source/Schema/components/promoPanel/properties/textColor.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'textColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'Promo panel text color'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/promoPanel/properties/textColor.js?");

/***/ }),

/***/ "./source/Schema/components/sidebar/index.js":
/*!***************************************************!*\
  !*** ./source/Schema/components/sidebar/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/backgroundColor */ \"./source/Schema/components/sidebar/properties/backgroundColor.js\");\n/* harmony import */ var _properties_textColor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties/textColor */ \"./source/Schema/components/sidebar/properties/textColor.js\");\n/* harmony import */ var _properties_linkColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./properties/linkColor */ \"./source/Schema/components/sidebar/properties/linkColor.js\");\n/* harmony import */ var _properties_linkHoverColor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./properties/linkHoverColor */ \"./source/Schema/components/sidebar/properties/linkHoverColor.js\");\n/* harmony import */ var _properties_title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./properties/title */ \"./source/Schema/components/sidebar/properties/title/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nvar NAME = 'sidebar';\n\nvar properties = Object.assign({}, _properties_textColor__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _properties_linkColor__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _properties_linkHoverColor__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _properties_title__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: 'Sidebar is a left|right part of the website',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/sidebar/index.js?");

/***/ }),

/***/ "./source/Schema/components/sidebar/properties/backgroundColor.js":
/*!************************************************************************!*\
  !*** ./source/Schema/components/sidebar/properties/backgroundColor.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'backgroundColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'Sidebar background color'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/sidebar/properties/backgroundColor.js?");

/***/ }),

/***/ "./source/Schema/components/sidebar/properties/linkColor.js":
/*!******************************************************************!*\
  !*** ./source/Schema/components/sidebar/properties/linkColor.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar propertyName = 'linkColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, propertyName, Object.assign({\n    title: propertyName,\n    description: 'Color of the links inside sidebar'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/sidebar/properties/linkColor.js?");

/***/ }),

/***/ "./source/Schema/components/sidebar/properties/linkHoverColor.js":
/*!***********************************************************************!*\
  !*** ./source/Schema/components/sidebar/properties/linkHoverColor.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar propertyName = 'linkHoverColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, propertyName, Object.assign({\n    title: propertyName,\n    description: 'Hover color of the links inside sidebar'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/sidebar/properties/linkHoverColor.js?");

/***/ }),

/***/ "./source/Schema/components/sidebar/properties/textColor.js":
/*!******************************************************************!*\
  !*** ./source/Schema/components/sidebar/properties/textColor.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'textColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'Sidebar text color'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/sidebar/properties/textColor.js?");

/***/ }),

/***/ "./source/Schema/components/sidebar/properties/title/index.js":
/*!********************************************************************!*\
  !*** ./source/Schema/components/sidebar/properties/title/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/backgroundColor */ \"./source/Schema/components/sidebar/properties/title/properties/backgroundColor.js\");\n/* harmony import */ var _properties_fontFamily__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties/fontFamily */ \"./source/Schema/components/sidebar/properties/title/properties/fontFamily.js\");\n/* harmony import */ var _properties_textColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./properties/textColor */ \"./source/Schema/components/sidebar/properties/title/properties/textColor.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nvar NAME = 'title';\n\nvar properties = Object.assign({}, _properties_fontFamily__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _properties_textColor__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: 'Sidebar title',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/sidebar/properties/title/index.js?");

/***/ }),

/***/ "./source/Schema/components/sidebar/properties/title/properties/backgroundColor.js":
/*!*****************************************************************************************!*\
  !*** ./source/Schema/components/sidebar/properties/title/properties/backgroundColor.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar propertyName = 'backgroundColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, propertyName, Object.assign({\n    title: propertyName,\n    description: 'Background color of the sidebar title'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/sidebar/properties/title/properties/backgroundColor.js?");

/***/ }),

/***/ "./source/Schema/components/sidebar/properties/title/properties/fontFamily.js":
/*!************************************************************************************!*\
  !*** ./source/Schema/components/sidebar/properties/title/properties/fontFamily.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'fontFamily';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'Font family of the sidebar title'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].font)));\n\n//# sourceURL=webpack:///./source/Schema/components/sidebar/properties/title/properties/fontFamily.js?");

/***/ }),

/***/ "./source/Schema/components/sidebar/properties/title/properties/textColor.js":
/*!***********************************************************************************!*\
  !*** ./source/Schema/components/sidebar/properties/title/properties/textColor.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar propertyName = 'textColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, propertyName, Object.assign({\n    title: propertyName,\n    description: 'Text color of the sidebar title'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/sidebar/properties/title/properties/textColor.js?");

/***/ }),

/***/ "./source/Schema/components/slider/index.js":
/*!**************************************************!*\
  !*** ./source/Schema/components/slider/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/navigation */ \"./source/Schema/components/slider/properties/navigation/index.js\");\n/* harmony import */ var _properties_arrowPrev__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties/arrowPrev */ \"./source/Schema/components/slider/properties/arrowPrev/index.js\");\n/* harmony import */ var _properties_arrowNext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./properties/arrowNext */ \"./source/Schema/components/slider/properties/arrowNext/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nvar NAME = 'slider';\n\nvar properties = Object.assign({}, _properties_navigation__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _properties_arrowPrev__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _properties_arrowNext__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: 'Website slider',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/slider/index.js?");

/***/ }),

/***/ "./source/Schema/components/slider/properties/arrowNext/index.js":
/*!***********************************************************************!*\
  !*** ./source/Schema/components/slider/properties/arrowNext/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/icon */ \"./source/Schema/components/slider/properties/arrowNext/properties/icon/index.js\");\n/* harmony import */ var _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties/backgroundColor */ \"./source/Schema/components/slider/properties/arrowNext/properties/backgroundColor.js\");\n/* harmony import */ var _properties_backgroundHoverColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./properties/backgroundHoverColor */ \"./source/Schema/components/slider/properties/arrowNext/properties/backgroundHoverColor.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nvar NAME = 'arrowNext';\n\nvar properties = Object.assign({}, _properties_icon__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _properties_backgroundHoverColor__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: '\"Next\" arrow',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/slider/properties/arrowNext/index.js?");

/***/ }),

/***/ "./source/Schema/components/slider/properties/arrowNext/properties/backgroundColor.js":
/*!********************************************************************************************!*\
  !*** ./source/Schema/components/slider/properties/arrowNext/properties/backgroundColor.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'backgroundColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'Background color of the \"next\" arrow'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/slider/properties/arrowNext/properties/backgroundColor.js?");

/***/ }),

/***/ "./source/Schema/components/slider/properties/arrowNext/properties/backgroundHoverColor.js":
/*!*************************************************************************************************!*\
  !*** ./source/Schema/components/slider/properties/arrowNext/properties/backgroundHoverColor.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'backgroundHoverColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'Background hover color of the \"next\" arrow'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/slider/properties/arrowNext/properties/backgroundHoverColor.js?");

/***/ }),

/***/ "./source/Schema/components/slider/properties/arrowNext/properties/icon/index.js":
/*!***************************************************************************************!*\
  !*** ./source/Schema/components/slider/properties/arrowNext/properties/icon/index.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/file */ \"./source/Schema/components/slider/properties/arrowNext/properties/icon/properties/file.js\");\n/* harmony import */ var _properties_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties/color */ \"./source/Schema/components/slider/properties/arrowNext/properties/icon/properties/color.js\");\n/* harmony import */ var _properties_hoverColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./properties/hoverColor */ \"./source/Schema/components/slider/properties/arrowNext/properties/icon/properties/hoverColor.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nvar NAME = 'icon';\n\nvar properties = Object.assign({}, _properties_file__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _properties_color__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _properties_hoverColor__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: '\"Next\" arrow icon',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/slider/properties/arrowNext/properties/icon/index.js?");

/***/ }),

/***/ "./source/Schema/components/slider/properties/arrowNext/properties/icon/properties/color.js":
/*!**************************************************************************************************!*\
  !*** ./source/Schema/components/slider/properties/arrowNext/properties/icon/properties/color.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions/index */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'color';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'SVG icon color of the \"next\" arrow'\n}, Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/slider/properties/arrowNext/properties/icon/properties/color.js?");

/***/ }),

/***/ "./source/Schema/components/slider/properties/arrowNext/properties/icon/properties/file.js":
/*!*************************************************************************************************!*\
  !*** ./source/Schema/components/slider/properties/arrowNext/properties/icon/properties/file.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions/index */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'file';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'SVG icon for \"next\" arrow'\n}, Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].file)));\n\n//# sourceURL=webpack:///./source/Schema/components/slider/properties/arrowNext/properties/icon/properties/file.js?");

/***/ }),

/***/ "./source/Schema/components/slider/properties/arrowNext/properties/icon/properties/hoverColor.js":
/*!*******************************************************************************************************!*\
  !*** ./source/Schema/components/slider/properties/arrowNext/properties/icon/properties/hoverColor.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions/index */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'hoverColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'SVG icon hover color of the \"next\" arrow'\n}, Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/slider/properties/arrowNext/properties/icon/properties/hoverColor.js?");

/***/ }),

/***/ "./source/Schema/components/slider/properties/arrowPrev/index.js":
/*!***********************************************************************!*\
  !*** ./source/Schema/components/slider/properties/arrowPrev/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/icon */ \"./source/Schema/components/slider/properties/arrowPrev/properties/icon/index.js\");\n/* harmony import */ var _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties/backgroundColor */ \"./source/Schema/components/slider/properties/arrowPrev/properties/backgroundColor.js\");\n/* harmony import */ var _properties_backgroundHoverColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./properties/backgroundHoverColor */ \"./source/Schema/components/slider/properties/arrowPrev/properties/backgroundHoverColor.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nvar NAME = 'arrowPrev';\n\nvar properties = Object.assign({}, _properties_icon__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _properties_backgroundHoverColor__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: '\"Previous\" arrow',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/slider/properties/arrowPrev/index.js?");

/***/ }),

/***/ "./source/Schema/components/slider/properties/arrowPrev/properties/backgroundColor.js":
/*!********************************************************************************************!*\
  !*** ./source/Schema/components/slider/properties/arrowPrev/properties/backgroundColor.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'backgroundColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'Background color of the \"previous\" arrow'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/slider/properties/arrowPrev/properties/backgroundColor.js?");

/***/ }),

/***/ "./source/Schema/components/slider/properties/arrowPrev/properties/backgroundHoverColor.js":
/*!*************************************************************************************************!*\
  !*** ./source/Schema/components/slider/properties/arrowPrev/properties/backgroundHoverColor.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'backgroundHoverColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'Background hover color of the \"previous\" arrow'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/slider/properties/arrowPrev/properties/backgroundHoverColor.js?");

/***/ }),

/***/ "./source/Schema/components/slider/properties/arrowPrev/properties/icon/index.js":
/*!***************************************************************************************!*\
  !*** ./source/Schema/components/slider/properties/arrowPrev/properties/icon/index.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/file */ \"./source/Schema/components/slider/properties/arrowPrev/properties/icon/properties/file.js\");\n/* harmony import */ var _properties_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties/color */ \"./source/Schema/components/slider/properties/arrowPrev/properties/icon/properties/color.js\");\n/* harmony import */ var _properties_hoverColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./properties/hoverColor */ \"./source/Schema/components/slider/properties/arrowPrev/properties/icon/properties/hoverColor.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nvar NAME = 'icon';\n\nvar properties = Object.assign({}, _properties_file__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _properties_color__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _properties_hoverColor__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: '\"Previous\" arrow icon',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/slider/properties/arrowPrev/properties/icon/index.js?");

/***/ }),

/***/ "./source/Schema/components/slider/properties/arrowPrev/properties/icon/properties/color.js":
/*!**************************************************************************************************!*\
  !*** ./source/Schema/components/slider/properties/arrowPrev/properties/icon/properties/color.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions/index */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'color';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'SVG icon color of the \"previous\" arrow'\n}, Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/slider/properties/arrowPrev/properties/icon/properties/color.js?");

/***/ }),

/***/ "./source/Schema/components/slider/properties/arrowPrev/properties/icon/properties/file.js":
/*!*************************************************************************************************!*\
  !*** ./source/Schema/components/slider/properties/arrowPrev/properties/icon/properties/file.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions/index */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'file';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'SVG icon for \"previous\" arrow'\n}, Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].file)));\n\n//# sourceURL=webpack:///./source/Schema/components/slider/properties/arrowPrev/properties/icon/properties/file.js?");

/***/ }),

/***/ "./source/Schema/components/slider/properties/arrowPrev/properties/icon/properties/hoverColor.js":
/*!*******************************************************************************************************!*\
  !*** ./source/Schema/components/slider/properties/arrowPrev/properties/icon/properties/hoverColor.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions/index */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'hoverColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'SVG icon hover color of the \"previous\" arrow'\n}, Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/slider/properties/arrowPrev/properties/icon/properties/hoverColor.js?");

/***/ }),

/***/ "./source/Schema/components/slider/properties/navigation/index.js":
/*!************************************************************************!*\
  !*** ./source/Schema/components/slider/properties/navigation/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/backgroundColor */ \"./source/Schema/components/slider/properties/navigation/properties/backgroundColor.js\");\n/* harmony import */ var _properties_backgroundActiveColor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties/backgroundActiveColor */ \"./source/Schema/components/slider/properties/navigation/properties/backgroundActiveColor.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar NAME = 'navigation';\n\nvar properties = Object.assign({}, _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _properties_backgroundActiveColor__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: 'Slider navigation',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/slider/properties/navigation/index.js?");

/***/ }),

/***/ "./source/Schema/components/slider/properties/navigation/properties/backgroundActiveColor.js":
/*!***************************************************************************************************!*\
  !*** ./source/Schema/components/slider/properties/navigation/properties/backgroundActiveColor.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'backgroundActiveColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'Slider navigation background color of the active item'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/slider/properties/navigation/properties/backgroundActiveColor.js?");

/***/ }),

/***/ "./source/Schema/components/slider/properties/navigation/properties/backgroundColor.js":
/*!*********************************************************************************************!*\
  !*** ./source/Schema/components/slider/properties/navigation/properties/backgroundColor.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'backgroundColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'Slider navigation background color'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/slider/properties/navigation/properties/backgroundColor.js?");

/***/ }),

/***/ "./source/Schema/components/socialNetwork/index.js":
/*!*********************************************************!*\
  !*** ./source/Schema/components/socialNetwork/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_facebook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/facebook */ \"./source/Schema/components/socialNetwork/properties/facebook/index.js\");\n/* harmony import */ var _properties_instagram__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties/instagram */ \"./source/Schema/components/socialNetwork/properties/instagram/index.js\");\n/* harmony import */ var _properties_odnoklassniki__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./properties/odnoklassniki */ \"./source/Schema/components/socialNetwork/properties/odnoklassniki/index.js\");\n/* harmony import */ var _properties_pinterest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./properties/pinterest */ \"./source/Schema/components/socialNetwork/properties/pinterest/index.js\");\n/* harmony import */ var _properties_tumblr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./properties/tumblr */ \"./source/Schema/components/socialNetwork/properties/tumblr/index.js\");\n/* harmony import */ var _properties_twitter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./properties/twitter */ \"./source/Schema/components/socialNetwork/properties/twitter/index.js\");\n/* harmony import */ var _properties_vkontakte__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./properties/vkontakte */ \"./source/Schema/components/socialNetwork/properties/vkontakte/index.js\");\n/* harmony import */ var _properties_youtube__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./properties/youtube */ \"./source/Schema/components/socialNetwork/properties/youtube/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\nvar NAME = 'socialNetwork';\n\nvar properties = Object.assign({}, _properties_facebook__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _properties_instagram__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _properties_odnoklassniki__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _properties_pinterest__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _properties_tumblr__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _properties_twitter__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _properties_vkontakte__WEBPACK_IMPORTED_MODULE_7__[\"default\"], _properties_youtube__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: 'Social network',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/socialNetwork/index.js?");

/***/ }),

/***/ "./source/Schema/components/socialNetwork/properties/facebook/index.js":
/*!*****************************************************************************!*\
  !*** ./source/Schema/components/socialNetwork/properties/facebook/index.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/icon */ \"./source/Schema/components/socialNetwork/properties/facebook/properties/icon/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar NAME = 'facebook';\n\nvar properties = Object.assign({}, _properties_icon__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: 'Social network: \"facebook\"',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/socialNetwork/properties/facebook/index.js?");

/***/ }),

/***/ "./source/Schema/components/socialNetwork/properties/facebook/properties/icon/index.js":
/*!*********************************************************************************************!*\
  !*** ./source/Schema/components/socialNetwork/properties/facebook/properties/icon/index.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/file */ \"./source/Schema/components/socialNetwork/properties/facebook/properties/icon/properties/file.js\");\n/* harmony import */ var _properties_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties/color */ \"./source/Schema/components/socialNetwork/properties/facebook/properties/icon/properties/color.js\");\n/* harmony import */ var _properties_hoverColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./properties/hoverColor */ \"./source/Schema/components/socialNetwork/properties/facebook/properties/icon/properties/hoverColor.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nvar NAME = 'icon';\n\nvar properties = Object.assign({}, _properties_file__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _properties_color__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _properties_hoverColor__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: '\"facebook\" icon',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/socialNetwork/properties/facebook/properties/icon/index.js?");

/***/ }),

/***/ "./source/Schema/components/socialNetwork/properties/facebook/properties/icon/properties/color.js":
/*!********************************************************************************************************!*\
  !*** ./source/Schema/components/socialNetwork/properties/facebook/properties/icon/properties/color.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions/index */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'color';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: '\"facebook\" icon color'\n}, Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/socialNetwork/properties/facebook/properties/icon/properties/color.js?");

/***/ }),

/***/ "./source/Schema/components/socialNetwork/properties/facebook/properties/icon/properties/file.js":
/*!*******************************************************************************************************!*\
  !*** ./source/Schema/components/socialNetwork/properties/facebook/properties/icon/properties/file.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions/index */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'file';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'SVG icon for \"facebook\"'\n}, Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].file)));\n\n//# sourceURL=webpack:///./source/Schema/components/socialNetwork/properties/facebook/properties/icon/properties/file.js?");

/***/ }),

/***/ "./source/Schema/components/socialNetwork/properties/facebook/properties/icon/properties/hoverColor.js":
/*!*************************************************************************************************************!*\
  !*** ./source/Schema/components/socialNetwork/properties/facebook/properties/icon/properties/hoverColor.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions/index */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'hoverColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: '\"facebook\" icon hover color'\n}, Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/socialNetwork/properties/facebook/properties/icon/properties/hoverColor.js?");

/***/ }),

/***/ "./source/Schema/components/socialNetwork/properties/instagram/index.js":
/*!******************************************************************************!*\
  !*** ./source/Schema/components/socialNetwork/properties/instagram/index.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/icon */ \"./source/Schema/components/socialNetwork/properties/instagram/properties/icon/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar NAME = 'instagram';\n\nvar properties = Object.assign({}, _properties_icon__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: 'Social network: \"instagram\"',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/socialNetwork/properties/instagram/index.js?");

/***/ }),

/***/ "./source/Schema/components/socialNetwork/properties/instagram/properties/icon/index.js":
/*!**********************************************************************************************!*\
  !*** ./source/Schema/components/socialNetwork/properties/instagram/properties/icon/index.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/file */ \"./source/Schema/components/socialNetwork/properties/instagram/properties/icon/properties/file.js\");\n/* harmony import */ var _properties_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties/color */ \"./source/Schema/components/socialNetwork/properties/instagram/properties/icon/properties/color.js\");\n/* harmony import */ var _properties_hoverColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./properties/hoverColor */ \"./source/Schema/components/socialNetwork/properties/instagram/properties/icon/properties/hoverColor.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nvar NAME = 'icon';\n\nvar properties = Object.assign({}, _properties_file__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _properties_color__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _properties_hoverColor__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: '\"instagram\" icon',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/socialNetwork/properties/instagram/properties/icon/index.js?");

/***/ }),

/***/ "./source/Schema/components/socialNetwork/properties/instagram/properties/icon/properties/color.js":
/*!*********************************************************************************************************!*\
  !*** ./source/Schema/components/socialNetwork/properties/instagram/properties/icon/properties/color.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions/index */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'color';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: '\"instagram\" icon color'\n}, Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/socialNetwork/properties/instagram/properties/icon/properties/color.js?");

/***/ }),

/***/ "./source/Schema/components/socialNetwork/properties/instagram/properties/icon/properties/file.js":
/*!********************************************************************************************************!*\
  !*** ./source/Schema/components/socialNetwork/properties/instagram/properties/icon/properties/file.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions/index */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'file';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'SVG icon for \"instagram\"'\n}, Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].file)));\n\n//# sourceURL=webpack:///./source/Schema/components/socialNetwork/properties/instagram/properties/icon/properties/file.js?");

/***/ }),

/***/ "./source/Schema/components/socialNetwork/properties/instagram/properties/icon/properties/hoverColor.js":
/*!**************************************************************************************************************!*\
  !*** ./source/Schema/components/socialNetwork/properties/instagram/properties/icon/properties/hoverColor.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions/index */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'hoverColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: '\"instagram\" icon hover color'\n}, Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/socialNetwork/properties/instagram/properties/icon/properties/hoverColor.js?");

/***/ }),

/***/ "./source/Schema/components/socialNetwork/properties/odnoklassniki/index.js":
/*!**********************************************************************************!*\
  !*** ./source/Schema/components/socialNetwork/properties/odnoklassniki/index.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/icon */ \"./source/Schema/components/socialNetwork/properties/odnoklassniki/properties/icon/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar NAME = 'odnoklassniki';\n\nvar properties = Object.assign({}, _properties_icon__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: 'Social network: \"odnoklassniki\"',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/socialNetwork/properties/odnoklassniki/index.js?");

/***/ }),

/***/ "./source/Schema/components/socialNetwork/properties/odnoklassniki/properties/icon/index.js":
/*!**************************************************************************************************!*\
  !*** ./source/Schema/components/socialNetwork/properties/odnoklassniki/properties/icon/index.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/file */ \"./source/Schema/components/socialNetwork/properties/odnoklassniki/properties/icon/properties/file.js\");\n/* harmony import */ var _properties_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties/color */ \"./source/Schema/components/socialNetwork/properties/odnoklassniki/properties/icon/properties/color.js\");\n/* harmony import */ var _properties_hoverColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./properties/hoverColor */ \"./source/Schema/components/socialNetwork/properties/odnoklassniki/properties/icon/properties/hoverColor.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nvar NAME = 'icon';\n\nvar properties = Object.assign({}, _properties_file__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _properties_color__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _properties_hoverColor__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: '\"odnoklassniki\" icon',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/socialNetwork/properties/odnoklassniki/properties/icon/index.js?");

/***/ }),

/***/ "./source/Schema/components/socialNetwork/properties/odnoklassniki/properties/icon/properties/color.js":
/*!*************************************************************************************************************!*\
  !*** ./source/Schema/components/socialNetwork/properties/odnoklassniki/properties/icon/properties/color.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions/index */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'color';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: '\"odnoklassniki\" icon color'\n}, Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/socialNetwork/properties/odnoklassniki/properties/icon/properties/color.js?");

/***/ }),

/***/ "./source/Schema/components/socialNetwork/properties/odnoklassniki/properties/icon/properties/file.js":
/*!************************************************************************************************************!*\
  !*** ./source/Schema/components/socialNetwork/properties/odnoklassniki/properties/icon/properties/file.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions/index */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'file';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'SVG icon for \"odnoklassniki\"'\n}, Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].file)));\n\n//# sourceURL=webpack:///./source/Schema/components/socialNetwork/properties/odnoklassniki/properties/icon/properties/file.js?");

/***/ }),

/***/ "./source/Schema/components/socialNetwork/properties/odnoklassniki/properties/icon/properties/hoverColor.js":
/*!******************************************************************************************************************!*\
  !*** ./source/Schema/components/socialNetwork/properties/odnoklassniki/properties/icon/properties/hoverColor.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions/index */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'hoverColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: '\"odnoklassniki\" icon hover color'\n}, Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/socialNetwork/properties/odnoklassniki/properties/icon/properties/hoverColor.js?");

/***/ }),

/***/ "./source/Schema/components/socialNetwork/properties/pinterest/index.js":
/*!******************************************************************************!*\
  !*** ./source/Schema/components/socialNetwork/properties/pinterest/index.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/icon */ \"./source/Schema/components/socialNetwork/properties/pinterest/properties/icon/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar NAME = 'pinterest';\n\nvar properties = Object.assign({}, _properties_icon__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: 'Social network: \"pinterest\"',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/socialNetwork/properties/pinterest/index.js?");

/***/ }),

/***/ "./source/Schema/components/socialNetwork/properties/pinterest/properties/icon/index.js":
/*!**********************************************************************************************!*\
  !*** ./source/Schema/components/socialNetwork/properties/pinterest/properties/icon/index.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/file */ \"./source/Schema/components/socialNetwork/properties/pinterest/properties/icon/properties/file.js\");\n/* harmony import */ var _properties_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties/color */ \"./source/Schema/components/socialNetwork/properties/pinterest/properties/icon/properties/color.js\");\n/* harmony import */ var _properties_hoverColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./properties/hoverColor */ \"./source/Schema/components/socialNetwork/properties/pinterest/properties/icon/properties/hoverColor.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nvar NAME = 'icon';\n\nvar properties = Object.assign({}, _properties_file__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _properties_color__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _properties_hoverColor__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: '\"pinterest\" icon',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/socialNetwork/properties/pinterest/properties/icon/index.js?");

/***/ }),

/***/ "./source/Schema/components/socialNetwork/properties/pinterest/properties/icon/properties/color.js":
/*!*********************************************************************************************************!*\
  !*** ./source/Schema/components/socialNetwork/properties/pinterest/properties/icon/properties/color.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions/index */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'color';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: '\"pinterest\" icon color'\n}, Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/socialNetwork/properties/pinterest/properties/icon/properties/color.js?");

/***/ }),

/***/ "./source/Schema/components/socialNetwork/properties/pinterest/properties/icon/properties/file.js":
/*!********************************************************************************************************!*\
  !*** ./source/Schema/components/socialNetwork/properties/pinterest/properties/icon/properties/file.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions/index */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'file';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'SVG icon for \"pinterest\"'\n}, Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].file)));\n\n//# sourceURL=webpack:///./source/Schema/components/socialNetwork/properties/pinterest/properties/icon/properties/file.js?");

/***/ }),

/***/ "./source/Schema/components/socialNetwork/properties/pinterest/properties/icon/properties/hoverColor.js":
/*!**************************************************************************************************************!*\
  !*** ./source/Schema/components/socialNetwork/properties/pinterest/properties/icon/properties/hoverColor.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions/index */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'hoverColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: '\"pinterest\" icon hover color'\n}, Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/socialNetwork/properties/pinterest/properties/icon/properties/hoverColor.js?");

/***/ }),

/***/ "./source/Schema/components/socialNetwork/properties/tumblr/index.js":
/*!***************************************************************************!*\
  !*** ./source/Schema/components/socialNetwork/properties/tumblr/index.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/icon */ \"./source/Schema/components/socialNetwork/properties/tumblr/properties/icon/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar NAME = 'tumblr';\n\nvar properties = Object.assign({}, _properties_icon__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: 'Social network: \"tumblr\"',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/socialNetwork/properties/tumblr/index.js?");

/***/ }),

/***/ "./source/Schema/components/socialNetwork/properties/tumblr/properties/icon/index.js":
/*!*******************************************************************************************!*\
  !*** ./source/Schema/components/socialNetwork/properties/tumblr/properties/icon/index.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/file */ \"./source/Schema/components/socialNetwork/properties/tumblr/properties/icon/properties/file.js\");\n/* harmony import */ var _properties_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties/color */ \"./source/Schema/components/socialNetwork/properties/tumblr/properties/icon/properties/color.js\");\n/* harmony import */ var _properties_hoverColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./properties/hoverColor */ \"./source/Schema/components/socialNetwork/properties/tumblr/properties/icon/properties/hoverColor.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nvar NAME = 'icon';\n\nvar properties = Object.assign({}, _properties_file__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _properties_color__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _properties_hoverColor__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: '\"tumblr\" icon',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/socialNetwork/properties/tumblr/properties/icon/index.js?");

/***/ }),

/***/ "./source/Schema/components/socialNetwork/properties/tumblr/properties/icon/properties/color.js":
/*!******************************************************************************************************!*\
  !*** ./source/Schema/components/socialNetwork/properties/tumblr/properties/icon/properties/color.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions/index */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'color';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: '\"tumblr\" icon color'\n}, Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/socialNetwork/properties/tumblr/properties/icon/properties/color.js?");

/***/ }),

/***/ "./source/Schema/components/socialNetwork/properties/tumblr/properties/icon/properties/file.js":
/*!*****************************************************************************************************!*\
  !*** ./source/Schema/components/socialNetwork/properties/tumblr/properties/icon/properties/file.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions/index */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'file';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'SVG icon for \"tumblr\"'\n}, Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].file)));\n\n//# sourceURL=webpack:///./source/Schema/components/socialNetwork/properties/tumblr/properties/icon/properties/file.js?");

/***/ }),

/***/ "./source/Schema/components/socialNetwork/properties/tumblr/properties/icon/properties/hoverColor.js":
/*!***********************************************************************************************************!*\
  !*** ./source/Schema/components/socialNetwork/properties/tumblr/properties/icon/properties/hoverColor.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions/index */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'hoverColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: '\"tumblr\" icon hover color'\n}, Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/socialNetwork/properties/tumblr/properties/icon/properties/hoverColor.js?");

/***/ }),

/***/ "./source/Schema/components/socialNetwork/properties/twitter/index.js":
/*!****************************************************************************!*\
  !*** ./source/Schema/components/socialNetwork/properties/twitter/index.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/icon */ \"./source/Schema/components/socialNetwork/properties/twitter/properties/icon/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar NAME = 'twitter';\n\nvar properties = Object.assign({}, _properties_icon__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: 'Social network: \"twitter\"',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/socialNetwork/properties/twitter/index.js?");

/***/ }),

/***/ "./source/Schema/components/socialNetwork/properties/twitter/properties/icon/index.js":
/*!********************************************************************************************!*\
  !*** ./source/Schema/components/socialNetwork/properties/twitter/properties/icon/index.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/file */ \"./source/Schema/components/socialNetwork/properties/twitter/properties/icon/properties/file.js\");\n/* harmony import */ var _properties_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties/color */ \"./source/Schema/components/socialNetwork/properties/twitter/properties/icon/properties/color.js\");\n/* harmony import */ var _properties_hoverColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./properties/hoverColor */ \"./source/Schema/components/socialNetwork/properties/twitter/properties/icon/properties/hoverColor.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nvar NAME = 'icon';\n\nvar properties = Object.assign({}, _properties_file__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _properties_color__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _properties_hoverColor__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: '\"twitter\" icon',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/socialNetwork/properties/twitter/properties/icon/index.js?");

/***/ }),

/***/ "./source/Schema/components/socialNetwork/properties/twitter/properties/icon/properties/color.js":
/*!*******************************************************************************************************!*\
  !*** ./source/Schema/components/socialNetwork/properties/twitter/properties/icon/properties/color.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions/index */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'color';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: '\"twitter\" icon color'\n}, Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/socialNetwork/properties/twitter/properties/icon/properties/color.js?");

/***/ }),

/***/ "./source/Schema/components/socialNetwork/properties/twitter/properties/icon/properties/file.js":
/*!******************************************************************************************************!*\
  !*** ./source/Schema/components/socialNetwork/properties/twitter/properties/icon/properties/file.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions/index */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'file';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'SVG icon for \"twitter\"'\n}, Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].file)));\n\n//# sourceURL=webpack:///./source/Schema/components/socialNetwork/properties/twitter/properties/icon/properties/file.js?");

/***/ }),

/***/ "./source/Schema/components/socialNetwork/properties/twitter/properties/icon/properties/hoverColor.js":
/*!************************************************************************************************************!*\
  !*** ./source/Schema/components/socialNetwork/properties/twitter/properties/icon/properties/hoverColor.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions/index */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'hoverColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: '\"twitter\" icon hover color'\n}, Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/socialNetwork/properties/twitter/properties/icon/properties/hoverColor.js?");

/***/ }),

/***/ "./source/Schema/components/socialNetwork/properties/vkontakte/index.js":
/*!******************************************************************************!*\
  !*** ./source/Schema/components/socialNetwork/properties/vkontakte/index.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/icon */ \"./source/Schema/components/socialNetwork/properties/vkontakte/properties/icon/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar NAME = 'vkontakte';\n\nvar properties = Object.assign({}, _properties_icon__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: 'Social network: \"vkontakte\"',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/socialNetwork/properties/vkontakte/index.js?");

/***/ }),

/***/ "./source/Schema/components/socialNetwork/properties/vkontakte/properties/icon/index.js":
/*!**********************************************************************************************!*\
  !*** ./source/Schema/components/socialNetwork/properties/vkontakte/properties/icon/index.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/file */ \"./source/Schema/components/socialNetwork/properties/vkontakte/properties/icon/properties/file.js\");\n/* harmony import */ var _properties_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties/color */ \"./source/Schema/components/socialNetwork/properties/vkontakte/properties/icon/properties/color.js\");\n/* harmony import */ var _properties_hoverColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./properties/hoverColor */ \"./source/Schema/components/socialNetwork/properties/vkontakte/properties/icon/properties/hoverColor.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nvar NAME = 'icon';\n\nvar properties = Object.assign({}, _properties_file__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _properties_color__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _properties_hoverColor__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: '\"vkontakte\" icon',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/socialNetwork/properties/vkontakte/properties/icon/index.js?");

/***/ }),

/***/ "./source/Schema/components/socialNetwork/properties/vkontakte/properties/icon/properties/color.js":
/*!*********************************************************************************************************!*\
  !*** ./source/Schema/components/socialNetwork/properties/vkontakte/properties/icon/properties/color.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions/index */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'color';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: '\"vkontakte\" icon color'\n}, Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/socialNetwork/properties/vkontakte/properties/icon/properties/color.js?");

/***/ }),

/***/ "./source/Schema/components/socialNetwork/properties/vkontakte/properties/icon/properties/file.js":
/*!********************************************************************************************************!*\
  !*** ./source/Schema/components/socialNetwork/properties/vkontakte/properties/icon/properties/file.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions/index */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'file';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'SVG icon for \"vkontakte\"'\n}, Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].file)));\n\n//# sourceURL=webpack:///./source/Schema/components/socialNetwork/properties/vkontakte/properties/icon/properties/file.js?");

/***/ }),

/***/ "./source/Schema/components/socialNetwork/properties/vkontakte/properties/icon/properties/hoverColor.js":
/*!**************************************************************************************************************!*\
  !*** ./source/Schema/components/socialNetwork/properties/vkontakte/properties/icon/properties/hoverColor.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions/index */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'hoverColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: '\"vkontakte\" icon hover color'\n}, Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/socialNetwork/properties/vkontakte/properties/icon/properties/hoverColor.js?");

/***/ }),

/***/ "./source/Schema/components/socialNetwork/properties/youtube/index.js":
/*!****************************************************************************!*\
  !*** ./source/Schema/components/socialNetwork/properties/youtube/index.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/icon */ \"./source/Schema/components/socialNetwork/properties/youtube/properties/icon/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar NAME = 'youtube';\n\nvar properties = Object.assign({}, _properties_icon__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: 'Social network: \"youtube\"',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/socialNetwork/properties/youtube/index.js?");

/***/ }),

/***/ "./source/Schema/components/socialNetwork/properties/youtube/properties/icon/index.js":
/*!********************************************************************************************!*\
  !*** ./source/Schema/components/socialNetwork/properties/youtube/properties/icon/index.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/file */ \"./source/Schema/components/socialNetwork/properties/youtube/properties/icon/properties/file.js\");\n/* harmony import */ var _properties_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties/color */ \"./source/Schema/components/socialNetwork/properties/youtube/properties/icon/properties/color.js\");\n/* harmony import */ var _properties_hoverColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./properties/hoverColor */ \"./source/Schema/components/socialNetwork/properties/youtube/properties/icon/properties/hoverColor.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nvar NAME = 'icon';\n\nvar properties = Object.assign({}, _properties_file__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _properties_color__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _properties_hoverColor__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: '\"youtube\" icon',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/socialNetwork/properties/youtube/properties/icon/index.js?");

/***/ }),

/***/ "./source/Schema/components/socialNetwork/properties/youtube/properties/icon/properties/color.js":
/*!*******************************************************************************************************!*\
  !*** ./source/Schema/components/socialNetwork/properties/youtube/properties/icon/properties/color.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions/index */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'color';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: '\"youtube\" icon color'\n}, Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/socialNetwork/properties/youtube/properties/icon/properties/color.js?");

/***/ }),

/***/ "./source/Schema/components/socialNetwork/properties/youtube/properties/icon/properties/file.js":
/*!******************************************************************************************************!*\
  !*** ./source/Schema/components/socialNetwork/properties/youtube/properties/icon/properties/file.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions/index */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'file';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'SVG icon for \"youtube\"'\n}, Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].file)));\n\n//# sourceURL=webpack:///./source/Schema/components/socialNetwork/properties/youtube/properties/icon/properties/file.js?");

/***/ }),

/***/ "./source/Schema/components/socialNetwork/properties/youtube/properties/icon/properties/hoverColor.js":
/*!************************************************************************************************************!*\
  !*** ./source/Schema/components/socialNetwork/properties/youtube/properties/icon/properties/hoverColor.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions/index */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'hoverColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: '\"youtube\" icon hover color'\n}, Schema_definitions_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/socialNetwork/properties/youtube/properties/icon/properties/hoverColor.js?");

/***/ }),

/***/ "./source/Schema/components/title/index.js":
/*!*************************************************!*\
  !*** ./source/Schema/components/title/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_fontFamily__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/fontFamily */ \"./source/Schema/components/title/properties/fontFamily.js\");\n/* harmony import */ var _properties_textColor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties/textColor */ \"./source/Schema/components/title/properties/textColor.js\");\n/* harmony import */ var _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./properties/backgroundColor */ \"./source/Schema/components/title/properties/backgroundColor.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nvar NAME = 'title';\n\nvar properties = Object.assign({}, _properties_fontFamily__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _properties_textColor__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: 'Main title on webpage',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/title/index.js?");

/***/ }),

/***/ "./source/Schema/components/title/properties/backgroundColor.js":
/*!**********************************************************************!*\
  !*** ./source/Schema/components/title/properties/backgroundColor.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'backgroundColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'Title background color'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/title/properties/backgroundColor.js?");

/***/ }),

/***/ "./source/Schema/components/title/properties/fontFamily.js":
/*!*****************************************************************!*\
  !*** ./source/Schema/components/title/properties/fontFamily.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'fontFamily';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'Title font family'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].font)));\n\n//# sourceURL=webpack:///./source/Schema/components/title/properties/fontFamily.js?");

/***/ }),

/***/ "./source/Schema/components/title/properties/textColor.js":
/*!****************************************************************!*\
  !*** ./source/Schema/components/title/properties/textColor.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'textColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'Title text color'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/title/properties/textColor.js?");

/***/ }),

/***/ "./source/Schema/components/userContent/index.js":
/*!*******************************************************!*\
  !*** ./source/Schema/components/userContent/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_textColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/textColor */ \"./source/Schema/components/userContent/properties/textColor.js\");\n/* harmony import */ var _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties/backgroundColor */ \"./source/Schema/components/userContent/properties/backgroundColor.js\");\n/* harmony import */ var _properties_linkColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./properties/linkColor */ \"./source/Schema/components/userContent/properties/linkColor.js\");\n/* harmony import */ var _properties_linkHoverColor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./properties/linkHoverColor */ \"./source/Schema/components/userContent/properties/linkHoverColor.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nvar NAME = 'userContent';\n\nvar properties = Object.assign({}, _properties_textColor__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _properties_linkColor__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _properties_linkHoverColor__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: 'User content',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/userContent/index.js?");

/***/ }),

/***/ "./source/Schema/components/userContent/properties/backgroundColor.js":
/*!****************************************************************************!*\
  !*** ./source/Schema/components/userContent/properties/backgroundColor.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'backgroundColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'User content background color'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/userContent/properties/backgroundColor.js?");

/***/ }),

/***/ "./source/Schema/components/userContent/properties/linkColor.js":
/*!**********************************************************************!*\
  !*** ./source/Schema/components/userContent/properties/linkColor.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar propertyName = 'linkColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, propertyName, Object.assign({\n    title: propertyName,\n    description: 'Color of the links inside user content'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/userContent/properties/linkColor.js?");

/***/ }),

/***/ "./source/Schema/components/userContent/properties/linkHoverColor.js":
/*!***************************************************************************!*\
  !*** ./source/Schema/components/userContent/properties/linkHoverColor.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar propertyName = 'linkHoverColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, propertyName, Object.assign({\n    title: propertyName,\n    description: 'Hover color of the links inside user content'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/userContent/properties/linkHoverColor.js?");

/***/ }),

/***/ "./source/Schema/components/userContent/properties/textColor.js":
/*!**********************************************************************!*\
  !*** ./source/Schema/components/userContent/properties/textColor.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'textColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'User content text color'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/userContent/properties/textColor.js?");

/***/ }),

/***/ "./source/Schema/components/verticalMenu/index.js":
/*!********************************************************!*\
  !*** ./source/Schema/components/verticalMenu/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/backgroundColor */ \"./source/Schema/components/verticalMenu/properties/backgroundColor.js\");\n/* harmony import */ var _properties_textColor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties/textColor */ \"./source/Schema/components/verticalMenu/properties/textColor.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar NAME = 'verticalMenu';\n\nvar properties = Object.assign({}, _properties_textColor__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: 'Vertical menu is navigation element of the website. Usually located in a sidebar',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/verticalMenu/index.js?");

/***/ }),

/***/ "./source/Schema/components/verticalMenu/properties/backgroundColor.js":
/*!*****************************************************************************!*\
  !*** ./source/Schema/components/verticalMenu/properties/backgroundColor.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'backgroundColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'Vertical menu background color'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/verticalMenu/properties/backgroundColor.js?");

/***/ }),

/***/ "./source/Schema/components/verticalMenu/properties/textColor.js":
/*!***********************************************************************!*\
  !*** ./source/Schema/components/verticalMenu/properties/textColor.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/definitions */ \"./source/Schema/definitions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar NAME = 'textColor';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, Object.assign({\n    title: NAME,\n    description: 'Vertical menu text color'\n}, Schema_definitions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].color)));\n\n//# sourceURL=webpack:///./source/Schema/components/verticalMenu/properties/textColor.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    type: 'string',\n    default: '',\n    ui: {\n        'ui:widget': 'CustomFileWidget',\n        'ui:help': 'The file must be in SVG format'\n    }\n});\n\n//# sourceURL=webpack:///./source/Schema/definitions/file.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color */ \"./source/Schema/definitions/color.js\");\n/* harmony import */ var _font__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./font */ \"./source/Schema/definitions/font.js\");\n/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./file */ \"./source/Schema/definitions/file.js\");\n/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./url */ \"./source/Schema/definitions/url.js\");\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({ font: _font__WEBPACK_IMPORTED_MODULE_1__[\"default\"], file: _file__WEBPACK_IMPORTED_MODULE_2__[\"default\"], color: _color__WEBPACK_IMPORTED_MODULE_0__[\"default\"], url: _url__WEBPACK_IMPORTED_MODULE_3__[\"default\"] });\n\n//# sourceURL=webpack:///./source/Schema/definitions/index.js?");

/***/ }),

/***/ "./source/Schema/definitions/url.js":
/*!******************************************!*\
  !*** ./source/Schema/definitions/url.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    type: 'string',\n    format: 'uri',\n    pattern: '^(https?|wss?|ftp)://',\n    ui: {\n        'ui:help': 'External resource URL',\n        'ui:placeholder': 'https://'\n    }\n});\n\n//# sourceURL=webpack:///./source/Schema/definitions/url.js?");

/***/ }),

/***/ "./source/Schema/index.js":
/*!********************************!*\
  !*** ./source/Schema/index.js ***!
  \********************************/
/*! exports provided: schema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"schema\", function() { return schema; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic */ \"./source/Schema/basic/index.js\");\n/* harmony import */ var _components_promoPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/promoPanel */ \"./source/Schema/components/promoPanel/index.js\");\n/* harmony import */ var _components_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/title */ \"./source/Schema/components/title/index.js\");\n/* harmony import */ var _components_buyButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/buyButton */ \"./source/Schema/components/buyButton/index.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header */ \"./source/Schema/components/header/index.js\");\n/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/slider */ \"./source/Schema/components/slider/index.js\");\n/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sidebar */ \"./source/Schema/components/sidebar/index.js\");\n/* harmony import */ var _components_horizontalMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/horizontalMenu */ \"./source/Schema/components/horizontalMenu/index.js\");\n/* harmony import */ var _components_verticalMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/verticalMenu */ \"./source/Schema/components/verticalMenu/index.js\");\n/* harmony import */ var _components_hamburgerMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/hamburgerMenu */ \"./source/Schema/components/hamburgerMenu/index.js\");\n/* harmony import */ var _components_groupItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/groupItem */ \"./source/Schema/components/groupItem/index.js\");\n/* harmony import */ var _components_catalogItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/catalogItem */ \"./source/Schema/components/catalogItem/index.js\");\n/* harmony import */ var _components_portfolioItem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/portfolioItem */ \"./source/Schema/components/portfolioItem/index.js\");\n/* harmony import */ var _components_userContent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/userContent */ \"./source/Schema/components/userContent/index.js\");\n/* harmony import */ var _components_navigationLink__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/navigationLink */ \"./source/Schema/components/navigationLink/index.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/footer */ \"./source/Schema/components/footer/index.js\");\n/* harmony import */ var _components_socialNetwork__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/socialNetwork */ \"./source/Schema/components/socialNetwork/index.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar properties = Object.assign({}, _basic__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _components_promoPanel__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _components_title__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _components_buyButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _components_header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _components_slider__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _components_sidebar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], _components_horizontalMenu__WEBPACK_IMPORTED_MODULE_8__[\"default\"], _components_verticalMenu__WEBPACK_IMPORTED_MODULE_9__[\"default\"], _components_hamburgerMenu__WEBPACK_IMPORTED_MODULE_10__[\"default\"], _components_groupItem__WEBPACK_IMPORTED_MODULE_11__[\"default\"], _components_catalogItem__WEBPACK_IMPORTED_MODULE_12__[\"default\"], _components_portfolioItem__WEBPACK_IMPORTED_MODULE_13__[\"default\"], _components_userContent__WEBPACK_IMPORTED_MODULE_14__[\"default\"], _components_navigationLink__WEBPACK_IMPORTED_MODULE_15__[\"default\"], _components_footer__WEBPACK_IMPORTED_MODULE_16__[\"default\"], _components_socialNetwork__WEBPACK_IMPORTED_MODULE_17__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\nvar schema = {\n    type: 'object',\n    description: 'Design settings',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n};\n\n//# sourceURL=webpack:///./source/Schema/index.js?");

/***/ }),

/***/ "./source/Schema/utils.js":
/*!********************************!*\
  !*** ./source/Schema/utils.js ***!
  \********************************/
/*! exports provided: getKeyValues, getRequiredPropertyKeys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getKeyValues\", function() { return getKeyValues; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRequiredPropertyKeys\", function() { return getRequiredPropertyKeys; });\nfunction getKeyValues(key, obj) {\n    var result = {};\n    if (obj.constructor !== Object) return result;\n    Object.keys(obj).forEach(function (k) {\n        if (obj[k].constructor === Object && obj[k].hasOwnProperty(key)) {\n            result[k] = obj[k][key];\n        };\n    });\n    return result;\n};\n\nfunction getRequiredPropertyKeys(propertyKeys, excludedPropertyKeys) {\n    return propertyKeys.filter(function (propertyKey) {\n        return !excludedPropertyKeys.includes(propertyKey);\n    });\n};\n\n//# sourceURL=webpack:///./source/Schema/utils.js?");

/***/ })

/******/ });