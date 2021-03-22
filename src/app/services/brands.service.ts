import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {servserResponse, brandsModels}from "../Models/brands.model";

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor(private myclient:HttpClient) { }

  //server
  private baseurl:string ="https://ecommerce-food.herokuapp.com/api/brand";
  
  // //local
  // private baseurl:string ="http://localhost:3000/api/brand";

  getBrands(numberofbrands:number=9):Observable<servserResponse>{
    return this.myclient.get<servserResponse>(this.baseurl);
  }

  getBrandsById():Observable<brandsModels>{
    return this.myclient.get<brandsModels>('${this.baseurl}/${id}');
  }
}
