(self["webpackChunkapp_sos"] = self["webpackChunkapp_sos"] || []).push([["src_app_tab2_tab2_module_ts"],{

/***/ 3092:
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageRoutingModule": () => (/* binding */ Tab2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 5353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page,
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ 7008:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageModule": () => (/* binding */ Tab2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 5353);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2-routing.module */ 3092);








let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab2PageRoutingModule
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page]
    })
], Tab2PageModule);



/***/ }),

/***/ 442:
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2Page": () => (/* binding */ Tab2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 5353);
/* harmony import */ var _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tab2.page.html */ 2477);
/* harmony import */ var _tab2_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab2.page.scss */ 2055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _modal_contact_modal_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal-contact/modal-contact.component */ 3801);
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/firebase.service */ 9446);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ 8919);
/* harmony import */ var _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase/firebase-config */ 1214);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/auth */ 3000);





 // Componente del modal
 // Servicio


 // Agregar esta importación
let Tab2Page = class Tab2Page {
    constructor(modalController, firebaseService // Servicio inyectado
    ) {
        this.modalController = modalController;
        this.firebaseService = firebaseService;
        this.list = []; // Incluye el ID
        this.message = '';
    }
    ngOnInit() {
        const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_6__.getAuth)();
        const user = auth.currentUser; // Usuario autenticado
        if (user) {
            const contactosCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase_firebase_config__WEBPACK_IMPORTED_MODULE_5__.firestore, 'contactos');
            (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDocs)(contactosCollection)
                .then((querySnapshot) => {
                this.list = querySnapshot.docs
                    .map((doc) => (Object.assign({ id: doc.id }, doc.data())))
                    .filter((contact) => contact.userId === user.uid); // Filtrar por userId
            })
                .catch((error) => {
                console.error('Error al obtener contactos: ', error);
            });
        }
        else {
            console.error('No hay usuario autenticado.');
        }
    }
    openModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_contact_modal_contact_component__WEBPACK_IMPORTED_MODULE_2__.ModalContactComponent,
            });
            modal.onDidDismiss().then((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                if (data.role === 'confirm') {
                    const newContact = data.data;
                    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_6__.getAuth)();
                    const user = auth.currentUser;
                    if (user) {
                        // Agregar el userId al nuevo contacto
                        const contactosCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase_firebase_config__WEBPACK_IMPORTED_MODULE_5__.firestore, 'contactos');
                        const docRef = yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.addDoc)(contactosCollection, Object.assign(Object.assign({}, newContact), { userId: user.uid }));
                        this.list.push(Object.assign(Object.assign({ id: docRef.id }, newContact), { userId: user.uid })); // Actualizar lista local
                        this.message = `¡Contacto "${newContact.nombre}" agregado exitosamente!`;
                    }
                    else {
                        console.error('Usuario no autenticado');
                    }
                }
            }));
            return yield modal.present();
        });
    }
    // Método para editar contacto
    editContact(contact) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _modal_contact_modal_contact_component__WEBPACK_IMPORTED_MODULE_2__.ModalContactComponent,
                componentProps: {
                    contacto: contact,
                },
            });
            modal.onDidDismiss().then((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                if (data.role === 'confirm') {
                    const updatedContact = data.data;
                    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_6__.getAuth)();
                    const user = auth.currentUser;
                    if (user) {
                        // Mantener el userId al actualizar
                        const contactosCollection = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase_firebase_config__WEBPACK_IMPORTED_MODULE_5__.firestore, 'contactos');
                        const contactDoc = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(contactosCollection, contact.id);
                        yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)(contactDoc, Object.assign(Object.assign({}, updatedContact), { userId: user.uid }));
                        const index = this.list.findIndex((item) => item.id === contact.id);
                        if (index > -1) {
                            this.list[index] = Object.assign(Object.assign({ id: contact.id }, updatedContact), { userId: user.uid }); // Actualizar local
                        }
                        this.message = `¡Contacto "${updatedContact.nombre}" actualizado exitosamente!`;
                    }
                    else {
                        console.error('Usuario no autenticado');
                    }
                }
            }));
            return yield modal.present();
        });
    }
};
Tab2Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__.FirebaseService }
];
Tab2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-tab2',
        template: _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tab2_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Tab2Page);



/***/ }),

/***/ 2055:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 2477:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Contactos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <!-- Botón para abrir el modal -->\n  <ion-button (click)=\"openModal()\" expand=\"block\">\n    Agregar contactos\n    <ion-icon slot=\"icon-only\" name=\"person-add-outline\"></ion-icon>\n  </ion-button>\n\n  <!-- Lista de contactos -->\n  <ion-list>\n    <ion-item *ngFor=\"let item of list\">\n      <ion-icon slot=\"start\" name=\"person-circle-outline\"></ion-icon>\n      <ion-label>\n        <h2>{{ item.nombre }}</h2>\n        <p>{{ item.telefono }}</p>\n      </ion-label>\n      <!-- Botón para editar -->\n      <ion-button (click)=\"editContact(item)\">\n        <ion-icon name=\"pencil-outline\"></ion-icon>\n      </ion-button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tab2_tab2_module_ts.js.map