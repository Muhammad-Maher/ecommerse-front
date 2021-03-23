import { Component, OnInit, HostListener } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppComponent } from '../../app.component';
import { Auth } from '../../services/auth'
import { SearchService } from '../../services/search.service';
import { CartService } from '../../services/cart.service';
import { textChangeRangeIsUnchanged } from 'typescript';
import { filter } from 'rxjs/operators'
import { profile } from '../../services/profile'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private reload: AppComponent, private myService: Auth, private myservice: SearchService, private cart: CartService, private route: ActivatedRoute, private profile: profile) { }
  token = null
  myToken = null
  LogSub: Subscription;
  cartItems = 0;
  subscriber: Subscription;
  subscriberCartItems: Subscription;
  subscriberAdmin: Subscription;
  name: string;
  myform: FormGroup
  value
  selectedValueOptions
  adminCheck
  userProfile

  ngOnInit(): void {
    console.log("Headers")
    this.token = localStorage.getItem("token");
    this.LogSub = this.myService.logedUser.subscribe(res => {

      this.ngOnInit()



    })

    this.myform = new FormGroup({
      'body': new FormControl(null)
    })

    if (this.token) {
      this.subscriber = this.cart.getCart().subscribe((val) => {
        if (val != null) {
          var productIDArray: any = val.productID;
          this.cartItems = productIDArray.length;
        }
        this.cart.setCartItems(this.cartItems);

        this.subscriberCartItems = this.cart.cartItems.subscribe((val) => {
          this.cartItems = val
        })

      })


    }



    this.profile.getProfile()
    this.userProfile = this.profile.profile.subscribe(res => {
      // console.log(res)
      this.adminCheck = res["userData"].status
    })


  }


  checkToken() {
    if (this.token == null) {
      this.router.navigate(['/login']);
    }
  }
  logOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    this.router.navigate(['/']);
    this.ngOnInit();
  }


  getProductsByName() {

    //  console.log(this.myform.get('body').value)
    this.myservice.getProductByname(this.myform.get('body').value)
    // console.log(this.myform.get('body').value)
  }

  ngOnDestroy() {
    this.subscriber.unsubscribe();
    this.subscriberCartItems.unsubscribe();
  }





}
