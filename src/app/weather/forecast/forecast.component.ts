import { Component, OnInit } from '@angular/core';
import { SetValueService } from 'src/app/shared/service/set-value.service';
import { Forecast } from 'src/app/shared/model/forecast';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent implements OnInit {

  private myForecast: Forecast[]

  constructor(
    private setValue:SetValueService
  ) {
  this.setValue.displayForecast()
  .then((result:Forecast[])=>{
    console.log("IN FORECAST COMPONENT");
    this.myForecast = result
  })
   }

  ngOnInit() {}

}
