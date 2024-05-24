import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { LeaveCalendarComponent } from './leave-calendar/leave-calendar.component';

const routes: Routes = [
  {path:'', redirectTo: 'dashboard', pathMatch:'full'},
  {path: 'dashboard', component: DashboardPageComponent},
  {path: 'leave-calendar', component: LeaveCalendarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
