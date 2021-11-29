"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,134];
exports.modules = {

/***/ 930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(174);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./src/theme.tsx

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
const theme = (0,react_.extendTheme)({
    config,
    ...chartTheme
});
/* harmony default export */ const src_theme = (theme);

;// CONCATENATED MODULE: ./src/Chakra.tsx



const Chakra = ({ children , cookies  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.ChakraProvider, {
        theme: src_theme,
        colorModeManager: cookies ? (0,react_.cookieStorageManager)(cookies) : react_.localStorageManager,
        children: children
    }));
};
function getServerSideProps({ req  }) {
    return {
        props: {
            cookies: req.headers.cookie ?? ''
        }
    };
}

;// CONCATENATED MODULE: ./src/pages/_app.tsx





function App({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(Chakra, {
        cookies: pageProps.cookies,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.ThemeProvider, {
            theme: theme,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.CSSReset, {
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                            children: "Rna Sequencing Count"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "description",
                            content: "Count and range of Rna and gene ranges"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            ]
        })
    }));
};


/***/ }),

/***/ 174:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

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
var __webpack_exports__ = (__webpack_exec__(930));
module.exports = __webpack_exports__;

})();