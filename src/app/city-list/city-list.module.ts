import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { CityListComponent } from './city-list.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    SearchbarComponent,
    CityListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CityListModule { }
