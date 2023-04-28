import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import { Language, TranslateAllService } from './services/translate-all.service';

@Component({
  selector: 'app-all-lang-version',
  templateUrl: './all-lang-version.component.html',
  styleUrls: ['./all-lang-version.component.scss']
})
export class AllLangVersionComponent implements OnInit, AfterContentInit {
  
  translateData: any;
  languages: Language[] = [];
  currentLang: string = 'en';

  hello: string = 'HELLO';

  constructor( private translateService: TranslateAllService) { }

  ngAfterContentInit(): void {
    
  }

  ngOnInit(): void {
    this.translateService.getTranslations().subscribe(data => this.translateData = data);
    this.translateService.getLanguages().subscribe({next: (data: Language[]) => this.languages = data});
  }


  translate(key: string, lang: string) {
    return this.translateData[key][lang];
  }

}
