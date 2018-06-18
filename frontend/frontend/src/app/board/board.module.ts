import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BoardComponent} from './board.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {BoardFormComponent} from "../board-form/board-form.component";
import {BoardViewComponent} from "../board-view/board-view.component";
import {Routes, RouterModule} from '@angular/router';


const appChildRoutes: Routes = [
 {path: 'view', component: BoardViewComponent},
  {path: 'form', component: BoardFormComponent},
]
@NgModule({
  imports: [
    CommonModule,
      HttpClientModule,

    RouterModule.forChild(appChildRoutes)

  ],
  declarations: [BoardComponent],
  exports: [BoardComponent],
  providers: [HttpClient]
})
export class BoardModule {
}
