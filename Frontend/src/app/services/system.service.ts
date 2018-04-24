import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';

const baseUrl = 'http://localhost:49943';

export class SystemService {
  isUserLoggedIn: Observable<boolean>;

  isLogin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get getIsLogin(): Observable<boolean> {
    return this.isLogin;
  }
  setIsLogin() {
    this.isLogin.next(true);
  }
  setNotLogin() {
    this.isLogin.next(false);
  }

  loggedInUser: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  getLoggedInUser(): User {
    return this.loggedInUser.value;
  }

  constructor() {}

  setLoggedInUser(user: User): void {
    this.loggedInUser.next(user);
    console.log('Logged in user set:', this.loggedInUser);
  }
  clearLoggedInUser(): void {
    this.loggedInUser.next(null);
    console.log('Logged in user cleared:', this.loggedInUser);
  }
  get isLoggedIn(): boolean {
    console.log('Logged in user query:', this.loggedInUser != null);
    return this.loggedInUser != null;
  }
  url(controller: string, method: string, seg1: string = null, seg2: string = null): string {
    let aUrl = baseUrl + '/' + controller + '/' + method + '/';
    aUrl += (seg1 != null) ? seg1 + '/' : '';
    aUrl += (seg2 != null) ? seg2 + '/' : '';
    return aUrl;
  }

}
