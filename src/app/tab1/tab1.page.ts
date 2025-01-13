import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(
    private socialSharing: SocialSharing,
    private firebaseService: FirebaseService
  ) {}

  handleEmergency() {
    console.log('Botón de emergencia presionado. Esperando 3 segundos...');
    setTimeout(() => {
      this.onEmergencyPress();
    }, 3000); // Espera de 3 segundos
  }

  async onEmergencyPress() {
    console.log('Iniciando proceso de emergencia...');
    try {
      // Obtener geolocalización
      const position = await Geolocation.getCurrentPosition();
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      const locationUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
      const message = `Emergencia. Estoy aquí: ${locationUrl}`;

      console.log('Ubicación obtenida:', locationUrl);

      // Obtener contactos desde Firebase
      const contactos = await this.firebaseService.obtenerContactos();
      console.log('Contactos obtenidos:', contactos);

      // Enviar mensaje a cada contacto registrado
      for (const contact of contactos) {
        try {
          await this.socialSharing.shareViaWhatsAppToReceiver(
            contact.telefono,
            message
          );
          console.log(`Mensaje enviado a ${contact.nombre}`);
        } catch (error) {
          console.error(`Error al enviar mensaje a ${contact.nombre}:`, error);
        }
      }
    } catch (error) {
      console.error('Error en el proceso de emergencia:', error);
    }
  }
}
