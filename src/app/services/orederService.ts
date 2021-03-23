import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, Subject, Subscription } from 'rxjs';

import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
})

export class Order {
    error = new Subject();
    order = new Subject();//event
    allOrders = new Subject();
    updateStatus = new Subject();
    


    constructor(private myClient: HttpClient, private router: Router) {
    }

    getToken() {
        const token = localStorage.getItem("token");
        if (token == null) {
            return ' ';
        }
        else {
            return token;
        }
    }

    getId()
    {
        const Id=localStorage.getItem("id");
        if(Id==null)
        {
            return ' ';
        }
        else{
            return Id;
        }
    }
    

  private cancelOrderUrl :string="https://ecommerce-food.herokuapp.com/api/order"
 // private cancelOrderUrl :string="http://localhost:3000/api/order"
    private AllOrdersUrl : string="https://ecommerce-food.herokuapp.com/api/order/all"
    private updateStatusUrl : string="https://ecommerce-food.herokuapp.com/api/order"
    private createUrl : string="https://ecommerce-food.herokuapp.com/api/order"


    createOrder(order){
        return this.myClient.post(this.createUrl+`/${this. getId()}`,order,{ headers: { authorization:this.getToken()}})
    }
    
    cancelOrder(userId , OrderId){
        console.log(userId)
        console.log(OrderId)
        this.myClient.delete(this.cancelOrderUrl+'/'+userId+'/'+OrderId, { headers: { authorization: this.getToken() } })
        .subscribe(res=>{
            this.order.next(res)
        }, err=>{
            this.error.next(err)
            console.log(err)

        })
    }
    getAllOrders()
    {
        this.myClient.get(this.AllOrdersUrl,{ headers: { authorization: this.getToken() } })
        .subscribe(res=>{
            console.log(res)
            this.allOrders.next(res)
            
        },err=>{
            console.log(err)
            this.error.next(err)
        })
    }

    updateOrderStatus(userId , OrderId , stat)
    {
this.myClient.patch(this.updateStatusUrl+'/'+userId+'/'+OrderId,{status:stat.controls.status.value},{headers: { authorization: this.getToken() }})
.subscribe(res=>{
    console.log(res)
    this.updateStatus.next(res)
    
},err=>{
    console.log(err)
    this.error.next(err)
})
console.log(stat.controls.status.value)
   }




}