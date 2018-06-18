import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-board-view',
  templateUrl: './board-view.component.html',
  styleUrls: ['./board-view.component.css']
})
export class BoardViewComponent implements OnInit {

  public user_id: string;
  public date: string;
  public content: string;
  public file: string[];
  public comment;
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
  }

  loadBoardView() {

  }

  saveComment() {
    console.log(this.comment);
  }
}
