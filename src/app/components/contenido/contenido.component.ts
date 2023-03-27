import { Component } from '@angular/core';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styles: [
  ]
})
export class ContenidoComponent {

estaCargando = true
usuarios: Array<{id: number, nombre: string,apellido: string, mail: string  ,mejorAlumno:boolean,nacimiento:Date}> = [
  {
    id:1,
    nombre:'paula',
    apellido:'paula',
    mail:'paula@mail.com',
    
    mejorAlumno:true,
    nacimiento:new Date('1985-01-03')
  },
  {
    id:1,
    nombre:'matias',
    apellido:'poses',
    mail:'poses@mail.com',
    
    mejorAlumno:false,
    nacimiento:new Date('1991-01-03')
  },
  
  {
    id:1,
    nombre:'carlos',
    apellido:'pero',
    mail:'pero@mail.com',
    
    mejorAlumno:false,
    nacimiento:new Date('1994-01-03')
  },
  {
    id:1,
    nombre:'miguel',
    apellido:'miguel',
    mail:'miguel@mail.com',
    
    mejorAlumno:true,
    nacimiento:new Date('1980-01-03')
  },
  {
    id:1,
    nombre:'mirta',
    apellido:'perez',
    mail:'perez@mail.com',
    
    mejorAlumno:true,
    nacimiento:new Date('1964-01-03')
  },
  {
    id:1,
    nombre:'gabriel',
    apellido:'gabe',
    mail:'gabe@mail.com',
    
    mejorAlumno:false,
    nacimiento:new Date('2000-01-03')
  },
  {
    id:1,
    nombre:'lisan',
    apellido:'lisna',
    mail:'lisan@mail.com',
    
    mejorAlumno:true,
    nacimiento:new Date('1994-01-03')
  }
];

}
