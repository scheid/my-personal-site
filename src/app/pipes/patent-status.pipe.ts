import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'patentStatus'
})
export class PatentStatusPipe implements PipeTransform {

  transform(value: any[], args?: any): any {


   // console.log('PatentStatusPipe', value, args);
    let result = value;

    if (value) {
        result = value.filter((item) => (item.status === args));
    }

    return result;

  }

}
