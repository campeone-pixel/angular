import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormGroup } from '@angular/forms';
import { Alumnos } from 'src/app/models/alumnos.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styles: [
  ]
})
export class ModalComponent {


  @Input()
  listaAlumnos:Alumnos[]=[]

  registerForm:FormGroup;

  constructor( public formBuilder:FormBuilder){
    this.registerForm=this.formBuilder.group({

    })
  }

  @Input()

  
  @Input()
  modalVisible:boolean= false

  @Output()
  modalVisibleChange = new EventEmitter<boolean>()

  @Output()
  listaAlumnosChange= new EventEmitter<Alumnos[]>;

  onClose():void{
    this.modalVisibleChange.emit(false)
   
  }




}
