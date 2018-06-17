import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopMenuBarComponent} from './top-menu-bar.component';
import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "../home-page/home-page.component";
import {BoardComponent} from "../board/board.component";
import {NoticeComponent} from "../notice/notice.component";

const appRoutes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'board', component: BoardComponent},
  {path: 'notice', component: NoticeComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [TopMenuBarComponent],
  exports: [TopMenuBarComponent]
})
export class TopMenuBarModule {
}
