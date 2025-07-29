import { Component } from '@angular/core';
import { HeroPersonalizationComponent } from '../../shared/FRONT/components/hero-personalization/hero-personalization.component';
import { ProductPersonalizationComponent } from '../../shared/FRONT/components/product-personalization/product-personalization.component';


@Component({
  selector: 'app-home',
  imports: [ HeroPersonalizationComponent, ProductPersonalizationComponent],
  templateUrl: './home-page.component.html',
  standalone: true
})
export class HomePageComponent {

}
