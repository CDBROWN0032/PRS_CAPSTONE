import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { User } from '../models/user';

const url = 'http://localhost:49943/Users/';
const Lurl = 'http://localhost:49943/Users/Login/';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.get(Lurl + username + '/' + password);
  }

  List(): Observable<User[]> {
    return this.http.get(url + 'List') as Observable<User[]>;
  }
  Get(id): Observable<User> {
    return this.http.get(url + 'Get/' + id) as Observable<User>;
  }
  Create(user: User): Observable<any> {
    return this.http.post(url + 'Create', user) as Observable<any>;
  }
  Change(user: User): Observable<any> {
    return this.http.post(url + 'Change', user) as Observable<any>;
  }
  Remove(user: User): Observable<any> {
    return this.http.post(url + 'Remove', user) as Observable<any>;
  }
}
