import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Query {
  action: string;
  collection: string;
  document?: string;
  item?: string;
  options?: any;
  select?: string;
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }

  myMethod() {
    return this.http.get('http://127.0.0.1:3000/content/http-test');
  }

  fetchHome() {
    return this.http.get('http://127.0.0.1:3000/content/home-fetch');
  }

  getPages() {
    return this.http.get('http://127.0.0.1:3000/content/get-pages');
  }

  // meta(meta) {
  //   return this.http.post<any>('http://127.0.0.1:3000/content/db/update/meta', meta);
  // }

  db(query: Query, object?: object) {
    return this.http.post<any>(`http://127.0.0.1:3000/content/db?collection=${query.collection}&action=${query.action}${query.document ? '&document=' + query.document : ''}${query.item ? '&item=' + query.item : ''}${query.options ? '&options=' + query.options.option + '_' + query.options.key + '_' + query.options.value : ''}${query.select ? '&select=' + query.select : ''}`, object);
  }
  // getPage() {
  //   return this.http.get('http://127.0.0.1:3000/content/get-page?id=');
  // }

  // loginUser(user) {
  //   return this.http.post<any>('http://127.0.0.1:3000/content/login', user)
  // }
}
