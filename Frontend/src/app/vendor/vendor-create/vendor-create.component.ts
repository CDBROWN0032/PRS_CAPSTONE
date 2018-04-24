import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Vendor } from '../../models/vendor';
import { VendorService } from '../../services/vendor.service';
import { SystemService } from '../../services/system.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {

  pagetitle = 'Vendor Create';
  vendor: Vendor = new Vendor(0, '', '', '', '', '', '', '', '', false, false);

  constructor(
    private VendorSvc: VendorService,
    private router: Router
  ) { }

  create(): void {
    this.VendorSvc.Create(this.vendor)
    .subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/vendors/list');
    });
  }

  ngOnInit() {
  }
}
