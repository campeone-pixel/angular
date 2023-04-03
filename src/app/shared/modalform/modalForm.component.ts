import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormArray,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { Alumnos } from 'src/app/models/alumnos.model';

@Component({
  selector: 'app-modalForm',
  templateUrl: './modalForm.component.html',
  styles: [],
})
export class ModalFormComponent {
  @Input()
  modalVisible: boolean = false;

  @Output()
  modalVisibleChange = new EventEmitter<boolean>();

  registerForm: FormGroup = new FormGroup({});

  constructor(public formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      id: new FormControl('0'),
      nombre: new FormControl('nombre'),
      apellido: new FormControl('apellido'),
      email: new FormControl('mail@mail.com'),
    });
  }

  onClose(): void {
    this.modalVisibleChange.emit(false);
  }
}
