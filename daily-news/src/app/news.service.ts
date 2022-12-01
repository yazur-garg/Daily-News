import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNews(): Observable<any> {
    return this.http.get<any>(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=R2UmguMeKyLd7e0h48xvNaEn6f1k74n6`)
                  .pipe(catchError(err => {
                     console.log('Handling error locally and rethrowing it...',err);
                     return throwError(err)}));
  }
}
