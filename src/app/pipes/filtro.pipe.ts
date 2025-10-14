import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from '../modelos/usuario';

@Pipe({
  name: 'filtro',
  standalone: true
})
export class FiltroPipe implements PipeTransform {

  transform(usuarios: Usuario[], busqueda: string): Usuario[] {
    return usuarios.filter(usuario => {
      const { title, first, last } = usuario.name;
      const completeName = `${title} ${first} ${last}`.toLowerCase();
      return completeName.includes(busqueda.toLowerCase());
    });
  }

}
