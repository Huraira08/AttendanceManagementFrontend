import { Component } from '@angular/core';
import { isWithinInterval, startOfDay, endOfDay, addDays, differenceInDays } from 'date-fns';
import { LeavePlan } from '../../../models/leave-plan';
import { LeavePlanService } from '../../../services/leave-plan/leave-plan.service';
import { LeaveInfoComponent } from '../components/leave-info/leave-info.component';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-leave-calendar',
  templateUrl: './leave-calendar.component.html',
  styleUrl: './leave-calendar.component.css'
})
export class LeaveCalendarComponent {
  leavePlans: LeavePlan[] = []
  leavePlansMap: Map<number, LeavePlan[]> = new Map();
  colors = [
    'pink',
    'red',
    'yellow',
    'orange',
    'cyan',
    'green',
    'blue',
    'purple',
    'geekblue',
    'magenta',
    'volcano',
    'gold',
    'lime'
  ];

  DateColorsMap: Map<number, string[]> = new Map();

  constructor(private leaveService: LeavePlanService,
    private modal: NzModalService
  ){}
  
  ngOnInit() {
    let colors = [...this.colors];
    this.leavePlans = this.leaveService.getLeavePlan();

    for(let leavePlan of this.leavePlans){
      const color = colors.pop();
      leavePlan.badgeColor = color;
      const key = leavePlan.leaveStartDate.getTime();
      if(!this.leavePlansMap.has(key)){
        this.leavePlansMap.set(key, [])
      }
      this.leavePlansMap.get(key)?.push(leavePlan)
      const numberOfDays = differenceInDays(leavePlan.leaveEndDate, leavePlan.leaveStartDate)
      let currentDate = addDays(leavePlan.leaveStartDate,  1)
      for(let i = 0;i < numberOfDays; i++){
        if(!this.DateColorsMap.has(currentDate.getTime())){
        this.DateColorsMap.set(currentDate.getTime(), [])
      }
        this.DateColorsMap.get(currentDate.getTime())!.push(color!)
        currentDate = addDays(currentDate, 1)
      }
      if(colors.length === 0){
        colors = [...this.colors]
      }
    }
  }

  openLeaveInfoModal(leave: LeavePlan){
    console.log("open leave")
    this.modal.create<LeaveInfoComponent>({
      nzContent: LeaveInfoComponent,
      nzData: {
        leave: leave
      },
      nzFooter: null,
    });
  }

  isLeaveStartDate(date: Date){
    return this.leavePlansMap.has(startOfDay(date).getTime());
  }
  getLeaveObjList(date: Date){
    if(this.leavePlansMap.has(startOfDay(date).getTime())){
      const plans = this.leavePlansMap.get(date.getTime())!
      return plans;
    }
    return [];
  }

  getColorsFromDate(date: Date){
    return this.DateColorsMap.get(date.getTime())
  }

  isWithinRange(date: Date, startDate: Date, endDate: Date): boolean {
    console.log(date)
    console.log(startDate)
    return isWithinInterval(date, { start: startOfDay(startDate), end: endOfDay(endDate) });
  }
}
