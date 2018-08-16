import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  ShintoVal = 0;
  Shintowned = 0;
  transactions = [];
  incrementVal(num){
    this.ShintoVal += num;
  }
  decrementVal(num){
    this.ShintoVal -= num;
  }
  displayVal(){
    return this.ShintoVal;
  }
  displayQuant(){
    return this.Shintowned;
  }
  displayTransactions(){
    return this.transactions;
  }
  addShinto(num){
    this.Shintowned += num;
  }
  removeShinto(num){
    this.Shintowned -= num;
  }

  generateID(){
  let temp = Math.floor(Math.random()*100000);
    return temp;
  }

  createTransaction(value:Number, method:String){
    let transaction = {id:this.generateID(), value:this.ShintoVal, method:method, quantity:value}
    console.log(transaction.id)
    this.transactions.push(transaction);
  }

  constructor() { }
}
