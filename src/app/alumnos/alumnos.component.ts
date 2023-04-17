import { Component } from '@angular/core';
import { AlumnosService } from '../services/alumnos.service';
import { Alumnos } from '../models';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styles: [
  ]
})
export class AlumnosComponent {

listaAlumnos:Alumnos[];
  
constructor(private alumnoService:AlumnosService){
this.listaAlumnos=this.alumnoService.getAlumnos()
}
}
