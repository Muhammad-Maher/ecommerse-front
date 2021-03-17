import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router


import { ErrorComponent } from './components/error/error.component';
import { PromotionsComponent } from './components/promotions/promotions.component';

const routes: Routes = [
    { path: 'promotions', component: PromotionsComponent },
    { path: '**', component: ErrorComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [    
      RouterModule.forRoot(routes)],
      exports: [RouterModule]
})
export class AppRoutingModule { }