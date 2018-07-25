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
    numCount: number; // 当前选球注数
    numAmount: number; // 当前投注金额
    multiple: number;   // 倍数
    cartTotal: number;
    amountSubscription: Subscription;
    bettingSubscription: Subscription;
    constructor(private gameBaseService: GameBaseService, private cartService: CartService) {
        const self = this;
        self.numCount = self.gameBaseService.numCount;
        self.numAmount = self.gameBaseService.numAmount;
        self.multiple = self.gameBaseService.multiple;
        // 选球金额和注数
        self.amountSubscription = self.gameBaseService.currentAmountDataObservable
        .subscribe(data => {
            self.numCount = data['numCount'];
            self.numAmount = data['numAmount'];
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
     * 显示购物车/隐藏投注页面
     */
    gotoCart() {
        this.gameBaseService.changeCartStatus();
    }
    /**
     * 生成随机投注号码
     */
    createRandomNum(num = 1) {
        const self = this;
        self.gameBaseService.createRandomNum();
    }
    /**
     * 增加倍数
     */
    addMultiple() {
        const self = this,
        lotteryObj = self.gameBaseService.getLottery(),
        playId = lotteryObj.getCurrentPlayId(),
        maxMultiple = self.gameBaseService.getLimitByPlayId(playId);
        if (maxMultiple <= self.multiple) {
            return;
        }
        self.multiple++;
        self.gameBaseService.multiple = self.multiple;
    }
    /**
     * 减少倍数
     */
    reduceMultipe() {
        const self = this,
        lotteryObj = self.gameBaseService.getLottery(),
        playId = lotteryObj.getCurrentPlayId(),
        maxMultiple = self.gameBaseService.getLimitByPlayId(playId);
        if (1 >= self.multiple) {
            return;
        }
        self.multiple--;
        self.gameBaseService.multiple = self.multiple;
    }
    /**
     * 倍数keyup
     * @param event 事件
     */
    multipeKeyUp(event: any) {
        const self = this,
        lotteryObj = self.gameBaseService.getLottery(),
        playId = lotteryObj.getCurrentPlayId(),
        maxMultiple = self.gameBaseService.getLimitByPlayId(playId);
        console.log(event.target.value);
        let v = event.target.value;
        if (Number(v)) {
            v = Number(v) > maxMultiple ? maxMultiple : Number(v);
            this.multiple = v;
            self.gameBaseService.multiple = self.multiple;
        }
    }
    /**
     * 倍数blur
     * @param event 事件
     */
    multipeBlur(event: any) {
        const self = this,
        lotteryObj = self.gameBaseService.getLottery(),
        playId = lotteryObj.getCurrentPlayId(),
        maxMultiple = self.gameBaseService.getLimitByPlayId(playId);
        let v = event.target.value || 0;
        if (Number(v)) {
            v = Number(v) > maxMultiple ? maxMultiple : Number(v);
        } else {
            v = 1;
        }
        this.multiple = v;
        self.gameBaseService.multiple = self.multiple;
    }
    /**
     * 元角分下拉框选择
     */
    moneyUnitChange(event: any) {
        const v = event.target.value;
        this.gameBaseService.moneyUnit = v;
    }
}
