import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(lat : Number, lon : Number): Observable<any> {
    return this.http.get<any>(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=12fe6cf7af16324df4b85dac428877cd`)
                  .pipe(catchError(err => {
                     console.log('Handling error locally and rethrowing it...',err);
                     return throwError(err)}));
  }
}
