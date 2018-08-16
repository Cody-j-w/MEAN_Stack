import { Component, OnInit } from '@angular/core';
import {HttpService} from './../http.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  ShintoVal = 0;
  Shintowned = 0;
  num = Number;

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
  sellShinto(num){
    this.num = num;
    console.log()
    this._httpService.createTransaction(num, 'sale');
    this._httpService.decrementVal(num);
    this._httpService.removeShinto(num);
    this.getValue();
    this.getQuant();
  }

}
