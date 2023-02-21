import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Geolocation } from '@capacitor/geolocation';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

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
  }

  constructor(public auth: AuthService, private http: HttpClient) { }

  ngOnInit(): void {
    Geolocation.getCurrentPosition().then((position) => {
      this.position.lat = position.coords.latitude;
      this.position.lng = position.coords.longitude;
      console.log('Latitude: ' + position.coords.latitude);
      console.log('Longitude: ' + position.coords.longitude);
      console.log(this.position);
      
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    this.auth.user$.subscribe(
      (profile) => (this.profileJson = JSON.stringify(profile, null, 2)),
    );
  }
  
  formSubmit() {
    console.log('form submitted');
  }
}
