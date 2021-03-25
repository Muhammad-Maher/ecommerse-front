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
  userData
  username
  fname
  lname
  mail
  Address
  Phone
  governorater
  country
  userSubscriber
  selectedValue
  constructor(private myService:profile) { }

  ngOnInit(): void {

    this.myService.getProfile()
    this.userSubscriber = this.myService.profile.subscribe(res => {
      this.userData= res["userData"]      
      this.username= this.userData.username;
      this.fname= this.userData.fname;
      this.lname= this.userData.lname;
      this.mail= this.userData.mail;
      this.Address= this.userData.Address;
      this.Phone= this.userData.Phone;
      this.governorater= this.userData.governorater;
      this.country= this.userData.country;
    })


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
    
    console.log(this.signupForm.value.address)
    const form = { 
      "username":this.signupForm.value.username||this.username,
      "fname":this.signupForm.value.fname||this.fname, 
      "lname":this.signupForm.value.lname||this.lname,      
        "Phone":this.signupForm.value.phone||this.Phone,
        "mail":this.signupForm.value.email||this.mail,            
        "Address":this.signupForm.value.address||this.Address,            
        "governorater":this.selectedValue||this.governorater           
      }
     
     
      
   this.myService.editProfile(form)
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
