import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';


import { CursosComponent } from './cursos.component';
import { DetalleCursoComponent } from './detalle-curso/detalle-cursos.component';


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
