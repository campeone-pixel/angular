import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { CrearCursoPayload, Cursos } from '../models/cursos.models';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  constructor() {}

  private cursos$ = new BehaviorSubject<Cursos[]>([
    {
      id: 1,
      nombre: 'Angular',
      fecha_inicio: new Date(),
      fecha_fin: new Date(),
    },
    { id: 2, nombre: 'React', fecha_inicio: new Date(), fecha_fin: new Date() },
    { id: 3, nombre: 'Vue', fecha_inicio: new Date(), fecha_fin: new Date() },
  ]);

  getCursos(): Observable<Cursos[]> {
    return this.cursos$.asObservable();
  }

  addCurso(payload: CrearCursoPayload): Observable<Cursos[]> {
    this.cursos$.pipe(take(1)).subscribe({
      next: (cursos) => {
        this.cursos$.next([...cursos, { id: cursos.length + 1, ...payload }]);
      },
    });
    return this.cursos$.asObservable();
  }

  deleteCurso() {}

  updateCurso() {}

  getCursoPorID() {}
}
