import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-login-form-layout',
  templateUrl: './login-form-layout.component.html',
  styleUrls: ['./login-form-layout.component.scss']
})
export class LoginFormLayoutComponent implements OnInit {
  public errorUsername: String = '';
  public errorPassword: String = '';

  public user: User = {
    username: '',
    password: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.user);
  }

}
