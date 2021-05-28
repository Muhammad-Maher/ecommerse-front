import { Component, OnInit, HostListener } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppComponent } from '../../app.component';
import { Auth } from '../../services/auth';
import { SearchService } from '../../services/search.service';
import { CartService } from '../../services/cart.service';
import { textChangeRangeIsUnchanged } from 'typescript';
import { filter } from 'rxjs/operators';
import { profile } from '../../services/profile';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private router: Router,
    private reload: AppComponent,
    private myService: Auth,
    private myservice: SearchService,
    private cart: CartService,
    private route: ActivatedRoute,
    private profile: profile,
    private translate: TranslateService
  ) {
    translate.addLangs(['en', 'ar']);
    translate.setDefaultLang('en');
  }
  useLanguage(language: string) {
    this.translate.use(language);
  }

  token = null;
  myToken = null;
  LogSub: Subscription;
  cartItems = 0;
  subscriber: Subscription;
  subscriberCartItems: Subscription;
  subscriberAdmin: Subscription;
  name: string;
  myform: FormGroup;
  value;
  selectedValueOptions;
  adminCheck;
  userProfile;
  username;
  lastname;
  isCollapsed = true;
  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.LogSub = this.myService.logedUser.subscribe((res) => {
      this.ngOnInit();
    });

    this.myform = new FormGroup({
      body: new FormControl(null),
    });

    if (this.token) {
      this.subscriber = this.cart.getCart().subscribe((val) => {
        if (val != null) {
          var productIDArray: any = val.productID;
          this.cartItems = productIDArray.length;
        }
        this.cart.setCartItems(this.cartItems);

        this.subscriberCartItems = this.cart.cartItems.subscribe((val) => {
          this.cartItems = val;
        });
      });
    }

    this.profile.getProfile();
    this.userProfile = this.profile.profile.subscribe((res) => {
      this.adminCheck = res['userData'].status;
      this.username = res['userData'].username;
      this.lastname = res['userData'].lname;
    });
  }

  translateLanguage(selectedlanguage) {
    console.log('here');
    this.translate.use(selectedlanguage);
  }

  checkToken() {
    if (this.token == null) {
      this.router.navigate(['/login']);
    }
  }
  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    this.router.navigate(['/']);
    this.ngOnInit();
  }

  getProductsByName() {
    this.myservice.getProductByname(this.myform.get('body').value);
    this.router.navigate(['/search']);
  }

  ngOnDestroy() {
    this.subscriber.unsubscribe();
    this.subscriberCartItems.unsubscribe();
  }
}
