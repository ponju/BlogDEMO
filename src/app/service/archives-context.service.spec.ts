import { TestBed } from '@angular/core/testing';

import { ArchivesContextService } from './archives-context.service';

describe('ArchivesContextServiceService', () => {
  let service: ArchivesContextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArchivesContextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
