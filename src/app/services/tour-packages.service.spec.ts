import { TestBed } from '@angular/core/testing';

import { TourPackagesService } from './tour-packages.service';

describe('TourPackagesService', () => {
  let service: TourPackagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TourPackagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
