import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardViewComponent } from './board-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [BoardViewComponent],
  exports: [BoardViewComponent]
})
export class BoardViewModule { }
