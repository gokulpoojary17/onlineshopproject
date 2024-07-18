export interface Customer {
    id: number;
    cust_name: string;
    email: string;
    phone: number;
    image:string;

    
}

export interface CustomerItem extends Customer {
        id: number;
        name: string;
        quantity: number;
        email:string;
        phone:number;
        // add other necessary properties here
      }
      
