import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseRequest } from '../../models/purchaserequest';
import { PurchaserequestService } from '../../services/purchaserequest.service';
import { SystemService } from '../../services/system.service';

@Component({
  selector: 'app-purchaserequest-detail',
  templateUrl: './purchaserequest-detail.component.html',
  styleUrls: ['./purchaserequest-detail.component.css']
})
export class PurchaserequestDetailComponent implements OnInit {

  pagetitle = 'Purchase Request Detail';
  pr: PurchaseRequest;

  constructor(
    private PrSvc: PurchaserequestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  remove(): void {
    this.PrSvc.Remove(this.pr)
      .subscribe(res => {
        console.log(res);
        this.router.navigateByUrl('/purchaserequests/list');
      });
  }

  getPurchaserequestById(id) {
    this.PrSvc.Get(id)
      .subscribe(pr => {
        this.pr = pr;
        console.log('Purchase Request: ', pr);
      });
  }

  ngOnInit() {
  this.route.params.subscribe(parms => {
    const id = parms['id'];
    this.getPurchaserequestById(id);
  });
  }
}
