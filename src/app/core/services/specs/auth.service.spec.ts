import { TestBed } from '@angular/core/testing';
import  {HttpClientTestingModule, HttpTestingController}   from "@angular/common/http/testing"
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { skip } from 'rxjs';
import { enviroments } from 'src/enviroments/enviroments';
import { User } from '../../models';
describe('Pruebas sobre el AuthService', () => {

    let service: AuthService;
    let httpController: HttpTestingController
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    }).compileComponents();

    service = TestBed.inject(AuthService)
    httpController = TestBed.inject(HttpTestingController)
  });

  it('El login debe funcionar', (done) => {
    const loginFake = {
        mail: "test@test.com",
        password: "123456"
    }
    const MOCK_REQUEST_RESULT: User[] = [
      {
        id: 1,
        apellido: 'testapellido',
        mail: loginFake.mail,
        nombre: 'testnombre',
        password: loginFake.password,
        role: 'admin',
        token: 'asdjkasdnasjhdj36231321',
      },
    ];
    spyOn(TestBed.inject(Router), 'navigate');
    service
      .getUser()
      .pipe(skip(1))
      .subscribe((usuario) => {
        expect(usuario).toEqual(MOCK_REQUEST_RESULT[0]);
        done();
      });
    service.loginUser(loginFake.mail,loginFake.password);
    httpController
      .expectOne({
        // http://localhost:3000/usuarios
        url: `${enviroments.baseApiUrl}/usuarios?email=${loginFake.mail}&password=${loginFake.password}`,
        method: 'GET',
      })
      .flush(MOCK_REQUEST_RESULT);
  });
});
