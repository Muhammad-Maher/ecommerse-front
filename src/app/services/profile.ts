import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, Subject } from 'rxjs';
import { SignUpComponent } from '../components/sign-up/sign-up.component';
import { Router } from '@angular/router';
import { User } from '../Models/userModel'

@Injectable({
    providedIn: 'root'
})

export class profile{
    error= new Subject();
    profile = new Subject();

   
    constructor(private myClient: HttpClient,private router:Router) {
    }
  //  private RegisterURL: string = "https://ecommerce-food.herokuapp.com/api/register"

    // server
    private profileUrl: string="https://ecommerce-food.herokuapp.com/api/user/profile"


    //local
    // private profileUrl: string="http://localhost:3000/api/user/profile"



 // private profileUrl: string="https://ecommerce-food.herokuapp.com/api/user/profile/605208d0d282fa970bb44ba2"
    //private logIn: string="https://ecommerce-food.herokuapp.com/api/login"
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

    getProfile()
    {
        this.myClient.get(this.profileUrl+'/'+this.getId() , {headers:{authorization:this.getToken()}}).subscribe(res=>{
            
            this.profile.next(res)

        } , err=>{
           
            this.error.next(err)
        })
    }

    editProfile(prfileData)
    {
        
        this.myClient.patch(this.profileUrl+'/'+this.getId() ,prfileData, {headers:{"authorization":this.getToken()}}).subscribe(res=>{
           alert ("profile updated")
           this.router.navigate(['/']);
        } , err=>{
            console.log(err)
            
        })
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