import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = 'http://localhost:3000/products';
  // url = '';

  constructor(private http: Http) { }

  getAllProducts(): Observable<string> {
    return this.http.get(this.url)
    .pipe(map((res: Response) => res.json()));
  }

  getOneProduct(id): Observable<string> {
    return this.http.get(this.url + '/' + id)
    .pipe(map((res: Response) => res.json() ));
  }

  createProduct(obj) {
    return this.http.post(this.url + 'new', obj)
    .pipe(map((res: Response) => res.json()));
  }

  editProduct(obj): Observable<string> {
    return this.http.put(this.url + obj._id, obj)
    .pipe(map((res: Response) => res.json()));
  }

  deleteProduct(id): Observable<string> {
    return this.http.delete(this.url + id)
    .pipe(map((res: Response) => res.json()));
  }
}
