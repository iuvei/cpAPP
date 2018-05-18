import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-yizhongyi',
    templateUrl: './yizhongyi.component.html',
    styleUrls: ['./yizhongyi.component.css']
})
export class YizhongyiComponent implements OnInit {
    @Output() output = new EventEmitter();
    private ballsData: Array<Array<number>>; // 球数据
    private batchBound: string;
    private batchBoundArr: Array<object>;
    /**
     * 构建选球数据
     */
    rebuildData() {
        const self = this;
        self.ballsData = [
            [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
        ];
        self.batchBound = 'none';
        self.batchBoundArr = [
            {
                'batchBound': 'big', 'desc': '大'
            },
            {
                'batchBound': 'small', 'desc': '小'
            },
            {
                'batchBound': 'odd', 'desc': '奇'
            },
            {
                'batchBound': 'even', 'desc': '偶'
            },
            {
                'batchBound': 'all', 'desc': '全'
            },
            {
                'batchBound': 'clean', 'desc': '清'
            },
        ];
    }
    /**
     * 改变选球数据
     * @param x 横坐标
     * @param y 纵坐标
     * @param value 值
     */
    setBallData(x: any, y: any, value: any) {
        const self = this,
        data = self.ballsData;
        // self.fireEvent('beforeSetBallData', x, y, value);
        if (x >= 0 && x < data.length && y >= 0) {
            data[x][y] = value;
        }
        // self.fireEvent('afterSetBallData', x, y, value);
        console.log(self.ballsData);
    }
    /**
     * 选球事件
     * @param x 横坐标
     * @param y 纵坐标
     */
    selectBallEvent(row: any, col: any) {
        const self = this,
        data = self.ballsData;
        if (Number(data[row][col]) === 1) {
            self.setBallData(row, col, -1);
        } else {
            self.setBallData(row, col, 1);
        }
        self.batchBound = 'none';
    }
    /**
     * 批量选球
     * @row 行数
     * @bound 类型
     */
    batchselectBallEvent(row: number, bound: string) {
        const self = this,
            ballsData = self.ballsData,
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
    constructor() { }

    ngOnInit() {
        console.log();
        this.rebuildData();
    }

}
