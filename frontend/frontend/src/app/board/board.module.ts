import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BoardComponent} from './board.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
      HttpClientModule
  ],
  declarations: [BoardComponent],
  exports: [BoardComponent],
  providers: [HttpClient]
})
export class BoardModule {
}
