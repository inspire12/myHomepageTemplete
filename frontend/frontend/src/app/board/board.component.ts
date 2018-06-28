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

  // 한페이지에 얼마나 보여주는지
  public showPage: number;
  public ngPageNumber: number[];
  // 지금 페이지
  public nowPage: number;
  // 보여주는 글 부분
  public showContent: string[];
  // 전체 글 데이터를 받는 부분
  public allContent: string[];

  public totalPage: number;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://127.0.0.1:5001/';
    this.ngPageNumber = [];
    this.showPage = 10;
    this.nowPage = 8;
    this.totalPage = 0;
  }

  ngOnInit() {
    // this.loadContentList();
    // totalPage = totalArticle / pageView;

    this.setPagenate();
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
      this.allContent = Object.values(data);
      this.totalPage = this.allContent.length / this.showPage ;
    });
  }

  public setPagenate() {
    this.ngPageNumber = [];
    if (this.nowPage > this.totalPage) {
      return;
    }
    if (this.nowPage < this.showPage / 2) {
      for (let i = 0; i < this.showPage; i++) {
        this.ngPageNumber.push(i);
      }
    } else if (this.nowPage + this.showPage / 2 > this.totalPage) {
      for (let i = this.totalPage - this.showPage; i < this.totalPage; i++) {
        this.ngPageNumber.push(i);
      }
    } else {
      for (let i = this.nowPage - Math.floor((this.showPage) / 2); i < this.nowPage + Math.ceil((this.showPage) / 2); i++) {
        this.ngPageNumber.push(i);
      }
    }
    console.log(this.ngPageNumber);
    this.showContent = [];
    for (let i = this.nowPage * this.showPage; i < this.allContent.length && i < (this.nowPage + 1) * this.showPage; i++) {
      this.showContent.push(this.allContent[i]);
    }
  }

  public selectPage(element: number): boolean {
    return (element === this.nowPage);
  }

  public clickPage(element: number): void {
    this.nowPage = element;
    this.setPagenate();




    // 내용 바꿔주는 부분
  }
}
