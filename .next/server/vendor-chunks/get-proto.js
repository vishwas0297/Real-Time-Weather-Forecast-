"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/get-proto";
exports.ids = ["vendor-chunks/get-proto"];
exports.modules = {

/***/ "(action-browser)/./node_modules/get-proto/Object.getPrototypeOf.js":
/*!*********************************************************!*\
  !*** ./node_modules/get-proto/Object.getPrototypeOf.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar $Object = __webpack_require__(/*! es-object-atoms */ \"(action-browser)/./node_modules/es-object-atoms/index.js\");\n/** @type {import('./Object.getPrototypeOf')} */ module.exports = $Object.getPrototypeOf || null;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9nZXQtcHJvdG8vT2JqZWN0LmdldFByb3RvdHlwZU9mLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUEsSUFBSUEsVUFBVUMsbUJBQU9BLENBQUM7QUFFdEIsOENBQThDLEdBQzlDQyxPQUFPQyxPQUFPLEdBQUdILFFBQVFJLGNBQWMsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2dldC1wcm90by9PYmplY3QuZ2V0UHJvdG90eXBlT2YuanM/ZmIzNyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnZXMtb2JqZWN0LWF0b21zJyk7XG5cbi8qKiBAdHlwZSB7aW1wb3J0KCcuL09iamVjdC5nZXRQcm90b3R5cGVPZicpfSAqL1xubW9kdWxlLmV4cG9ydHMgPSAkT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IG51bGw7XG4iXSwibmFtZXMiOlsiJE9iamVjdCIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiZ2V0UHJvdG90eXBlT2YiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/get-proto/Object.getPrototypeOf.js\n");

/***/ }),

/***/ "(action-browser)/./node_modules/get-proto/Reflect.getPrototypeOf.js":
/*!**********************************************************!*\
  !*** ./node_modules/get-proto/Reflect.getPrototypeOf.js ***!
  \**********************************************************/
/***/ ((module) => {

eval("\n/** @type {import('./Reflect.getPrototypeOf')} */ module.exports = typeof Reflect !== \"undefined\" && Reflect.getPrototypeOf || null;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9nZXQtcHJvdG8vUmVmbGVjdC5nZXRQcm90b3R5cGVPZi5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBLCtDQUErQyxHQUMvQ0EsT0FBT0MsT0FBTyxHQUFHLE9BQVFDLFlBQVksZUFBZUEsUUFBUUMsY0FBYyxJQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZ2V0LXByb3RvL1JlZmxlY3QuZ2V0UHJvdG90eXBlT2YuanM/M2IyNSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbi8qKiBAdHlwZSB7aW1wb3J0KCcuL1JlZmxlY3QuZ2V0UHJvdG90eXBlT2YnKX0gKi9cbm1vZHVsZS5leHBvcnRzID0gKHR5cGVvZiBSZWZsZWN0ICE9PSAndW5kZWZpbmVkJyAmJiBSZWZsZWN0LmdldFByb3RvdHlwZU9mKSB8fCBudWxsO1xuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJSZWZsZWN0IiwiZ2V0UHJvdG90eXBlT2YiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/get-proto/Reflect.getPrototypeOf.js\n");

/***/ }),

/***/ "(action-browser)/./node_modules/get-proto/index.js":
/*!*****************************************!*\
  !*** ./node_modules/get-proto/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar reflectGetProto = __webpack_require__(/*! ./Reflect.getPrototypeOf */ \"(action-browser)/./node_modules/get-proto/Reflect.getPrototypeOf.js\");\nvar originalGetProto = __webpack_require__(/*! ./Object.getPrototypeOf */ \"(action-browser)/./node_modules/get-proto/Object.getPrototypeOf.js\");\nvar getDunderProto = __webpack_require__(/*! dunder-proto/get */ \"(action-browser)/./node_modules/dunder-proto/get.js\");\n/** @type {import('.')} */ module.exports = reflectGetProto ? function getProto(O) {\n    // @ts-expect-error TS can't narrow inside a closure, for some reason\n    return reflectGetProto(O);\n} : originalGetProto ? function getProto(O) {\n    if (!O || typeof O !== \"object\" && typeof O !== \"function\") {\n        throw new TypeError(\"getProto: not an object\");\n    }\n    // @ts-expect-error TS can't narrow inside a closure, for some reason\n    return originalGetProto(O);\n} : getDunderProto ? function getProto(O) {\n    // @ts-expect-error TS can't narrow inside a closure, for some reason\n    return getDunderProto(O);\n} : null;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9nZXQtcHJvdG8vaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQSxJQUFJQSxrQkFBa0JDLG1CQUFPQSxDQUFDO0FBQzlCLElBQUlDLG1CQUFtQkQsbUJBQU9BLENBQUM7QUFFL0IsSUFBSUUsaUJBQWlCRixtQkFBT0EsQ0FBQztBQUU3Qix3QkFBd0IsR0FDeEJHLE9BQU9DLE9BQU8sR0FBR0wsa0JBQ2QsU0FBU00sU0FBU0MsQ0FBQztJQUNwQixxRUFBcUU7SUFDckUsT0FBT1AsZ0JBQWdCTztBQUN4QixJQUNFTCxtQkFDQyxTQUFTSSxTQUFTQyxDQUFDO0lBQ3BCLElBQUksQ0FBQ0EsS0FBTSxPQUFPQSxNQUFNLFlBQVksT0FBT0EsTUFBTSxZQUFhO1FBQzdELE1BQU0sSUFBSUMsVUFBVTtJQUNyQjtJQUNBLHFFQUFxRTtJQUNyRSxPQUFPTixpQkFBaUJLO0FBQ3pCLElBQ0VKLGlCQUNDLFNBQVNHLFNBQVNDLENBQUM7SUFDcEIscUVBQXFFO0lBQ3JFLE9BQU9KLGVBQWVJO0FBQ3ZCLElBQ0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9nZXQtcHJvdG8vaW5kZXguanM/NWExMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciByZWZsZWN0R2V0UHJvdG8gPSByZXF1aXJlKCcuL1JlZmxlY3QuZ2V0UHJvdG90eXBlT2YnKTtcbnZhciBvcmlnaW5hbEdldFByb3RvID0gcmVxdWlyZSgnLi9PYmplY3QuZ2V0UHJvdG90eXBlT2YnKTtcblxudmFyIGdldER1bmRlclByb3RvID0gcmVxdWlyZSgnZHVuZGVyLXByb3RvL2dldCcpO1xuXG4vKiogQHR5cGUge2ltcG9ydCgnLicpfSAqL1xubW9kdWxlLmV4cG9ydHMgPSByZWZsZWN0R2V0UHJvdG9cblx0PyBmdW5jdGlvbiBnZXRQcm90byhPKSB7XG5cdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUyBjYW4ndCBuYXJyb3cgaW5zaWRlIGEgY2xvc3VyZSwgZm9yIHNvbWUgcmVhc29uXG5cdFx0cmV0dXJuIHJlZmxlY3RHZXRQcm90byhPKTtcblx0fVxuXHQ6IG9yaWdpbmFsR2V0UHJvdG9cblx0XHQ/IGZ1bmN0aW9uIGdldFByb3RvKE8pIHtcblx0XHRcdGlmICghTyB8fCAodHlwZW9mIE8gIT09ICdvYmplY3QnICYmIHR5cGVvZiBPICE9PSAnZnVuY3Rpb24nKSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdnZXRQcm90bzogbm90IGFuIG9iamVjdCcpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUyBjYW4ndCBuYXJyb3cgaW5zaWRlIGEgY2xvc3VyZSwgZm9yIHNvbWUgcmVhc29uXG5cdFx0XHRyZXR1cm4gb3JpZ2luYWxHZXRQcm90byhPKTtcblx0XHR9XG5cdFx0OiBnZXREdW5kZXJQcm90b1xuXHRcdFx0PyBmdW5jdGlvbiBnZXRQcm90byhPKSB7XG5cdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMgY2FuJ3QgbmFycm93IGluc2lkZSBhIGNsb3N1cmUsIGZvciBzb21lIHJlYXNvblxuXHRcdFx0XHRyZXR1cm4gZ2V0RHVuZGVyUHJvdG8oTyk7XG5cdFx0XHR9XG5cdFx0XHQ6IG51bGw7XG4iXSwibmFtZXMiOlsicmVmbGVjdEdldFByb3RvIiwicmVxdWlyZSIsIm9yaWdpbmFsR2V0UHJvdG8iLCJnZXREdW5kZXJQcm90byIsIm1vZHVsZSIsImV4cG9ydHMiLCJnZXRQcm90byIsIk8iLCJUeXBlRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/get-proto/index.js\n");

/***/ })

};
;