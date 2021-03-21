import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service'
import {CartService} from '../../services/cart.service'
import { readConfiguration } from '@angular/compiler-cli';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent implements OnInit {

  
 

  constructor(private promtions:ProductService, private cart: CartService) { }
  promotionsList 
  items
  subscriber
  cartsubscriber
  cartItems : number = 0;
  cartItemsSubscriber :Subscription ;
  token=null
  // pageSizeOptions
  // pageSize
  // length

  ngOnInit(): void {
    this.token=localStorage.getItem("token");

     this.subscriber = this.promtions.getPromotions()
      .subscribe((res)=>{
      this.promotionsList = res;
      this.items = this.promotionsList
      console.log(res);
      console.log(this.promotionsList)

    },
    (error)=>{
      console.log(error)
    })
    
    // console.log(this.promotionsList);
    this.cartItemsSubscriber = this.cart.cartItems.subscribe((val)=>{
      this.cartItems = val;
      // console.log(val)
      
    })

  }

  onPageChange($event) {
    this.items =  this.promotionsList.slice($event.pageIndex*$event.pageSize,
    $event.pageIndex*$event.pageSize + $event.pageSize);
  }


  addToCart(_id){
    this.cartsubscriber = this.cart.postCart({ "productID" : _id}).subscribe((res)=>{
      console.log(res);
      if(res == "cart updated successfully" || res == "cart created successfully"){
        alert("Product added  to cart");
        this.cart.setCartItems(this.cartItems + 1);
        
      }

      
    },(err)=>{
      console.log(err);
    })
  }

 


  ngOnDestroy(){
    this.subscriber.unsubscribe();
    // this.cartsubscriber.unsubscribe();
    this.cartItemsSubscriber.unsubscribe();
  }


}
