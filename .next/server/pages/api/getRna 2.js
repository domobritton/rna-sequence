"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/getRna";
exports.ids = ["pages/api/getRna"];
exports.modules = {

/***/ "faunadb":
/*!**************************!*\
  !*** external "faunadb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("faunadb");

/***/ }),

/***/ "./lib/fauna.ts":
/*!**********************!*\
  !*** ./lib/fauna.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"faunaClient\": () => (/* binding */ faunaClient)\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst faunaClient = new (faunadb__WEBPACK_IMPORTED_MODULE_0___default().Client)({\n    secret: process.env.FAUNADB_SECRET\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZmF1bmEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTZCO0FBRXRCLEtBQUssQ0FBQ0MsV0FBVyxHQUFHLEdBQUcsQ0FBQ0QsdURBQWMsQ0FBQyxDQUFDO0lBQzdDRyxNQUFNLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxjQUFjO0FBQ3BDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ybmEtc2VxLy4vbGliL2ZhdW5hLnRzPzhjYzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZhdW5hZGIgZnJvbSAnZmF1bmFkYic7XG5cbmV4cG9ydCBjb25zdCBmYXVuYUNsaWVudCA9IG5ldyBmYXVuYWRiLkNsaWVudCh7XG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuRkFVTkFEQl9TRUNSRVQsXG59KTtcbiJdLCJuYW1lcyI6WyJmYXVuYWRiIiwiZmF1bmFDbGllbnQiLCJDbGllbnQiLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiRkFVTkFEQl9TRUNSRVQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/fauna.ts\n");

/***/ }),

/***/ "./src/pages/api/getRna/index.ts":
/*!***************************************!*\
  !*** ./src/pages/api/getRna/index.ts ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar _faunadb = _interopRequireDefault(__webpack_require__(/*! faunadb */ \"faunadb\"));\nvar _fauna = __webpack_require__(/*! ../../../../lib/fauna */ \"./lib/fauna.ts\");\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\nconst q = _faunadb.default.query;\nmodule.exports = async (_, res)=>{\n    try {\n        const dbs = await _fauna.faunaClient.query(q.Map(q.Paginate(q.Match(q.Index('all_rna'))), q.Lambda((show)=>q.Get(show)\n        )));\n        res.status(200).json(dbs.data);\n    } catch (error) {\n        res.status(500).json({\n            error: error.message\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL2dldFJuYS9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiO0FBQW9CLEdBQVMsQ0FBVCxRQUFTO0FBR0QsR0FBdUIsQ0FBdkIsTUFBdUI7Ozs7OztBQUduRCxLQUFLLENBQUNBLENBQUMsR0FOYSxRQUFTLFNBTVhDLEtBQUs7QUFFdkJDLE1BQU0sQ0FBQ0MsT0FBTyxVQUFVQyxDQUFpQixFQUFFQyxHQUFvQixHQUFLLENBQUM7SUFDbkUsR0FBRyxDQUFDLENBQUM7UUFDSCxLQUFLLENBQUNDLEdBQUcsR0FBa0IsS0FBSyxDQVBSLE1BQXVCLGFBT0ZMLEtBQUssQ0FDaERELENBQUMsQ0FBQ08sR0FBRyxDQUNIUCxDQUFDLENBQUNRLFFBQVEsQ0FBQ1IsQ0FBQyxDQUFDUyxLQUFLLENBQUNULENBQUMsQ0FBQ1UsS0FBSyxDQUFDLENBQVMsYUFDcENWLENBQUMsQ0FBQ1csTUFBTSxFQUFFQyxJQUFJLEdBQUtaLENBQUMsQ0FBQ2EsR0FBRyxDQUFDRCxJQUFJOztRQUdqQ1AsR0FBRyxDQUFDUyxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUNULEdBQUcsQ0FBQ1UsSUFBSTtJQUMvQixDQUFDLENBQUMsS0FBSyxFQUFFQyxLQUFLLEVBQUUsQ0FBQztRQUNmWixHQUFHLENBQUNTLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1lBQUNFLEtBQUssRUFBRUEsS0FBSyxDQUFDQyxPQUFPO1FBQUMsQ0FBQztJQUMvQyxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JuYS1zZXEvLi9zcmMvcGFnZXMvYXBpL2dldFJuYS9pbmRleC50cz8xOGY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmYXVuYWRiIGZyb20gJ2ZhdW5hZGInO1xuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XG5cbmltcG9ydCB7IGZhdW5hQ2xpZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2ZhdW5hJztcbmltcG9ydCB7IFJlbW90ZVJuYURhdGEgfSBmcm9tICcuL21vZGVsJztcblxuY29uc3QgcSA9IGZhdW5hZGIucXVlcnk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXN5bmMgKF86IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGRiczogUmVtb3RlUm5hRGF0YSA9IGF3YWl0IGZhdW5hQ2xpZW50LnF1ZXJ5KFxuICAgICAgcS5NYXAoXG4gICAgICAgIHEuUGFnaW5hdGUocS5NYXRjaChxLkluZGV4KCdhbGxfcm5hJykpKSxcbiAgICAgICAgcS5MYW1iZGEoKHNob3cpID0+IHEuR2V0KHNob3cpKVxuICAgICAgKVxuICAgICk7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oZGJzLmRhdGEpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSk7XG4gIH1cbn07XG4iXSwibmFtZXMiOlsicSIsInF1ZXJ5IiwibW9kdWxlIiwiZXhwb3J0cyIsIl8iLCJyZXMiLCJkYnMiLCJNYXAiLCJQYWdpbmF0ZSIsIk1hdGNoIiwiSW5kZXgiLCJMYW1iZGEiLCJzaG93IiwiR2V0Iiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJlcnJvciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/api/getRna/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/getRna/index.ts"));
module.exports = __webpack_exports__;

})();