import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(public http: HttpClient) { }
  getData<Type>(url: string) {
    return this.http.get<Type>(url);
  }
}
