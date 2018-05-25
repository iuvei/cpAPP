import { Component, OnInit } from '@angular/core';
import { GameBaseService, Lottery } from '../../../share/game-base.service';
import { CartService, Betting } from './../../../share/cart.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
    selector: 'app-lt-footer',
    templateUrl: './lt-footer.component.html',
    styleUrls: ['./lt-footer.component.css']
})
export class LtFooterComponent implements OnInit {
    numCount: number;
    numAmount: number;
    amountSubscription: Subscription;
    bettingSubscription: Subscription;
    constructor(private gameBaseService: GameBaseService, private cartService: CartService) {
        const self = this;
        this.numCount = this.gameBaseService.numCount;
        this.numAmount = this.gameBaseService.numAmount;
        this.amountSubscription = this.gameBaseService.currentAmountDataObservable
        .subscribe(data => {
            this.numCount = data['numCount'];
            this.numAmount = data['numAmount'];
            }
        );
    }

    ngOnInit() {
    }
    /**
     * 深克隆
     * @param obj 克隆对象
     */
    deepClone(obj) {
        const proto = Object.getPrototypeOf(obj);
        return Object.assign({}, Object.create(proto), obj);
     }
    /**
     * 添加购彩蓝
     */
    addCart() {
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
                prize_group = this.gameBaseService.prize_group,
                cloneFullname_cn = this.gameBaseService.getPlayById(playId)['fullname_cn'].concat(),
                type = cloneFullname_cn.splice(1, 2).join('-');
        const currentBet: Betting = this.cartService.getBetting();
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
     * 显示购物车/隐藏投注页面
     */
    gotoCart() {
        this.gameBaseService.changeCartStatus();
    }
}
