import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products-card/products.component';
import { SingleproductComponent } from './Products/singleproduct.component';
import { CartComponent } from './cart/cart.component';
import { CustomersComponent } from './customers/customers.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:"products",component:ProductsComponent},
  {path:"product",component:SingleproductComponent},
  {path:"cart",component:CartComponent},
  {path:"customer",component:CustomersComponent},
  {path:"home",component:HomeComponent},
  {path:"",redirectTo:"home",pathMatch:"full"},
  { path: '**', component: PagenotfoundComponent } //if given wrong url


// { path: '**', component: PagenotfoundComponent } //if given wrong url
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
