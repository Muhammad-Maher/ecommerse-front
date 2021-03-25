import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service'
import {CartService} from '../../services/cart.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  
  
  
  constructor(private products:ProductService , private cart: CartService) { }
  AllProducts 
  items
  subscriber
  token
  cartsubscriber
  cartItems : number = 0;
  cartItemsSubscriber :Subscription ;


  ngOnInit(): void {

    this.token=localStorage.getItem("token");
     this.subscriber = this.products.getAllProducts()
      .subscribe((res)=>{
      this.AllProducts = res;
      this.items = this.AllProducts
      // console.log(res);
      // console.log(this.AllProducts)
    },
    (error)=>{
      console.log(error)
    })

     
     this.cartItemsSubscriber = this.cart.cartItems.subscribe((val)=>{
      this.cartItems = val;     
     })
    

  }


  onPageChange($event) {
    this.items =  this.AllProducts.slice($event.pageIndex*$event.pageSize,
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
  }
}
