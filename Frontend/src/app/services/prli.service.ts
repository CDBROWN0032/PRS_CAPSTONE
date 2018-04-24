import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { PRLI } from '../models/prli';

const url = 'http://localhost:49943/PurchaseRequestLineItems/';

@Injectable()
export class PrliService {

  constructor(private http: HttpClient) { }

  List(): Observable<PRLI[]> {
    return this.http.get(url + 'List') as Observable<PRLI[]>;
  }
  Get(id): Observable<PRLI> {
    return this.http.get(url + 'Get/' + id) as Observable<PRLI>;
  }
  Create(prli: PRLI): Observable<any> {
    return this.http.post(url + 'Create', prli) as Observable<any>;
  }
  Change(prli: PRLI): Observable<any> {
    return this.http.post(url + 'Change', prli) as Observable<any>;
  }
  Remove(prli: PRLI): Observable<any> {
    return this.http.post(url + 'Remove', prli) as Observable<any>;
  }
}
