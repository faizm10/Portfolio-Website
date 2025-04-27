"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/qss";
exports.ids = ["vendor-chunks/qss"];
exports.modules = {

/***/ "(ssr)/./node_modules/qss/dist/qss.mjs":
/*!***************************************!*\
  !*** ./node_modules/qss/dist/qss.mjs ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   decode: () => (/* binding */ decode),\n/* harmony export */   encode: () => (/* binding */ encode)\n/* harmony export */ });\nfunction encode(obj, pfx) {\n\tvar k, i, tmp, str='';\n\n\tfor (k in obj) {\n\t\tif ((tmp = obj[k]) !== void 0) {\n\t\t\tif (Array.isArray(tmp)) {\n\t\t\t\tfor (i=0; i < tmp.length; i++) {\n\t\t\t\t\tstr && (str += '&');\n\t\t\t\t\tstr += encodeURIComponent(k) + '=' + encodeURIComponent(tmp[i]);\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\tstr && (str += '&');\n\t\t\t\tstr += encodeURIComponent(k) + '=' + encodeURIComponent(tmp);\n\t\t\t}\n\t\t}\n\t}\n\n\treturn (pfx || '') + str;\n}\n\nfunction toValue(mix) {\n\tif (!mix) return '';\n\tvar str = decodeURIComponent(mix);\n\tif (str === 'false') return false;\n\tif (str === 'true') return true;\n\treturn (+str * 0 === 0) ? (+str) : str;\n}\n\nfunction decode(str) {\n\tvar tmp, k, out={}, arr=str.split('&');\n\n\twhile (tmp = arr.shift()) {\n\t\ttmp = tmp.split('=');\n\t\tk = tmp.shift();\n\t\tif (out[k] !== void 0) {\n\t\t\tout[k] = [].concat(out[k], toValue(tmp.shift()));\n\t\t} else {\n\t\t\tout[k] = toValue(tmp.shift());\n\t\t}\n\t}\n\n\treturn out;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcXNzL2Rpc3QvcXNzLm1qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLG1CQUFtQjs7QUFFbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcmZvbGlvLy4vbm9kZV9tb2R1bGVzL3Fzcy9kaXN0L3Fzcy5tanM/NDMyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZW5jb2RlKG9iaiwgcGZ4KSB7XG5cdHZhciBrLCBpLCB0bXAsIHN0cj0nJztcblxuXHRmb3IgKGsgaW4gb2JqKSB7XG5cdFx0aWYgKCh0bXAgPSBvYmpba10pICE9PSB2b2lkIDApIHtcblx0XHRcdGlmIChBcnJheS5pc0FycmF5KHRtcCkpIHtcblx0XHRcdFx0Zm9yIChpPTA7IGkgPCB0bXAubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRzdHIgJiYgKHN0ciArPSAnJicpO1xuXHRcdFx0XHRcdHN0ciArPSBlbmNvZGVVUklDb21wb25lbnQoaykgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodG1wW2ldKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c3RyICYmIChzdHIgKz0gJyYnKTtcblx0XHRcdFx0c3RyICs9IGVuY29kZVVSSUNvbXBvbmVudChrKSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh0bXApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiAocGZ4IHx8ICcnKSArIHN0cjtcbn1cblxuZnVuY3Rpb24gdG9WYWx1ZShtaXgpIHtcblx0aWYgKCFtaXgpIHJldHVybiAnJztcblx0dmFyIHN0ciA9IGRlY29kZVVSSUNvbXBvbmVudChtaXgpO1xuXHRpZiAoc3RyID09PSAnZmFsc2UnKSByZXR1cm4gZmFsc2U7XG5cdGlmIChzdHIgPT09ICd0cnVlJykgcmV0dXJuIHRydWU7XG5cdHJldHVybiAoK3N0ciAqIDAgPT09IDApID8gKCtzdHIpIDogc3RyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlKHN0cikge1xuXHR2YXIgdG1wLCBrLCBvdXQ9e30sIGFycj1zdHIuc3BsaXQoJyYnKTtcblxuXHR3aGlsZSAodG1wID0gYXJyLnNoaWZ0KCkpIHtcblx0XHR0bXAgPSB0bXAuc3BsaXQoJz0nKTtcblx0XHRrID0gdG1wLnNoaWZ0KCk7XG5cdFx0aWYgKG91dFtrXSAhPT0gdm9pZCAwKSB7XG5cdFx0XHRvdXRba10gPSBbXS5jb25jYXQob3V0W2tdLCB0b1ZhbHVlKHRtcC5zaGlmdCgpKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG91dFtrXSA9IHRvVmFsdWUodG1wLnNoaWZ0KCkpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBvdXQ7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/qss/dist/qss.mjs\n");

/***/ })

};
;