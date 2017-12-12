import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductsDashboardRoutingModule } from './products-dashboard-routing.module';
import { ProductsDashboardComponent } from './products-dashboard.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { EditProductsComponent } from './edit-products/edit-products.component';
import { ImageUploadModule } from 'angular2-image-upload';
import { CrudService } from '../../../shared/services/crud-service/crud.service';
import { CovalentDialogsModule } from '@covalent/core';
import { NoConflictStyleCompatibilityMode, CompatibilityModule } from '@angular/material';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatTableModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductsService } from './services/products.service';

@NgModule({
  imports: [
    FlexLayoutModule,
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    ProductsDashboardRoutingModule,
    ImageUploadModule.forRoot(),
    CovalentDialogsModule,
    NoConflictStyleCompatibilityMode,
    CompatibilityModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  declarations: [ProductsDashboardComponent, AddProductsComponent, EditProductsComponent],
  exports: [ProductsDashboardComponent, AddProductsComponent, EditProductsComponent],
  providers: [ProductsService, CrudService]
})
export class ProductsDashboardModule { }
