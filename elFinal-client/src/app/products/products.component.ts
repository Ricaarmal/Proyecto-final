import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  furniture;

  constructor(
  private router: Router,
  private productService: ProductsService
) { }

  ngOnInit() {
    this.productService.getAllProducts()
    .subscribe(producto => {
      this.furniture = producto;
    });
  }

}
