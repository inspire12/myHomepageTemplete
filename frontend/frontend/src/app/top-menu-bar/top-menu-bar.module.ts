import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopMenuBarComponent} from './top-menu-bar.component';
import {RouterModule, Routes} from '@angular/router';

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
