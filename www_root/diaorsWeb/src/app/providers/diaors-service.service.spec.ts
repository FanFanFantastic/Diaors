import { TestBed, inject } from '@angular/core/testing';

import { DiaorsServiceService } from './diaors-service.service';

describe('DiaorsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiaorsServiceService]
    });
  });

  it('should be created', inject([DiaorsServiceService], (service: DiaorsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
