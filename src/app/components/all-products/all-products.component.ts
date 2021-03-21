import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service'

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  
  
  
  constructor(private products:ProductService) { }
  AllProducts 
  items
  subscriber
  token

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
    
    // console.log(this.promotionsList);
    

  }

  onPageChange($event) {
    this.items =  this.AllProducts.slice($event.pageIndex*$event.pageSize,
    $event.pageIndex*$event.pageSize + $event.pageSize);
  }


  ngOnDestroy(){
    this.subscriber.unsubscribe();
  }
}
