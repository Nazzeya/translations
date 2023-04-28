import { Component, OnInit } from '@angular/core';
import { Language, TranslateOneService } from './services/translate-one.service';

@Component({
  selector: 'app-one-lang-version',
  templateUrl: './one-lang-version.component.html',
  styleUrls: ['./one-lang-version.component.scss']
})
export class OneLangVersionComponent implements OnInit {
  
  languages: Language[] = [];
  currentLang: string = 'en';
  translations: any;

  constructor(private translateService: TranslateOneService) { }

  ngOnInit(): void {
    this.translateService.getLanguages().subscribe({next: (data: Language[]) => this.languages = data});
    this.getTranslations()
  }

  getTranslations () {
    this.translateService.getTranslations(this.currentLang).subscribe({next: (data: any) => this.translations = data})
    console.log(this.translations)
  }

}
