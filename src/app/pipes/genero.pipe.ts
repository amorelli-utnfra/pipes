import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from '../modelos/usuario';

@Pipe({
  name: 'genero',
  standalone: true
})
export class GeneroPipe implements PipeTransform {

  transform(usuario: Usuario): string {
    return usuario.gender === 'female' ? 'Mujer' : 'Hombre';
  }

}
