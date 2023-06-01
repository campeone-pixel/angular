import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Alumnos } from '../models/alumnos.model';
import { enviroments } from 'src/enviroments/enviroments';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AlumnosService {
 

  constructor(private http: HttpClient) {}

  getAlumnos(): Observable<Alumnos[]> {
    return this.http.get<Alumnos[]>(`${enviroments.baseApiUrl}/alumnos`);
  }

  add(alumno: any) {
    this.http.post(`${enviroments.baseApiUrl}/alumnos`, alumno).subscribe();
  }

  delete(alumno: Alumnos | undefined) {
    const url = `${enviroments.baseApiUrl}/alumnos/${alumno?.id}`;
    this.http.delete(url).subscribe();
  }

  update(updatedAlumno: any) {
    const url = `${enviroments.baseApiUrl}/alumnos/${updatedAlumno?.id}`;
    this.http.put(url, updatedAlumno).subscribe();
  }

  obtenerAlumnoPorID(id: number): Observable<Alumnos> {
    const url = `${enviroments.baseApiUrl}/alumnos/${id}`;
    return this.http.get<Alumnos>(url);
  }
}


