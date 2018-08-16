import { Component, OnInit } from '@angular/core';
import {HttpService} from './../http.service';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  algos = [
    ['What is the expected output of 50%100?', '50', '0'],
    ['Provide the line of code needed to get the average value (using the variable "avg") of an array (called "arr") from the sum', 'var avg = sum/arr.length', '1'],
    ['What is the common name for a variable used to parse through SLLs?', 'runner', '2'],
    ['What do you need to return at the conclusion of most class methods?', 'this', '3'],
    ['True or false - you can chain any method without error.', 'false', '4'],
    ['What is the common name for a variable used to temporarily hold data?', 'temp', '5'],
    ['ES5 has var - what are the types of variables introduced with ES6?', 'let and const', '6']
  ]
  previous_algo: String;
  displayed_algo:String;
  algo_answer: String;
  wrong_answer: String;
  correct_answer: String;
  ShintoVal = 0;
  Shintowned = 0;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.displayAlgo();
    this.getValue();
    this.getQuant();
  }
  getValue(){
    this.ShintoVal = this._httpService.displayVal();
  }
  getQuant(){
    this.Shintowned = this._httpService.displayQuant();
  }
displayAlgo(){
   let temp = Math.floor(Math.random()*7);
   console.log(temp);
   if(this.algos[temp][2] == this.previous_algo){
     while(this.algos[temp][2] == this.previous_algo){
      let temp = Math.floor(Math.random()*7);
     }
   }
  this.displayed_algo = this.algos[temp][0];
  this.algo_answer = this.algos[temp][1]
  this.previous_algo = this.algos[temp][2];
  console.log(this.algo_answer)
  
}

mineShinto(answer){
  if(answer != this.algo_answer){
    this.wrong_answer = answer;
    
  }
  else if(answer == this.algo_answer){
    this.correct_answer = answer;
    let num = 1;
    this._httpService.incrementVal(num);
    this._httpService.addShinto(num);
    this.getValue();
    this.getQuant();
    this.displayAlgo();
    
  }
}
}
