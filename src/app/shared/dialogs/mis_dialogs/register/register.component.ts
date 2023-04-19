import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { User } from 'src/app/core/models';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationsService } from 'src/app/core/services/notifications.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent  {
  
  loginForm: FormGroup = new FormGroup({});

  nombreControl = new FormControl('nombre', [
    Validators.required,
    Validators.minLength(5),
  ]);

  apellidoControl = new FormControl('apellido', [
    Validators.required,
    Validators.minLength(5),
  ]);
  mailControl = new FormControl('mail@mail.com', [
    Validators.required,
    Validators.email,
  ]);
  passwordControl = new FormControl('12345', [
    Validators.required,
    
  ]);

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<RegisterComponent>,
    private authUser: AuthService,
    private mensaje: NotificationsService
  ) {
    this.loginForm = this.formBuilder.group({
      nombre: this.nombreControl,
      apellido: this.apellidoControl,
      mail: this.mailControl,
      password: this.passwordControl
    });
  }


  onSubmit() {
    const usuarioAutenticado = new User(
      this.authUser.idProximoUser(),
      this.loginForm.value.nombre,
      this.loginForm.value.apellido,
      this.loginForm.value.mail,
      this.loginForm.value.password
    );

    

    this.authUser.registerUser(usuarioAutenticado).subscribe(
      usuario =>{
        if (!usuario) {
          this.mensaje.mostrarMensaje('Credenciales inválidas');
        } else {
          this.mensaje.mostrarMensaje('el usuario se logueo');
        }
      }
    );
  }
}
