import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-yizhongyi',
    templateUrl: './yizhongyi.component.html',
    styleUrls: ['./yizhongyi.component.css']
})
export class YizhongyiComponent implements OnInit {
    @Output() output = new EventEmitter();
    constructor() { }

    ngOnInit() {
    }

}
