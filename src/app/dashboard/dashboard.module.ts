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

import { AuthService } from '../core/services/auth.service';
import { SidenavTogglerService } from '../core/services/sidenav-toggler.service';

import { DashboardComponent } from './dashboard.component';

import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ContenidoComponent } from './contenido/contenido.component';
// import { AlumnosTablesModule } from './pages/alumnos/alumnos-tables.module';
// import { AuthModule } from '../auth/auth.module';
import { MatCardModule } from '@angular/material/card';
// import { CursosModule } from './pages/cursos/cursos.module';
import { MatDialogModule } from '@angular/material/dialog';
import { AdminGuard } from '../auth/guards/admin.guard';



const routes: Routes = [
  {
    path: 'alumnos',
    loadChildren:()=> import("./pages/alumnos/alumnos-tables.module").then((m)=> m.AlumnosTablesModule)
  },

  {
    path: 'cursos',
    canActivate:[AdminGuard],
    loadChildren:()=> import("./pages/cursos/cursos.module").then((m)=> {

      return m.CursosModule})


  },
]

@NgModule({
  declarations: [
    ContenidoComponent,
    SidebarComponent,
    ToolbarComponent,
    DashboardComponent,
  ],
  // exports: [DashboardComponent],
  // Estos providers tienen la configuracion provideIn: "root" dentro de su decorador @Injectable
  // No hace falta colocarlos aqui
  // providers: [SidenavTogglerService, AuthService],
  imports: [
    CommonModule,

    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatTableModule,
    MatCardModule,

      /**
     * Este import no deberia estar, por que al importar AlumnosTablesModule
     * Estas trayendo todo lo que tiene dentro ese modulo, como por ejemplo las rutas hijas
     * de ese modulo, lo cual rompe las rutas de ESTE modulo (DashboardModule)
     */
    // AlumnosTablesModule,
    /**
     * Este import no deberia estar, por que al importar AuthModule
     * Estas trayendo todo lo que tiene dentro ese modulo, como por ejemplo las rutas hijas
     * de ese modulo, lo cual rompe las rutas de ESTE modulo (DashboardModule)
     */
    // AuthModule,

    /**
     * Este import no deberia estar, por que al importar CursosModule
     * Estas trayendo todo lo que tiene dentro ese modulo, como por ejemplo las rutas hijas
     * de ese modulo, lo cual rompe las rutas de ESTE modulo (DashboardModule)
     */
    // CursosModule,
    MatListModule,
    MatCardModule,
    RouterModule.forChild(routes),
  ],
})
export class DashboardModule {}
