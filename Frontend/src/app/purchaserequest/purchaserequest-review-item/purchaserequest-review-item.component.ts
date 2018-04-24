  import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute, Router } from '@angular/router';
  import { PurchaseRequest } from '../../models/purchaserequest';
  import { PurchaserequestService } from '../../services/purchaserequest.service';
  import { PRLI } from '../../models/prli';
  import { PrliService } from '../../services/prli.service';
  import { SystemService } from '../../services/system.service';

  @Component({
    selector: 'app-purchaserequest-review-item',
    templateUrl: './purchaserequest-review-item.component.html',
    styleUrls: ['./purchaserequest-review-item.component.css']
  })
  export class PurchaserequestReviewItemComponent implements OnInit {

    pagetitle = 'Purchase Request Lines';
    pr: PurchaseRequest;


    constructor(
      private PrSvc: PurchaserequestService,
      private PRLIsvc: PrliService,
      private router: Router,
      private route: ActivatedRoute
    ) { }

    change(): void {
      this.PrSvc.Change(this.pr)
      .subscribe(res => {
        this.router.navigateByUrl('/purchaserequests/list');
      });
    }

    submit(): void {
      if (this.pr.Total <= 50 ) {
        this.pr.Status = 'APPROVED';
        this.PrSvc.Change(this.pr)
        .subscribe(pr => {
          this.router.navigateByUrl('/purchaserequests/list');
        });
      } else {
        this.router.navigateByUrl('/purchaserequests/list');
      }
    }

    accept(): void {
      this.pr.Status = 'APPROVED';
      this.PrSvc.Change(this.pr)
      .subscribe(pr => {
        this.router.navigateByUrl('/purchaserequests/list');
      });
    }

    reject(): void {
      this.pr.Status = 'REJECTED';
      this.PrSvc.Change(this.pr)
      .subscribe(pr => {
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
      this.route.params
      .subscribe(parms => {
        const id = parms['id'];
        this.getPurchaserequestById(id);
      });
    }
  }
