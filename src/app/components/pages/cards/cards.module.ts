import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    CardsComponent
  ],
  imports: [
    CommonModule,MatCardModule,
    MatButtonModule
  ]
  , exports:[CardsComponent]
})
export class CardsModule { }
