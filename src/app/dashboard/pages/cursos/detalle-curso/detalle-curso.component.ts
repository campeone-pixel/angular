import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumnosService } from '../../../../core/services/alumnos.service';
import { Alumnos } from '../../../../core/models/alumnos.model';

@Component({
  selector: 'app-detalle-curso',
  templateUrl: './detalle-curso.component.html',
  styles: [
  ]
})
export class DetalleCursoComponent {

detalleAlumno:Alumnos|undefined;

constructor(private activatedRoute:ActivatedRoute,
  private alumnosService: AlumnosService){
  this.detalleAlumno = this.alumnosService.obtenerAlumnoPorID(parseInt(this.activatedRoute.snapshot.params['id']))
  
}


}
