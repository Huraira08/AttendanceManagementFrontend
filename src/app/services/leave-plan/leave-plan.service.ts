import { Injectable } from '@angular/core';
import { LeavePlan } from '../../models/leave-plan';

@Injectable({
  providedIn: 'root'
})
export class LeavePlanService {
  private leavePlan: LeavePlan[] = [
    {
      employeeName: 'Aslam',
      leaveStartDate: new Date(2024, 4, 1),
      leaveEndDate: new Date(2024, 4, 10),
      leaveReason: 'Sick'
    },
    {
      employeeName: 'Babar',
      leaveStartDate: new Date(2024, 4, 1),
      leaveEndDate: new Date(2024, 4, 5),
      leaveReason: 'Sick'
    },
    {
      employeeName: 'Jameel',
      leaveStartDate: new Date(2024, 4, 1),
      leaveEndDate: new Date(2024, 4, 8),
      leaveReason: 'Sick'
    },
    {
      employeeName: 'Azeem',
      leaveStartDate: new Date(2024, 4, 11),
      leaveEndDate: new Date(2024, 4, 11),
      leaveReason: 'Urgent work'
    },
    {
      employeeName: 'Rizwan',
      leaveStartDate: new Date(2024, 4, 13),
      leaveEndDate: new Date(2024, 4, 16),
    },
    {
      employeeName: 'Iftikhar',
      leaveStartDate: new Date(2024, 5, 3),
      leaveEndDate: new Date(2024, 5, 6),
    },
  ]


  getLeavePlan() {
    return this.leavePlan
  }
}
