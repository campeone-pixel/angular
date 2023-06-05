import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';

import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ContenidoComponent } from './contenido/contenido.component';

import { MatCardModule } from '@angular/material/card';

import { AdminGuard } from '../auth/guards/admin.guard';
import { InscripcionesModule } from './pages/inscripciones/inscripciones.module';

const routes: Routes = [
  {
    path: 'alumnos',
    loadChildren: () =>
      import('./pages/alumnos/alumnos-tables.module').then(
        (m) => m.AlumnosTablesModule
      ),
  },
  {
    path: 'cursos',
    canActivate: [],
    loadChildren: () =>
      import('./pages/cursos/cursos.module').then((m) => {
        return m.CursosModule;
      }),
  },
  {
    path: 'usuarios',
    canActivate: [AdminGuard],
    loadChildren: () =>
      import('./pages/usuarios/usuarios.module').then((m) => {
        return m.UsuariosModule;
      }),
  },
  {
    path: 'inscriptions',
    canActivate: [],
    loadChildren: () =>
      import('./pages/inscripciones/inscripciones.module').then((m) => {
        return m.InscripcionesModule;
      }),
  },
];

@NgModule({
  declarations: [
    ContenidoComponent,
    SidebarComponent,
    ToolbarComponent,
    DashboardComponent,
  ],

  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatTableModule,
    MatCardModule,
    MatListModule,
    MatCardModule,
    RouterModule.forChild(routes),
  ],
})
export class DashboardModule {}
