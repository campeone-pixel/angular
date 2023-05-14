import { TestBed } from '@angular/core/testing';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from '../core/services/auth.service';
import { PipesModule } from '../pipes/pipes.module';
import { AuthServiceMock } from './mocks/auth-service.mocks';

describe('Pruebas de login component', () => {
  let component: LoginComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],imports:[HttpClientModule,RouterTestingModule,MatFormFieldModule,ReactiveFormsModule,MatInputModule,MatCardModule,BrowserAnimationsModule,PipesModule],providers:[{
        provide: AuthService,
        useClass: AuthServiceMock
      }]
    }).compileComponents();

    const fixture = TestBed.createComponent(LoginComponent)

    component  = fixture.componentInstance

    fixture.detectChanges()
  });

  it('si el campo email esta vacio el formcontrol es invalido', () => {
    component.loginForm.setValue({mail:null, password:null})
    expect(component.mailControl.invalid).toBeTrue()
  });
  it('si el campo password esta vacio el formcontrol es invalido', () => {
    component.loginForm.setValue({mail:null, password:null})
    expect(component.passwordControl.invalid).toBeTrue()
  });

  it('Si el loginForm es valido, debe llamar al metodo login del AuthService', () => {
    component.loginForm.setValue({ mail: 'test@mail.com', password: '123456' });
    
    const spyOnAuthServiceLogin = spyOn(TestBed.inject(AuthService), 'loginUser');
    component.onSubmit();
    expect(component.loginForm.valid).toBeTrue();
    expect(spyOnAuthServiceLogin).toHaveBeenCalled();
  });
});
