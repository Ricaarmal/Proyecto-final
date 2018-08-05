import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  usuario: any = {};
  public isCollapsed = false;
  message: any = {};

  constructor(
    private messageService: MessagesService
  ) { }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('user'));
  }

  saveMessage() {
    this.messageService.createProduct(this.message)
    .subscribe(message => {
      alert('Pedido Creado');
      console.log(message);
    });
  }

}
