import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'directivaNgClass'
})
export class DirectivaNgClassPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
