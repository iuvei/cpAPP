import { Injectable, ComponentRef } from '@angular/core';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class GameBaseService {
    playComRef: ComponentRef<any>; //  加载的组件实例
    lottery: Lottery;
    // 当前注数
    numCount: number;
    // 当前总投注额
    numAmount: number;
    // 购物车显示状态
    showCart = false;
    currentAmountDataSoucrce: Subject<object> = new Subject<object>();
    currentAmountDataObservable = this.currentAmountDataSoucrce.asObservable();
    showCartSource: Subject<boolean> = new Subject<boolean>();
    showCartObservable = this.showCartSource.asObservable();
    // 选球完成标识
    isBallsComplete: boolean;
    // 元角分
    moneyUnit: number;
    // 玩法缓存
    methodCache: object;
    // 倍数
    multiple: number;
    // 是否追号
    isTrace: boolean;
    // 是否中奖停追
    isWinStopTrace: boolean;
    // 追号倍数
    multipleTrace: number;
    // 追号期数
    issueTimesTrace: number;
    // 最大追号倍数(购彩蓝专用)
    maxTraceMultiple: number;
    multipleSource: Subject<number> = new Subject<number>();
    multipleObservable = this.multipleSource.asObservable();
    public getLottery() {
        return this.lottery;
    }
    public setLottery(lottery: Lottery) {
        this.lottery = lottery;
    }
    constructor() {
        const self = this;
        // 初始化游戏对象
        self.setLottery(new Lottery());
        self.moneyUnit = 1;
        self.multiple = 1;
        self.numCount = 0;
        self.numAmount = 0.00;
        self.isWinStopTrace = true;
        self.isTrace = false; // 是否追号
        self.multipleTrace = 1; // 追号倍数
        self.issueTimesTrace = 1; // 追号期数
        self.maxTraceMultiple = 1; // 最大追号倍数
    }
    /**
     * 根据id得到玩法
     * @param id 玩法id
     */
    getPlayById(id) {
        return this.methodCache['' + id];
    }
    /**
     * 获取某玩法的单注单价
     * * @param id 玩法id
     */
    getOnePriceById(id) {
        return Number(this.getPlayById(id)['price']);
    }
    /**
     * 根据id获取最大投注倍数
     */
    getLimitByPlayId(id, unit = 1) {
        const maxnum = Number(this.getPlayById(id)['max_multiple']);
        return maxnum / unit;
    }
    /**
     * 将玩法树状数据整理成两级缓存数据
     */
    setMethodCache(list) {
        const self = this, getMethodList = list,
        nodeCache = {};
        self.methodCache = {};
        for (const node1 of getMethodList) {
            node1['fullname_en'] = [node1['name_en']];
            node1['fullname_cn'] = [node1['name_cn']];
            nodeCache['' + node1['id']] = node1;
            if (node1['children']) {
                for (const node2 of node1['children']) {
                    node2['fullname_en'] = node1['fullname_en'].concat(node2['name_en']);
                    node2['fullname_cn'] = node1['fullname_cn'].concat(node2['name_cn']);
                    nodeCache['' + node2['id']] = node2;
                    if (node2['children']) {
                        for (const node3 of node2['children']) {
                            node3['fullname_en'] = node2['fullname_en'].concat(node3['name_en']);
                            node3['fullname_cn'] = node2['fullname_cn'].concat(node3['name_cn']);
                            self.methodCache['' + node3['id']] = node3;
                        }
                    }
                }
            }
        }
    }
    /**
     * 改变购物车显示状态
     */
    changeCartStatus() {
        const self = this;
        self.showCart = !self.showCart;
        self.showCartSource.next(self.showCart);
    }
    /**
     * 改变选球数据
     * @param row 行
     * @param col 列
     * @param value 值
     */
    setBallData(row: any, col: any, value: any) {
        const self = this,
        data = self.lottery.getBallsData();
        if (row >= 0 && row < data.length && col >= 0) {
            data[row][col] = value;
        }
        console.log(self.lottery.getBallsData());
    }
    /**
     * 选球事件
     * @param row 横坐标
     * @param col 纵坐标
     */
    selectBallEvent(row: any, col: any) {
        const self = this,
        data = self.lottery.getBallsData();
        if (Number(data[row][col]) === 1) {
            self.setBallData(row, col, -1);
        } else {
            self.setBallData(row, col, 1);
        }
        self.lottery.setBatchBound('none') ;
        self.updateData();
    }
    /**
     * 批量选球
     * @row 行数
     * @bound 类型
     */
    batchselectBallEvent(row: number, bound: string) {
        const self = this,
            ballsData = self.lottery.getBallsData(),
            x = row,
            type = bound,
            len = ballsData[row].length,
            makearr = [],
            start = 0,
            halfLen = Math.ceil((len - start) / 2 + start);
        for (let i = start; i < len; i++) {
            self.setBallData(x, i, -1);
        }
        switch (bound) {
            case 'all':
                for (let i = start; i < len; i++) {
                    self.setBallData(x, i, 1);
                }
                break;
            case 'big':
                for (let i = halfLen; i < len; i++) {
                    self.setBallData(x, i, 1);
                }
                break;
            case 'small':
                for (let i = start; i < halfLen; i++) {
                    self.setBallData(x, i, 1);
                }
                break;
            case 'odd':
                for (let i = start; i < len; i++) {
                    if ((i + 1) % 2 !== 1) {
                        self.setBallData(x, i, 1);
                    }
                }
                break;
            case 'even':
                for (let i = start; i < len; i++) {
                    if ((i + 1) % 2 === 1) {
                        self.setBallData(x, i, 1);
                    }
                }
                break;
            case 'clean':
                for (let i = start; i < len; i++) {
                    self.setBallData(x, i, -1);
                }
                break;
            default:
                break;
        }
        self.lottery.setBatchBound(bound);
        self.updateData();
    }
    /**
     * 获取总注数/获取组合结果
     * getbetList 任何参数时获取投注组合
     */
    getBetData(...getbetList) {
        const self = this,
            data = self.lottery.getBallsData(),
            len = data.length,
            _tempRow = [],
            result = [];
            let row, isEmptySelect = true , len2 = 0, rowNum = 0,
            // 总注数
            total = 1;
        // 检测球是否完整
        for (let i = 0; i < len; i++) {
            result[i] = [];
            row = data[i];
            len2 = row.length;
            for (let j = 0; j < len2; j++) {
                if (row[j] > 0) {
                    isEmptySelect = false;
                    // 需要计算组合则推入结果
                    if (getbetList.length) {
                        result[i].push(j);
                    }
                    rowNum++;
                }
            }
            if (isEmptySelect) {
                // alert('第' + i + '行选球不完整');
                self.isBallsComplete = false;
                return [];
            }
            // 计算注数
            total *= rowNum;
        }
        self.isBallsComplete = true;
        // 返回注数
        if (!getbetList.length) {
            return total;
        }
        if (self.isBallsComplete) {
            // 组合结果
            return self.combination(result);
        } else {
            return [];
        }
    }
    /**
     * 二维数组的排列组合
     * @param arr2 二维数组
     */
    combination(arr2) {
        if (arr2.length < 1) {
            return [];
        }
        const w = arr2[0].length,
            m = [],
            result = [],
            h = arr2.length;
        let i, j,
            n,
            _row = [];

        m[i = h] = 1;

        while (i--) {
            m[i] = m[i + 1] * arr2[i].length;
        }
        n = m[0];
        for (i = 0; i < n; i++) {
            _row = [];
            for (j = 0; j < h; j++) {
                // _row[j] = arr2[j][~~(i % m[j] / m[j + 1])];
                _row[j] = arr2[j][(i % m[j] / m[j + 1])];
            }
            result[i] = _row;
        }
        return result;
    }
    /**
     * 选球之后更新所有数据
     */
    updateData() {
        let betData,
            position,
            original,
            currentAmountData = {
                'numCount': 0,
                'numAmount': 0.00,
            };
        betData = this.getBetData(1);
        position = this.getPositionOptionData();
        original = this.getOriginal();
        const singlePrice = this.getOnePriceById(this.lottery.getCurrentPlayId());
        this.numCount = betData.length;
        this.numAmount = (this.numCount * this.moneyUnit * this.multiple * singlePrice);
        currentAmountData = {
           'numCount': this.numCount,
           'numAmount': this.numAmount
        };
        this.currentAmountDataSoucrce.next(currentAmountData);
    }
    /**
     * 生成min<=num<=Max的数
     */
     randomNumBoth(Min, Max) {
        const Range = Max - Min;
        const Rand = Math.random();
        const num = Min + Math.round(Rand * Range); // 四舍五入
        return num;
  }
    /**
     * 生成单注随机数
     * @param isDw 是否定位
     */
    createRandomNum(isDw = false) {
        // 某些小玩法组件有特殊机选方法时候执行
        if (this.playComRef.instance.createRandomNum) {
            this.playComRef.instance.createRandomNum();
            return;
        }
        const self = this,
        ballsData = self.lottery.getBallsData(),
        len = ballsData.length,
        rowLen = ballsData[0].length;
        let x, y;
        // 机选之前 清空选球
        self.clearSelectBallPanel();
        // 每行产生一个随机数
        if (isDw) {
            for (let i = 0; i < len; i++) {
                y = self.randomNumBoth(0, rowLen - 1);
                ballsData[i][y] = 1;
            }
        } else {
            x = self.randomNumBoth(0, len - 1);
            y = self.randomNumBoth(0, rowLen - 1);
            ballsData[x][y] = 1;
        }
        console.log(ballsData);
        self.updateData();
    }
    /**
     * 重构选球数据
     */
    rebuildData() {
        const self = this,
        ballsData = self.lottery.getBallsData();
        for (const arr1 of ballsData) {
            arr1.forEach((v, k) => {
                arr1[k] = -1;
            });
        }
    }
    /**
     * 清空选球面板
     */
    clearSelectBallPanel()  {
        const self = this;
        self.isBallsComplete = false;
        self.lottery.setBatchBound('none');
        self.rebuildData();
        self.updateData();
        console.log('clearSelectBallPanel');
        console.log(self.lottery.getBallsData());
    }
    getPositionOptionData() {
        return [];
    }
    /**
     * 格式化选球结果组合
     */
    getOriginal() {
        const self = this,
            balls = self.lottery.getBallsData(),
            len = balls.length,
            result = [];
        let row = [],
            len2 = 0;
        for (let i = 0; i < len; i++) {
            row = [];
            len2 = balls[i].length;
            for (let j = 0; j < len2; j++) {
                if (balls[i][j] > 0) {
                    row.push(j);
                }
            }
            result.push(row);
        }
        return result;
    }
}
// 彩票类
export class Lottery {
    // 彩种ID
    lotteryId: string;
    // 彩种中文名称
    gameName_cn: string;
    // 彩种中文英称
    gameName_en: string;
    // 彩种玩法组
    methodList: Array<any>;
    // 彩种期号
    currentNumber: string;
    // 彩种当前期结束时间戳
    currentNumberTime: number;
    // 服务器当前时间戳
    currentTime: number;
    // 最大追号期数
    traceMaxTimes: number;
    // 当前玩法群ID
    currentMethodId: string;
    // 当前玩法群中文名
    currentMethodName_cn: string;
    // 当前小玩法ID
    currentPlayId: string;
     // 当前小玩法中文名
    currentPlayName_cn: string;
    // 选球数据
    ballsData: Array<Array<number>>;
    // 批量选球按钮状态
    batchBound: string;
    // 批量选球按钮状态数组
    batchBoundArr: Array<object>;
    // 最高奖金组
    betMaxPrizeGroup: number;
    // 最低奖金组
    betMinPrizeGroup: number;
    // 用户奖金组
    userPrizeGroup: number;
    constructor() {
    }
    // getter／setter
    public getLotteryId() {
        return this.lotteryId;
    }
    public setLotteryId(lotteryId: string) {
        this.lotteryId = lotteryId;
    }
    public getGameName_cn() {
        return this.gameName_cn;
    }
    public setGameName_cn(gameName_cn: string) {
        this.gameName_cn = gameName_cn;
    }
    public getGameName_en() {
        return this.gameName_cn;
    }
    public setGameName_en(gameName_en: string) {
        this.gameName_en = gameName_en;
    }
    public getMethodList() {
        return this.methodList;
    }
    public setMethodList(methodList: Array<any>) {
        this.methodList = methodList;
    }
    public getCurrentNumber() {
        return this.currentNumber;
    }
    public setCurrentNumber(currentNumber: string) {
        this.currentNumber = currentNumber;
    }
    public getCurrentNumberTime() {
        return this.currentNumberTime;
    }
    public setCurrentNumberTime(currentNumberTime: number) {
        this.currentNumberTime = currentNumberTime;
    }
    public getCurrentTime() {
        return this.currentTime;
    }
    public setCurrentTime(currentTime: number) {
        this.currentTime = currentTime;
    }
    public getTraceMaxTimes() {
        return this.traceMaxTimes;
    }
    public setTraceMaxTimes(traceMaxTimes: number) {
        this.traceMaxTimes = traceMaxTimes;
    }

    public getCurrentMethodId() {
        return this.currentMethodId;
    }
    public setrCurrentMethodId(currentMethodId: string) {
        this.currentMethodId = currentMethodId;
    }
    public getCurrentMethodName_cn() {
        return this.currentMethodName_cn;
    }
    public setCurrentMethodName_cn(currentMethodName_cn: string) {
        this.currentMethodName_cn = currentMethodName_cn;
    }
    public getCurrentPlayId() {
        return this.currentPlayId;
    }
    public setCurrentPlayId(currentPlayId: string) {
        this.currentPlayId = currentPlayId;
    }
    public getCurrentPlayName_cn() {
        return this.currentPlayName_cn;
    }
    public setCurrentPlayName_cn(currentPlayName_cn: string) {
        this.currentPlayName_cn = currentPlayName_cn;
    }
    public getBallsData() {
        return this.ballsData;
    }
    public setBallsData(ballsData: Array<Array<number>>) {
        this.ballsData = ballsData;
    }
    public getBatchBound() {
        return this.batchBound;
    }
    public setBatchBound(batchBound: string) {
        this.batchBound = batchBound;
    }
    public getBatchBoundArr() {
        return this.batchBoundArr;
    }
    public setBatchBoundArr(batchBoundArr: Array<object>) {
        this.batchBoundArr = batchBoundArr;
    }
    public getBetMaxPrizeGroup() {
        return this.betMaxPrizeGroup;
    }
    public setBetMaxPrizeGroup(betMaxPrizeGroup: number) {
        this.betMaxPrizeGroup = betMaxPrizeGroup;
    }
    public getBetMinPrizeGroup() {
        return this.betMinPrizeGroup;
    }
    public setBetMinPrizeGroup(betMinPrizeGroup: number) {
        this.betMinPrizeGroup = betMinPrizeGroup;
    }
    public getUserPrizeGroup() {
        return this.userPrizeGroup;
    }
    public setUserPrizeGroup(userPrizeGroup: number) {
        this.userPrizeGroup = userPrizeGroup;
    }
}
