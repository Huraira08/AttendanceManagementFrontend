import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

// pages
import { MarkAttendancePageComponent } from './mark-attendance-page/mark-attendance-page.component';

// ng zorro
import { NzButtonModule } from 'ng-zorro-antd/button';


@NgModule({
  declarations: [
  
    MarkAttendancePageComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,

    NzButtonModule
  ]
})
export class UserModule { }
