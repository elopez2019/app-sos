import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { FirebaseService } from '../services/firebase.service';
import { getAuth, signOut } from 'firebase/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(
    private socialSharing: SocialSharing,
    private firebaseService: FirebaseService,
    private router: Router
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

      // Obtener ID del usuario autenticado
      const auth = getAuth();
      const user = auth.currentUser;

      if (!user) {
        console.error('No hay un usuario autenticado');
        return;
      }

      console.log('Usuario autenticado:', user.uid);

      // Obtener contactos desde Firebase filtrados por el usuario actual
      const contactos = await this.firebaseService.obtenerContactos();
      const misContactos = contactos.filter((contact: any) => contact.userId === user.uid);

      console.log('Contactos del usuario:', misContactos);

      // Enviar mensaje a cada contacto registrado
      for (const contact of misContactos) {
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

  // Método para cerrar sesión
  logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log('Sesión cerrada con éxito');
        this.router.navigate(['/registro']); // Redirige a la página de inicio de sesión
      })
      .catch((error) => {
        console.error('Error al cerrar sesión:', error);
      });
  }
}
