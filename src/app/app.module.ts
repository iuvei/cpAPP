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
import { Lt11x5ComponentList } from './config/dynamic-component-list';

import { GameBaseService } from './share/game-base.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserCenterComponent,
    LotteryComponent,
    Lt11x5Component,
    LtHeaderComponent,
    LtFooterComponent,
    ...Lt11x5ComponentList,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routes,
    HttpModule
  ],
  entryComponents: [
    AppComponent,
    ...Lt11x5ComponentList,
  ],
  providers: [{provide: GameBaseService, useClass: GameBaseService} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
