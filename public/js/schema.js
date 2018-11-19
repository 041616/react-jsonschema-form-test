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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/icon */ \"./source/Schema/components/buyButton/properties/icon/index.js\");\n/* harmony import */ var _properties_textColor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties/textColor */ \"./source/Schema/components/buyButton/properties/textColor.js\");\n/* harmony import */ var _properties_textHoverColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./properties/textHoverColor */ \"./source/Schema/components/buyButton/properties/textHoverColor.js\");\n/* harmony import */ var _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./properties/backgroundColor */ \"./source/Schema/components/buyButton/properties/backgroundColor.js\");\n/* harmony import */ var _properties_backgroundHoverColor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./properties/backgroundHoverColor */ \"./source/Schema/components/buyButton/properties/backgroundHoverColor.js\");\n/* harmony import */ var _properties_fontFamily__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./properties/fontFamily */ \"./source/Schema/components/buyButton/properties/fontFamily.js\");\n/* harmony import */ var _properties_iconActive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./properties/iconActive */ \"./source/Schema/components/buyButton/properties/iconActive/index.js\");\n/* harmony import */ var _properties_backgroundActiveColor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./properties/backgroundActiveColor */ \"./source/Schema/components/buyButton/properties/backgroundActiveColor.js\");\n/* harmony import */ var _properties_textActiveColor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./properties/textActiveColor */ \"./source/Schema/components/buyButton/properties/textActiveColor.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\n\nvar NAME = 'buyButton';\n\nvar properties = Object.assign({}, _properties_icon__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _properties_textColor__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _properties_textHoverColor__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _properties_backgroundHoverColor__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _properties_fontFamily__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _properties_iconActive__WEBPACK_IMPORTED_MODULE_7__[\"default\"], _properties_backgroundActiveColor__WEBPACK_IMPORTED_MODULE_8__[\"default\"], _properties_textActiveColor__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: 'Buy button',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/buyButton/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/backgroundColor */ \"./source/Schema/components/catalogItem/properties/backgroundColor.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar NAME = 'catalogItem';\n\nvar properties = Object.assign({}, _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: 'Item of a product list',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/catalogItem/index.js?");

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

/***/ "./source/Schema/components/footer/index.js":
/*!**************************************************!*\
  !*** ./source/Schema/components/footer/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/backgroundColor */ \"./source/Schema/components/footer/properties/backgroundColor.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar NAME = 'footer';\n\nvar properties = Object.assign({}, _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: 'Footer is a bottom part of the website with contact info, copyrights etc',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/footer/index.js?");

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

/***/ "./source/Schema/components/header/index.js":
/*!**************************************************!*\
  !*** ./source/Schema/components/header/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/backgroundColor */ \"./source/Schema/components/header/properties/backgroundColor.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar NAME = 'header';\n\nvar properties = Object.assign({}, _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: 'Header is a top part of the website with logo, company name etc',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/header/index.js?");

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

/***/ "./source/Schema/components/horizontalMenu/index.js":
/*!**********************************************************!*\
  !*** ./source/Schema/components/horizontalMenu/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/backgroundColor */ \"./source/Schema/components/horizontalMenu/properties/backgroundColor.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar NAME = 'horizontalMenu';\n\nvar properties = Object.assign({}, _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: 'Horizontal menu',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/horizontalMenu/index.js?");

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

/***/ "./source/Schema/components/promoPanel/index.js":
/*!******************************************************!*\
  !*** ./source/Schema/components/promoPanel/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/backgroundColor */ \"./source/Schema/components/promoPanel/properties/backgroundColor.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar NAME = 'promoPanel';\n\nvar properties = Object.assign({}, _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: 'Promo panel',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/promoPanel/index.js?");

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

/***/ "./source/Schema/components/sidebar/index.js":
/*!***************************************************!*\
  !*** ./source/Schema/components/sidebar/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/backgroundColor */ \"./source/Schema/components/sidebar/properties/backgroundColor.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar NAME = 'sidebar';\n\nvar properties = Object.assign({}, _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: 'Sidebar is a left|right part of the website',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/sidebar/index.js?");

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

/***/ "./source/Schema/components/verticalMenu/index.js":
/*!********************************************************!*\
  !*** ./source/Schema/components/verticalMenu/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Schema_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Schema/utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/backgroundColor */ \"./source/Schema/components/verticalMenu/properties/backgroundColor.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar NAME = 'verticalMenu';\n\nvar properties = Object.assign({}, _properties_backgroundColor__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(Schema_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_defineProperty({}, NAME, {\n    type: 'object',\n    title: NAME,\n    description: 'Vertical menu is navigation element of the website. Usually located in a sidebar',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n}));\n\n//# sourceURL=webpack:///./source/Schema/components/verticalMenu/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"schema\", function() { return schema; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./source/Schema/utils.js\");\n/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic */ \"./source/Schema/basic/index.js\");\n/* harmony import */ var _components_promoPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/promoPanel */ \"./source/Schema/components/promoPanel/index.js\");\n/* harmony import */ var _components_buyButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/buyButton */ \"./source/Schema/components/buyButton/index.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header */ \"./source/Schema/components/header/index.js\");\n/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sidebar */ \"./source/Schema/components/sidebar/index.js\");\n/* harmony import */ var _components_horizontalMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/horizontalMenu */ \"./source/Schema/components/horizontalMenu/index.js\");\n/* harmony import */ var _components_verticalMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/verticalMenu */ \"./source/Schema/components/verticalMenu/index.js\");\n/* harmony import */ var _components_catalogItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/catalogItem */ \"./source/Schema/components/catalogItem/index.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/footer */ \"./source/Schema/components/footer/index.js\");\n\n\n\n\n\n\n\n\n\n\n\nvar properties = Object.assign({}, _basic__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _components_promoPanel__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _components_buyButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _components_header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _components_sidebar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _components_horizontalMenu__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _components_verticalMenu__WEBPACK_IMPORTED_MODULE_7__[\"default\"], _components_catalogItem__WEBPACK_IMPORTED_MODULE_8__[\"default\"], _components_footer__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\nvar required = Object.keys(properties);\nvar ui = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKeyValues\"])('ui', properties);\n\nvar schema = {\n    type: 'object',\n    description: 'Design settings',\n    additionalProperties: false,\n    required: required,\n    properties: properties,\n    ui: ui\n};\n\n//# sourceURL=webpack:///./source/Schema/index.js?");

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