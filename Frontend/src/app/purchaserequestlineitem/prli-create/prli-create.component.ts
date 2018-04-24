import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PRLI } from '../../models/prli';
import { PrliService } from '../../services/prli.service';

import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { PurchaseRequest } from '../../models/purchaserequest';
import { PurchaserequestService } from '../../services/purchaserequest.service';
import { SystemService } from '../../services/system.service';

@Component({
  selector: 'app-prli-create',
  templateUrl: './prli-create.component.html',
  styleUrls: ['./prli-create.component.css']
})
export class PrliCreateComponent implements OnInit {

  pagetitle = 'PRLI Create';
  prli: PRLI = new PRLI( 0, 0, 0, 1, true);
  products: Product[];
  purchaserequests: PurchaseRequest[];

  constructor(
    private PRLISvc: PrliService,
    private ProductSvc: ProductService,
    private PurchaserequestSvc: PurchaserequestService,
    private router: Router
  ) { }

  compareFn(v1: number, v2: number): boolean {
    return v1 === v2;
  }
  create(): void {
    this.PRLISvc.Create(this.prli)
    .subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('purchaserequests/line/' + this.prli.PurchaseRequestId);
    });
  }

  ngOnInit() {
    this.ProductSvc.List()
    .subscribe(products => {
      this.products = products;
      console.log('Producst', this.products);
    });
    this.PurchaserequestSvc.List()
    .subscribe(purchaserequests => {
      this.purchaserequests = purchaserequests;
      console.log('Purchase Requests', this.purchaserequests);
    });
  }

}
