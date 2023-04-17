import { Pipe, PipeTransform } from '@angular/core';
import { Alumnos } from 'src/app/models';

@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {

  transform(value: Alumnos, ...args: unknown[]): unknown {
    const isMayus = args[0] === "mayuscula"
    if (isMayus){
      return `${value.nombre.toUpperCase()} ${value.apellido.toUpperCase()}`;
    } else{

      return `${value.nombre} ${value.apellido}`;
    }

  }

}
