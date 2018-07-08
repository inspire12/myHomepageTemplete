import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceProviderService } from 'src/app/service-provider.service.js';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  url: string;
  public userId;
  public userName;
  userPasswd;
  userStudentName;
  userEmail;
  birthDay;
  location; // 자취, 통학, 긱사
  hometown;
  level; // 졸업, 재학, 휴학, 기타

  private userPasswd2;

  public userInfo: object;

  constructor(private http: HttpClient, private serviceProvider: ServiceProviderService) {
    this.url = serviceProvider.url + '/user/signup';
    this.userInfo = {};
  }

  // ngModel 확인 위해서 사용
  log(data) {
    console.log(data);
  }

  ngOnInit() {
  }

  ngSignup() {
    console.log(this.userInfo['userId']);
    this.userInfo = {
        '_id': this.userId,
        'userPasswd': this.userPasswd,
        'userName': this.userName,
        'userStudentName': this.userStudentName,
        'userEmail': this.userEmail,
        'birthDay': this.birthDay,
        'location': this.location, // 자취, 통학, 긱사
        'hometown': this.hometown,
        'level': this.level, // 졸업, 재학, 휴학, 기타
      };

    this.http.post(this.url, this.userInfo)
      .toPromise()
      .then(res => {
        console.log(res);
      });
  }

}
