import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NG_ASYNC_VALIDATORS,
  Validators,
} from '@angular/forms';
import { myImage } from './imageValidation';
import { Auth } from '../../services/auth';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit, OnDestroy {
  signupForm: FormGroup;
  myImagePreview: string;
  avatar;
  prp;
  private errorSub: Subscription;
  error = null;

  constructor(private myService: Auth, private router: Router) {}

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      fname: new FormControl(null, [
        Validators.required,
        this.charOnly.bind(this),
        Validators.minLength(3),
        Validators.maxLength(8),
      ]),
      lname: new FormControl(null, [
        Validators.required,
        this.charOnly.bind(this),
        Validators.minLength(3),
        Validators.maxLength(8),
      ]),
      phone: new FormControl(null, [
        Validators.minLength(11),
        Validators.maxLength(11),
        this.numOnly.bind(this),
        Validators.required,
      ]),
      username: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      gover: new FormControl(null, [Validators.required]),
      address: new FormControl(null),
      image: new FormControl(null),
      gender: new FormControl('M'),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
    });

    // this.errorSub = this.myService.error.subscribe(err=>{
    //   console.log(err);
    //   this.error=err;
    // })
  }

  //////////Submit
  onSubmit() {
    let postUser = new FormData();
    postUser.append('avatar', this.avatar);
    postUser.append('username', this.signupForm.get('username').value);
    postUser.append('Password', this.signupForm.get('password').value);
    postUser.append('mail', this.signupForm.get('email').value);
    postUser.append('gender', 'M');
    postUser.append('fname', this.signupForm.get('fname').value);
    postUser.append('lname', this.signupForm.get('lname').value);
    postUser.append('Phone', this.signupForm.get('phone').value);
    postUser.append('governorater', this.signupForm.get('gover').value);
    postUser.append('Address', this.signupForm.get('address').value);
    postUser.append('country', 'Egypt');
    postUser.append('status', 'user');
    // postUser.append('BrandID', '');

    this.myService.AddUser(postUser).subscribe(
      (data) => {
        this.prp = data;
        this.router.navigate(['/login']);
      },
      (err) => {
        let errorKeys = err.error.keyValue;

        this.error = err;
        // console.log(this.error)
        if (this.error[0] === 'username') {
          console.log('RepeatedUser');
        } else if (this.error[0] === 'email') {
          console.log('repeatedMail');
        }
      }
    );
  }

  /////////upload Image

  onImageUploaded(val) {
    this.avatar = val.target.files[0];

    const file = (val.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
  }

  charOnly(control: FormControl): { [s: string]: boolean } {
    let letters = /^[A-Za-z]+$/;
    if (!letters.test(control.value)) {
      return { 'name has numbers': true };
    }
    return null;
  }
  numOnly(control: FormControl): { [s: string]: boolean } {
    if (isNaN(control.value)) {
      return { 'age has chars': true };
    }
    return null;
  }

  ngOnDestroy() {
    // this.errorSub.unsubscribe();
  }
}
