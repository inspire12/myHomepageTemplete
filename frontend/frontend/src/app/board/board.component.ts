import {Component, OnInit} from '@angular/core';
import {HttpClientModule, HttpClient, HttpParams} from '@angular/common/http';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  private baseUrl: string;
  private url: string;
  public contentData: object;
  public depth: number[][];

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://127.0.0.1:5001/';
  }

  ngOnInit() {
    this.loadContentList();
  }

  loadContentList(): void {
    const prefix = 'board/list';
    this.url = this.baseUrl + prefix;
    const param = new HttpParams().set('board_type', 'team');
    this.http.get(this.url, {params: param}).toPromise().then((data) => {

      for (const index in data) {
        if (data !== undefined) {
          for (let i = 0; i < +data[index]['depth'] - 1; i++) {
            data[index]['title'] = ' ㄴ ' + data[index]['title'];
          }
          console.log(data[index]['_id']);
        }
      }
      this.contentData = Object.values(data);

      console.log(this.contentData);
    });
  }

}
