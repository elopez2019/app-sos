(self["webpackChunkapp_sos"] = self["webpackChunkapp_sos"] || []).push([["src_app_registro_registro_module_ts"],{

/***/ 636:
/*!*********************************************!*\
  !*** ./src/app/registro/registro.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPageModule": () => (/* binding */ RegistroPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 5353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro.page */ 2299);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);







let RegistroPageModule = class RegistroPageModule {
};
RegistroPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild([
                {
                    path: '',
                    component: _registro_page__WEBPACK_IMPORTED_MODULE_0__.RegistroPage
                }
            ])
        ],
        declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_0__.RegistroPage]
    })
], RegistroPageModule);



/***/ }),

/***/ 2299:
/*!*******************************************!*\
  !*** ./src/app/registro/registro.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPage": () => (/* binding */ RegistroPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 5353);
/* harmony import */ var _raw_loader_registro_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./registro.page.html */ 6344);
/* harmony import */ var _registro_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro.page.scss */ 5802);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ 3000);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ 8919);








let RegistroPage = class RegistroPage {
    constructor(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.isRegistering = true; // Bandera para alternar entre registro e inicio de sesión
        // Formulario de registro
        this.registroForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(6)]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
        });
        // Formulario de inicio de sesión
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
        });
    }
    ngOnInit() { }
    // Función para alternar entre formulario de registro e inicio de sesión
    toggleForm() {
        this.isRegistering = !this.isRegistering;
    }
    // Registro de usuario
    onRegister() {
        if (this.registroForm.invalid) {
            return;
        }
        const { name, email, password, confirmPassword } = this.registroForm.value;
        // Verificar que las contraseñas coincidan
        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }
        const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();
        const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getFirestore)(); // Instancia de Firestore
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.createUserWithEmailAndPassword)(auth, email, password)
            .then((userCredential) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const user = userCredential.user;
            // Guardar datos adicionales en Firestore, incluyendo el nombre
            yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(db, 'users', user.uid), {
                name,
                email,
                userId: user.uid,
            });
            console.log('Usuario registrado y datos guardados en Firestore:', user);
            this.router.navigate(['/tabs/tab1']); // Redirigir al home
        }))
            .catch((error) => {
            console.error('Error al registrar usuario:', error.message);
            alert('Error al registrar usuario: ' + error.message);
        });
    }
    // Iniciar sesión
    onLogin() {
        if (this.loginForm.invalid) {
            return;
        }
        const { email, password } = this.loginForm.value;
        const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithEmailAndPassword)(auth, email, password)
            .then((userCredential) => {
            const user = userCredential.user;
            console.log('Usuario inició sesión:', user);
            this.router.navigate(['/tabs/tab1']); // Redirigir al home
        })
            .catch((error) => {
            console.error('Error al iniciar sesión:', error.message);
            alert('Error al iniciar sesión: ' + error.message);
        });
    }
};
RegistroPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
RegistroPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-registro',
        template: _raw_loader_registro_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_registro_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegistroPage);



/***/ }),

/***/ 5802:
/*!*********************************************!*\
  !*** ./src/app/registro/registro.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Ryby5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 6344:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registro/registro.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Registro / Iniciar Sesión\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <form *ngIf=\"isRegistering\" [formGroup]=\"registroForm\" (ngSubmit)=\"onRegister()\" novalidate>\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Nombre</ion-label>\n      <ion-input formControlName=\"name\" type=\"text\"></ion-input>\n    </ion-item>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Correo Electrónico</ion-label>\n      <ion-input formControlName=\"email\" type=\"email\"></ion-input>\n    </ion-item>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Contraseña</ion-label>\n      <ion-input formControlName=\"password\" type=\"password\"></ion-input>\n    </ion-item>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Confirmar Contraseña</ion-label>\n      <ion-input formControlName=\"confirmPassword\" type=\"password\"></ion-input>\n    </ion-item>\n\n    <ion-button expand=\"full\" type=\"submit\" color=\"primary\">Registrar</ion-button>\n  </form>\n\n  <form *ngIf=\"!isRegistering\" [formGroup]=\"loginForm\" (ngSubmit)=\"onLogin()\" novalidate>\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Correo Electrónico</ion-label>\n      <ion-input formControlName=\"email\" type=\"email\"></ion-input>\n    </ion-item>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Contraseña</ion-label>\n      <ion-input formControlName=\"password\" type=\"password\"></ion-input>\n    </ion-item>\n\n    <ion-button expand=\"full\" type=\"submit\" color=\"primary\">Iniciar Sesión</ion-button>\n  </form>\n\n  <ion-button expand=\"full\" color=\"light\" (click)=\"toggleForm()\">\n    {{ isRegistering ? 'Ya tienes cuenta? Iniciar sesión' : 'No tienes cuenta? Regístrate' }}\n  </ion-button>\n\n  <ion-spinner *ngIf=\"loading\"></ion-spinner>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_registro_registro_module_ts.js.map