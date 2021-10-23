import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup-form-layout',
  templateUrl: './signup-form-layout.component.html',
  styleUrls: ['./signup-form-layout.component.scss']
})
export class SignupFormLayoutComponent implements OnInit {
  public errorUsername: String = '';
  public errorPassword: String = '';
  
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
      .then(_ => this.router.navigate(['dashboard']))
      .catch(error => console.log(error));
  }
}
