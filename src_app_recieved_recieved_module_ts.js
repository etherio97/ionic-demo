"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_recieved_recieved_module_ts"],{

/***/ 7924:
/*!*****************************************************!*\
  !*** ./src/app/recieved/recieved-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecievedPageRoutingModule": () => (/* binding */ RecievedPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _recieved_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recieved.page */ 5398);




const routes = [
    {
        path: '',
        component: _recieved_page__WEBPACK_IMPORTED_MODULE_0__.RecievedPage
    }
];
let RecievedPageRoutingModule = class RecievedPageRoutingModule {
};
RecievedPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RecievedPageRoutingModule);



/***/ }),

/***/ 258:
/*!*********************************************!*\
  !*** ./src/app/recieved/recieved.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecievedPageModule": () => (/* binding */ RecievedPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _recieved_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recieved-routing.module */ 7924);
/* harmony import */ var _recieved_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recieved.page */ 5398);







let RecievedPageModule = class RecievedPageModule {
};
RecievedPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _recieved_routing_module__WEBPACK_IMPORTED_MODULE_0__.RecievedPageRoutingModule
        ],
        declarations: [_recieved_page__WEBPACK_IMPORTED_MODULE_1__.RecievedPage]
    })
], RecievedPageModule);



/***/ }),

/***/ 5398:
/*!*******************************************!*\
  !*** ./src/app/recieved/recieved.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecievedPage": () => (/* binding */ RecievedPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _recieved_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recieved.page.html?ngResource */ 4014);
/* harmony import */ var _recieved_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recieved.page.scss?ngResource */ 6185);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let RecievedPage = class RecievedPage {
    constructor() { }
    ngOnInit() {
    }
};
RecievedPage.ctorParameters = () => [];
RecievedPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-recieved',
        template: _recieved_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_recieved_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RecievedPage);



/***/ }),

/***/ 6185:
/*!********************************************************!*\
  !*** ./src/app/recieved/recieved.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNpZXZlZC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 4014:
/*!********************************************************!*\
  !*** ./src/app/recieved/recieved.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content> </ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_recieved_recieved_module_ts.js.map