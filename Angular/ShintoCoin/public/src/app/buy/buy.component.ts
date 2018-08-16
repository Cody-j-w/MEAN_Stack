import { Component, OnInit } from '@angular/core';
import {HttpService} from './../http.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  ShintoVal = 0;
  num = Number;
  Shintowned = 0;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  
    this.getValue();
    this.getQuant();
  }
  getValue(){
    this.ShintoVal = this._httpService.displayVal();
  }
  getQuant(){
    this.Shintowned = this._httpService.displayQuant();
  }
  purchaseShinto(num){
    this.num = num;
    this._httpService.createTransaction(num, 'purchase');
    this._httpService.incrementVal(num);
    this._httpService.addShinto(num);
    this.getValue();
    this.getQuant();
  }

}
