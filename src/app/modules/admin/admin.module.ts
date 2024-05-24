import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

// pages
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { AttendanceStatCardComponent } from './components/attendance-stat-card/attendance-stat-card.component';

// Custome components
import { LeaveCalendarComponent } from './leave-calendar/leave-calendar.component';
import { LeaveInfoComponent } from './components/leave-info/leave-info.component';

// Ng zorro modules
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzModalModule } from 'ng-zorro-antd/modal';



@NgModule({
  declarations: [
    DashboardPageComponent,
    AttendanceStatCardComponent,
    LeaveCalendarComponent,
    LeaveInfoComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,

    NzMenuModule,
    NzCalendarModule,
    NzBadgeModule,
    NzDescriptionsModule,
    NzModalModule
  ]
})
export class AdminModule { }
