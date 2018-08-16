import { Component, OnInit } from '@angular/core';
import {HttpService} from './../http.service';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {
  transactions = []
  selectedTransaction: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    console.log(this.selectedTransaction);
    this.transactions = this._httpService.displayTransactions();
  }

  transactionDetails(transaction){
    console.log(transaction.id)
    this.selectedTransaction = transaction;
  }

}
