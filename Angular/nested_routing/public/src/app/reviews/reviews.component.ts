import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  Review_id: Number;
  Author_id: Number;
  Product_id: Number;

  constructor() { }

  ngOnInit() {
    this.Review_id = 72;
    this.Author_id = 653;
    this.Product_id = 5;
  }

}
