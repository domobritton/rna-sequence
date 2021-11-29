"use strict";
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660,134,810];
exports.modules = {

/***/ 641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Document)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(859);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(105);




class Document extends next_document__WEBPACK_IMPORTED_MODULE_2__["default"] {
    static getInitialProps(ctx) {
        return next_document__WEBPACK_IMPORTED_MODULE_2__["default"].getInitialProps(ctx);
    }
    render() {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_2__.Html, {
            lang: "en",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_2__.Head, {
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ColorModeScript, {
                            initialColorMode: _theme__WEBPACK_IMPORTED_MODULE_3__/* ["default"].config.initialColorMode */ .Z.config.initialColorMode
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_2__.Main, {
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_2__.NextScript, {
                        })
                    ]
                })
            ]
        }));
    }
}



/***/ }),

/***/ 105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ theme),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);

const chartTheme = {
    colors: {
        900: '#1a365d',
        800: '#153e75',
        700: '#2a69ac',
        lavender: '#8884d8',
        tooltip: 'rgba(128,128,128, 0.2)',
        annotationBk: 'rgba(136, 132, 216, 0.4)',
        boxShadow: 'rgba(0, 0, 0, 0.2)'
    },
    space: {
        xxxl: '4rem',
        xxl: '3rem',
        xl: '2rem',
        lg: '1.5rem',
        md: '1rem',
        sm: '0.5rem'
    }
};
const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false
};
const theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({
    config,
    ...chartTheme
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);


/***/ }),

/***/ 930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [859], () => (__webpack_exec__(641)));
module.exports = __webpack_exports__;

})();