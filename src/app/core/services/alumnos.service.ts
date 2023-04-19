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
        observer.complete()
      
    });
    
  }

  getAlumnoByID(id: number) {
    return this.listaAlumnos.filter((alumno) => {
      return alumno.id === id;
    });
  }

  add(alumno: any): Observable<any[]> {
    this.listaAlumnos.push(alumno);
    return of(this.listaAlumnos);
  }

  // Método para eliminar un alumno por su índice y emitir la lista actualizada como un Observable
  delete(index: number): Observable<any[]> {
    this.listaAlumnos.splice(index, 1);
    return of(this.listaAlumnos);
  }

  // Método para actualizar la información de un alumno y emitir la lista actualizada como un Observable
  update(index: number, updatedAlumno: any): Observable<any[]> {
    this.listaAlumnos[index] = updatedAlumno;
    return of(this.listaAlumnos);
  }
}
