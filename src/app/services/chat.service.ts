import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public stored;
  constructor(private API: HttpClient) {
    this.stored = JSON.parse(localStorage.getItem('@worldchat/user') || '{}');
  }

  startChatting (params: any) {
    return this.API.post(environment.API_HOST + 'chats', params);
  }

  all () {
    return this.API.get(environment.API_HOST + 'chats');
  }

  myChats (params: any) {
    return this.API.get(environment.API_HOST + 'chats/my/' + this.stored.id + '/' + params.toUserId);
  }

  deleteChat (params: any) {
    return this.API.delete(environment.API_HOST + 'chats/' + params.id);
  }
}
function first(): import("rxjs").OperatorFunction<Object, unknown> {
  throw new Error('Function not implemented.');
}

