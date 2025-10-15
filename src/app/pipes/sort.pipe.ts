import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from '../modelos/usuario';

@Pipe({
  name: 'sort',
  standalone: true
})
export class SortPipe implements PipeTransform {

  transform(value: Usuario[], campo: string, orden: 'asc' | 'desc'): Usuario[] {
    const direction = orden === 'asc' ? 1 : -1;
    // Función para acceder a campos anidados
    const getValue = (obj: any, path: string) => path.split('.').reduce((acc, key) => acc?.[key], obj);
    return value.sort((a, b) => {
      const aValue = getValue(a, campo);
      const bValue = getValue(b, campo);

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return (aValue - bValue) * direction;
      }
      const aStr = aValue?.toString().toLowerCase() || '';
      const bStr = bValue?.toString().toLowerCase() || '';
      if (aStr < bStr) return -direction;
      if (aStr > bStr) return direction;
      return 0;
    });
  }

}
