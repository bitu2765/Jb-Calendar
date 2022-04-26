import { TestBed } from '@angular/core/testing';

import { JbCalendarService } from './jb-calendar.service';

describe('JbCalendarService', () => {
  let service: JbCalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JbCalendarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
