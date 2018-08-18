import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ReviewDetailsComponent } from './review-details/review-details.component';
import { BrandComponent } from './brand/brand.component';
import { CatagoryComponent } from './catagory/catagory.component';
import { AuthorComponent } from './author/author.component';
import { AllComponent } from './all/all.component';
import { SplashComponent } from './splash/splash.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ReviewsComponent,
    ProductDetailsComponent,
    ReviewDetailsComponent,
    BrandComponent,
    CatagoryComponent,
    AuthorComponent,
    AllComponent,
    SplashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
