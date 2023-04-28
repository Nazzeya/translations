import { Pipe, PipeTransform } from '@angular/core';
import { AllLangVersionComponent } from '../all-lang-version.component';

@Pipe({
  name: 'translateAll'
})
export class TranslateAllPipe implements PipeTransform {

  constructor(private translationService: AllLangVersionComponent) {}

  transform(key: string, lang: string): string {
    return this.translationService.translate(key, lang);
  }

}
