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
  public user_id;
  public passwd;
  public ngHide;
  constructor(private http: HttpClient) {
    this.url = 'https://localhost:5001';
    this.ngHide = true;
  }

  ngOnInit() {
    //this.getUserInfo();
  }

  public ngLogin(): void {


    const postfix = '/login';
    const param = {
      'user_id' : this.user_id,
      'passwd' : this.passwd
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
