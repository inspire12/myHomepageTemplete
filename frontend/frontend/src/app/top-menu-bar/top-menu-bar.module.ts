import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopMenuBarComponent } from './top-menu-bar.component';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from '../home-page/home-page.component';

const appRoutes: Routes = [
  {path: 'home', component: HomePageComponent},
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [TopMenuBarComponent],
  exports: [TopMenuBarComponent]
})
export class TopMenuBarModule { }
