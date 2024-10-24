import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from '../modelos/usuario';

@Pipe({
  name: 'nombre',
  standalone: true
})
export class NombrePipe implements PipeTransform {

  transform(usuarioObj: Usuario): string | null {
    return `${usuarioObj.name.title} ${usuarioObj.name.first} ${usuarioObj.name.last}`;
  }

}
