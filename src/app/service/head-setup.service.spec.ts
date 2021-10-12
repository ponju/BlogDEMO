import { TestBed } from '@angular/core/testing';

import { HeadSetupService } from './head-setup.service';

describe('HeadSetupService', () => {
  let service: HeadSetupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeadSetupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
