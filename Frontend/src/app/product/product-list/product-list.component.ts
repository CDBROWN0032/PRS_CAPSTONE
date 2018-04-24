import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { Vendor } from '../../models/vendor';
import { SystemService } from '../../services/system.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

pagetitle = 'Product List';
products: Product[];

  constructor(private ProductSvc: ProductService) { }

  ngOnInit() {
    this.ProductSvc.List()
      .subscribe(products => {
        console.log(products);
        this.products = products;
      });
  }
}
