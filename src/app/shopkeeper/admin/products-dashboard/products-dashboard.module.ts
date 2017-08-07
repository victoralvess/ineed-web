import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductsDashboardRoutingModule } from './products-dashboard-routing.module';
import { ProductsDashboardComponent } from './products-dashboard.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { EditProductsComponent } from './edit-products/edit-products.component';
import { DeleteProductsComponent } from './delete-products/delete-products.component';
import { SearchPipe } from '../../../shared/pipes/search.pipe';
import { ProductsService } from './services/products.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgxPaginationModule } from 'ngx-pagination'; 
import { MultiSelectModule, GrowlModule } from 'primeng/primeng';
import { ImageUploadModule } from 'angular2-image-upload';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
		NgxPaginationModule,
    ProductsDashboardRoutingModule,
    MultiSelectModule,
    GrowlModule,
    ImageUploadModule.forRoot()
  ],
  declarations: [SearchPipe, ProductsDashboardComponent, AddProductsComponent, EditProductsComponent, DeleteProductsComponent],
  exports: [SearchPipe, ProductsDashboardComponent, AddProductsComponent, EditProductsComponent, DeleteProductsComponent],
  providers: [ProductsService] 
})
export class ProductsDashboardModule { }
