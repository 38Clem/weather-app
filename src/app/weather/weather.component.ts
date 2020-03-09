import { Component, OnInit } from '@angular/core';
import { SetValueService } from '../shared/service/set-value.service';
import { City } from '../shared/model/city';
import { SearchByGeolocService } from '../shared/service/search-by-geoloc.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {

  private myCity: City;
  
  private slideOpts = {
    initialSlide: 0,
    speed: 800,
    autoplay:true,
  };

  constructor(
    private setValue: SetValueService,
    private geolocService: SearchByGeolocService
  ) {
    this.geolocService.autorisationGeoloc()
 
    this.setValue.dislayWeather()
      .then((city: City) => {
        this.myCity = city;
      })
  }

  ngOnInit() {}

}
