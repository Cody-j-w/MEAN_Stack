import { Owl } from './../owl';
import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-all-owls',
  templateUrl: './all-owls.component.html',
  styleUrls: ['./all-owls.component.css']
})
export class AllOwlsComponent implements OnInit {
  owls: Owl[];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this._httpService.getOwls().subscribe(owls => {console.log(owls), this.owls = owls as Owl[]})
  }
}
