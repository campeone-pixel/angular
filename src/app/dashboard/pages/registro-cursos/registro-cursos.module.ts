import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroCursosComponent } from './registro-cursos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { PipesModule } from 'src/app/pipes/pipes.module';
import {MatSelectModule} from '@angular/material/select';
import { RegistroCursosRoutingModule } from './registro-cursos-routing.module';


@NgModule({
  declarations: [RegistroCursosComponent],
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
    RegistroCursosRoutingModule,
    MatSelectModule
  ],
  exports: [RegistroCursosComponent],
})
export class RegistroCursosModule {}
