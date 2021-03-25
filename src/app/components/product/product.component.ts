import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ProductService} from  '../../services/product.service';
import {CartService} from '../../services/cart.service';
import { Subscription } from 'rxjs';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  value: any;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public id: string;
  public pid: string;
  productReturned;
  subscriber
  cartsubscriber
  cartItems : number = 0;
  cartItemsSubscriber :Subscription ;
  token;
 
  constructor(private activatedRoute: ActivatedRoute,private product:ProductService, private cart:CartService ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    
    this.token=localStorage.getItem("token");
    

    this.cartItemsSubscriber = this.cart.cartItems.subscribe((val)=>{
      this.cartItems = val;     
     })
     

    
    this.subscriber = this.product.getProductById(this.id)
      .subscribe((res)=>{
      this.productReturned = res;
     
    },
    (error)=>{
      console.log(error)
    })

    
    
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
  }

}
