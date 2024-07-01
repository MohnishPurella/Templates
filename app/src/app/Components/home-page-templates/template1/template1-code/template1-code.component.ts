import { Component } from '@angular/core';
import { Template1Component } from '../template1.component';

@Component({
  selector: 'app-template1-code',
  templateUrl: './template1-code.component.html',
  styleUrl: './template1-code.component.css'
})
export class Template1CodeComponent {

  showCode = false;

  htmlCode: string = `
  <div class="banner1">
    <img src="assets/template1Images/kakasi.png" alt="">
    <div class="text-box text-box1">
        <h1>What is Lorem Ipsum?</h1>
        <span></span>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
</div>
<div class="banner2">
    <img src="assets/template1Images/Jujustu Kaisen.png" alt="">
    <div class="text-box text-box2">
        <h1>What is Lorem Ipsum?</h1>
        <span></span>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
</div>
<div class="banner3">
    <img src="assets/template1Images/Dragon Ball.png" alt="">
    <div class="text-box text-box3">
        <h1>What is Lorem Ipsum?</h1>
        <span></span>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
</div>
<div class="banner4">
    <img src="assets/template1Images/luffy.png" alt="">
    <div class="text-box text-box4">
        <h1>What is Lorem Ipsum?</h1>
        <span></span>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
</div>
`;

cssCode: string = `  
  .banner1, .banner2, .banner3, .banner4{
    overflow: hidden;
    height: 100vh;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
}

img{
    width: 120%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    animation: zoom-out 5s linear infinite;
}

@keyframes zoom-out {
    100%{
        width: 100%;
    }
}

.text-box{
    width: 600px;
    position: absolute;
    top: 200px;
    left: 100px;
    color: #fff;
    animation: textup 20s linear infinite;
    transform: translateY(100px);
}

@keyframes textup {
    10%{
        transform: translateY(0px);
    }

    100%{
        transform: translateY(0px);
    }
}

.text-box h1{
    margin-bottom: 40px;
}

.text-box p{
    font-size: 14px;
    line-height: 18px;
    margin-top: 80px;
}

.text-box span{
    background-color: red;
    height: 1px;
    width: 100px;
    position: absolute;
    left: 0;
}

.banner1{
    animation: slide1 20s linear infinite;
}

.banner2{
    animation: slide2 20s linear infinite;
}

.banner3{
    animation: slide3 20s linear infinite;
}

.banner4{
    animation: slide4 20s linear infinite;
}

@keyframes slide1 {
    0%{
        visibility: visible;
    }

    25%{
        visibility: hidden;
    }

    50%{
        visibility: hidden;
    }

    75%{
        visibility: hidden;
    }

    100%{
        visibility: visible;
    }
}

@keyframes slide2 {
    0%{
        visibility: hidden;
    }

    25%{
        visibility: hidden;
    }

    50%{
        visibility: visible;
    }

    75%{
        visibility: hidden;
    }

    100%{
        visibility: hidden;
    }
}

@keyframes slide3 {
    0%{
        visibility: hidden;
    }

    25%{
        visibility: hidden;
    }

    50%{
        visibility: hidden;
    }

    75%{
        visibility: visible;
    }

    100%{
        visibility: hidden;
    }
}

@keyframes slide4 {
    0%{
        visibility: hidden;
    }

    25%{
        visibility: hidden;
    }

    50%{
        visibility: hidden;
    }

    75%{
        visibility: hidden;
    }

    100%{
        visibility: visible;
    }
}

.text-box1{
    animation-delay: 0s;
}

.text-box2{
    animation-delay: 5s;
}

.text-box3{
    animation-delay: 10s;
}

.text-box4{
    animation-delay: 15s;
}

/* Media Queries for responsiveness */

@media (max-width: 768px) {
    img{
        top:35%
    }
}

@media (max-width: 480px) {

    img{
        top:20%
    }

    .text-box{
        width: 240px;
        top: 80px;
        left: 40px;
    }

    .text-box h1{
        font-size: 16px;
        margin-bottom: 16px;
    }
    
    .text-box p{
        font-size: 8px;
        line-height: 13px;
        margin-top: 30px;
    }
    
    .text-box span{
        background-color: red;
        height: 1px;
        width: 100px;
        position: absolute;
        left: 0;
    }
}

@media (max-width: 320px) {

    img{
        top:15%
    }

    .text-box{
        width: 180px;
        top: 60px;
        left: 30px;
    }

    .text-box h1{
        font-size: 14px;
        margin-bottom: 12px;
    }
    
    .text-box p{
        font-size: 7px;
        line-height: 9px;
        margin-top: 20px;
    }
    
    .text-box span{
        background-color: red;
        height: 1px;
        width: 100px;
        position: absolute;
        left: 0;
    }
}
`;

}
