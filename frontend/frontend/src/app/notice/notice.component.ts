import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {

  private baseUrl: string;
  private url: string;
  public contentData: object;
  constructor(private http: HttpClient) {
    this.baseUrl = 'http://127.0.0.1:5001/';
  }

  ngOnInit() {
    this.loadContentList();
  }

  loadContentList(): void {
    const prefix = 'board/list?board_type=notice';
    this.url = this.baseUrl + prefix;
    this.http.get(this.url).toPromise().then((data) => {
      this.contentData = Object.values(data);
    });
  }

  toFormContent(): void {

  }
}
