import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiple'
})
export class MultiplePipe implements PipeTransform {

  transform(value: number, args?: any): any {
    let str = '元';
    switch (value) {
        case 1: str = '元'; break;
        case 0.1: str = '角'; break;
        case 0.01: str = '分'; break;
    }
    return str;
  }

}
