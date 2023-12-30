import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Loader1CodeComponent } from './Components/preloaders/loader1/loader1-code/loader1-code.component';
import { HomeComponent } from './Components/home/home.component';
import { PreloadersComponent } from './Components/preloaders/preloaders.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:"full"},
  {path:'home', component:HomeComponent},
  {path:'preloader', component:PreloadersComponent},
  {path:'loader1', component:Loader1CodeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
