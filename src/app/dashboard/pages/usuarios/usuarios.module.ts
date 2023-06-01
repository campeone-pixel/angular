import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { AuthService } from 'src/app/core/services/auth.service';
import { NotificationsService } from 'src/app/core/services/notifications.service';
import { SidenavTogglerService } from 'src/app/core/services/sidenav-toggler.service';
import { PipesModule } from 'src/app/pipes/pipes.module';

import { AgregarComponent } from './abm/agregar/agregar.component';
import { EditarComponent } from './abm/editar/editar.component';
import { EliminarComponent } from './abm/eliminar/eliminar.component';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.components';

@NgModule({
  declarations: [
    UsuariosComponent,
    AgregarComponent,
    EliminarComponent,
    EditarComponent,
    DetalleUsuarioComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,

    MatTableModule,
    MatCheckboxModule,
    PipesModule,
    UsuariosRoutingModule
  ],
  exports: [UsuariosComponent],
  providers: [SidenavTogglerService, AuthService, NotificationsService],
})
export class UsuariosModule {}
