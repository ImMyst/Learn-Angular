import { Component, OnInit } from '@angular/core';

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

  constructor() {
    setTimeout(() => {
      this.allowNewCoin = true;
    }, 2500);
  }

  ngOnInit() {
  }

  onNewToss() {
    this.tossMade = true;
    this.coinTossStatus = 'A new toss was made ! Your bet is ' + this.coinBet;
  }

  onUpdateCoinBet(event: Event) {
    this.coinBet = (<HTMLInputElement>event.target).value;
  }
}
