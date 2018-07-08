import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-board-form',
  templateUrl: './board-form.component.html',
  styleUrls: ['./board-form.component.css']
})
export class BoardFormComponent implements OnInit {

  private baseUrl = 'http://127.0.0.1:5001';
  private url: string;
  public boardType: string;
  public title: string;
  public content: string;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
  }

  /**
   * 번호
   */
  public saveContent() {

    this.url = this.baseUrl + '/board/form';
    const index = 5;
    this.boardType = 'team';
    const depth = 1;
    // 추가 시 인덱스는 백엔드에 맡겨야 할거 같다. 수정 시에는 넘기고
    const params = {
      '_id': this.boardType + '_' + (index) + '_' + (depth),
      'index': index,
      'board_type': this.boardType,
      'title': this.title,
      'content': this.content,
      'user_id': 'inspire12', //TODO: 테스트로 일단 inspire12 로그인 구현 후 수정
      'depth': depth,
      'images': [],
      'files': [],
      'created_data': '2010-05-02',
      'hit': '0',
      'recommend': []
    };
    this.http.post(this.url, params)
      .toPromise()
      .then((response) => {

        console.log(response);
      });

  }
}
