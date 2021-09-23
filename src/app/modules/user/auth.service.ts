import { HTTP_OPTIONS } from './../../shared/options';
import { URL_API } from './../../shared/url';
import { IUser } from './../../shared/models/User.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  //isto será refeito depois, por enquanto só para testes
  //TODO: ajustar método para retornar somente um usuário
  login(username: string, password: string): Observable<IUser[]> {
    return this.http.get<IUser[]>(
      `${URL_API}/users?username=${username}&password=${password}`
    );
  }
}
