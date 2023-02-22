import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DarkModeService } from 'angular-dark-mode';
import { Observable } from 'rxjs';
import { Geolocation } from '@capacitor/geolocation';
import { HttpClient } from '@angular/common/http';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  profileJson: string = "";
  position: any = {
    lat: 43.7001,
    lng: -79.4163
  };
  weather: any = {
    name: "",
    temp_min: 0,
    temp_max: 0,
    icon: ""
  };

  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;
  constructor(public auth: AuthService, private weatherService: WeatherService, private http: HttpClient, private darkModeService: DarkModeService) { }

  ngOnInit(): void {
    Geolocation.getCurrentPosition().then((position) => {
      this.position.lat = position.coords.latitude;
      this.position.lng = position.coords.longitude;
      this.getWeather();
    }).catch((error) => {
      console.log('Error getting location', error);
    });
    this.darkMode$.subscribe((value) => {
      console.log('dark mode value:', value);
    });
    this.auth.user$.subscribe(
      (profile) => (this.profileJson = JSON.stringify(profile, null, 2)),
    );

    this.getWeather();
  }
  
  getWeather() {
    this.weatherService.getWeather(this.position.lat, this.position.lng).subscribe(
      data => {
        this.weather.name = data.name;
        this.weather.temp_min = data.main.temp_min;
        this.weather.temp_max = data.main.temp_max;
        this.weather.icon = data.weather[0].icon;
      }
    , err => {console.log('Error: ' + err)});
  }
  onToggle(): void {
    console.log('toggle');
    this.darkModeService.toggle();
  }

  formSubmit() {
    console.log('form submitted');
  }
}
