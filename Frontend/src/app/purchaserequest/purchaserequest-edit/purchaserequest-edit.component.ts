import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { PurchaseRequest } from '../../models/purchaserequest';
import { PurchaserequestService } from '../../services/purchaserequest.service';
import { SystemService } from '../../services/system.service';

@Component({
  selector: 'app-purchaserequest-edit',
  templateUrl: './purchaserequest-edit.component.html',
  styleUrls: ['./purchaserequest-edit.component.css']
})
export class PurchaserequestEditComponent implements OnInit {

  pagetitle = 'Purchase Request Change';
  purchaseRequest: PurchaseRequest;
  users: User[];

  constructor(
    private PrSvc: PurchaserequestService,
    private UserSvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

compareFn(v1: number, v2: number): boolean {
  return v1 === v2;
}

change(): void {
  this.PrSvc.Change(this.purchaseRequest)
  .subscribe(res => {
    this.router.navigateByUrl('/purchaserequests/list');
  });
}

getPurchaseRequesteById(id) {
this.PrSvc.Get(id)
.subscribe(prs => {
  this.purchaseRequest = prs;
  console.log('Purchase Request: ', prs);
});
}

  ngOnInit() {
  this.UserSvc.List()
  .subscribe(users => {
    this.users = users;
    console.log('Users', users);
  });

  this.route.params.subscribe(parms => {
    const id = parms['id'];
    this.getPurchaseRequesteById(id);
  });
  }

}
