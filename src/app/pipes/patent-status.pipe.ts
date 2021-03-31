import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'patentStatus'
})
export class PatentStatusPipe implements PipeTransform {

  transform(value: any[], arg1?: string, arg2?: string): any {


   // console.log('PatentStatusPipe', value, args);
    let result = value;

    if (value) {
        result = value.filter((item) => (item.status === arg1));

        if (arg2) {
          // note: b - a will be descending sort
          result = result.sort( (a, b) => (b[arg2].getTime() - a[arg2].getTime()));

        }

    }

    return result;

  }

}
