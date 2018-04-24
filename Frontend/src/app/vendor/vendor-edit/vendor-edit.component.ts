import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Vendor } from '../../models/vendor';
import { VendorService } from '../../services/vendor.service';
import { SystemService } from '../../services/system.service';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {

  pagetitle = 'Vendor Change';
  vendor: Vendor;

  constructor(
    private VendorSvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  change(): void {
    this.VendorSvc.Change(this.vendor)
    .subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/vendors/list');
    });
  }

 getVendorById(id) {
    this.VendorSvc.Get(id)
    .subscribe(vendor => {
      this.vendor = vendor;
      console.log('Vendor: ', vendor);
    });
  }

  ngOnInit() {
  this.route.params.subscribe(parms => {
    const id = parms['id']; // changed from let to const
    this.getVendorById(id);
  });
}
}


