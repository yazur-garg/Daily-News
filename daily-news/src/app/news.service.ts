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

  getNewsCateg(category : String): Observable<any> {
    return this.http.get<any>(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=R2UmguMeKyLd7e0h48xvNaEn6f1k74n6`)
                  .pipe(catchError(err => {
                     console.log('Handling error locally and rethrowing it...',err);
                     return throwError(err)}));
  }
// current work
  getNewsTopic(topic : String): Observable<any> {
    console.log("!! topic = ", topic);
    return this.http.get<any>(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${topic}&api-key=R2UmguMeKyLd7e0h48xvNaEn6f1k74n6`)
                  .pipe(catchError(err => {
                     console.log('Handling error locally and rethrowing it...',err);
                     return throwError(err)}));
  }
}
