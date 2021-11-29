"use strict";
(() => {
var exports = {};
exports.id = 154;
exports.ids = [154];
exports.modules = {

/***/ 584:
/***/ ((module) => {

module.exports = require("faunadb");

/***/ }),

/***/ 215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "faunaClient": () => (/* binding */ faunaClient)
/* harmony export */ });
/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(584);
/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);

const faunaClient = new (faunadb__WEBPACK_IMPORTED_MODULE_0___default().Client)({
    secret: process.env.FAUNADB_SECRET
});


/***/ }),

/***/ 188:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var _faunadb = _interopRequireDefault(__webpack_require__(584));
var _fauna = __webpack_require__(215);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const q = _faunadb.default.query;
module.exports = async (_, res)=>{
    try {
        const dbs = await _fauna.faunaClient.query(q.Map(q.Paginate(q.Match(q.Index('all_rna'))), q.Lambda((show)=>q.Get(show)
        )));
        res.status(200).json(dbs.data);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(188));
module.exports = __webpack_exports__;

})();