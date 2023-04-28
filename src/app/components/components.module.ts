import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ComponentsRoutingModule } from './components-routing.module';
import { CommonModule } from '@angular/common';
import { SomeAppComponent } from './some-app/some-app.component';
import { TranslatePipe } from './some-app/translate-pipe/translate.pipe';
import { MultipleFilesComponent } from './multiple-files/multiple-files.component';
import { Translatev2Pipe } from './multiple-files/translate-v2-pipe/translatev2.pipe';
import { AllLangVersionComponent } from './all-lang-version/all-lang-version.component';
import { OneLangVersionComponent } from './one-lang-version/one-lang-version.component';
import { TranslateOnePipe } from './one-lang-version/pipes/translate-one.pipe';
import { TranslateAllPipe } from './all-lang-version/pipes/translate-all.pipe';

@NgModule({
    imports:      
    [ FormsModule, ComponentsRoutingModule, CommonModule ],
    declarations: [ 
        SomeAppComponent, 
        TranslatePipe, 
        MultipleFilesComponent, 
        Translatev2Pipe, 
        AllLangVersionComponent, 
        OneLangVersionComponent, TranslateOnePipe, TranslateAllPipe 
    ],
    exports: [ SomeAppComponent ]
})
export class ComponentsModule { }