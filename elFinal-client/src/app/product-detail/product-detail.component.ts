import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  usuario: any;
  furniture: any = {};
  id: any;

  constructor(
    private activeRoute: ActivatedRoute,
    private productService: ProductsService
  ) { }

  ngOnInit() {
    this.activeRoute.params
    .subscribe(params => {
      this.id = params.id;
    });

    this.productService.getOneProduct(this.id)
    .subscribe(product => {
     this.furniture = product;
    });
  }

}
