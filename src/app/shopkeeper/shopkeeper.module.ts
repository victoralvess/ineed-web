import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { ShopkeeperRoutingModule } from './shopkeeper-routing.module';
import { ChatComponent } from './chat/chat.component';
import { EmployeeDashboardComponent } from './dashboard/employee-dashboard/employee-dashboard.component';
import { ShopkeeperComponent } from './shopkeeper.component';
import { ProductDashboardComponent } from './dashboard/product-dashboard/product-dashboard.component';
import { MainDashboardComponent } from './dashboard/main-dashboard/main-dashboard.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  imports: [
    CommonModule,
    ShopkeeperRoutingModule,
    BsDropdownModule.forRoot(),
    HttpModule,
    FormsModule,
  ],
  declarations: [
      ChatComponent,
      MainDashboardComponent,
      ProductDashboardComponent,
      ShopkeeperComponent,
      EmployeeDashboardComponent],
  exports: [ChatComponent],
  providers: []
})
export class ShopkeeperModule { }
