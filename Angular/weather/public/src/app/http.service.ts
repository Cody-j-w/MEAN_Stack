import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) { }
  getWeather(city){
    return this._http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=f3a1508379a2516a36321f341e488dd8`).toPromise();
  }
  
}


