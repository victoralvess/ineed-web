import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { EmployeesDashboardRoutingModule } from './employees-dashboard-routing.module';
import { AddEmployeesComponent } from './add-employees/add-employees.component';
import { EmployeesDashboardComponent } from './employees-dashboard.component';
import { EditEmployeesComponent } from './edit-employees/edit-employees.component';

import { EmployeesService } from './services/employees.service';
import { ImageUploadModule } from 'angular2-image-upload';
import { CovalentDialogsModule } from '@covalent/core';
import { NoConflictStyleCompatibilityMode, CompatibilityModule } from '@angular/material';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatStepperModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CrudService } from '../../../shared/services/crud-service/crud.service';
import { Auth0Service } from '../../../shared/services/auth0-service/auth0.service';

@NgModule({
  imports: [
    FlexLayoutModule,
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    EmployeesDashboardRoutingModule,
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
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatStepperModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    EmployeesDashboardRoutingModule
  ],
  declarations: [EmployeesDashboardComponent, AddEmployeesComponent, EditEmployeesComponent],
  exports: [EmployeesDashboardComponent, AddEmployeesComponent, EditEmployeesComponent],
  providers: [EmployeesService, CrudService, Auth0Service]
})
export class EmployeesDashboardModule {
}
