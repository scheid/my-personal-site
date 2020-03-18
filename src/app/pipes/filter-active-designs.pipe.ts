import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterActiveDesigns'
})
export class FilterActiveDesignsPipe implements PipeTransform {

  transform(value: any[], ...args: any[]): any[] {

    let result = value;

    if (value) {
      result = value.filter((item) => (item.active === true));
    }

    return result;


  }

}
