import { Component, OnInit } from '@angular/core';
import { CartService, Betting } from './../../../share/cart.service';
import { Subscription } from 'rxjs/Subscription';
import { MultiplePipe } from './../../../pipe/multiple.pipe';
@Component({
    selector: 'app-cart-list',
    templateUrl: './cart-list.component.html',
    styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
    bettings: any;
    bettingSubscription: Subscription;
    constructor(private cartService: CartService) {
        this.bettings = this.cartService.bettings;
        this.bettingSubscription = this.cartService.bettingsDataObservable
        .subscribe(data => {
            console.log(data);
            this.bettings = data;
        });
     }

    ngOnInit() {
    }
    /**
     * 删除购彩蓝某行数据
     */
    deleteCartRow(index: number) {
        this.cartService.deleteCartRow(index);
    }

}
