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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/SliderComponent.js":
/*!********************************!*\
  !*** ./src/SliderComponent.js ***!
  \********************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SliderComponent\", function() { return SliderComponent; });\nclass SliderComponent extends HTMLElement {\n    constructor() {\n        super();\n        this.slideIndex = 1;\n\n        this.attachShadow({mode: 'open'});\n    }\n\n    connectedCallback() {\n        this.render();\n    }\n\n    disconnectedCallback() {\n\n    }\n\n    static get observedAttributes() {\n        return ['images'];\n    }\n\n    attributeChangedCallback(name, oldValue, newValue) {\n        this.render();\n    }\n\n    render() {\n        const images = this.getAttribute('images').split(',');\n\n        const slider = document.createElement('div');\n        slider.classList.add('slider');\n        slider.appendChild(this.getStyles());\n\n\n        for (let i = 0; i < images.length; i++) {\n\n            let item = document.createElement('div');\n            let img = document.createElement('img');\n\n            item.classList.add('item');\n            img.src = images[i];\n\n            if (i !== 0) {\n                item.style.display = 'none';\n            }\n\n            item.appendChild(img);\n            slider.appendChild(item);\n        }\n\n        slider.appendChild(this.makeLastBtn());\n        slider.appendChild(this.makeNextBtn());\n\n\n        this.clearShadowRoot();\n        this.shadowRoot.appendChild(slider);\n    }\n\n    getStyles() {\n        const style = document.createElement('style');\n        style.innerHTML = '.slider{max-width:60%;position:relative;margin:auto;height:500px;margin-bottom:15px}.slider .item img{object-fit:cover;width:100%;height:500px;border:none!important;box-shadow:none!important}.slider .next,.slider .prev{cursor:pointer;position:absolute;top:50%;width:auto;margin-top:-22px;padding:16px;font-weight:700;font-size:18px;transition:.6s ease;border-radius:0 3px 3px 0}.slider .next{right:0;border-radius:3px 0 0 3px}.slider .next:hover,.slider .prev:hover{background-color:#fff}.active{background-color:#aaa}@-webkit-keyframes fade{from{opacity:.4}to{opacity:1}}@keyframes fade{from{opacity:.4}to{opacity:1}}';\n        return style;\n    }\n\n    makeLastBtn() {\n        const lastBtn = document.createElement('a');\n\n        lastBtn.innerHTML = '<';\n        lastBtn.classList.add('prev');\n        lastBtn.addEventListener('click', this.lastBtnClick.bind(this));\n\n        return lastBtn;\n    }\n\n    makeNextBtn() {\n        const nextBtn = document.createElement('a');\n\n        nextBtn.innerHTML = '>';\n        nextBtn.classList.add('next');\n        nextBtn.addEventListener('click', this.nextBtnClick.bind(this));\n\n        return nextBtn;\n    }\n\n    lastBtnClick(event) {\n        this.showSlides(this.slideIndex -= 1);\n    }\n\n    nextBtnClick(event) {\n        this.showSlides(this.slideIndex += 1);\n    }\n\n    showSlides(n) {\n        const slides = this.shadowRoot.querySelectorAll(\".item\");\n\n        if (n > slides.length) {\n            this.slideIndex = 1\n        }\n        if (n < 1) {\n            this.slideIndex = slides.length\n        }\n\n        for (let i = 0; i < slides.length; i++) {\n            slides[i].style.display = \"none\";\n        }\n\n        slides[this.slideIndex - 1].style.display = \"block\";\n    }\n\n    clearShadowRoot() {\n        this.shadowRoot.childNodes.forEach(function (child) {\n            child.remove();\n        });\n    }\n}\n\n\n//# sourceURL=webpack:///./src/SliderComponent.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _SliderComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SliderComponent.js */ \"./src/SliderComponent.js\");\n\n\ncustomElements.define('custom-slider', _SliderComponent_js__WEBPACK_IMPORTED_MODULE_0__[\"SliderComponent\"]);\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });