import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoresDashboardRoutingModule } from './stores-dashboard-routing.module';
import { StoresDashboardComponent } from './stores-dashboard.component';
import { AddStoresComponent } from './add-stores/add-stores.component';
import { EditStoresComponent } from './edit-stores/edit-stores.component';
import { DeleteStoresComponent } from './delete-stores/delete-stores.component';

@NgModule({
  imports: [
    CommonModule,
    StoresDashboardRoutingModule
  ],
  declarations: [StoresDashboardComponent, AddStoresComponent, EditStoresComponent, DeleteStoresComponent]
})
export class StoresDashboardModule { }
