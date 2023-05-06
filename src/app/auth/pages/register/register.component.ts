import { Component, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

import { User } from 'src/app/core/models';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationsService } from 'src/app/core/services/notifications.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent implements OnDestroy {
  loginForm: FormGroup = new FormGroup({});
  destroyed$ = new Subject<void>();
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
  passwordControl = new FormControl('12345', [Validators.required]);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authUser: AuthService,
    private mensaje: NotificationsService
  ) {
    this.loginForm = this.formBuilder.group({
      nombre: this.nombreControl,
      apellido: this.apellidoControl,
      mail: this.mailControl,
      password: this.passwordControl,
    });
  }
  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  cancel() {
    this.router.navigate(['dashboard', 'alumnos']);
  }

  // onSubmit() {
  //   const usuarioAutenticado = new User(
  //     this.authUser.idProximoUser(),
  //     this.loginForm.value.nombre,
  //     this.loginForm.value.apellido,
  //     this.loginForm.value.mail,
  //     this.loginForm.value.password
  //   );

  //   this.authUser
  //     .registerUser(usuarioAutenticado)
  //     .pipe(takeUntil(this.destroyed$))
  //     .subscribe((usuario) => {
  //       if (!usuario) {
  //         this.mensaje.mostrarMensaje('Credenciales inválidas');
  //       } else {
  //         this.mensaje.mostrarMensaje('Registro exitoso');
  //         this.router.navigate(['dashboard', 'alumnos']);
  //       }
  //     });
  // }
}
