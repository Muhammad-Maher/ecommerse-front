import { Component, OnInit } from '@angular/core';
import {ProductService} from 'src/app/services/product.service'

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
  

  ngOnInit(): void {

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
