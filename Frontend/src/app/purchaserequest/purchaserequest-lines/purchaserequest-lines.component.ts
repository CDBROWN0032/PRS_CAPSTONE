import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseRequest } from '../../models/purchaserequest';
import { PurchaserequestService } from '../../services/purchaserequest.service';
import { PRLI } from '../../models/prli';
import { PrliService } from '../../services/prli.service';
import { SystemService } from '../../services/system.service';

@Component({
  selector: 'app-purchaserequest-lines',
  templateUrl: './purchaserequest-lines.component.html',
  styleUrls: ['./purchaserequest-lines.component.css']
})
export class PurchaserequestLinesComponent implements OnInit {

  pagetitle = 'Purchase Request Lines';
  pr: PurchaseRequest;


  constructor(
    private PrSvc: PurchaserequestService,
    private PRLIsvc: PrliService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  submit(): void {
    if (this.pr.Total <= 50 ) {
      this.pr.Status = 'APPROVED';
      this.PrSvc.Change(this.pr)
      .subscribe(pr => {
        this.router.navigateByUrl('/purchaserequests/list');
      });
    } else {
      this.pr.Status = 'PENDING';
      this.PrSvc.Change(this.pr)
      .subscribe(pr => {
        this.router.navigateByUrl('/purchaserequests/list');
    });
  }
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
