import { Component } from '@angular/core';
import { Customer } from '../models/Customer.model';
import { Product } from '../models/Product.model';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = [
   


  ];

constructor(private productService:ProductService,private cartService:CartService){
}
ngOnInit():void {
  this.products=this.productService.getproducts();

}
addtocart(product:Product){
this.cartService.additem(product)
}
ondelete(i:number){
  this.products.splice(i,1)
  this.cartService.setCartData(this.products)
}
validateInput(event:any,i:number){
  const quantity=+event.target.value;
  if(quantity<1){
    event.target.value=this.products[i].quantity;
return;
  }
  this.QtyUpdated(quantity,i)

}
private QtyUpdated(quantity:number,i:number){
  this.products[i].quantity=quantity;
  this.cartService.setCartData(this.products)
}
}
