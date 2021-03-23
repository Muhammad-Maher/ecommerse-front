import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Auth } from '../../services/auth'
import { profile} from '../../services/profile'
import { HeaderComponent } from '../header/header.component'

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private myService:Auth,  private profile: profile) { }
  loginForm: FormGroup
  private errorSub: Subscription;
  error= null
  myToken=null
  private LogSub:Subscription;

  subscriber
  userProfile
  userData

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, [Validators.required]),
        'password': new FormControl(null, [Validators.required, Validators.minLength(8)]),
    });

    this.errorSub= this.myService.error.subscribe(err=>{
      this.error=err
      console.log(this.error);
    });
    this.LogSub= this.myService.logedUser.subscribe(res=>{
             
    })

   

    this.errorSub= this.myService.error.subscribe(err=>{
     
      console.log(err);
    });
    

  }

  onSubmit() {
    console.log(this.loginForm);
    this.myService.myLogIn(this.loginForm);


    this.profile.getProfile()
    this.userProfile=this.profile.profile.subscribe(res=>{
      console.log(res)
      this.userData=res["userData"]
      // console.log(this.userData.status)
           
    })

  }
  ngOnDestroy(){
    this.errorSub.unsubscribe();
    this.LogSub.unsubscribe();
  }

}
