import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { VendorService } from '../../services/vendor.service';
import { Vendor } from '../../models/vendor';

import { SystemService } from '../../services/system.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})export class ProductEditComponent implements OnInit {

  pagetitle = 'Product Change';
  product: Product;
  vendors: Vendor[];

  constructor(
    private ProductSvc: ProductService,
    private VendorSvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  // This is used by the <SELECT [compareWith]='compareFn'> to select the FK in a dropdown list
  // This one uses Vendor instances. For FKs with just the ID, it would be:
  // compareFn(v1: number, v2: number) { return v1 == v2; }
  compareFn(v1: number, v2: number): boolean {
    return v1 === v2;
  }

  change(): void {
    this.ProductSvc.Change(this.product)
    .subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/products/list');
    });
  }

 getProductById(id) {
    this.ProductSvc.Get(id)
    .subscribe(product => {
      this.product = product;
      console.log('Product: ', product);
    });
  }

  ngOnInit() {
    this.VendorSvc.List()
      .subscribe(vendors => {
        this.vendors = vendors;
        console.log('Vendors', vendors);
    });

    this.route.params.subscribe(parms => {
      const id = parms['id']; // changed from let to const
      this.getProductById(id);
    });
  }
}



