import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AlumnosTablesComponent } from './components/pages/alumnos-tables/alumnos-tables.components';
import { CardsComponent } from './components/pages/cards/cards.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { RegisterComponent } from './auth/pages/register/register.component';
import { DetalleAlumnoComponent } from './components/pages/alumnos-tables/detalle-alumno/detalle-alumno.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'alumnos',
        component: AlumnosTablesComponent,
      },
      {
        path: 'cards',
        component: CardsComponent,
      },
      { path: 'alumnos/:id', component: DetalleAlumnoComponent },
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
