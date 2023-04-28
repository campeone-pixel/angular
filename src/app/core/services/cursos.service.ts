import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cursos } from '../models/cursos.models';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() {}

  private cursos$ = new BehaviorSubject<Cursos[]>([
    { id: 1, nombre: 'Angular', fecha_inicio: new Date(), fecha_fin:  new Date() },
    { id: 2, nombre: 'React', fecha_inicio: new Date(), fecha_fin:  new Date()},
    { id: 3, nombre: 'Vue',fecha_inicio: new Date(), fecha_fin:  new Date() }
  ])

  getCursos(): Observable<Cursos[]> {
   return this.cursos$.asObservable()
  }

  addCurso() {
 
  }

  deleteCurso() {

  }

  updateCurso() {
  }

getCursoPorID(){

}

}
