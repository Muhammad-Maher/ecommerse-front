import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {getProduct} from  '../../services/getProduct.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public id: string;
  public pid: string;
  productReturned;
  subscriber
  
  constructor(private activatedRoute: ActivatedRoute,private product:getProduct) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.pid = this.activatedRoute.snapshot.paramMap.get('pid');
    console.log(this.id);
    console.log(this.pid);

    
    this.subscriber = this.product.getProduct(this.id,this.pid)
      .subscribe((res)=>{
      this.productReturned = res.body;
      console.log(res);
    },
    (error)=>{
      console.log(error)
    })

    
  }

  ngOnDestroy(){
    this.subscriber.unsubscribe();
  }

}
