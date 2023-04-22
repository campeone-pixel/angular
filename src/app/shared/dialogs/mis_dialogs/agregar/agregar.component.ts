import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Alumnos } from 'src/app/core/models/alumnos.model';
import { AlumnosService } from 'src/app/core/services/alumnos.service';
import { NotificationsService } from 'src/app/core/services/notifications.service';
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

  mejorAlumnoControl = new FormControl(false);

  constructor(
    public formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AgregarComponent>,
    private notification: NotificationsService,
    private alumnosService: AlumnosService
  ) {
    this.registerForm = this.formBuilder.group({
      nombre: this.nombreControl,
      apellido: this.apellidoControl,
      mail: this.mailControl,
      mejorAlumno: this.mejorAlumnoControl,
    });
  }

  add(): void {
    if (this.registerForm.valid) {
      const nuevoAlumno = new Alumnos(
        this.alumnosService.listaAlumnos.length + 1,
        this.registerForm.value.nombre,
        this.registerForm.value.apellido,
        this.registerForm.value.mail,
        this.registerForm.value.mejorAlumno,
        false
      );
      this.alumnosService.add(nuevoAlumno);

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
