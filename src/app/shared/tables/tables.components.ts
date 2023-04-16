import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Alumnos } from 'src/app/models';
import { EditarComponent } from '../dialogs/mis_dialogs/editar/editar.component';
import { EliminarComponent } from '../dialogs/mis_dialogs/eliminar/eliminar.component';
import { AgregarComponent } from '../dialogs/mis_dialogs/agregar/agregar.component';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styles: [],
})
export class TablesComponent implements OnInit {
  @Input() listaAlumnos: Alumnos[] = [];
  @Output()
  listaAlumnosChange = new EventEmitter<Alumnos[]>();

  @ViewChild(MatTable) myTable!: MatTable<any>;



  dataSource =new MatTableDataSource( this.listaAlumnos);

  constructor(private dialogService: MatDialog) {}

  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'mail', 'action'];

  editarAlumno(alumno: Alumnos): void {
    const dialog = this.dialogService.open(EditarComponent, { data: alumno });

    dialog.afterClosed().subscribe((registerForm) => {
      const index = this.listaAlumnos.findIndex(
        (alumno) => alumno.id === registerForm.value.id
      );
      console.log(alumno)

      this.listaAlumnos[index] = new Alumnos(
        registerForm.value.id,
        registerForm.value.nombre,
        registerForm.value.apellido,
        registerForm.value.mail,
        registerForm.value.mejorAlumno,
        registerForm.value.eliminado
      );
      this.listaAlumnos = [...this.listaAlumnos];
      this.listaAlumnosChange.emit(this.listaAlumnos);
      this.dataSource =new MatTableDataSource( this.listaAlumnos);
    });
  }

  ngOnInit(): void {
    this.dataSource =new MatTableDataSource( this.listaAlumnos);
  }

  eliminarAlumno(alumno: Alumnos): void {
    const dialog = this.dialogService.open(EliminarComponent, { data: alumno });
    dialog.afterClosed().subscribe((alumnoBorrar) => {
      const index = this.listaAlumnos.findIndex(
        (alumno) => alumno.id === alumnoBorrar.id
      );
      this.listaAlumnos[index].eliminado = true;

      this.listaAlumnos = this.listaAlumnos.filter((e) => {
        return !e.eliminado;
      });
      this.dataSource =new MatTableDataSource( this.listaAlumnos);
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
        this.listaAlumnos = [...this.listaAlumnos, nuevoAlumno];
        this.listaAlumnosChange.emit(this.listaAlumnos);
        this.dataSource =new MatTableDataSource( this.listaAlumnos);
      } else {
        alert('no es valido');
      }
    });
  }

  applyFilter(event: Event) {
    const inputValue = (event.target as HTMLInputElement)?.value;
    this.dataSource.filter =  inputValue?.trim()?.toLocaleLowerCase();
  }
}
