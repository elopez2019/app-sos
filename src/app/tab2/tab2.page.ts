import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalContactComponent } from '../modal-contact/modal-contact.component'; // Componente del modal
import { FirebaseService } from '../services/firebase.service'; // Servicio

import { collection, getDocs, addDoc } from 'firebase/firestore';
import { firestore } from '../firebase/firebase-config';

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
    const contactosCollection = collection(firestore, 'contactos');
    getDocs(contactosCollection)
      .then((querySnapshot) => {
        this.list = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as { id: string; nombre: string; telefono: string }[];
      })
      .catch((error) => {
        console.error('Error al obtener contactos: ', error);
      });
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: ModalContactComponent,
    });

    modal.onDidDismiss().then((data) => {
      if (data.role === 'confirm') {
        const newContact = data.data;
        this.list.push(newContact); // Agregar el nuevo contacto con ID
        this.message = `¡Contacto "${newContact.nombre}" agregado exitosamente!`;
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

    modal.onDidDismiss().then((data) => {
      if (data.role === 'confirm') {
        const updatedContact = data.data;
        const index = this.list.findIndex((item) => item.id === contact.id);
        if (index > -1) {
          this.list[index] = updatedContact; // Actualizar el contacto en la lista
        }
        this.message = `¡Contacto "${updatedContact.nombre}" actualizado exitosamente!`;
      }
    });

    return await modal.present();
  }
}
