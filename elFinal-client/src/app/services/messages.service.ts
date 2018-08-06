import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  // url = 'http://localhost:3000/messages';
  url = 'https://casa-bonita.herokuapp.com/messages';

  constructor(private http: Http) { }

  getAllMessages(): Observable<string> {
    return this.http.get(this.url)
    .pipe(map((res: Response) => res.json()));
  }

  getOneMessage(id): Observable<string> {
    return this.http.get(this.url + id)
    .pipe(map((res: Response) => res.json() ));
  }

  createMessage(obj) {
    return this.http.post(this.url + '/create', obj)
    .pipe(map((res: Response) => res.json()));
  }

  editMessage(obj): Observable<string> {
    return this.http.put(this.url + obj._id, obj)
    .pipe(map((res: Response) => res.json()));
  }

  deleteProduct(id): Observable<string> {
    return this.http.delete(this.url + id)
    .pipe(map((res: Response) => res.json()));
  }
}
