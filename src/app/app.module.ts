import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule
import { CommonModule } from '@angular/common'; 
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { Routes, RouterModule } from '@angular/router';

//


import { ErrorComponent } from './components/error/error.component';
import { PromotionsComponent } from './components/promotions/promotions.component';
import { AboutComponent } from './components/about/about.component';
import { AddProductComponent } from './components/add-product/add-product.component';

//

//services
import {ProductService} from  './services/product.service';
import {CartService} from  './services/cart.service';
import {NavigationService } from  './services/navigation-service.service';



//

//alaa

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { ProfileComponent } from './components/profile/profile.component';
//

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component'
//material
import {MatGridListModule} from '@angular/material/grid-list';
import { DynamicGridListComponent } from './components/about/dynamic-grid-list/dynamic-grid-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ClickCursorDirective } from './directives/clickCursor.directive'




@NgModule({

  imports: [
    BrowserModule,    
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    NgbModule,
    MatGridListModule,
    
            
  ],

  declarations: [
    AppComponent,
    PromotionsComponent,
    ErrorComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    SignUpComponent,
    LogInComponent,
    ProfileComponent,
    ProductComponent,
    CartComponent,
    DynamicGridListComponent,
    DashboardComponent,
    AddProductComponent,
    AllProductsComponent,
    ClickCursorDirective
    
],

 
  
 
 
  providers: [
    ProductService,
    NavigationService,
    CartService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
