import { TestBed, inject } from '@angular/core/testing';

import { LogActionService } from './log-action.service';

describe('LogActionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogActionService]
    });
  });

  it('should be created', inject([LogActionService], (service: LogActionService) => {
    expect(service).toBeTruthy();
  }));
});
