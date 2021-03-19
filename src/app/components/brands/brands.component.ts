import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router} from '@angular/router';
import { BrandsService } from '../../services/brands.service';
import { brandsModels, servserResponse } from '../../Models/brands.model';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit ,OnDestroy{

  constructor(private myservice:BrandsService, private router:Router) { }
  brands:brandsModels[]=[];
  //subscriber;

  ngOnInit(): void {
    // this.getBrands();
    this.myservice.getBrands(9)
    .subscribe(
      (brand:servserResponse)=>{
        this.brands=brand.brands;
    })
  }
  selectbrand(id:number){
    this.router.navigate(['https://ecommerce-food.herokuapp.com/api/brand',id])
    .then();
  }


  // getBrands(){
  //   this.subscriber=this.myservice.getBrands()
  //   .subscribe(
  //     (response)=>{
  //       this.brands=response;
  //     },
  //     (error)=>{
        
  //     }
  //   )
  // }

  ngOnDestroy(): void {
    // this.subscriber.unsubscribe();
  }

}
