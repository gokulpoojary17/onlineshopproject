import { Component ,OnInit} from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/Product.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
products:Product[]=[];

constructor(private productService:ProductService,private cartService:CartService){
}
ngOnInit():void {
  this.products=this.productService.getproducts();

}
addtocart(product:Product){
this.cartService.additem(product)
}

}
