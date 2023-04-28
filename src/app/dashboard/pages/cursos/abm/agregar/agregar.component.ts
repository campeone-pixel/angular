import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { CursosService } from 'src/app/core/services/cursos.service';
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

  fechaInicioControl = new FormControl('fecha inicio', [Validators.required]);
  fechaFinControl = new FormControl('fecha fin', [Validators.required]);

  constructor(
    public formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AgregarComponent>,
    private notification: NotificationsService,
    private cursoService: CursosService
  ) {
    this.registerForm = this.formBuilder.group({
      nombre: this.nombreControl,
      fecha_inicio: this.fechaInicioControl,
      fecha_fin: this.fechaFinControl,
    });
  }

  add(): void {
    if (this.registerForm.valid) {
      const nuevoCurso = {
        nombre: this.registerForm.value.nombre,
        fecha_inicio: this.registerForm.value.fecha_inicio,
        fecha_fin: this.registerForm.value.fecha_fin,
      };

      this.cursoService.addCurso(nuevoCurso);

      this.notification.mostrarMensaje('el usuario se creo correctamente');
      this.dialogRef.close();
    } else {
      alert('no es valido');
      this.dialogRef.close();
    }
  }

  onNoClick() {}
}
