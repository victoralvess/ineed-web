import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { ShopkeeperRoutingModule } from './shopkeeper-routing.module';
import { ChatComponent } from './chat/chat.component';
import { EmployeeDashboardComponent } from './dashboard/employee-dashboard/employee-dashboard.component';
import { ShopkeeperComponent } from './shopkeeper.component';
import { ProductDashboardComponent } from './dashboard/product-dashboard/product-dashboard.component';
import { MainDashboardComponent } from './dashboard/main-dashboard/main-dashboard.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AddComponent } from './dashboard/product-dashboard/add/add.component';
import { EditComponent } from './dashboard/product-dashboard/edit/edit.component';
import { DeleteComponent } from './dashboard/product-dashboard/delete/delete.component';
import { ProductsService } from './dashboard/product-dashboard/services/products.service';
import { SearchPipe } from './dashboard/product-dashboard/pipes/search.pipe';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    ShopkeeperRoutingModule,
    BsDropdownModule.forRoot(),
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  declarations: [
    ChatComponent,
    MainDashboardComponent,
    ProductDashboardComponent,
    ShopkeeperComponent,
    EmployeeDashboardComponent,
    AddComponent,
    EditComponent,
    DeleteComponent,
    SearchPipe
  ],
  exports: [ChatComponent],
  providers: [ProductsService]
})
export class ShopkeeperModule { }
