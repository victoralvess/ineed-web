import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoresDashboardRoutingModule } from './stores-dashboard-routing.module';
import { StoresDashboardComponent } from './stores-dashboard.component';
import { AddStoresComponent } from './add-stores/add-stores.component';
import { EditStoresComponent } from './edit-stores/edit-stores.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { HttpModule } from '@angular/http';
import { Md2Module, NoConflictStyleCompatibilityMode } from 'md2';
import { CovalentDialogsModule, CovalentDataTableModule } from '@covalent/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ImageUploadModule } from 'angular2-image-upload';
import { ProductsService } from '../products-dashboard/services/products.service';
import { CrudService } from '../../../shared/services/crud-service/crud.service';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';

import { StoresService } from './services/stores.service';
import { LocationService } from './services/location/location.service';
import { TimePickerDialogComponent } from './time-picker-dialog/time-picker-dialog.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  imports: [
    CommonModule,
    StoresDashboardRoutingModule,
    ImageUploadModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    HttpModule,
    Md2Module,
    NoConflictStyleCompatibilityMode,
    CovalentDialogsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatTableModule,
    MatToolbarModule,
    FlexLayoutModule,
    CovalentDataTableModule,
    ColorPickerModule
  ],
  declarations: [StoresDashboardComponent, AddStoresComponent, EditStoresComponent, TimePickerDialogComponent, FeedbacksComponent],
  providers: [StoresService, LocationService, ProductsService, CrudService],
  exports: [TimePickerDialogComponent],
  entryComponents: [TimePickerDialogComponent]
})
export class StoresDashboardModule {
}
