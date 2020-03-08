import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';
import { CityComponent } from './city/city.component';
import { ForecastComponent } from './forecast/forecast.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    WeatherComponent,
    ForecastComponent,
    CityComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class WeatherModule { }
