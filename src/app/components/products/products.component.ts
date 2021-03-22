import { Component, OnInit, OnDestroy } from '@angular/core';
import {ProductsService } from 'src/app/services/products.service';
import {ProductCartService } from 'src/app/services/product-cart.service';
import { Router } from '@angular/router';
import { Product, servserResponsep } from '../../Models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit ,OnDestroy {


  constructor(private myservice:ProductsService,private cartservice:ProductCartService, private router:Router){}
  products:Product[]=[];

  // constructor(private myservice:ProductsService) { }
  // products;

  ngOnInit(): void {
    this.myservice.getProducts(9)
    .subscribe(
      (product:servserResponsep)=>{
        this.products=product.products;
    })

    // // this.myservice.addproduct({name:'waffel',price:10})
    // // this.products=this.myservice.getProducts();
    // let subscribe =this.myservice.getProducts().subscribe(
    //   (data)=>{
    //     console.log(data);
    //   },
    //   (error)=>{
    //     console.log(error);
    //   },
    //   ()=>{
        
    //   }
    // );
  }

  selectproduct(id:number){
    this.router.navigate(['https://ecommerce-food.herokuapp.com/api/product',id])
    .then();
  }

  addtocart(id){
     this.cartservice.addtocart(id)
  }



  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }

}
