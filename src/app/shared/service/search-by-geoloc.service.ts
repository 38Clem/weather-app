import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SetValueService } from './set-value.service';

@Injectable({
  providedIn: 'root'
})
export class SearchByGeolocService {
  private key = '&appid=0b1f386a167a0699a14e19fecbcad27c';
  private test = true;


  constructor(
    private http:HttpClient,
    private setValue:SetValueService) { }

  public getPosition() {

      return new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(
              (position) => {resolve(position)},
              (positionError) =>  reject(console.log(positionError))
              );
      });

  };
  
  public getCurrentWeather(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+this.key+'&units=metric').toPromise() 
  }

  public getForecast(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    return this.http.get('https://api.openweathermap.org/data/2.5/forecast?lat='+lat+'&lon='+lon+this.key+'&units=metric').toPromise() 
  }

  public autorisationGeoloc(){
    if(this.test === true){
      this.test = false;
      this.getPosition()
      .then((position) => {
        this.getCurrentWeather(position)
          .then((weather) => {
            this.setValue.setCityValue(weather)
            .then(()=>{
              this.getForecast(position)
              .then((forecast)=>{this.setValue.setForecastValue(forecast)})
              .catch(()=>{})
            })
            .catch(()=>{})

          })
          .catch(() => {
            console.log("C'est vraiment dommage .....");
          })
      })
      .catch(() => {
        console.log("C'est dommage");
      })
    }


  }


}
