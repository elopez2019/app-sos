import { Injectable } from '@angular/core';
import { firestore } from '../firebase/firebase-config'; // Asegúrate de que la ruta sea correcta
import { collection, addDoc, getDocs, updateDoc, doc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor() {}

  // Método para agregar un contacto a Firestore
  async agregarContacto(nombre: string, telefono: string) {
    try {
      const contactosCollection = collection(firestore, 'contactos');
      const newDocRef = await addDoc(contactosCollection, {
        nombre,
        telefono,
      });
      return { id: newDocRef.id, nombre, telefono }; // Devuelve el contacto con el ID
    } catch (error) {
      console.error('Error al agregar contacto: ', error);
      throw error;
    }
  }


  // Método para actualizar un contacto existente en Firestore
  async actualizarContacto(id: string, data: { nombre: string; telefono: string }) {
    try {
      const contactDoc = doc(firestore, 'contactos', id); // Referencia al documento específico
      await updateDoc(contactDoc, data);
      console.log('Contacto actualizado exitosamente');
    } catch (error) {
      console.error('Error al actualizar contacto: ', error);
      throw error;
    }
  }

  // Método para obtener todos los contactos de Firestore
  async obtenerContactos() {
    try {
      const contactosCollection = collection(firestore, 'contactos');
      const contactosSnapshot = await getDocs(contactosCollection);

      // Mapear los documentos a un formato de lista con su ID
      const contactosList = contactosSnapshot.docs.map((docSnapshot) => ({
        id: docSnapshot.id, // Incluir el ID del documento
        ...docSnapshot.data(),
      }));

      console.log('Contactos obtenidos:', contactosList);
      return contactosList;
    } catch (error) {
      console.error('Error al obtener contactos: ', error);
      throw error;
    }
  }
}
