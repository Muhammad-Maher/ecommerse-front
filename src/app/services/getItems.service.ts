import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class getItems {

    constructor(private http: HttpClient) { }
   
    private baseURL: string = "https://ecommerce-food.herokuapp.com/api/order/all"
    private productURl: string ;
    
    getPromotions(){
      return this.http.get(this.baseURL,{observe:'response'})
    }
    
}