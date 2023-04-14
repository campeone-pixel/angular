import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Alumnos } from 'src/app/models';
import { EditarComponent } from '../dialogs/mis_dialogs/editar/editar.component';
import { EliminarComponent } from '../dialogs/mis_dialogs/eliminar/eliminar.component';
import { AgregarComponent } from '../dialogs/mis_dialogs/agregar/agregar.component';

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
     
   
      this.listaAlumnos[index] = new Alumnos(
        data.id,
        data.nombre,
        data.apellido,
        data.mail,
        data.mejorAlumno,
        data.eliminado
      );
      this.listaAlumnos = [...this.listaAlumnos]
      this.listaAlumnosChange.emit(this.listaAlumnos);
    });
  }

  ngOnInit(): void {
    
  }

  eliminarAlumno(alumno: Alumnos): void {
    
    const dialog = this.dialogService.open(EliminarComponent, { data: alumno });
    dialog.afterClosed().subscribe((data) => {
      const index = this.listaAlumnos.findIndex(
        (alumno) => alumno.id === data.id
      );
      this.listaAlumnos[index] = new Alumnos(
        data.id,
        data.nombre,
        data.apellido,
        data.mail,
        data.mejorAlumno,
        true
      );

      this.listaAlumnos = [...this.listaAlumnos]
      this.listaAlumnosChange.emit(this.listaAlumnos);
    });
  }

  agregarAlumno(): void {
    
    const dialog = this.dialogService.open(AgregarComponent);
    dialog.afterClosed().subscribe((registerForm) => {
    if(registerForm.valid){

      const nuevoAlumno = new Alumnos(
        this.listaAlumnos[this.listaAlumnos.length - 1].id + 1,
        registerForm.value.nombre,
        registerForm.value.apellido,
        registerForm.value.mail,
        registerForm.value.mejorAlumno,
        false
        );
        this.listaAlumnos = [...this.listaAlumnos,nuevoAlumno]
        this.listaAlumnosChange.emit(this.listaAlumnos);
      }else{
        alert("no es valido")
      }

    });
  }
}
