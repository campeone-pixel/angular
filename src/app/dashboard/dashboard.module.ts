import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';


import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from '../core/services/auth.service';
import { SidenavTogglerService } from '../core/services/sidenav-toggler.service';

import { DashboardComponent } from './dashboard.component';

import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { AlumnosTablesModule } from './pages/alumnos/alumnos-tables.module';
import { AuthModule } from '../auth/auth.module';
import { MatCardModule } from '@angular/material/card';
import { CursosModule } from './pages/cursos/cursos.module';
import { CursosComponent } from './pages/cursos/cursos.component';
import { DetalleCursoComponent } from './pages/cursos/detalle-curso/detalle-curso.component';



@NgModule({
  declarations: [
    ContenidoComponent,
    SidebarComponent,
    ToolbarComponent,
    DashboardComponent,
  ],
  exports: [DashboardComponent],
  providers: [SidenavTogglerService, AuthService],
  imports: [
    CommonModule,

    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatTableModule,
    MatCardModule,

    AlumnosTablesModule,
    AuthModule,
    CursosModule,
    MatListModule,
    MatCardModule,
    RouterModule.forChild([
      {
        path: 'alumnos',
        loadChildren:()=> import("./pages/alumnos/alumnos-tables.module").then((m)=> m.AlumnosTablesModule)
      },

      {
        path: 'cursos',

        children: [
          { path: '', component: CursosComponent },
          { path: ':id', component: DetalleCursoComponent },
        ],
      },
    ]),
  ],
})
export class DashboardModule {}
