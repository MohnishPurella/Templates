import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloadersComponent } from './Components/preloaders/preloaders.component';
import { Loader1Component } from './Components/preloaders/loader1/loader1.component';
import { HomeComponent } from './Components/home/home.component';
import { HomePageTemplatesComponent } from './Components/home-page-templates/home-page-templates.component';
import { Template1Component } from './Components/home-page-templates/template1/template1.component';
import { TemplateContent1Component } from './Components/home-page-templates/template1/template-content1/template-content1.component';
import { TextAnimationComponent } from './Components/text-animation/text-animation.component';
import { TextAnimation1Component } from './Components/text-animation/text-animation1/text-animation1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PreloadersComponent,
    Loader1Component,
    HomeComponent,
    HomePageTemplatesComponent,
    Template1Component,
    TemplateContent1Component,
    TextAnimationComponent,
    TextAnimation1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
