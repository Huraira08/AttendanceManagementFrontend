import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarkAttendancePageComponent } from './mark-attendance-page/mark-attendance-page.component';

const routes: Routes = [
  {path:'', redirectTo:'mark-attendance', pathMatch: 'full'},
  {path: 'mark-attendance', component: MarkAttendancePageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
