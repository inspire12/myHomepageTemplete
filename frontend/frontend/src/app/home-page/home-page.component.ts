import {Component, OnInit, Inject} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ServiceProviderService } from '../service-provider.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  private url;
  public userId;
  public userPasswd;
  public noticeList;
  public teamList;


  public ngHide;
  constructor(private http: HttpClient, public dialog: MatDialog, private serviceProvider: ServiceProviderService) {
    this.url = serviceProvider.url;
    this.ngHide = true;
  }

  ngOnInit() {
    //this.getUserInfo();
  }

  public ngLoadPosts() {

  }
  //
  public ngLogin(): void {

    const postfix = '/v1.0/user/login';
    //ngModel 로 바인딩
    const param = {
      'user_id' : this.userId,
      'user_passwd' : this.userPasswd
    };
    console.log(param);
    this.http.post(this.url + postfix, param).toPromise().then(response => {
      console.log(response);
    });
  }

  public ngSignUp(): void {
    // modal 로 회원가입 페이지 생성

  }
  public getUserInfo(): void {
    this.http.get(this.url).toPromise().then(data => {
      console.log(data);

    });
  }
}

