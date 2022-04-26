import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JbCalendarComponent } from './jb-calendar.component';

describe('JbCalendarComponent', () => {
  let component: JbCalendarComponent;
  let fixture: ComponentFixture<JbCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JbCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JbCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
