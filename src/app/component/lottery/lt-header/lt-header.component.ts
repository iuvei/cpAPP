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
    @Input() gameName_cn: String;
    @Input() currentMethodId: String;
    @Input() currentPlayId: String;
    @Input() currentPlayArr: Array<any>;
    @Output() change = new EventEmitter();
    constructor() { }

    ngOnInit() {
        // 玩法数据格式化
        console.log(this.methodList);
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
        if (!this.currentMethodId) {
            this.switchMethod('34');
            // this.switchPlay();
        }
    }
    /**
     * 玩法区域显示/隐藏方法
     */
    ctrlSlideDiv() {
        this.show_slide_div = !this.show_slide_div;
        if (this.show_slide_div) {
            this.slideState = 'show';
        } else {
            this.slideState = 'hide';
        }
    }
    /**
     * 切换玩法群组
     */
    switchMethod(methodId: String) {
        const self = this;
        const methodList = this.methodList;
        for (const method of methodList) {
            if (method.id === methodId) {
                self.currentMethodId = methodId;
                self.currentPlayArr = method.children;
                return;
            }
        }
    }
    // /**
    //  * 监听父类传输的playID变化
    //  */
    // playIDChange() {
    //     this.change.emit(this.currentPlayId);
    // }
    /**
     * 切换小玩法
     */
    switchPlay(playId: String) {
        this.currentPlayId = playId;
        this.change.emit(this.currentPlayId);
        return;
    }
}
