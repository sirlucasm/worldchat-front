import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  public stored;
  constructor(private API: HttpClient) {
    this.stored = JSON.parse(localStorage.getItem('@worldchat/user') || '');
  }

  createRoom (params: any) {
    return this.API.post(environment.API_HOST + 'rooms', params);
  }

  all () {
    return this.API.get(environment.API_HOST + 'rooms');
  }

  find (params: any) {
    return this.API.get(environment.API_HOST + 'rooms/' + params.id);
  }

  myRooms () {
    return this.API.post(environment.API_HOST + 'rooms/my-rooms', { id: this.stored.id });
  }

  changeRoomName (params: any, roomId: number) {
    return this.API.patch(environment.API_HOST + 'rooms/' + roomId, params);
  }

  deleteRoom (params: any) {
    return this.API.delete(environment.API_HOST + 'rooms/' + params.id);
  }
}
