import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Alumnos } from 'src/app/core/models';
import { AlumnosService } from '../../../../core/services/alumnos.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styles: [],
})
export class EliminarComponent {
  constructor(
    public dialogRef: MatDialogRef<EliminarComponent>,
    private alumnosService: AlumnosService
  ) {}

  @Input() data?: Alumnos;

  eliminar() {
    
    this.alumnosService.delete(this.data);
  
    this.dialogRef.close();
  }

  onNoClick(): void {
    
    this.dialogRef.close();
  }
}
