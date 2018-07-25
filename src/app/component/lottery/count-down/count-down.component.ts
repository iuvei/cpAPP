import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-count-down',
    templateUrl: './count-down.component.html',
    styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit {
    H = 0;
    M = 0;
    S = 0;
    constructor() { }

    ngOnInit() {
        this.countDown();
    }

    countDown() {
        const self = this,
            currentTime = new Date().getTime(),
            endTime = new Date('2018/06/21 15:00:00').getTime();
        if (Number(currentTime - endTime) > 0) {
            console.log('新奖期出现');
        } else {
            const lastTime = endTime - currentTime;
            const pxH = 1000 * 60 * 60;
            const pxM = 1000 * 60;
            const pxS = 1000;
            self.H = Math.floor(lastTime / pxH);
            self.M = Math.floor((lastTime - pxH * self.H) / pxM);
            self.S = Math.floor((lastTime - pxH * self.H - pxM * self.M) / pxS);
            setTimeout(() => {
                self.countDown();
            }, 1000);
        }

    }

}
