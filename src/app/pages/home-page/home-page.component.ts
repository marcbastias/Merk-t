import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../layouts/header/header.component';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet,HeaderComponent],
  templateUrl: './home-page.component.html',
  standalone: true  
})
export class HomePageComponent {

}
