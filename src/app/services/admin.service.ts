import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { Observable, throwError,Subject  } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import {User} from "../Models/userModel"

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private adminSources: BehaviorSubject<string> = new BehaviorSubject("user"); 
  public admin = this.adminSources.asObservable();

  constructor(private http: HttpClient ) {  
    
  }

   //server
   private profileUrl: string="https://ecommerce-food.herokuapp.com/api/user/profile"


   // //local
  //  private profileUrl: string="http://localhost:3000/api/user/profile"


  public setadmin(value: string) {
    this.adminSources.next(value);
}

  

  getToken()
{
    const token=localStorage.getItem("token");
    if(token==null)
    {
        return ' ';
    }
    else{
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






}
