import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TopMenuBarComponent} from './top-menu-bar/top-menu-bar.component';
import {HomePageComponent} from './home-page/home-page.component';
import {TopMenuBarModule} from './top-menu-bar/top-menu-bar.module';
import {HomePageModule} from './home-page/home-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TopMenuBarModule,
    HomePageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
