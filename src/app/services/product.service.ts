import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import{Product} from  '../Models/product.model'

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  
  constructor(private http: HttpClient) {  }
  private baseURL:string = `https://ecommerce-food.herokuapp.com/api`;  
  private promotionsURL:string = "https://ecommerce-food.herokuapp.com/api/product/offers";
  private localURL:string = "https://ecommerce-food.herokuapp.com/api/product";
  
  // private baseURL:string = `http://localhost:3000/api`;  
  // private promotionsURL:string = "http://localhost:3000/api/product/offers";
  // private localURL:string = "http://localhost:3000/api/product";
  

  getToken()
{
    const token=localStorage.getItem("token");
    if(token==null)
    {
        return ' ';
    }
    else{
        return token;
    }
}

  
  getPromotions(){
    return this.http.get<Product>(this.baseURL+`/product/offers`);
  }    


  getAllProducts(){
    return this.http.get<Product>(this.baseURL+`/order/all`);
  }    


  getProductById_resId(id,pid){
    return this.http.get<Product>(this.baseURL+`/product/${id}/${pid}`);
  }

  getProductById(id){
    return this.http.get<Product>(this.baseURL+`/product/one/${id}`);
  }



  postProduct(formData:FormData){
    //const formData = new FormData();
    return this.http.post(this.localURL,formData,  {headers:{authorization:this.getToken()}})
  }

  deleteProduct(id){
    return this.http.delete(this.baseURL+`/product/${id}`, {headers:{authorization:this.getToken()}});
  }

  updateProduct(id){
    return this.http.patch(this.baseURL+"/"+id, {headers:{authorization:this.getToken()}})
  }


  
}