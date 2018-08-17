import { HttpService } from './../http.service';
import { Owl } from './../owl';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-one-owl',
  templateUrl: './one-owl.component.html',
  styleUrls: ['./one-owl.component.css']
})
export class OneOwlComponent implements OnInit {
owl: Owl;
id: String;
deleteOwl: Owl;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
   }

  ngOnInit() {
    
    this._route.params.subscribe(params => { console.log(params['id']); this._httpService.showOwls(params['id']).subscribe(owl =>this.owl = owl as Owl)})
    console.log(this.owl)
  
    
  }

  removeOwl(owl){
    this._httpService.deleteOwls(owl).subscribe(owl => this.deleteOwl = owl as Owl);
  }

  
}
