import { Component, OnInit } from '@angular/core';
import {ProductsService } from 'src/app/services/products.service';
import{SearchService} from '../../services/search.service';
import { Product, servserResponsep } from '../../Models/product.model';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private myservice:SearchService, private router:Router) { }
  products:Product[]=[];
  name:string;
  myform: FormGroup
  mySearch :Subscription
  AllProducts
  items
  token
  ngOnInit(): void {
    this.token=localStorage.getItem("token");
    this.mySearch = this.myservice.searchSub.subscribe(res=>{
      this.AllProducts = res;
      this.items=this.AllProducts
      console.log(res)
    })
  }

  onPageChange($event) {
    this.items =  this.AllProducts.slice($event.pageIndex*$event.pageSize,
    $event.pageIndex*$event.pageSize + $event.pageSize);
  }






}
