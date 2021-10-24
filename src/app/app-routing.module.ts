import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/auth/login/login.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuardService as AuthGuard } from './services/auth/auth-guard.service';
import { LoggedAuthGuardService as LoggedAuthGuard } from './services/auth/logged-auth-guard.service';

const routes: Routes = [
  //APP Routes
  {
    path: '',
    redirectTo: '/entrar',
    pathMatch: 'full'
  },
  
  // PROTECTED Routes
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
    ],
    canActivate: [AuthGuard]
  },

  // AUTH Routes
  {
    path: '',
    children: [
      {
        path: 'entrar',
        component: LoginComponent,
      },
      {
        path: 'criar-conta',
        component: SignupComponent,
      }
    ],
    canActivate: [LoggedAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
