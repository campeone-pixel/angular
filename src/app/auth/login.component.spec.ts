import { TestBed } from '@angular/core/testing';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('Pruebas de login component', () => {
  let component: LoginComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],imports:[HttpClientModule,RouterTestingModule,MatFormFieldModule,ReactiveFormsModule,MatInputModule,MatCardModule,BrowserAnimationsModule]
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

  it("si el loginForm es invalido, debe marcar todos los controles como touched",()=>{
    component.loginForm.setValue({mail:null, password:null})
    const spyOnMarkAllAsTouched = spyOn(component.loginForm, "markAllAsTouched")
    component.onSubmit()

    expect(component.mailControl.touched).toBeTrue()
    expect(component.passwordControl.touched).toBeTrue()
  })
});
