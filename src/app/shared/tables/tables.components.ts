import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Alumnos } from 'src/app/core/models';
import { EditarComponent } from '../dialogs/mis_dialogs/editar/editar.component';
import { EliminarComponent } from '../dialogs/mis_dialogs/eliminar/eliminar.component';
import { AgregarComponent } from '../dialogs/mis_dialogs/agregar/agregar.component';
import {  MatTableDataSource } from '@angular/material/table';
import { NotificationsService } from '../../core/services/notifications.service';

import { AlumnosService } from 'src/app/core/services/alumnos.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styles: [],
})
export class TablesComponent  {
  private listaAlumnos: any[] = [];

  dataSource = new MatTableDataSource(this.listaAlumnos);

  constructor(
    private dialogService: MatDialog,
    private notification: NotificationsService,
    private alumnosService: AlumnosService
  ) {this.alumnosService.getAlumnos().subscribe(alumnos => {
    this.listaAlumnos = alumnos
    this.dataSource.data=alumnos});}

  displayedColumns: string[] = ['id', 'nombre', 'mail', 'action'];

  
   
  editarAlumno(alumno: Alumnos): void {
    const dialog = this.dialogService.open(EditarComponent, { data: alumno });

    dialog.afterClosed().subscribe((registerForm) => {
      const index = this.listaAlumnos.findIndex(
        (alumno) => alumno.id === registerForm.value.id
      );
      console.log(alumno);

      const updatedAlumno = new Alumnos(
        registerForm.value.id,
        registerForm.value.nombre,
        registerForm.value.apellido,
        registerForm.value.mail,
        registerForm.value.mejorAlumno,
        registerForm.value.eliminado
      );

      this.alumnosService
        .update(index, updatedAlumno)
        .subscribe((alumnos) => (this.listaAlumnos = alumnos));

      this.dataSource = new MatTableDataSource(this.listaAlumnos);
    });
  }

  eliminarAlumno(alumno: Alumnos): void {
    const dialog = this.dialogService.open(EliminarComponent, { data: alumno });
    dialog.afterClosed().subscribe((alumnoBorrar) => {
      const index = this.listaAlumnos.findIndex(
        (alumno) => alumno.id === alumnoBorrar.id
      );
      this.listaAlumnos[index].eliminado = true;

      this.alumnosService
        .delete(index)
        .subscribe((alumnos) => (this.listaAlumnos = alumnos));
      this.dataSource = new MatTableDataSource(this.listaAlumnos);
    });
  }

  agregarAlumno(): void {
    const dialog = this.dialogService.open(AgregarComponent);
    dialog.afterClosed().subscribe((registerForm) => {
      if (registerForm.valid) {
        console.log(registerForm.valid);
        const nuevoAlumno = new Alumnos(
          this.listaAlumnos[this.listaAlumnos.length - 1].id + 1,
          registerForm.value.nombre,
          registerForm.value.apellido,
          registerForm.value.mail,
          registerForm.value.mejorAlumno,
          false
        );
        this.alumnosService
          .add(nuevoAlumno)
          .subscribe((alumnos) => (this.listaAlumnos = alumnos));
        this.dataSource = new MatTableDataSource(this.listaAlumnos);
        this.notification.mostrarMensaje('el usuario se creo correctamente');
      } else {
        alert('no es valido');
      }
    });
  }

  applyFilter(event: Event) {
    const inputValue = (event.target as HTMLInputElement)?.value;
    this.dataSource.filter = inputValue?.trim()?.toLocaleLowerCase();
  }
}
