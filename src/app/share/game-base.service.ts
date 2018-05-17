import { Injectable } from '@angular/core';

@Injectable()
export class GameBaseService {
    private name: string;
    constructor() {
     }
    test() {
        this.name = '111';
        console.log(this.name);
    }
}
