import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ReactiveFormsModule } from '@angular/forms';
import { CardsComponent } from './cards/cards.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ButtonsAndIconsComponent } from './buttons-and-icons/buttons-and-icons.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { EliminarComponent } from './dialogs/mis_dialogs/eliminar/eliminar.component';
import { EditarComponent } from './dialogs/mis_dialogs/editar/editar.component';
import { TablesComponent } from './tables/tables.components';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AgregarComponent } from './dialogs/mis_dialogs/agregar/agregar.component';
import { PipesModule } from '../pipes/pipes.module';
import { PatronIteradorComponent } from './patron-iterador/patron-iterador.component';
import { LoginComponent } from './dialogs/mis_dialogs/login/login.component';
import { SidenavTogglerService } from '../core/services/sidenav-toggler.service';
import { AuthService } from '../core/services/auth.service';
import { NotificationsService } from '../core/services/notifications.service';
import { RegisterComponent } from './dialogs/mis_dialogs/register/register.component';
@NgModule({
  declarations: [
    
    CardsComponent,
    ButtonsAndIconsComponent,
    EliminarComponent,
    EditarComponent,
    TablesComponent,
    AgregarComponent,
    PatronIteradorComponent,
    LoginComponent,
    RegisterComponent
  ],
  exports: [
    
    CardsComponent,
    ButtonsAndIconsComponent,
    TablesComponent,
    PatronIteradorComponent,
    LoginComponent,
    RegisterComponent
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
    MatIconModule,
    MatTableModule,
    MatCheckboxModule,
    PipesModule,
  ],
  providers: [SidenavTogglerService, AuthService,NotificationsService],
})
export class SharedModule {}
