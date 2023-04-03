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

  @Input() listaAlumnos: Alumnos[] = [];

  @Output()
  listaAlumnosChange = new EventEmitter<Alumnos[]>();

  registerForm: FormGroup = new FormGroup({});

  constructor(public formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      id: new FormControl('0', [
        Validators.required,
        Validators.min(1),
        Validators.max(20),
      ]),
      nombre: new FormControl('nombre', [
        Validators.required,
        Validators.min(5),
        Validators.max(20),
      ]),
      apellido: new FormControl('apellido', [
        Validators.required,
        Validators.min(5),
        Validators.max(20),
      ]),
      email: new FormControl('mail@mail.com', [
        Validators.email,
        Validators.required,
      ]),
    });
  }

  onClose(): void {
    this.modalVisibleChange.emit(false);
  }

  onSubmit(): void {
    this.listaAlumnos.push(this.registerForm.value);
    this.listaAlumnosChange.emit(this.listaAlumnos);
  }
}
