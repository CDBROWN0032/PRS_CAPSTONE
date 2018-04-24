import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PrliService } from '../../services/prli.service';
import { PRLI } from '../../models/prli';

import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { PurchaseRequest } from '../../models/purchaserequest';
import { SystemService } from '../../services/system.service';

@Component({
  selector: 'app-prli-edit',
  templateUrl: './prli-edit.component.html',
  styleUrls: ['./prli-edit.component.css']
})
export class PrliEditComponent implements OnInit {

  pagetitle = 'PRLI Change';
  prli: PRLI;
  products: Product[];
  pr: PurchaseRequest;

  constructor(
    private PRLIsvc: PrliService,
    private ProductSvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  compareFn(v1: number, v2: number): boolean {
    return v1 === v2;
  }

  change(): void {
    this.PRLIsvc.Change(this.prli)
    .subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/purchaserequests/lines/' + this.prli.PurchaseRequestId);
    });
  }
  getPrliById(id) {
    this.PRLIsvc.Get(id)
    .subscribe(prli => {
      this.prli = prli;
      console.log('PRLI:', prli);
    });
  }

  ngOnInit() {
    this.ProductSvc.List()
    .subscribe(products => {
      this.products = products;
      console.log('Products', products);
    });

    this.route.params.subscribe(parms => {
      const id = parms['id'];
    this.getPrliById(id);
    });
  }
}
