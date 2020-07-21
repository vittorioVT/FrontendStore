import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductElements } from './Interfaces/productElements';

@Injectable({
  providedIn: 'root'
})
export class ProductStoreService {

  baseUrl: string ='http://localhost:13764/api/products'

  constructor(private http: HttpClient) { }

  getAll(): Observable<ProductElements[]> {
    return this.http.get<ProductElements[]>(this.baseUrl);
  }

  
}
