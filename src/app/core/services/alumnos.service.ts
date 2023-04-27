import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Alumnos } from '../models/alumnos.model';

@Injectable({
  providedIn: 'root',
})
export class AlumnosService {
  constructor() {}

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

  getAlumnos(): Observable<Alumnos[]> {
    return new Observable<Alumnos[]>((observer) => {
      observer.next(this.listaAlumnos);
      observer.complete();
    });
  }

  add(alumno: any) {
    this.listaAlumnos.push(alumno);
  }

  delete(alumno: Alumnos | undefined) {
    const index = this.listaAlumnos.findIndex((elemento) => {
      return elemento.id === alumno?.id;
    });

    this.listaAlumnos.splice(index, 1);
  }

  update(updatedAlumno: any) {
    const index = this.listaAlumnos.findIndex(
      (elemento) => elemento.id === updatedAlumno?.id
    );

    this.listaAlumnos[index] = updatedAlumno;
  }

obtenerAlumnoPorID(id:number): Alumnos | undefined{

  const personaConId = this.listaAlumnos.find((e) => e.id === id);

  return personaConId


}


}


