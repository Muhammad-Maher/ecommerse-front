import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { Observable, throwError,Subject  } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import{Cart} from '../Models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
 
  
  private cartItemsSources: BehaviorSubject<number> = new BehaviorSubject(0); 
  public cartItems = this.cartItemsSources.asObservable();

  constructor(private http: HttpClient ) {  
    
  }

   private baseURL:string = `https://ecommerce-food.herokuapp.com/api/cart`;  
  
  ////Local
  // private baseURL:string = `http://localhost:3000/api/cart`;  
  

  public setCartItems(value: number) {
    this.cartItemsSources.next(value);
}

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


  postCart(data:any){ 
    data.userID = this.getId(); 
    
    return this.http.post(this.baseURL+`/add`,data,{headers:{authorization:this.getToken()}})
  }

 
  updateCart(body){
    body.userID = this. getId();
    return this.http.patch(this.baseURL+"/update",body,{headers:{authorization:this.getToken()}})
  }

  RemoveFromCart(productID,index){
    
    return this.http.delete(this.baseURL+`/remove/${this. getId()}/${productID}/${index}`,{headers:{authorization:this.getToken()}})
  }
}
