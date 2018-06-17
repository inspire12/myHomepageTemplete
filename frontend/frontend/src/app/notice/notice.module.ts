import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NoticeComponent} from './notice.component';
import {MaterialModule} from '../material.module';
import {HttpClientModule, HttpClient} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule
  ],
  declarations: [NoticeComponent],
  exports: [NoticeComponent],
  providers: [HttpClient]

})
export class NoticeModule {
}
