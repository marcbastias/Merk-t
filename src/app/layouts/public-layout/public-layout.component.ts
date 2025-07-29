import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/FRONT/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-public-layout',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './public-layout.component.html',
})
export class PublicLayoutComponent {

}
