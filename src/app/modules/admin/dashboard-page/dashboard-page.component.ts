import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent implements AfterViewInit {
  @ViewChild('attendanceChart') attentanceChart!: ElementRef

  ngAfterViewInit(): void {
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
    const data1 = {
      labels: labels,
      datasets: [
        {
          label: 'Attendance rate',
          data: [65, 59, 80, 81, 56],
          backgroundColor: 'green',
          borderColor: 'green',
        },
        {
          label: 'absent rate',
          data: [44, 39, 40, 30, 32],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
        },

      ] // dataset array
    }; // data object

    const ctxLine = this.attentanceChart.nativeElement.getContext("2d");

    new Chart(ctxLine, {
      type: 'line',
      data: data1,
      options:{
        responsive: true,
        plugins:{
          title: {
            display: true,
            text: 'Present vs Absent rate',
            font:{
              size:20
            }
          }
        }
      }
    })
  }
}
