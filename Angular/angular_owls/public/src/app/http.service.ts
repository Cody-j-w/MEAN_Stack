import { Owl } from './owl';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  
  constructor(private _http: HttpClient) {}
   getOwls() {
    return this._http.get('/owls');
   }

  showOwls(id) {
    
    return this._http.get(`/owls/${id}`);
  }
  postOwls(newOwl) {
    return this._http.post('/owls', newOwl);
  }
  updateOwls(owl) {
    console.log('in service file');
    console.log(owl)
    return this._http.put(`/owls/${owl._id}`, owl);
  }
  deleteOwls(owl) {
    return this._http.delete(`/owls/${owl._id}`);
  }
}