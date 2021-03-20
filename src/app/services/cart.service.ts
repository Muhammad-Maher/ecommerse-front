import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import{Cart} from '../Models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient ) {  }
  private baseURL:string = `https://ecommerce-food.herokuapp.com/api/cart`;  
  // private baseURL:string = `http://localhost:3000/api/cart`;  
  
  getId()
  {
      const Id=localStorage.getItem("id");
      if(Id==null)
      {
          return ' ';
      }
      else{
          return Id;
      }
  }

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



getCart(){
    
    return this.http.get<Cart>(this.baseURL+`/get/${this.getId()}`,{headers:{authorization:this.getToken()}});
  }    


  postCart(formData:FormData){    
    return this.http.post(this.baseURL+`/add`,formData)
  }

 
  updateCart(formData:FormData){
    return this.http.put(this.baseURL+"/update",formData)
  }
}
