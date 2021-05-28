import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

//components

import { ErrorComponent } from './components/error/error.component'; //*
import { PromotionsComponent } from './components/promotions/promotions.component'; //*
import { AboutComponent } from './components/about/about.component'; //*
import { AddProductComponent } from './components/add-product/add-product.component'; //*
import { DashboardComponent } from './components/dashboard/dashboard.component'; //*
import { AllProductsComponent } from './components/all-products/all-products.component'; //*
import { CartComponent } from './components/cart/cart.component'; //*
import { DeleteProductComponent } from './components/delete-product/delete-product.component'; //*

//

//alaa

import { HeaderComponent } from './components/header/header.component'; //*
import { FooterComponent } from './components/footer/footer.component'; //*
import { HomeComponent } from './components/home/home.component'; //*
import { SignUpComponent } from './components/sign-up/sign-up.component'; //*
import { LogInComponent } from './components/log-in/log-in.component'; //*
import { ProfileComponent } from './components/profile/profile.component'; //*
import { ProductComponent } from './components/product/product.component'; //*
import { UserOrdersComponent } from './components/user-orders/user-orders.component'; //*
import { ProfileStartComponent } from './components/profile-start/profile-start.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { SearchComponent } from './components/search/search.component';
import { ModifyproductComponent } from './components/modifyproduct/modifyproduct.component';
//

import { AllusersOrdersComponent } from './components/allusers-orders/allusers-orders.component';

const routes: Routes = [
  //alaa
  { path: '', redirectTo: '/allProducts', pathMatch: 'full' }, //Y
  { path: 'signup', component: SignUpComponent }, //Y
  { path: 'login', component: LogInComponent }, //Y
  //alaa
  //maher
  { path: 'addproduct', component: AddProductComponent },
  { path: 'about', component: AboutComponent }, //Y
  { path: 'product/:id', component: ProductComponent },
  { path: 'allProducts', component: AllProductsComponent }, //Y
  { path: 'cart', component: CartComponent }, //Y
  { path: 'userorder', component: UserOrdersComponent },
  { path: 'search', component: SearchComponent },
  { path: 'modifyProduct', component: ModifyproductComponent },
  { path: 'DeleteProduct', component: DeleteProductComponent },
  //
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      { path: '', component: ProfileStartComponent },
      { path: 'edit', component: EditProfileComponent },
      { path: 'myOrders', component: UserOrdersComponent },
      { path: 'allOrders', component: AllusersOrdersComponent },
    ],
  },
  { path: 'promotions', component: PromotionsComponent },
  { path: '**', component: ErrorComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  declarations: [],
  imports: [RouterModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
