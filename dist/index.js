/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["AreaSelector"] = factory();
	else
		root["AreaSelector"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/AreaSelector.ts":
/*!*****************************!*\
  !*** ./src/AreaSelector.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction styleInject(css, ref) {\r\n    if (ref === void 0)\r\n        ref = {};\r\n    var insertAt = ref.insertAt;\r\n    if (!css || typeof document === 'undefined') {\r\n        return;\r\n    }\r\n    var head = document.head || document.getElementsByTagName('head')[0];\r\n    var style = document.createElement('style');\r\n    style.type = 'text/css';\r\n    if (insertAt === 'top') {\r\n        if (head.firstChild) {\r\n            head.insertBefore(style, head.firstChild);\r\n        }\r\n        else {\r\n            head.appendChild(style);\r\n        }\r\n    }\r\n    else {\r\n        head.appendChild(style);\r\n    }\r\n    if (style.styleSheet) {\r\n        style.styleSheet.cssText = css;\r\n    }\r\n    else {\r\n        style.appendChild(document.createTextNode(css));\r\n    }\r\n}\r\nvar css = \"\\n  #ic-screenshot-mask{\\n    position:fixed;width:1px;height:1px;\\n    box-sizing:border-box;\\n    box-shadow:0 0 9999px 9999px rgba(0,0,0,0.3);\\n    left:0;top:0;z-index: 1000\\n  }\\n  #ic-screenshot-cross-line{position:fixed;width:0;height:0;left:0;top:0;z-index:1000;}\\n  #ic-screenshot-cross-line:before,#ic-screenshot-cross-line:after{display:inline-block;content:\\\" \\\";background:#fff}\\n  #ic-screenshot-cross-line:before{position:absolute;width:1px;height:8888px;left:0;top:50%;margin-top:-4444px}\\n  #ic-screenshot-cross-line:after{position:absolute;height:1px;width:8888px;top:0;margin-left:-4444px}\\n\";\r\nstyleInject(css);\r\nvar AreaSelector = (function () {\r\n    function AreaSelector() {\r\n        var _this = this;\r\n        this.startPosition = {\r\n            clientX: 0,\r\n            clientY: 0,\r\n        };\r\n        this.isSelecting = false;\r\n        this.selectedAreaInfo = {\r\n            leftTop: { clientX: 0, clientY: 0 },\r\n            rightBottom: { clientX: 0, clientY: 0 }\r\n        };\r\n        this.promiseResolve = function () { };\r\n        this.init = function () {\r\n            _this.getOrCreateElementById('ic-screenshot-mask');\r\n            _this.getOrCreateElementById('ic-screenshot-cross-line');\r\n            document.addEventListener('mousemove', _this.mousemoveEvent);\r\n            document.addEventListener('mousedown', _this.mousedownEvent);\r\n            document.addEventListener('mouseup', _this.mouseupEvent);\r\n            return new Promise(function (resove) {\r\n                _this.promiseResolve = resove;\r\n            });\r\n            ;\r\n        };\r\n        this.mousedownEvent = function (event) {\r\n            _this.startPosition = {\r\n                clientX: event.clientX,\r\n                clientY: event.clientY\r\n            };\r\n            _this.isSelecting = true;\r\n        };\r\n        this.mousemoveEvent = function (event) {\r\n            var clientX = event.clientX, clientY = event.clientY;\r\n            var eleCrossLine = document.getElementById('ic-screenshot-cross-line');\r\n            eleCrossLine.style.left = clientX + 'px';\r\n            eleCrossLine.style.top = clientY + 'px';\r\n            if (_this.isSelecting) {\r\n                var areaInfo = _this.getPoint(_this.startPosition, { clientX: clientX, clientY: clientY });\r\n                var eleMask = _this.getOrCreateElementById('ic-screenshot-mask');\r\n                eleMask.style.left = areaInfo.leftTop.clientX + 'px';\r\n                eleMask.style.top = areaInfo.leftTop.clientY + 'px';\r\n                eleMask.style.width = areaInfo.rightBottom.clientX - areaInfo.leftTop.clientX + 'px';\r\n                eleMask.style.height = areaInfo.rightBottom.clientY - areaInfo.leftTop.clientY + 'px';\r\n            }\r\n        };\r\n        this.mouseupEvent = function (event) {\r\n            var clientX = event.clientX, clientY = event.clientY;\r\n            _this.selectedAreaInfo = _this.getPoint(_this.startPosition, { clientX: clientX, clientY: clientY });\r\n            _this.stop();\r\n            _this.isSelecting = false;\r\n            _this.startPosition = {\r\n                clientX: 0,\r\n                clientY: 0\r\n            };\r\n            _this.promiseResolve(_this.selectedAreaInfo);\r\n        };\r\n    }\r\n    AreaSelector.prototype.getPoint = function (first, second) {\r\n        return {\r\n            leftTop: {\r\n                clientX: Math.min(first.clientX, second.clientX),\r\n                clientY: Math.min(first.clientY, second.clientY)\r\n            },\r\n            rightBottom: {\r\n                clientX: Math.max(first.clientX, second.clientX),\r\n                clientY: Math.max(first.clientY, second.clientY)\r\n            }\r\n        };\r\n    };\r\n    AreaSelector.prototype.getOrCreateElementById = function (id) {\r\n        var element = document.querySelector(\"#\".concat(id));\r\n        if (element) {\r\n            return element;\r\n        }\r\n        element = document.createElement('div');\r\n        element.setAttribute('id', id);\r\n        document.body.appendChild(element);\r\n        return element;\r\n    };\r\n    AreaSelector.prototype.stop = function () {\r\n        var eleMastk = this.getOrCreateElementById('ic-screenshot-mask');\r\n        var eleCrossLine = this.getOrCreateElementById('ic-screenshot-cross-line');\r\n        eleMastk.remove();\r\n        eleCrossLine.remove();\r\n        document.removeEventListener('mousemove', this.mousemoveEvent);\r\n        document.removeEventListener('mousedown', this.mousedownEvent);\r\n        document.removeEventListener('mouseup', this.mouseupEvent);\r\n    };\r\n    AreaSelector.instance = null;\r\n    AreaSelector.getInstance = function () {\r\n        if (!AreaSelector.instance)\r\n            AreaSelector.instance = new AreaSelector();\r\n        return AreaSelector.instance;\r\n    };\r\n    return AreaSelector;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AreaSelector);\r\n\n\n//# sourceURL=webpack://AreaSelector/./src/AreaSelector.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _AreaSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AreaSelector */ \"./src/AreaSelector.ts\");\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_AreaSelector__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n\n\n//# sourceURL=webpack://AreaSelector/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});