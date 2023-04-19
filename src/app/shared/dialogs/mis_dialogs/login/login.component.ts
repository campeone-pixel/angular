import { Component, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { User } from 'src/app/core/models';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent  {
  
  loginForm: FormGroup = new FormGroup({});

  nombreControl = new FormControl('nombre', [
    Validators.required,
    Validators.minLength(5),
  ]);

  apellidoControl = new FormControl('apellido', [
    Validators.required,
    Validators.minLength(5),
  ]);
  mailControl = new FormControl('mail@mail.com', [
    Validators.required,
    Validators.email,
  ]);

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<LoginComponent>,
    private authUser: AuthService
  ) {
    this.loginForm = this.formBuilder.group({
      nombre: this.nombreControl,
      apellido: this.apellidoControl,
      mail: this.mailControl,
    });
  }


  onSubmit() {
    const nuevoUsuario = new User(
      this.authUser.idProximoUser(),
      this.loginForm.value.nombre,
      this.loginForm.value.apellido,
      this.loginForm.value.mail
    );

    

    this.authUser.loginUser(nuevoUsuario);
  }
}
