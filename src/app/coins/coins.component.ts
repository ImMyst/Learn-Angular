import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {
  allowNewCoin = false;

  constructor() {
    setTimeout(() => {
      this.allowNewCoin = true;
    }, 2000);
  }

  ngOnInit() {
  }

}
