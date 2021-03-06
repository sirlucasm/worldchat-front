import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { ChatService } from 'src/app/services/chat.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-chat-list-layout',
  templateUrl: './chat-list-layout.component.html',
  styleUrls: ['./chat-list-layout.component.scss']
})
export class ChatListLayoutComponent implements OnInit {
  
  @Input() public user!: User;
  @Input() public friendships: Array<any> = [];
  @Input() public roomUsers: Array<any> = [];
  @Input() public selectedFriend: any;

  @Output() selectedFriendEvent = new EventEmitter<any>();

  public currentUser: any;
  
  constructor(private router: Router, private userService: UserService,) {
    this.currentUser = this.userService.stored;
  }

  showFriendshipInfo (friendship: any, key: any) {
    if (friendship.toUser.id != this.currentUser.id) {
      return friendship.toUser[key];
    } else {
      return friendship.sendedBy[key];
    }
  }

  selectFriend (friendship: any) {
    this.selectedFriendEvent.emit(friendship);
  }

  ngOnInit(): void {
  }
}
