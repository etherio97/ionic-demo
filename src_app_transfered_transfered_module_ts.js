"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_transfered_transfered_module_ts"],{

/***/ 9795:
/*!*********************************************************!*\
  !*** ./src/app/transfered/transfered-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransferedPageRoutingModule": () => (/* binding */ TransferedPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _transfered_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transfered.page */ 1959);




const routes = [
    {
        path: '',
        component: _transfered_page__WEBPACK_IMPORTED_MODULE_0__.TransferedPage
    }
];
let TransferedPageRoutingModule = class TransferedPageRoutingModule {
};
TransferedPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TransferedPageRoutingModule);



/***/ }),

/***/ 7478:
/*!*************************************************!*\
  !*** ./src/app/transfered/transfered.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransferedPageModule": () => (/* binding */ TransferedPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _transfered_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transfered-routing.module */ 9795);
/* harmony import */ var _transfered_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transfered.page */ 1959);







let TransferedPageModule = class TransferedPageModule {
};
TransferedPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _transfered_routing_module__WEBPACK_IMPORTED_MODULE_0__.TransferedPageRoutingModule
        ],
        declarations: [_transfered_page__WEBPACK_IMPORTED_MODULE_1__.TransferedPage]
    })
], TransferedPageModule);



/***/ }),

/***/ 1959:
/*!***********************************************!*\
  !*** ./src/app/transfered/transfered.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransferedPage": () => (/* binding */ TransferedPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _transfered_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transfered.page.html?ngResource */ 8224);
/* harmony import */ var _transfered_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transfered.page.scss?ngResource */ 756);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let TransferedPage = class TransferedPage {
    constructor() { }
    ngOnInit() {
    }
};
TransferedPage.ctorParameters = () => [];
TransferedPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-transfered',
        template: _transfered_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_transfered_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TransferedPage);



/***/ }),

/***/ 756:
/*!************************************************************!*\
  !*** ./src/app/transfered/transfered.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFuc2ZlcmVkLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 8224:
/*!************************************************************!*\
  !*** ./src/app/transfered/transfered.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content> </ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_transfered_transfered_module_ts.js.map