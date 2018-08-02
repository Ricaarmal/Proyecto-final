import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  furniture: object = {};
  newProduct: any;

  constructor(
  private productService: ProductsService,
  private router: Router
  ) { }

  ngOnInit() {
  }

  saveFurniture() {
    this.productService.createProduct(this.furniture)
    .subscribe(producto => {
      console.log(producto);
      this.newProduct = producto;
    });
  }

}
