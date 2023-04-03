import { Component, Input, Output } from '@angular/core';
import { Alumnos } from 'src/app/models';
@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styles: [],
})
export class ContenidoComponent {
  modalVisible: boolean = false;

  @Output()
  modalVisibleChange?: boolean;

  listaAlumnos: Array<Alumnos> = [
    new Alumnos(
      1,
      'paula',
      'paula',
      'paula@mail.com',

      true
    ),
    new Alumnos(
      2,
      'matias',
      'poses',
      'poses@mail.com',

      false
    ),

    new Alumnos(
      3,
      'carlos',
      'pero',
      'pero@mail.com',

      false
    ),
    new Alumnos(
      4,
      'miguel',
      'miguel',
      'miguel@mail.com',

      true
    ),
    new Alumnos(
      5,
      'mirta',
      'perez',
      'perez@mail.com',

      true
    ),
    new Alumnos(
      6,
      'gabriel',
      'gabe',
      'gabe@mail.com',

      false
    ),
    new Alumnos(
      7,
      'lisan',
      'lisna',
      'lisan@mail.com',

      true
    ),
  ];

  @Output()
  listaAlumnosChange?: Alumnos[];

  agregarAlumno(): void {
    this.modalVisible = !this.modalVisible;
  }
}
