import { Routes, RouterModule } from "@angular/router";

import { CustomersFormComponent } from './form/customersForm.component';
// import { DataComponent } from './data/data.component';
// import { CustomerComponent } from './customer/customer.component';
import { CustomersComponent } from './customers/customers.component';
import { StartpageComponent } from './startpage/startpage.component';
import { ServiceFormComponent } from './form/serviceForm.component';
import { ServicesListComponent } from './service/servicesList.component';


const APP_ROUTES: Routes=[
  { path: '', component: StartpageComponent},
  // { path: 'customers', component: DataComponent},
  { path: 'customers', component: CustomersComponent},
  { path: 'customersForm', component: CustomersFormComponent },
  { path: 'customers/edit/:id', component: CustomersFormComponent },
  // { path: 'customers/:id', component: CustomerComponent},
  // { path: 'customers/:id/edit', component: FormComponent }
  { path: 'edit/:id', component: CustomersFormComponent },
  { path: 'serviceForm', component: ServiceFormComponent},
  { path: 'services', component: ServicesListComponent },
  { path: 'services/edit/:id', component: ServiceFormComponent }


]

export const routes = RouterModule.forRoot(APP_ROUTES);
