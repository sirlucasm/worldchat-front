import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat-verification',
  templateUrl: './chat-verification.component.html',
  styleUrls: ['./chat-verification.component.scss']
})
export class ChatVerificationComponent implements OnInit {
  @Input() selectedFriend: any;
  @Input() errorMessage: any;
  public currentUser: any;

  constructor(
    private chatService: ChatService,
    private location: Location
  ) {
    this.currentUser = this.chatService.stored;
  }

  ngOnInit(): void {
  }

  startChat() {
    const params = {
      toUser: { id: this.selectedFriend.toUser.id },
      startedBy: { id: this.currentUser.id }
    }
    console.log(params)
    this.chatService.startChatting(params)
      .subscribe(
        _ => document.location.reload(),
        ({ error }) => alert(error.message)
      )
  }
  
  closeChat () {
    this.location.back();
  }
}
