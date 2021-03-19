import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import{Cart} from '../Models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) {  }
  private baseURL:string = `https://ecommerce-food.herokuapp.com/api/cart`;  
  
  
  getCart(){
    return this.http.get<Cart>(this.baseURL+`/get`);
  }    


  postCart(formData:FormData){    
    return this.http.post(this.baseURL+`/add`,formData)
  }

 
  updateCart(formData:FormData){
    return this.http.put(this.baseURL+"/update",formData)
  }
}
