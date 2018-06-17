import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BoardComponent} from "./board/board.component";
import {NoticeComponent} from "./notice/notice.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {RouterModule, Routes} from "@angular/router";


const appRoutes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'notice', component: NoticeComponent},
  {path: 'board', component: BoardComponent},
  {path: '**', component: HomePageComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: []
})
export class AppRoutingModule {
}
