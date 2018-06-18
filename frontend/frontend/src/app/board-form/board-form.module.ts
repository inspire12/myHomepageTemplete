import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardFormComponent } from './board-form.component';
import {MaterialModule} from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [BoardFormComponent],
  exports: [BoardFormComponent]
})
export class BoardFormModule { }
