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
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/index.js":
/*!***********************!*\
  !*** ./dist/index.js ***!
  \***********************/
/***/ ((module) => {

eval("(function webpackUniversalModuleDefinition(root, factory) {\r\n    if (true)\r\n        module.exports = factory();\r\n    else {}\r\n})(self, function () {\r\n    return (function () {\r\n        \"use strict\";\r\n        var __webpack_modules__ = ({\r\n            \"./src/AreaSelector.ts\": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {\r\n                eval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n/* harmony export */   \\\"default\\\": () => (__WEBPACK_DEFAULT_EXPORT__)\\n/* harmony export */ });\\nfunction styleInject(css, ref) {\\r\\n    if (ref === void 0)\\r\\n        ref = {};\\r\\n    var insertAt = ref.insertAt;\\r\\n    if (!css || typeof document === 'undefined') {\\r\\n        return;\\r\\n    }\\r\\n    var head = document.head || document.getElementsByTagName('head')[0];\\r\\n    var style = document.createElement('style');\\r\\n    style.type = 'text/css';\\r\\n    if (insertAt === 'top') {\\r\\n        if (head.firstChild) {\\r\\n            head.insertBefore(style, head.firstChild);\\r\\n        }\\r\\n        else {\\r\\n            head.appendChild(style);\\r\\n        }\\r\\n    }\\r\\n    else {\\r\\n        head.appendChild(style);\\r\\n    }\\r\\n    if (style.styleSheet) {\\r\\n        style.styleSheet.cssText = css;\\r\\n    }\\r\\n    else {\\r\\n        style.appendChild(document.createTextNode(css));\\r\\n    }\\r\\n}\\r\\nvar css = \\\"\\\\n  #ic-screenshot-mask{\\\\n    position:fixed;width:1px;height:1px;\\\\n    box-sizing:border-box;\\\\n    box-shadow:0 0 9999px 9999px rgba(0,0,0,0.3);\\\\n    left:0;top:0;z-index: 1000\\\\n  }\\\\n  #ic-screenshot-cross-line{position:fixed;width:0;height:0;left:0;top:0;z-index:1000;}\\\\n  #ic-screenshot-cross-line:before,#ic-screenshot-cross-line:after{display:inline-block;content:\\\\\\\" \\\\\\\";background:#fff}\\\\n  #ic-screenshot-cross-line:before{position:absolute;width:1px;height:8888px;left:0;top:50%;margin-top:-4444px}\\\\n  #ic-screenshot-cross-line:after{position:absolute;height:1px;width:8888px;top:0;margin-left:-4444px}\\\\n\\\";\\r\\nstyleInject(css);\\r\\nvar AreaSelector = (function () {\\r\\n    function AreaSelector() {\\r\\n        var _this = this;\\r\\n        this.startPosition = {\\r\\n            clientX: 0,\\r\\n            clientY: 0,\\r\\n        };\\r\\n        this.isSelecting = false;\\r\\n        this.selectedAreaInfo = {\\r\\n            leftTop: { clientX: 0, clientY: 0 },\\r\\n            rightBottom: { clientX: 0, clientY: 0 }\\r\\n        };\\r\\n        this.promiseResolve = function () { };\\r\\n        this.init = function () {\\r\\n            _this.getOrCreateElementById('ic-screenshot-mask');\\r\\n            _this.getOrCreateElementById('ic-screenshot-cross-line');\\r\\n            document.addEventListener('mousemove', _this.mousemoveEvent);\\r\\n            document.addEventListener('mousedown', _this.mousedownEvent);\\r\\n            document.addEventListener('mouseup', _this.mouseupEvent);\\r\\n            return new Promise(function (resove) {\\r\\n                _this.promiseResolve = resove;\\r\\n            });\\r\\n            ;\\r\\n        };\\r\\n        this.mousedownEvent = function (event) {\\r\\n            _this.startPosition = {\\r\\n                clientX: event.clientX,\\r\\n                clientY: event.clientY\\r\\n            };\\r\\n            _this.isSelecting = true;\\r\\n        };\\r\\n        this.mousemoveEvent = function (event) {\\r\\n            var clientX = event.clientX, clientY = event.clientY;\\r\\n            var eleCrossLine = document.getElementById('ic-screenshot-cross-line');\\r\\n            eleCrossLine.style.left = clientX + 'px';\\r\\n            eleCrossLine.style.top = clientY + 'px';\\r\\n            if (_this.isSelecting) {\\r\\n                var areaInfo = _this.getPoint(_this.startPosition, { clientX: clientX, clientY: clientY });\\r\\n                var eleMask = _this.getOrCreateElementById('ic-screenshot-mask');\\r\\n                eleMask.style.left = areaInfo.leftTop.clientX + 'px';\\r\\n                eleMask.style.top = areaInfo.leftTop.clientY + 'px';\\r\\n                eleMask.style.width = areaInfo.rightBottom.clientX - areaInfo.leftTop.clientX + 'px';\\r\\n                eleMask.style.height = areaInfo.rightBottom.clientY - areaInfo.leftTop.clientY + 'px';\\r\\n            }\\r\\n        };\\r\\n        this.mouseupEvent = function (event) {\\r\\n            var clientX = event.clientX, clientY = event.clientY;\\r\\n            _this.selectedAreaInfo = _this.getPoint(_this.startPosition, { clientX: clientX, clientY: clientY });\\r\\n            _this.stop();\\r\\n            _this.isSelecting = false;\\r\\n            _this.startPosition = {\\r\\n                clientX: 0,\\r\\n                clientY: 0\\r\\n            };\\r\\n            _this.promiseResolve(_this.selectedAreaInfo);\\r\\n        };\\r\\n    }\\r\\n    AreaSelector.prototype.getPoint = function (first, second) {\\r\\n        return {\\r\\n            leftTop: {\\r\\n                clientX: Math.min(first.clientX, second.clientX),\\r\\n                clientY: Math.min(first.clientY, second.clientY)\\r\\n            },\\r\\n            rightBottom: {\\r\\n                clientX: Math.max(first.clientX, second.clientX),\\r\\n                clientY: Math.max(first.clientY, second.clientY)\\r\\n            }\\r\\n        };\\r\\n    };\\r\\n    AreaSelector.prototype.getOrCreateElementById = function (id) {\\r\\n        var element = document.querySelector(\\\"#\\\".concat(id));\\r\\n        if (element) {\\r\\n            return element;\\r\\n        }\\r\\n        element = document.createElement('div');\\r\\n        element.setAttribute('id', id);\\r\\n        document.body.appendChild(element);\\r\\n        return element;\\r\\n    };\\r\\n    AreaSelector.prototype.stop = function () {\\r\\n        var eleMastk = this.getOrCreateElementById('ic-screenshot-mask');\\r\\n        var eleCrossLine = this.getOrCreateElementById('ic-screenshot-cross-line');\\r\\n        eleMastk.remove();\\r\\n        eleCrossLine.remove();\\r\\n        document.removeEventListener('mousemove', this.mousemoveEvent);\\r\\n        document.removeEventListener('mousedown', this.mousedownEvent);\\r\\n        document.removeEventListener('mouseup', this.mouseupEvent);\\r\\n    };\\r\\n    AreaSelector.instance = null;\\r\\n    AreaSelector.getInstance = function () {\\r\\n        if (!AreaSelector.instance)\\r\\n            AreaSelector.instance = new AreaSelector();\\r\\n        return AreaSelector.instance;\\r\\n    };\\r\\n    return AreaSelector;\\r\\n}());\\r\\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AreaSelector);\\r\\n\\n\\n//# sourceURL=webpack://AreaSelector/./src/AreaSelector.ts?\");\r\n            }),\r\n            \"./src/index.ts\": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {\r\n                eval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n/* harmony export */   \\\"default\\\": () => (__WEBPACK_DEFAULT_EXPORT__)\\n/* harmony export */ });\\n/* harmony import */ var _AreaSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AreaSelector */ \\\"./src/AreaSelector.ts\\\");\\n\\r\\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_AreaSelector__WEBPACK_IMPORTED_MODULE_0__[\\\"default\\\"]);\\r\\n\\n\\n//# sourceURL=webpack://AreaSelector/./src/index.ts?\");\r\n            })\r\n        });\r\n        var __webpack_module_cache__ = {};\r\n        function __nested_webpack_require_7609__(moduleId) {\r\n            var cachedModule = __webpack_module_cache__[moduleId];\r\n            if (cachedModule !== undefined) {\r\n                return cachedModule.exports;\r\n            }\r\n            var module = __webpack_module_cache__[moduleId] = {\r\n                exports: {}\r\n            };\r\n            __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_7609__);\r\n            return module.exports;\r\n        }\r\n        (function () {\r\n            __nested_webpack_require_7609__.d = function (exports, definition) {\r\n                for (var key in definition) {\r\n                    if (__nested_webpack_require_7609__.o(definition, key) && !__nested_webpack_require_7609__.o(exports, key)) {\r\n                        Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });\r\n                    }\r\n                }\r\n            };\r\n        })();\r\n        (function () {\r\n            __nested_webpack_require_7609__.o = function (obj, prop) { return (Object.prototype.hasOwnProperty.call(obj, prop)); };\r\n        })();\r\n        (function () {\r\n            __nested_webpack_require_7609__.r = function (exports) {\r\n                if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {\r\n                    Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });\r\n                }\r\n                Object.defineProperty(exports, '__esModule', { value: true });\r\n            };\r\n        })();\r\n        var __webpack_exports__ = __nested_webpack_require_7609__(\"./src/index.ts\");\r\n        return __webpack_exports__;\r\n    })();\r\n});\r\n\n\n//# sourceURL=webpack://AreaSelector/./dist/index.js?");

/***/ }),

/***/ "./src/demo/demo.ts":
/*!**************************!*\
  !*** ./src/demo/demo.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dist_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dist/index.js */ \"./dist/index.js\");\n/* harmony import */ var _dist_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dist_index_js__WEBPACK_IMPORTED_MODULE_0__);\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\n\r\nvar selectArea = function () { return __awaiter(void 0, void 0, void 0, function () {\r\n    var result;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                console.info((_dist_index_js__WEBPACK_IMPORTED_MODULE_0___default()));\r\n                return [4, _dist_index_js__WEBPACK_IMPORTED_MODULE_0___default().getInstance().init()];\r\n            case 1:\r\n                result = _a.sent();\r\n                alert(JSON.stringify(result));\r\n                return [2];\r\n        }\r\n    });\r\n}); };\r\ndocument.addEventListener('keydown', function (event) {\r\n    switch (event.keyCode) {\r\n        case 27:\r\n            _dist_index_js__WEBPACK_IMPORTED_MODULE_0___default().getInstance().stop();\r\n            break;\r\n    }\r\n});\r\nvar btnStart = document.getElementById('btn-start');\r\nbtnStart.addEventListener('click', function () {\r\n    selectArea();\r\n});\r\nselectArea();\r\n\n\n//# sourceURL=webpack://AreaSelector/./src/demo/demo.ts?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/demo/demo.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});