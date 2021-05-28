import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule
import { CommonModule } from '@angular/common'; 
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { Routes, RouterModule } from '@angular/router';

//components

import { ErrorComponent } from './components/error/error.component';//*
import { PromotionsComponent } from './components/promotions/promotions.component';//*
import { AboutComponent } from './components/about/about.component';//*
import { AddProductComponent } from './components/add-product/add-product.component';//*
import { DashboardComponent } from './components/dashboard/dashboard.component';//*
import { AllProductsComponent } from './components/all-products/all-products.component';//*
import { CartComponent } from './components/cart/cart.component'//*

//


//

import { HeaderComponent } from './components/header/header.component';//*
import { FooterComponent } from './components/footer/footer.component';//*
import { HomeComponent } from './components/home/home.component';//*
import { SignUpComponent } from './components/sign-up/sign-up.component';//*
import { LogInComponent } from './components/log-in/log-in.component';//*
import { ProfileComponent } from './components/profile/profile.component';//*
import { ProductComponent } from './components/product/product.component';//*
import{UserOrdersComponent}from './components/user-orders/user-orders.component'//*

import{ProfileStartComponent} from './components/profile-start/profile-start.component';
import{EditProfileComponent} from './components/edit-profile/edit-profile.component';
import{SearchComponent} from './components/search/search.component';
//


//services
import {ProductService} from  './services/product.service';//S
import {CartService} from  './services/cart.service';//S
import {NavigationService } from  './services/navigation-service.service';//S
import {Auth} from './services/auth';//S
import{profile} from './services/profile';
import{SearchService} from './services/search.service';

//

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
//material
import {MatGridListModule} from '@angular/material/grid-list';
import { DynamicGridListComponent } from './components/about/dynamic-grid-list/dynamic-grid-list.component';
import { ClickCursorDirective } from './directives/clickCursor.directive';
import { ModifyproductComponent } from './components/modifyproduct/modifyproduct.component';
import { DeleteProductComponent } from './components/delete-product/delete-product.component'
//

import { AllusersOrdersComponent } from './components/allusers-orders/allusers-orders.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({

 

  declarations: [
    AppComponent,
    //components
    PromotionsComponent,
    ErrorComponent,
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
    ClickCursorDirective,
    UserOrdersComponent,
    ProfileStartComponent,
    EditProfileComponent,
    SearchComponent,
    ModifyproductComponent,
    DeleteProductComponent,
    AllusersOrdersComponent,
    
    
],
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
  MatButtonToggleModule,
  MatButtonModule,
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient],
    },
  }),       
],
  providers: [
    ProductService,
    NavigationService,
    CartService,
    profile,
    Auth,
    SearchService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

