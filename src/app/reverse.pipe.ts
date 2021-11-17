import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any {
    const strToArray = value.split('');
    const reverseInstanceType = strToArray.reverse().join('');

    return reverseInstanceType;
  }

}
