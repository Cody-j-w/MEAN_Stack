import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  @Input() displayedTransaction: any;
  selectedTransaction: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }

}
