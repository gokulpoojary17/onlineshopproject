import { Component } from '@angular/core';
import { Product } from '../models/Product.model';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrl: './singleproduct.component.css'
})
export class SingleproductComponent  {
  products: Product[] = [
  
  ];
  showAddProductForm = false;
  newProduct: Product = { id: 0, name: '', quantity: 0, price: 0 ,image:''};

  constructor(private productService: ProductService, private cartService: CartService) { }
  


  
  ngOnInit() {
    this.products = this.productService.getProducts();
  }

 
 
  onAddProduct() {
    if (this.newProduct.name && this.newProduct.quantity > 0 && this.newProduct.price > 0) {
      this.newProduct.id = this.generateProductId();
      this.productService.addProduct(this.newProduct);
      this.products = this.productService.getProducts();
      this.resetNewProductForm();
      this.showAddProductForm = false;
      // this.cart=this.cartService.getCart();

    }
  }

  private generateProductId(): number {
    return this.products.length ? Math.max(...this.products.map(p => p.id)) + 1 : 1;
  }

  private resetNewProductForm() {
    this.newProduct = { id: 0, name: '', quantity: 0, price: 0 ,image:''};
  }
  addtocart(product:Product){
    this.cartService.additem(product)
    }
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

