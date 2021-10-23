import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';

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

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.login(this.user)
      .then(_ => this.router.navigate(['dashboard']))
      .catch(error => console.log(error));
  }

}
