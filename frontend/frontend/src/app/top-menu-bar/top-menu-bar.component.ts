import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-top-menu-bar',
    templateUrl: './top-menu-bar.component.html',
    styleUrls: ['./top-menu-bar.component.css']
})
export class TopMenuBarComponent implements OnInit {

    tab: string;

    constructor() {
    }

    ngOnInit() {
        this.tab = 'home';
        console.log(this.tab);
    }

    /**
     *
     * @param {string} tab
     */
    public selectTab(tab: string): string {
        if (this.tab === tab) {
            return 'active';
        }
        return '';
    }
    public tabFocus(tab: string): void {
        this.tab = tab;
    }
}
