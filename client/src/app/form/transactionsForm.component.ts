import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params  } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Customer, Service, Transaction } from '../app.models';
import { CustomersService } from '../customers/customers.service';
import { ServiceApiservice } from '../service/service.apiservice';
import { TransactionApiservice } from '../transactions/transaction.apiservice';
import { routeAnimationTrigger } from '../app.animations';


@Component({
  selector: 'app-transactionsForm',
  templateUrl: './transactionsForm.component.html',
  styles: [`:host {
    display: block;
  }`],
  animations: [
    routeAnimationTrigger
  ]
})


export class TransactionsFormComponent implements OnInit {

  @HostBinding('@routeAnimationState') routeAnimation = true;

  customers: Customer[];
  services: Service[];
  transactions: Transaction[];
  transaction: Transaction;
  added = false;
  updated = false;
  ID: number;
  editMode = false;
  title: string = 'placeholder';

  constructor(private customersService: CustomersService,
              private servapiserv: ServiceApiservice,
              private transactionService: TransactionApiservice,
              private router: Router, private route: ActivatedRoute) { }


  listServices() {
    this.servapiserv.getServices().subscribe(
      services => {
        this.services = services;
      }
    );
  }

  listCustomers() {
    this.customersService.getCustomers().subscribe(
      customers => {
        this.customers = customers;
       }
     );
   }
 getTransaction() {
   this.route.params
      .subscribe((params: Params) => {
        this.ID = +params['id'];
        this.editMode = params['id'] != null;
         this.servapiserv.getService(params['id'])
         .subscribe(transaction => {
           this.transaction = transaction
        })
      })
      if(this.editMode) {
        this.title = "Edit Transaction";
      }
      else {
        this.title = "Add new Transaction";
      }
 }


  ngOnInit() {
    this.listServices();
    this.listCustomers();
    this.getTransaction();
  }

}
