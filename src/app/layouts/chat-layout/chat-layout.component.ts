import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from 'src/app/services/chat.service';
import * as $ from 'jquery';
import { ChatMessageService } from 'src/app/services/chat-message.service';

@Component({
  selector: 'app-chat-layout',
  templateUrl: './chat-layout.component.html',
  styleUrls: ['./chat-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatLayoutComponent implements OnInit {
  
  public selectedFriend: any;
  public chat: any;
  public messages: any = [];
  public errorMessage: any;
  public currentUser: any;

  public newMessage: String = '';

  constructor(
    private chatService: ChatService,
    private chatMessage: ChatMessageService,
    private router: Router
  ) {
    this.setSelectedChat();
    this.currentUser = this.chatMessage.stored;
  }

  ngOnInit(): void {
    this.errorMessage = sessionStorage.getItem('@worldchat/chat/errorMessage');
    if (Object.keys(this.selectedFriend).length == 0) this.selectedFriend = undefined;
    this.fetchChat();
    this.fetchMessages();
    setInterval(() => {
      this.fetchMessages();
    }, 2500);
  }

  ngAfterViewInit(): void {
    if(document.getElementById('chatmessages')) $('#chatmessages').scrollTop($('#chatmessages')[0].scrollHeight);
  }

  setSelectedChat () {
    this.selectedFriend = JSON.parse(sessionStorage.getItem('@worldchat/selectedChat') || '{}');
  }

  fetchChat () {
    this.chat = this.chatService.myChats({ toUserId: this.selectedFriend?.toUser.id || 0 });
    this.chat.subscribe(() => {}, ({ error }: any) => sessionStorage.setItem('@worldchat/chat/errorMessage', error.message));
  }

  fetchMessages () {
    this.chat
      .subscribe((data: any) => {
        this.messages = this.chatMessage.messages({ chatId: data[0].id });
      });
  }

  sendMessage () {
    if (this.newMessage) {
      this.chat
        .subscribe((chat: any) => {
          this.chatMessage.sendMessage({
            user: { id: this.currentUser.id },
            chat: { id: chat[0].id },
            message: this.newMessage
          }).subscribe(() => window.location.reload());
        });
    }
  }

  async refresh(url: any): Promise<boolean> {
    await this.router.navigateByUrl('.', { skipLocationChange: true });
    return this.router.navigate(url);
  }

  closeChat () {
    sessionStorage.removeItem('@worldchat/selectedChat');
    sessionStorage.removeItem('@worldchat/chat/errorMessage');
    this.router.navigate(['chats']);
  }

  startChat() {
    const params = {
      toUser: { id: this.selectedFriend.toUser.id },
      startedBy: { id: this.chatService.stored.id }
    }
    this.chatService.startChatting(params)
      .subscribe(
        _ => document.location.reload(),
        ({ error }) => alert(error.message)
      )
  }
}
