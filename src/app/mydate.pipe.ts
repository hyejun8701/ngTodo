import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mydate'
})
export class MydatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(`first: ${value}, second: ${args}`);
    return value.toString();
  }

}
