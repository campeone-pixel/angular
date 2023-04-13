import { Component, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Alumnos } from 'src/app/models';

import { EditarComponent } from 'src/app/shared/dialogs/mis_dialogs/editar/editar.component';
import { EliminarComponent } from 'src/app/shared/dialogs/mis_dialogs/eliminar/eliminar.component';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styles: [],
})
export class ContenidoComponent {
  modalVisible: boolean = false;

  constructor(private dialogService: MatDialog) {}

  @Output()
  modalVisibleChange?: boolean;

  listaAlumnos: Array<Alumnos> = [
    new Alumnos(
      1,
      'paula',
      'paula',
      'paula@mail.com',

      true,
      false
    ),
    new Alumnos(
      2,
      'matias',
      'poses',
      'poses@mail.com',

      false,
      false
    ),

    new Alumnos(
      3,
      'carlos',
      'pero',
      'pero@mail.com',

      false,
      false
    ),
    new Alumnos(
      4,
      'miguel',
      'miguel',
      'miguel@mail.com',

      true,
      false
    ),
    new Alumnos(
      5,
      'mirta',
      'perez',
      'perez@mail.com',

      true,
      false
    ),
    new Alumnos(
      6,
      'gabriel',
      'gabe',
      'gabe@mail.com',

      false,
      false
    ),
    new Alumnos(
      7,
      'lisan',
      'lisna',
      'lisan@mail.com',

      true,
      false
    ),
  ];

  @Output()
  listaAlumnosChange?: Alumnos[];

  agregarAlumno(): void {
    this.modalVisible = !this.modalVisible;
  }

  editarAlumno(alumno: Alumnos): void {
    const dialog = this.dialogService.open(EditarComponent, { data: alumno });

    dialog.afterClosed().subscribe((data) => {
      const index = this.listaAlumnos.findIndex(
        (alumno) => alumno.id === data.id
      );
      this.listaAlumnos[index] = data;
    });
  }

  eliminarAlumno(alumno: Alumnos): void {
    const dialog = this.dialogService.open(EliminarComponent, { data: alumno });
    dialog.afterClosed().subscribe((data) => {
      const index = this.listaAlumnos.findIndex(
        (alumno) => alumno.id === data.id
      );
      this.listaAlumnos[index] = { ...data, eliminado: true };
    });
  }
}
