import { Component, OnInit } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import{profile}from '../../services/profile'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  myProfile : Subscription;
  errorSub :Subscription;
  userData 
  constructor(private myService :profile) { }

  ngOnInit(): void {
    
    this.myService.getProfile()
    this.myProfile=this.myService.profile.subscribe(res=>{
      
      this.userData=res["userData"]            
      
    })
    this.errorSub= this.myService.error.subscribe(err=>{
     
      console.log(err);
    });
  }


}
