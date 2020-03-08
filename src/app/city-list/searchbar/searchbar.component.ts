import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchByNameService } from 'src/app/shared/service/search-by-name.service';
import { SetValueService } from 'src/app/shared/service/set-value.service';
import { City } from 'src/app/shared/model/city';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements OnInit {


  private newCity: City

  constructor(
    private request: SearchByNameService,
    private setValue: SetValueService,
    private router: Router
  ) { }


    public getInputEnter(event){
      const input = event.originalTarget.value;
      console.log(input);
      
      this.search(input)
    }
    getInputClick(event){
      const input = event.originalTarget.parentElement.offsetParent.lastChild.childNodes[0].value;
      this.search(input)
    }

  public search(cityName) {
    this.request.getCurrentWeather(cityName)
      .then((result) => {
        this.setValue.setCityList(cityName)
          .then(() => {
            this.setValue.setCityValue(result)
              .then(() => {
                this.request.getForecast(cityName)
                  .then((forecastResult) => {
                    this.setValue.setForecastValue(forecastResult)
                      .then(() => {
                        this.router.navigate(['/weather'])
                      })
                  })
              })
              .catch()
          })
          .catch(() => {
          })
      })
      .catch((result) => { console.log(result) })
  }


  ngOnInit() { }

}
