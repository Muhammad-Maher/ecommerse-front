import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import{cartModelsServer}from "../Models/cart.model";
import{cartModelsPublic}from "../Models/cart.model";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {

  // constructor(private myclient:HttpClient){ }

  private baseurl:string ="https://ecommerce-food.herokuapp.com/api/cart";
  
  NumberOfItem
  card
  constructor() { 
    localStorage.setItem("card",JSON.stringify([]));

    if(localStorage.getItem("card")){
      this.card=JSON.parse(localStorage.getItem("card"));
      this.NumberOfItem = new BehaviorSubject<number>(this.card.length)
    } 
  }
  ngOnInit(): void {
    
  }
  // add id to card
  addtocart(id){
    this.card.push(id);
    localStorage.setItem("card",JSON.stringify(this.card));
    this.NumberOfItem.next(this.card.length);
  }
// remove id from card
  removefromCart(id){
    this.card=JSON.parse(localStorage.getItem("card"));
    this.card.forEach((item,i)=>{
      if(id==item){ 
        this.card.splice(i,1);
      }
    })
    localStorage.setItem("card",JSON.stringify(this.card));
     this.NumberOfItem.next(this.card.length);
  }

  // get all card products
  getcart(){
    this.card=JSON.parse(localStorage.getItem("card"));
    return this.card;
  }
  
  // get number of product in card
  get getNumberOfItemINcart(){
    this.card=JSON.parse(localStorage.getItem("card"));
    return this.NumberOfItem.asObservable();
  }

}
