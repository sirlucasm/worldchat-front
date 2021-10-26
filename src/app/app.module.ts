import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { UserService } from './services/user.service';

import { AppComponent } from './app.component';
import { ChatComponent } from './pages/chat/chat.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { LoginFormLayoutComponent } from './layouts/auth-layout/login-form-layout/login-form-layout.component';
import { SignupFormLayoutComponent } from './layouts/auth-layout/signup-form-layout/signup-form-layout.component';
import { FormsModule } from '@angular/forms';
import { ToastLayoutComponent } from './layouts/toast-layout/toast-layout.component';
import { MenuLayoutComponent } from './layouts/menu-layout/menu-layout.component';
import { ChatLayoutComponent } from './layouts/chat-layout/chat-layout.component';
import { ChatListLayoutComponent } from './layouts/chat-list-layout/chat-list-layout.component';
import { FriendshipService } from './services/friendship.service';
import { RoomService } from './services/room.service';
import { RoomUserService } from './services/room-user.service';
import { ChatService } from './services/chat.service';
import { ChatMessageService } from './services/chat-message.service';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    SignupComponent,
    LoginComponent,
    AuthLayoutComponent,
    LoginFormLayoutComponent,
    SignupFormLayoutComponent,
    ToastLayoutComponent,
    MenuLayoutComponent,
    ChatLayoutComponent,
    ChatListLayoutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    UserService,
    FriendshipService,
    RoomService,
    RoomUserService,
    ChatService,
    ChatMessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
