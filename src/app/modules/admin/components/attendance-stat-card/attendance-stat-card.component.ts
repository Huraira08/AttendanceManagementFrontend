import { Component, Input } from '@angular/core';

@Component({
  selector: 'admin-attendance-stat-card',
  templateUrl: './attendance-stat-card.component.html',
  styleUrl: './attendance-stat-card.component.css'
})
export class AttendanceStatCardComponent {
  @Input() title!: string;
  @Input() period!: string;
  @Input() number!: number;
  @Input() percentage!: number;
  @Input() changeStatus!: string;
}
