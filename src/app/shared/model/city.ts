import { Forecast } from './forecast'

export class City {
    public name:string;
    public icon:string;
    public weatherDescription:string;
    public temperature:number;
    public wind:number;
    public humidity:number;
    public forecast:Forecast
}

