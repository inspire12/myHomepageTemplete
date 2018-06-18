import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NoticeComponent} from './notice.component';
import {MaterialModule} from '../material.module';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {AppRoutingModule} from '../app-routing.module';
import {BoardViewComponent} from '../board-view/board-view.component';
import {BoardViewModule} from '../board-view/board-view.module';
import {BoardFormComponent} from '../board-form/board-form.component';
import {BoardFormModule} from '../board-form/board-form.module';
import {Routes, RouterModule} from '@angular/router';


const appChildRoutes: Routes = [
 {path: 'view', component: BoardViewComponent},
  {path: 'form', component: BoardFormComponent},

]
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule,
    BoardViewModule,
    BoardFormModule,
    RouterModule.forChild(appChildRoutes)
  ],
  declarations: [NoticeComponent],
  exports: [NoticeComponent],
  providers: [HttpClient]

})
export class NoticeModule {
}
