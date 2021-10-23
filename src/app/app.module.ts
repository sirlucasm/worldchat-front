import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { UserService } from './services/user.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { LoginFormLayoutComponent } from './layouts/auth-layout/login-form-layout/login-form-layout.component';
import { SignupFormLayoutComponent } from './layouts/auth-layout/signup-form-layout/signup-form-layout.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardLayoutComponent,
    SignupComponent,
    LoginComponent,
    AuthLayoutComponent,
    LoginFormLayoutComponent,
    SignupFormLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
