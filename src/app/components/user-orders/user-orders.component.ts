import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import{profile}from '../../services/profile'
import{Order}from'../../services/orederService'

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent implements OnInit {

  constructor(private myService :profile , private orderServ : Order) { }
  myOrders
  errorSub:Subscription
  orderSub:Subscription
  cancelsub :Subscription
  errCancel :Subscription

  ngOnInit(): void {

    this.myService.getProfile()   
    this.orderSub=this.myService.profile.subscribe(res=>{
      
       this.myOrders=res["userOrders"]
      
    })

    this.errorSub= this.myService.error.subscribe(err=>{
      let error=err
      console.log(error);
    });
    
    this.cancelsub=this.orderServ.order.subscribe(res=>{
      this.ngOnInit()
    } )

    this.errCancel=this.orderServ.order.subscribe(
      err=>{
        console.log(err)
      }
    )

  }


  cancelOrder(orderId , userId){
    this.myOrders = this.myOrders.filter(item => item._id !== orderId)
   this.orderServ.cancelOrder(userId , orderId)

  }

}
