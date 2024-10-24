import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from '../modelos/usuario';

@Pipe({
  name: 'filtro',
  standalone: true
})
export class FiltroPipe implements PipeTransform {

  transform(usuarios: Usuario[], busqueda: string): Usuario[] {
    return usuarios.filter(usuario => usuario.name.first.toLowerCase().includes(busqueda.toLowerCase()));
  }

}
