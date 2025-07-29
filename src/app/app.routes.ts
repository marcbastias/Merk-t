import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { EmployeeLayoutComponent } from './layouts/employee-layout/employee-layout.component';
import { DashboardEmployeePageComponent } from './pages/BACKEND/dashboard-employee-page/dashboard-employee-page.component';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'login', component: LoginPageComponent },
    ],
  },

   {
     path: 'employee',
     component: EmployeeLayoutComponent,
    //  canActivate: [AuthGuard],
     children: [
        { path: '', component: DashboardEmployeePageComponent},
      //  { path: 'profile', component: EmployeeProfileComponent },
      //  { path: 'tasks', component: EmployeeTasksComponent },
     ],
   },

  { path: '**', redirectTo: '' },
];
