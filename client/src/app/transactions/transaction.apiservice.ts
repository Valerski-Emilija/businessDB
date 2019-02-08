import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable, Subject } from 'rxjs';
import { Transaction } from '../app.models';


@Injectable()
export class TransactionApiservice {

apiUrl = 'http://localhost/businessDB/server';
transaction: Transaction;
transactions: Transaction[] = [];
id: number;
result:any;


constructor(private http: Http) { }

getTransactions()  {
return this.http.get(this.apiUrl + "/transactions.php?action=getAll")
    .map(result => this.result = result.json());
  }

addTransaction(transaction: Transaction)  {
  const body = JSON.stringify(transaction);
  const headers = new Headers({'Content-Type': 'application/json'});
  return this.http.post(this.apiUrl + "/transaction.php?action=create", body, {headers: headers});
   // .map((response: Response) => {
   //   const result = response.json();
   //   const service = new Service(result.ID,result.TYPE, result.DESCRIPTION, result.PRICE);
   //   this.services.push(service);
   //  })
 }

getService(id: number){
  return this.http.get(this.apiUrl + "/services.php?action=getOne&id=" + id)
  .map((res: Response) => {
    const service = res.json();
    return service;
  })
}

editTransaction(transaction: Transaction)  {

  const body = JSON.stringify(transaction);
  const headers = new Headers({'Content-Type': 'application/json'});
  // this.servicesListChanged.next(this.services.slice());
  return this.http.put(this.apiUrl + "/transactions.php?action=edit&id=" + transaction.ID, body, {headers: headers})
;
// this.servicesListChanged.next(this.services.slice());  //unreachable code
}


//------------code works if calling function from the service component-------------
deleteTransaction(transaction) {
  return this.http.delete(this.apiUrl + "/transactions.php?action=delete&id=" + transaction.ID );
        // .map((res: Response) => res.json());


  }

//----------Code works if calling function from the servicesList component-------------

DeleteTransaction(transaction) {
const headers = new Headers({ 'Content-Type': 'application/json' });
let options = new RequestOptions({ headers: headers });
return this.http.delete(this.apiUrl + "/transactions.php?action=delete&id=" + transaction);
 // .map((res: Response) => res.json());
 //      }

 }
}
