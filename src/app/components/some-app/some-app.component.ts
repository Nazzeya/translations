import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-some-app',
  templateUrl: './some-app.component.html',
  styleUrls: ['./some-app.component.scss']
})
export class SomeAppComponent implements OnInit {

  ngOnInit(): void {
    
  }

  // translateData: any;
  // url: string = `assets/all.json`;
  // selectedLanguage: string = 'en';

  // constructor(private http: HttpClient) {}

  
  // ngOnInit(): void {
  //   this.http.get(this.url).subscribe(res => {
  //     this.translateData = res;
  //   });
  // }

  // translate(key: string, lang: string) {
  //   return this.translateData[key][lang];
  // }

}
