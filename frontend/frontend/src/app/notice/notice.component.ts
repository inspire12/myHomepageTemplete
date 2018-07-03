import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ServiceProviderService } from '../service-provider.service';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class NoticeComponent implements OnInit {

  private baseUrl: string;
  private url: string;
  public contentData: object;
  constructor(private http: HttpClient, private serviceProvider: ServiceProviderService) {
    this.baseUrl = serviceProvider.url;
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
