import { Injectable } from '@angular/core';

@Injectable()
export class GameBaseService {
    public lottery: Lottery;
    public getLottery() {
        return this.lottery;
    }
    public setLottery(lottery: Lottery) {
        this.lottery = lottery;
    }
    constructor() {
        this.setLottery(new Lottery());
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
            self['batchBound'] = bound;
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

}
