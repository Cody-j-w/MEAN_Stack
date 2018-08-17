import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpService} from './http.service';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllOwlsComponent } from './all-owls/all-owls.component';
import { OneOwlComponent } from './one-owl/one-owl.component';
import { AddOwlComponent } from './add-owl/add-owl.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UpdateOwlComponent } from './update-owl/update-owl.component';

@NgModule({
  declarations: [
    AppComponent,
    AllOwlsComponent,
    OneOwlComponent,
    AddOwlComponent,
    PageNotFoundComponent,
    UpdateOwlComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
