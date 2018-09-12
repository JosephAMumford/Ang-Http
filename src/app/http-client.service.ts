import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Mydata } from './mydata';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class HttpClientService {

  constructor(
    private http: HttpClient
  ) { }

  private mainUrl = 'api/data';

  /** GET data */
  get(): Observable<Mydata[]> {
    console.log(this.http.get<Mydata[]>(this.mainUrl));
    return this.http.get<Mydata[]>(this.mainUrl);
  }


}
