import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  images: Array<string>;
  url = 'http://localhost:3000/products';
  constructor( private http: HttpClient,
  private https: Http ) { }

  ngOnInit() {
  }

}
