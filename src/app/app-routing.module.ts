import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { RegisterComponent } from './auth/pages/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';


import { AlumnosTablesComponent } from './dashboard/pages/alumnos/alumnos-tables.components';
import { DetalleAlumnoComponent } from './dashboard/pages/alumnos/detalle-alumno/detalle-alumno.component';
import { CursosComponent } from './dashboard/pages/cursos/cursos.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'alumnos',
        component: AlumnosTablesComponent,
      },
     
      { path: 'alumnos/:id', component: DetalleAlumnoComponent },
      { path: 'cursos', component: CursosComponent },
    ],
  },

  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },

  { path: 'dashboard', redirectTo: 'dashboard/alumnos' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
