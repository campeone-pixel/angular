import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumnosService } from '../../../../core/services/alumnos.service';
import { Alumnos } from '../../../../core/models/alumnos.model';

@Component({
  selector: 'app-detalle-alumno',
  templateUrl: './detalle-alumno.component.html',
  styles: [],
})
export class DetalleAlumnoComponent {
  detalleAlumno: Alumnos | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private alumnosService: AlumnosService
  ) {
    this.alumnosService.obtenerAlumnoPorID(
      parseInt(this.activatedRoute.snapshot.params['id'])
    ).subscribe(
      (alumno)=>{
        this.detalleAlumno = alumno
      }
    );
  }
}
