import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MustBeLoggedInGuard } from '../shared/guards/must-be-logged-in/must-be-logged-in.guard';

import { ChatComponent } from './chat/chat.component';
import { EmployeeDashboardComponent } from './dashboard/employee-dashboard/employee-dashboard.component';
import { ShopkeeperComponent } from './shopkeeper.component';
import { ProductDashboardComponent } from './dashboard/product-dashboard/product-dashboard.component';
import { MainDashboardComponent } from './dashboard/main-dashboard/main-dashboard.component';

const routes: Routes = [
  { path: 'dashboard',
    component: ShopkeeperComponent,
    canActivate: [MustBeLoggedInGuard],
    children : [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: MainDashboardComponent },
      { path: 'products', component: ProductDashboardComponent },
      { path: 'employees', component: EmployeeDashboardComponent }
    ]
  },
  { path: 'chat', component: ChatComponent, canActivate: [MustBeLoggedInGuard] },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [MustBeLoggedInGuard]
})
export class ShopkeeperRoutingModule { }
