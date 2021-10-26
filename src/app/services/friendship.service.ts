import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FriendshipService {

  public stored;
  constructor(private API: HttpClient) {
    this.stored = JSON.parse(localStorage.getItem('@worldchat/user') || '{}');
  }

  createFriendship (params: any) {
    return this.API.post(environment.API_HOST + 'friendships', params);
  }

  all () {
    return this.API.get(environment.API_HOST + 'friendships');
  }

  find (params: any) {
    return this.API.get(environment.API_HOST + 'friendships/' + params.id);
  }

  myFriends () {
    return this.API.post(environment.API_HOST + 'friendships/friends', { id: this.stored.id });
  }

  update (params: any) {
    return this.API.put(environment.API_HOST + 'friendships', params);
  }

  deleteFriendship (params: any) {
    return this.API.delete(environment.API_HOST + 'friendships/' + params.id);
  }
}
