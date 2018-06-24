import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatInputModule, MatFormFieldModule} from '@angular/material';
import {HomePageComponent} from './home-page.component';
import {MaterialModule} from '../material.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        HttpClientModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule
    ],
    declarations: [HomePageComponent],
    exports: [HomePageComponent],
})
export class HomePageModule {
}
