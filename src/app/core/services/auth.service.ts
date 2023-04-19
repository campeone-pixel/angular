import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import {User} from "../models"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUser$ = new Subject<User>()

  constructor() { }


  obtenerUsuarioAutenticado ():Observable<User>{
    return this.authUser$.asObservable()
  }
}
