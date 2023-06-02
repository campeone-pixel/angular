import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios.components';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';

const routes: Routes = [
  { path: '', component: UsuariosComponent },
  { path: ':id', component: DetalleUsuarioComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosRoutingModule {}
