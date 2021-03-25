import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import { servserResponsep } from '../Models/product.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
    
  searchSub = new Subject()
  constructor(private myclient:HttpClient , private router:Router) { }

  //server
  private baseurl:string ="https://ecommerce-food.herokuapp.com/api/search";

  //loacl
  // private baseurl:string ="http://localhost:3000/api/search";
  
//   getProductsByName(name:string):Observable<servserResponsep>{
//     return this.myclient.post<servserResponsep>(this.baseurl,name);
//  }

getProductByname(name){
  // console.log(name)
this.myclient.post(this.baseurl,{"searchWord":name}).subscribe(
  res=>{   
    this.searchSub.next(res)           
  }
  ,err=>
  {
    console.log(err)
  }
)
}
 
}
