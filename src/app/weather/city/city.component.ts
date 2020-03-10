import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/shared/model/city';
import { SetValueService } from 'src/app/shared/service/set-value.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
})
export class CityComponent implements OnInit {
  private myCity:City

  constructor(
    private setValue:SetValueService
  ) {

    this.setValue.dislayWeather()
    .then((city:City)=> {
      this.myCity = city
    })
  }

   


  ngOnInit() {}

}
