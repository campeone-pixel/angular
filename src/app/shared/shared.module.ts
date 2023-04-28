import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ButtonsAndIconsComponent } from './buttons-and-icons/buttons-and-icons.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { PipesModule } from '../pipes/pipes.module';
import { PatronIteradorComponent } from './patron-iterador/patron-iterador.component';

import { SidenavTogglerService } from '../core/services/sidenav-toggler.service';
import { AuthService } from '../core/services/auth.service';
import { NotificationsService } from '../core/services/notifications.service';
import { CardsComponent } from '../dashboard/pages/cards/cards.component';

@NgModule({
  declarations: [
    
    CardsComponent,
    ButtonsAndIconsComponent,

 
    PatronIteradorComponent,

  ],
  exports: [
    
    CardsComponent,
    ButtonsAndIconsComponent,
   
    PatronIteradorComponent,
 
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
