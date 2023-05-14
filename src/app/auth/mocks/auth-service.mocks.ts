import { BehaviorSubject, Observable, of } from "rxjs";
import { User } from "src/app/core/models";

export const USUARIO_ADMIN_MOCK: User = {
    id: 1,
    apellido: 'testapellido',
    mail: 'test@mail.com',
    nombre: 'testnombre',
    role: 'admin',
    token: 'asdkjsanfkdams3u2hjdasfadsuh',
    password: '12312312',
  }


export class AuthServiceMock {

    private authUser$ = new BehaviorSubject<User | null>(null);

loginUser(email: string, password: string):void{
    this.authUser$.next(USUARIO_ADMIN_MOCK);
}



  verificarToken(): Observable<boolean> {
    return of(true);
  }
}