import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { servserResponsep, Product } from '../Models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // private products =[
  //   {name:'pizza',price:25},
  //   {name:'burger',price:15},
  // ]

  constructor(private myclient:HttpClient) { 
    // this.myObservable =new Observable((subscriber)=>{
    //   subscriber.next(this.products)
    // })
  }
  //server
  private baseurl:string ="https://ecommerce-food.herokuapp.com/api/product";
  

  // //local
  // private baseurl:string ="http://localhost:3000/api/product";

 // myObservable:Observable<Array<{name,price}>>;

  getProducts(numberofproducts:number=9):Observable<servserResponsep>{
    return this.myclient.get<servserResponsep>(this.baseurl);
  }

  getProductsById(id:number):Observable<Product>{
    return this.myclient.get<Product>('${this.baseurl}/${id}');
  }

}
