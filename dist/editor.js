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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/editor.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/firstblock/index.js":
/*!****************************************!*\
  !*** ./src/blocks/firstblock/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;
var el = wp.element.createElement;
registerBlockType('mytheme-blocks/firstblock', {
  title: __('The First Block', 'mytheme-blocks'),
  description: __('Our first block', 'mytheme-blocks'),
  category: 'layout',
  icon: {
    background: '#f03',
    foreground: '#fff',
    src: 'admin-network'
  },
  keywords: [__('Photo', 'mytheme-blocks'), __('Image', 'mytheme-blocks')],
  edit: function edit() {
    return el('p', null, 'Editor');
  },
  save: function save() {
    return el('p', null, 'Saved Content');
  }
});

/***/ }),

/***/ "./src/blocks/secondblock/index.js":
/*!*****************************************!*\
  !*** ./src/blocks/secondblock/index.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.editor.scss */ "./src/blocks/secondblock/styles.editor.scss");
/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\wamp64\\www\\wordpress\\wp-content\\plugins\\mytheme-blocks\\src\\blocks\\secondblock\\index.js",
    _this = undefined;


var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;
registerBlockType('mytheme-blocks/secondblock', {
  title: __('Second Block', 'mytheme-blocks'),
  description: __('Our second block', 'mytheme-blocks'),
  category: 'layout',
  icon: {
    background: '#f03',
    foreground: '#fff',
    src: wp.element.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      height: "24",
      viewBox: "0 0 24 24",
      width: "24",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 14
      }
    }, wp.element.createElement("path", {
      d: "M0 0h24v24H0z",
      fill: "none",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 97
      }
    }), wp.element.createElement("path", {
      d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 134
      }
    }))
  },
  keywords: [__('Photo', 'mytheme-blocks'), __('Image', 'mytheme-blocks')],
  edit: function edit(_ref) {
    var className = _ref.className;
    return wp.element.createElement("p", {
      className: className,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 16
      }
    }, "Editor");
  },
  save: function save() {
    return wp.element.createElement("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 16
      }
    }, "Saved Content");
  }
});

/***/ }),

/***/ "./src/blocks/secondblock/styles.editor.scss":
/*!***************************************************!*\
  !*** ./src/blocks/secondblock/styles.editor.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/editor.js":
/*!***********************!*\
  !*** ./src/editor.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_firstblock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/firstblock */ "./src/blocks/firstblock/index.js");
/* harmony import */ var _blocks_firstblock__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blocks_firstblock__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks_secondblock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/secondblock */ "./src/blocks/secondblock/index.js");



/***/ })

/******/ });
//# sourceMappingURL=editor.js.map