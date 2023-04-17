import { Injectable } from '@angular/core';
import { Alumnos } from '../models/alumnos.model';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  
  constructor() { }

  listaAlumnos: Array<Alumnos> = [
    new Alumnos(
      1,
      'paula',
      'paula',
      'paula@mail.com',

      true,
      false
    ),
    new Alumnos(
      2,
      'matias',
      'poses',
      'poses@mail.com',

      false,
      false
    ),

    new Alumnos(
      3,
      'carlos',
      'pero',
      'pero@mail.com',

      false,
      false
    ),
    new Alumnos(
      4,
      'miguel',
      'miguel',
      'miguel@mail.com',

      true,
      false
    ),
    new Alumnos(
      5,
      'mirta',
      'perez',
      'perez@mail.com',

      true,
      false
    ),
    new Alumnos(
      6,
      'gabriel',
      'gabe',
      'gabe@mail.com',

      false,
      false
    ),
    new Alumnos(
      7,
      'lisan',
      'lisna',
      'lisan@mail.com',

      true,
      false
    ),
  ];

  getAlumnos(){
    return this.listaAlumnos
  }

  getAlumnoByID(id:number){
    return this.listaAlumnos.filter((alumno)=>{
      return alumno.id === id
    })
  }
}
