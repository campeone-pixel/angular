import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/core/models';

import { Router } from '@angular/router';
import { AgregarComponent } from './abm/agregar/agregar.component';
import { EditarComponent } from './abm/editar/editar.component';
import { EliminarComponent } from './abm/eliminar/eliminar.component';
import { UsuariosService } from 'src/app/core/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [],
})
export class UsuariosComponent {
  dataSource = new MatTableDataSource();

  constructor(
    private dialogService: MatDialog,
    private userService: UsuariosService,
    private router: Router
  ) {
    this.actualizarLista();
    console.log(this.dataSource);
  }

  displayedColumns: string[] = [
    'id',
    'nombre',
    'mail',
    'password',
    'token',
    'role',
    'actions',
  ];

  actualizarLista(): void {
    this.userService.getUsuarios().subscribe((usuarios) => {
      this.dataSource.data = usuarios;
    });
  }

  editar(usuario: User): void {
    const dialog = this.dialogService.open(EditarComponent, { data: usuario });

    dialog.afterClosed().subscribe(() => {
      this.actualizarLista();
    });
  }

  eliminar(usuario: User): void {
    const dialog = this.dialogService.open(EliminarComponent, {
      data: usuario,
    });
    dialog.afterClosed().subscribe(() => {
      this.actualizarLista();
    });
  }

  agregar(): void {
    const dialog = this.dialogService.open(AgregarComponent);
    dialog.afterClosed().subscribe(() => {
      this.actualizarLista();
    });
  }

  ver(id: number): void {
    this;
    this.router.navigate(['dashboard', 'usuarios', id], {
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
