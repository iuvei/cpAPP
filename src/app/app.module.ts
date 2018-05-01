import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { UserCenterComponent } from './component/user-center/user-center.component';
import { LotteryComponent } from './component/lottery/lottery.component';
import { routes } from  './app.routes';
import { lt11x5 } from './component/lottery/lt11x5/lt11x5.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserCenterComponent,
    LotteryComponent,
    lt11x5,
  ],
  imports: [
    BrowserModule,
    routes,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
