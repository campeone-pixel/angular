import { Component, OnInit, Output,OnChanges,SimpleChanges, } from '@angular/core';

import { Alumnos } from 'src/app/core/models';
import { AuthService } from '../../../core/services/auth.service';
import { AlumnosService } from 'src/app/core/services/alumnos.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styles: [],
})
export class ContenidoComponent implements OnChanges  {
  ngOnChanges(changes: SimpleChanges): void {
    
  }
  listaAlumnos: Observable<Alumnos[]>;
  constructor(private authService:AuthService,private alumnosService: AlumnosService){
    this.listaAlumnos = alumnosService.getAlumnos();
  }










}
