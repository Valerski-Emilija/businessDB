import { Routes, RouterModule } from "@angular/router";

import { CustomersFormComponent } from './form/customersForm.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { CustomersComponent } from './customers/customers.component';
import { StartpageComponent } from './startpage/startpage.component';
import { ServiceFormComponent } from './form/serviceForm.component';
import { ServicesListComponent } from './service/servicesList.component';
import { TransactionsFormComponent } from './form/transactionsForm.component';


const APP_ROUTES: Routes=[
  { path: '', component: StartpageComponent},
  { path: 'customers', component: CustomersComponent},
  { path: 'customersForm', component: CustomersFormComponent },
  { path: 'customers/edit/:id', component: CustomersFormComponent },
  // { path: 'customers/:id', component: CustomerComponent},
  // { path: 'customers/:id/edit', component: FormComponent }
  { path: 'edit/:id', component: CustomersFormComponent },
  { path: 'serviceForm', component: ServiceFormComponent},
  { path: 'services', component: ServicesListComponent },
  { path: 'services/edit/:id', component: ServiceFormComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'transactionForm', component: TransactionsFormComponent }


]

export const routes = RouterModule.forRoot(APP_ROUTES);
