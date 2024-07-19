import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-text-animation',
  templateUrl: './text-animation.component.html',
  styleUrl: './text-animation.component.css'
})
export class TextAnimationComponent {
  constructor(
    private router:Router
  ){}

  openTextAnimation1(){
    this.router.navigate(['/text-Animation1']);
  }

  openTextAnimation2(){
    this.router.navigate(['/text-Animation2']);
  }
}
