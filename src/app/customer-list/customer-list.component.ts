import { Component } from '@angular/core';
import { Product } from '../models/Product.model';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { Customer, CustomerItem } from '../models/Customer.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent {
  customers: Customer[] = [
    
    
  ];
  selectedCustomer: Customer | null = null;

constructor(private customerService:CustomerService,private cartService:CartService){
}
ngOnInit():void {
  this.customers=this.customerService.getcustomers();

}
addtocart(product:Product){
this.cartService.additem(product)
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
}
}
