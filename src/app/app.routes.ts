import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { UserCenterComponent } from './component/user-center/user-center.component';
import { LotteryComponent } from './component/lottery/lottery.component';
import { lt11x5 } from './component/lottery/lt11x5/lt11x5.component';
const ROUTER:Routes = [
    { path: '', redirectTo:'/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'user', component: UserCenterComponent},
    {
        path: 'lottery',
        children: [
        { path: '11x5', component: lt11x5 },
        ]
    },
    { path: '**', pathMatch: 'full', redirectTo: '' }
    
  ];

export const routes = RouterModule.forRoot(ROUTER);