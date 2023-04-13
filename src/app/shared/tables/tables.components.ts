import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Alumnos } from 'src/app/models';
import { EditarComponent } from '../dialogs/mis_dialogs/editar/editar.component';
import { EliminarComponent } from '../dialogs/mis_dialogs/eliminar/eliminar.component';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styles: [],
})
export class TablesComponent implements OnInit {
  @Input() listaAlumnos: Alumnos[] = [];
  @Output()
  listaAlumnosChange = new EventEmitter<Alumnos[]>();

  constructor(private dialogService: MatDialog) {}

  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'mail', 'action'];

  editarAlumno(alumno: Alumnos): void {
    const dialog = this.dialogService.open(EditarComponent, { data: alumno });

    dialog.afterClosed().subscribe((data) => {
      const index = this.listaAlumnos.findIndex(
        (alumno) => alumno.id === data.id
      );
      this.listaAlumnos[index] = data;
      this.listaAlumnosChange.emit(this.listaAlumnos);
      console.log(this.listaAlumnosChange.emit(this.listaAlumnos));
    });
  }

  ngOnInit(): void {
    console.log(this.listaAlumnos);
    console.log(this.listaAlumnosChange.emit(this.listaAlumnos));
  }

  eliminarAlumno(alumno: Alumnos): void {
    const dialog = this.dialogService.open(EliminarComponent, { data: alumno });
    dialog.afterClosed().subscribe((data) => {
      const index = this.listaAlumnos.findIndex(
        (alumno) => alumno.id === data.id
      );
      this.listaAlumnos[index] = { ...data, eliminado: true };
      this.listaAlumnosChange.emit(this.listaAlumnos);
      console.log(this.listaAlumnosChange.emit(this.listaAlumnos));
    });
  }
}
