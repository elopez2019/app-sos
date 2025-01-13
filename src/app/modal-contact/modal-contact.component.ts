import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-modal-contact',
  templateUrl: './modal-contact.component.html',
  styleUrls: ['./modal-contact.component.scss'],
})
export class ModalContactComponent {
  @Input() contacto: { id: string; nombre: string; telefono: string } | null = null;

  nombre: string = '';
  telefono: string = '';

  constructor(
    private modalController: ModalController,
    private firebaseService: FirebaseService
  ) {}

  ngOnInit() {
    // Si se pasa un contacto, inicializamos los valores para la edición
    if (this.contacto) {
      this.nombre = this.contacto.nombre;
      this.telefono = this.contacto.telefono;
    }
  }

  // Confirmar (guardar o actualizar el contacto)
  confirm() {
    const updatedContact = { nombre: this.nombre, telefono: this.telefono };

    if (this.contacto && this.contacto.id) {
      // Actualizar contacto existente
      this.firebaseService
        .actualizarContacto(this.contacto.id, updatedContact)
        .then(() => {
          this.modalController.dismiss({ ...updatedContact, id: this.contacto.id }, 'confirm');
        })
        .catch((error) => {
          console.error('Error al actualizar contacto: ', error);
        });
    } else {
      // Agregar nuevo contacto
      this.firebaseService
        .agregarContacto(this.nombre, this.telefono)
        .then((newContact) => {
          this.modalController.dismiss(newContact, 'confirm');
        })
        .catch((error) => {
          console.error('Error al agregar contacto: ', error);
        });
    }
  }


  // Cancelar
  cancel() {
    this.modalController.dismiss(null, 'cancel');
  }
}
