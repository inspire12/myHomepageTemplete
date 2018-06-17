import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

    private url;

    constructor(private http: HttpClient) {
        this.url = 'https://localhost:5001/';
    }

    ngOnInit() {
        //this.getUserInfo();
    }

    public getUserInfo(): void {
        this.http.get(this.url).toPromise().then(data => {
            console.log(data);

        });
    }
}
