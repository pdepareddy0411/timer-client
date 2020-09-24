import { TestBed } from '@angular/core/testing';

import { TimerApiService } from './timer-api.service';

describe('TimerApiService', () => {
  let service: TimerApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimerApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
