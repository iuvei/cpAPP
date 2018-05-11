import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { UserCenterComponent } from './component/user-center/user-center.component';
import { LotteryComponent } from './component/lottery/lottery.component';
import { Lt11x5Component } from './component/lottery/lt11x5/lt11x5.component';
import { LtHeaderComponent } from './component/lottery/lt-header/lt-header.component';
import { LtFooterComponent } from './component/lottery/lt-footer/lt-footer.component';
import { YizhongyiComponent } from './component/lottery/lt11x5/renxuan/yizhongyi/yizhongyi.component';
import { ErzhongerComponent } from './component/lottery/lt11x5/renxuan/erzhonger/erzhonger.component';
import { SanzhongsanComponent } from './component/lottery/lt11x5/renxuan/sanzhongsan/sanzhongsan.component';
import { SizhongsiComponent } from './component/lottery/lt11x5/renxuan/sizhongsi/sizhongsi.component';
import { WuzhongwuComponent } from './component/lottery/lt11x5/renxuan/wuzhongwu/wuzhongwu.component';
import { LiuzhongwuComponent } from './component/lottery/lt11x5/renxuan/liuzhongwu/liuzhongwu.component';
import { QizhongwuComponent } from './component/lottery/lt11x5/renxuan/qizhongwu/qizhongwu.component';
import { BazhongwuComponent } from './component/lottery/lt11x5/renxuan/bazhongwu/bazhongwu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserCenterComponent,
    LotteryComponent,
    Lt11x5Component,
    LtHeaderComponent,
    LtFooterComponent,
    YizhongyiComponent,
    ErzhongerComponent,
    SanzhongsanComponent,
    SizhongsiComponent,
    WuzhongwuComponent,
    LiuzhongwuComponent,
    QizhongwuComponent,
    BazhongwuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routes,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
