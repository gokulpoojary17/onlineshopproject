import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Customer ,CustomerItem} from '../models/Customer.model';
import { CustomerService } from '../customer.service';
import { Product } from '../models/Product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {
  customers: Customer[] = [
  
  ];
  showAddProductForm = false;
  newProduct: Customer = { id: 0, cust_name: '', email: '', phone: 0,image:'' };
  


  constructor(private customerService: CustomerService, private cartService: CartService) { }
  


  
  ngOnInit() {
    this.customers = this.customerService.getcustomers();
  }

 
 
  onAddProduct() {
    if (this.newProduct.cust_name  && this.newProduct.email&&this.newProduct.phone > 0) {
      this.newProduct.id = this.generateProductId();
      this.customerService.addcustomer(this.newProduct);
      this.customers = this.customerService.getcustomers();
      this.resetNewProductForm();
      this.showAddProductForm = false;
      // this.cart=this.cartService.getCart();

    }
  }

  private generateProductId(): number {
    return this.customers.length ? Math.max(...this.customers.map(p => p.id)) + 1 : 1;
  }

  private resetNewProductForm() {
    this.newProduct = { id: 0, cust_name: '', email: '', phone: 0 ,image:''};
  }
  addtocart(product:Product){
    this.cartService.additem(product)
    }
    selectedImage: string | ArrayBuffer | null = null;

// onFileSelected(event: Event): void {
//   const file = (event.target as HTMLInputElement).files?.[0];
//   if (file) {
//     const reader = new FileReader();
//     reader.onload = e => this.selectedImage = reader.result;
//     reader.readAsDataURL(file);
//   }
// }
 onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.newProduct.image = reader.result as string;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

}




