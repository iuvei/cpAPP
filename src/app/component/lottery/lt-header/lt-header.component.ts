import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { headAnimate } from '../../../animations/animate';
import { GameBaseService, Lottery } from '../../../share/game-base.service';
@Component({
    selector: 'app-lt-header',
    templateUrl: './lt-header.component.html',
    styleUrls: ['./lt-header.component.css'],
    animations: [
        headAnimate
    ]
})
export class LtHeaderComponent implements OnInit {
    private slideState: String;
    private show_slide_div: Boolean;
    private currentPlayArr: Array<any>;
    // @Input() methodList: any;
    // @Input() gameName_cn: string;
    // @Input() currentMethodId: string;
    // @Input() currentMethodName_cn: string;
    // @Input() currentPlayId: string;
    // @Input() currentPlayArr: Array<any>;
    // @Input() currentPlayName_cn: string;
    @Input() lottery: Lottery;
    private methodList: any;
    @Output() playChange = new EventEmitter();
    constructor(private gameBaseService: GameBaseService) {
        this.slideState = 'false';
        this.show_slide_div = false;
    }
    ngOnInit() {
        // 玩法数据格式化
        this.methodList = this.lottery.getMethodList() ;
        this.methodList.forEach(element => {
            const sonMethod = element.children;
            let arr = [];
            if (sonMethod.length > 0) {
                sonMethod.forEach(gs => {
                    arr = arr.concat(gs.children);
                });
            }
            element.children = arr;
        });
        this.switchMethod(this.lottery.getCurrentMethodId());
        this.switchPlay(this.lottery.getCurrentPlayName_cn(), this.lottery.getCurrentPlayId());
    }
    /**
     * 玩法区域显示/隐藏方法
     */
    ctrlSlideDiv(show_slide_div: boolean) {
        if (this.show_slide_div) {
            this.slideState = 'show';
        } else {
            this.slideState = 'hide';
        }
        this.show_slide_div = !this.show_slide_div;
    }
    /**
     * 切换玩法群组
     */
    switchMethod(methodId: string) {
        const self = this;
        const methodList = this.methodList;
        for (const method of methodList) {
            if (method.id === methodId) {
                self.lottery.setrCurrentMethodId(methodId);
                self.lottery.setCurrentMethodName_cn(method['name_cn']);
                self.currentPlayArr = method.children;
                return;
            }
        }
    }
    /**
     * 切换小玩法
     * currentPlayName_cn 小玩法中文名称
     * playId 小玩法ID
     */
    switchPlay(currentPlayName_cn: string, playId: string) {
        console.log('切换小玩法');
        console.log(currentPlayName_cn, playId);
        this.lottery.setCurrentPlayId(playId);
        this.lottery.setCurrentPlayName_cn(currentPlayName_cn);
        this.playChange.emit();
        this.ctrlSlideDiv(false);
        return;
    }
}
