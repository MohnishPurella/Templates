import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page-templates',
  templateUrl: './home-page-templates.component.html',
  styleUrls: ['./home-page-templates.component.css']
})
export class HomePageTemplatesComponent {
  constructor(
    private router:Router
  ){}
  openHomeTemplate1(){
    this.router.navigate(['/home-Template1']);
  }
}
