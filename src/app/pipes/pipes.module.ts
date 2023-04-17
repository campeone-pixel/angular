import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NombreCompletoPipe } from './nombre-completos/nombre-completo.pipe';
import { ControlErrorsMessagePipe } from './control-errors-message/control-errors-message.pipe';

@NgModule({
  declarations: [NombreCompletoPipe, ControlErrorsMessagePipe],
  imports: [CommonModule],
  exports: [NombreCompletoPipe,ControlErrorsMessagePipe],
})
export class PipesModule {
  
}
