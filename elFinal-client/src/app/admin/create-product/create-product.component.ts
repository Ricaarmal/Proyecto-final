import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  furniture: any = {
    name: '',
    quantity: '',
    price: ''
  };
  newProduct: object = {};
  isCollapsed = false;
  file: any;

  constructor(
  private productService: ProductsService,
  private router: Router
  ) { }

  ngOnInit() {
  }

  getFile(e) {
    this.file = e.target.files[0];
  }

  saveFurniture() {

    const newFurniture = new FormData();
    for (let p in this.furniture) {
      newFurniture.append(p, this.furniture[p])
    }
    newFurniture.append('image', this.file);

    this.productService.createProduct(newFurniture)
    .subscribe(producto => {
      this.newProduct = producto;
      alert('Producto Creado');
      this.router.navigate(['products']);
    });
  }

}
