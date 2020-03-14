import { TestBed, inject } from '@angular/core/testing';

import { PatentsService } from './patents.service';

describe('PatentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatentsService]
    });
  });

  it('should be created', inject([PatentsService], (service: PatentsService) => {
    expect(service).toBeTruthy();
  }));
});
