import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { AlumnosService } from 'src/app/core/services/alumnos.service';
import { CursosService } from '../../../../../core/services/cursos.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styles: [],
})
export class EliminarComponent {
  constructor(
    public dialogRef: MatDialogRef<EliminarComponent>,
    private cursosService: CursosService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  eliminar() {
    console.log(this.data)
    this.cursosService.deleteCurso(this.data);
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
