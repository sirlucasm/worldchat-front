import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';

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

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.user);
  }
}
