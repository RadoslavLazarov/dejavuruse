import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }

  myMethod() {
    return this.http.get('http://127.0.0.1:3000/content/http-test');
  }

  fetchHome() {
    return this.http.get('http://127.0.0.1:3000/content');
  }

  // loginUser(user) {
  //   return this.http.post<any>('http://127.0.0.1:3000/content/login', user)
  // }
}
