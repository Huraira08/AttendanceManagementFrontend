import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

// pages
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';

// Ng zorro modules
import { NzMenuModule } from 'ng-zorro-antd/menu';


@NgModule({
  declarations: [
    DashboardPageComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,

    NzMenuModule
  ]
})
export class AdminModule { }
