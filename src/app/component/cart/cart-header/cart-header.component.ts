import { Component, OnInit, Input } from '@angular/core';
import { GameBaseService, Lottery } from '../../../share/game-base.service';
import { CartService, Betting } from './../../../share/cart.service';
@Component({
    selector: 'app-cart-header',
    templateUrl: './cart-header.component.html',
    styleUrls: ['./cart-header.component.css']
})
export class CartHeaderComponent implements OnInit {
    lottery: Lottery;
    constructor(private gameBaseService: GameBaseService, private cartService: CartService) {
        this.lottery = this.gameBaseService.getLottery();
    }

    ngOnInit() {
    }
    /**
     * 关闭购物车面板
     */
    closeCart() {
        this.gameBaseService.changeCartStatus();
    }
    /**
     * 机选一注,并添加进购彩蓝
     */
    randomBetting() {
        const self = this;
        self.gameBaseService.createRandomNum();
        // 没有有效选球
        if (this.gameBaseService.getBetData() <= 0) {
            return ;
        }
        const   lotterys = this.gameBaseService.getBetData(1),
            lotteryObj = this.gameBaseService.getLottery(),
            playId = lotteryObj.getCurrentPlayId(),
            moneyUnit = this.gameBaseService.moneyUnit,
            amount = this.gameBaseService.numAmount,
            numCount = this.gameBaseService.numCount,
            multiple = this.gameBaseService.multiple,
            maxMultiple = this.gameBaseService.getLimitByPlayId(playId),
            singlePrice = this.gameBaseService.getOnePriceById(playId),
            original = this.gameBaseService.getOriginal(),
            prize_group = lotteryObj.getUserPrizeGroup(),
            cloneFullname_cn = this.gameBaseService.getPlayById(playId)['fullname_cn'].concat(),
            type = cloneFullname_cn.splice(1, 2).join('-'),
            currentBet: Betting = this.cartService.getBetting();
        currentBet.playId = playId;
        currentBet.original = original;
        currentBet.amount = amount;
        currentBet.multiple = multiple;
        currentBet.maxMultiple = maxMultiple;
        currentBet.numCount = numCount;
        currentBet.prize_group = prize_group;
        currentBet.type = type;
        currentBet.singlePrice = singlePrice;
        currentBet.lotterys = lotterys;
        currentBet.moneyUnit = moneyUnit;
        this.cartService.addBettingToCart(currentBet);
        this.gameBaseService.clearSelectBallPanel();
    }
    /**
     * 清空购彩蓝
     */
    clearCart() {
        const self = this;
        self.cartService.clearCart();
    }
}
