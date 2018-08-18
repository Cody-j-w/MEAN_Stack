import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  product_id:Number;
  product_brand:String;
  product_category:String;

  constructor() { }

  ngOnInit() {
    this.product_id=5;
    this.product_brand='Banana';
    this.product_category='Fruit-based computing';
  }
  status(){
  console.log(this.product_id);
    console.log(this.product_brand);
    console.log(this.product_category);
  }

}
