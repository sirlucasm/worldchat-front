import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Toast } from 'src/app/interfaces/toast.interface';
import { User } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup-form-layout',
  templateUrl: './signup-form-layout.component.html',
  styleUrls: ['./signup-form-layout.component.scss']
})
export class SignupFormLayoutComponent implements OnInit {
  public errorMessage: String = '';
  public showMessage: Boolean = false;

  @Output() public toastProps: Toast = {
    type: 'danger',
    message: this.errorMessage,
    show: this.showMessage
  };
  
  public user: User = {
    username: '',
    email: '',
    password: ''
  }

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.createAccount(this.user)
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
