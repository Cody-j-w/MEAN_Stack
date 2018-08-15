import {BurbankComponent} from './burbank/burbank.component';
import {TulsaComponent} from './tulsa/tulsa.component';
import {DallasComponent} from './dallas/dallas.component';
import {DcComponent} from './dc/dc.component';
import {SeattleComponent} from './seattle/seattle.component';
import {ChicagoComponent} from './chicago/chicago.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'burbank', component: BurbankComponent},
  {path:'tulsa', component:TulsaComponent},
  {path:'dallas', component:DallasComponent},
  {path:'dc', component:DcComponent},
  {path:'seattle', component:SeattleComponent},
  {path:'chicago', component:ChicagoComponent},
  {path:'', pathMatch:'full', redirectTo:'/tulsa'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
