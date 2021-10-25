import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { FriendshipService } from 'src/app/services/friendship.service';
import { RoomUserService } from 'src/app/services/room-user.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  public user!: any;
  public friendships: any = [];
  public roomUsers: any = [];

  constructor(
    private userService: UserService,
    private friendshipService: FriendshipService,
    private roomUserService: RoomUserService
  ) { }

  ngOnInit(): void {
    this.fetchCurrentUser();
    this.fetchMyFriends();
    this.fetchRoomsImIn();
  }

  fetchCurrentUser () {
    this.userService.currentUser()
      .subscribe(
        data => this.user = data,
        ({ error }) => console.log(error.message)
      )
  }

  fetchMyFriends () {
    this.friendshipService.myFriends()
      .subscribe(
        data => this.friendships = data,
        ({ error }) => console.log(error.message)
      )
  }

  fetchRoomsImIn () {
    this.roomUserService.roomsImIn()
      .subscribe(
        data => this.roomUsers = data,
        ({ error }) => console.log(error.message)
      )
  }

}
