import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceStatCardComponent } from './attendance-stat-card.component';

describe('AttendanceStatCardComponent', () => {
  let component: AttendanceStatCardComponent;
  let fixture: ComponentFixture<AttendanceStatCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AttendanceStatCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AttendanceStatCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
