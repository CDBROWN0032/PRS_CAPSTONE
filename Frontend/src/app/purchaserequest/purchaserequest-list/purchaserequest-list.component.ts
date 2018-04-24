import { Component, OnInit } from '@angular/core';
import { PurchaserequestService } from '../../services/purchaserequest.service';
import { PurchaseRequest } from '../../models/purchaserequest';
import { User } from '../../models/user';
import { SystemService } from '../../services/system.service';

@Component({
  selector: 'app-purchaserequest-list',
  templateUrl: './purchaserequest-list.component.html',
  styleUrls: ['./purchaserequest-list.component.css']
})
export class PurchaserequestListComponent implements OnInit {

  pagetitle = 'Purchase Request List';
  purchaserequests: PurchaseRequest[];

  constructor(private PrSvc: PurchaserequestService) { }

  ngOnInit() {
  this.PrSvc.List()
    .subscribe(prs => {
      console.log(prs);
      this.purchaserequests = prs;
    });
  }

}
