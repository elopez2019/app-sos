(self["webpackChunkapp_sos"] = self["webpackChunkapp_sos"] || []).push([["src_app_tab3_tab3_module_ts"],{

/***/ 9818:
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageRoutingModule": () => (/* binding */ Tab3PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 5353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 8592);




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page,
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ 3746:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageModule": () => (/* binding */ Tab3PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 5353);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 8592);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3-routing.module */ 9818);









let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab3PageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page]
    })
], Tab3PageModule);



/***/ }),

/***/ 8592:
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3Page": () => (/* binding */ Tab3Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 5353);
/* harmony import */ var _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tab3.page.html */ 4255);
/* harmony import */ var _tab3_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab3.page.scss */ 943);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);





let Tab3Page = class Tab3Page {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.isSubmitted = false;
        this.usuarios = [];
    }
    ngOnInit() {
        this.ionicForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(2)]],
            apellido: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(2)]],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('^[0-9]+$')]],
            eyes: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(2)]],
            estatura: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(2)]],
            edad: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('^[0-9]+$')]],
            tez: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(2)]],
            cabello: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(2)]],
            complexion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(2)]],
            particulares: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(2)]]
        });
    }
};
Tab3Page.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder }
];
Tab3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tab3',
        template: _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tab3_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Tab3Page);



/***/ }),

/***/ 943:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 4255:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Perfil\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <form [formGroup]=\"ionicForm\" (ngSubmit)=\"submitForm()\" novalidate>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Nombre</ion-label>\n      <ion-input formControlName=\"name\" type=\"text\"></ion-input>\n    </ion-item>\n    <span style=\"color: #E77B04;\" *ngIf=\"isSubmitted && errorControl.name.errors?.required\">\n      Nombre es requerido.\n    </span>\n    <span style=\"color: #E77B04;\" *ngIf=\"isSubmitted && errorControl.name.errors?.minlength\">\n      Nombre necesita al menos 2 caracteres.\n    </span>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Apellido</ion-label>\n      <ion-input formControlName=\"apellido\" type=\"text\"></ion-input>\n    </ion-item>\n    <span style=\"color: #E77B04;\" *ngIf=\"isSubmitted && errorControl.apellido.errors?.required\">\n      Apellido es requerido.\n    </span>\n    <span style=\"color: #E77B04;\" *ngIf=\"isSubmitted && errorControl.apellido.errors?.minlength\">\n      Apellido necesita al menos 2 caracteres.\n    </span>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Celular</ion-label>\n      <ion-input maxlength=\"10\" formControlName=\"mobile\" type=\"text\" required></ion-input>\n    </ion-item>\n    <span style=\"color: #E77B04;\" *ngIf=\"isSubmitted && errorControl.mobile.errors?.required\">\n      Numero celular es requerido.\n    </span>\n    <span style=\"color: #E77B04;\" *ngIf=\"isSubmitted && errorControl.mobile.errors?.pattern\">\n      Solo se permiten valores numéricos.\n    </span>\n\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Color de ojos</ion-label>\n      <ion-input formControlName=\"eyes\" type=\"text\"></ion-input>\n    </ion-item>\n    <span style=\"color: #E77B04;\" *ngIf=\"isSubmitted && errorControl.eyes.errors?.required\">\n      Descripción de ojos es requerido.\n    </span>\n    <span style=\"color: #E77B04;\" *ngIf=\"isSubmitted && errorControl.eyes.errors?.minlength\">\n      Descripción de ojos necesita al menos 2 caracteres.\n    </span>\n  \n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Estatura</ion-label>\n      <ion-input maxlength=\"10\" formControlName=\"estatura\" type=\"text\" required></ion-input>\n    </ion-item>\n    <span style=\"color: #E77B04;\" *ngIf=\"isSubmitted && errorControl.estatura.errors?.required\">\n      Estatura es requerido.\n    </span>\n    <span style=\"color: #E77B04;\" *ngIf=\"isSubmitted && errorControl.estatura.errors?.minlength\">\n      Estatura necesita al menos 2 caracteres.\n    </span>\n\n    \n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Edad</ion-label>\n      <ion-input maxlength=\"10\" formControlName=\"edad\" type=\"text\" required></ion-input>\n    </ion-item>\n    <span style=\"color: #E77B04;\" *ngIf=\"isSubmitted && errorControl.edad.errors?.required\">\n      Edad es requerido.\n    </span>\n    <span style=\"color: #E77B04;\" *ngIf=\"isSubmitted && errorControl.edad.errors?.pattern\">\n      Solo se permiten valores numéricos.\n    </span>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Tez (color de piel)</ion-label>\n      <ion-input maxlength=\"10\" formControlName=\"tez\" type=\"text\" required></ion-input>\n    </ion-item>\n    <span style=\"color: #E77B04;\" *ngIf=\"isSubmitted && errorControl.tez.errors?.required\">\n      Tez es requerido.\n    </span>\n    <span style=\"color: #E77B04;\" *ngIf=\"isSubmitted && errorControl.tez.errors?.minlength\">\n      Tez necesita al menos 2 caracteres.\n    </span>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Cabello</ion-label>\n      <ion-input maxlength=\"20\" formControlName=\"cabello\" type=\"text\" required></ion-input>\n    </ion-item>\n    <span style=\"color: #E77B04;\" *ngIf=\"isSubmitted && errorControl.cabello.errors?.required\">\n      Descripción del cabello es requerido.\n    </span>\n    <span style=\"color: #E77B04;\" *ngIf=\"isSubmitted && errorControl.cabello.errors?.minlength\">\n      Descripción del cabello necesita al menos 2 caracteres.\n    </span>\n\n    \n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Complexión</ion-label>\n      <ion-input maxlength=\"10\" formControlName=\"complexion\" type=\"text\" required></ion-input>\n    </ion-item>\n    <span style=\"color: #E77B04;\" *ngIf=\"isSubmitted && errorControl.complexion.errors?.required\">\n      Descripción Complexión es requerido.\n    </span>\n    <span style=\"color: #E77B04;\" *ngIf=\"isSubmitted && errorControl.complexion.errors?.minlength\">\n      Descripción Complexión necesita al menos 2 caracteres.\n    </span>\n  \n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Señas particulares</ion-label>\n      <ion-input maxlength=\"20\" formControlName=\"particulares\" type=\"text\" required></ion-input>\n    </ion-item>\n    <span style=\"color: #E77B04;\" *ngIf=\"isSubmitted && errorControl.particulares.errors?.required\">\n      Señas particulares es requerido.\n    </span>\n    <span style=\"color: #E77B04;\" *ngIf=\"isSubmitted && errorControl.particulares.errors?.minlength\">\n      Señas particulares necesita al menos 2 caracteres.\n    </span>\n\n    <ion-radio-group lines=\"full\">\n      <ion-list-header>\n        <ion-label>Género</ion-label>\n      </ion-list-header>\n\n      <ion-item>\n        <ion-label>Masculino</ion-label>\n        <ion-radio slot=\"start\" value=\"masculino\" checked></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Femenino</ion-label>\n        <ion-radio slot=\"start\" value=\"femenino\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n\n\n    <ion-row>\n      <ion-col>\n        <ion-button type=\"submit\" color=\"danger\" expand=\"block\">Guardar</ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_tab3_tab3_module_ts.js.map