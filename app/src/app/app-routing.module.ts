import { NgModule } from '@angular/core';
import { HomeComponent } from './Components/home/home.component';
import { PreloadersComponent } from './Components/preloaders/preloaders.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageTemplatesComponent } from './Components/home-page-templates/home-page-templates.component';
import { TextAnimationComponent } from './Components/text-animation/text-animation.component';
import { TextAnimation1Component } from './Components/text-animation/text-animation1/text-animation1.component';
import { TextAnimation2Component } from './Components/text-animation/text-animation2/text-animation2.component';
import { TemplateContent1Component } from './Components/home-page-templates/template1/template-content1/template-content1.component';
import { Loader1Component } from './Components/preloaders/loader1/loader1.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:"full"},
  {path:'home', component:HomeComponent},
  //navbar
  {path:'preloader', component:PreloadersComponent},
  {path:'homeTemplate', component:HomePageTemplatesComponent},
  {path: 'textAnimationTemplate', component:TextAnimationComponent},
  //components
  {path:'loader1', component:Loader1Component},
  {path:'home-Template1', component:TemplateContent1Component},
  {path:'text-Animation1', component:TextAnimation1Component},
  {path:'text-Animation2', component:TextAnimation2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
