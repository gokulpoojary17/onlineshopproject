import { Injectable } from '@angular/core';
import { Customer, CustomerItem } from './models/Customer.model'; // Adjust the path as needed
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers:Customer[]=[
    {id:1,cust_name:'Lexa',email:'poojar@gmail.com',phone:9980786252,image:'assets/userss/download (10).png'},
    {id:2,cust_name:'Raj',email:'raju@gmail.com',phone:9980786232,image:'assets/userss/images (15).jpeg'},
    {id:3,cust_name:'Gopi',email:'gopal@gmail.com',phone:8880786252,image:'assets/userss/images (15).jpeg'},

    {id:4,cust_name:'Baalu',email:'balendra@gmail.com',phone:7780786252,image:'assets/userss/images (16).jpeg'},

    {id:5,cust_name:'Rajesh',email:'raj@gmail.com',phone:9780786252,image:'/assets/userss/images (17).jpeg'},



   


  ];

  getcustomers(){
    return this.customers;
  }
  updateCustomer(updatedCustomer: Customer): void {
    const index = this.customers.findIndex(c => c.id === updatedCustomer.id);
    if (index !== -1) {
      this.customers[index] = updatedCustomer;
    }
  }




  private customerItemsSubject = new BehaviorSubject<CustomerItem[]>([]);
  public customerItems$ = this.customerItemsSubject.asObservable();

  constructor(private http: HttpClient) {
    const storedCustomers = localStorage.getItem('customers');
    if (storedCustomers) {
      this.customerItemsSubject.next(JSON.parse(storedCustomers));
    }
  }

  addItem(customer: CustomerItem): void {
    const customerItems = this.customerItemsSubject.getValue();
    const exist = customerItems.find((item: CustomerItem) => item.id === customer.id);

    if (exist) {
      exist.quantity += 1;
    } else {
      customerItems.push({ ...customer, quantity: 1 });
    }

    this.setCustomerData(customerItems);
  }
  addcustomer(customer: Customer): void {
    this.customers.push(customer);
  }

  // public setCustomerData(data: CustomerItem[]): void {
  //   localStorage.setItem('customers', JSON.stringify(data));
  //   this.customerItemsSubject.next(data);
  // }
  public setCustomerData(data: CustomerItem[]): void {
    localStorage.setItem('cart', JSON.stringify(data));
    this.customerItemsSubject.next(data);
    localStorage.setItem('cart', JSON.stringify(data));
    this.customerItemsSubject.next(data);
  }
  private getCustomerData(): CustomerItem[] {
    const storedCustomers = localStorage.getItem('customers');
    return storedCustomers ? JSON.parse(storedCustomers) : [];
  }
  private apiUrl = 'http://your-api-url/users'; // Replace with your API URL


  updateUser(id: number, user: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${this.apiUrl}/${id}`, user);
  }

  getUser(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.apiUrl}/${id}`);
  }


}