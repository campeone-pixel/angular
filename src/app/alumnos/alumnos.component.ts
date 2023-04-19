import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../core/services/alumnos.service';
import { Alumnos } from 'src/app/core/models';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styles: [],
})
export class AlumnosComponent implements OnInit {
  listaAlumnos: Alumnos[] = [];
  cargando = false;

  constructor(private alumnoService: AlumnosService) {}
  ngOnInit(): void {
   this.cargarAlumnos()
  }

  cargarAlumnos(){
    this.cargando = true
    this.alumnoService.getAlumnos().subscribe({next:(alumnos) => {
      this.listaAlumnos = alumnos},
      error:(error)=>{alert(error)},
      complete:()=>{this.cargando = false}
    })}



  }

