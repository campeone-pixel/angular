

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

import { SharedModule } from '../../shared/shared.module';
import { ContenidoComponent } from './contenido/contenido.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidenavTogglerService } from 'src/app/core/services/sidenav-toggler.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { AlumnosTablesModule } from '../pages/alumnos-tables/alumnos-tables.module';
import { DashboardComponent } from './dashboard.component';
import { AuthModule } from 'src/app/auth/auth.module';

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

    RouterModule,
    AlumnosTablesModule,
    SharedModule,
AuthModule,
    MatListModule
  ],
})
export class DashboardModule {}
