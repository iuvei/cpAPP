import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GameBaseService, Lottery } from '../../../../../share/game-base.service';
@Component({
    selector: 'app-yizhongyi',
    templateUrl: './yizhongyi.component.html',
    styleUrls: ['./yizhongyi.component.css']
})
export class YizhongyiComponent implements OnInit {
    @Output() output = new EventEmitter();
    private ballsData: Array<Array<number>>; // 球数据
    public lottery: Lottery;
    private batchBound: string;
    private batchBoundArr: Array<object>;
    /**
     * 构建选球数据
     */
    rebuildData() {
        const self = this;
        self.lottery.setBallsData([
            [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
        ]);
        self.lottery.setBatchBound('none');
        self.lottery.setBatchBoundArr([
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
        ]);
    }
    constructor(private gameBaseService: GameBaseService) {
        this.lottery = gameBaseService.getLottery();
    }
    selectBallEvent(row: any, col: any) {
        this.gameBaseService.selectBallEvent(row, col);
    }
    batchselectBallEvent(row: number, bound: string) {
        this.gameBaseService.batchselectBallEvent(row, bound);
    }
    ngOnInit() {
        this.rebuildData();
    }

}
