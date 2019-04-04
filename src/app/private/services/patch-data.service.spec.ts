import { TestBed } from '@angular/core/testing';

import { PatchDataService } from './patch-data.service';

describe('PatchDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PatchDataService = TestBed.get(PatchDataService);
    expect(service).toBeTruthy();
  });
});
