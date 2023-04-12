import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alumnos } from 'src/app/models';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styles: [
  ]
})
export class EliminarComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Alumnos) {
    
  }
}
