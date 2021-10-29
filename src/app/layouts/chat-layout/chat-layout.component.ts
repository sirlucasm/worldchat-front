import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from 'src/app/services/chat.service';
import * as $ from 'jquery';
import { ChatMessageService } from 'src/app/services/chat-message.service';
import { LoadingHandler } from 'src/app/handlers/loading-handler';
import { Observable, of, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-chat-layout',
  templateUrl: './chat-layout.component.html',
  styleUrls: ['./chat-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatLayoutComponent implements OnInit {
  
  @Input() public selectedFriend: any;
  public chat$!: Observable<any>;
  public messages: any = [];
  public errorMessage$ = new Subject<String>();
  public currentUser: any;
  public loadingHandler = new LoadingHandler();

  constructor(
    private chatService: ChatService,
  ) {
    this.currentUser = this.chatService.stored;
  }

  ngOnInit(): void {
    this.fetchChat();
  }

  ngAfterViewInit(): void {
    if(document.getElementById('chatmessages')) $('#chatmessages').scrollTop($('#chatmessages')[0].scrollHeight);
  }

  fetchChat () {
    this.loadingHandler.start();
    this.chat$ = this.chatService.myChats({ toUserId: this.selectedFriend.toUser.id }).pipe(
      catchError(err => {
        this.errorMessage$.next(err.error.message);
        return of();
      })
    );
    this.loadingHandler.finish();
  }

  startChat() {
    const params = {
      toUser: { id: this.selectedFriend.toUser.id },
      startedBy: { id: this.currentUser.id }
    }
    console.log(params)
    this.chatService.startChatting(params)
      .subscribe(
        _ => _,
        ({ error }) => alert(error.message)
      )
  }
}
