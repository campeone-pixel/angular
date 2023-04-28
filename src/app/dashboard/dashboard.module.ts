import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatTableModule,
    MatCardModule,
    RouterModule,
    AlumnosTablesModule,
    AuthModule,
    CursosModule,
    MatListModule,
    MatCardModule,
  ],
})
export class DashboardModule {}
