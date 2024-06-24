import { NgModule } from '@angular/core';
import { Loader1CodeComponent } from './Components/preloaders/loader1/loader1-code/loader1-code.component';
import { HomeComponent } from './Components/home/home.component';
import { PreloadersComponent } from './Components/preloaders/preloaders.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageTemplatesComponent } from './Components/home-page-templates/home-page-templates.component';
import { Template1CodeComponent } from './Components/home-page-templates/template1/template1-code/template1-code.component';
import { Template1Component } from './Components/home-page-templates/template1/template1.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:"full"},
  {path:'home', component:HomeComponent},
  //navbar
  {path:'preloader', component:PreloadersComponent},
  {path:'homeTemplate', component:HomePageTemplatesComponent},

  //components
  {path:'loader1', component:Loader1CodeComponent},
  {path:'home-Template1', component:Template1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
