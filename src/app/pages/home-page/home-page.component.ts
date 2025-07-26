import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../layouts/header/header.component';
import { HeroPersonalizationComponent } from '../../shared/components/hero-personalization/hero-personalization.component';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet,HeaderComponent, HeroPersonalizationComponent],
  templateUrl: './home-page.component.html',
  standalone: true  
})
export class HomePageComponent {

}
