import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-form-layout',
  templateUrl: './signup-form-layout.component.html',
  styleUrls: ['./signup-form-layout.component.scss']
})
export class SignupFormLayoutComponent implements OnInit {
  public errorUsername: String = '';
  public errorPassword: String = '';

  constructor() { }

  ngOnInit(): void {
  }

}
