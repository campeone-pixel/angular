import { Component, Inject } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/core/models';
import { Alumnos } from 'src/app/core/models/alumnos.model';
import { AlumnosService } from 'src/app/core/services/alumnos.service';
import { NotificationsService } from 'src/app/core/services/notifications.service';
import { UsuariosService } from 'src/app/core/services/usuarios.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styles: [],
})
export class EditarComponent {
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
    @Inject(MAT_DIALOG_DATA) public data: User,
    public dialogRef: MatDialogRef<EditarComponent>,
    private usuarioService: UsuariosService,
    private notification: NotificationsService
  ) {
    this.registerForm = this.formBuilder.group({
      id: this.data.id,
      nombre: this.data.nombre,
      apellido: this.data.apellido,
      mail: this.data.mail,
      password: this.data.password,
      token:this.data.token,
      role:this.data.role
    });
  }

  editar() {
    if (this.registerForm.valid) {
 
      const nuevoAlumno: User = {
        id:this.data.id,
        nombre:this.registerForm.value.nombre,
        apellido:this.registerForm.value.apellido ,
        mail: this.registerForm.value.mail,
        password: this.registerForm.value.password,
        token:this.registerForm.value.token,
        role:this.registerForm.value.role
      };
      this.usuarioService.update(nuevoAlumno);

      this.notification.mostrarMensaje('el usuario se edito correctamente');
      this.dialogRef.close();
    } else {
      alert('no es valido');
      this.dialogRef.close();
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
