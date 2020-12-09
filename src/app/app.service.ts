import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {}
  
  getProducts(): Observable<any>{
    return this.http.get('http://localhost:9000/productos/obtener');
  }
}
