import { Pipe, PipeTransform } from '@angular/core';
import { TranslateOneService } from '../services/translate-one.service';

@Pipe({
  name: 'translateOne'
})
export class TranslateOnePipe implements PipeTransform {

  constructor(private translationService: TranslateOneService) {}

  transform(key: any): any {
    return this.translationService.translate(key);
  }

}
