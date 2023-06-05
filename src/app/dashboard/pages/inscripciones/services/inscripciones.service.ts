import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, concatMap } from 'rxjs';
import {
  CreateInscripcionData,
  Inscripcion,
  InscripcionWithAll,
} from '../models';
import { enviroments } from 'src/enviroments/enviroments';


@Injectable({
  providedIn: 'root',
})
export class InscripcionesService {
  constructor(private httpClient: HttpClient) {}

  createInscripcion(data: CreateInscripcionData): Observable<InscripcionWithAll> {
    return this.httpClient
      .post<Inscripcion>(`${enviroments.baseApiUrl}/inscriptions`, data)
      .pipe(
        concatMap((createResponse) =>
          this.getInscriptionWithAllById(createResponse.id)
        )
      );
  }

  getInscriptionWithAllById(id: number): Observable<InscripcionWithAll> {
    return this.httpClient.get<InscripcionWithAll>(
      `${enviroments.baseApiUrl}/inscriptions/${id}?_expand=alumnos&_expand=cursos`
    )
  }

  getAllInscripciones(): Observable<InscripcionWithAll[]> {
    return this.httpClient.get<InscripcionWithAll[]>(
      `${enviroments.baseApiUrl}/inscriptions?_expand=cursos&_expand=alumnos`
    );
  }

  deleteInscripcionById(id: number): Observable<unknown> {
    return this.httpClient.delete(
      `${enviroments.baseApiUrl}/inscriptions/${id}`
    );
  }
}
