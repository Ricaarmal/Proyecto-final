import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../services/messages.service';


@Component({
  selector: 'app-show-messages',
  templateUrl: './show-messages.component.html',
  styleUrls: ['./show-messages.component.css']
})
export class ShowMessagesComponent implements OnInit {

  messages;
  usuario;

  constructor(
    private messageService: MessagesService
  ) { }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('user'));

    this.messageService.getAllMessages()
    .subscribe(message => {
      console.log(message);
      this.messages = message;
    });
  }

}
