import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PurchaserequestService } from '../../services/purchaserequest.service';
import { PurchaseRequest } from '../../models/purchaserequest';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { SystemService } from '../../services/system.service';

@Component({
  selector: 'app-purchaserequest-create',
  templateUrl: './purchaserequest-create.component.html',
  styleUrls: ['./purchaserequest-create.component.css']
})
export class PurchaserequestCreateComponent implements OnInit {

  pagetitle = 'Purchase Request Create';
  purchaseRequest: PurchaseRequest = new PurchaseRequest(0, 0, '', '', '', 'NEW', 0, false, '');
  users: User[];

  constructor(
    private PRSvc: PurchaserequestService,
    private UserSvc: UserService,
    private router: Router
  ) { }

  compareFn(v1: number, v2: number): boolean {
    return v1 === v2;
  }

  create(): void {
    this.PRSvc.Create(this.purchaseRequest)
    .subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/purchaserequests/list');
    });
  }

    ngOnInit() {
      this.UserSvc.List()
      .subscribe(users => {
        this.users = users;
        console.log('Users', this.users);
      });
  }

}
