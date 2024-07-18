import { Component } from '@angular/core';
import { Product,CartItem } from '../models/Product.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
items:Product[]=[];

constructor( private cartService:CartService ){ }

ngOnInit(){
  this.cartService.getCartItems().subscribe((cartItems: Product[]) => {
    this.items = cartItems;
  });
 
}
ondelete(i:number){
  this.items.splice(i,1)
  this.cartService.setCartData(this.items)
}
validateInput(event:any,i:number){
  const quantity=+event.target.value;
  if(quantity<1){
    event.target.value=this.items[i].quantity;
return;
  }
  this.QtyUpdated(quantity,i)

}
private QtyUpdated(quantity:number,i:number){
  this.items[i].quantity=quantity;
  this.cartService.setCartData(this.items)
}

}
