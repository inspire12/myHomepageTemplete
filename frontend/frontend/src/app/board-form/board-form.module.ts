import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardFormComponent } from './board-form.component';
import {MaterialModule} from '../material.module';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [BoardFormComponent],
  exports: [BoardFormComponent]
})
export class BoardFormModule { }
