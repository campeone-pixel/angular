import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/core/models';

import { AlumnosService } from 'src/app/core/services/alumnos.service';
import { NotificationsService } from 'src/app/core/services/notifications.service';
import { UsuariosService } from 'src/app/core/services/usuarios.service';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [],
})
export class AgregarComponent {
  registerForm: FormGroup = new FormGroup({});

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

  passwordControl = new FormControl('password', [
    Validators.required,
    Validators.minLength(5),
  ]);
  tokenControl = new FormControl('token', [
    Validators.required,
    Validators.minLength(5),
  ]);
  roleControl = new FormControl('role', [
    Validators.required,
    Validators.minLength(5),
  ]);



  constructor(
    public formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AgregarComponent>,
    private notification: NotificationsService,
    private usuarioService: UsuariosService
  ) {
    this.registerForm = this.formBuilder.group({
      nombre: this.nombreControl,
      apellido: this.apellidoControl,
      mail: this.mailControl,
      password: this.passwordControl,
      token:this.tokenControl,
      role:this.roleControl
    });
  }

  add(): void {
    if (this.registerForm.valid) {
     
      const nuevoAlumno: User = {
        nombre:this.registerForm.value.nombre,
        apellido:this.registerForm.value.apellido ,
        mail: this.registerForm.value.mail,
        password: this.registerForm.value.password,
        token:this.registerForm.value.token,
        role:this.registerForm.value.role
      };
      this.usuarioService.add(nuevoAlumno);

      this.notification.mostrarMensaje('el usuario se creo correctamente');
      this.dialogRef.close();
    } else {
      alert('no es valido');
      this.dialogRef.close();
    }
  }

  onNoClick(event: Event): void {
    event.preventDefault();
    this.dialogRef.close();
  }
}
