import { TestBed } from '@angular/core/testing';

import { UpdateService } from './service/update.service';

describe('UpdateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateService = TestBed.get(UpdateService);
    expect(service).toBeTruthy();
  });
});
