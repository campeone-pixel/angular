import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../services/alumnos.service';
import { Alumnos } from '../models';

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
    this.alumnoService.getAlumnos().subscribe((alumnos) => {
      this.listaAlumnos = alumnos;
    });
  }
}
