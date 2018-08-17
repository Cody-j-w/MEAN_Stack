import { Owl } from './../owl';
import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-owl',
  templateUrl: './update-owl.component.html',
  styleUrls: ['./update-owl.component.css']
})
export class UpdateOwlComponent implements OnInit {
  owl: Owl;

  constructor(private _httpService:HttpService,
              private _route: ActivatedRoute,
              private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe(params => { console.log(params['id']); this._httpService.showOwls(params['id']).subscribe(owl =>this.owl = owl as Owl)})

  }

  updateOwl(owl){
    this._httpService.updateOwls(this.owl).subscribe(owl => {this.owl, {
      name:this.owl.name,
      age:this.owl.age,
      color:this.owl.color,
      breed:this.owl.breed
    }
  })
  }

}
