import { Component } from '@angular/core';

@Component({
    selector: 'app-coin',
    templateUrl: './coin.component.html',
    styleUrls: ['./coin.component.css']
})
export class CoinComponent {
    coinId = 1;
    coinFlipResult = 'flip';

    constructor() {
        this.coinFlipResult = Math.random() > 0.5 ? 'flip' : 'flop';
    }

    getFlipResult() {
        return this.coinFlipResult;
    }

    getColor() {
        return this.coinFlipResult === 'flip' ? '#47bb76' : '#ff3c00';
    }
}
