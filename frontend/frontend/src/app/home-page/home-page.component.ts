import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormGroup, FormControl, Validators} from '@angular/forms';

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
  constructor(private http: HttpClient) {
    this.url = 'https://localhost:5001';
    this.ngHide = true;
  }

  ngOnInit() {
    //this.getUserInfo();
  }

  public ngLoadPosts(){

  }

  public ngLogin(): void {

    const postfix = '/login';
    //ngModel 로 바인딩
    const param = {
      'user_id' : this.userId,
      'user_passwd' : this.userPasswd
    };
    console.log(param)
    this.http.post(this.url + postfix, param).toPromise().then(response => {
      console.log(response);
    });
  }

  public getUserInfo(): void {
    this.http.get(this.url).toPromise().then(data => {
      console.log(data);

    });
  }
}
