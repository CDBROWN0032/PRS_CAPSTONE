import { Component, OnInit } from '@angular/core';
import { PurchaserequestService } from '../../services/purchaserequest.service';
import { PurchaseRequest } from '../../models/purchaserequest';
import { SystemService } from '../../services/system.service';

@Component({
  selector: 'app-purchaserequest-review',
  templateUrl: './purchaserequest-review.component.html',
  styleUrls: ['./purchaserequest-review.component.css']
})
export class PurchaserequestReviewComponent implements OnInit {

  pagetitle = 'PurchaseRequest Review';
  purchaserequests: PurchaseRequest[];

  constructor(
    private PRsvc: PurchaserequestService
  ) { }

  ngOnInit() {
  this.PRsvc.ReviewList()
  .subscribe(purchaserequests => {
    this.purchaserequests = purchaserequests;
  });
  }
}
