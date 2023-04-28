import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from '../service-v2/translation.service';

@Pipe({
  name: 'translatev2',
  pure: false
})
export class Translatev2Pipe implements PipeTransform {
  constructor(private translationService: TranslationService) {}

  transform(key: any): any {
    return this.translationService.translate(key);
  }
}
