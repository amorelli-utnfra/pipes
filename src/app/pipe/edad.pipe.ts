import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'edad',
  standalone: true
})
export class EdadPipe implements PipeTransform {

  transform(edad: number, idioma: string, formato: string): string | null {
    return edad + ' años';
  }

}
