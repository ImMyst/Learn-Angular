import { Component, OnInit } from '@angular/core';
import { CoinComponent } from '../coin/coin.component';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {
  allowNewCoin = false;
  coinTossStatus = 'No new toss was made !';
  coinBet = '';
  tossMade = false;
  coins = ['flip', 'flop'];
  coinFlipResult = 'flip';

  constructor() {
    setTimeout(() => {
      this.allowNewCoin = true;
    }, 2500);
        this.coinFlipResult = Math.random() > 0.5 ? 'flip' : 'flop';
    }


  ngOnInit() {
  }

  onNewToss() {
    this.tossMade = true;
    this.coins.push(this.coinBet);
    this.coinTossStatus = 'A new toss was made ! Your bet is ' + this.coinBet;
    if (this.coinBet === this.coinFlipResult) {
      console.log('Salut');
    } else {
      console.log('Dommage');
    }
  }

  onUpdateCoinBet(event: Event) {
    this.coinBet = (<HTMLInputElement>event.target).value;
  }
}
