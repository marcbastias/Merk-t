import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'hero-personalization',
  imports: [CommonModule ],
  templateUrl: './hero-personalization.component.html',
})
export class HeroPersonalizationComponent {


  images: string[] = [
  'https://i.pinimg.com/736x/2a/3f/bc/2a3fbc6404f6f258d8f4447410c62de9.jpg',
  'https://i.pinimg.com/1200x/05/43/f6/0543f6ecf77537614577a644ad2ff708.jpg',
  'https://i.pinimg.com/1200x/91/19/f9/9119f955f90767b2552bb96dedefaa8e.jpg'
];

}
