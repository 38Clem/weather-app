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
    private setValue: SetValueService
  ) {

    this.myForecast = this.setValue.displayForecast()
  }

  ngOnInit() { }

}
