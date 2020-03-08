import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from 'src/environments/api'



@Injectable({
  providedIn: 'root'
})
export class SearchByNameService {
  

  constructor(
    private http: HttpClient,
  ) { }

  public getCurrentWeather(name){
    const key = Api.key

    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+name+key+'&units=metric').toPromise()
  }

  public getForecast(name){
    const key = Api.key
    return this.http.get('https://api.openweathermap.org/data/2.5/forecast?q='+name+key+'&units=metric').toPromise()
  }

}
