import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  registroForm: FormGroup;
  loginForm: FormGroup;
  isRegistering: boolean = true;  // Bandera para alternar entre registro e inicio de sesión

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    // Formulario de registro
    this.registroForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    });

    // Formulario de inicio de sesión
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit() {}

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

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Usuario registrado:', user);
        // Redirigir a otra página después del registro
        this.router.navigate(['/tabs/perfil']);
      })
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

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Usuario iniciado sesión:', user);
        // Redirigir a otra página después del inicio de sesión
        this.router.navigate(['/tabs/perfil']);
      })
      .catch((error) => {
        console.error('Error al iniciar sesión:', error.message);
        alert('Error al iniciar sesión: ' + error.message);
      });
  }
}
