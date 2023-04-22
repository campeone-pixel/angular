import { Component, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';

import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationsService } from 'src/app/core/services/notifications.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent implements OnDestroy {
  loginForm: FormGroup = new FormGroup({});
  destroyed$ = new Subject<void>();

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
  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  onSubmit() {
    this.authUser
      .loginUser(this.loginForm.value.mail, this.loginForm.value.password)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((usuario) => {
        if (!usuario) {
          this.mensaje.mostrarMensaje('Credenciales inválidas');
        } else {
          this.mensaje.mostrarMensaje('el usuario se logueo');
        }
      });
  }
}
