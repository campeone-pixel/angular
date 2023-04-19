import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { BloqueRedondeadoModule } from '../../directives/bloque-redondeado/bloque-redondeado.module';


import {SharedModule} from "../../shared/shared.module"
import {MatTableModule} from '@angular/material/table';
import { FontSizeModule } from 'src/app/directives/font-size/font-size.module';
import { ProfesoresModule } from '../../profesores/profesores.module';
import { AlumnosModule } from '../../alumnos/alumnos.module';
import { ContenidoComponent } from './contenido/contenido.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidenavTogglerService } from 'src/app/core/services/sidenav-toggler.service';

@NgModule({
  declarations: [ContenidoComponent, SidebarComponent, ToolbarComponent],
  imports: [
    CommonModule,
    SharedModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    BloqueRedondeadoModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatTableModule,
    FontSizeModule,
    ProfesoresModule,
    AlumnosModule
    
  ],
  exports: [ContenidoComponent, SidebarComponent, ToolbarComponent],
  providers:[
    SidenavTogglerService
  ]
})
export class DashboardModule {}
