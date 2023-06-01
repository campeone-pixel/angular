import { Component, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';

import { Router } from '@angular/router';
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

  mailControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordControl = new FormControl('', [Validators.required]);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
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
  cancel() {
    this.router.navigate(['dashboard', 'alumnos']);
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      
      this.loginForm.markAllAsTouched();
      alert("Por favor suministra los datos correctos")
    } else {
      this.authUser.loginUser(
        this.loginForm.value.mail,
        this.loginForm.value.password
      );
    }
  }
}
