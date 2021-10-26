import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat-list-layout',
  templateUrl: './chat-list-layout.component.html',
  styleUrls: ['./chat-list-layout.component.scss']
})
export class ChatListLayoutComponent implements OnInit {
  
  @Input() public user!: User;
  @Input() public friendships: Array<any> = [];
  @Input() public roomUsers: Array<any> = [];
  @Input() public selectFriend!: (args: any) => void;
  
  constructor(private router: Router,) { }

  ngOnInit(): void {
  }
}
