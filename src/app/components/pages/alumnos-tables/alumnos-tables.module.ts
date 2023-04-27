import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './mis_dialogs/agregar/agregar.component';
import { EliminarComponent } from './mis_dialogs/eliminar/eliminar.component';
import { EditarComponent } from './mis_dialogs/editar/editar.component';
import { SidenavTogglerService } from 'src/app/core/services/sidenav-toggler.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationsService } from 'src/app/core/services/notifications.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { AlumnosTablesComponent } from './alumnos-tables.components';
import { DetalleAlumnoComponent } from './detalle-alumno/detalle-alumno.component';




@NgModule({
  declarations: [AlumnosTablesComponent,AgregarComponent,EliminarComponent,EditarComponent, DetalleAlumnoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatTableModule,
    MatCheckboxModule,
    PipesModule,
  ],
  exports:[
    AlumnosTablesComponent
  ],
  providers: [SidenavTogglerService, AuthService,NotificationsService],
})
export class AlumnosTablesModule { }
