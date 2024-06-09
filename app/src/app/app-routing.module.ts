import { NgModule } from '@angular/core';
import { Loader1CodeComponent } from './Components/preloaders/loader1/loader1-code/loader1-code.component';
import { HomeComponent } from './Components/home/home.component';
import { PreloadersComponent } from './Components/preloaders/preloaders.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageTemplatesComponent } from './Components/home-page-templates/home-page-templates.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:"full"},
  {path:'home', component:HomeComponent},
  //navbar
  {path:'preloader', component:PreloadersComponent},
  {path:'homeTemplate', component:HomePageTemplatesComponent},

  //components
  {path:'loader1', component:Loader1CodeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
