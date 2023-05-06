import { Injectable, Pipe } from '@angular/core';
import {
  Subject,
  BehaviorSubject,
  Observable,
  Observer,
  find,
  of,
  map,
  catchError,
} from 'rxjs';
import { User } from '../models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { enviroments } from 'src/enviroments/enviroments';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  listUser: Array<User> = [];

  private authUser$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  getUserList(): Observable<User[]> {
    return new Observable<User[]>((observer) => {
      observer.next(this.listUser);
    });
  }

  idProximoUser(): number {
    return this.listUser.length + 1;
  }

  getUser(): Observable<User | null> {
    return this.authUser$.asObservable();
  }

  registerUser(user: User): Observable<User> {
    this.listUser.push(user);
    this.authUser$.next(user);
    return of(user);
  }

  loginUser(email: string, password: string): Observable<User | null> {
    return this.httpClient
      .get<User[]>(`${enviroments.baseApiUrl}/usuarios`, {
        params: {
          email: email,
          password: password,
        },
      })
      .pipe(
        map((usuarios: User[]) => {
          const usuarioAutenticado = usuarios[0];
          if (usuarioAutenticado) {
            localStorage.setItem('token', usuarioAutenticado.token);
            this.authUser$.next(usuarioAutenticado || null);
            return usuarioAutenticado;
          } else {
            return null;
          }
        })
      );
  }

  verificarToken(): Observable<boolean> {
    const token = localStorage.getItem('token');
    return this.httpClient
      .get<User[]>(`${enviroments.baseApiUrl}/usuarios?token=${token}`, {
        headers: new HttpHeaders({
          Authorization: token || '',
        }),
      })
      .pipe(
        map((usuarios) => {
          const usuarioAutenticado = usuarios[0];
          if (usuarioAutenticado) {
            localStorage.setItem('token', usuarioAutenticado.token);
            this.authUser$.next(usuarioAutenticado);
          }
          return !!usuarioAutenticado;
        }),
        catchError((err) => {
          return of(false);
        })
      );
  }

  logout() {
    this.authUser$.next(null);
    localStorage.removeItem('token');
    this.router.navigate(['auth', 'login']);
  }
}
