import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SomeAppComponent } from './some-app/some-app.component';
import { MultipleFilesComponent } from './multiple-files/multiple-files.component';
import { AllLangVersionComponent } from './all-lang-version/all-lang-version.component';
import { OneLangVersionComponent } from './one-lang-version/one-lang-version.component';

const routes: Routes = [
    // {
    //     path: '', component: SomeAppComponent,
    // },
    // {
    //   path: '', component: MultipleFilesComponent
    // },
    // {
    //   path: '', component: AllLangVersionComponent
    // },
    {
      path: '', component: OneLangVersionComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }