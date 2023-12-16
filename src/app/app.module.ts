import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerTableComponent } from './component/customer/customer-table/customer-table.component';
import { CustomerComponent } from './page/customer/customer/customer.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerTableComponent,
    CustomerComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
