import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatFormFieldModule, MatDialogModule } from '@angular/material';
import { HomePageComponent } from './home-page.component';
import { MaterialModule } from '../material.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    RouterModule
  ],
  declarations: [HomePageComponent],
  exports: [HomePageComponent],
})
export class HomePageModule {
}
