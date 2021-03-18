import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, Subject } from 'rxjs';
import { SignUpComponent } from '../components/sign-up/sign-up.component';
import { Router } from '@angular/router';
import { User } from '../components/sign-up/userModel'

@Injectable({
    providedIn: 'root'
})

export class Auth{
    error= new Subject();
    constructor(private myClient: HttpClient,private router:Router) {
    }
    private RegisterURL: string = "http://localhost:3000/api/register"

    AddUser(newUser){
        console.log(newUser.controls.image.value);
        let newuser:User={"username":newUser.controls.username.value,"Password":newUser.controls.password.value, 
            "mail":newUser.controls.email.value,"gender":newUser.controls.gender.value,
            "fname":newUser.controls.fname.value,"lname":newUser.controls.lname.value,
            "Phone":newUser.controls.phone.value, "governorater":newUser.controls.gover.value,
            "Address":newUser.controls.address.value,"country":"Egypt","status":"user","BrandID":"",
            "avatar":newUser.controls.image.value}
        // let postUser = new FormData();
        // postUser.append("username",newUser.value.username.value);
        // postUser.append("Password",newUser.value.password.value);
        // postUser.append("mail",newUser.value.email.value);
        // postUser.append("gender",newUser.value.gender.value);
        // postUser.append("fname",newUser.value.fname.value);
        // postUser.append("lname",newUser.value.lname.value);
        // postUser.append("Phone",newUser.value.phone.value);  
        // postUser.append("governorater",newUser.value.gover.value);      
        // //postUser.append("mail",newUser.controls.email.value);
        // //postUser.append("Password",newUser.controls.password.value);
        // postUser.append("Address",newUser.value.address.value);
        // postUser.append("country","Egypt");
        // postUser.append("status","user");
        // postUser.append("BrandID","");
        // postUser.append("avatar",newUser.controls.image.value,newUser.controls.username.value);
        console.log(newuser);
        const headers = new HttpHeaders().set('content-type', "application/json");
        this.myClient.post(this.RegisterURL, newuser,{headers:headers})
        .subscribe(res=>{
            console.log(res)
        },err=>{
            console.log(err);
        })
    }
}