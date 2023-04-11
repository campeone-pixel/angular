import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorComponent } from './form-error/form-error.component';
import { ModalFormComponent } from './modalform/modalForm.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardsComponent } from './cards/cards.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { ButtonsAndIconsComponent } from './buttons-and-icons/buttons-and-icons.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [FormErrorComponent,ModalFormComponent,CardsComponent, ButtonsAndIconsComponent,],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  exports:[
    FormErrorComponent,ModalFormComponent,CardsComponent,ButtonsAndIconsComponent
  ]
})
export class SharedModule { }
