import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private url = 'https://daily-news-database-service.onrender.com';

  constructor(private http: HttpClient) {}

  getUser(id: any): Observable<User> {
    return this.http.get<User>(this.url + '/api/users/' + id).pipe(
      catchError((err) => {
        console.log('Handling error locally and rethrowing it...', err);
        return throwError(err);
      })
    );
  }

  newUser(data: User): Observable<any> {
    return this.http.post<any>(this.url + '/api/users', data);
  }
}
