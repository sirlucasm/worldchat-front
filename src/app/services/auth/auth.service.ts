import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticated(): Boolean {
    const user = localStorage.getItem('@worldchat/user');
    if (user) return true;
    return false
  }
}
