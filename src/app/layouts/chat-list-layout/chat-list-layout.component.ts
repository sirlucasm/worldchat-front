import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-chat-list-layout',
  templateUrl: './chat-list-layout.component.html',
  styleUrls: ['./chat-list-layout.component.scss']
})
export class ChatListLayoutComponent implements OnInit {
  
  @Input() public user!: User;
  @Input() public friendships: Array<any> = [];
  @Input() public roomUsers: Array<any> = [];

  public selectedChat: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.friendships)
  }

  // selectChat () {
    
  // }
}
