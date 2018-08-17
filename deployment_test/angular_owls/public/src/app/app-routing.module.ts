import { UpdateOwlComponent } from './update-owl/update-owl.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OneOwlComponent } from './one-owl/one-owl.component';
import { AllOwlsComponent } from './all-owls/all-owls.component';
import { AddOwlComponent } from './add-owl/add-owl.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'add-owl', component:AddOwlComponent},
  {path: 'all-owls', component:AllOwlsComponent},
  {path: 'one-owl/:id', component:OneOwlComponent},
  {path: 'update-owl/:id', component:UpdateOwlComponent},
  {path:'', pathMatch:'full', redirectTo:'/all-owls'},
  {path: '**', component: PageNotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
