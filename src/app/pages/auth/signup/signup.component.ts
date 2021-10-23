import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {
  public pageName: String = 'signup';
  constructor() { }

  ngOnInit(): void {
  }

}
