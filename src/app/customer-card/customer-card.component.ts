import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product.model';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';
import { Customer ,CustomerItem} from '../models/Customer.model';
import { CustomerService } from '../customer.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrl: './customer-card.component.css'
})
export class CustomerCardComponent implements OnInit{
customers:Customer[]=[];
selectedCustomer: Customer | null = null;

constructor(private productService:ProductService,private cartService:CartService,private customerService:CustomerService,  private router: Router,  private route: ActivatedRoute,

){

}
ngOnInit():void {
  this.customers=this.customerService.getcustomers();
 
}

editCustomer(customer: Customer): void {
  this.selectedCustomer = { ...customer };
}

saveCustomer(): void {
  if (this.selectedCustomer) {
    this.customerService.updateCustomer(this.selectedCustomer);
    this.selectedCustomer = null;
    this.customers = this.customerService.getcustomers(); // Refresh customer list
  }
}

cancelEdit(): void {
  this.selectedCustomer = null;
}
ondelete(i:number){
  this.customers.splice(i,1)
  this.customerService.setCustomerData(this.customers as CustomerItem[])
}}