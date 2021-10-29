import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Toast } from 'src/app/interfaces/toast.interface';
import { User } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-form-layout',
  templateUrl: './login-form-layout.component.html',
  styleUrls: ['./login-form-layout.component.scss']
})
export class LoginFormLayoutComponent implements OnInit {
  public errorMessage: String = '';
  public showMessage: Boolean = false;

  public toastProps: Toast = {
    type: 'danger',
    message: this.errorMessage,
    show: this.showMessage
  };

  public user: User = {
    username: '',
    password: ''
  }

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.login(this.user)
      .subscribe(
        user => {
          localStorage.setItem('@worldchat/user', JSON.stringify(user));
          this.router.navigate(['chats']);
        },
        ({ error }) => {
          this.toastProps.show = true;
          this.toastProps.message = error.message;
        }
      )
  }
}
