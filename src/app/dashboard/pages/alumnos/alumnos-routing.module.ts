import { Component, NgModule } from '@angular/core';
import { DetalleAlumnoComponent } from '../alumnos/detalle-alumno/detalle-alumno.component';
import { AlumnosTablesComponent } from '../alumnos/alumnos-tables.components';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // AQUI EL PATH debe ser vacio '' porque el /alumnos ya lo definiste un nivel superior
  // mas especificamente en las rutas del DashboardModule
  // Por lo tanto en este punto la url armada seria /dashboard/alumnos ...
  { path: '', component: AlumnosTablesComponent },
  { path: ':id', component: DetalleAlumnoComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumnosRoutingModule {}
