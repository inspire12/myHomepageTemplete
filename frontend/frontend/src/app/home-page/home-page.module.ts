import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from './home-page.component';
import {MaterialModule} from '../material.module';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        HttpClientModule
    ],
    declarations: [HomePageComponent],
    exports: [HomePageComponent],
    providers: [HttpClientModule]
})
export class HomePageModule {
}
