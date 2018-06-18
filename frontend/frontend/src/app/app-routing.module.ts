import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BoardComponent} from "./board/board.component";
import {NoticeComponent} from "./notice/notice.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {RouterModule, Routes} from "@angular/router";
import {BoardViewComponent} from "./board-view/board-view.component";
import {BoardFormComponent} from "./board-form/board-form.component";


const appRoutes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'notice', component: NoticeComponent},
  {path: 'board', component: BoardComponent},
];

const appChildRoutes: Routes = [
 {path: 'view/:id', component: BoardViewComponent},
  {path: 'form', component: BoardFormComponent},

]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    RouterModule.forChild(appChildRoutes)
  ],
  declarations: []
})
export class AppRoutingModule {
}
