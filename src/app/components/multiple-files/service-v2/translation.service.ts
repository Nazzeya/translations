import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';

interface TranslationObject {
  [key: string]: string;
}

export class Language {
  constructor(public code: string, public name: string){}
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translations = new BehaviorSubject<TranslationObject>({});

  constructor(private http: HttpClient) {}

  getLanguages(): Observable<Language[]>{
    return this.http.get(`assets/languages.json`).pipe(map((data:any)=>{
      let languageList = data["languages"];
      return languageList.map(function(language: any): Language {
        return new Language(language.value, language.name)
      })
    }))
  }

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