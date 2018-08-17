import { FormsModule } from '@angular/forms';
import { Owl } from './../owl';
import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-owl',
  templateUrl: './add-owl.component.html',
  styleUrls: ['./add-owl.component.css']
})
export class AddOwlComponent implements OnInit {
  owls: Owl[];
  newOwl: Owl;

  constructor(private _httpService:HttpService) { }

  ngOnInit() {
    this._httpService.getOwls().subscribe(owls => {console.log(owls), this.owls = owls as Owl[]})
    this.newOwl = {name:'', age:'', color:'', breed:''}
  }
  addOwl(){
    console.log(this.newOwl)
    this._httpService.postOwls(this.newOwl).subscribe(owl =>{this.owls.push(this.newOwl)});
  }

}
