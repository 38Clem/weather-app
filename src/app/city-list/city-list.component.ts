import { Component, OnInit } from '@angular/core';
import { SetValueService } from '../shared/service/set-value.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss'],
})
export class CityListComponent implements OnInit {
  private cityList:[]
  constructor(
    private setValue:SetValueService
  ) {

    setValue.displayCityList()
    .then((newList:[])=>{
      this.cityList = newList
    })
   }

   public delete(index){
     this.setValue.deleteCity(index)
   }

  ngOnInit() {}

}
