import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router


import { ErrorComponent } from './components/error/error.component';
import { PromotionsComponent } from './components/promotions/promotions.component';



//alaa


import { AppComponent } from './app.component'
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component'
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component'


const routes: Routes = [
    {path:'', component:HomeComponent},
  {path:'signup',component:SignUpComponent},
  {path:'login',component:LogInComponent},
  {path:'about',component:AboutComponent},
  {path:'profile',component:ProfileComponent},
  {path:'product/:id/:pid',component:ProductComponent},
  {path:'cart',component:CartComponent},
    { path: 'promotions', component: PromotionsComponent },
    { path: '**', component: ErrorComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({ 
    declarations: [],   
  imports: [
    RouterModule,    
      RouterModule.forRoot(routes)],
      exports: [RouterModule]
})
export class AppRoutingModule { }