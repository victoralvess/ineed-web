import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesDashboardRoutingModule } from './employees-dashboard-routing.module';
import { AddEmployeesComponent } from './add-employees/add-employees.component';
import { EmployeesDashboardComponent } from './employees-dashboard.component';
import { EditEmployeesComponent } from './edit-employees/edit-employees.component';
import { DeleteEmployeesComponent } from './delete-employees/delete-employees.component';

@NgModule({
  imports: [
    CommonModule,
    EmployeesDashboardRoutingModule
  ],
  declarations: [AddEmployeesComponent, EmployeesDashboardComponent, EditEmployeesComponent, DeleteEmployeesComponent]
})
export class EmployeesDashboardModule { }
