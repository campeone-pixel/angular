import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorComponent } from './form-error/form-error.component';
import { ModalFormComponent } from './modalform/modalForm.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardsComponent } from './cards/cards.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ButtonsAndIconsComponent } from './buttons-and-icons/buttons-and-icons.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { EliminarComponent } from './dialogs/mis_dialogs/eliminar/eliminar.component';
import { EditarComponent } from './dialogs/mis_dialogs/editar/editar.component';
@NgModule({
  declarations: [
    FormErrorComponent,
    ModalFormComponent,
    CardsComponent,
    ButtonsAndIconsComponent,
    
    EliminarComponent,
    EditarComponent,
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
    MatIconModule
  ],
  exports: [
    FormErrorComponent,
    ModalFormComponent,
    CardsComponent,
    ButtonsAndIconsComponent,
    
  ],
})
export class SharedModule {}
