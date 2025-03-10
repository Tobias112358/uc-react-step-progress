(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, (__WEBPACK_EXTERNAL_MODULE__155__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 365:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.progress-bar-wrapper {
  padding: 2rem;
}
.progress-bar-wrapper, .progress-bar-wrapper * {
  box-sizing: border-box;
}
.step-progress-bar {
  margin: 0 0 1rem 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
}
.progress-step {
  list-style: none;
  position: relative;
  text-align: center;
  flex: 1 1 auto;
  position: relative;
}

.progress-step::before {
  content: '';
  position: absolute;
  top: 50%;
  height: 3px;
  width: 100%;
  right: 50%;
  transform: translateY(-50%);
  z-index: -1;
  background: linear-gradient(to left, #e7eaf3 50%, #4db193 50%);
	background-size: 200% 100%;
  background-position: right bottom;
  transition: background-position 200ms ease-in-out;
}
.progress-step:first-child::before {
  content: none;
}
.progress-step .step-index,
.progress-step .step-icon {
  background-color: #e7eaf3;
  color: var(--text-normal);
  border-radius: 50%;
  height: 2.5rem;
  width: 2.5rem;
  line-height: 2.5rem;
  display: inline-flex;
  transform-origin: center;
  align-items: center;
  justify-content: center;
}
.step-index, .step-icon {
  transition: background-color 250ms ease;
}
.progress-step .step-label {
  color: var(--text-normal);
  position: absolute;
  top: 120%;
  left: 50%;
  transform: translateX(-50%);
}
.progress-step .step-label-subtitle {
  display: block;
}
.progress-step.completed .step-icon {
  background-color: #4db193;
  color: white;
  animation: spring-down 400ms ease-in-out forwards;
}
.progress-step.completed .step-icon:hover {
  background-color: #42997f;
}
.progress-step.current .step-index {
  background-color: #387cf6;
  color: white;
  animation: spring-up 400ms ease forwards;
}
.progress-step.current .step-index:hover {
  background-color: #316ddb;
}
.progress-step.completed::before,
.progress-step.current::before,
.progress-step.has-error::before {
  background-position: left bottom;
}
.progress-step.has-error .step-icon {
  color: white;
  background-color: #bb392d;
  animation: shake 350ms ease-in-out forwards;
}
.step-content {
  padding: 1rem;
}
.step-buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
}
.step-action-btn {
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 200ms ease-in-out;
}
.action-btn-secondary {
  border: 1px solid #d1d9eb;
}
.action-btn-secondary:hover {
  background-color: #f3f7ff;
  box-shadow: 0px 3px 6px 0 rgba(190, 201, 228, 0.3);
}
.action-btn-primary {
  background-color: #397cf6;
  border: 1px solid #397cf6;
  color: white;
}
.action-btn-primary:hover {
  background-color: #316ddb;
  border: 1px solid #316ddb;
  box-shadow: 0px 3px 6px 0 rgba(57, 124, 246, 0.3);
}
.step-action-btn.disabled {
  pointer-events: none;
  filter: opacity(0.7);
  cursor: default;
}

@keyframes spring-up {
  0% { transform: scale(1); }
  10% { transform: scale(0.975); }
  40% { transform: scale(1.4); }
  50%, 100% { transform: scale(1.2); }
}
@keyframes spring-down {
  0% { transform: scale(1.2); }
  35%, 100% { transform: scale(1); }
}
@keyframes shake {
  0% { transform: translateX(0); }
  15% { transform: translateX(0.2rem); }
  30%, 60% { transform: translateX(-0.4rem); }
  45%, 75% { transform: translateX(0.4rem); }
  90% { transform: translateX(-0.2rem); }
  100% { transform: translateX(0); }
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,aAAa;AACf;AACA;EACE,sBAAsB;AACxB;AACA;EACE,kBAAkB;EAClB,UAAU;EACV,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,UAAU;AACZ;AACA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB;EAClB,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,QAAQ;EACR,WAAW;EACX,WAAW;EACX,UAAU;EACV,2BAA2B;EAC3B,WAAW;EACX,8DAA8D;CAC/D,0BAA0B;EACzB,iCAAiC;EACjC,iDAAiD;AACnD;AACA;EACE,aAAa;AACf;AACA;;EAEE,yBAAyB;EACzB,yBAAyB;EACzB,kBAAkB;EAClB,cAAc;EACd,aAAa;EACb,mBAAmB;EACnB,oBAAoB;EACpB,wBAAwB;EACxB,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,uCAAuC;AACzC;AACA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,SAAS;EACT,SAAS;EACT,2BAA2B;AAC7B;AACA;EACE,cAAc;AAChB;AACA;EACE,yBAAyB;EACzB,YAAY;EACZ,iDAAiD;AACnD;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,yBAAyB;EACzB,YAAY;EACZ,wCAAwC;AAC1C;AACA;EACE,yBAAyB;AAC3B;AACA;;;EAGE,gCAAgC;AAClC;AACA;EACE,YAAY;EACZ,yBAAyB;EACzB,2CAA2C;AAC7C;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,gBAAgB;AAClB;AACA;EACE,qBAAqB;EACrB,sBAAsB;EACtB,eAAe;EACf,iCAAiC;AACnC;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,yBAAyB;EACzB,kDAAkD;AACpD;AACA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,YAAY;AACd;AACA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,iDAAiD;AACnD;AACA;EACE,oBAAoB;EACpB,oBAAoB;EACpB,eAAe;AACjB;;AAEA;EACE,KAAK,mBAAmB,EAAE;EAC1B,MAAM,uBAAuB,EAAE;EAC/B,MAAM,qBAAqB,EAAE;EAC7B,YAAY,qBAAqB,EAAE;AACrC;AACA;EACE,KAAK,qBAAqB,EAAE;EAC5B,YAAY,mBAAmB,EAAE;AACnC;AACA;EACE,KAAK,wBAAwB,EAAE;EAC/B,MAAM,6BAA6B,EAAE;EACrC,WAAW,8BAA8B,EAAE;EAC3C,WAAW,6BAA6B,EAAE;EAC1C,MAAM,8BAA8B,EAAE;EACtC,OAAO,wBAAwB,EAAE;AACnC","sourcesContent":[".progress-bar-wrapper {\n  padding: 2rem;\n}\n.progress-bar-wrapper, .progress-bar-wrapper * {\n  box-sizing: border-box;\n}\n.step-progress-bar {\n  margin: 0 0 1rem 0;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  z-index: 1;\n}\n.progress-step {\n  list-style: none;\n  position: relative;\n  text-align: center;\n  flex: 1 1 auto;\n  position: relative;\n}\n\n.progress-step::before {\n  content: '';\n  position: absolute;\n  top: 50%;\n  height: 3px;\n  width: 100%;\n  right: 50%;\n  transform: translateY(-50%);\n  z-index: -1;\n  background: linear-gradient(to left, #e7eaf3 50%, #4db193 50%);\n\tbackground-size: 200% 100%;\n  background-position: right bottom;\n  transition: background-position 200ms ease-in-out;\n}\n.progress-step:first-child::before {\n  content: none;\n}\n.progress-step .step-index,\n.progress-step .step-icon {\n  background-color: #e7eaf3;\n  color: var(--text-normal);\n  border-radius: 50%;\n  height: 2.5rem;\n  width: 2.5rem;\n  line-height: 2.5rem;\n  display: inline-flex;\n  transform-origin: center;\n  align-items: center;\n  justify-content: center;\n}\n.step-index, .step-icon {\n  transition: background-color 250ms ease;\n}\n.progress-step .step-label {\n  color: var(--text-normal);\n  position: absolute;\n  top: 120%;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.progress-step .step-label-subtitle {\n  display: block;\n}\n.progress-step.completed .step-icon {\n  background-color: #4db193;\n  color: white;\n  animation: spring-down 400ms ease-in-out forwards;\n}\n.progress-step.completed .step-icon:hover {\n  background-color: #42997f;\n}\n.progress-step.current .step-index {\n  background-color: #387cf6;\n  color: white;\n  animation: spring-up 400ms ease forwards;\n}\n.progress-step.current .step-index:hover {\n  background-color: #316ddb;\n}\n.progress-step.completed::before,\n.progress-step.current::before,\n.progress-step.has-error::before {\n  background-position: left bottom;\n}\n.progress-step.has-error .step-icon {\n  color: white;\n  background-color: #bb392d;\n  animation: shake 350ms ease-in-out forwards;\n}\n.step-content {\n  padding: 1rem;\n}\n.step-buttons {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 1rem;\n}\n.step-action-btn {\n  padding: 0.75rem 1rem;\n  border-radius: 0.25rem;\n  cursor: pointer;\n  transition: all 200ms ease-in-out;\n}\n.action-btn-secondary {\n  border: 1px solid #d1d9eb;\n}\n.action-btn-secondary:hover {\n  background-color: #f3f7ff;\n  box-shadow: 0px 3px 6px 0 rgba(190, 201, 228, 0.3);\n}\n.action-btn-primary {\n  background-color: #397cf6;\n  border: 1px solid #397cf6;\n  color: white;\n}\n.action-btn-primary:hover {\n  background-color: #316ddb;\n  border: 1px solid #316ddb;\n  box-shadow: 0px 3px 6px 0 rgba(57, 124, 246, 0.3);\n}\n.step-action-btn.disabled {\n  pointer-events: none;\n  filter: opacity(0.7);\n  cursor: default;\n}\n\n@keyframes spring-up {\n  0% { transform: scale(1); }\n  10% { transform: scale(0.975); }\n  40% { transform: scale(1.4); }\n  50%, 100% { transform: scale(1.2); }\n}\n@keyframes spring-down {\n  0% { transform: scale(1.2); }\n  35%, 100% { transform: scale(1); }\n}\n@keyframes shake {\n  0% { transform: translateX(0); }\n  15% { transform: translateX(0.2rem); }\n  30%, 60% { transform: translateX(-0.4rem); }\n  45%, 75% { transform: translateX(0.4rem); }\n  90% { transform: translateX(-0.2rem); }\n  100% { transform: translateX(0); }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 314:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 354:
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ 72:
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 659:
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 540:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 56:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 825:
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 113:
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ 155:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__155__;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ src)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(155);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(72);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(56);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/styles.css
var styles = __webpack_require__(365);
;// ./src/styles.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(styles/* default */.A, options);




       /* harmony default export */ const src_styles = (styles/* default */.A && styles/* default */.A.locals ? styles/* default */.A.locals : undefined);

;// ./src/models/index.ts
var StepStates;
(function (StepStates) {
    StepStates["NOT_STARTED"] = "not_started";
    StepStates["CURRENT"] = "current";
    StepStates["ERROR"] = "error";
    StepStates["COMPLETED"] = "completed";
})(StepStates || (StepStates = {}));

;// ./src/index.tsx



function stepsReducer(steps, action) {
    return steps.map(function (step, i) {
        if (i < action.payload.index) {
            step.state = StepStates.COMPLETED;
        }
        else if (i === action.payload.index) {
            step.state = action.payload.state;
        }
        else {
            step.state = StepStates.NOT_STARTED;
        }
        return step;
    });
}
function StepProgressBar(props) {
    var steps = props.steps, startingStep = props.startingStep, wrapperClass = props.wrapperClass, progressClass = props.progressClass, stepClass = props.stepClass, labelClass = props.labelClass, subtitleClass = props.subtitleClass, contentClass = props.contentClass, buttonWrapperClass = props.buttonWrapperClass, primaryBtnClass = props.primaryBtnClass, secondaryBtnClass = props.secondaryBtnClass, submitBtnName = props.submitBtnName, onSubmit = props.onSubmit, previousBtnName = props.previousBtnName, nextBtnName = props.nextBtnName, hideStepButtons = props.hideStepButtons;
    var _a = (0,external_react_.useState)(startingStep), currentIndex = _a[0], setCurrentIndex = _a[1];
    var _b = (0,external_react_.useReducer)(stepsReducer, steps), state = _b[0], dispatch = _b[1];
    (0,external_react_.useEffect)(function () {
        dispatch({
            type: 'init',
            payload: { index: currentIndex, state: StepStates.CURRENT }
        });
    }, []);
    function submitHandler() {
        onSubmit();
    }
    function nextHandler() {
        if (currentIndex === steps.length - 1) {
            return;
        }
        var isStateValid = true;
        var stepValidator = state[currentIndex].validator;
        if (stepValidator) {
            isStateValid = stepValidator();
        }
        dispatch({
            type: 'next',
            payload: {
                index: isStateValid ? currentIndex + 1 : currentIndex,
                state: isStateValid ? StepStates.CURRENT : StepStates.ERROR
            }
        });
        if (isStateValid) {
            setCurrentIndex(currentIndex + 1);
        }
    }
    function prevHandler() {
        if (currentIndex === 0) {
            return;
        }
        dispatch({
            type: 'previous',
            payload: {
                index: currentIndex - 1,
                state: StepStates.CURRENT
            }
        });
        setCurrentIndex(currentIndex - 1);
    }
    return (external_react_default().createElement("div", { className: "".concat('progress-bar-wrapper', " ").concat(wrapperClass || '') },
        external_react_default().createElement("ul", { className: "".concat('step-progress-bar', " ").concat(progressClass || '') }, state.map(function (step, i) {
            return (external_react_default().createElement("li", { key: i, className: "".concat('progress-step').concat(step.state === StepStates.COMPLETED ? " ".concat('completed') : '').concat(step.state === StepStates.CURRENT ? " ".concat('current') : '').concat(step.state === StepStates.ERROR ? " ".concat('has-error') : '', " ").concat(stepClass || '') },
                step.state === StepStates.COMPLETED && (external_react_default().createElement("span", { className: 'step-icon' },
                    external_react_default().createElement("svg", { width: "1.5rem", viewBox: "0 0 13 9", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                        external_react_default().createElement("path", { d: "M1 3.5L4.5 7.5L12 1", stroke: "white", strokeWidth: "1.5" })))),
                step.state === StepStates.ERROR && external_react_default().createElement("span", { className: 'step-icon' }, "!"),
                step.state !== StepStates.COMPLETED && step.state !== StepStates.ERROR && (external_react_default().createElement("span", { className: 'step-index' }, i + 1)),
                external_react_default().createElement("div", { className: "".concat('step-label', " ").concat(labelClass || '') },
                    step.label,
                    step.subtitle && (external_react_default().createElement("div", { className: "".concat('step-label-subtitle', " ").concat(subtitleClass || '') }, step.subtitle)))));
        })),
        external_react_default().createElement("div", { className: "".concat('step-content', " ").concat(contentClass || '') }, props.steps[currentIndex].content),
        !hideStepButtons &&
            external_react_default().createElement("div", { className: "".concat('step-buttons', " ").concat(buttonWrapperClass || '') },
                external_react_default().createElement("a", { className: "".concat('step-action-btn', " ").concat('action-btn-secondary', " ").concat(currentIndex === 0 ? 'disabled' : '', " ").concat(secondaryBtnClass || ''), onClick: prevHandler }, previousBtnName ? previousBtnName : 'Previous'),
                currentIndex === state.length - 1 ? (external_react_default().createElement("a", { className: "".concat('step-action-btn', " ").concat('action-btn-primary', " ").concat(primaryBtnClass || ''), onClick: submitHandler }, submitBtnName || 'Submit')) : (external_react_default().createElement("a", { className: "".concat('step-action-btn', " ").concat('action-btn-primary', " ").concat(primaryBtnClass || ''), onClick: nextHandler }, nextBtnName ? nextBtnName : 'Next')))));
}
/* harmony default export */ const src = (StepProgressBar);

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLGNBQ2xDLGlCQUFpQixJQUFJLEVBQUUsQ0FBRSxFQUM3QixPQUFPLEVBQUUsV0FBVyxJQUVuQixlQUFlLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUM3QztnQkFDSCxZQUFZLEtBQUssS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ25DLDhDQUNFLFNBQVMsRUFBRSxVQUFHLGlCQUFpQixjQUFJLG9CQUFvQixjQUNyRCxlQUFlLElBQUksRUFBRSxDQUNyQixFQUNGLE9BQU8sRUFBRSxhQUFhLElBRXJCLGFBQWEsSUFBSSxRQUFRLENBQ3hCLENBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FDRiw4Q0FDRSxTQUFTLEVBQUUsVUFBRyxpQkFBaUIsY0FBSSxvQkFBb0IsY0FDckQsZUFBZSxJQUFJLEVBQUUsQ0FDckIsRUFDRixPQUFPLEVBQUUsV0FBVyxJQUVuQixXQUFXLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUNqQyxDQUNMLENBQ0csQ0FFSixDQUNQLENBQUM7QUFDSixDQUFDO0FBRUQsMENBQWUsZUFBZSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3Qtc3RlcC1wcm9ncmVzcy93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vcmVhY3Qtc3RlcC1wcm9ncmVzcy8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3JlYWN0LXN0ZXAtcHJvZ3Jlc3MvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3JlYWN0LXN0ZXAtcHJvZ3Jlc3MvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZWFjdC1zdGVwLXByb2dyZXNzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3JlYWN0LXN0ZXAtcHJvZ3Jlc3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3JlYWN0LXN0ZXAtcHJvZ3Jlc3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtc3RlcC1wcm9ncmVzcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZWFjdC1zdGVwLXByb2dyZXNzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtc3RlcC1wcm9ncmVzcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3JlYWN0LXN0ZXAtcHJvZ3Jlc3MvZXh0ZXJuYWwgdW1kIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9yZWFjdC1zdGVwLXByb2dyZXNzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JlYWN0LXN0ZXAtcHJvZ3Jlc3Mvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVhY3Qtc3RlcC1wcm9ncmVzcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVhY3Qtc3RlcC1wcm9ncmVzcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JlYWN0LXN0ZXAtcHJvZ3Jlc3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZWFjdC1zdGVwLXByb2dyZXNzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZWFjdC1zdGVwLXByb2dyZXNzLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9yZWFjdC1zdGVwLXByb2dyZXNzLy4vc3JjL21vZGVscy9pbmRleC50cyIsIndlYnBhY2s6Ly9yZWFjdC1zdGVwLXByb2dyZXNzLy4vc3JjL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWFjdFwiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIikpIDogZmFjdG9yeShyb290W1wicmVhY3RcIl0pO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkoc2VsZiwgKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzE1NV9fKSA9PiB7XG5yZXR1cm4gIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5wcm9ncmVzcy1iYXItd3JhcHBlciB7XG4gIHBhZGRpbmc6IDJyZW07XG59XG4ucHJvZ3Jlc3MtYmFyLXdyYXBwZXIsIC5wcm9ncmVzcy1iYXItd3JhcHBlciAqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5zdGVwLXByb2dyZXNzLWJhciB7XG4gIG1hcmdpbjogMCAwIDFyZW0gMDtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cbi5wcm9ncmVzcy1zdGVwIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wcm9ncmVzcy1zdGVwOjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgaGVpZ2h0OiAzcHg7XG4gIHdpZHRoOiAxMDAlO1xuICByaWdodDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHotaW5kZXg6IC0xO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2U3ZWFmMyA1MCUsICM0ZGIxOTMgNTAlKTtcblx0YmFja2dyb3VuZC1zaXplOiAyMDAlIDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGJvdHRvbTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1wb3NpdGlvbiAyMDBtcyBlYXNlLWluLW91dDtcbn1cbi5wcm9ncmVzcy1zdGVwOmZpcnN0LWNoaWxkOjpiZWZvcmUge1xuICBjb250ZW50OiBub25lO1xufVxuLnByb2dyZXNzLXN0ZXAgLnN0ZXAtaW5kZXgsXG4ucHJvZ3Jlc3Mtc3RlcCAuc3RlcC1pY29uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZWFmMztcbiAgY29sb3I6IHZhcigtLXRleHQtbm9ybWFsKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDIuNXJlbTtcbiAgd2lkdGg6IDIuNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uc3RlcC1pbmRleCwgLnN0ZXAtaWNvbiB7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjUwbXMgZWFzZTtcbn1cbi5wcm9ncmVzcy1zdGVwIC5zdGVwLWxhYmVsIHtcbiAgY29sb3I6IHZhcigtLXRleHQtbm9ybWFsKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEyMCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuLnByb2dyZXNzLXN0ZXAgLnN0ZXAtbGFiZWwtc3VidGl0bGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5wcm9ncmVzcy1zdGVwLmNvbXBsZXRlZCAuc3RlcC1pY29uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRkYjE5MztcbiAgY29sb3I6IHdoaXRlO1xuICBhbmltYXRpb246IHNwcmluZy1kb3duIDQwMG1zIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xufVxuLnByb2dyZXNzLXN0ZXAuY29tcGxldGVkIC5zdGVwLWljb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI5OTdmO1xufVxuLnByb2dyZXNzLXN0ZXAuY3VycmVudCAuc3RlcC1pbmRleCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODdjZjY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYW5pbWF0aW9uOiBzcHJpbmctdXAgNDAwbXMgZWFzZSBmb3J3YXJkcztcbn1cbi5wcm9ncmVzcy1zdGVwLmN1cnJlbnQgLnN0ZXAtaW5kZXg6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzE2ZGRiO1xufVxuLnByb2dyZXNzLXN0ZXAuY29tcGxldGVkOjpiZWZvcmUsXG4ucHJvZ3Jlc3Mtc3RlcC5jdXJyZW50OjpiZWZvcmUsXG4ucHJvZ3Jlc3Mtc3RlcC5oYXMtZXJyb3I6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgYm90dG9tO1xufVxuLnByb2dyZXNzLXN0ZXAuaGFzLWVycm9yIC5zdGVwLWljb24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiYjM5MmQ7XG4gIGFuaW1hdGlvbjogc2hha2UgMzUwbXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XG59XG4uc3RlcC1jb250ZW50IHtcbiAgcGFkZGluZzogMXJlbTtcbn1cbi5zdGVwLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG4uc3RlcC1hY3Rpb24tYnRuIHtcbiAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluLW91dDtcbn1cbi5hY3Rpb24tYnRuLXNlY29uZGFyeSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMWQ5ZWI7XG59XG4uYWN0aW9uLWJ0bi1zZWNvbmRhcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmN2ZmO1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAwIHJnYmEoMTkwLCAyMDEsIDIyOCwgMC4zKTtcbn1cbi5hY3Rpb24tYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk3Y2Y2O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzk3Y2Y2O1xuICBjb2xvcjogd2hpdGU7XG59XG4uYWN0aW9uLWJ0bi1wcmltYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxNmRkYjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzMxNmRkYjtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggMCByZ2JhKDU3LCAxMjQsIDI0NiwgMC4zKTtcbn1cbi5zdGVwLWFjdGlvbi1idG4uZGlzYWJsZWQge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgZmlsdGVyOiBvcGFjaXR5KDAuNyk7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuQGtleWZyYW1lcyBzcHJpbmctdXAge1xuICAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cbiAgMTAlIHsgdHJhbnNmb3JtOiBzY2FsZSgwLjk3NSk7IH1cbiAgNDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjQpOyB9XG4gIDUwJSwgMTAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMS4yKTsgfVxufVxuQGtleWZyYW1lcyBzcHJpbmctZG93biB7XG4gIDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjIpOyB9XG4gIDM1JSwgMTAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IH1cbn1cbkBrZXlmcmFtZXMgc2hha2Uge1xuICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxuICAxNSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMC4ycmVtKTsgfVxuICAzMCUsIDYwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMC40cmVtKTsgfVxuICA0NSUsIDc1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwLjRyZW0pOyB9XG4gIDkwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMC4ycmVtKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCxXQUFXO0VBQ1gsVUFBVTtFQUNWLDJCQUEyQjtFQUMzQixXQUFXO0VBQ1gsOERBQThEO0NBQy9ELDBCQUEwQjtFQUN6QixpQ0FBaUM7RUFDakMsaURBQWlEO0FBQ25EO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTs7RUFFRSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLHVDQUF1QztBQUN6QztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUztFQUNULDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixpREFBaUQ7QUFDbkQ7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWix3Q0FBd0M7QUFDMUM7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBOzs7RUFHRSxnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsMkNBQTJDO0FBQzdDO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsaUNBQWlDO0FBQ25DO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixrREFBa0Q7QUFDcEQ7QUFDQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGlEQUFpRDtBQUNuRDtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsS0FBSyxtQkFBbUIsRUFBRTtFQUMxQixNQUFNLHVCQUF1QixFQUFFO0VBQy9CLE1BQU0scUJBQXFCLEVBQUU7RUFDN0IsWUFBWSxxQkFBcUIsRUFBRTtBQUNyQztBQUNBO0VBQ0UsS0FBSyxxQkFBcUIsRUFBRTtFQUM1QixZQUFZLG1CQUFtQixFQUFFO0FBQ25DO0FBQ0E7RUFDRSxLQUFLLHdCQUF3QixFQUFFO0VBQy9CLE1BQU0sNkJBQTZCLEVBQUU7RUFDckMsV0FBVyw4QkFBOEIsRUFBRTtFQUMzQyxXQUFXLDZCQUE2QixFQUFFO0VBQzFDLE1BQU0sOEJBQThCLEVBQUU7RUFDdEMsT0FBTyx3QkFBd0IsRUFBRTtBQUNuQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucHJvZ3Jlc3MtYmFyLXdyYXBwZXIge1xcbiAgcGFkZGluZzogMnJlbTtcXG59XFxuLnByb2dyZXNzLWJhci13cmFwcGVyLCAucHJvZ3Jlc3MtYmFyLXdyYXBwZXIgKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4uc3RlcC1wcm9ncmVzcy1iYXIge1xcbiAgbWFyZ2luOiAwIDAgMXJlbSAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4ucHJvZ3Jlc3Mtc3RlcCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5wcm9ncmVzcy1zdGVwOjpiZWZvcmUge1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGhlaWdodDogM3B4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICByaWdodDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgei1pbmRleDogLTE7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2U3ZWFmMyA1MCUsICM0ZGIxOTMgNTAlKTtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IDIwMCUgMTAwJTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGJvdHRvbTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24gMjAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcbi5wcm9ncmVzcy1zdGVwOmZpcnN0LWNoaWxkOjpiZWZvcmUge1xcbiAgY29udGVudDogbm9uZTtcXG59XFxuLnByb2dyZXNzLXN0ZXAgLnN0ZXAtaW5kZXgsXFxuLnByb2dyZXNzLXN0ZXAgLnN0ZXAtaWNvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlYWYzO1xcbiAgY29sb3I6IHZhcigtLXRleHQtbm9ybWFsKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGhlaWdodDogMi41cmVtO1xcbiAgd2lkdGg6IDIuNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAyLjVyZW07XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnN0ZXAtaW5kZXgsIC5zdGVwLWljb24ge1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyNTBtcyBlYXNlO1xcbn1cXG4ucHJvZ3Jlc3Mtc3RlcCAuc3RlcC1sYWJlbCB7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1ub3JtYWwpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMjAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbn1cXG4ucHJvZ3Jlc3Mtc3RlcCAuc3RlcC1sYWJlbC1zdWJ0aXRsZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLnByb2dyZXNzLXN0ZXAuY29tcGxldGVkIC5zdGVwLWljb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRkYjE5MztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGFuaW1hdGlvbjogc3ByaW5nLWRvd24gNDAwbXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxufVxcbi5wcm9ncmVzcy1zdGVwLmNvbXBsZXRlZCAuc3RlcC1pY29uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Mjk5N2Y7XFxufVxcbi5wcm9ncmVzcy1zdGVwLmN1cnJlbnQgLnN0ZXAtaW5kZXgge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4N2NmNjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGFuaW1hdGlvbjogc3ByaW5nLXVwIDQwMG1zIGVhc2UgZm9yd2FyZHM7XFxufVxcbi5wcm9ncmVzcy1zdGVwLmN1cnJlbnQgLnN0ZXAtaW5kZXg6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxNmRkYjtcXG59XFxuLnByb2dyZXNzLXN0ZXAuY29tcGxldGVkOjpiZWZvcmUsXFxuLnByb2dyZXNzLXN0ZXAuY3VycmVudDo6YmVmb3JlLFxcbi5wcm9ncmVzcy1zdGVwLmhhcy1lcnJvcjo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgYm90dG9tO1xcbn1cXG4ucHJvZ3Jlc3Mtc3RlcC5oYXMtZXJyb3IgLnN0ZXAtaWNvbiB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmIzOTJkO1xcbiAgYW5pbWF0aW9uOiBzaGFrZSAzNTBtcyBlYXNlLWluLW91dCBmb3J3YXJkcztcXG59XFxuLnN0ZXAtY29udGVudCB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG4uc3RlcC1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuLnN0ZXAtYWN0aW9uLWJ0biB7XFxuICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG4uYWN0aW9uLWJ0bi1zZWNvbmRhcnkge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2QxZDllYjtcXG59XFxuLmFjdGlvbi1idG4tc2Vjb25kYXJ5OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2Y3ZmY7XFxuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAwIHJnYmEoMTkwLCAyMDEsIDIyOCwgMC4zKTtcXG59XFxuLmFjdGlvbi1idG4tcHJpbWFyeSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk3Y2Y2O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzM5N2NmNjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmFjdGlvbi1idG4tcHJpbWFyeTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzE2ZGRiO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzMxNmRkYjtcXG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IDAgcmdiYSg1NywgMTI0LCAyNDYsIDAuMyk7XFxufVxcbi5zdGVwLWFjdGlvbi1idG4uZGlzYWJsZWQge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBmaWx0ZXI6IG9wYWNpdHkoMC43KTtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuQGtleWZyYW1lcyBzcHJpbmctdXAge1xcbiAgMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9XFxuICAxMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDAuOTc1KTsgfVxcbiAgNDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjQpOyB9XFxuICA1MCUsIDEwMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEuMik7IH1cXG59XFxuQGtleWZyYW1lcyBzcHJpbmctZG93biB7XFxuICAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMS4yKTsgfVxcbiAgMzUlLCAxMDAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxcbn1cXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcXG4gIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9XFxuICAxNSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMC4ycmVtKTsgfVxcbiAgMzAlLCA2MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTAuNHJlbSk7IH1cXG4gIDQ1JSwgNzUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAuNHJlbSk7IH1cXG4gIDkwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMC4ycmVtKTsgfVxcbiAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX18xNTVfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJleHBvcnQgZW51bSBTdGVwU3RhdGVzIHtcbiAgTk9UX1NUQVJURUQgPSAnbm90X3N0YXJ0ZWQnLFxuICBDVVJSRU5UID0gJ2N1cnJlbnQnLFxuICBFUlJPUiA9ICdlcnJvcicsXG4gIENPTVBMRVRFRCA9ICdjb21wbGV0ZWQnXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvZ3Jlc3NTdGVwIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgc3VidGl0bGU/OiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgc3RhdGU/OiBTdGVwU3RhdGVzO1xuICBjb250ZW50OiBSZWFjdC5SZWFjdE5vZGU7XG4gIHZhbGlkYXRvcj86IChwYXlsb2FkPzogYW55KSA9PiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0ZXBQcm9ncmVzc1Byb3BzIHtcbiAgc3RlcHM6IFByb2dyZXNzU3RlcFtdO1xuICBzdGFydGluZ1N0ZXA6IG51bWJlcjtcbiAgd3JhcHBlckNsYXNzPzogc3RyaW5nO1xuICBwcm9ncmVzc0NsYXNzPzogc3RyaW5nO1xuICBzdGVwQ2xhc3M/OiBzdHJpbmc7XG4gIGxhYmVsQ2xhc3M/OiBzdHJpbmc7XG4gIHN1YnRpdGxlQ2xhc3M/OiBzdHJpbmc7XG4gIGNvbnRlbnRDbGFzcz86IHN0cmluZztcbiAgYnV0dG9uV3JhcHBlckNsYXNzPzogc3RyaW5nO1xuICBwcmltYXJ5QnRuQ2xhc3M/OiBzdHJpbmc7XG4gIHNlY29uZGFyeUJ0bkNsYXNzPzogc3RyaW5nO1xuICBzdWJtaXRCdG5OYW1lPzogc3RyaW5nO1xuICBvblN1Ym1pdDogRnVuY3Rpb247XG4gIHByZXZpb3VzQnRuTmFtZT86IHN0cmluZztcbiAgbmV4dEJ0bk5hbWU/OiBzdHJpbmc7XG4gIGhpZGVTdGVwQnV0dG9ucz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVkdWNlckFjdGlvbiB7XG4gIHR5cGU6IHN0cmluZztcbiAgcGF5bG9hZDogeyBpbmRleDogbnVtYmVyOyBzdGF0ZTogU3RlcFN0YXRlcyB9O1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbmltcG9ydCB7IFN0ZXBTdGF0ZXMsIFByb2dyZXNzU3RlcCwgU3RlcFByb2dyZXNzUHJvcHMsIFJlZHVjZXJBY3Rpb24gfSBmcm9tICcuL21vZGVscyc7XG5cbmZ1bmN0aW9uIHN0ZXBzUmVkdWNlcihzdGVwczogUHJvZ3Jlc3NTdGVwW10sIGFjdGlvbjogUmVkdWNlckFjdGlvbik6IFByb2dyZXNzU3RlcFtdIHtcblxuICByZXR1cm4gc3RlcHMubWFwKGZ1bmN0aW9uIChzdGVwLCBpKSB7XG5cbiAgICBpZiAoaSA8IGFjdGlvbi5wYXlsb2FkLmluZGV4KSB7XG4gICAgICBzdGVwLnN0YXRlID0gU3RlcFN0YXRlcy5DT01QTEVURUQ7XG4gICAgfSBlbHNlIGlmIChpID09PSBhY3Rpb24ucGF5bG9hZC5pbmRleCkge1xuICAgICAgc3RlcC5zdGF0ZSA9IGFjdGlvbi5wYXlsb2FkLnN0YXRlO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGVwLnN0YXRlID0gU3RlcFN0YXRlcy5OT1RfU1RBUlRFRDtcbiAgICB9XG4gICAgcmV0dXJuIHN0ZXA7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBTdGVwUHJvZ3Jlc3NCYXIocHJvcHM6IFN0ZXBQcm9ncmVzc1Byb3BzKTogUmVhY3QuSlNYLkVsZW1lbnQge1xuICBjb25zdCB7XG4gICAgc3RlcHMsXG4gICAgc3RhcnRpbmdTdGVwLFxuICAgIHdyYXBwZXJDbGFzcyxcbiAgICBwcm9ncmVzc0NsYXNzLFxuICAgIHN0ZXBDbGFzcyxcbiAgICBsYWJlbENsYXNzLFxuICAgIHN1YnRpdGxlQ2xhc3MsXG4gICAgY29udGVudENsYXNzLFxuICAgIGJ1dHRvbldyYXBwZXJDbGFzcyxcbiAgICBwcmltYXJ5QnRuQ2xhc3MsXG4gICAgc2Vjb25kYXJ5QnRuQ2xhc3MsXG4gICAgc3VibWl0QnRuTmFtZSxcbiAgICBvblN1Ym1pdCxcbiAgICBwcmV2aW91c0J0bk5hbWUsXG4gICAgbmV4dEJ0bk5hbWUsXG4gICAgaGlkZVN0ZXBCdXR0b25zXG4gIH0gPSBwcm9wcztcbiAgY29uc3QgW2N1cnJlbnRJbmRleCwgc2V0Q3VycmVudEluZGV4XSA9IHVzZVN0YXRlKHN0YXJ0aW5nU3RlcCk7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihzdGVwc1JlZHVjZXIsIHN0ZXBzKTtcblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdpbml0JyxcbiAgICAgIHBheWxvYWQ6IHsgaW5kZXg6IGN1cnJlbnRJbmRleCwgc3RhdGU6IFN0ZXBTdGF0ZXMuQ1VSUkVOVCB9XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICBmdW5jdGlvbiBzdWJtaXRIYW5kbGVyKCk6IHZvaWQge1xuICAgIG9uU3VibWl0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBuZXh0SGFuZGxlcigpOiB2b2lkIHtcblxuICAgIGlmIChjdXJyZW50SW5kZXggPT09IHN0ZXBzLmxlbmd0aCAtIDEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGlzU3RhdGVWYWxpZCA9IHRydWU7XG4gICAgY29uc3Qgc3RlcFZhbGlkYXRvciA9IHN0YXRlW2N1cnJlbnRJbmRleF0udmFsaWRhdG9yO1xuXG4gICAgaWYgKHN0ZXBWYWxpZGF0b3IpIHtcbiAgICAgIGlzU3RhdGVWYWxpZCA9IHN0ZXBWYWxpZGF0b3IoKTtcbiAgICB9XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ25leHQnLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBpbmRleDogaXNTdGF0ZVZhbGlkID8gY3VycmVudEluZGV4ICsgMSA6IGN1cnJlbnRJbmRleCxcbiAgICAgICAgc3RhdGU6IGlzU3RhdGVWYWxpZCA/IFN0ZXBTdGF0ZXMuQ1VSUkVOVCA6IFN0ZXBTdGF0ZXMuRVJST1JcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChpc1N0YXRlVmFsaWQpIHtcbiAgICAgIHNldEN1cnJlbnRJbmRleChjdXJyZW50SW5kZXggKyAxKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcmV2SGFuZGxlcigpOiB2b2lkIHtcblxuICAgIGlmIChjdXJyZW50SW5kZXggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAncHJldmlvdXMnLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBpbmRleDogY3VycmVudEluZGV4IC0gMSxcbiAgICAgICAgc3RhdGU6IFN0ZXBTdGF0ZXMuQ1VSUkVOVFxuICAgICAgfVxuICAgIH0pO1xuICAgIHNldEN1cnJlbnRJbmRleChjdXJyZW50SW5kZXggLSAxKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Akeydwcm9ncmVzcy1iYXItd3JhcHBlcid9ICR7d3JhcHBlckNsYXNzIHx8ICcnfWB9PlxuICAgICAgPHVsIGNsYXNzTmFtZT17YCR7J3N0ZXAtcHJvZ3Jlc3MtYmFyJ30gJHtwcm9ncmVzc0NsYXNzIHx8ICcnfWB9PlxuICAgICAgICB7c3RhdGUubWFwKGZ1bmN0aW9uIChzdGVwLCBpKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7J3Byb2dyZXNzLXN0ZXAnfSR7XG4gICAgICAgICAgICAgICAgc3RlcC5zdGF0ZSA9PT0gU3RlcFN0YXRlcy5DT01QTEVURUQgPyBgICR7J2NvbXBsZXRlZCd9YCA6ICcnXG4gICAgICAgICAgICAgIH0ke3N0ZXAuc3RhdGUgPT09IFN0ZXBTdGF0ZXMuQ1VSUkVOVCA/IGAgJHsnY3VycmVudCd9YCA6ICcnfSR7XG4gICAgICAgICAgICAgICAgc3RlcC5zdGF0ZSA9PT0gU3RlcFN0YXRlcy5FUlJPUiA/IGAgJHsnaGFzLWVycm9yJ31gIDogJydcbiAgICAgICAgICAgICAgfSAke3N0ZXBDbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7c3RlcC5zdGF0ZSA9PT0gU3RlcFN0YXRlcy5DT01QTEVURUQgJiYgKFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17J3N0ZXAtaWNvbid9PlxuICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEuNXJlbVwiXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTMgOVwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMSAzLjVMNC41IDcuNUwxMiAxXCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2VXaWR0aD1cIjEuNVwiIC8+XG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHtzdGVwLnN0YXRlID09PSBTdGVwU3RhdGVzLkVSUk9SICYmIDxzcGFuIGNsYXNzTmFtZT17J3N0ZXAtaWNvbid9PiE8L3NwYW4+fVxuICAgICAgICAgICAgICB7c3RlcC5zdGF0ZSAhPT0gU3RlcFN0YXRlcy5DT01QTEVURUQgJiYgc3RlcC5zdGF0ZSAhPT0gU3RlcFN0YXRlcy5FUlJPUiAmJiAoXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXsnc3RlcC1pbmRleCd9PntpICsgMX08L3NwYW4+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHsnc3RlcC1sYWJlbCd9ICR7bGFiZWxDbGFzcyB8fCAnJ31gfT5cbiAgICAgICAgICAgICAgICB7c3RlcC5sYWJlbH1cbiAgICAgICAgICAgICAgICB7c3RlcC5zdWJ0aXRsZSAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7J3N0ZXAtbGFiZWwtc3VidGl0bGUnfSAke3N1YnRpdGxlQ2xhc3MgfHwgJyd9YH0+XG4gICAgICAgICAgICAgICAgICAgIHtzdGVwLnN1YnRpdGxlfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC91bD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e2AkeydzdGVwLWNvbnRlbnQnfSAke2NvbnRlbnRDbGFzcyB8fCAnJ31gfT5cbiAgICAgICAge3Byb3BzLnN0ZXBzW2N1cnJlbnRJbmRleF0uY29udGVudH1cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7IWhpZGVTdGVwQnV0dG9ucyAmJlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7J3N0ZXAtYnV0dG9ucyd9ICR7YnV0dG9uV3JhcHBlckNsYXNzIHx8ICcnfWB9PlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9e2AkeydzdGVwLWFjdGlvbi1idG4nfSAkeydhY3Rpb24tYnRuLXNlY29uZGFyeSd9ICR7XG4gICAgICAgICAgICAgIGN1cnJlbnRJbmRleCA9PT0gMCA/ICdkaXNhYmxlZCcgOiAnJ1xuICAgICAgICAgICAgfSAke3NlY29uZGFyeUJ0bkNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICBvbkNsaWNrPXtwcmV2SGFuZGxlcn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7cHJldmlvdXNCdG5OYW1lID8gcHJldmlvdXNCdG5OYW1lIDogJ1ByZXZpb3VzJ31cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAge2N1cnJlbnRJbmRleCA9PT0gc3RhdGUubGVuZ3RoIC0gMSA/IChcbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7J3N0ZXAtYWN0aW9uLWJ0bid9ICR7J2FjdGlvbi1idG4tcHJpbWFyeSd9ICR7XG4gICAgICAgICAgICAgICAgcHJpbWFyeUJ0bkNsYXNzIHx8ICcnXG4gICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICBvbkNsaWNrPXtzdWJtaXRIYW5kbGVyfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7c3VibWl0QnRuTmFtZSB8fCAnU3VibWl0J31cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHsnc3RlcC1hY3Rpb24tYnRuJ30gJHsnYWN0aW9uLWJ0bi1wcmltYXJ5J30gJHtcbiAgICAgICAgICAgICAgICBwcmltYXJ5QnRuQ2xhc3MgfHwgJydcbiAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e25leHRIYW5kbGVyfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bmV4dEJ0bk5hbWUgPyBuZXh0QnRuTmFtZSA6ICdOZXh0J31cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RlcFByb2dyZXNzQmFyO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9