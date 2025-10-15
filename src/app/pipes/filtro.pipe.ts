import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from '../modelos/usuario';

@Pipe({
  name: 'filtro',
  standalone: true
})
export class FiltroPipe implements PipeTransform {

  transform(usuarios: any[], campo: string, busqueda: string): Usuario[] {
    return usuarios.filter(usuario => {

      //const valorCampo = usuario[campo]?.toString().toLowerCase() || '';
      const valorCampo = campo.split('.').reduce((obj, key) => obj?.[key], usuario);
      console.log(valorCampo);

      return valorCampo.toLowerCase().includes(busqueda.toLowerCase());
    });
  }

}
