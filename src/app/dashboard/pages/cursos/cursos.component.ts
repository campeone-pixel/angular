import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Alumnos } from 'src/app/core/models';
import { CursosService } from 'src/app/core/services/cursos.service';
import { AgregarComponent } from './abm/agregar/agregar.component';
import { EditarComponent } from './abm/editar/editar.component';
import { EliminarComponent } from './abm/eliminar/eliminar.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlumnosService } from 'src/app/core/services/alumnos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styles: []
})
export class CursosComponent implements OnInit {
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'nombre', 'fecha_inicio', 'fecha'];

  constructor(private cursosService: CursosService,  private dialogService: MatDialog,
    private alumnosService: AlumnosService,
    private router:Router){

  }
  ngOnInit(): void {
    this.cursosService.getCursos().subscribe((e)=>{

      console.log(e)
    })
  }

  actualizarLista(): void {
    this.cursosService.getCursos().subscribe((cursos) => {
      this.dataSource.data = cursos;
    });
  }

  editarCurso(alumno: Alumnos): void {

   
    const dialog = this.dialogService.open(EditarComponent, { data: alumno });

    dialog.afterClosed().subscribe(() => {
      this.actualizarLista();
    });
  }

  eliminarCurso(alumno: Alumnos): void {
    
    const dialog = this.dialogService.open(EliminarComponent, { data: alumno });
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

  verCurso(id:number): void {
  this
   this.router.navigate(['dashboard','alumnos',id],{
    queryParams:{
      page: 1,
      limit: 50
    }
   })
  }


  applyFilter(event: Event) {
    const inputValue = (event.target as HTMLInputElement)?.value;
    this.dataSource.filter = inputValue?.trim()?.toLocaleLowerCase();
  }
}
