import { Component, Inject, OnInit } from '@angular/core';
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
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styles: [],
})
export class EditarComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});



  constructor(
    public formBuilder: FormBuilder,

    private notification: NotificationsService,
    private cursoService: CursosService,
    @Inject(MAT_DIALOG_DATA) public data: Cursos,
    public dialogRef: MatDialogRef<EditarComponent>
  ) {
    this.registerForm = this.formBuilder.group({

      nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
      fecha_inicio: new FormControl('', [Validators.required]),
      fecha_fin: new FormControl('', [Validators.required]),
      diasCursar: new FormControl('', [Validators.required]),
      horario: new FormControl('', [Validators.required]),
    
    });
    console.log(this.registerForm.value)

  }

  ngOnInit(){
    this.registerForm.patchValue({
      nombre: this.data.nombre,
      fecha_inicio: this.data.fecha_inicio,
      fecha_fin: this.data.fecha_fin,
      diasCursar: this.data.diasCursar,
      horario: this.data.horario
    })
    }

  update() {
    if (this.registerForm.valid) {
      
      const editado: Cursos = {
        id: this.data.id,
        nombre: this.registerForm.value.nombre,
        fecha_inicio: this.registerForm.value.fecha_inicio,
        fecha_fin: this.registerForm.value.fecha_fin,
        diasCursar: this.registerForm.value.diasCursar,
        horario: this.registerForm.value.horario
      };
      
      this.cursoService.update(editado );

      this.notification.mostrarMensaje('se realizo la edicion del curso');
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
