import { Component, NgModule } from '@angular/core';
import { DetalleAlumnoComponent } from '../alumnos/detalle-alumno/detalle-alumno.component';
import { AlumnosTablesComponent } from '../alumnos/alumnos-tables.components';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'alumnos', component: AlumnosTablesComponent },
  { path: ':id', component: DetalleAlumnoComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumnosRoutingModule {}
