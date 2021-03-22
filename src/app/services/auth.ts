import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, Subject } from 'rxjs';
import { SignUpComponent } from '../components/sign-up/sign-up.component';
import { Router } from '@angular/router';
import { User } from '../Models/userModel'

@Injectable({
    providedIn: 'root'
})

export class Auth{
    error= new Subject();
    logedUser= new Subject();
    constructor(private myClient: HttpClient,private router:Router) {
    }
    
    //server
    private RegisterURL: string = "https://ecommerce-food.herokuapp.com/api/register"
    
    private logIn: string="https://ecommerce-food.herokuapp.com/api/login"
    
    
    // //local
    // private RegisterURL: string = "http://localhost:3000/api/register"
    
    // private logIn: string="http://localhost:3000/api/login"
    
    AddUser(newUser){        
             

        return this.myClient.post(this.RegisterURL,newUser)
        
    }

    myLogIn(userData){
        console.log(userData)
        this.myClient.post(this.logIn,{"password":userData.controls.password.value,"username":userData.controls.username.value})
        .subscribe(res=>{
            console.log(res)
            let myToken=res["token"];
            localStorage.setItem("token",myToken);
            let Id=res["id"];
            localStorage.setItem("id",Id);
            this.logedUser.next(res);
            this.router.navigate(['/profile']);
        },err=>{
            console.log(err)
            // console.log("kfjvmifo");
            this.error.next(err)
        });
    }
}