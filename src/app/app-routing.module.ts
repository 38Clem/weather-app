import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { CityListComponent } from './city-list/city-list.component';

const routes: Routes = [
  {
    path: "weather", component: WeatherComponent
  },
  {
    path:"city-list", component:CityListComponent
  },
  {
    path:"**", redirectTo: "weather"
  }
  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
