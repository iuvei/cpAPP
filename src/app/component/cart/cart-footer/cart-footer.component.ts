import { Component, OnInit } from '@angular/core';
import { CartService, Betting } from './../../../share/cart.service';
import { GameBaseService, Lottery } from './../../../share/game-base.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
    selector: 'app-cart-footer',
    templateUrl: './cart-footer.component.html',
    styleUrls: ['./cart-footer.component.css']
})
export class CartFooterComponent implements OnInit {
    lottery: Lottery;
    bettings: Betting[]; // 购彩蓝数据
    cartTotal: number; // 购彩蓝总金额
    isTrace: boolean; // 是否追号
    isWinStopTrace: boolean; // 是否中奖停追
    multipleTrace: number;  // 追号倍数
    issueTimesTrace: number; // 追号期数
    maxTraceMultiple: number; // 最大追号倍数(购彩蓝专用)
    bettingSubscription: Subscription;
    constructor(private cartService: CartService, private gameBaseService: GameBaseService) {
        const self = this;
        self.lottery = self.gameBaseService.getLottery();
        self.bettings = self.cartService.bettings;
        self.cartTotal = 0;
        self.isWinStopTrace = self.gameBaseService.isWinStopTrace;
        self.isTrace = self.gameBaseService.isTrace;
        self.multipleTrace = self.gameBaseService.multipleTrace;
        self.issueTimesTrace = self.gameBaseService.issueTimesTrace;
        self.maxTraceMultiple = self.gameBaseService.maxTraceMultiple;
        self.bettingSubscription = self.cartService.bettingsDataObservable
            .subscribe(data => {
                self.bettings = data;
                self.cartTotal = 0;
                for (const betting of data) {
                    self.cartTotal += betting.amount;
                }
                // 当购彩蓝数据变化时，限制最大追号倍数
                let maxMultiple = 1;
                const multipleArr = [];
                for (const betting of self.bettings) {
                    multipleArr.push(betting.maxMultiple);
                }
                console.log(Math.min(...multipleArr));
                maxMultiple = self.bettings.length > 0 ? Math.min(...multipleArr) : 1;
                if (maxMultiple <= self.multipleTrace) {
                    console.log('超过最大追号倍数');
                    self.multipleTrace = maxMultiple;
                    self.gameBaseService.multipleTrace = maxMultiple;
                }
            });
    }

    ngOnInit() {
    }
    /**
     * 追号按钮点击
     */
    traceEvent() {
        const self = this;
        self.isTrace = !self.isTrace;
        self.gameBaseService.isTrace = self.isTrace;
        console.log(self.cartService.bettings);
    }
    /**
     * 中奖停追checkbox
     */
    changeWinStop() {
        const self = this;
        self.isWinStopTrace = !self.isWinStopTrace;
        self.gameBaseService.isWinStopTrace = self.isWinStopTrace;
    }
    /**
     * 增加追号期数
     */
    addIssueTimesTrace() {
        const self = this,
        traceMaxTimes = self.lottery.getTraceMaxTimes();
        if (traceMaxTimes <= self.issueTimesTrace) {
            console.log('超过最大追号期');
            self.issueTimesTrace = traceMaxTimes;
            self.gameBaseService.issueTimesTrace = traceMaxTimes;
        } else {
            self.issueTimesTrace++;
            self.gameBaseService.issueTimesTrace = self.issueTimesTrace;
        }
    }
    /**
     * 减少追号期数
     */
    reduceIssueTimesTrace() {
        const self = this;
        if (1 >= self.issueTimesTrace) {
            return;
        }
        self.issueTimesTrace--;
        self.gameBaseService.issueTimesTrace = self.issueTimesTrace;
    }
    /**
     * 追号期数keyup
     * @param event 事件
     */
    issueKeyUp(event: any) {
        const self = this,
        traceMaxTimes = self.lottery.getTraceMaxTimes();
        console.log(event.target.value);
        let v = event.target.value ? event.target.value.replace(/[^\d|^\.]/g, '') : 0;
        if (Number(v)) {
            v = Number(v) > traceMaxTimes ? traceMaxTimes : Number(v);
            self.issueTimesTrace = v;
        }
        self.gameBaseService.issueTimesTrace = self.issueTimesTrace;
    }
    /**
     * 追号期数blur
     * @param event 事件
     */
    issueBlur(event: any) {
        const self = this,
        traceMaxTimes = self.lottery.getTraceMaxTimes();
        let v = event.target.value || 0;
        if (Number(v)) {
            v = Number(v) > traceMaxTimes ? traceMaxTimes : Number(v);
        } else {
            v = 1;
        }
        self.issueTimesTrace = v;
        self.gameBaseService.issueTimesTrace = self.issueTimesTrace;
    }
    /**
     * 增加追号倍数
     */
    addMultipleTrace() {
        const self = this,
        bettings = self.cartService.bettings;
        let maxMultiple = 1;
        if (bettings.length === 0) {
            return;
        }
        const multipleArr = [];
        for (const betting of bettings) {
            multipleArr.push(betting.maxMultiple);
        }
        console.log(Math.min(...multipleArr));
        // 最大追号倍数为购彩蓝中最小的最大投注倍数
        maxMultiple = Math.min(...multipleArr);
        if (maxMultiple <= self.multipleTrace) {
            console.log('超过最大追号倍数');
            self.multipleTrace = maxMultiple;
            self.gameBaseService.multipleTrace = maxMultiple;
        } else {
            self.multipleTrace++;
            self.gameBaseService.multipleTrace = self.multipleTrace;
        }
    }
    /**
     * 减少追号倍数
     */
    reduceMultipleTrace() {
        const self = this;
        if (1 >= self.multipleTrace) {
            return;
        }
        self.multipleTrace--;
        self.gameBaseService.multipleTrace = self.multipleTrace;
    }
    /**
     * 追号倍数keyup
     * @param event 事件
     */
    multipleKeyUp(event: any) {
        const self = this,
        bettings = self.cartService.bettings;
        let maxMultiple = 1;
        if (bettings.length === 0) {
            return;
        }
        const multipleArr = [];
        for (const betting of bettings) {
            multipleArr.push(betting.maxMultiple);
        }
        console.log(Math.min(...multipleArr));
        // 最大追号倍数为购彩蓝中最小的最大投注倍数
        maxMultiple = Math.min(...multipleArr) || 1;
        let v = event.target.value ? event.target.value.replace(/[^\d|^\.]/g, '') : 0;
        if (Number(v)) {
            v = Number(v) > maxMultiple ? maxMultiple : Number(v);
            self.multipleTrace = v;
        }
        self.gameBaseService.multipleTrace = self.multipleTrace;
    }
    /**
     * 追号倍数blur
     * @param event 事件
     */
    multipleBlur(event: any) {
        const self = this,
        bettings = self.cartService.bettings;
        let maxMultiple = 1;
        const multipleArr = [];
        for (const betting of bettings) {
            multipleArr.push(betting.maxMultiple);
        }
        console.log(Math.min(...multipleArr));
        // 最大追号倍数为购彩蓝中最小的最大投注倍数
        maxMultiple = Math.min(...multipleArr);
        let v = event.target.value || 0;
        if (Number(v)) {
            v = Number(v) > maxMultiple ? maxMultiple : Number(v);
        } else {
            v = 1;
        }
        self.multipleTrace = v;
        self.gameBaseService.multipleTrace = self.multipleTrace;
    }
    /**
     * 确认下单弹框
     */
    submitData() {
        const self = this;

    }
}
