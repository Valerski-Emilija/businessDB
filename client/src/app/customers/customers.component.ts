import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params  } from '@angular/router';
import { CustomersService } from './customers.service';
import { Customer } from '../app.models';
import { routeAnimationTrigger } from '../app.animations';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  animations: [
    routeAnimationTrigger
  ]
})
export class CustomersComponent implements OnInit {

  @HostBinding('@routeAnimationState') routeAnimation = true;

  customers: Customer[] = [];
  customer: Customer;
  ID: number;
  added: boolean;
  updated: boolean;

  constructor(private customersService: CustomersService, private router: Router,
  private route: ActivatedRoute) { }


  ngOnInit() {
    this.customersService.getCustomers().subscribe(
     customers => {
     this.customers = customers;
   }
  );
    this.route.queryParams.subscribe(params => {
    this.added = params['added'];
    this.updated = params['updated'];
  });

  }
  Delete(customer) {
      if(confirm("Are you sure?")) {
       let index = this.customers.map(function(customer) {
         return customer["ID"];
         }).indexOf(customer);
         this.customers.splice(index, 1);
         this.customersService.DeleteCustomer(customer)
         .subscribe();
         close();
     }
    }
  close(){
    this.added = false;
    this.updated = false;
  }
}
