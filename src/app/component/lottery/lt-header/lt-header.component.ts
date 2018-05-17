import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { headAnimate } from '../../../animations/animate';

@Component({
    selector: 'app-lt-header',
    templateUrl: './lt-header.component.html',
    styleUrls: ['./lt-header.component.css'],
    animations: [
        headAnimate
    ]
})
export class LtHeaderComponent implements OnInit {
    private slideState: String = 'hide';
    private show_slide_div: Boolean = false;
    @Input() methodList: any;
    @Input() gameName_cn: string;
    @Input() currentMethodId: string;
    @Input() currentMethodName_cn: string;
    @Input() currentPlayId: string;
    @Input() currentPlayArr: Array<any>;
    @Input() currentPlayName_cn: string;
    @Output() playChange = new EventEmitter();
    constructor() { }

    ngOnInit() {
        // 玩法数据格式化
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
        this.switchMethod(this.currentMethodId);
        this.switchPlay(this.currentPlayName_cn, this.currentPlayId);
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
                self.currentMethodId = methodId;
                self.currentPlayArr = method.children;
                self.currentMethodName_cn = method['name_cn'];
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
        this.currentPlayId = playId;
        this.currentPlayName_cn = currentPlayName_cn;
        // this.playChange.emit([this.currentPlayName_cn, this.currentPlayId]);
        this.playChange.emit({'currentPlayName_cn': this.currentPlayName_cn, 'currentPlayId': this.currentPlayId,
            'currentMethodName_cn': this.currentMethodName_cn});
        this.ctrlSlideDiv(false);
        return;
    }
}
