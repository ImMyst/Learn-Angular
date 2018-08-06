import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {
  allowNewCoin = false;
  coinTossStatus = 'No new toss was made !';

  constructor() {
    setTimeout(() => {
      this.allowNewCoin = true;
    }, 2500);
  }

  ngOnInit() {
  }

  onNewToss() {
    this.coinTossStatus = 'A new toss was made !';
  }

}
