import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Message } from '../interfaces/message.interface';

@Injectable({
  providedIn: 'root'
})
export class ChatMessageService {
  public error: any;
  public stored;
  constructor(private API: HttpClient) {
    this.stored = JSON.parse(localStorage.getItem('@worldchat/user') || '{}');
  }

  sendMessage (params: Message) {
    return this.API.post(environment.API_HOST + 'chat-messages', params);
  }

  messages (params: any): Observable<Message[]> {
    return this.API.get<Message[]>(environment.API_HOST + 'chat-messages/messages/' + params.chatId)
      .pipe(
        catchError(err => {
          this.error = err;
          return throwError(err);
        })
      );
  }

  deleteMessage (params: any) {
    return this.API.delete(environment.API_HOST + 'chat-messages/' + params.id);
  }
}
