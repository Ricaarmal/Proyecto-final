import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessagesService } from '../../services/messages.service';
import { ProductsService } from '../../services/products.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  usuario: any = {};
  public isCollapsed = false;
  message: any = {};
  product: any = {};
  id: any;

  constructor(
    private messageService: MessagesService,
    private productService: ProductsService,
    private activeRoute: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activeRoute.params
    .subscribe(params => {
      this.id = params.id;
    });

    this.usuario = JSON.parse(localStorage.getItem('user'));
  }

  saveMessage() {
    this.message.user = this.usuario._id;
    this.messageService.createMessage(this.message)
    .subscribe(message => {
      alert('Pedido Creado');
      this.router.navigate(['products']);
    });
  }

}
