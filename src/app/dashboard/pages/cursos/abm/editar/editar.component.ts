import { Component, Inject } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Alumnos } from 'src/app/core/models/alumnos.model';
import { Cursos } from 'src/app/core/models/cursos.models';
import { CursosService } from 'src/app/core/services/cursos.service';
import { NotificationsService } from 'src/app/core/services/notifications.service';

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

  fechaInicioControl = new FormControl('fecha inicio', [Validators.required]);
  fechaFinControl = new FormControl('fecha fin', [Validators.required]);

  constructor(
    public formBuilder: FormBuilder,

    private notification: NotificationsService,
    private cursoService: CursosService,
    @Inject(MAT_DIALOG_DATA) public data: Cursos,
    public dialogRef: MatDialogRef<EditarComponent>
  ) {
    this.registerForm = this.formBuilder.group({
      nombre: this.data.nombre,
      fecha_inicio: this.data.fecha_inicio,
      fecha_fin: this.data.fecha_fin,
    });
  }

  update() {
    if (this.registerForm.valid) {
      const nuevoCurso = {
        nombre: this.registerForm.value.nombre,
        fecha_inicio: this.registerForm.value.fecha_inicio,
        fecha_fin: this.registerForm.value.fecha_fin,
      };

      this.cursoService.updateCurso(nuevoCurso, this.data.id);

      this.notification.mostrarMensaje('se realizo la edicion del curso');
      this.dialogRef.close();
    } else {
      alert('no es valido');
      this.dialogRef.close();
    }
  }

  onNoClick(): void {}
}
