import { Component, OnInit } from '@angular/core';
import { GameBaseService } from './../../../share/game-base.service';
@Component({
    selector: 'app-cart-header',
    templateUrl: './cart-header.component.html',
    styleUrls: ['./cart-header.component.css']
})
export class CartHeaderComponent implements OnInit {

    constructor(private gameBaseService: GameBaseService) { }

    ngOnInit() {
    }
    /**
     * 关闭购物车面板
     */
    closeCart() {
        this.gameBaseService.changeCartStatus();
    }
}
