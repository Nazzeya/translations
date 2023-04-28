
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, groupBy } from 'rxjs';

export class Language {
  constructor(public code: string, public name: string){}
}

@Injectable({
  providedIn: 'root'
})
export class TranslateAllService {

  constructor(private http: HttpClient){ }
        
  getLanguages(): Observable<Language[]>{
    return this.http.get('assets/languages.json').pipe(map((data:any)=>{
      let languageList = data["languages"];
      return languageList.map(function(language: any): Language {
        return new Language(language.value, language.name)
      })
    }))
  }

  getTranslations(): Observable<any>{
    return this.http.get('assets/all.json')
  }
}
