import {Component, OnInit} from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor(public http: HttpClient) {
  }

  public dataSource: object;
  private base: string;
  private url: string;

  ngOnInit() {
    // 나중에 환경변수(서비스 프로바이더)로 일괄 변경 가능하게
    this.base = 'localhost:27017';

  }

  public ngLoadContentList(): void {
    this.http.get(this.url).toPromise().then((data) => {

    }).catch(error => {

    });
  }

}
