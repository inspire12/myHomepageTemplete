import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TopMenuBarComponent} from './top-menu-bar/top-menu-bar.component';
import {HomePageComponent} from './home-page/home-page.component';
import {TopMenuBarModule} from './top-menu-bar/top-menu-bar.module';
import {HomePageModule} from './home-page/home-page.module';
import {BoardModule} from './board/board.module';
import {BoardComponent} from './board/board.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoticeComponent} from './notice/notice.component';
import {NoticeModule} from './notice/notice.module';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule, Routes} from '@angular/router';
import {WebAppModule} from './web-app/web-app.module';



@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        TopMenuBarModule,
        HomePageModule,
        BoardModule,
        NoticeModule,
        WebAppModule,
        AppRoutingModule,
        RouterModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
