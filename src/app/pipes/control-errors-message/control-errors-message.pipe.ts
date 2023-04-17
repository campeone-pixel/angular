import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'controlErrorsMessage',
})
export class ControlErrorsMessagePipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): unknown {
    console.log(value)
    const opciones: Record<string, string> = {
      required: 'Este campo es requerido',
      minlength: `Este campo debe tener al menos ${value.value.requiredLength
      } caracteres`,
    };

    return opciones[value.key];
  }
}
