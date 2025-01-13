import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalContactComponent } from '../modal-contact/modal-contact.component'; // Componente del modal
import { FirebaseService } from '../services/firebase.service'; // Servicio

import { collection, getDocs, addDoc , doc, setDoc} from 'firebase/firestore';
import { firestore } from '../firebase/firebase-config';
import { getAuth } from 'firebase/auth'; // Agregar esta importación


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  list: Array<{ id: string; nombre: string; telefono: string }> = []; // Incluye el ID
  message = '';

  constructor(
    private modalController: ModalController,
    private firebaseService: FirebaseService // Servicio inyectado
  ) {}

  ngOnInit() {
    const auth = getAuth();
    const user = auth.currentUser; // Usuario autenticado

    if (user) {
      const contactosCollection = collection(firestore, 'contactos');
      getDocs(contactosCollection)
        .then((querySnapshot) => {
          this.list = querySnapshot.docs
            .map((doc) => ({
              id: doc.id,
              ...(doc.data() as { nombre: string; telefono: string; userId: string }),
            }))
            .filter((contact) => contact.userId === user.uid); // Filtrar por userId
        })
        .catch((error) => {
          console.error('Error al obtener contactos: ', error);
        });
    } else {
      console.error('No hay usuario autenticado.');
    }
  }


  async openModal() {
    const modal = await this.modalController.create({
      component: ModalContactComponent,
    });

    modal.onDidDismiss().then(async (data) => {
      if (data.role === 'confirm') {
        const newContact = data.data;

        const auth = getAuth();
        const user = auth.currentUser;

        if (user) {
          // Agregar el userId al nuevo contacto
          const contactosCollection = collection(firestore, 'contactos');
          const docRef = await addDoc(contactosCollection, {
            ...newContact,
            userId: user.uid,
          });

          this.list.push({ id: docRef.id, ...newContact, userId: user.uid }); // Actualizar lista local
          this.message = `¡Contacto "${newContact.nombre}" agregado exitosamente!`;
        } else {
          console.error('Usuario no autenticado');
        }
      }
    });

    return await modal.present();
  }


  // Método para editar contacto
  async editContact(contact: { id: string; nombre: string; telefono: string }) {
    const modal = await this.modalController.create({
      component: ModalContactComponent,
      componentProps: {
        contacto: contact,
      },
    });

    modal.onDidDismiss().then(async (data) => {
      if (data.role === 'confirm') {
        const updatedContact = data.data;

        const auth = getAuth();
        const user = auth.currentUser;

        if (user) {
          // Mantener el userId al actualizar
          const contactosCollection = collection(firestore, 'contactos');
          const contactDoc = doc(contactosCollection, contact.id);
          await setDoc(contactDoc, {
            ...updatedContact,
            userId: user.uid,
          });

          const index = this.list.findIndex((item) => item.id === contact.id);
          if (index > -1) {
            this.list[index] = { id: contact.id, ...updatedContact, userId: user.uid }; // Actualizar local
          }
          this.message = `¡Contacto "${updatedContact.nombre}" actualizado exitosamente!`;
        } else {
          console.error('Usuario no autenticado');
        }
      }
    });

    return await modal.present();
  }

}
