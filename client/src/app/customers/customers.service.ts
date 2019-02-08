import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';
import { Customer } from '../app.models';


@Injectable()
export class CustomersService {

apiUrl = 'http://localhost/businessDB/server';
customer : Customer;
customers : Customer[] = [];
id: number;
result:any;

  constructor(private http: Http) { }


  getCustomers() {
    return this.http.get(this.apiUrl + "/customers.php?action=getAll")
      .map(result => this.result = result.json());

  }

  addCustomer(customer: Customer) {
    const body = JSON.stringify(customer);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(this.apiUrl + "/customers.php?action=create", body, {headers: headers});

  }

  getCustomer(id: number){
    return this.http.get(this.apiUrl + "/customers.php?action=getOne&id=" + id)
    .map((res: Response) => {
      const customer = res.json();
      return customer;
    })
  }

  editCustomer(customer: Customer) {
    const body = JSON.stringify(customer);
    const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.put(this.apiUrl + "/customers?action=edit&id=" + customer.ID, body, {headers: headers});
    return this.http.put(this.apiUrl + "/edit.php?id=" + customer.ID, body, {headers: headers});

  }


//------------code works if calling function from the customer component-------------
  deleteCustomer(customer) {
    return this.http.delete(this.apiUrl + "/customers.php?action=delete&id=" + customer.ID );



    }

//----------Code works if calling function from the data component-------------

  DeleteCustomer(customer) {
  const headers = new Headers({ 'Content-Type': 'application/json' });
	let options = new RequestOptions({ headers: headers });
  return this.http.delete(this.apiUrl + "/customers.php?action=delete&id=" + customer);

        }

}
