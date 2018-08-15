import { Component, OnInit } from '@angular/core';
import {HttpService} from './../http.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  weather;
  temp;
  humidity;
  high;
  low;
  status;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.weather = this._httpService.getWeather('chicago').then(weather =>{
      this.humidity = weather['main']['humidity']
      this.temp = weather['main']['temp']
      this.high = weather['main']['temp_max']
      this.low = weather['main']['temp_min']
      this.status = weather['weather'][0]['description']
    })
  }

}
