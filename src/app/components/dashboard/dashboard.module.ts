import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { BloqueRedondeadoModule } from '../../directives/bloque-redondeado/bloque-redondeado.module';

import { MatTableModule } from '@angular/material/table';
import { FontSizeModule } from 'src/app/directives/font-size/font-size.module';


import { SharedModule } from '../../shared/shared.module';
import { ContenidoComponent } from './contenido/contenido.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidenavTogglerService } from 'src/app/core/services/sidenav-toggler.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { AlumnosTablesModule } from '../pages/alumnos-tables/alumnos-tables.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';


@NgModule({
    declarations: [ContenidoComponent, SidebarComponent, ToolbarComponent, DashboardComponent],
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
        FontSizeModule,
        RouterModule,
        AlumnosTablesModule,
        SharedModule,
        BloqueRedondeadoModule,
        
    ],

})
export class DashboardModule {}
