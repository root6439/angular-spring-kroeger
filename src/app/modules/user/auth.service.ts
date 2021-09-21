import { HTTP_OPTIONS } from './../../shared/options';
import { URL_API } from './../../shared/url';
import { IUser } from './../../shared/models/User.model';
import { Injectable } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser: IUser;

  constructor(private http: HttpClient) {}

  createUser(user: IUser): Observable<number> {
    return this.http.post<number>(
      `${URL_API}/users`,
      JSON.stringify(user),
      HTTP_OPTIONS
    );
  }
}
