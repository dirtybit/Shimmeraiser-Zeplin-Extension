(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["extension"] = factory();
	else
		root["extension"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Export functions you want to work with, see documentation for details:
 * https://github.com/zeplin/zeplin-extension-documentation
 */

function layer(context, selectedLayer) {

  var object = 'builder.append';
  var result = {};

  var x = selectedLayer.rect.x;
  var y = selectedLayer.rect.y;
  var width = selectedLayer.rect.width;
  var height = selectedLayer.rect.height;
  var radius = selectedLayer.borderRadius;
  var rect = "CGRect(x: " + x + ", y:" + y + ", width: " + width + ", height: " + height + "))";

  if (radius == height / 2 && radius == width / 2) {
    object += "OvalPath(from: " + rect;
  } else if (radius > 0) {
    object += "RectPath(cornerRadius: radius, from: " + rect;
  } else {
    object += "RectPath(from: " + rect;
  }

  result = {
    code: object,
    language: 'swift'
  };

  return {
    code: object,
    language: 'swift'
  };
}

exports.default = {
  layer
};

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA0N2M1YTQ4YmE1OGY5MWZjOGIxNyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsibGF5ZXIiLCJjb250ZXh0Iiwic2VsZWN0ZWRMYXllciIsIm9iamVjdCIsInJlc3VsdCIsIngiLCJyZWN0IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwicmFkaXVzIiwiYm9yZGVyUmFkaXVzIiwiY29kZSIsImxhbmd1YWdlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN0RBOzs7OztBQUtBLFNBQVNBLEtBQVQsQ0FBZUMsT0FBZixFQUF3QkMsYUFBeEIsRUFBdUM7O0FBRW5DLE1BQUlDLFNBQVMsZ0JBQWI7QUFDQSxNQUFJQyxTQUFTLEVBQWI7O0FBRUEsTUFBSUMsSUFBSUgsY0FBY0ksSUFBZCxDQUFtQkQsQ0FBM0I7QUFDQSxNQUFJRSxJQUFJTCxjQUFjSSxJQUFkLENBQW1CQyxDQUEzQjtBQUNBLE1BQUlDLFFBQVFOLGNBQWNJLElBQWQsQ0FBbUJFLEtBQS9CO0FBQ0EsTUFBSUMsU0FBU1AsY0FBY0ksSUFBZCxDQUFtQkcsTUFBaEM7QUFDQSxNQUFJQyxTQUFTUixjQUFjUyxZQUEzQjtBQUNBLE1BQUlMLE9BQU8sZUFBZUQsQ0FBZixHQUFtQixNQUFuQixHQUE0QkUsQ0FBNUIsR0FBZ0MsV0FBaEMsR0FBOENDLEtBQTlDLEdBQXVELFlBQXZELEdBQXFFQyxNQUFyRSxHQUE4RSxJQUF6Rjs7QUFFQSxNQUFJQyxVQUFVRCxTQUFPLENBQWpCLElBQXNCQyxVQUFVRixRQUFNLENBQTFDLEVBQTZDO0FBQzNDTCxjQUFVLG9CQUFvQkcsSUFBOUI7QUFDRCxHQUZELE1BRU8sSUFBSUksU0FBUyxDQUFiLEVBQWdCO0FBQ3JCUCxjQUFVLDBDQUEwQ0csSUFBcEQ7QUFDRCxHQUZNLE1BRUE7QUFDTEgsY0FBVSxvQkFBb0JHLElBQTlCO0FBQ0Q7O0FBRURGLFdBQVM7QUFDUFEsVUFBTVQsTUFEQztBQUVQVSxjQUFVO0FBRkgsR0FBVDs7QUFLQSxTQUFPO0FBQ0xELFVBQU1ULE1BREQ7QUFFTFUsY0FBVTtBQUZMLEdBQVA7QUFJSDs7a0JBRWM7QUFDWGI7QUFEVyxDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJleHRlbnNpb25cIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZXh0ZW5zaW9uXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNDdjNWE0OGJhNThmOTFmYzhiMTciLCIvKipcbiAqIEV4cG9ydCBmdW5jdGlvbnMgeW91IHdhbnQgdG8gd29yayB3aXRoLCBzZWUgZG9jdW1lbnRhdGlvbiBmb3IgZGV0YWlsczpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS96ZXBsaW4vemVwbGluLWV4dGVuc2lvbi1kb2N1bWVudGF0aW9uXG4gKi9cblxuZnVuY3Rpb24gbGF5ZXIoY29udGV4dCwgc2VsZWN0ZWRMYXllcikge1xuXG4gICAgbGV0IG9iamVjdCA9ICdidWlsZGVyLmFwcGVuZCc7XG4gICAgbGV0IHJlc3VsdCA9IHt9O1xuXG4gICAgbGV0IHggPSBzZWxlY3RlZExheWVyLnJlY3QueDtcbiAgICBsZXQgeSA9IHNlbGVjdGVkTGF5ZXIucmVjdC55O1xuICAgIGxldCB3aWR0aCA9IHNlbGVjdGVkTGF5ZXIucmVjdC53aWR0aDtcbiAgICBsZXQgaGVpZ2h0ID0gc2VsZWN0ZWRMYXllci5yZWN0LmhlaWdodDtcbiAgICBsZXQgcmFkaXVzID0gc2VsZWN0ZWRMYXllci5ib3JkZXJSYWRpdXM7XG4gICAgbGV0IHJlY3QgPSBcIkNHUmVjdCh4OiBcIiArIHggKyBcIiwgeTpcIiArIHkgKyBcIiwgd2lkdGg6IFwiICsgd2lkdGggKyAgXCIsIGhlaWdodDogXCIrIGhlaWdodCArIFwiKSlcIjtcblxuICAgIGlmIChyYWRpdXMgPT0gaGVpZ2h0LzIgJiYgcmFkaXVzID09IHdpZHRoLzIpIHtcbiAgICAgIG9iamVjdCArPSBcIk92YWxQYXRoKGZyb206IFwiICsgcmVjdCA7XG4gICAgfSBlbHNlIGlmIChyYWRpdXMgPiAwKSB7XG4gICAgICBvYmplY3QgKz0gXCJSZWN0UGF0aChjb3JuZXJSYWRpdXM6IHJhZGl1cywgZnJvbTogXCIgKyByZWN0IDtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqZWN0ICs9IFwiUmVjdFBhdGgoZnJvbTogXCIgKyByZWN0IDtcbiAgICB9XG5cbiAgICByZXN1bHQgPSB7XG4gICAgICBjb2RlOiBvYmplY3QsXG4gICAgICBsYW5ndWFnZTogJ3N3aWZ0J1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgY29kZTogb2JqZWN0LFxuICAgICAgbGFuZ3VhZ2U6ICdzd2lmdCdcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbGF5ZXJcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9