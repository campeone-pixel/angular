import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Alumnos } from 'src/app/models';
import { EditarComponent } from '../dialogs/mis_dialogs/editar/editar.component';
import { EliminarComponent } from '../dialogs/mis_dialogs/eliminar/eliminar.component';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styles: [],
})
export class TablesComponent {
  @Input()
  listaAlumnos: Alumnos[] = [];

  constructor(private dialogService: MatDialog) {}

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
