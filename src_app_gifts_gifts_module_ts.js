"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_gifts_gifts_module_ts"],{

/***/ 6838:
/*!***********************************************!*\
  !*** ./src/app/gifts/gifts-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GiftsPageRoutingModule": () => (/* binding */ GiftsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _gifts_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gifts.page */ 1787);




const routes = [
    {
        path: '',
        component: _gifts_page__WEBPACK_IMPORTED_MODULE_0__.GiftsPage
    }
];
let GiftsPageRoutingModule = class GiftsPageRoutingModule {
};
GiftsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GiftsPageRoutingModule);



/***/ }),

/***/ 4913:
/*!***************************************!*\
  !*** ./src/app/gifts/gifts.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GiftsPageModule": () => (/* binding */ GiftsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _gifts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gifts-routing.module */ 6838);
/* harmony import */ var _gifts_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gifts.page */ 1787);







let GiftsPageModule = class GiftsPageModule {
};
GiftsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _gifts_routing_module__WEBPACK_IMPORTED_MODULE_0__.GiftsPageRoutingModule
        ],
        declarations: [_gifts_page__WEBPACK_IMPORTED_MODULE_1__.GiftsPage]
    })
], GiftsPageModule);



/***/ }),

/***/ 1787:
/*!*************************************!*\
  !*** ./src/app/gifts/gifts.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GiftsPage": () => (/* binding */ GiftsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _gifts_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gifts.page.html?ngResource */ 4606);
/* harmony import */ var _gifts_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gifts.page.scss?ngResource */ 3833);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let GiftsPage = class GiftsPage {
    constructor() { }
    ngOnInit() {
    }
};
GiftsPage.ctorParameters = () => [];
GiftsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-gifts',
        template: _gifts_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_gifts_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], GiftsPage);



/***/ }),

/***/ 3833:
/*!**************************************************!*\
  !*** ./src/app/gifts/gifts.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnaWZ0cy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 4606:
/*!**************************************************!*\
  !*** ./src/app/gifts/gifts.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content> </ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_gifts_gifts_module_ts.js.map