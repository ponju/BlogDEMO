import { TestBed } from '@angular/core/testing';

import { ArchiveContextService } from './archive-context.service';

describe('ArchiveContextService', () => {
  let service: ArchiveContextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArchiveContextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
