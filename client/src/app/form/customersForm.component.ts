import { Component, OnInit, HostBinding } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute, Params } from '@angular/router';
// import { ApiService } from '../api.service';
import { CustomersService } from '../customers/customers.service'
import { Customer } from '../app.models';
import { routeAnimationTrigger } from '../app.animations';

@Component({
  selector: 'app-customersForm',
  templateUrl: './customersForm.component.html',
  styleUrls: ['./customersForm.component.css'],
  animations: [
    routeAnimationTrigger
  ]
})
export class CustomersFormComponent implements OnInit {

    @HostBinding('@routeAnimationState') routeAnimation = true;

    customers: Customer[];
    customer: Customer;
    added = false;
    updated = false;
    ID: number;
    editMode = false;
    title: string;

  constructor(private customersService: CustomersService,
    private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
      this.route.params
         .subscribe((params: Params) => {
           this.ID = +params['id'];
           this.editMode = params['id'] != null;
           this.customersService.getCustomer(params['id'])
            .subscribe(customer => {
              this.customer = customer
           })
         })
         if(this.editMode) {
           this.title = "Edit Customer";
         }
         else {
           this.title = "Add new Customer";
         }

    }

  sendForm(form: NgForm ) {

  if (this.customer) {
        // Edit
        this.customer.NAME = form.value.NAME;
        this.customer.EMAIL = form.value.EMAIL;
        this.customer.ADDRESS = form.value.ADDRESS;
        this.customer.TELEPHONE = form.value.TELEPHONE;
        this.customersService.editCustomer(this.customer)
        .subscribe(customer => {
          this.updated = true;
          this.router.navigate(['/customers'], {queryParams: {updated:this.updated}});
        });
     }
  else {
   const customer = new Customer(this.ID, form.value.NAME, form.value.EMAIL, form.value.ADDRESS, form.value.TELEPHONE);
   this.customersService.addCustomer(customer)
   .subscribe(customer => {
    this.added = true;
    this.router.navigate(['/customers'], {queryParams: {added:this.added}});
  });

  }
}



}
