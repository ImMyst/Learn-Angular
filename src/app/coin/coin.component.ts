import { Component } from '@angular/core';

@Component({
    selector: 'app-coin',
    templateUrl: './coin.component.html'
})
export class CoinComponent {
    coinId = 1;
    coinFlipResult = 'flip';

    getFlipResult() {
        return this.coinFlipResult;
    }
}
