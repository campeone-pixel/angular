import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AlumnosTablesComponent } from './components/pages/alumnos-tables/alumnos-tables.components';
import { CardsComponent } from './components/pages/cards/cards.component';

const routes: Routes = [
  {path:"dashboard",
component:DashboardComponent,
children:[
  {
    path:"alumnos",
    component:AlumnosTablesComponent
  },
  {
    path:"cards",
    component:CardsComponent
  },
]},


{path:'dashboard',
redirectTo:'dashboard/alumnos'}


]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule {}
