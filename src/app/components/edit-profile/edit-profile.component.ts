import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import{profile}from'../../services/profile'


@Component ({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
  
})
export class EditProfileComponent implements OnInit {
  signupForm: FormGroup
  constructor(private myService:profile) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'fname': new FormControl(null, [ this.charOnly.bind(this),
      Validators.minLength(3), Validators.maxLength(8)]),
      'lname': new FormControl(null, [ this.charOnly.bind(this),
      Validators.minLength(3), Validators.maxLength(8)]),
      'phone': new FormControl(null, [Validators.minLength(11), Validators.maxLength(11),
      this.numOnly.bind(this)]),
      'username': new FormControl(null),
      'email': new FormControl(null, [ Validators.email]),
      'gover':new FormControl(null),
      'address':new FormControl(null),
      'image':new FormControl(null),
      'gender':new FormControl("M"),
      'password': new FormControl(null, [ Validators.minLength(8)]),

  });

  }
  
  //////////Submit
  onSubmit(){
   console.log(this.signupForm)
   this.myService.editProfile(this.signupForm)
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

}
