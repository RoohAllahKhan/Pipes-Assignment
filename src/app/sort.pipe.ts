import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(allServers: any): any {
    const sortedServers = allServers.sort(
      (a, b) => {
        const fa = a.name.toLowerCase();
        const fb = b.name.toLowerCase();
        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });

    return sortedServers;
  }
}
