import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NG_ASYNC_VALIDATORS, Validators } from '@angular/forms';
import {myImage} from './imageValidation'
import { Auth } from '../../services/auth'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit,OnDestroy {

  signupForm: FormGroup
  myImagePreview:string

  private errorSub: Subscription;
  error= null

  constructor(private myService:Auth) {  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
        'fname': new FormControl(null, [Validators.required, this.charOnly.bind(this),
        Validators.minLength(3), Validators.maxLength(8)]),
        'lname': new FormControl(null, [Validators.required, this.charOnly.bind(this),
        Validators.minLength(3), Validators.maxLength(8)]),
        'phone': new FormControl(null, [Validators.minLength(11), Validators.maxLength(11),
        this.numOnly.bind(this),Validators.required]),
        'username': new FormControl(null, [Validators.required]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'gover':new FormControl(null,[Validators.required]),
        'address':new FormControl(null),
        'image':new FormControl(null),
        'gender':new FormControl("M"),
        'password': new FormControl(null, [Validators.required, Validators.minLength(8)]),

    });


    this.errorSub = this.myService.error.subscribe(err=>{
      console.log(err);
      this.error=err;
    })
  }

  //////////Submit
  onSubmit(){
    console.log(this.signupForm);
    this.myService.AddUser(this.signupForm)
  }

  /////////upload Image

  onImageUploaded(event: Event){
    const file= (event.target as HTMLInputElement).files[0];
    this.signupForm.patchValue({'image': file});
    this.signupForm.get('image').updateValueAndValidity();
    const reader= new FileReader();
    reader.onload=()=>{
      this.myImagePreview=reader.result as string;
    }
    reader.readAsDataURL(file);
  }

  charOnly(control: FormControl): { [s: string]: boolean } {
    let letters = /^[A-Za-z]+$/;
    if (!letters.test(control.value)) {
      return { 'name has numbers': true }
    }
    return null
  }
  numOnly(control: FormControl): { [s: string]: boolean } {
    if (isNaN(control.value)) {
      return { 'age has chars': true }
    }
    return null
  }


  ngOnDestroy(){
    this.errorSub.unsubscribe();
  }
}
