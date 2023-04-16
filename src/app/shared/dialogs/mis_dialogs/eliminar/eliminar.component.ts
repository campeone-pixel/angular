import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Alumnos } from 'src/app/models';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styles: [
  ]
})
export class EliminarComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Alumnos,public dialogRef: MatDialogRef<EliminarComponent>,) {
    
  }

  onNoClick(event: Event): void {
    event.preventDefault();
    this.dialogRef.close();
  }
}
