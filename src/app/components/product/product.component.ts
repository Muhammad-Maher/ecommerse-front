import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ProductService} from  '../../services/product.service';


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
  
  constructor(private activatedRoute: ActivatedRoute,private product:ProductService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.pid = this.activatedRoute.snapshot.paramMap.get('pid');
    console.log(this.id);
    console.log(this.pid);

    
    this.subscriber = this.product.getProductById_resId(this.id,this.pid)
      .subscribe((res)=>{
      this.productReturned = res;
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
