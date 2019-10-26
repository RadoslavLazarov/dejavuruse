import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private loginUrl = 'http://127.0.0.1:3000/content/login';

  constructor(private http: HttpClient) { }

  loginUser(user) {
    console.log('batka', user);
    return this.http.post<any>(this.loginUrl, user);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  loggedIn() {
    console.log(localStorage.getItem('token'));
    return !!localStorage.getItem('token');
  }
}
