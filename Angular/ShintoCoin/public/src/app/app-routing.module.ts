import { MineComponent } from './mine/mine.component';
import { SellComponent } from './sell/sell.component';
import { BuyComponent } from './buy/buy.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LedgerComponent } from './ledger/ledger.component';

const routes: Routes = [
  {path: 'buy', component:BuyComponent},
  {path: 'sell', component:SellComponent},
  {path: 'mine', component:MineComponent},
  {path: 'ledger', component:LedgerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
