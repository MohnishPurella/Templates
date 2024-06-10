import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloadersComponent } from './Components/preloaders/preloaders.component';
import { Loader1Component } from './Components/preloaders/loader1/loader1.component';
import { Loader1CodeComponent } from './Components/preloaders/loader1/loader1-code/loader1-code.component';
import { HomeComponent } from './Components/home/home.component';
import { HomePageTemplatesComponent } from './Components/home-page-templates/home-page-templates.component';
import { Template1Component } from './Components/home-page-templates/template1/template1.component';
import { Template1CodeComponent } from './Components/home-page-templates/template1/template1-code/template1-code.component';
import { TemplateContent1Component } from './Components/home-page-templates/template1/template-content1/template-content1.component';
import { TemplateContent2Component } from './Components/home-page-templates/template1/template-content2/template-content2.component';

@NgModule({
  declarations: [
    AppComponent,
    PreloadersComponent,
    Loader1Component,
    Loader1CodeComponent,
    HomeComponent,
    HomePageTemplatesComponent,
    Template1Component,
    Template1CodeComponent,
    TemplateContent1Component,
    TemplateContent2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
