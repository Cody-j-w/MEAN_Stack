import {HttpService} from './http.service';
import { Component, OnInit } from '@angular/core';
import {identifierModuleUrl} from '@angular/compiler';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cakes: any;
  cake: any;
  showing: any;
  newCake: any;

  constructor(private _httpService: HttpService) {}
  
  ngOnInit(){
    this._httpService.getCakes().subscribe(cakes => this.cakes = cakes);
    this.newCake = {baker:'', img:''};
  }
  createCake(){
    this._httpService.postCakes(this.newCake).subscribe(cake =>{this.cakes.push(this.newCake)});
    this._httpService.getCakes().subscribe(cakes => this.cakes = cakes);
    this.newCake = {baker: '', img: ''};
  }
  rate(){
    
  }
}
