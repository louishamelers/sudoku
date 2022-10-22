import { TestBed } from '@angular/core/testing';

import { DailyGameService } from './daily-game.service';

describe('DailyGameService', () => {
  let service: DailyGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DailyGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
