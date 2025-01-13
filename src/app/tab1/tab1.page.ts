import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { FirebaseService } from '../services/firebase.service'; // Servicio para contactos

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

constructor(
    private socialSharing: SocialSharing,
    private firebaseService: FirebaseService
  ) {}

  async onEmergencyPress() {
    try {
      // Obtener geolocalización
      const position = await Geolocation.getCurrentPosition();
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      const locationUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
      const message = `Emergencia. Estoy aquí: ${locationUrl}`;

      // Obtener contactos de Firebase
      const contactos = await this.firebaseService.obtenerContactos();

      // Enviar mensaje a cada contacto registrado
      contactos.forEach((contact: any) => {
        this.socialSharing.shareViaWhatsAppToReceiver(contact.telefono, message)
          .then(() => {
            console.log(`Mensaje enviado a ${contact.nombre}`);
          })
          .catch((error) => {
            console.error(`Error al enviar mensaje a ${contact.nombre}:`, error);
          });
      });
    } catch (error) {
      console.error('Error al obtener geolocalización o enviar mensaje:', error);
    }
  }
}
