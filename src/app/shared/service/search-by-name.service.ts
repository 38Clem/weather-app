import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from 'src/environments/api'



@Injectable({
  providedIn: 'root'
})
export class SearchByNameService {
  private url = Api.path
  private key = Api.key
  private units = Api.units

  constructor(
    private http: HttpClient,
  ) { }

  public getCurrentWeather(name){

    return this.http.get(this.url+'weather?q='+name+this.key+this.units).toPromise()


  }

  public getForecast(name){
    return this.http.get(this.url+'forecast?q='+name+this.key+this.units).toPromise()
  }

}
