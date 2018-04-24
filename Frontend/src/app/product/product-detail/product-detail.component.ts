import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { SystemService } from '../../services/system.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pagetitle = 'Product Detail';
  product: Product;

  constructor(
    private ProductSvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  remove(): void {
    this.ProductSvc.Remove(this.product)
    .subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/produts/list');
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
   this.route.params.subscribe(parms => {
    const id = parms['id']; // changed from let to const
    this.getProductById(id);
  });
  }
}
