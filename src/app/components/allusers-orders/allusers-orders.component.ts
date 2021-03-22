import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import{Order}from'../../services/orederService'

@Component({
  selector: 'app-allusers-orders',
  templateUrl: './allusers-orders.component.html',
  styleUrls: ['./allusers-orders.component.css']
})
export class AllusersOrdersComponent implements OnInit {

  constructor( private orderServ : Order) { }
  allOrders
  allorderSub : Subscription
  errSub : Subscription
  statSub : Subscription
  ststusForm: FormGroup
  ngOnInit(): void {
    this.ststusForm = new FormGroup({
      'status': new FormControl("pending"),
      
    });

    this.allorderSub=this.orderServ.allOrders.subscribe(res=>{
     // console.log(res)
       this.allOrders=res
      console.log(this.allOrders) 
    })
    this.errSub= this.orderServ.error.subscribe(err=>{
      let error=err
      console.log(error);
    });

    this.orderServ.getAllOrders()

    this.statSub=this.orderServ.updateStatus.subscribe(res=>{
      console.log(res)
      this.ngOnInit()
    })

  }

  onSubmit(orederId , userId ){
    console.log(this.ststusForm)
   // console.log(orederId,userId)
   this.orderServ.updateOrderStatus(userId,orederId,this.ststusForm)
  }
  update(id)
  {
    document.getElementById(id).style.display="block"
  }
  cancel(id)
  {
    document.getElementById(id).style.display="none"
  }

}
