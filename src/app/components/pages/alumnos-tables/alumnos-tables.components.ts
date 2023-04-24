
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Alumnos } from 'src/app/core/models';
import { EditarComponent } from './mis_dialogs/editar/editar.component';
import { EliminarComponent } from './mis_dialogs/eliminar/eliminar.component';
import { AgregarComponent } from './mis_dialogs/agregar/agregar.component';


import { AlumnosService } from 'src/app/core/services/alumnos.service';

@Component({
  selector: 'app-alumnos-tables',
  templateUrl: './alumnos-tables.component.html',
  styles: [],
})
export class AlumnosTablesComponent {
  dataSource = new MatTableDataSource();

  constructor(
    private dialogService: MatDialog,
    private alumnosService: AlumnosService
  ) {
    this.actualizarLista();
  }

  displayedColumns: string[] = ['id', 'nombre', 'mail', 'action'];

  actualizarLista(): void {
    this.alumnosService.getAlumnos().subscribe((alumnos) => {
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
