import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'format'
})
export class FormatPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.substr(0,38) + '...';
  }
}

@Pipe({
  name: 'formatText'
})
export class FormatTextPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.substr(0,128) + '...';
  }
}
