/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _libs_maskedInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/maskedInput */ \"./src/js/libs/maskedInput.js\");\n/* harmony import */ var _libs_maskedInput__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_libs_maskedInput__WEBPACK_IMPORTED_MODULE_0__);\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n\n    // functions for adaptive\n    function adapt576() {\n        const footerColLeft = document.querySelector(\".footer__col--left\");\n        const footerPhone = document.querySelector(\".footer__phone\");\n\n        footerColLeft.append(footerPhone);\n    }\n\n    // functions for validation form\n    function doValid(input) {\n        input.classList.remove(\"invalid\");\n        input.classList.add(\"valid\");\n        input.previousElementSibling.style.opacity = 0;\n    }\n\n    function doInValid(input, error = 'Это поле обязательно') {\n        const label = input.previousElementSibling\n\n        input.classList.remove(\"valid\");\n        input.classList.add(\"invalid\");\n        label.textContent = error;\n\n        label.style.cssText = `\n            opacity: 1;\n            top: -${label.clientHeight}px;\n        `;\n    }\n\n    // const burger = document.querySelector(\".header__burger\");\n    // const menu = document.querySelector(\".header__col--menu\");\n    // const header = document.querySelector(\"header\");\n\n    // burger.addEventListener(\"click\", () => {\n    //     burger.classList.toggle(\"active\");\n    //     menu.classList.toggle(\"active\");\n    //     document.body.classList.toggle(\"lock\");\n    // });\n\n\n    // Calculations for offer margin \n    const header = document.querySelector(\".header\");\n    const offer = document.querySelector(\".offer\");\n\n    if (header) {\n        offer.style.paddingTop = header.clientHeight + \"px\";\n    }\n\n    // Validation for forms with class .call-form\n    if (document.querySelector(\".call\")) {\n\n        const callForm = document.querySelectorAll(\".call-form\");\n\n        callForm.forEach(form => {\n            const callPhone = form.querySelector(\"[name='phone']\");\n            const callName = form.querySelector(\"[name='name']\");\n            const callBtn = form.querySelector(\"button[type='submit']\");\n\n            callPhone.addEventListener(\"input\", (e) => {\n                const value = e.target.value;\n                if (value.length < 18) {\n                    doInValid(e.target, \"Введите корректный номер\");\n                } else {\n                    doValid(e.target);\n                }\n            });\n\n            callName.addEventListener(\"input\", (e) => {\n                const value = e.target.value;\n                if (value.length < 2) {\n                    doInValid(e.target, \"Введите корректное имя\");\n                } else {\n                    doValid(e.target);\n                }\n            });\n        })\n    }\n\n    // AJAX sending from forms with .class-form\n    $(\".call-form\").each(function ()  {\n        $(this).submit(function(e) { \n            popLoad.classList.add(\"show\");\n            let form_data = $(this).serialize(); \n            e.preventDefault();\n            $.ajax({\n                type: \"POST\",\n                url: \"plump\", // insert path to your php mailer from index.html file\n                data: form_data,\n                success: function() {\n                },\n                error: function() {\n                }\n            });\n        });\n    })\n\n\n    // adaptive breakpoints\n    if (window.innerWidth < 576) {\n        adapt576();\n    }\n\n\n});\n\n//# sourceURL=webpack://project-name/./src/js/index.js?");

/***/ }),

/***/ "./src/js/libs/maskedInput.js":
/*!************************************!*\
  !*** ./src/js/libs/maskedInput.js ***!
  \************************************/
/***/ (() => {

eval("window.addEventListener(\"DOMContentLoaded\", function() {\n    [].forEach.call( document.querySelectorAll('.tel'), function(input) {\n    var keyCode;\n    function mask(event) {\n        event.keyCode && (keyCode = event.keyCode);\n        var pos = this.selectionStart;\n        if (pos < 3) event.preventDefault();\n        var matrix = \"+7 (___) ___ __ __\",\n            i = 0,\n            def = matrix.replace(/\\D/g, \"\"),\n            val = this.value.replace(/\\D/g, \"\"),\n            new_value = matrix.replace(/[_\\d]/g, function(a) {\n                return i < val.length ? val.charAt(i++) || def.charAt(i) : a\n            });\n        i = new_value.indexOf(\"_\");\n        if (i != -1) {\n            i < 5 && (i = 3);\n            new_value = new_value.slice(0, i)\n        }\n        var reg = matrix.substr(0, this.value.length).replace(/_+/g,\n            function(a) {\n                return \"\\\\d{1,\" + a.length + \"}\"\n            }).replace(/[+()]/g, \"\\\\$&\");\n        reg = new RegExp(\"^\" + reg + \"$\");\n        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;\n        if (event.type == \"blur\" && this.value.length < 5)  this.value = \"\"\n    }\n\n    input.addEventListener(\"input\", mask, false);\n    input.addEventListener(\"focus\", mask, false);\n    input.addEventListener(\"blur\", mask, false);\n    input.addEventListener(\"keydown\", mask, false)\n\n  });\n\n});\n\n//# sourceURL=webpack://project-name/./src/js/libs/maskedInput.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;