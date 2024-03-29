import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { CursosComponent } from './cursos.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { AgregarComponent } from './abm/agregar/agregar.component';
import { EditarComponent } from './abm/editar/editar.component';
import { EliminarComponent } from './abm/eliminar/eliminar.component';

import { CursosRoutingModule } from './cursos-routing.module';

@NgModule({
  declarations: [
    CursosComponent,
    AgregarComponent,
    EliminarComponent,
    EditarComponent,
    CursosComponent,
  ],
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
    MatDatepickerModule,
    MatNativeDateModule,
    CursosRoutingModule,
  ],
  exports: [CursosComponent],
})
export class CursosModule {}
