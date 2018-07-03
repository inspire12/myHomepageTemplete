import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  public userInfo: object;
  constructor() {
    this.userInfo = {
      'userId': ''
    };
  }

  ngOnInit() {
  }

  ngSignup() {
    console.log(this.userInfo['userId']);
  }

}
