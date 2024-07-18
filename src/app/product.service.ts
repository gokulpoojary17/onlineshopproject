import { Injectable } from '@angular/core';
import { Product } from './models/Product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:Product[]=[
    {id:1,name:'Camera',quantity:21,price:33333,image:"assets/hp-featured-product-nikkor-z-600mm-f-6-3-VR-S.webp"},
    {id:2,name:'Sart watch',quantity:2,price:4592,image:"assets/hoco-y5-pro-smart-sports-watch-call-version.jpg"},
    {id:3,name:'Ear pods',quantity:24,price:499,image:"assets/MME73.png"},
    {id:4,name:'Suit case',quantity:21,price:999,image:"assets/Ngage_4W_Grey_L_PDP-01_1200x.webp"},

    {id:5,name:'3D Glass',quantity:11,price:399,image:"assets/images.jpeg"},
    {id:6,name:'Mobile Phone',quantity:23,price:17899,image:"assets/dm-poco-m6-pro-5g-forest-green-128-gb-6-gb-ram-872880_m.jpg"},
    {id:7,name:'Mobile Stand',quantity:21,price:299,image:"assets/xowhs_512.jpg"},
    {id:8,name:'Blutooth Speaker',quantity:1,price:899,image:"assets/artis-bt-918-1.jpg"},
    {id:9,name:'3D Printers',quantity:11,price:29999,image:"/assets/printer.png"},
    {id:10,name:'Laptop',quantity:9,price:67999,image:"/assets/images (18).jpeg"},

   


  ];

  getproducts(){
    return this.products;
  }
  getProduct(id:number){
    return this.products.find(product=> product.id === id);
  }
  getProducts(): Product[] {
    return this.products;
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }

  updateProduct(product: Product): void {
    const index = this.products.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this.products[index] = product;
    }
  }

  constructor(private http: HttpClient) {}

  getsearchProduct(): Observable<any[]> {
    // Implement API call to fetch products here
    // For demonstration, returning hardcoded data
    return this.http.get<any[]>('https://api.example.com/products');
  }
  

}
