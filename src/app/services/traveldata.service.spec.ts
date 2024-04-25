import { TestBed } from '@angular/core/testing';

import { TraveldataService } from './traveldata.service';

describe('TraveldataService', () => {
  let service: TraveldataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraveldataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
