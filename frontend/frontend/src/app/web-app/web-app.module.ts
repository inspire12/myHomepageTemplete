import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebAppComponent } from './web-app.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WebAppComponent],
  exports: [WebAppComponent]
})
export class WebAppModule { }
