import { Injectable } from '@angular/core';
import { BehaviorSubject, find, map, Observable, take } from 'rxjs';
import {  Cursos } from '../models/cursos.models';
import { enviroments } from 'src/enviroments/enviroments';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  constructor(private httpClient: HttpClient) {}



  getCursos(): Observable<Cursos[]> {
    return this.httpClient.get<Cursos[]>(`${enviroments.baseApiUrl}/cursos`);
  }

  add(curso: any) {
    this.httpClient.post(`${enviroments.baseApiUrl}/cursos`, curso).subscribe();
  }

  delete(curso: Cursos | undefined) {
    const url = `${enviroments.baseApiUrl}/cursos/${curso?.id}`;
    this.httpClient.delete(url).subscribe();
  }

  update(updatedCursos: any) {
    const url = `${enviroments.baseApiUrl}/cursos/${updatedCursos?.id}`;
    this.httpClient.put(url, updatedCursos).subscribe();
  }

  obtenerCursoPorID(id: number): Observable<Cursos> {
    const url = `${enviroments.baseApiUrl}/cursos/${id}`;
    return this.httpClient.get<Cursos>(url);
  }


}
