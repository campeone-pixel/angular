import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumnosService } from '../../../../core/services/alumnos.service';

import { Cursos } from 'src/app/core/models/cursos.models';
import { CursosService } from 'src/app/core/services/cursos.service';

@Component({
  selector: 'app-detalle-cursos',
  templateUrl: './detalle-cursos.component.html',
  styles: [
  ]
})
export class DetalleCursoComponent {

detalleCurso:Cursos|undefined;

constructor(private activatedRoute:ActivatedRoute,
  private cursoService: CursosService){
  this.cursoService.obtenerCursoPorID(parseInt(this.activatedRoute.snapshot.params['id'])).subscribe((curso)=>{
    this.detalleCurso = curso
  })
  
}


}
