import { Injectable } from '@angular/core';
import { BehaviorSubject, find, map, Observable, take } from 'rxjs';
import { CrearCursoPayload, Cursos } from '../models/cursos.models';
import { enviroments } from 'src/enviroments/enviroments';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  constructor(private httpClient: HttpClient) {}

  private cursos$ = new BehaviorSubject<Cursos[]>([

  ]);

  getCursos(): Observable<Cursos[]> {
    return this.cursos$.asObservable();
  }

  getCursosAPI(): void {
    this.httpClient.get<Cursos[]>(`${enviroments.baseApiUrl}/cursos`).subscribe(
      {
        next: (cursos:Cursos[])=>{
          this.cursos$.next(cursos)
        }
      }
    )
  }

  addCurso(payload: CrearCursoPayload): Observable<Cursos[]> {
    this.cursos$.pipe(take(1)).subscribe({
      next: (cursos) => {
        this.cursos$.next([...cursos, { id: cursos.length + 1, ...payload }]);
      },
    });
    return this.cursos$.asObservable();
  }

  deleteCurso(data: Cursos): void {
    const elementosActuales = this.cursos$.value;
    const nuevosElementos = elementosActuales.filter(e => e.id !== data.id);
    this.cursos$.next(nuevosElementos);
  }

  updateCurso(updatedItem: CrearCursoPayload, idToMatch: number) {
    const currentItems = this.cursos$.value;
    const updatedItems = currentItems.map(item => {
      if (item.id === idToMatch) {
        return {...updatedItem
        ,id:idToMatch
        }
      } else {
        return item;
      }
    });
    this.cursos$.next(updatedItems);
  }

  obtenerCursoPorID(id:number): Observable<Cursos | undefined>{

    return this.cursos$.asObservable()
    .pipe(
      map((cursos) => cursos.find((c) => c.id === id))
    )
  }


}
