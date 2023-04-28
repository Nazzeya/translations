import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

interface TranslationObject {
  [key: string]: string;
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translations = new BehaviorSubject<TranslationObject>({});

  constructor(private http: HttpClient) {}

  getTranslations() {
    return this.translations.asObservable();
  }

  loadTranslations(lang: string) {
    const translationFile = `assets/${lang}.json`;
    return this.http.get<TranslationObject>(translationFile).subscribe((response) => {
      this.translations.next(response);
    });
  }

  translate(key: string) {
    return this.translations.value[key];
  }
}