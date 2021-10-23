import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import API from './config';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  async createAccount (params: User) {
    return (await API.post('/users', params)).data;
  }

  async currentUser (params: any) {
    return (await API.get('/users/:id', { params: { id: params.id } })).data;
  }

  async all () {
    return (await API.get('/users')).data;
  }

  async login (params: User) {
    return (await API.post('/users/login', params)).data;
  }

  async update (params: User) {
    return (await API.put('/users', params)).data;
  }

  async deleteAccount (params: User) {
    return (await API.delete('/users', { data: params })).data;
  }
}
