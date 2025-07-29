import { Component } from '@angular/core';
import {  RouterLink,  } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dashboard-employee-page',
  imports: [CommonModule,RouterLink],
  templateUrl: './dashboard-employee-page.component.html',
})
export class DashboardEmployeePageComponent {

menuItems = [
  {
    label: 'Dashboard',
    route: '/dashboard',
    badge: null
  },
  {
    label: 'Inbox',
    route: '/inbox',
    badge: '3'
  },
  {
    label: 'Users',
    route: '/users',
    badge: null
  },
  {
    label: 'Products',
    route: '/products',
    badge: null
  },
  {
    label: 'Sign In',
    route: '/login',
    badge: null
  },
  {
    label: 'Sign Up',
    route: '/register',
    badge: null
  }
];

}
