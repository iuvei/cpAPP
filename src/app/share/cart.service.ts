import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CartService {
    bettings: Betting[];
    cartTotal: number;
    bettingID: number;
    private bettingAddedSource = new Subject<any>();
    bettingAdded$ = this.bettingAddedSource.asObservable();
    bettingsSoucrce: Subject<object> = new Subject<object>();
    bettingsDataObservable = this.bettingsSoucrce.asObservable();
    cartTotalSoucrce: Subject<object> = new Subject<object>();
    cartTotalObservable = this.cartTotalSoucrce.asObservable();
    constructor() {
        this.cartTotal = 0;
        this.bettings = [];
        this.bettingID = 1;
     }
    /**
     * 添加购物车
     */
    addBettingToCart(currentBet: Betting) {
        // debugger
        const self = this;
        let sameIndex = -1;
        if (currentBet['lotterys'] && currentBet['lotterys'].length > 0) {
            sameIndex = self.checkData(currentBet);
            // 发现有相同注，则增加倍数
            if (sameIndex !== -1) {
                console.log('您选择的号码在号码篮已存在，将直接进行倍数累加');
                this.addMultiple(currentBet['multiple'], sameIndex, currentBet['maxMultiple']);
                return;
            }
            // 新增唯一id标识
            currentBet['id'] = this.bettingID++;
            // 原始选球数据
            currentBet['postParameter'] = this.makePostParameter(currentBet['original']);
            // 倍数备份，用于恢复原始选择的倍数
            currentBet['oldMultiple'] = currentBet['multiple'];
            this.bettings.unshift(currentBet);
            this.bettingsSoucrce.next(this.bettings);
            console.log(this.bettings);
        }
    }
    /**
     * 生成原始选球数据
     * @param original 格式化的选球数据
     */
    makePostParameter(original) {
        const self = this;
        let result = [];
        for (const o of original) {
            result = result.concat(o.join(''));
        }
        return result.join('|');
    }
    /**
     * 判断参数是否重复
     */
    checkData(currentBet: Betting) {
        let original, type, moneyUnit;
        const   self = this,
            saveArray = [];
        type = currentBet['type'];
        original = currentBet['original'];
        for (let i = 0; i < original.length; i++) {
            saveArray.push(original[i].join(''));
        }
        moneyUnit = currentBet['moneyUnit'];
        // 返回对象在数组的索引值index
        // 未找到返回-1
        return self.searchSameResult(type, saveArray.join(), moneyUnit, currentBet['position']);
    }
    /**
     * 增加某注倍数
     */
    addMultiple(num: number, index: number, maxMultiple: number) {
        const self = this,
            bettings = self.bettings,
            changeBetting = bettings[index],
            type = changeBetting['type'],
            id = changeBetting['playId'];
        let maxNum = maxMultiple;
        maxNum = maxNum < 0 ? 999999999 : maxNum;

        if ((changeBetting['multiple'] + num) > maxNum) {
            bettings[index]['multiple'] = maxNum;
            console.log('该组号码倍数已经超过最大限制(' + maxNum + '倍)，将调整为系统支持的最大倍数进行添加');
        } else {
            bettings[index]['multiple'] += num;
        }
        bettings[index]['oldMultiple'] = bettings[index]['multiple'];
        bettings[index]['amount'] = bettings[index]['numCount'] * bettings[index]['moneyUnit'] *
            bettings[index]['multiple'] * bettings[index]['singlePrice'];
    }
    /**
     * 创建订单/注单实例
     */
    getBetting() {
        return new Betting();
    }
    /**
     * 查询同类玩法重复结果
     * @param  {string} type [游戏玩法 例:任选-一中一]
     * @param  {string} data [投注号码 例:12345]
     */
    searchSameResult(type: string, lotteryText: string, moneyUnit: number, position: any = []) {
        const self = this;
        let current, data, bettingsLotteryText,
            saveArray = [],
            pos,
            isSamePosition = true;
            data = self.getTotal().bettings;
        for (let i = 0; i < data.length; i++) {
            saveArray = [];
            current = data[i];
            bettingsLotteryText = current['original'];
            for (const bettingLotteryText of bettingsLotteryText) {
                saveArray.push(bettingLotteryText.join(''));
            }
            pos = data[i]['position'] || [];
            if (pos.length !== position.length) {
                isSamePosition = false;
            } else {
                pos.forEach((v, j) => {
                    if (pos[j] !== position[j]) {
                        isSamePosition = false;
                        return false;
                    }
                });
            }

            if (isSamePosition && current.type === type && lotteryText === saveArray.join() && current.moneyUnit === moneyUnit) {
                return i;
            }
        }
        return -1;
    }
    updateData() {
        const self = this,
              total = self.getTotal();
        // 显示所有订单信息.......
        // 方案注数 1000注，金额 ￥2000.00 元
        // self.setTotalLotterysNum(total['count']);
        // self.setTotalAmount(total['amount']);
    }
    /**
     * 获取购彩蓝总数据
     */
    getTotal() {
        const self = this,
            data = self.bettings,
            len = data.length;
        let count = 0,
            amount = 0;
        for (const d of data) {
            count += d.numCount;
            amount += d.numCount * d.singlePrice * d.moneyUnit * d.multiple;
        }
        return {
            'count': count,
            'amount': amount,
            'bettings': data
        };
    }
}
export class Betting {
    amount: number;
    lotterys: any;
    playId: string;
    moneyUnit: number;
    numCount: number;
    multiple: number;
    maxMultiple: number;
    singlePrice: number;
    original: any;
    prize_group: number;
    type: string;
}
