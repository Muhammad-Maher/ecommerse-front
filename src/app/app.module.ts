import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule
import { CommonModule } from '@angular/common'; 
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { PromotionsComponent } from './components/promotions/promotions.component';
import { ErrorComponent } from './components/error/error.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { Routes, RouterModule } from '@angular/router';



//services
import {getItems} from  './services/getItems.service';
import {getProduct} from  './services/getProduct.service';


//

//alaa

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { ProfileComponent } from './components/profile/profile.component';
//

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component'
//naterial
import {MatGridListModule} from '@angular/material/grid-list';
import { DynamicGridListComponent } from './components/about/dynamic-grid-list/dynamic-grid-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'




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
  
    
],

 
  
 
 
  providers: [
    getItems,
    getProduct
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
