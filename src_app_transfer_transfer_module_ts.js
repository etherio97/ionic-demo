"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_transfer_transfer_module_ts"],{

/***/ 4367:
/*!*****************************************************!*\
  !*** ./src/app/transfer/transfer-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransferPageRoutingModule": () => (/* binding */ TransferPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _transfer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transfer.page */ 1823);




const routes = [
    {
        path: '',
        component: _transfer_page__WEBPACK_IMPORTED_MODULE_0__.TransferPage,
    },
];
let TransferPageRoutingModule = class TransferPageRoutingModule {
};
TransferPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TransferPageRoutingModule);



/***/ }),

/***/ 8053:
/*!*********************************************!*\
  !*** ./src/app/transfer/transfer.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransferPageModule": () => (/* binding */ TransferPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _transfer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transfer-routing.module */ 4367);
/* harmony import */ var _transfer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transfer.page */ 1823);







let TransferPageModule = class TransferPageModule {
};
TransferPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _transfer_routing_module__WEBPACK_IMPORTED_MODULE_0__.TransferPageRoutingModule],
        declarations: [_transfer_page__WEBPACK_IMPORTED_MODULE_1__.TransferPage],
    })
], TransferPageModule);



/***/ }),

/***/ 1823:
/*!*******************************************!*\
  !*** ./src/app/transfer/transfer.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransferPage": () => (/* binding */ TransferPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _transfer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transfer.page.html?ngResource */ 3269);
/* harmony import */ var _transfer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transfer.page.scss?ngResource */ 9030);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let TransferPage = class TransferPage {
    constructor() { }
    ngOnInit() { }
};
TransferPage.ctorParameters = () => [];
TransferPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-transfer',
        template: _transfer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_transfer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TransferPage);



/***/ }),

/***/ 9030:
/*!********************************************************!*\
  !*** ./src/app/transfer/transfer.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFuc2Zlci5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 3269:
/*!********************************************************!*\
  !*** ./src/app/transfer/transfer.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div style=\"margin: 16px\">\n    <div style=\"padding-right: 8px; padding-left: 8px\">\n      <div style=\"padding-top: 6px; padding-bottom: 6px\">\n        <ion-input\n          name=\"phoneNumber\"\n          clearInput\n          autocomplete=\"tel\"\n          inputmode=\"tel\"\n          placeholder=\"Recipient Phone\"\n          enterkeyhint=\"next\"\n        ></ion-input>\n      </div>\n      <div style=\"padding-top: 6px; padding-bottom: 6px\">\n        <ion-input\n          name=\"amount\"\n          clearInput\n          inputmode=\"numeric\"\n          autocomplete=\"off\"\n          placeholder=\"Amount\"\n          enterkeyhint=\"done\"\n        ></ion-input>\n      </div>\n      <div style=\"padding-top: 6px; padding-bottom: 6px\">\n        <ion-textarea name=\"note\" clearInput placeholder=\"Note\"></ion-textarea>\n      </div>\n      <div style=\"padding-top: 6px; padding-bottom: 6px\">\n        <ion-button expand=\"block\">\n          <ion-icon name=\"send\" style=\"margin-right: 20px\"></ion-icon> Send\n        </ion-button>\n      </div>\n    </div>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_transfer_transfer_module_ts.js.map