import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {ProfileComponent}from '../profile/profile.component'
import{profile}from '../../services/profile'

@Component({
  selector: 'app-profile-start',
  templateUrl: './profile-start.component.html',
  styleUrls: ['./profile-start.component.css'],
  providers:[ProfileComponent]
})
export class ProfileStartComponent implements OnInit {
  myProfileData:Subscription
  userData
  errorSub:Subscription
  constructor( private myService :profile) { }

  ngOnInit(): void {

    
this.myProfileData=this.myService.profile.subscribe(res=>{
  console.log(res)
   this.userData=res["userData"]
  console.log(this.userData.username)

  
  
}
)
this.errorSub= this.myService.error.subscribe(err=>{
  let error=err
  console.log(error);
});
  }

}
