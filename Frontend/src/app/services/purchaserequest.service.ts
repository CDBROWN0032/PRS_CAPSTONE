import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { PurchaseRequest } from '../models/purchaserequest';

const url = 'http://localhost:49943/PurchaseRequests/';


@Injectable()
export class PurchaserequestService {

  constructor(private http: HttpClient) { }

  ReviewList(): Observable<PurchaseRequest[]> {
    return this.http.get(url + 'ReviewList') as Observable<PurchaseRequest[]>;
  }
  ReviewItem(id): Observable<PurchaseRequest> {
    return this.http.get(url + 'ReviewItem/' + id)as Observable<PurchaseRequest>;
  }
  List(): Observable<PurchaseRequest[]> {
    return this.http.get(url + 'List') as Observable<PurchaseRequest[]>;
  }
  Get(id): Observable<PurchaseRequest> {
    return this.http.get(url + 'Get/' + id)as Observable<PurchaseRequest>;
  }
  Create(purchaserequest: PurchaseRequest): Observable<any> {
    return this.http.post(url + 'Create', purchaserequest) as Observable<any>;
  }
  Change(purchaserequest: PurchaseRequest): Observable<any> {
    return this.http.post(url + 'Change', purchaserequest) as Observable<any>;
  }
  Remove(purchaserequest: PurchaseRequest): Observable<any> {
    return this.http.post(url + 'Remove', purchaserequest) as Observable<any>;
  }
}
