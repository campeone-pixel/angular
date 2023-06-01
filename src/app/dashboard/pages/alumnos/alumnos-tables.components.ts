import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Alumnos, User } from 'src/app/core/models';

import { AlumnosService } from 'src/app/core/services/alumnos.service';
import { Router } from '@angular/router';
import { AgregarComponent } from './abm/agregar/agregar.component';
import { EditarComponent } from './abm/editar/editar.component';
import { EliminarComponent } from './abm/eliminar/eliminar.component';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-alumnos-tables',
  templateUrl: './alumnos-tables.component.html',
  styles: [],
})
export class AlumnosTablesComponent implements OnInit {
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'nombre', 'mail', 'action'];
  userAuth: User | null = null;
  public mostrarBotones: boolean = false;

  constructor(
    private dialogService: MatDialog,
    private alumnosService: AlumnosService,
    private authService: AuthService,
    private router: Router
  ) {
    this.actualizarLista();
  }
  ngOnInit(): void {
    this.authService.esAdmin().subscribe((esAdmin) => {
      this.mostrarBotones = esAdmin;
    });
  }

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

  verAlumno(id: number): void {
    this;
    this.router.navigate(['dashboard', 'alumnos', id], {
      queryParams: {
        page: 1,
        limit: 50,
      },
    });
  }

  applyFilter(event: Event) {
    const inputValue = (event.target as HTMLInputElement)?.value;
    this.dataSource.filter = inputValue?.trim()?.toLocaleLowerCase();
  }
}
