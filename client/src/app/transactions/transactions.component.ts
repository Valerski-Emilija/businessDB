import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params  } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Transaction } from '../app.models';
import { CustomersService } from '../customers/customers.service';
import { TransactionApiservice } from './transaction.apiservice';
import { routeAnimationTrigger } from '../app.animations';


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
  animations: [
    routeAnimationTrigger
  ]
})


export class TransactionsComponent implements OnInit {

  @HostBinding('@routeAnimationState') routeAnimation = true;

  transactions: Transaction[];


  constructor(private transactionService: TransactionApiservice) { }


  getTransactions() {
    this.transactionService.getTransactions().subscribe(
      transactions => {
        this.transactions = transactions;
      }
    );
  }

  



  ngOnInit() {
    this.getTransactions();

  }

}
