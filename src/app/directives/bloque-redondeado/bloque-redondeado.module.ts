import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BloqueRedondeadoDirective } from './bloque-redondeado.directive';



@NgModule({
  declarations: [
    BloqueRedondeadoDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[BloqueRedondeadoDirective]
})
export class BloqueRedondeadoModule { }
