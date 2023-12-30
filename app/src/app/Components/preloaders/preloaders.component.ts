import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preloaders',
  templateUrl: './preloaders.component.html',
  styleUrls: ['./preloaders.component.css']
})
export class PreloadersComponent {
  constructor(
    private router:Router
  ){}
  openLoader1(){
    this.router.navigate(['/loader1']);
  }
}
