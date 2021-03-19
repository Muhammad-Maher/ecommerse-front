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
    constructor(private http: HttpClient,private router:Router) {
    }
    private RegisterURL: string = "http://localhost:3000/api/register"

    AddUser(newUser){        
             

        return this.http.post(this.RegisterURL,newUser)
        // this.myClient.post(this.RegisterURL, newUser)
        // .subscribe(res=>{
        //     console.log(res)
        // },err=>{
        //     console.log(err);
        // })
    }
}