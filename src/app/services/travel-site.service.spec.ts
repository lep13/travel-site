import { TestBed } from '@angular/core/testing';

import { TravelSiteService } from './travel-site.service';

describe('TravelSiteService', () => {
  let service: TravelSiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelSiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
