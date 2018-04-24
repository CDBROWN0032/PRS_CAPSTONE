import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  private isUserLoggedIn;

  constructor() {
    this.isUserLoggedIn = false;
  }
  setUserLoggedIn(status): Observable<boolean> {
    return this.isUserLoggedIn = status;
  }
  getIsUserLoggedIn() {
    return this.isUserLoggedIn;
  }
}
