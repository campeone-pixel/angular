import { Injectable } from '@angular/core';
import { AlumnosService } from './alumnos.service';

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {

  constructor(private alumnoService: AlumnosService) { }

  getProfesorByAlumnoID(id:number){
   console.log( this.alumnoService.getAlumnoByID(3))
  }
}
