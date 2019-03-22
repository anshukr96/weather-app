import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherResponse } from './weather_response';



@Injectable()
export class UserService {
  appid ="3477c01ef37b20f5aad8fcd3b8f0e272";
  
  constructor(private http: HttpClient) { }

  weatherdetails(lon:string,lat:string):Observable<WeatherResponse>{
    return this.http.get<WeatherResponse>("http://api.openweathermap.org/data/2.5/weather?APPID="+this.appid+"&lat="+lat+"&lon="+lon);
  }
}
