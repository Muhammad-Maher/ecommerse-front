import { Component, OnInit } from '@angular/core';
import {ProductsService } from 'src/app/services/products.service';
import{SearchService} from '../../services/search.service';
import { Product, servserResponsep } from '../../Models/product.model';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import {CartService} from '../../services/cart.service'


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private myservice:SearchService, private router:Router, private cart: CartService) { }
  products:Product[]=[];
  name:string;
  myform: FormGroup
  mySearch :Subscription
  AllProducts
  items
  token
  cartsubscriber
  cartItems : number = 0;
  cartItemsSubscriber :Subscription ;


  ngOnInit(): void {
    this.token=localStorage.getItem("token");
    this.mySearch = this.myservice.searchSub.subscribe(res=>{
      this.AllProducts = res;
      this.items=this.AllProducts
      console.log(res)
    })

// console.log(this.promotionsList);
this.cartItemsSubscriber = this.cart.cartItems.subscribe((val)=>{
  this.cartItems = val;
  // console.log(val)
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






}
