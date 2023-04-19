import { Component, EventEmitter, Input, Output, Inject } from '@angular/core';
import {
  FormBuilder,
  FormArray,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { Alumnos } from 'src/app/core/models/alumnos.model';

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

  mejorAlumnoControl = new FormControl(false);

  constructor(
    public formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: Alumnos,
    public dialogRef: MatDialogRef<EditarComponent>
  ) {
    this.registerForm = this.formBuilder.group({
      id: this.data.id,
      nombre: this.data.nombre,
      apellido: this.data.apellido,
      mail: this.data.mail,
      mejorAlumno: this.data.mejorAlumno,
      eliminado: this.data.eliminado,
    });
  }

  onNoClick(): void {
    
    this.dialogRef.close();
  }
}
