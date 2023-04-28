import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslationService } from 'src/app/components/multiple-files/service-v2/translation.service';

@Component({
  selector: 'app-multiple-files',
  templateUrl: './multiple-files.component.html',
  styleUrls: ['./multiple-files.component.scss']
})
export class MultipleFilesComponent implements OnInit {
  languages = [
    { code: 'en', name: 'English' },
    { code: 'ru', name: 'Русский' },
    { code: 'kz', name: 'Қазақ' }
  ];
  currentLang = 'en';

  constructor(private translationService: TranslationService) {}

  ngOnInit() {
    this.translationService.loadTranslations(this.currentLang);
  }

  changeLanguage() {
    this.translationService.loadTranslations(this.currentLang);
  }

}
