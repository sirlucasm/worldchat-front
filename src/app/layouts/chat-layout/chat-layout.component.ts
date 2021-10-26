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
  public chat: any = [];
  public errorMessage: any;

  constructor(
    private chatService: ChatService,
    private chatMessage: ChatMessageService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.setSelectedChat();
    this.errorMessage = sessionStorage.getItem('@worldchat/chat/errorMessage');
    if (Object.keys(this.selectedFriend).length == 0) this.selectedFriend = undefined;
  }

  ngAfterViewInit(): void {
    if(document.getElementById('chatmessages')) $('#chatmessages').scrollTop($('#chatmessages')[0].scrollHeight);
    this.fetchChat();
  }

  setSelectedChat () {
    this.selectedFriend = JSON.parse(sessionStorage.getItem('@worldchat/selectedChat') || '{}');
  }

  fetchChat () {
    this.chatService.myChats({ toUserId: this.selectedFriend.toUser.id })
      .subscribe(
        data => {
          const teste: Array<any> = [data];
          this.chat.push(teste[0][0])
        },
        ({ error }) => sessionStorage.setItem('@worldchat/chat/errorMessage', error.message)
      )
      console.log(this.chat)
  }

  closeChat () {
    sessionStorage.removeItem('@worldchat/selectedChat');
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
