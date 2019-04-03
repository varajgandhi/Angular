import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    //return null;
    console.log(value);
    console.log(args);
    return value.substring(0,args)+"...";
  }

}
