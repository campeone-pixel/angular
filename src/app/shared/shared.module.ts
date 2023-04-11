import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorComponent } from './form-error/form-error.component';
import { ModalFormComponent } from './modalform/modalForm.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FormErrorComponent,ModalFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    FormErrorComponent,ModalFormComponent
  ]
})
export class SharedModule { }
