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

  idControl = new FormControl('1', [Validators.required]);
  nombreControl = new FormControl('nombre', [
    Validators.required,
    Validators.minLength(5),
  ]);

  apellidoControl = new FormControl('apellido', [
    Validators.required,
    Validators.minLength(5),
  ]);
  mailControl = new FormControl('mail@mail.com', [
    Validators.required,
    Validators.email,
  ]);

  constructor(public formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      id: this.idControl,
      nombre: this.nombreControl,
      apellido: this.apellidoControl,
      mail: this.mailControl,
    });
  }

  onClose(): void {
    this.modalVisibleChange.emit(false);
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.listaAlumnos.push(this.registerForm.value);
      this.listaAlumnosChange.emit(this.listaAlumnos);
      this.modalVisibleChange.emit(!this.modalVisible);
    } else {
      alert('no es valido');
    }
  }
}
