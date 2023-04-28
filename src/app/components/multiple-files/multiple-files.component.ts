import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Language, TranslationService } from 'src/app/components/multiple-files/service-v2/translation.service';

@Component({
  selector: 'app-multiple-files',
  templateUrl: './multiple-files.component.html',
  styleUrls: ['./multiple-files.component.scss']
})
export class MultipleFilesComponent implements OnInit {
  languages: Language[] = [];
  currentLang = 'en';

  constructor(private translationService: TranslationService) {}

  ngOnInit() {
    this.translationService.getLanguages().subscribe({next: (data: Language[]) => this.languages = data});
    this.translationService.loadTranslations(this.currentLang);
  }

  changeLanguage() {
    this.translationService.loadTranslations(this.currentLang);
  }

}
