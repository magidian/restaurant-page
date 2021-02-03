/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/clear.js":
/*!**********************!*\
  !*** ./src/clear.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet clear = () => {\n    let content = document.getElementById('content');\n    let container = document.getElementsByClassName('container')[0];\n    container.remove();\n    content.className = '';\n    let buttons = document.getElementsByTagName('button');\n    for (let i=0; i<buttons.length; i++) {  //why?\n        buttons[i].className = '';\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clear);\n\n//# sourceURL=webpack://restaurant-page/./src/clear.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet contact = () => {\n  let content = document.getElementById(\"content\");\n  content.classList.add(\"contact\");\n\n  let contactBtn = document.getElementById(\"contact\");\n  contactBtn.classList.add(\"active\");\n\n  let container = document.createElement(\"div\");\n  container.classList.add(\"container\");\n\n  let headline = document.createElement(\"h1\");\n  headline.innerHTML = \"Get in Touch\";\n  let tagline = document.createElement(\"p\");\n  tagline.innerHTML =\n    \"Our team of elite chefs would love to hear from you. Give us a call or send us an email.\";\n\n    let phone = document.createElement('p');\n    phone.innerHTML = 'Phone: (619) 123-4567';\n    let email = document.createElement('p');\n    email.innerHTML = 'Email: tobago@tripoli.com';\n  \n    container.appendChild(headline);\n    container.appendChild(tagline);\n    container.appendChild(phone);\n    container.appendChild(email);\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ \"./src/nav.js\");\n\n\nlet home = () => {\n    let content = document.getElementById('content');\n    content.classList.add('home')\n\n    let navbar = (0,_nav__WEBPACK_IMPORTED_MODULE_0__.default)();\n    content.appendChild(navbar);\n\n    let home = document.getElementById('home');\n    home.classList.add('active');\n\n    let container = document.createElement('div');\n    container.classList.add('container');\n    let headline = document.createElement('h1');\n    headline.innerHTML = 'kitchen';\n    container.appendChild(headline);\n    let tagline = document.createElement('p');\n    tagline.innerHTML = 'where things happen';\n    headline.appendChild(tagline);\n\n    content.appendChild(container);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n\n\n\n\n\n    // const div = document.querySelector('div#content');\n    // const message = document.createElement('div');\n    // div.appendChild(message);\n    // message.textContent = \"Welcome\";\n\n    // const img = document.createElement('img');\n    // img.src = '/img/cafe.jpg';\n    // div.appendChild(img);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _clear__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clear */ \"./src/clear.js\");\n\n\n\n\n\n(0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();\n\nlet homeBtn = document.getElementById(\"home\");\nhomeBtn.onclick = () => {\n  (0,_clear__WEBPACK_IMPORTED_MODULE_3__.default)();\n  (0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();\n};\n\nlet menuBtn = document.getElementById(\"menu\");\nmenuBtn.onclick = () => {\n  (0,_clear__WEBPACK_IMPORTED_MODULE_3__.default)();\n  (0,_menu__WEBPACK_IMPORTED_MODULE_1__.default)();\n};\n\nlet contactBtn = document.getElementById(\"contact\");\ncontactBtn.onclick = () => {\n  (0,_clear__WEBPACK_IMPORTED_MODULE_3__.default)();\n  (0,_contact__WEBPACK_IMPORTED_MODULE_2__.default)();\n};\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet menu = () => {\n    let content = document.getElementById('content');\n    content.classList.add('menu');\n  \n    let menuBtn = document.getElementById('menu');\n    menuBtn.classList.add('active');\n\n    let container = document.createElement('div');\n    container.classList.add('container');\n\n\n  let menu = document.createElement(\"ul\");\n  let items = [\"pasta   15\", \"pizza   20\", \"burger   10\"];\n\n  for (let i = 0; i < items.length; i++) {\n    let item = document.createElement(\"li\");\n    item.innerHTML = items[i];\n    menu.appendChild(item);\n  }\n\n  container.appendChild(menu);\n\n  // const pasta = document.createElement('div');\n  // pasta.classList.add('food');\n\n  // const pizza = document.createElement('div');\n  // pizza.classList.add('food');\n\n  // const burger = document.createElement('div');\n  // burger.classList.add('food');\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet nav = () => {\n    let nav = document.createElement('nav');\n    let home = document.createElement('button');\n    home.innerHTML = 'HOME';\n    home.id = 'home';\n    let menu = document.createElement('button');\n    menu.innerHTML = 'MENU';\n    menu.id = 'menu';\n    let contact = document.createElement('button');\n    contact.innerHTML = 'CONTACT';\n    contact.id = 'contact';\n    nav.appendChild(home);\n    nav.appendChild(menu);\n    nav.appendChild(contact);\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nav);\n\n//# sourceURL=webpack://restaurant-page/./src/nav.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;