import { Component, OnInit } from '@angular/core';
import {ProductsService } from '../../services/products.service';
import {ProductCartService } from '../../services/product-cart.service';
import { Router } from '@angular/router';
import {cartModelsPublic } from '../../Models/cart.model';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {

  constructor(private route:Router,private productservice:ProductsService ,private cartservice:ProductCartService){} 
  cart;
  products:cartModelsPublic[]=[];
  response;
  total;

  checkout(){
  this.route.navigate(['/checkout']); 
  }

  ngOnInit(): void {
    this.total=0;
    this.fillCartArray();
    this.getProductsInCart();
   
  }

  fillCartArray(){
    if(localStorage.getItem("card")){
      this.cart=this.cartservice.getcart();
      console.log(this.cart);
    }

  }

  getProductsInCart(){

    if(this.cart.length!=0){
      this.cart.forEach(id=> {
        this.productservice.getProductsById(id).subscribe(res=>{
          this.response=res;
          this.total+=this.response;
          this.products.push(this.response[0]);
        })
      });

    }

  }
}
