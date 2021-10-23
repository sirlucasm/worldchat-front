import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form-layout',
  templateUrl: './login-form-layout.component.html',
  styleUrls: ['./login-form-layout.component.scss']
})
export class LoginFormLayoutComponent implements OnInit {
  public errorUsername: String = '';
  public errorPassword: String = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
