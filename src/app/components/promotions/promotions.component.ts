import { Component, OnInit } from '@angular/core';
import {getItems} from 'src/app/services/getItems.service'



@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent implements OnInit {

  
 

  constructor(private promtions:getItems) { }
  promotionsList
  page = 1;
  pageSize =10

  ngOnInit(): void {

    let subscriber = this.promtions.getPromotions()
      .subscribe((res)=>{
      this.promotionsList = res.body;
      console.log(res);
    },
    (error)=>{
      console.log(error)
    })

    
    console.log(this.promotionsList);
    

    // // an example array of 150 items to be paged
    // this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`}));



  }





}
