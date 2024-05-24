import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkAttendancePageComponent } from './mark-attendance-page.component';

describe('MarkAttendancePageComponent', () => {
  let component: MarkAttendancePageComponent;
  let fixture: ComponentFixture<MarkAttendancePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarkAttendancePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarkAttendancePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
