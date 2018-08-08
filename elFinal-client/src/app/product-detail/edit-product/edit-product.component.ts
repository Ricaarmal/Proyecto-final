import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  public isCollapsed: Boolean = false;
  producto: any = {};
  product: any = {};
  usuario: any;
  id: any;

  constructor(
    private productService: ProductsService,
    private activateRoute: ActivatedRoute,
    private routes: Router
  ) { }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('user'));

    this.activateRoute.params
    .subscribe(prod => {
      this.id = prod.id;
    });

    this.productService.getOneProduct(this.id)
    .subscribe(product => {
      this.product = product;
      this.producto = this.product;
    });
  }

  modify() {
    if (!window.confirm('¿Estas seguro?')) { return; }
    this.productService.editProduct(this.producto)
    .subscribe(() => {
      this.routes.navigate(['products']);
    });
  }

  delete() {
    if (!window.confirm('Estas Seguro?')) { return; }
    this.productService.deleteProduct(this.id)
    .subscribe(() => {
      alert('Producto Eliminado');
      this.routes.navigate(['products']);
    });
  }

}
