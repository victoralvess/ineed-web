import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MustBeLoggedInGuard } from '../shared/guards/must-be-logged-in/must-be-logged-in.guard';
import { MustBeAdminGuard } from './dashboard/guards/must-be-admin/must-be-admin.guard';

import { ChatComponent } from './chat/chat.component';
import { EmployeeDashboardComponent } from './dashboard/employee-dashboard/employee-dashboard.component';
import { ShopkeeperComponent } from './shopkeeper.component';
import { ProductDashboardComponent } from './dashboard/product-dashboard/product-dashboard.component';
import { MainDashboardComponent } from './dashboard/main-dashboard/main-dashboard.component';
import { AddComponent } from './dashboard/product-dashboard/add/add.component';
import { EditComponent } from './dashboard/product-dashboard/edit/edit.component';
import { DeleteComponent } from './dashboard/product-dashboard/delete/delete.component';

const routes: Routes = [
  { path: 'dashboard',
    component: ShopkeeperComponent,
    canActivate: [MustBeLoggedInGuard],
    children : [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: MainDashboardComponent },
      { path: 'admin', 
        canActivate: [MustBeAdminGuard],
        children: [
          { path: '', redirectTo: 'products', pathMatch: 'full' },
          { path: 'products', component: ProductDashboardComponent },
          { path: 'products/add', component: AddComponent },
          { path: 'products/edit/:productId', component: EditComponent },
          { path: 'products/delete/:productId', component: DeleteComponent },
          { path: 'employees', component: EmployeeDashboardComponent }
        ]
      }
    ]
  },
  { path: 'chat', component: ChatComponent, canActivate: [MustBeLoggedInGuard] },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [MustBeLoggedInGuard, MustBeAdminGuard]
})
export class ShopkeeperRoutingModule { }
