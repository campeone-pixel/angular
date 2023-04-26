import { Injectable, Pipe } from '@angular/core';
import { Subject, Observable, Observer, find, of } from 'rxjs';
import { User } from '../models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  listaUser: Array<User> = [
    new User(1, 'paula', 'paula', 'paula@mail.com', '12345'),
    new User(2,'mail','mailapellido','mail@mail.com','12345')
  ];

  private authUser$ = new Subject<User | null>();

  getUserList(): Observable<User[]> {
    return new Observable<User[]>((observer) => {
      observer.next(this.listaUser);
    });
  }

  idProximoUser(): number {
    return this.listaUser.length + 1;
  }

  obtenerUsuarioAutenticado(): Observable<User | null> {
    return this.authUser$.asObservable();
  }

  registerUser(user: User):Observable<User > {
    this.listaUser.push(user);
    this.authUser$.next(user);
    return of(user);
  }

  loginUser(email: string, password: string):Observable<User | null> {
    const usuarioAutenticado = this.listaUser.find(
      (usuario) =>
        usuario.mail === email && usuario.password === password
    );
    this.authUser$.next(usuarioAutenticado || null);
    return of(usuarioAutenticado || null);
  }

  logout(){
    this.authUser$.next(null);
  }
}
