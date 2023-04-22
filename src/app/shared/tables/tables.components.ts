import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Alumnos } from 'src/app/core/models';
import { EditarComponent } from '../dialogs/mis_dialogs/editar/editar.component';
import { EliminarComponent } from '../dialogs/mis_dialogs/eliminar/eliminar.component';
import { AgregarComponent } from '../dialogs/mis_dialogs/agregar/agregar.component';
import { MatTableDataSource } from '@angular/material/table';


import { AlumnosService } from 'src/app/core/services/alumnos.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styles: [],
})
export class TablesComponent {
  private listaAlumnos: any[] = [];

  dataSource = new MatTableDataSource(this.listaAlumnos);

  constructor(
    private dialogService: MatDialog,
   
    private alumnosService: AlumnosService
  ) {
    this.actualizarLista();
  }

  displayedColumns: string[] = ['id', 'nombre', 'mail', 'action'];

  actualizarLista(): void {
    this.alumnosService.getAlumnos().subscribe((alumnos) => {
      this.listaAlumnos = alumnos;
      this.dataSource.data = alumnos;
    });
  }

  editarAlumno(alumno: Alumnos): void {
    const dialog = this.dialogService.open(EditarComponent, { data: alumno });

    dialog.afterClosed().subscribe(() => {
      this.actualizarLista();
    });
  }

  eliminarAlumno(alumno: Alumnos): void {
    const dialog = this.dialogService.open(EliminarComponent, { data: alumno });
    dialog.afterClosed().subscribe(() => {
      this.actualizarLista();
    });
  }

  agregarAlumno(): void {
    const dialog = this.dialogService.open(AgregarComponent);
    dialog.afterClosed().subscribe(() => {
      this.actualizarLista();
    });
  }

  applyFilter(event: Event) {
    const inputValue = (event.target as HTMLInputElement)?.value;
    this.dataSource.filter = inputValue?.trim()?.toLocaleLowerCase();
  }
}
