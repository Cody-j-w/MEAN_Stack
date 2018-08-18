import { ReviewsComponent } from './reviews/reviews.component';
import { SplashComponent } from './splash/splash.component';
import { AllComponent } from './all/all.component';
import { AuthorComponent } from './author/author.component';
import { ReviewDetailsComponent } from './review-details/review-details.component';
import { CatagoryComponent } from './catagory/catagory.component';
import { BrandComponent } from './brand/brand.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'products', component:ProductsComponent, children: [
    {path: 'details/:id', component: ProductDetailsComponent},
    {path: 'brand/:brand', component: BrandComponent},
    {path: 'catagory/:cat', component: CatagoryComponent}
  ]},
  {path: 'reviews', component: ReviewsComponent, children: [
    {path: 'details/:id', component: ReviewDetailsComponent},
    {path: 'author/:id', component: AuthorComponent},
    {path:'all/:id', component: AllComponent}
  ]},
  {path: 'splash', component: SplashComponent},
  {path:'', pathMatch:'full', redirectTo:'/splash'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
