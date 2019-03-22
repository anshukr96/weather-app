import { Component, OnInit , Input} from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { UserService } from '../user.service';
import { WeatherResponse } from '../weather_response';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  latitude: any;
  longitude: any;
  response: WeatherResponse;
  
  constructor(private User: UserService,) { }

  ngOnInit() {
    
  }
  search(){
    this.User.weatherdetails(this.longitude, this.latitude)
    .subscribe((resp) => {
      this.response=resp;
    });
  }

 
}
