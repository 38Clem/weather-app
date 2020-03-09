import { Component, OnInit, ViewChild } from '@angular/core';
import { SetValueService } from '../shared/service/set-value.service';
import { SearchbarComponent } from './searchbar/searchbar.component';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss'],
})

export class CityListComponent implements OnInit {

  @ViewChild(SearchbarComponent, { static: false }) child: SearchbarComponent;

  private cityList: [];

  constructor(
    private setValue: SetValueService
  ) {



    setValue.displayCityList()
      .then((newList: []) => {
        this.cityList = newList
        console.log('this.cityList');
        console.log(this.cityList);
        
      })
  }

  public getWeather(city) {
    if (this.child) {
      this.child.search(city);
    }
    else {
      console.log('PAS DE CHILD');
    }
  }

  public delete(index) {
    this.setValue.deleteCity(index)
  }

  ngOnInit() { }

}
