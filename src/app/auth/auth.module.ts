import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { RouterModule, Routes } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AuthComponent } from './auth.component';

import { RegisterComponent } from './pages/register/register.component';
import { LoginGuard } from './guards/login.guard';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { LoginComponent } from './pages/login/login.component';
const routes: Routes = [
  { path: 'login', canActivate: [LoginGuard], component: LoginComponent },
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  declarations: [RegisterComponent, LoginComponent, AuthComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatTableModule,

    MatListModule,

    MatCardModule,

    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    PipesModule,
  ],
})
export class AuthModule {}
