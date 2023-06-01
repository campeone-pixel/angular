import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { CursosService } from 'src/app/core/services/cursos.service';
import { AgregarComponent } from './abm/agregar/agregar.component';
import { EditarComponent } from './abm/editar/editar.component';
import { EliminarComponent } from './abm/eliminar/eliminar.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { Cursos } from 'src/app/core/models/cursos.models';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from 'src/app/core/models';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styles: [],
})
export class CursosComponent implements OnDestroy {
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = [
    'id',
    'nombre',
    'fecha_inicio',
    'fecha_fin',
    'action',
  ];
  suscripcion: Subscription | undefined;
  userAuth: User | null = null;
  public mostrarBotones: boolean = false;

  constructor(
    private cursosService: CursosService,
    private dialogService: MatDialog,
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

  ngOnDestroy(): void {
    this.suscripcion?.unsubscribe();
  }

  actualizarLista(): void {
    this.cursosService.getCursos().subscribe((cursos) => {
      this.dataSource.data = cursos;
    });
  }

  editarCurso(curso: Cursos): void {
    const dialog = this.dialogService.open(EditarComponent, { data: curso });

    dialog.afterClosed().subscribe(() => {
      this.actualizarLista();
    });
  }

  eliminarCurso(curso: Cursos): void {
    const dialog = this.dialogService.open(EliminarComponent, { data: curso });
    dialog.afterClosed().subscribe(() => {
      this.actualizarLista();
    });
  }

  agregarCurso(): void {
    const dialog = this.dialogService.open(AgregarComponent);
    dialog.afterClosed().subscribe(() => {
      this.actualizarLista();
    });
  }

  verCurso(id: number): void {
    this.router.navigate(['dashboard', 'cursos', id], {
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
