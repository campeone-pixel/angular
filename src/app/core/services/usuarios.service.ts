import { Injectable } from '@angular/core';
import { enviroments } from 'src/enviroments/enviroments';
import { User } from '../models';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(private httpClient: HttpClient) {}

  getUsuarios(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${enviroments.baseApiUrl}/usuarios`);
  }

  add(usuario: any) {
    this.httpClient
      .post(`${enviroments.baseApiUrl}/usuarios`, usuario)
      .subscribe();
  }

  delete(usuario: User | undefined) {
    const url = `${enviroments.baseApiUrl}/usuarios/${usuario?.id}`;
    this.httpClient.delete(url).subscribe();
  }

  update(usuarioActulizado: any) {
    const url = `${enviroments.baseApiUrl}/usuarios/${usuarioActulizado?.id}`;
    this.httpClient.put(url, usuarioActulizado).subscribe();
  }

  obtenerUsuarioPorID(id: number): Observable<User> {
    const url = `${enviroments.baseApiUrl}/usuarios/${id}`;
    return this.httpClient.get<User>(url);
  }
}
