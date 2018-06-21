import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-web-app',
  templateUrl: './web-app.component.html',
  styleUrls: ['./web-app.component.css'],
  // css 적용 위해서
  encapsulation: ViewEncapsulation.None
})
export class WebAppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
