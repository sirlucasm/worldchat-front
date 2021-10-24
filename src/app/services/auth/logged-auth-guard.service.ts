import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedAuthGuardService {

  constructor(
    public auth: AuthService,
    public router: Router
  ) { }

  canActivate(): Boolean {
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['chats']);
      return false
    }
    return true;
  }
}
