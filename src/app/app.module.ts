import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { SignupLayoutComponent } from './layouts/signup-layout/signup-layout.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { SignupComponent } from './pages/auth/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginLayoutComponent,
    SignupLayoutComponent,
    DashboardLayoutComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
