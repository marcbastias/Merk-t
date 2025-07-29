import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'login-page',
  imports: [ ],
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {
constructor(private router: Router) {}

goToDashboard() {
  this.router.navigate(['/employee']);  // Cambia '/dashboard' por la ruta que desees
}
}
