import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Authentify {
  private readonly apiUrl = 'http://localhost:8000/api/';
  private readonly jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient) { }

  BASE_URL = 'http://localhost:8000/api';

  login(username: string, password: string) {
    return this.http.post<{ token: string }>(this.apiUrl, { username, password }).pipe(
      tap(response => localStorage.setItem('access_token', response.token))
    );
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  isAuthenticated() {
    const token = localStorage.getItem('access_token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  getAccessToken() {
    return localStorage.getItem('access_token');
  }
}
