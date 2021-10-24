import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { UserService } from './services/user.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { LoginFormLayoutComponent } from './layouts/auth-layout/login-form-layout/login-form-layout.component';
import { SignupFormLayoutComponent } from './layouts/auth-layout/signup-form-layout/signup-form-layout.component';
import { FormsModule } from '@angular/forms';
import { ToastLayoutComponent } from './layouts/toast-layout/toast-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignupComponent,
    LoginComponent,
    AuthLayoutComponent,
    LoginFormLayoutComponent,
    SignupFormLayoutComponent,
    ToastLayoutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
