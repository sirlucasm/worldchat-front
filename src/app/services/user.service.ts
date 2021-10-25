import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public stored;
  constructor(private API: HttpClient) {
    this.stored = JSON.parse(localStorage.getItem('@worldchat/user') || '');
  }

  createAccount (params: User) {
    return this.API.post(environment.API_HOST + 'users', params);
  }

  currentUser () {
    return this.API.get(environment.API_HOST + 'users/' + this.stored.id);
  }

  all () {
    return this.API.get(environment.API_HOST + 'users');
  }

  login (params: User) {
    return this.API.post(environment.API_HOST + 'users/login', params);
  }

  update (params: User) {
    return this.API.put(environment.API_HOST + 'users', params);
  }

  deleteAccount (params: User) {
    return this.API.delete(environment.API_HOST + 'users', { body: params });
  }
}
