import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { DetalleCursoComponent } from './detalle-curso/detalle-curso.component';
import { CursosComponent } from './cursos.component';


const routes: Routes = [
  { path: '', component: CursosComponent },
  { path: ':id', component: DetalleCursoComponent },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
 
  ],
  exports:[RouterModule]
})
export class CursosRoutingModule { }
