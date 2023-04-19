
import { Component, EventEmitter, Input, Output,Inject } from '@angular/core';
import {
  FormBuilder,
  FormArray,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Alumnos } from 'src/app/core/models/alumnos.model';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
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

  constructor(public formBuilder: FormBuilder,public dialogRef: MatDialogRef<AgregarComponent>,) {
    this.registerForm = this.formBuilder.group({
      nombre: this.nombreControl,
      apellido: this.apellidoControl,
      mail: this.mailControl,
      mejorAlumno:this.mejorAlumnoControl
    });
  }
  onNoClick(event: Event): void {
    event.preventDefault();
    this.dialogRef.close();
  }
}
