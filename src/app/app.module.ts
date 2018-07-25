
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { CartService } from './share/cart.service';
import { CartListComponent } from './component/cart/cart-list/cart-list.component';
import { CartHeaderComponent } from './component/cart/cart-header/cart-header.component';
import { CartFooterComponent } from './component/cart/cart-footer/cart-footer.component';
import { CartIndexComponent } from './component/cart/cart-index/cart-index.component';
import { MultiplePipe } from './pipe/multiple.pipe';
import { CountDownComponent } from './component/lottery/count-down/count-down.component';
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
    CartListComponent,
    CartHeaderComponent,
    CartFooterComponent,
    CartIndexComponent,
    MultiplePipe,
    CountDownComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    routes,
    HttpModule
  ],
  entryComponents: [
    AppComponent,
    ...Lt11x5ComponentList,
  ],
  providers: [{provide: GameBaseService, useClass: GameBaseService}, {provide: CartService, useClass: CartService} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
