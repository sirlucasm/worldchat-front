import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatMessageService {

  public stored;
  constructor(private API: HttpClient) {
    this.stored = JSON.parse(localStorage.getItem('@worldchat/user') || '{}');
  }

  sendMessage (params: any) {
    return this.API.post(environment.API_HOST + 'chat-messages', params);
  }

  messages () {
    return this.API.get(environment.API_HOST + 'chat-messages/messages/' + this.stored.id);
  }

  deleteMessage (params: any) {
    return this.API.delete(environment.API_HOST + 'chat-messages/' + params.id);
  }
}
