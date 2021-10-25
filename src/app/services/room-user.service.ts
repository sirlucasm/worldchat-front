import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomUserService {

  public stored;
  constructor(private API: HttpClient) {
    this.stored = JSON.parse(localStorage.getItem('@worldchat/user') || '');
  }

  createRoom (params: any) {
    return this.API.post(environment.API_HOST + 'room-users', params);
  }

  all () {
    return this.API.get(environment.API_HOST + 'room-users');
  }

  roomsImIn () {
    return this.API.get(environment.API_HOST + 'room-users/rooms/' + this.stored.id);
  }

  exitRoom (params: any, roomId: number) {
    return this.API.delete(environment.API_HOST + 'room-users/' + roomId, { body: params });
  }
}
