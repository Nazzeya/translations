import { Pipe, PipeTransform } from '@angular/core';
import { SomeAppComponent } from '../some-app.component';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {
  constructor(){}

  transform(value: any, ...args: any[]) {
    
  }
  // constructor(private service: SomeAppComponent) {}

  // transform(key: string, lang: string): string {
  //   return this.service.translate(key, lang);
  // }
}