import { Component, OnInit } from '@angular/core';
import { CartService, Betting } from './../../../share/cart.service';
import { Subscription } from 'rxjs/Subscription';
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

}
