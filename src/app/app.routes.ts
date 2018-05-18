import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { UserCenterComponent } from './component/user-center/user-center.component';
import { LotteryComponent } from './component/lottery/lottery.component';
import { Lt11x5Component } from './component/lottery/lt11x5/lt11x5.component';
const ROUTER: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'user', component: UserCenterComponent},
    {
        path: 'lottery',
        children: [
            {
                path: '11x5/:lotteryID', component: Lt11x5Component ,
            },
        ]
    },
    { path: '**', pathMatch: 'full', redirectTo: '/home' }
  ];

export const routes = RouterModule.forRoot(ROUTER);
