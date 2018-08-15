import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) { }

  getCakes() {
    return this._http.get('/cakes');
   }

  showCakes(id) {
    return this._http.get(`/cakes/${id}`);
  }
  postCakes(newCake) {
    return this._http.post('/cakes', newCake);
  }
  addRating(cake) {
    console.log('in service file');
    console.log(cake)
    return this._http.put(`/cakes/${cake._id}`, cake);
  }
}
