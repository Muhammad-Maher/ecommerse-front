import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class getProduct {

    constructor(private http: HttpClient) { }
   
    private baseURL: string ;
    private productURl: string ;
    
    getProduct(id,pid){
      this.baseURL= `https://ecommerce-food.herokuapp.com/api/product/${id}/${pid}`
      return this.http.get(this.baseURL,{observe:'response'})
    }
    
}