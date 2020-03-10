import { Injectable } from '@angular/core';
import { City } from '../model/city';
import { Forecast } from '../model/forecast';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SetValueService {

  private newCity: City = new City;
  private forecastDay1: Forecast = new Forecast;
  private forecastDay2: Forecast = new Forecast;
  private forecastDay3: Forecast = new Forecast;
  private forecastDay4: Forecast = new Forecast;
  private cityList:string [] = [];
  private forecast:Forecast [] = [];



  constructor(
    private http: HttpClient
  ) { }

  // Current Weather

  public setCityValue(city): Promise<City> {

    return new Promise((resolve, reject) => {
      console.log('SET CITY VALUE');
      console.log(city);

      this.newCity.name = city.name
      this.newCity.temperature = Math.round(city.main.temp);
      this.newCity.weatherDescription = city.weather[0].description;
      console.log(city.weather[0].icon);
      this.newCity.icon = 'https://openweathermap.org/img/wn/' + city.weather[0].icon + '.png';
      this.newCity.humidity = city.main.humidity;
      this.newCity.wind = city.wind.speed;

      resolve(this.newCity)

    })
  }

  public dislayWeather() {
    return new Promise((resolve, reject) => {
      resolve(this.newCity)
    })
  }

  // Forecast

  public setForecastValue(forecastResult) {
    return new Promise((resolve, reject) => {

      console.log(forecastResult)

      this.forecastDay1.date = forecastResult.list[8].dt;
      this.forecastDay1.icon = 'https://openweathermap.org/img/wn/' + forecastResult.list[8].weather[0].icon + '.png';
      this.forecastDay1.description = forecastResult.list[8].weather[0].description;
      this.forecastDay1.temperature = Math.round(forecastResult.list[8].main.temp);

      this.forecastDay2.date = forecastResult.list[16].dt;
      this.forecastDay2.icon = 'https://openweathermap.org/img/wn/' + forecastResult.list[16].weather[0].icon + '.png';
      this.forecastDay2.description = forecastResult.list[16].weather[0].description;
      this.forecastDay2.temperature = Math.round(forecastResult.list[16].main.temp);

      this.forecastDay3.date = forecastResult.list[24].dt;
      this.forecastDay3.icon = 'https://openweathermap.org/img/wn/' + forecastResult.list[24].weather[0].icon + '.png';
      this.forecastDay3.description = forecastResult.list[24].weather[0].description;
      this.forecastDay3.temperature = Math.round(forecastResult.list[24].main.temp);

      this.forecastDay4.date = forecastResult.list[32].dt;
      this.forecastDay4.icon = 'https://openweathermap.org/img/wn/' + forecastResult.list[32].weather[0].icon + '.png';
      this.forecastDay4.description = forecastResult.list[32].weather[0].description;
      this.forecastDay4.temperature = Math.round(forecastResult.list[32].main.temp);

      resolve()
    })
  }


  public displayForecast() {
    return this.forecast = [this.forecastDay1, this.forecastDay2, this.forecastDay3, this.forecastDay4]
  }

  // City List


  public setCityList(city:string) {
    return new Promise((resolve, reject) => {
      const maxLength = 5;
      if (this.cityList.length < maxLength) {
        if (this.cityList.indexOf(city) === -1) {
          this.cityList.push(city);
        }
        let list = JSON.stringify(this.cityList)
        localStorage.setItem('cities', list);
        resolve(list)
      }
      else{
        reject(alert("Max City Reached"))
      }
    })
  }

  public deleteCity(index) {
    this.cityList.splice(index, 1);
    const newList = JSON.stringify(this.cityList);
    localStorage.removeItem('cities');
    localStorage.setItem('cities', newList);
  }

  public getCityList() {
    return this.cityList = JSON.parse(localStorage.getItem('cities')) || []
  }
}
