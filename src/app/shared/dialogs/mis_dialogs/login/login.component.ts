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
import { NotificationsService } from 'src/app/core/services/notifications.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({});


  mailControl = new FormControl('mail@mail.com', [
    Validators.required,
    Validators.email,
  ]);
  passwordControl = new FormControl('12345', [Validators.required]);

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<LoginComponent>,
    private authUser: AuthService,
    private mensaje: NotificationsService
  ) {
    this.loginForm = this.formBuilder.group({
   
      mail: this.mailControl,
      password: this.passwordControl,
    });
  }

  onSubmit() {
    this.authUser
      .loginUser(this.loginForm.value.mail, this.loginForm.value.password)
      .subscribe((usuario) => {
        if (!usuario) {
          this.mensaje.mostrarMensaje('Credenciales inválidas');
        } else {
          this.mensaje.mostrarMensaje('el usuario se logueo');
        }
      });
  }
}
