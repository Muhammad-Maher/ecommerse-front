import { Component, OnInit } from '@angular/core';
import {ProductService} from 'src/app/services/product.service'



@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent implements OnInit {

  
 

  constructor(private promtions:ProductService) { }
  promotionsList 
  items
  subscriber
  // pageSizeOptions
  // pageSize
  // length

  ngOnInit(): void {

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
    

  }

  onPageChange($event) {
    this.items =  this.promotionsList.slice($event.pageIndex*$event.pageSize,
    $event.pageIndex*$event.pageSize + $event.pageSize);
  }


  ngOnDestroy(){
    this.subscriber.unsubscribe();
  }


}
