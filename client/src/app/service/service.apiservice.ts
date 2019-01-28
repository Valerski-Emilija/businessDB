import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable, Subject } from 'rxjs';
import { Service } from '../app.models';


@Injectable()
export class ServiceApiservice {

apiUrl = 'http://localhost/myservices2/server';
service: Service;
services: Service[] = [];
id: number;
result:any;


constructor(private http: Http) { }

getServices()  {
return this.http.get(this.apiUrl + "/services.php?action=getAll")
    .map(result => this.result = result.json());
  }

addService(service: Service)  {
  const body = JSON.stringify(service);
  const headers = new Headers({'Content-Type': 'application/json'});
  return this.http.post(this.apiUrl + "/services.php?action=create", body, {headers: headers});
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

editService(service: Service)  {

  const body = JSON.stringify(service);
  const headers = new Headers({'Content-Type': 'application/json'});
  // this.servicesListChanged.next(this.services.slice());
  return this.http.put(this.apiUrl + "/services.php?action=edit&id=" + service.ID, body, {headers: headers})
;
// this.servicesListChanged.next(this.services.slice());  //unreachable code
}


//------------code works if calling function from the service component-------------
deleteService(service) {
  return this.http.delete(this.apiUrl + "/services.php?action=delete&id=" + service.ID );
        // .map((res: Response) => res.json());


  }

//----------Code works if calling function from the servicesList component-------------

DeleteService(service) {
const headers = new Headers({ 'Content-Type': 'application/json' });
let options = new RequestOptions({ headers: headers });
return this.http.delete(this.apiUrl + "/services.php?action=delete&id=" + service);
 // .map((res: Response) => res.json());
 //      }

 }
}
