import { Injectable } from '@angular/core';
import { Subject, Observable, Observer } from 'rxjs';
import { User } from '../models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  listaUser: Array<User> = [new User(1, 'paula', 'paula', 'paula@mail.com')];

  private authUser$ = new Subject<User>();


  getUserList(): Observable<User[]> {
    return new Observable<User[]>((observer) => {
      observer.next(this.listaUser);
      observer.complete();
    });
  }

  idProximoUser(): number {
    return this.listaUser.length+1
   
  }

  obtenerUsuarioAutenticado(): Observable<User> {
    return this.authUser$.asObservable();
  }

  loginUser(user: User) {
    this.authUser$.next(user);
  }
}
