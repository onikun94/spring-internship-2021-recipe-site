module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/recipes/[id].tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/yamaguchitaiyo/Documents/cookpad/spring-internship-2021-recipe-site/components/Header.tsx\";\n\n\nconst Header = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: \"header\",\n        children: \"\\u81F3\\u9AD8\\u306E\\u6599\\u7406\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci50c3g/ZGRiOCJdLCJuYW1lcyI6WyJIZWFkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsTUFBTTtBQUNuQixzQkFDRTtBQUFBLDJCQUNFO0FBQUEsNkJBQ0U7QUFBSSxpQkFBUyxFQUFDLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBT0QsQ0FSRDs7QUFVZUEscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhlYWRlclwiPuiHs+mrmOOBruaWmeeQhjwvaDE+XG4gICAgICA8L2hlYWRlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.tsx\n");

/***/ }),

/***/ "./lib/recipe.ts":
/*!***********************!*\
  !*** ./lib/recipe.ts ***!
  \***********************/
/*! exports provided: getRecipes, getPages, getRecipe, search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRecipes\", function() { return getRecipes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPages\", function() { return getPages; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRecipe\", function() { return getRecipe; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"search\", function() { return search; });\n//import recipes from \"../data/recipes.json\";\nasync function getRecipes() {\n  const response = await fetch(\"https://internship-recipe-api.ckpd.co/recipes\", {\n    headers: {\n      \"X-Api-Key\": \"remark-fish-magician\"\n    },\n    method: \"GET\"\n  });\n  const recipes = await response.json(); //const links = jsonData?.links;\n  //const recipes = jsonData?.recipes;\n\n  return recipes;\n}\nasync function getPages(nextLink) {\n  const response = await fetch(nextLink, {\n    headers: {\n      \"X-Api-Key\": \"remark-fish-magician\"\n    },\n    method: \"GET\"\n  });\n  const recipes = await response.json(); //const links = jsonData?.links;\n  //const recipes = jsonData?.recipes;\n\n  return recipes;\n}\nasync function getRecipe(id) {\n  const response = await fetch(`https://internship-recipe-api.ckpd.co/recipes/${id}`, {\n    headers: {\n      \"X-Api-Key\": \"remark-fish-magician\"\n    },\n    method: \"GET\"\n  });\n  const recipe = await response.json();\n  return recipe;\n}\nasync function search(keyword) {\n  const response = await fetch(`https://internship-recipe-api.ckpd.co/recipes/search?keyword=${keyword}`, {\n    headers: {\n      \"X-Api-Key\": \"remark-fish-magician\"\n    },\n    method: \"GET\"\n  });\n  const searchRes = await response.json();\n  return searchRes;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvcmVjaXBlLnRzP2YxMzciXSwibmFtZXMiOlsiZ2V0UmVjaXBlcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJoZWFkZXJzIiwicHJvY2VzcyIsIk5FWFRfUFVCTElDX0FQSV9LRVkiLCJtZXRob2QiLCJyZWNpcGVzIiwianNvbiIsImdldFBhZ2VzIiwibmV4dExpbmsiLCJnZXRSZWNpcGUiLCJpZCIsInJlY2lwZSIsInNlYXJjaCIsImtleXdvcmQiLCJzZWFyY2hSZXMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTZCTyxlQUFlQSxVQUFmLEdBQTBDO0FBQy9DLFFBQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQzFCLCtDQUQwQixFQUUxQjtBQUNFQyxXQUFPLEVBQUU7QUFBRSxtQkFBYUMsc0JBQStCQztBQUE5QyxLQURYO0FBRUVDLFVBQU0sRUFBRTtBQUZWLEdBRjBCLENBQTVCO0FBT0EsUUFBTUMsT0FBTyxHQUFHLE1BQU1OLFFBQVEsQ0FBQ08sSUFBVCxFQUF0QixDQVIrQyxDQVMvQztBQUNBOztBQUNBLFNBQU9ELE9BQVA7QUFDRDtBQUVNLGVBQWVFLFFBQWYsQ0FBd0JDLFFBQXhCLEVBQXdEO0FBQzdELFFBQU1ULFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNRLFFBQUQsRUFBVztBQUNyQ1AsV0FBTyxFQUFFO0FBQUUsbUJBQWFDLHNCQUErQkM7QUFBOUMsS0FENEI7QUFFckNDLFVBQU0sRUFBRTtBQUY2QixHQUFYLENBQTVCO0FBSUEsUUFBTUMsT0FBTyxHQUFHLE1BQU1OLFFBQVEsQ0FBQ08sSUFBVCxFQUF0QixDQUw2RCxDQU03RDtBQUNBOztBQUNBLFNBQU9ELE9BQVA7QUFDRDtBQUVNLGVBQWVJLFNBQWYsQ0FBeUJDLEVBQXpCLEVBQTBEO0FBQy9ELFFBQU1YLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQ3pCLGlEQUFnRFUsRUFBRyxFQUQxQixFQUUxQjtBQUNFVCxXQUFPLEVBQUU7QUFBRSxtQkFBYUMsc0JBQStCQztBQUE5QyxLQURYO0FBRUVDLFVBQU0sRUFBRTtBQUZWLEdBRjBCLENBQTVCO0FBT0EsUUFBTU8sTUFBTSxHQUFHLE1BQU1aLFFBQVEsQ0FBQ08sSUFBVCxFQUFyQjtBQUNBLFNBQU9LLE1BQVA7QUFDRDtBQUVNLGVBQWVDLE1BQWYsQ0FBc0JDLE9BQXRCLEVBQXFEO0FBQzFELFFBQU1kLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQ3pCLGdFQUErRGEsT0FBUSxFQUQ5QyxFQUUxQjtBQUNFWixXQUFPLEVBQUU7QUFBRSxtQkFBYUMsc0JBQStCQztBQUE5QyxLQURYO0FBRUVDLFVBQU0sRUFBRTtBQUZWLEdBRjBCLENBQTVCO0FBUUEsUUFBTVUsU0FBUyxHQUFHLE1BQU1mLFFBQVEsQ0FBQ08sSUFBVCxFQUF4QjtBQUNBLFNBQU9RLFNBQVA7QUFDRCIsImZpbGUiOiIuL2xpYi9yZWNpcGUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCByZWNpcGVzIGZyb20gXCIuLi9kYXRhL3JlY2lwZXMuanNvblwiO1xuXG5leHBvcnQgdHlwZSBSZWNpcGUgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGltYWdlX3VybDogc3RyaW5nIHwgbnVsbDtcbiAgYXV0aG9yOiB7XG4gICAgdXNlcl9uYW1lOiBzdHJpbmc7XG4gIH07XG4gIHB1Ymxpc2hlZF9hdDogc3RyaW5nO1xuICBzdGVwczogc3RyaW5nW107XG4gIGluZ3JlZGllbnRzOiB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHF1YW50aXR5OiBzdHJpbmc7XG4gIH1bXTtcbiAgcmVsYXRlZF9yZWNpcGVzOiBudW1iZXJbXTtcbn07XG5cbmV4cG9ydCB0eXBlIExpbmtzID0ge1xuICBuZXh0Pzogc3RyaW5nO1xuICBwcmV2Pzogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgUmVzID0ge1xuICByZWNpcGVzOiBSZWNpcGVbXTtcbiAgbGlua3M6IExpbmtzO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJlY2lwZXMoKTogUHJvbWlzZTxSZXM+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBcImh0dHBzOi8vaW50ZXJuc2hpcC1yZWNpcGUtYXBpLmNrcGQuY28vcmVjaXBlc1wiLFxuICAgIHtcbiAgICAgIGhlYWRlcnM6IHsgXCJYLUFwaS1LZXlcIjogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0tFWSBhcyBzdHJpbmcgfSxcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICB9XG4gICk7XG4gIGNvbnN0IHJlY2lwZXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIC8vY29uc3QgbGlua3MgPSBqc29uRGF0YT8ubGlua3M7XG4gIC8vY29uc3QgcmVjaXBlcyA9IGpzb25EYXRhPy5yZWNpcGVzO1xuICByZXR1cm4gcmVjaXBlcyBhcyBSZXM7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQYWdlcyhuZXh0TGluazogc3RyaW5nKTogUHJvbWlzZTxSZXM+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChuZXh0TGluaywge1xuICAgIGhlYWRlcnM6IHsgXCJYLUFwaS1LZXlcIjogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0tFWSBhcyBzdHJpbmcgfSxcbiAgICBtZXRob2Q6IFwiR0VUXCIsXG4gIH0pO1xuICBjb25zdCByZWNpcGVzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAvL2NvbnN0IGxpbmtzID0ganNvbkRhdGE/LmxpbmtzO1xuICAvL2NvbnN0IHJlY2lwZXMgPSBqc29uRGF0YT8ucmVjaXBlcztcbiAgcmV0dXJuIHJlY2lwZXMgYXMgUmVzO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmVjaXBlKGlkOiBudW1iZXIpOiBQcm9taXNlPFJlcyB8IG51bGw+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9pbnRlcm5zaGlwLXJlY2lwZS1hcGkuY2twZC5jby9yZWNpcGVzLyR7aWR9YCxcbiAgICB7XG4gICAgICBoZWFkZXJzOiB7IFwiWC1BcGktS2V5XCI6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9LRVkgYXMgc3RyaW5nIH0sXG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgfVxuICApO1xuICBjb25zdCByZWNpcGUgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiByZWNpcGUgYXMgUmVzO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VhcmNoKGtleXdvcmQ6IHN0cmluZyk6IFByb21pc2U8UmVzPiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vaW50ZXJuc2hpcC1yZWNpcGUtYXBpLmNrcGQuY28vcmVjaXBlcy9zZWFyY2g/a2V5d29yZD0ke2tleXdvcmR9YCxcbiAgICB7XG4gICAgICBoZWFkZXJzOiB7IFwiWC1BcGktS2V5XCI6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9LRVkgYXMgc3RyaW5nIH0sXG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgfVxuICApO1xuXG4gIGNvbnN0IHNlYXJjaFJlcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIHNlYXJjaFJlcyBhcyBSZXM7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/recipe.ts\n");

/***/ }),

/***/ "./pages/recipes/[id].tsx":
/*!********************************!*\
  !*** ./pages/recipes/[id].tsx ***!
  \********************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideProps\", function() { return getServerSideProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Header */ \"./components/Header.tsx\");\n/* harmony import */ var _lib_recipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/recipe */ \"./lib/recipe.ts\");\n\nvar _jsxFileName = \"/Users/yamaguchitaiyo/Documents/cookpad/spring-internship-2021-recipe-site/pages/recipes/[id].tsx\";\n\n\n //getserversideprops\n\nconst RecipePage = props => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  const {\n    recipe\n  } = props;\n\n  if (recipe == null) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: \"THERE IS NO RECIPES\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 12\n    }, undefined);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, undefined), recipe && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n        children: recipe.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 11\n      }, undefined), recipe.image_url && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: recipe.image_url,\n        alt: \"\\u30EC\\u30B7\\u30D4\\u753B\\u50CF\",\n        width: \"300\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: recipe.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 11\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n        children: \"\\u6750\\u6599\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 11\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ol\", {\n        children: recipe.ingredients.map((ing, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: [ing.name, \" : \", ing.quantity]\n        }, i, true, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 15\n        }, undefined))\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 11\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n        children: \"\\u624B\\u9806\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 11\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ol\", {\n        children: recipe.steps.map((step, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: step\n        }, i, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 15\n        }, undefined))\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 11\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, undefined);\n};\n\nconst getServerSideProps = async context => {\n  var _context$params;\n\n  const id = Number((_context$params = context.params) === null || _context$params === void 0 ? void 0 : _context$params.id);\n\n  if (id === 0 || isNaN(id)) {\n    return {\n      notFound: true\n    };\n  } else {\n    const recipe = await Object(_lib_recipe__WEBPACK_IMPORTED_MODULE_3__[\"getRecipe\"])(id);\n    return {\n      props: {\n        recipe: recipe\n      }\n    };\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (RecipePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9yZWNpcGVzLy50c3g/YzJlNSJdLCJuYW1lcyI6WyJSZWNpcGVQYWdlIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJyZWNpcGUiLCJ0aXRsZSIsImltYWdlX3VybCIsImRlc2NyaXB0aW9uIiwiaW5ncmVkaWVudHMiLCJtYXAiLCJpbmciLCJpIiwibmFtZSIsInF1YW50aXR5Iiwic3RlcHMiLCJzdGVwIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsImlkIiwiTnVtYmVyIiwicGFyYW1zIiwiaXNOYU4iLCJub3RGb3VuZCIsImdldFJlY2lwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FHQTs7QUFNQSxNQUFNQSxVQUEyQixHQUFJQyxLQUFELElBQVc7QUFDN0MsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLFFBQU07QUFBRUM7QUFBRixNQUFhSCxLQUFuQjs7QUFDQSxNQUFJRyxNQUFNLElBQUksSUFBZCxFQUFvQjtBQUNsQix3QkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQUNEOztBQUNELHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUdHQSxNQUFNLGlCQUNMO0FBQUEsOEJBQ0U7QUFBQSxrQkFBS0EsTUFBTSxDQUFDQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFHR0QsTUFBTSxDQUFDRSxTQUFQLGlCQUNDO0FBQUssV0FBRyxFQUFFRixNQUFNLENBQUNFLFNBQWpCO0FBQTRCLFdBQUcsRUFBQyxnQ0FBaEM7QUFBd0MsYUFBSyxFQUFDO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkosZUFPRTtBQUFBLGtCQUFJRixNQUFNLENBQUNHO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQRixlQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRGLGVBVUU7QUFBQSxrQkFDR0gsTUFBTSxDQUFDSSxXQUFQLENBQW1CQyxHQUFuQixDQUF1QixDQUFDQyxHQUFELEVBQU1DLENBQU4sa0JBQ3RCO0FBQUEscUJBQ0dELEdBQUcsQ0FBQ0UsSUFEUCxTQUNnQkYsR0FBRyxDQUFDRyxRQURwQjtBQUFBLFdBQVNGLENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVkYsZUFrQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBbEJGLGVBbUJFO0FBQUEsa0JBQ0dQLE1BQU0sQ0FBQ1UsS0FBUCxDQUFhTCxHQUFiLENBQWlCLENBQUNNLElBQUQsRUFBT0osQ0FBUCxrQkFDaEI7QUFBQSxvQkFBYUk7QUFBYixXQUFTSixDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFpQ0QsQ0F2Q0Q7O0FBeUNPLE1BQU1LLGtCQUFzQyxHQUFHLE1BQU9DLE9BQVAsSUFBbUI7QUFBQTs7QUFDdkUsUUFBTUMsRUFBRSxHQUFHQyxNQUFNLG9CQUFDRixPQUFPLENBQUNHLE1BQVQsb0RBQUMsZ0JBQWdCRixFQUFqQixDQUFqQjs7QUFDQSxNQUFJQSxFQUFFLEtBQUssQ0FBUCxJQUFZRyxLQUFLLENBQUNILEVBQUQsQ0FBckIsRUFBMkI7QUFDekIsV0FBTztBQUNMSSxjQUFRLEVBQUU7QUFETCxLQUFQO0FBR0QsR0FKRCxNQUlPO0FBQ0wsVUFBTWxCLE1BQU0sR0FBRyxNQUFNbUIsNkRBQVMsQ0FBQ0wsRUFBRCxDQUE5QjtBQUNBLFdBQU87QUFDTGpCLFdBQUssRUFBRTtBQUNMRyxjQUFNLEVBQUVBO0FBREg7QUFERixLQUFQO0FBS0Q7QUFDRixDQWRNO0FBZ0JRSix5RUFBZiIsImZpbGUiOiIuL3BhZ2VzL3JlY2lwZXMvW2lkXS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlLCBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgZ2V0UmVjaXBlLCBSZWNpcGUgfSBmcm9tIFwiLi4vLi4vbGliL3JlY2lwZVwiO1xuLy9nZXRzZXJ2ZXJzaWRlcHJvcHNcblxudHlwZSBQcm9wcyA9IHtcbiAgcmVjaXBlOiBSZWNpcGU7XG59O1xuXG5jb25zdCBSZWNpcGVQYWdlOiBOZXh0UGFnZTxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgcmVjaXBlIH0gPSBwcm9wcztcbiAgaWYgKHJlY2lwZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIDxkaXY+VEhFUkUgSVMgTk8gUkVDSVBFUzwvZGl2PjtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZGVyIC8+XG5cbiAgICAgIHtyZWNpcGUgJiYgKFxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICA8aDI+e3JlY2lwZS50aXRsZX08L2gyPlxuXG4gICAgICAgICAge3JlY2lwZS5pbWFnZV91cmwgJiYgKFxuICAgICAgICAgICAgPGltZyBzcmM9e3JlY2lwZS5pbWFnZV91cmx9IGFsdD1cIuODrOOCt+ODlOeUu+WDj1wiIHdpZHRoPVwiMzAwXCIgLz5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgPHA+e3JlY2lwZS5kZXNjcmlwdGlvbn08L3A+XG5cbiAgICAgICAgICA8aDM+5p2Q5paZPC9oMz5cbiAgICAgICAgICA8b2w+XG4gICAgICAgICAgICB7cmVjaXBlLmluZ3JlZGllbnRzLm1hcCgoaW5nLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2l9PlxuICAgICAgICAgICAgICAgIHtpbmcubmFtZX0gOiB7aW5nLnF1YW50aXR5fVxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9vbD5cblxuICAgICAgICAgIDxoMz7miYvpoIY8L2gzPlxuICAgICAgICAgIDxvbD5cbiAgICAgICAgICAgIHtyZWNpcGUuc3RlcHMubWFwKChzdGVwLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2l9PntzdGVwfTwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L29sPlxuICAgICAgICA8L21haW4+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgY29uc3QgaWQgPSBOdW1iZXIoY29udGV4dC5wYXJhbXM/LmlkKTtcbiAgaWYgKGlkID09PSAwIHx8IGlzTmFOKGlkKSkge1xuICAgIHJldHVybiB7XG4gICAgICBub3RGb3VuZDogdHJ1ZSxcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHJlY2lwZSA9IGF3YWl0IGdldFJlY2lwZShpZCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIHJlY2lwZTogcmVjaXBlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWNpcGVQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/recipes/[id].tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });