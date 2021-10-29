import { Component, Input, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { Observable } from 'rxjs';
import { ChatMessageService } from 'src/app/services/chat-message.service';
import { Message } from 'src/app/interfaces/message.interface';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.scss']
})
export class ChatMessagesComponent implements OnInit {
  @Input() public selectedFriend: any;
  @Input() public chat: any;
  @Input() public currentUser: any;
  public messages: any = [];
  public messages$!: Observable<any>;
  public newMessage: String = '';

  constructor(
    private chatMessageService: ChatMessageService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.fetchMessages();
    setInterval(() => {
      this.fetchMessages();
    }, 2000);
  }

  fetchMessages () {
    this.messages$ = this.chatMessageService.messages({ chatId: this.chat[0].id });
  }

  closeChat () {
    this.location.back();
  }

  sendMessage () {
    const params: Message = {
      user: { id: this.currentUser.id },
      chat: { id: this.chat[0].id }
    };
    if (this.newMessage) {
      params.message = this.newMessage;
      this.chatMessageService.sendMessage(params)
        .subscribe((chat: any) => {
          document.location.reload();
        });
    }
  }
}
