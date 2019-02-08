import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routeAnimationTrigger } from './app.animations';

import { AppComponent } from './app.component';

import { CustomersService } from './customers/customers.service';
import { ServiceApiservice } from './service/service.apiservice';
import { TransactionApiservice } from './transactions/transaction.apiservice';
import { routes } from './app.routes';
import { HeaderComponent } from './header/header.component';
import { CustomersFormComponent } from './form/customersForm.component';
import { TransactionsFormComponent } from './form/transactionsForm.component';
import { CustomersComponent } from './customers/customers.component';
// import { CustomerComponent } from './customer/customer.component';
import { StartpageComponent } from './startpage/startpage.component';
import { ServiceComponent } from './service/service.component';
import { ServiceFormComponent } from './form/serviceForm.component';
import { ServicesListComponent } from './service/servicesList.component';
import { FooterComponent } from './footer/footer.component';
import { TransactionsComponent } from './transactions/transactions.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomersFormComponent,
    // CustomerComponent,
    CustomersComponent,
    StartpageComponent,
    ServiceComponent,
    ServiceFormComponent,
    ServicesListComponent,
    FooterComponent,
    TransactionsComponent,
    TransactionsFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routes,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

  ],
  providers: [
              ServiceApiservice,
              CustomersService,
              TransactionApiservice
             ],
  bootstrap: [AppComponent]
})
export class AppModule { }
