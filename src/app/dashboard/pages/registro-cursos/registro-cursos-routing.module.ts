import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { RegistroCursosComponent } from './registro-cursos.component';




const routes: Routes = [
  { path: '', component: RegistroCursosComponent },
  
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
 
  ],
  exports:[RouterModule]
})
export class RegistroCursosRoutingModule { }
